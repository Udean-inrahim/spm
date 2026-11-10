import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { jwt, sign } from 'hono/jwt';
import { z } from 'zod';
import { ALERT_SEVERITY, evaluateReading } from '@dirly/shared';
import type { SoilAlertCandidate } from '@dirly/shared';
import { prisma } from './prisma.js';
import { hashPassword, verifyPassword } from '../lib/password.js';
import { createResetCode, createVerifyCode, verifyResetCode, verifyVerifyCode } from '../lib/verify-code.js';
import { sendResetEmail, sendVerificationEmail } from '../lib/email.js';
import {
  toAlertDTO,
  toReadingDTO,
  toSensorDTO,
  toSettingDTO,
  toUserDTO,
} from '../lib/serialize.js';
import type { Alert, Sensor } from '../generated/client/index.js';

const JWT_SECRET =
  process.env.JWT_SECRET ?? 'dirly-dev-secret-change-me';

const corsOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

export const app = new Hono<{
  Variables: {
    jwtPayload: { sub: string; role: string };
    user: { id: string; role: string };
  };
}>();

app.use(
  '*',
  cors({
    origin: corsOrigins,
    credentials: true,
  }),
);

async function getSettings() {
  return prisma.setting.upsert({
    where: { id: 'singleton' },
    update: {},
    create: { id: 'singleton' },
  });
}

async function createAlerts(sensorId: string, candidates: SoilAlertCandidate[]): Promise<Alert[]> {
  const open = await prisma.alert.findMany({
    where: { sensorId, status: 'ACTIVE', type: { in: candidates.map((c) => c.type) } },
    select: { type: true },
  });
  const openTypes = new Set(open.map((a) => a.type));

  const created: Alert[] = [];
  for (const c of candidates) {
    if (openTypes.has(c.type)) continue;
    created.push(
      await prisma.alert.create({
        data: {
          sensorId,
          type: c.type,
          value: c.value,
          threshold: c.threshold,
          message: c.message,
          severity: ALERT_SEVERITY[c.type],
        },
      }),
    );
  }
  return created;
}

async function resolveAlerts(sensorId: string, keepTypes: Set<string>): Promise<void> {
  await prisma.alert.updateMany({
    where: { sensorId, status: 'ACTIVE', NOT: { type: { in: [...keepTypes] } } },
    data: { status: 'RESOLVED', resolvedAt: new Date() },
  });
}

async function ingestReading(input: { sensor_code: string; soil_moisture: number; temperature?: number }) {
  const sensor = await prisma.sensor.findUnique({ where: { sensorCode: input.sensor_code } });
  if (!sensor) {
    const err = new Error(`Sensor with code "${input.sensor_code}" not found`) as Error & {
      statusCode: number;
    };
    err.statusCode = 404;
    throw err;
  }
  if (!sensor.isActive) {
    const err = new Error('Sensor is disabled') as Error & { statusCode: number };
    err.statusCode = 423;
    throw err;
  }

  const settings = await getSettings();
  const temperature = input.temperature ?? 25;

  const reading = await prisma.reading.create({
    data: {
      sensorId: sensor.id,
      soilMoisture: input.soil_moisture,
      temperature,
    },
  });

  await prisma.sensor.update({
    where: { id: sensor.id },
    data: { lastSeenAt: reading.recordedAt },
  });

  const { alerts } = evaluateReading(input.soil_moisture, temperature, settings);
  const candidateTypes = new Set(alerts.map((a) => a.type));

  await resolveAlerts(sensor.id, new Set([...candidateTypes, 'SENSOR_OFFLINE']));
  const created = await createAlerts(sensor.id, alerts);

  const status =
    input.soil_moisture < settings.minSoilMoisture ||
    input.soil_moisture > settings.maxSoilMoisture ||
    temperature < settings.minTemperature ||
    temperature > settings.maxTemperature;

  return {
    reading: toReadingDTO(reading),
    sensor: toSensorDTO({ ...sensor, latest: reading }, settings.offlineTimeoutSec),
    alertsCreated: created.length,
    abnormal: status,
  };
}

