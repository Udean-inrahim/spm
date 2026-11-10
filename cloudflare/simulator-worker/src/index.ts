interface Env {
  API_BASE: string;
  DEVICE_TOKEN: string;
}

const SENSORS = ['SM-001', 'SM-002', 'SM-003'];

const rng = (min: number, max: number): number =>
  Math.round((min + Math.random() * (max - min)) * 10) / 10;

function nextReading(code: string, tick: number): { soil_moisture: number; temperature: number } {
  const seed = Number(code.slice(-1));
  const phase = tick * 17 + seed * 40;

  const baseSoil = 48 + Math.sin(phase / 9) * 10;
  const baseTemp = 26 + Math.sin(phase / 13) * 3;
  const dry = code === 'SM-001' && tick % 40 > 30;

  const soil = dry ? rng(8, 24) : rng(baseSoil - 4, baseSoil + 4);
  const temperature = rng(baseTemp - 1.5, baseTemp + 1.5);

  return {
    soil_moisture: Math.max(0, Math.min(100, soil)),
    temperature,
  };
}

export default {
  async scheduled(_event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(sendAll(env));
  },
};

async function sendAll(env: Env): Promise<void> {
  const tick = Math.floor(Date.now() / 60_000);

  for (const code of SENSORS) {
    const reading = nextReading(code, tick);
    try {
      const res = await fetch(`${env.API_BASE}/api/readings`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-device-token': env.DEVICE_TOKEN,
        },
        body: JSON.stringify({ sensor_code: code, ...reading }),
      });

      if (!res.ok) {
        console.error(`[sim] ${code} -> ${res.status} ${await res.text()}`);
      } else {
        console.log(`[sim] ${code} soil=${reading.soil_moisture}% temp=${reading.temperature}C`);
      }
    } catch (err) {
      console.error(`[sim] ${code} gagal: ${err instanceof Error ? err.message : String(err)}`);
    }
  }
}
