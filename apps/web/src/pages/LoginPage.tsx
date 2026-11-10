import { useState, type FormEvent, type ReactNode } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { ApiRequestError } from '@/lib/api';

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3.5 7l8.5 5.5L20.5 7" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <rect x="4.5" y="10" width="15" height="9.5" rx="2.5" />
      <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <path d="M20 21v-1.5a4.5 4.5 0 0 0-4.5-4.5h-7A4.5 4.5 0 0 0 4 19.5V21" />
      <circle cx="12" cy="7.5" r="3.5" />
    </svg>
  );
}

function EyeIcon({ open }: { open: boolean }) {
  return open ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
      <line x1="4" y1="20" x2="20" y2="4" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <path d="M12 3l7 3v5.5c0 4.2-2.9 8-7 9.5-4.1-1.5-7-5.3-7-9.5V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function Field({ label, icon, children }: { label: string; icon: ReactNode; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[13px] font-medium text-[#3c3a36]">{label}</label>
      <div className="relative">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8d938c]">{icon}</span>
        {children}
      </div>
    </div>
  );
}

const inputClass =
  'h-12 w-full rounded-xl border border-transparent bg-[#f1f3f0] pl-11 pr-4 text-[15px] text-[#1f2420] outline-none transition-colors placeholder:text-[#9aa09a] focus:border-[#6ba53a] focus:bg-white';