app.get('/', async (c) => c.json({ name: 'dirly-api', docs: '/api/health' }));

app.get('/api/health', async (c) => {
  let db = 'ok';
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    db = 'unreachable';
  }
  return c.json({
    status: db === 'ok' ? 'ok' : 'degraded',
    db,
    time: new Date().toISOString(),
  });
});

const authMiddleware = jwt({ secret: JWT_SECRET, alg: 'HS256' });

app.post('/api/auth/login', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z
    .object({ email: z.string().email(), password: z.string().min(6) })
    .safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Email dan password tidak valid' }, 400);
  }

  const user = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (!user || !(await verifyPassword(parsed.data.password, user.password))) {
    return c.json({ error: 'UNAUTHORIZED', message: 'Email atau password salah' }, 401);
  }
  if (!user.emailVerified) {
    return c.json(
      { error: 'EMAIL_NOT_VERIFIED', message: 'Verifikasi email kamu terlebih dahulu' },
      403,
    );
  }

  const token = await sign({ sub: user.id, role: user.role }, JWT_SECRET);
  return c.json({ token, user: toUserDTO(user) });
});

app.post('/api/auth/register', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z
    .object({
      name: z.string().min(1).max(80),
      email: z.string().email(),
      password: z.string().min(6),
    })
    .safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Data pendaftaran tidak lengkap atau tidak valid' }, 400);
  }

  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    if (existing.emailVerified) {
      return c.json({ error: 'CONFLICT', message: 'Email sudah terdaftar' }, 409);
    }
    const retry = createVerifyCode(email);
    const retrySent = await sendVerificationEmail(email, retry.code);
    return c.json(
      {
        needsVerification: true,
        email,
        expiresAt: retry.expiresAt,
        ...(retrySent ? {} : { demoCode: retry.code }),
      },
      201,
    );
  }

  const userCount = await prisma.user.count();
  const role = userCount === 0 ? 'ADMIN' : 'USER';

  await prisma.user.create({
    data: {
      name: parsed.data.name.trim(),
      email,
      password: await hashPassword(parsed.data.password),
      role,
      emailVerified: false,
    },
  });

  const { code, expiresAt } = createVerifyCode(email);
  const sent = await sendVerificationEmail(email, code);

  return c.json(
    {
      needsVerification: true,
      email,
      expiresAt,
      ...(sent ? {} : { demoCode: code }),
    },
    201,
  );
});

app.post('/api/auth/verify-email', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z
    .object({ email: z.string().email(), code: z.string().length(6) })
    .safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Kode verifikasi tidak valid' }, 400);
  }

  const email = parsed.data.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return c.json({ error: 'NOT_FOUND', message: 'Akun tidak ditemukan' }, 404);
  }
  if (user.emailVerified) {
    return c.json({ error: 'ALREADY_VERIFIED', message: 'Email sudah terverifikasi' }, 409);
  }
  if (!verifyVerifyCode(email, parsed.data.code)) {
    return c.json({ error: 'INVALID_CODE', message: 'Kode salah atau kedaluwarsa' }, 400);
  }

  const updated = await prisma.user.update({
    where: { id: user.id },
    data: { emailVerified: true },
  });
  const token = await sign({ sub: updated.id, role: updated.role }, JWT_SECRET);
  return c.json({ token, user: toUserDTO(updated) });
});

app.post('/api/auth/resend-verification', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z.object({ email: z.string().email() }).safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Email tidak valid' }, 400);
  }

  const email = parsed.data.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return c.json({ error: 'NOT_FOUND', message: 'Akun tidak ditemukan' }, 404);
  }
  if (user.emailVerified) {
    return c.json({ error: 'ALREADY_VERIFIED', message: 'Email sudah terverifikasi' }, 409);
  }

  const { code, expiresAt } = createVerifyCode(email);
  const sent = await sendVerificationEmail(email, code);
  return c.json({ email, expiresAt, ...(sent ? {} : { demoCode: code }) });
});

