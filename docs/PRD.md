# SPM - Product Requirement Document (Monitoring Kelembapan Tanah)

Status: living document, diselaraskan dengan implementasi terbaru.
Versi: 2.0 · Terakhir diperbarui: 25 September 2026

---

## 1. Ringkasan

SPM (smart plant monitoring) adalah sistem pemantauan kelembapan tanah (suhu tanah sebagai metrik sekunder) untuk
tanaman di beberapa titik. Sensor kapasitif dibaca oleh ESP32, datanya masuk ke API, disimpan
ke PostgreSQL, dievaluasi terhadap ambang batas menjadi alert, lalu ditampilkan pada dashboard
web yang responsif.

```
Sensor kapasitif -> ESP32 -> POST /api/readings -> API (Hono serverless) -> PostgreSQL (Neon)
                                                          |-> React dashboard (Vercel)
Cloudflare Worker (cron 1 menit) -> simulasi data saat sensor fisik belum ada
```

Produksi berjalan 100% di cloud dan tetap aktif saat komputer/laptop pemiliknya mati.

| Komponen | Layanan | Alamat |
|---|---|---|
| Web (dashboard + login) | Vercel | `https://spm-iot.vercel.app` |
| API (serverless function) | Vercel Functions + Hono | `https://spm-iot.vercel.app/api/*` |
| Database | Neon PostgreSQL (pooled) | region `ap-southeast-1` |
| Penyedia email (kode verifikasi) | Gmail SMTP | pengirim `SPM Monitoring` |
| Simulator data 24/7 | Cloudflare Workers (cron `* * * * *`) | `dirly-simulator` |

## 2. Masalah yang diselesaikan

- Tanaman di rumah kaca/pot sering kekeringan tanpa disadari karena tidak ada monitoring rutin.
- Sulit mengetahui sensor mati (baterai habis, kabel putus) tanpa yang jelas.
- Data pengukuran sebelumnya tersebar di catatan manual, tidak bisa ditrenkan.
- Sistem monitoring harus tetap hidup di luar jam kerja dan saat perangkat owners mati.

## 3. Tujuan & Non-tujuan

### Tujuan
1. Memantau kelembapan tanah beberapa lokasi (pot, bedeng, rumah kaca) secara kontinu.
2. Mendeteksi tanah kering dan basah berlebih otomatis lewat alert.
3. Menyoroti sensor yang offline (tidak mengirim data) dengan status yang jelas.
4. Menyediakan grafik tren + riwayat yang dapat difilter.
5. Menampilkan dashboard yang nyaman di HP maupun desktop.
6. Akun pengguna didaftarkan sendiri melalui email sungguhan (dengan verifikasi).

### Non-tujuan
- Tidak ada kontrol aktuator (pompa/siram otomatis).
- Tidak ada aplikasi mobile native; web responsif saja.
- Tidak ada broker MQTT produksi (lihat §11, batasan platform).
- Tidak ada role-giving dari UI (promosi ke ADMIN dilakukan lewat seed/script).

## 4. Persona & Peran

| Peran | Email contoh | Kemampuan |
|---|---|---|
| Admin | `mbgberacun@example.com` | Semua data, kelola sensor, ubah ambang, selesaikan alert, akses `/pengaturan` |
| User | daftar sendiri | Login, lihat dashboard, riwayat, alert; tidak bisa ubah ambang/kelola sensor |

Aturan role:
- Registrasi publik selalu menghasilkan role `USER` (kecuali database kosong → akun pertama `ADMIN`).
- `POST/PUT /api/sensors*` dan `PUT /api/settings` hanya untuk `ADMIN`.
- Rute `/api/*` lain (baca data) terbuka untuk semua user yang sudah login (JWT).

## 5. Fitur (User Story + Contoh)

### 5.1 Autentikasi & Akun
| ID | User Story | Endpoint |
|---|---|---|
| AU-1 | Sebagai pengguna, saya bisa daftar dengan email sungguhan | `POST /api/auth/register` → perlu verifikasi |
| AU-2 | Saya menerima kode 6 digit via email dan memverifikasinya | `POST /api/auth/verify-email` |
| AU-3 | Saya bisa minta kode verifikasi ulang | `POST /api/auth/resend-verification` |
| AU-4 | Saya login dengan email + password | `POST /api/auth/login` |
| AU-5 | Saya **tidak bisa** login sebelum email terverifikasi | `403 EMAIL_NOT_VERIFIED` |
| AU-6 | Saya bisa reset password sendiri dengan kode | `POST /api/auth/request-reset` → `POST /api/auth/reset-password` |
| AU-7 | Saya logout / sesi invalid mengembalikan ke login | JWT di `localStorage` (`dirly_token`) |