export function LoginPage() {
  const { user, login, register } = useAuth();
  const navigate = useNavigate();
  const { verifyEmail, resendVerification, requestReset, resetPassword } = useAuth();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [resetStep, setResetStep] = useState<'email' | 'code' | null>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [resetPasswordValue, setResetPasswordValue] = useState('');
  const [resetDemoCode, setResetDemoCode] = useState<string | null>(null);
  const [resetDone, setResetDone] = useState(false);
  const [pendingEmail, setPendingEmail] = useState<string | null>(null);
  const [code, setCode] = useState('');
  const [demoCode, setDemoCode] = useState<string | null>(null);
  const [resendNote, setResendNote] = useState<string | null>(null);

  if (user) return <Navigate to="/" replace />;

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (pendingEmail) {
        await verifyEmail(pendingEmail, code.trim());
        navigate('/', { replace: true });
        return;
      }
      if (mode === 'register') {
        const res = await register(name.trim(), email.trim(), password);
        setPendingEmail(res.email);
        setDemoCode(res.demoCode ?? null);
        setCode('');
        setResendNote(null);
      } else {
        await login(email.trim(), password);
        navigate('/', { replace: true });
      }
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Terjadi kesalahan. Coba lagi nanti.',
      );
    } finally {
      setBusy(false);
    }
  }

  async function onResend() {
    if (!pendingEmail) return;
    setError(null);
    setResendNote(null);
    setBusy(true);
    try {
      const res = await resendVerification(pendingEmail);
      setDemoCode(res.demoCode ?? null);
      setResendNote('Kode baru sudah dikirim ke email kamu.');
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Gagal mengirim ulang kode.',
      );
    } finally {
      setBusy(false);
    }
  }

  async function onRequestReset() {
    setError(null);
    setBusy(true);
    try {
      const res = await requestReset(resetEmail.trim());
      setResetDemoCode(res.demoCode ?? null);
      setResetStep('code');
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Gagal mengirim kode reset.',
      );
    } finally {
      setBusy(false);
    }
  }

  async function onSubmitReset() {
    setError(null);
    setBusy(true);
    try {
      await resetPassword(resetEmail.trim(), resetCode.trim(), resetPasswordValue);
      setResetDone(true);
    } catch (err) {
      setError(
        err instanceof ApiRequestError ? err.message : 'Gagal memperbarui kata sandi.',
      );
    } finally {
      setBusy(false);
    }
  }

  function closeReset() {
    setResetStep(null);
    setResetEmail('');
    setResetCode('');
    setResetPasswordValue('');
    setResetDemoCode(null);
    setResetDone(false);
    setError(null);
  }

  function switchMode(next: 'login' | 'register') {
    setMode(next);
    setError(null);
    setShowHint(false);
    setPendingEmail(null);
    setDemoCode(null);
    setResendNote(null);
    setCode('');
    closeReset();
  }

  return (
    <div className="min-h-screen bg-white lg:grid lg:h-screen lg:grid-cols-[1.45fr_1fr] lg:overflow-hidden">
      <section className="relative h-[40vh] min-h-[230px] w-full overflow-hidden lg:sticky lg:top-0 lg:h-screen">
        <img
          src="/login-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/25 lg:from-black/45 lg:via-black/20 lg:to-black/5"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 lg:hidden"
          aria-hidden
        />
        <div className="relative flex h-full flex-col justify-between p-6 text-white lg:p-12">
          <span className="text-[22px] font-bold tracking-tight lg:text-[26px]">SPM</span>
          <div>
            <h1 className="max-w-[460px] text-[25px] font-bold leading-[1.14] tracking-[-0.02em] sm:text-[32px] lg:text-[44px] lg:leading-[1.08]">
              Setiap hal besar dimulai dari hal kecil
            </h1>
            <p className="mt-2 max-w-[420px] text-[14px] text-white/90 sm:text-[15px] lg:mt-4 lg:text-[17px]">
              Masuk dan lanjutkan merawat tanamanmu.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white lg:h-screen lg:overflow-y-auto">
        <div className="relative flex min-h-full flex-col items-center justify-center px-5 py-10 sm:px-8">

        <div className="w-full max-w-[380px] rounded-[26px] border border-[#e6e6e1] bg-white p-6 shadow-[0_24px_60px_-32px_rgba(45,55,40,0.35)] sm:p-9">
          <h2 className="text-center text-[22px] font-semibold tracking-[-0.01em] text-[#1f2420]">
            {pendingEmail
              ? 'Verifikasi email kamu'
              : mode === 'register'
                ? 'Buat akun baru'
                : 'Masuk ke akun Anda'}
          </h2>
          <p className="mt-1.5 text-center text-[13.5px] text-[#868b85]">
            {pendingEmail
              ? `Kode 6 digit sudah dikirim ke ${pendingEmail}`
              : mode === 'register'
                ? 'Daftar untuk mulai memantau tanaman'
                : 'Selamat datang kembali'}
          </p>

          {demoCode ? (
            <div className="mt-5 rounded-xl border border-[#e7dcc0] bg-[#fdf7e7] px-3.5 py-3 text-center text-[13px] text-[#7a6320]">
              <p>Email belum dikonfigurasi, jadi kode ditampilkan di sini:</p>
              <p className="mt-1.5 text-[22px] font-bold tracking-[6px] text-[#5d4a14]">{demoCode}</p>
            </div>
          ) : null}

          {resendNote ? (
            <p className="mt-4 rounded-xl bg-[#eef5e9] px-3.5 py-2.5 text-center text-[13px] text-[#456232]">
              {resendNote}
            </p>
          ) : null}

          {error ? (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-[#f0d3d0] bg-[#fdeeec] px-3.5 py-2.5 text-[13.5px] text-[#b23c2f]"
            >
              {error}
            </div>
          ) : null}

          <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
            {pendingEmail ? (
              <Field label="Kode verifikasi" icon={<ShieldIcon />}>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  placeholder="6 digit kode"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  className={`${inputClass} tracking-[6px]`}
                />
              </Field>
            ) : (
              <>
            {mode === 'register' ? (
              <Field label="Nama lengkap" icon={<UserIcon />}>
                <input
                  type="text"
                  placeholder="Masukkan nama"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </Field>
            ) : null}

            <div className={resetStep ? 'hidden' : 'contents'}>
            <Field label="Alamat email" icon={<MailIcon />}>
              <input
                type="email"
                placeholder="Masukkan email Anda"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </Field>

            <Field label="Kata sandi" icon={<LockIcon />}>
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="Masukkan kata sandi"
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-12`}
              />
              <button
                type="button"
                aria-label={showPw ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-3 top-1/2 flex -translate-y-1/2 cursor-pointer border-none bg-transparent p-1 text-[#8d938c] transition-colors hover:text-[#4f7d2f]"
              >
                <EyeIcon open={showPw} />
              </button>
            </Field>
            </div>

            {mode === 'login' ? (
              resetStep ? (
                <div className="space-y-3 rounded-2xl border border-[#e6e6e1] bg-[#fafbf8] p-4 text-left">
                  {resetDone ? (
                    <>
                      <p className="text-[13.5px] font-medium text-[#3f6b2a]">
                        Kata sandi berhasil diperbarui.
                      </p>
                      <button
                        type="button"
                        onClick={closeReset}
                        className="cursor-pointer border-none bg-transparent p-0 text-[13px] font-medium text-[#4f7d2f] hover:underline"
                      >
                        Kembali ke login
                      </button>
                    </>
                  ) : resetStep === 'email' ? (
                    <>
                      <p className="text-[13px] text-[#5c615b]">
                        Masukkan email akunmu, kami kirim kode untuk mengganti kata sandi.
                      </p>
                      <div className="relative">
                        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8d938c]">
                          <MailIcon />
                        </span>
                        <input
                          type="email"
                          placeholder="Alamat email"
                          required
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                          className={`${inputClass} pl-11`}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={closeReset}
                          className="h-11 flex-1 cursor-pointer rounded-xl border border-[#dedcd6] bg-white text-[14px] font-semibold text-[#33322e] transition-colors hover:bg-[#f7f6f2]"
                        >
                          Batal
                        </button>
                        <button
                          type="button"
                          onClick={onRequestReset}
                          disabled={busy || !resetEmail.trim()}
                          className="h-11 flex-1 cursor-pointer rounded-xl border-none bg-[#5a9e32] text-[14px] font-semibold text-white transition-colors hover:bg-[#4d8a29] disabled:opacity-60"
                        >
                          {busy ? 'Mengirim...' : 'Kirim kode'}
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <p className="text-[13px] text-[#5c615b]">
                        Kode dikirim ke {resetEmail}. Masukkan kode dan kata sandi baru.
                      </p>
                      {resetDemoCode ? (
                        <p className="rounded-xl border border-[#e7dcc0] bg-[#fdf7e7] px-3 py-2 text-center text-[13px] text-[#7a6320]">
                          Email belum terkonfigurasi, kode:{' '}
                          <span className="font-bold tracking-[3px]">{resetDemoCode}</span>
                        </p>
                      ) : null}
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="Kode 6 digit"
                        value={resetCode}
                        onChange={(e) => setResetCode(e.target.value.replace(/\D/g, ''))}
                        className="h-12 w-full rounded-xl border border-transparent bg-[#f1f3f0] px-4 text-center text-[15px] tracking-[6px] text-[#1f2420] outline-none transition-colors placeholder:tracking-normal placeholder:text-[#9aa09a] focus:border-[#6ba53a] focus:bg-white"
                      />
                      <input
                        type="password"
                        placeholder="Kata sandi baru"
                        autoComplete="new-password"
                        minLength={6}
                        value={resetPasswordValue}
                        onChange={(e) => setResetPasswordValue(e.target.value)}
                        className={inputClass}
                      />
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setResetStep('email')}
                          className="h-11 flex-1 cursor-pointer rounded-xl border border-[#dedcd6] bg-white text-[14px] font-semibold text-[#33322e] transition-colors hover:bg-[#f7f6f2]"
                        >
                          Ganti email
                        </button>
                        <button
                          type="button"
                          onClick={onSubmitReset}
                          disabled={busy || resetCode.length !== 6 || resetPasswordValue.length < 6}
                          className="h-11 flex-1 cursor-pointer rounded-xl border-none bg-[#5a9e32] text-[14px] font-semibold text-white transition-colors hover:bg-[#4d8a29] disabled:opacity-60"
                        >
                          {busy ? 'Menyimpan...' : 'Simpan'}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-right">
                  <button
                    type="button"
                    onClick={() => {
                      setResetStep('email');
                      setError(null);
                    }}
                    className="cursor-pointer border-none bg-transparent p-0 text-[13px] font-medium text-[#4f7d2f] hover:underline"
                  >
                    Lupa kata sandi?
                  </button>
                  {showHint ? (
                    <p className="mt-2 rounded-xl bg-[#eef5e9] px-3.5 py-2.5 text-left text-[12.5px] text-[#456232]">
                      Akun bawaan: mbgberacun@example.com / admin123
                    </p>
                  ) : null}
                </div>
              )
            ) : null}

            <button
              type="submit"
              disabled={busy}
              className={`h-12 w-full cursor-pointer rounded-xl border-none bg-[#5a9e32] text-[15px] font-semibold text-white transition-colors hover:bg-[#4d8a29] disabled:cursor-not-allowed disabled:opacity-60 ${resetStep ? 'hidden' : ''}`}
            >
              {busy ? 'Memproses...' : mode === 'register' ? 'Daftar' : 'Masuk'}
            </button>

            <div className={`items-center gap-3 py-1 text-[13px] text-[#a1a6a0] ${resetStep ? 'hidden' : 'flex'}`}>
              <span className="h-px flex-1 bg-[#e6e4df]" />
              atau
              <span className="h-px flex-1 bg-[#e6e4df]" />
            </div>

            <button
              type="button"
              onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}
              className={`h-12 w-full cursor-pointer rounded-xl border border-[#dedcd6] bg-white text-[15px] font-semibold text-[#33322e] transition-colors hover:bg-[#f7f6f2] ${resetStep ? 'hidden' : ''}`}
            >
              {mode === 'login' ? 'Daftar akun baru' : 'Masuk dengan akun yang ada'}
            </button>
              </>
            )}

            {pendingEmail ? (
              <button
                type="submit"
                disabled={busy}
                className="h-12 w-full cursor-pointer rounded-xl border-none bg-[#5a9e32] text-[15px] font-semibold text-white transition-colors hover:bg-[#4d8a29] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {busy ? 'Memproses...' : 'Verifikasi'}
              </button>
            ) : null}

            {pendingEmail ? (
              <div className="space-y-3 text-center">
                <button
                  type="button"
                  onClick={onResend}
                  disabled={busy}
                  className="h-12 w-full cursor-pointer rounded-xl border border-[#dedcd6] bg-white text-[15px] font-semibold text-[#33322e] transition-colors hover:bg-[#f7f6f2] disabled:opacity-60"
                >
                  Kirim ulang kode
                </button>
                <p className="text-[13px] text-[#868b85]">
                  Salah email?{' '}
                  <button
                    type="button"
                    onClick={() => switchMode('register')}
                    className="cursor-pointer border-none bg-transparent p-0 font-medium text-[#4f7d2f] hover:underline"
                  >
                    Ubah data
                  </button>
                </p>
              </div>
            ) : null}
          </form>

          <p className={`mt-5 text-center text-[13px] text-[#868b85] ${resetStep ? 'hidden' : ''}`}>
            {pendingEmail
              ? 'Kode berlaku 15 menit.'
              : mode === 'login'
                ? 'Belum punya akun? Daftar di atas.'
                : 'Sudah punya akun? Masuk di atas.'}
          </p>
        </div>
        </div>
      </section>
    </div>
  );
}