app.post('/api/auth/request-reset', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z.object({ email: z.string().email() }).safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Email tidak valid' }, 400);
  }

  const email = parsed.data.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return c.json({ error: 'NOT_FOUND', message: 'Email tidak terdaftar' }, 404);
  }

  const { code, expiresAt } = createResetCode(email);
  const sent = await sendResetEmail(email, code);
  return c.json({ email, expiresAt, ...(sent ? {} : { demoCode: code }) });
});

app.post('/api/auth/reset-password', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = z
    .object({
      email: z.string().email(),
      code: z.string().length(6),
      password: z.string().min(6),
    })
    .safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Data reset tidak valid' }, 400);
  }

  const email = parsed.data.email.toLowerCase();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return c.json({ error: 'NOT_FOUND', message: 'Email tidak terdaftar' }, 404);
  }
  if (!verifyResetCode(email, parsed.data.code)) {
    return c.json({ error: 'INVALID_CODE', message: 'Kode salah atau kedaluwarsa' }, 400);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { password: await hashPassword(parsed.data.password) },
  });
  return c.json({ ok: true, message: 'Kata sandi berhasil diperbarui' });
});

app.get('/api/auth/me', authMiddleware, async (c) => {
  const payload = c.get('jwtPayload');
  const user = await prisma.user.findUnique({ where: { id: payload.sub } });
  if (!user) {
    return c.json({ error: 'NOT_FOUND', message: 'User tidak ditemukan' }, 404);
  }
  return c.json({ user: toUserDTO(user) });
});

app.get('/api/sensors', authMiddleware, async (c) => {
  const settings = await getSettings();
  const sensors = await prisma.sensor.findMany({
    orderBy: { createdAt: 'asc' },
    include: { readings: { orderBy: { recordedAt: 'desc' }, take: 1 } },
  });
  return c.json({
    sensors: sensors.map((s) =>
      toSensorDTO({ ...s, latest: s.readings[0] ?? null }, settings.offlineTimeoutSec),
    ),
  });
});

const sensorBody = z.object({
  sensorCode: z.string().min(3).max(30),
  name: z.string().min(1).max(60),
  location: z.string().min(1).max(80),
  plant: z.string().max(80).optional().nullable(),
});

function isAdmin(c: { get: <T>(k: string) => T }): boolean {
  const payload = c.get('jwtPayload') as { sub: string; role: string };
  return payload.role === 'ADMIN';
}

app.post('/api/sensors', authMiddleware, async (c) => {
  if (!isAdmin(c)) {
    return c.json({ error: 'FORBIDDEN', message: 'Khusus admin' }, 403);
  }
  const body = await c.req.json().catch(() => null);
  const parsed = sensorBody.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Data sensor tidak valid' }, 400);
  }
  try {
    const sensor = await prisma.sensor.create({ data: parsed.data });
    return c.json({ sensor: toSensorDTO(sensor) }, 201);
  } catch {
    return c.json(
      { error: 'CONFLICT', message: `Kode sensor ${parsed.data.sensorCode} sudah dipakai` },
      409,
    );
  }
});

app.put('/api/sensors/:id', authMiddleware, async (c) => {
  if (!isAdmin(c)) {
    return c.json({ error: 'FORBIDDEN', message: 'Khusus admin' }, 403);
  }
  const body = await c.req.json().catch(() => null);
  const parsed = sensorBody.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Data sensor tidak valid' }, 400);
  }
  try {
    const sensor = await prisma.sensor.update({
      where: { id: c.req.param('id') },
      data: parsed.data,
    });
    return c.json({ sensor: toSensorDTO(sensor) });
  } catch (err) {
    const code = (err as { code?: string }).code;
    if (code === 'P2025') {
      return c.json({ error: 'NOT_FOUND', message: 'Sensor tidak ditemukan' }, 404);
    }
    if (code === 'P2002') {
      return c.json(
        { error: 'CONFLICT', message: `Kode sensor ${parsed.data.sensorCode} sudah dipakai` },
        409,
      );
    }
    return c.json({ error: 'INTERNAL', message: 'Gagal memperbarui sensor' }, 500);
  }
});