Perilaku penting:
- Kode verifikasi & reset = 6 digit, berlaku 15 menit, dibuat stateless via HMAC (`JWT_SECRET`), tanpa tabel terpisah.
- Bila email gagal terkirim, **kode tetap dikembalikan di respons** (mode demo) dan ditampilkan di layar — registrasi/reset tidak pernah gagal.
- Daftar ulang dengan email yang belum terverifikasi → **kirim ulang kode** (bukan error "sudah terdaftar").

### 5.2 Dashboard
- Kartu ringkasan: kelembapan tanah, suhu, jumlah sensor online.
- Kartu status per sensor: kelembapan, suhu, `ONLINE`/`OFFLINE`/`DISABLED`, waktu baca terakhir.
- Grafik tren kelembapan & suhu (Recharts) dengan pilihan sensor dan rentang waktu (1 jam, 6 jam, 12 jam, 24 jam, 7 hari).
- Ringkasan ambang ideal, jumlah alert aktif, waktu update terakhir.
- Daftar 5 pengukuran terbaru.

### 5.3 Sensor
- Tambah, ubah, aktif/nonaktifkan, hapus (ADMIN).
- Validasi kode sensor unik (3–30 karakter).
- Konfirmasi hapus dengan peringatan data riwayat ikut terhapus.

### 5.4 Riwayat
- Tabel pengukuran dengan filter sensor + rentang tanggal (`from`, `to`), limit default 500.

### 5.5 Peringatan (Alert)
- Daftar alert `ACTIVE` dan riwayat `RESOLVED`, filter status/severity/sensor.
- Alert dapat ditandai selesai (resolve).
- Tipe: `SOIL_LOW`, `SOIL_HIGH`, `TEMP_HIGH`, `SENSOR_OFFLINE`.

### 5.6 Pengaturan (ADMIN)
- Ambang kelembapan min/maks (%), ambang suhu min/maks (°C), interval refresh, timeout offline.
- Validasi `min < max` pada kedua pasangan.

### 5.7 Ingest Data
- `POST /api/readings` dengan header opsional `X-Device-Token`.
  Payload: `{ sensor_code, soil_moisture, temperature? }`; suhu default 25 bila tidak dikirim.
- Sensor code tidak dikenal → `404`; sensor nonaktif → `423`.

## 6. Rule Evaluasi & Alert

- Kelembapan: `SOIL_LOW` jika < `minSoilMoisture`, `SOIL_HIGH` jika > `maxSoilMoisture`.
- Suhu: `TEMP_LOW`/`TEMP_HIGH` di luar `minTemperature`/`maxTemperature`.
- Satu jenis alert per sensor aktif pada satu waktu (dilarang duplikat).
- Alert abnormal **diresolusi otomatis** saat kondisi kembali normal.
- `SENSOR_OFFLINE`: pada backend lokal (Fastify) dibuat oleh heartbeat timer (15 detik); pada backend produksi (serverless) status OFFLINE dihitung dari `isStale(lastSeenAt, offlineTimeoutSec)`.

## 7. Model Data

```
User(id, name, email[unique], password(bcrypt), role, emailVerified, createdAt, updatedAt)
Sensor(id, sensorCode[unique], name, location, plant?, isActive, lastSeenAt?, createdAt, updatedAt)
Reading(id, sensorId→Sensor, soilMoisture, temperature, recordedAt)
Alert(id, sensorId→Sensor, type, value?, threshold?, message, severity, status, createdAt, resolvedAt?)
Setting(id='singleton', minSoilMoisture, maxSoilMoisture, minTemperature, maxTemperature,
        refreshIntervalSec, offlineTimeoutSec, updatedAt)
```

- Role & severity & status diperlakukan sebagai string (enum tidak wajib di DB).
- Akun admin hasil seed: `mbgberacun@example.com` / `admin123` (`emailVerified=true`).

## 8. Arsitektur Teknis

### Monorepo (npm workspaces)
```
dirly/
├─ apps/api      Fastify (dev lokal) + Hono serverless (produksi)
├─ apps/web      React 18 + Vite + Tailwind + TanStack Query + Recharts
├─ packages/shared  tipe & konstanta bersama (isStale, evaluateReading, TIME_RANGES, ...)
├─ api/index.ts  entrypoint Vercel Function (root)
└─ cloudflare/simulator-worker  Worker pengirim data simulasi
```

