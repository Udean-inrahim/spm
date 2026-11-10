import nodemailer, { type Transporter } from 'nodemailer';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';
const SENDER_NAME = 'SPM Monitoring';

type Sender = { name: string; email: string };

function parseFrom(fallbackEmail: string): Sender {
  const raw = (process.env.EMAIL_FROM ?? '').trim();
  const match = /^(.*?)\s*<([^>]+)>\s*$/.exec(raw);
  if (match) {
    return { name: match[1].replace(/^"|"$/g, '') || SENDER_NAME, email: match[2] };
  }
  if (raw.includes('@')) {
    return { name: process.env.EMAIL_SENDER_NAME ?? SENDER_NAME, email: raw };
  }
  return { name: SENDER_NAME, email: fallbackEmail };
}

export function emailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST || process.env.BREVO_API_KEY || process.env.RESEND_API_KEY);
}

let smtpTransporter: Transporter | null = null;

function getSmtpTransporter(): Transporter | null {
  if (!process.env.SMTP_HOST) return null;
  if (!smtpTransporter) {
    const secure = (process.env.SMTP_SECURE ?? 'true') !== 'false';
    smtpTransporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 465),
      secure,
      requireTLS: !secure,
      auth: process.env.SMTP_USER
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
    });
  }
  return smtpTransporter;
}

async function sendViaSmtp(to: string, subject: string, html: string): Promise<boolean> {
  const transporter = getSmtpTransporter();
  if (!transporter) return false;
  const sender = parseFrom(process.env.EMAIL_SENDER ?? process.env.SMTP_USER ?? '');
  if (!sender.email) {
    console.error('SMTP: set EMAIL_FROM (mis. "SPM Monitoring <email@domain.com>")');
    return false;
  }
  try {
    await transporter.sendMail({
      from: `${sender.name} <${sender.email}>`,
      to,
      subject,
      html,
    });
    return true;
  } catch (err) {
    console.error('Gagal mengirim email via SMTP:', err);
    return false;
  }
}

async function sendViaBrevo(to: string, subject: string, html: string): Promise<boolean> {
  const apiKey = process.env.BREVO_API_KEY as string;
  const sender = parseFrom(process.env.EMAIL_SENDER ?? '');
  if (!sender.email) {
    console.error('Brevo: set EMAIL_FROM (mis. "SPM Monitoring <email@terverifikasi.com>")');
    return false;
  }
  try {
    const res = await fetch(BREVO_ENDPOINT, {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        sender: { name: sender.name, email: sender.email },
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      console.error('Brevo error:', res.status, await res.text().catch(() => ''));
    }
    return res.ok;
  } catch (err) {
    console.error('Gagal mengirim email via Brevo:', err);
    return false;
  }
}

async function sendViaResend(to: string, subject: string, html: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY as string;
  const from = process.env.EMAIL_FROM ?? `${SENDER_NAME} <onboarding@resend.dev>`;
  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ from, to: [to], subject, html }),
    });
    if (!res.ok) {
      console.error('Resend error:', res.status, await res.text().catch(() => ''));
    }
    return res.ok;
  } catch (err) {
    console.error('Gagal mengirim email via Resend:', err);
    return false;
  }
}

async function sendEmail(to: string, subject: string, html: string): Promise<boolean> {
  if (process.env.SMTP_HOST) return sendViaSmtp(to, subject, html);
  if (process.env.BREVO_API_KEY) return sendViaBrevo(to, subject, html);
  if (process.env.RESEND_API_KEY) return sendViaResend(to, subject, html);
  return false;
}

export async function sendVerificationEmail(to: string, code: string): Promise<boolean> {
  return sendEmail(
    to,
    'Kode Verifikasi Email - SPM Monitoring',
    `
      <div style="font-family:sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Verifikasi Email</h2>
        <p>Masukkan kode berikut untuk mengaktifkan akunmu:</p>
        <p style="font-size:28px;font-weight:bold;letter-spacing:6px;margin:16px 0">${code}</p>
        <p>Kode berlaku 15 menit.</p>
        <p style="color:#666;font-size:13px">Jika kamu tidak mendaftar, abaikan email ini.</p>
      </div>
    `,
  );
}

export async function sendResetEmail(to: string, code: string): Promise<boolean> {
  return sendEmail(
    to,
    'Kode Reset Kata Sandi - SPM Monitoring',
    `
      <div style="font-family:sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px">Reset Kata Sandi</h2>
        <p>Masukkan kode berikut untuk mengatur ulang kata sandi akunmu:</p>
        <p style="font-size:28px;font-weight:bold;letter-spacing:6px;margin:16px 0">${code}</p>
        <p>Kode berlaku 15 menit.</p>
        <p style="color:#666;font-size:13px">Jika kamu tidak meminta reset, abaikan email ini.</p>
      </div>
    `,
  );
}