app.patch('/api/sensors/:id/toggle', authMiddleware, async (c) => {
  if (!isAdmin(c)) {
    return c.json({ error: 'FORBIDDEN', message: 'Khusus admin' }, 403);
  }
  try {
    const existing = await prisma.sensor.findUniqueOrThrow({ where: { id: c.req.param('id') } });
    const sensor = await prisma.sensor.update({
      where: { id: c.req.param('id') },
      data: { isActive: !existing.isActive },
    });
    return c.json({ sensor: toSensorDTO(sensor) });
  } catch {
    return c.json({ error: 'NOT_FOUND', message: 'Sensor tidak ditemukan' }, 404);
  }
});

app.delete('/api/sensors/:id', authMiddleware, async (c) => {
  if (!isAdmin(c)) {
    return c.json({ error: 'FORBIDDEN', message: 'Khusus admin' }, 403);
  }
  try {
    await prisma.sensor.delete({ where: { id: c.req.param('id') } });
    return c.body(null, 204);
  } catch {
    return c.json({ error: 'NOT_FOUND', message: 'Sensor tidak ditemukan' }, 404);
  }
});

const ingestSchema = z.object({
  sensor_code: z.string().min(1).max(30),
  soil_moisture: z.number().min(0).max(100),
  temperature: z.number().min(-40).max(80).optional(),
});

app.post('/api/readings', async (c) => {
  const deviceToken = process.env.DEVICE_TOKEN ?? '';
  const token = c.req.header('x-device-token');
  if (deviceToken && token !== deviceToken) {
    return c.json({ error: 'UNAUTHORIZED', message: 'Device token tidak valid' }, 401);
  }

  const body = await c.req.json().catch(() => null);
  const parsed = ingestSchema.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Payload tidak valid' }, 400);
  }
  try {
    const result = await ingestReading(parsed.data);
    return c.json(
      {
        reading: result.reading,
        sensor: result.sensor,
        abnormal: result.abnormal,
      },
      201,
    );
  } catch (err) {
    const statusCode = (err as { statusCode?: number }).statusCode ?? 500;
    const message = err instanceof Error ? err.message : 'Gagal menyimpan data';
    return c.json({ error: 'FAILED', message }, statusCode as 400 | 404 | 423 | 500);
  }
});

app.get('/api/readings', authMiddleware, async (c) => {
  const q = z
    .object({
      sensorId: z.string().optional(),
      from: z.string().datetime().optional(),
      to: z.string().datetime().optional(),
      limit: z.coerce.number().min(1).max(2000).default(500),
    })
    .safeParse({ ...c.req.query(), limit: c.req.query('limit') ?? '500' });
  if (!q.success) {
    return c.json({ error: 'VALIDATION', message: 'Parameter tidak valid' }, 400);
  }
  const { sensorId, from, to, limit } = q.data;
  const readings = await prisma.reading.findMany({
    where: {
      ...(sensorId ? { sensorId } : {}),
      ...(from ? { recordedAt: { gte: new Date(from) } } : {}),
      ...(to ? { recordedAt: { lte: new Date(to) } } : {}),
    },
    orderBy: { recordedAt: 'desc' },
    take: limit,
  });
  return c.json({ readings: readings.map(toReadingDTO) });
});

app.get('/api/readings/latest', authMiddleware, async (c) => {
  const settings = await getSettings();
  const sensors = await prisma.sensor.findMany({
    include: { readings: { orderBy: { recordedAt: 'desc' }, take: 1 } },
  });
  return c.json({
    snapshots: sensors.map((s) => ({
      sensor: toSensorDTO({ ...s, latest: s.readings[0] ?? null }, settings.offlineTimeoutSec),
      latest: s.readings[0] ? toReadingDTO(s.readings[0]) : null,
    })),
  });
});