### API
- **Produksi**: Hono di `apps/api/src/serverless/app.ts`, dibuild `tsc` → `dist/serverless/app.js`, dibungkus `api/index.ts` (adapter Request Web + Node bridge), Prisma 5 + `@prisma/adapter-neon` (Neon Pool).
- **Lokal**: Fastify di `apps/api/src/index.ts` (WebSocket `/ws`, MQTT bridge, heartbeat).
- Prisma client di-generate ke `apps/api/src/generated/client` (driver adapters).
- Validasi Zod di seluruh rute; JWT HS256 (hono/jwt di produksi, @fastify/jwt di lokal).

### Frontend
- `config.ts`: `API_URL` default same-origin (`''`) → request ke `/api/...` (rewrite Vercel).
- `WS_URL` default kosong → WebSocket dinonaktifkan di produksi; **polling** (`refetchInterval = refreshIntervalSec`) menjadi sumber update.
- `authStorage` menyimpan token di `localStorage` dengan key `dirly_token`.

### Deployment
- `vercel.json` format klasik: `buildCommand = npm run build:vercel`, `outputDirectory = apps/web/dist`, rewrite `/api/:path*` → `/api`, `/:path*` → `/index.html`.
- `build:vercel` = `db:generate` → build shared → build serverless API → `db:seed` (idempotent, dilewati bila `DATABASE_URL` kosong) → build web.
- `.vercelignore` mencegah file `.env` ikut ter-deploy.

## 9. Persyaratan Non-Fungsional

| Aspek | Target |
|---|---|
| Availability | API & dashboard 24/7, tidak bergantung pada mesin lokal |
| Performa | Ringkasan dashboard < 1 detik; grafik 60 titik terakhir tanpa lag |
| Responsif | Layout rapi & tanpa horizontal scroll pada 360–1920 px (grid 1 kolom di mobile) |
| Aksesibilitas | Label form, fokus terlihat, status tidak hanya dibedakan warna |
| Keamanan | Password bcrypt (10 rounds), JWT Bearer, device token opsional, secret hanya di env Vercel |
| Observabilitas | Log Vercel; fallback kode di layar bila email gagal |

## 10. Kriteria Penerimaan

1. Admin hasil seed (`mbgberacun@example.com` / `admin123`) login → dashboard tampil, 3 sensor terbaca.
2. User baru mendaftar → menerima kode (email atau layar) → verifikasi → bisa login; sebelum verifikasi login ditolak 403.
3. "Lupa kata sandi?" → kode dikirim → password baru berlaku, password lama ditolak 401.
4. Data baru (simulator/ESP32) muncul di dashboard **tanpa refresh manual** (polling ≤ `refreshIntervalSec`).
5. Sensor diam > `offlineTimeoutSec` → status OFFLINE di UI.
6. ADMIN dapat menambah/mengubah/menghapus sensor & mengubah ambang; USER mendapat 403.
7. Laptop dimatikan → dashboard & data tetap berjalan.

## 11. Batasan & Keputusan-known

- **MQTT tidak dipakai di produksi**: Cloudflare Workers/Vercel Functions bersifat stateless request-per-request, tidak bisa jadi MQTT broker persisten. Ingest produksi memakai HTTP. Bridge MQTT hanya hidup di backend lokal (Fastify) atau bila nanti ada host always-on.
- **Simulator resmi tinggal di Cloudflare Worker**: script `npm run simulate` (Node, tiap 5 detik) hanya untuk development. Kalau keduanya menyala, data dobel.
- **Tidak ada reset password via UI admin**; reset dilakukan pemilik akun sendiri (kode email).
- **App password Gmail** disimpan sebagai secret di Vercel; rotasi dilakukan manual di Google Account.
- Alert `SENSOR_OFFLINE` otomatis tidak dibuat di serverless (tanpa timer); status OFFLINE tetap tampil karena dihitung dari `lastSeenAt`.

## 12. Referensi

- `README.md` — cara menjalankan lokal & deploy.
- `DESIGN.md` — panduan visual & token desain.
- `docs/PRD.md` — dokumen ini.
- Endpoint API terperinci: lihat `apps/api/src/serverless/app.ts` (produksi) & `apps/api/src/routes/*` (lokal).
