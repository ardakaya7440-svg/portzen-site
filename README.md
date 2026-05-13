# PORTZEN — AI Automation & Growth Infrastructure

Premium AI otomasyon ajansı web sitesi. Next.js App Router, TypeScript, Tailwind CSS ile geliştirildi.

## Hızlı Başlangıç

```bash
# Bağımlılıkları yükle
npm install

# Ortam değişkenlerini ayarla
cp .env.example .env
# .env dosyasını düzenle, gerçek değerleri gir

# Veritabanını oluştur
npm run db:push

# Geliştirme sunucusunu başlat
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Build Alma

```bash
npm run build
npm run start
```

## Ortam Değişkenleri

`.env.example` dosyasını kopyala ve değerleri doldur:

| Değişken | Açıklama |
|----------|----------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL (`https://portzen.com`) |
| `DATABASE_URL` | SQLite (local) veya PostgreSQL (production) bağlantı URL |
| `AUTH_SECRET` | Admin session imzalama anahtarı (64+ karakter) |
| `ADMIN_USERNAME` | Admin paneli kullanıcı adı |
| `ADMIN_PASSWORD` | Admin paneli şifresi |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob token (blog görsel yükleme için) |

> **Güvenlik:** `.env` dosyasını asla Git'e ekleme.

## Vercel Deploy Adımları

1. GitHub reposunu Vercel'e bağla
2. **Environment Variables** bölümüne şunları gir:
   - `NEXT_PUBLIC_SITE_URL` → `https://portzen.com`
   - `DATABASE_URL` → Vercel Postgres connection string
   - `AUTH_SECRET` → Güçlü rastgele değer (aşağıdaki komutla üret)
   - `ADMIN_USERNAME` → Admin kullanıcı adı
   - `ADMIN_PASSWORD` → Güçlü şifre
   - `BLOB_READ_WRITE_TOKEN` → Vercel Storage > Blob > Token
3. Deploy et

```bash
# AUTH_SECRET üretmek için:
node -e "console.log(require('crypto').randomBytes(64).toString('base64'))"
```

## WhatsApp İletişim

Tüm CTA'larda WhatsApp linki kullanılmaktadır.  
Güncellemek için: `lib/site.ts` → `whatsapp` ve `whatsappDisplay` alanları.

## Teknik Stack

- **Framework:** Next.js 16.2 (App Router, webpack)
- **Dil:** TypeScript (strict)
- **Stil:** Tailwind CSS + CSS custom properties (`--pz-*`)
- **Animasyon:** GSAP + ScrollTrigger, Lenis smooth scroll
- **Veritabanı:** Prisma + SQLite (local) / PostgreSQL (production)
- **Auth:** JWT tabanlı admin auth

## Rotalar

### Public
- `/` — Ana sayfa
- `/hakkimizda` — Hakkımızda
- `/hizmetler` + `/hizmetler/[slug]` — Sistem sayfaları
- `/blog` + `/blog/[slug]` — Blog
- `/sss` — Sık sorulan sorular
- `/iletisim` — İletişim formu

### Admin (şifre korumalı)
- `/admin/login`
- `/admin` — Lead listesi
- `/admin/blog` — Blog yönetimi
- `/admin/iletisim` — Form başvuruları

## Güvenlik Notu

- Gerçek credentials (`AUTH_SECRET`, `ADMIN_PASSWORD`) asla repo'ya eklenmemeli
- `AUTH_SECRET` en az 64 karakter olmalı
- Production'da `ADMIN_PASSWORD` güçlü ve eşsiz olmalı