app.get('/api/dashboard/summary', authMiddleware, async (c) => {
  const settings = await getSettings();
  const sensors = await prisma.sensor.findMany({
    include: { readings: { orderBy: { recordedAt: 'desc' }, take: 1 } },
  });
  const activeAlerts = await prisma.alert.count({ where: { status: 'ACTIVE' } });

  return c.json({
    sensors: sensors.map((s) => ({
      sensor: toSensorDTO({ ...s, latest: s.readings[0] ?? null }, settings.offlineTimeoutSec),
      latest: s.readings[0] ? toReadingDTO(s.readings[0]) : null,
    })),
    settings: {
      minSoilMoisture: settings.minSoilMoisture,
      maxSoilMoisture: settings.maxSoilMoisture,
      minTemperature: settings.minTemperature,
      maxTemperature: settings.maxTemperature,
      refreshIntervalSec: settings.refreshIntervalSec,
      offlineTimeoutSec: settings.offlineTimeoutSec,
      updatedAt: settings.updatedAt.toISOString(),
    },
    activeAlerts,
    updatedAt: new Date().toISOString(),
  });
});

app.get('/api/alerts', authMiddleware, async (c) => {
  const q = z
    .object({
      status: z.enum(['ACTIVE', 'RESOLVED', 'ALL']).default('ALL'),
      severity: z.enum(['INFO', 'WARNING', 'CRITICAL']).optional(),
      sensorId: z.string().optional(),
      limit: z.coerce.number().min(1).max(500).default(100),
    })
    .safeParse({ ...c.req.query(), limit: c.req.query('limit') ?? '100' });
  if (!q.success) {
    return c.json({ error: 'VALIDATION', message: 'Parameter tidak valid' }, 400);
  }
  const { status, severity, sensorId, limit } = q.data;
  const alerts = await prisma.alert.findMany({
    where: {
      ...(status === 'ALL' ? {} : { status }),
      ...(severity ? { severity } : {}),
      ...(sensorId ? { sensorId } : {}),
    },
    include: { sensor: true },
    orderBy: { createdAt: 'desc' },
    take: limit,
  });
  return c.json({
    alerts: alerts.map((a) => toAlertDTO(a, a.sensor ? toSensorDTO(a.sensor) : null)),
  });
});

app.patch('/api/alerts/:id/resolve', authMiddleware, async (c) => {
  try {
    const alert = await prisma.alert.update({
      where: { id: c.req.param('id') },
      data: { status: 'RESOLVED', resolvedAt: new Date() },
      include: { sensor: true },
    });
    return c.json({ alert: toAlertDTO(alert, alert.sensor ? toSensorDTO(alert.sensor) : null) });
  } catch {
    return c.json({ error: 'NOT_FOUND', message: 'Alert tidak ditemukan' }, 404);
  }
});

app.get('/api/settings', authMiddleware, async (c) => {
  const settings = await getSettings();
  return c.json({ settings: toSettingDTO(settings) });
});

const settingsBody = z
  .object({
    minSoilMoisture: z.number().min(0).max(100),
    maxSoilMoisture: z.number().min(0).max(100),
    minTemperature: z.number().min(-40).max(80),
    maxTemperature: z.number().min(-40).max(80),
    refreshIntervalSec: z.number().int().min(1).max(300),
    offlineTimeoutSec: z.number().int().min(10).max(3600),
  })
  .refine((s) => s.minSoilMoisture < s.maxSoilMoisture, {
    message: 'minSoilMoisture harus lebih kecil dari maxSoilMoisture',
  })
  .refine((s) => s.minTemperature < s.maxTemperature, {
    message: 'minTemperature harus lebih kecil dari maxTemperature',
  });

app.put('/api/settings', authMiddleware, async (c) => {
  const payload = c.get('jwtPayload') as { sub: string; role: string };
  if (payload.role !== 'ADMIN') {
    return c.json({ error: 'FORBIDDEN', message: 'Khusus admin' }, 403);
  }
  const body = await c.req.json().catch(() => null);
  const parsed = settingsBody.safeParse(body);
  if (!parsed.success) {
    return c.json({ error: 'VALIDATION', message: 'Pengaturan tidak valid' }, 400);
  }
  const settings = await prisma.setting.upsert({
    where: { id: 'singleton' },
    update: parsed.data,
    create: { id: 'singleton', ...parsed.data },
  });
  return c.json({ settings: toSettingDTO(settings) });
});

export type { Sensor };