import { createHmac } from 'node:crypto';

const TTL_MS = 15 * 60 * 1000;

function secret(): string {
  return process.env.VERIFY_CODE_SECRET ?? process.env.JWT_SECRET ?? 'dirly-dev-secret-change-me';
}

function bucketAt(now: number): number {
  return Math.floor(now / TTL_MS);
}

function codeFor(purpose: string, email: string, bucket: number): string {
  const digest = createHmac('sha256', secret())
    .update(`${purpose}:${email.trim().toLowerCase()}:${bucket}`)
    .digest('hex');
  const num = parseInt(digest.slice(0, 8), 16) % 1_000_000;
  return String(num).padStart(6, '0');
}

function makeCode(purpose: string, email: string, now: number): { code: string; expiresAt: string } {
  const bucket = bucketAt(now);
  return {
    code: codeFor(purpose, email, bucket),
    expiresAt: new Date((bucket + 1) * TTL_MS).toISOString(),
  };
}

function checkCode(purpose: string, email: string, code: string, now: number): boolean {
  const bucket = bucketAt(now);
  const normalized = code.trim();
  return (
    normalized === codeFor(purpose, email, bucket) ||
    normalized === codeFor(purpose, email, bucket - 1)
  );
}

export function createVerifyCode(email: string, now = Date.now()): { code: string; expiresAt: string } {
  return makeCode('verify', email, now);
}

export function verifyVerifyCode(email: string, code: string, now = Date.now()): boolean {
  return checkCode('verify', email, code, now);
}

export function createResetCode(email: string, now = Date.now()): { code: string; expiresAt: string } {
  return makeCode('reset', email, now);
}

export function verifyResetCode(email: string, code: string, now = Date.now()): boolean {
  return checkCode('reset', email, code, now);
}
