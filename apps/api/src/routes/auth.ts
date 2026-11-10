import type { FastifyInstance, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { hashPassword, verifyPassword } from '../lib/password.js';
import { toUserDTO } from '../lib/serialize.js';
import { createResetCode, createVerifyCode, verifyResetCode, verifyVerifyCode } from '../lib/verify-code.js';
import { sendResetEmail, sendVerificationEmail } from '../lib/email.js';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  name: z.string().min(1).max(80),
  email: z.string().email(),
  password: z.string().min(6),
});

const verifySchema = z.object({
  email: z.string().email(),
  code: z.string().length(6),
});

export async function authRoutes(app: FastifyInstance): Promise<void> {
  app.post('/api/auth/login', async (request, reply) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Email dan password tidak valid' });
    }

    const user = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
    if (!user || !(await verifyPassword(parsed.data.password, user.password))) {
      return reply.code(401).send({ error: 'UNAUTHORIZED', message: 'Email atau password salah' });
    }
    if (!user.emailVerified) {
      return reply
        .code(403)
        .send({ error: 'EMAIL_NOT_VERIFIED', message: 'Verifikasi email kamu terlebih dahulu' });
    }

    const token = await reply.jwtSign({ sub: user.id, role: user.role });
    return { token, user: toUserDTO(user) };
  });

  app.post('/api/auth/register', async (request, reply) => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Data pendaftaran tidak lengkap atau tidak valid' });
    }

    const email = parsed.data.email.toLowerCase();
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      if (existing.emailVerified) {
        return reply.code(409).send({ error: 'CONFLICT', message: 'Email sudah terdaftar' });
      }
      const retry = createVerifyCode(email);
      const retrySent = await sendVerificationEmail(email, retry.code);
      return reply.code(201).send({
        needsVerification: true,
        email,
        expiresAt: retry.expiresAt,
        ...(retrySent ? {} : { demoCode: retry.code }),
      });
    }

    const userCount = await prisma.user.count();
    const role = userCount === 0 ? 'ADMIN' : 'USER';

    const user = await prisma.user.create({
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

    return reply.code(201).send({
      needsVerification: true,
      email,
      expiresAt,
      ...(sent ? {} : { demoCode: code }),
    });
  });

  app.post('/api/auth/verify-email', async (request, reply) => {
    const parsed = verifySchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Kode verifikasi tidak valid' });
    }

    const email = parsed.data.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.code(404).send({ error: 'NOT_FOUND', message: 'Akun tidak ditemukan' });
    }
    if (user.emailVerified) {
      return reply.code(409).send({ error: 'ALREADY_VERIFIED', message: 'Email sudah terverifikasi' });
    }
    if (!verifyVerifyCode(email, parsed.data.code)) {
      return reply.code(400).send({ error: 'INVALID_CODE', message: 'Kode salah atau kedaluwarsa' });
    }

    const updated = await prisma.user.update({
      where: { id: user.id },
      data: { emailVerified: true },
    });
    const token = await reply.jwtSign({ sub: updated.id, role: updated.role });
    return { token, user: toUserDTO(updated) };
  });

  app.post('/api/auth/resend-verification', async (request, reply) => {
    const parsed = z.object({ email: z.string().email() }).safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Email tidak valid' });
    }

    const email = parsed.data.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.code(404).send({ error: 'NOT_FOUND', message: 'Akun tidak ditemukan' });
    }
    if (user.emailVerified) {
      return reply.code(409).send({ error: 'ALREADY_VERIFIED', message: 'Email sudah terverifikasi' });
    }

    const { code, expiresAt } = createVerifyCode(email);
    const sent = await sendVerificationEmail(email, code);
    return {
      email,
      expiresAt,
      ...(sent ? {} : { demoCode: code }),
    };
  });

  app.post('/api/auth/request-reset', async (request, reply) => {
    const parsed = z.object({ email: z.string().email() }).safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Email tidak valid' });
    }

    const email = parsed.data.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.code(404).send({ error: 'NOT_FOUND', message: 'Email tidak terdaftar' });
    }

    const { code, expiresAt } = createResetCode(email);
    const sent = await sendResetEmail(email, code);
    return { email, expiresAt, ...(sent ? {} : { demoCode: code }) };
  });

  app.post('/api/auth/reset-password', async (request, reply) => {
    const parsed = z
      .object({
        email: z.string().email(),
        code: z.string().length(6),
        password: z.string().min(6),
      })
      .safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({ error: 'VALIDATION', message: 'Data reset tidak valid' });
    }

    const email = parsed.data.email.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.code(404).send({ error: 'NOT_FOUND', message: 'Email tidak terdaftar' });
    }
    if (!verifyResetCode(email, parsed.data.code)) {
      return reply.code(400).send({ error: 'INVALID_CODE', message: 'Kode salah atau kedaluwarsa' });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { password: await hashPassword(parsed.data.password) },
    });
    return { ok: true, message: 'Kata sandi berhasil diperbarui' };
  });

  app.get('/api/auth/me', async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      return reply.code(401).send({ error: 'UNAUTHORIZED', message: 'Sesi tidak valid' });
    }
    const payload = request.user as { sub: string };
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      return reply.code(404).send({ error: 'NOT_FOUND', message: 'User tidak ditemukan' });
    }
    return { user: toUserDTO(user) };
  });
}

export interface AuthRequest extends FastifyRequest {
  user: { sub: string; role: string };
}