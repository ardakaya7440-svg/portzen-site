# PORTZEN — Site Yeniden Tasarım Brief'i (Claude için)

**Rol:** Sen kıdemli bir dijital ürün + marka tasarımcısısın. Aşağıdaki brief'i uygulayacaksın. Kendi kararların için yerinden esnetebilirsin ama **ihlal edilemez kurallar** bölümünü asla değiştirme.

**Teslim edilecek:**
1. Design tokens (globals.css + tailwind.config.ts patch)
2. Layout & Navbar & Footer refactor
3. Anasayfa yeniden inşa (`app/page.tsx`)
4. 5 ana hedef sayfa template (dinamik hizmet sayfaları)
5. Blog listesi + makale detay refactor
6. Referanslar sayfası
7. Hakkımızda + İletişim
8. Ortak komponent kütüphanesi (aşağıdaki liste)
9. Motion prensipleri (Framer Motion veya CSS)
10. Dark mode desteği
11. Responsive breakpoints
12. Accessibility (WCAG 2.1 AA)
13. Lighthouse ≥95 hedefi

---

## 🚫 İHLAL EDİLEMEZ KURALLAR

### 1. FİYAT YASAK
- **Hiçbir sayfada hiçbir yerde fiyat, paket, TL rakamı, "aylık", "başlangıç fiyatı", "5.000 TL", "premium", "profesyonel paket" gibi ifade GEÇMEZ.**
- Fiyat sayfaları silinir: `app/whatsapp-chatbot-fiyat/` → tamamen kaldırılacak
- `content/landings/**/*.json` içindeki `pricing` alanları render EDİLMEYECEK (JSON'da kalabilir, komponent skip etsin)
- SectorLandingTemplate.tsx içindeki fiyat bölümü tamamen çıkarılacak
- FAQ'da fiyat sorusu varsa "kişisel görüşmede net rakam veriyoruz, brief alalım" tarzı yanıtla değiştir
- CTA hep: **"Görüşme Al"**, **"Brief Bırak"**, **"Süreç Başlat"**, **"Ücretsiz Audit İste"** — fiyata yönlendiren hiçbir kelime yok

### 2. BRAND ADI
- **PORTZEN** yaz. `portzenai`, `Portzen AI`, `PortzenAI` YASAK.
- Metadata, footer, structured data — her yerde `PORTZEN`
- `portzenai.com` domain'i şu an aktif ama kaldırılacak. Yeni canonical: `portzen.com`
- `metadataBase` → `https://portzen.com`
- email: `destek@portzen.com`

### 3. SEO ZARARI OLMASIN
Mevcut URL yapısı **KESİNLİKLE** korunacak. 302/301 redirect gerekli DEĞİL çünkü path'ler aynı kalıyor:
- `/blog/*` — 95 makale, aynı slug
- `/blog/kategori/*`
- `/blog/sayfa/[number]` — pagination
- `/[hizmet]` — 15+ ana hedef sayfa
- `/[hizmet]/[sektor]` — 5 hizmet × 25 sektör = 125 dinamik landing (aynı)
- `/[yazılım]-alternatifi` — 15 karşılaştırma sayfası
- Yasal: `/kvkk`, `/gizlilik-politikasi`, `/kullanim-sartlari`
- Silinen: `/whatsapp-chatbot-fiyat` (kaldırılacak, sitemap'ten çıkarılacak)

Metadata, Schema.org, hreflang, canonical, OpenGraph — tümü yeniden yazılacak ama `portzen.com` üzerinden.

### 4. STACK KİLİDİ
- Next.js 15 App Router (değişmeyecek)
- TypeScript strict
- Tailwind CSS (v3.4+)
- Framer Motion (motion için — 15KB gzip, hafif kullanım)
- `next/font/google` (self-host)
- `next/image` her yerde (hiç `<img>` yok)
- MDX/markdown blog (gray-matter, remark) — mevcut lib korunacak

---

## 🎨 MARKA KİMLİĞİ

### Ne Yapıyoruz
PORTZEN, Türkiye'deki KOBİ'ler için AI destekli büyüme altyapısı kuruyor. Beş ayrı ajans (sosyal medya + web + reklam + otomasyon + CRM) yerine tek ekipten tüm sistemi teslim ediyoruz.

### Slogan
**"Beş ajans yerine tek ekip."**

### Alt slogan alternatifleri (rotasyon)
- "AI ile kurulur, insan ile büyür."
- "Sistemini kur, marka olarak büyü."
- "Marka değil altyapı satıyoruz."

### Ton
- Doğrudan, güçlü, gerçekçi
- Ajans jargonu YOK ("sinerji", "360 derece çözüm", "dijital dönüşüm partner'i" — hiç yazma)
- Kısa cümle, keskin nokta
- Rakam ver (organik trafik %1.500 arttı, 18 günde teslim, 180 rezervasyon/ay) — ama para değil
- Hitap: "Sen" — samimi, kişisel
- Emoji YOK (Reels dışında)

### Hedef Kitle
Restoran, klinik, hukuk bürosu, inşaat, otomotiv galerisi, butik mağaza, eczane, online koç sahipleri. 30-55 yaş, ajans bütçesi olmayan, sonuç bekleyen operasyonel işletme sahibi.

---

## 🎨 GÖRSEL YÖN — 2 ALTERNATİF, SEN SEÇ

Kullanıcıya iki yön sunacaksın. Her ikisi için de tam mock çık.

### YÖN A — "Editorial Brutalism 2.0"
Mevcut neobrutalist yapının **rafine** hali. Kaba değil ama karakterli. Referans: Vercel × Linear × Cash App'in kesişimi.

**Renk paleti:**
- `paper` — `#FBFAF5` (kağıt, hafif krem)
- `ink` — `#0B0B0C` (mürekkep)
- `accent-primary` — `#FFE04A` (elektrik sarısı, ana vurgu)
- `accent-warm` — `#FF6A2B` (turuncu, ikinci)
- `accent-cool` — `#3B60E4` (mavi, üçüncü)
- `mute` — `#F0EEE6` (kart yüzeyi, hafif kirli beyaz)
- `divider` — `#0B0B0C` @ 12% opacity
- **Gradient YOK**, saf blok renk. Yumuşak gölge YOK, sert offset var (3-6px).

**Tipografi:**
- **Display:** `Söhne Breit` (varsa) → fallback `Instrument Serif` italic vurgu + `Söhne` düz. Ya da `Fraunces` (Google Fonts — expressive header) + `Inter` (body).
- **Body:** `Inter` (400/500/600), `Söhne` (varsa premium)
- **Fontsize scale:** 12/14/16/18/22/28/36/48/64/96 (major third)
- **Line-height:** display 1.02, body 1.6
- **Letter-spacing:** display -0.03em, body -0.005em, uppercase eyebrow +0.08em
- **Weights:** 400 body, 500 semibold, 800 display (900 vurgu için)

**Grid:**
- Container max 1240px, 12 column, gutter 24px (mobil 16px)
- Section padding: `clamp(80px, 8vw, 160px)`
- Bento grid'ler asimetrik — 2:1, 1:2, 3:1 varyasyonları

**Border & shadow:**
- Border 2px (3px'ten 2px'e ince) — daha rafine
- Offset shadow: `4px 4px 0` (sm), `6px 6px 0` (md), `10px 10px 0` (lg)
- Hover: `-translate 2px, +shadow 2px` — offset büyür
- Radius: `6px` (küçük), `12px` (kart), `24px` (hero blok) — mevcut 12px'ten çeşitlenir

**İllüstrasyon:**
- Kendi ürettiğimiz AI görselleri (Higgsfield/Soul ID karakterler + product mockup)
- Hero'da video (Kıvanç Reels + Luxury Reels + Derya karakterinden döngü)
- Illüstrasyon: minimalist line art + tek renk fill (accent-primary)

**Motion:**
- Scroll reveal: 500ms cubic-bezier(0.2, 0.9, 0.3, 1), 16px translateY
- Hover: 200ms
- Sayfa geçiş: 300ms fade
- Reduced motion desteği (mevcut)

---

### YÖN B — "Dark Studio"
Karanlık, sinematik, "AI studio" duruşu. Referans: Runway, Higgsfield, ElevenLabs. Karakter: mürekkep zemin, neon vurgu, motion ağırlık.

**Renk paleti:**
- `bg` — `#0A0A0B` (bg base)
- `bg-elevated` — `#141416` (kart)
- `fg` — `#F5F5F4` (metin)
- `fg-mute` — `#A1A1AA` (secondary)
- `accent` — `#00E5A0` (neon yeşil, tek vurgu)
- `warn` — `#FFB020` (uyarı sarısı)
- `divider` — `#F5F5F4` @ 8%
- Gradient bg noktası: mesh gradient (`accent` %5 → transparent)

**Tipografi:**
- **Display:** `Neue Haas Grotesk Display` (Custom → Google alt: `Space Grotesk`) — 800/900
- **Body:** `Inter` 400/500
- **Mono:** `JetBrains Mono` — code + data

**Motion:**
- Framer Motion + IntersectionObserver
- Hero'da parallax + video BG (Luxury Reels döngü)
- Stagger children animasyonu (grid card'larda 60ms delay)
- Hover: subtle glow (`box-shadow: 0 0 40px accent @ 30%`)
- Cursor tracker (opsiyonel — accent noktası mouse'u izler)

**Border & radius:**
- Border 1px `divider`
- Radius `10px` her yerde, tutarlı
- Shadow yok — sadece border + glow

---

## 🗺 SAYFA HARİTASI (YENİ)

Kullanıcıya her sayfanın ne göstereceğini net tanımla. Fiyat YOK.

### 1. Anasayfa `/`
**Blok sırası:**
1. **Hero** — Full-viewport, sol tarafta headline + sağda video mesh
   - H1: "AI ile kurulan büyüme altyapısı."
   - Sub: "Sosyal medya, WhatsApp asistanı, otomasyon, web. Beş ajans yerine tek ekip."
   - CTA: `Görüşme Al` (primary) + `Vaka Çalışmasını İzle` (secondary — video modal)
   - Sağ: `Luxury Reels FINAL` embed autoplay muted loop
2. **Sosyal Kanıt Bandı** — 6 marka logosu grayscale, motion marquee
3. **Ne Yapıyoruz** — 5 hizmet, bento grid (1 büyük + 4 küçük)
   - Sosyal Medya Ajansı / Meta Reklam / AI Reklam Videosu / WhatsApp AI / Web Tasarım
   - Her kart hover'da video preview
4. **Vaka Çalışması Öne Çıkan** — Cihangir brasserie
   - Sol: canlı web sitesi kayıt video
   - Sağ: rakamlar (220 → 3.600 organik / %72 → %94 doluluk / 18 gün teslim)
5. **Nasıl Çalışıyoruz** — 4 adımlı timeline
   - Brief → Sistem Tasarımı → Kurulum → Büyütme
   - Her adım için mikro-animation
6. **AI İçerik Gösterisi** — Derya + Kıvanç + Luxury karakter grid'i
   - 3 kolon, her kolonda 20 sn video
   - "Bu insanların hiçbiri gerçek değil. Hepsini biz ürettik."
7. **Sektörel Vitrin** — 25 sektör grid, tıklanınca `/web-tasarim/[sektor]`
8. **SSS** — 6 soru accordion
9. **Final CTA** — Full-width dark blok
   - "Sistemin şimdi başlasın."
   - `Brief Bırak` (form → 4 alan)

**Fiyat blok yok.**

### 2. Hizmet Sayfaları (13+ tane)
Ortak template `SectorLandingTemplate.tsx` refactor.

**Blok sırası:**
1. Hero — hizmet adı + hero video + Görüşme Al CTA
2. Sorun tanımı — 6 madde bullet
3. Nasıl Çözeriz — 4 adım
4. Özellikler — 6 kart bento
5. Vaka Çalışması — rakamlarla ama fiyatsız
6. SSS — 6 soru (fiyat sorusu varsa cevap: "Kişisel görüşmede net anlatalım — brief bırak.")
7. İlgili Blog Yazıları — 3 kart
8. İlgili Sektörler — 25 badge grid
9. Final CTA

**Fiyat bloğu (`Yatırım`, `Paketler`) TAMAMEN silinir.**

### 3. Sektör Landing `/[hizmet]/[sektor]`
125 tane. Aynı template. JSON'daki `pricing` alanı skip edilecek.

### 4. Blog Listesi `/blog`
- Grid: 3 kolon desktop, 2 tablet, 1 mobil
- Her kart: featured image (`accent-primary` bg + illustration) + kategori badge + başlık + tarih + okuma süresi
- Pagination altta
- Sol sidebar kategori filtresi (sticky)

### 5. Blog Detay `/blog/[slug]`
- Editorial layout — max-w 720px içerik
- Sağ sticky TOC (H2'ler)
- Progress bar üstte
- Yazar kartı sonda
- İlgili yazılar 3 kart
- Yorumlar yok (KOBİ blog, gerek yok)

### 6. Referanslar `/referanslar`
- Vaka çalışmaları galerisi
- Her vaka: video + rakamlar (fiyat YOK)
- Filter: sektör bazlı
- Testimonial kartları (isim + sektör + alıntı + izin verilmiş)

### 7. Hakkımızda `/hakkimizda`
- Manifesto — büyük tipografi, editorial
- Ekip (foto + isim + rol) — 3-5 kişi
- Zaman çizelgesi (kuruluş → milestone'lar)
- Değerler — 4 kart

### 8. İletişim `/iletisim`
- Form: Ad, e-mail, şirket, sektör, mesaj
- WhatsApp CTA — `wa.me/905015884853`
- Ofis konumu (İzmir) — harita embed
- SLA: "24 saat içinde dönüş"
- **Fiyat sorusu form alanı YOK.**

### 9. Yasal
`/kvkk`, `/gizlilik-politikasi`, `/kullanim-sartlari` — sade tipografi, mevcut içerik korunur, sadece yeni design tokens uygulanır.

---

## 🧩 KOMPONENT KÜTÜPHANESİ

`src/components/ui/` altında refactor:

| Komponent | Amaç | Props | Notlar |
|---|---|---|---|
| `Button` | Primary/Secondary/Ghost varyantları | `variant`, `size`, `iconLeft`, `iconRight`, `loading` | Radix Slot desteği |
| `Card` | Base kart yüzeyi | `elevated`, `interactive` | Border + offset shadow |
| `Section` | Section wrapper | `pad`, `bg`, `container` | Consistent spacing |
| `Eyebrow` | Küçük etiket | `color` | Uppercase, letter-spacing |
| `Heading` | H1-H4 responsive scale | `as`, `size` | `text-balance` default |
| `Prose` | Blog/rich text | - | `.prose-portzen` refactor |
| `StatCard` | Rakam kartı (220 → 3.600) | `label`, `before`, `after`, `unit` | Animate on scroll |
| `ServiceCard` | Hizmet grid kartı | `title`, `desc`, `icon`, `video?`, `href` | Hover video preview |
| `TestimonialCard` | Referans | `who`, `role`, `sector`, `quote` | 2 varyant: dark/light |
| `TimelineStep` | Süreç adımı | `number`, `title`, `desc` | Icon + connector line |
| `Accordion` | SSS | Radix UI accordion | Tek açık modu |
| `Reveal` | Scroll animate wrapper | `delay`, `direction` | IntersectionObserver |
| `Marquee` | Sonsuz kayan bant | `speed`, `pauseOnHover` | Framer Motion |
| `VideoEmbed` | Poster + play trigger | `src`, `poster` | Lazy load |
| `SectorBadge` | Küçük sektör linki | `slug`, `name` | Icon + border |
| `Navbar` | Sticky + dropdown mega menu | - | Mobile drawer |
| `Footer` | Dark, 3 kolon | - | Newsletter YOK, formsuz |
| `Modal` | Video modal + form modal | Radix Dialog | Focus trap |
| `Form` | Type-safe form (React Hook Form + Zod) | schema, onSubmit | Inline errors |
| `Toast` | Bildirim | - | Sonner |
| `SkipLink` | A11y skip nav | - | Screen reader |
| `ThemeToggle` | Light/Dark switcher | - | Sistem takip |
| `CtaBar` | Final CTA blok | `title`, `buttonLabel`, `href` | Sayfa sonu default |

---

## ⚙️ DESIGN TOKENS (globals.css + tailwind.config.ts)

### YÖN A için tokens:

```css
:root {
  --paper: #FBFAF5;
  --ink: #0B0B0C;
  --mute: #F0EEE6;
  --divider: rgba(11, 11, 12, 0.12);

  --accent-primary: #FFE04A;
  --accent-warm: #FF6A2B;
  --accent-cool: #3B60E4;

  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;

  --shadow-sm: 4px 4px 0 var(--ink);
  --shadow-md: 6px 6px 0 var(--ink);
  --shadow-lg: 10px 10px 0 var(--ink);

  --font-display: "Fraunces", serif;
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --easing: cubic-bezier(0.2, 0.9, 0.3, 1);
  --dur-fast: 150ms;
  --dur-normal: 300ms;
  --dur-slow: 500ms;
}

.dark {
  --paper: #0A0A0B;
  --ink: #F5F5F4;
  --mute: #141416;
  --divider: rgba(245, 245, 244, 0.08);
  --accent-primary: #00E5A0;
  --shadow-sm: 4px 4px 0 var(--accent-primary);
  --shadow-md: 6px 6px 0 var(--accent-primary);
  --shadow-lg: 10px 10px 0 var(--accent-primary);
}
```

### Tailwind extension:

```ts
colors: {
  paper: "var(--paper)",
  ink: "var(--ink)",
  mute: "var(--mute)",
  divider: "var(--divider)",
  accent: {
    primary: "var(--accent-primary)",
    warm: "var(--accent-warm)",
    cool: "var(--accent-cool)",
  },
},
```

---

## 🎬 MOTION KURALLARI

- **Reveal:** IntersectionObserver + `data-reveal` (mevcut sistem korunur, iyileştirilir)
- **Stagger:** grid içinde 60ms delay increment
- **Hero video:** autoplay muted loop playsInline (mobil için) — lazy import
- **Marquee:** GPU-accelerated, `transform: translateX`
- **Hover:** transform + shadow — 200ms
- **Reduced motion:** tüm animasyonlar 1ms'ye düşer (mevcut kural korunur)
- **Framer Motion:** sadece hero + modal + drawer + accordion için. Reveal için native CSS.

---

## ♿ ACCESSIBILITY

- HTML semantik: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<aside>`
- Skip link: sayfa başında görünmez, focus'ta görünür
- Focus ring: `outline: 3px solid var(--ink); outline-offset: 2px;` (mevcut)
- Kontrast: WCAG AA (4.5:1 body, 3:1 large)
- Screen reader: alt text her görsele, form label her input'a, ARIA landmarks
- Klavye navigasyon: tab order, escape modal, arrow keys menu
- Motion: `prefers-reduced-motion` respect
- Font-size: 16px min body
- Touch target: 44x44px min mobile

---

## 📱 RESPONSIVE

Breakpoints (mobile-first):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Grid davranışı:
- Mobile: 1 kolon
- Tablet: 2 kolon
- Desktop: 3-4 kolon (içeriğe göre)

Navbar:
- ≥lg: mega menu dropdown
- <lg: drawer + tam ekran overlay

Tipografi:
- Fluid `clamp()` (mevcut sistem korunur)

---

## 🚀 PERFORMANS HEDEFLERİ

- Lighthouse ≥ 95 (Performance, A11y, Best Practices, SEO)
- LCP < 1.5s
- FID < 100ms
- CLS < 0.05
- Bundle size < 200KB gzipped (JS)
- Görsel: WebP/AVIF, `next/image` lazy default
- Font: `display: swap`, subset `latin-ext` sadece
- CSS: Tailwind purge, kritik CSS inline
- 3rd party: GA4 sadece (mevcut)

---

## 🔍 SEO KURALLARI

- Her sayfada unique `title` + `description`
- `metadataBase: https://portzen.com`
- OpenGraph + Twitter Card her sayfada
- Canonical her sayfada
- Sitemap otomatik (mevcut `app/sitemap.ts` korunur, whatsapp-chatbot-fiyat çıkarılır)
- Robots.txt (mevcut)
- Schema.org: Organization + WebSite (mevcut) + BreadcrumbList + FAQPage + Article (blog için)
- `hreflang: tr-TR` (tek dil)
- Structured data: her landing için `Service` schema

---

## 🧪 TEST VE ÇIKARIM

- `npm run build` sıfır hata
- Tüm mevcut linkler çalışıyor (`next dev` sonrası smoke test)
- `next lint` temiz
- TypeScript strict — hiç `any` yok
- Playwright ile 5 kritik path smoke test (opsiyonel)

---

## 📦 UYGULAMA SIRASI

**Faz 1 — Design tokens & core**
1. `tailwind.config.ts` + `globals.css` yeni tokens
2. `Button`, `Card`, `Section`, `Heading`, `Eyebrow`, `Reveal` — refactor
3. Navbar + Footer — yeni tasarım

**Faz 2 — Anasayfa**
1. Hero + video embed
2. Bento grid hizmetler
3. Vaka çalışması bloğu
4. Timeline
5. AI karakter grid
6. Final CTA

**Faz 3 — Template pages**
1. `SectorLandingTemplate.tsx` refactor — **pricing bloğu tamamen çıkar**
2. Ana hizmet sayfaları refactor
3. Sektör landing sayfaları test

**Faz 4 — Blog**
1. Blog list + pagination
2. Blog detail + TOC + progress bar
3. `.prose-portzen` refactor

**Faz 5 — Diğer sayfalar**
1. Referanslar
2. Hakkımızda
3. İletişim
4. Yasal

**Faz 6 — Cleanup**
1. `app/whatsapp-chatbot-fiyat` sil
2. Sitemap güncelle
3. Metadata + canonical → portzen.com
4. Structured data → PORTZEN (portzenai yok)
5. Footer email → destek@portzen.com

**Faz 7 — Polish**
1. Dark mode toggle test
2. Lighthouse audit
3. A11y audit (axe-core)
4. Cross-browser test
5. Mobile test (iOS Safari, Android Chrome)

---

## 📝 CTA MİKROSÖZLÜĞÜ (FİYATSIZ)

| Yer | Metin |
|---|---|
| Hero primary | `Görüşme Al` |
| Hero secondary | `Vaka Çalışmasını İzle` |
| Section CTA | `Brief Bırak` |
| Hizmet card | `Detayları Gör` |
| Blog kart | `Devamını Oku` |
| Final CTA | `Sistemi Kur` |
| Referanslar | `Bu Hizmete Bak` |
| Form submit | `Gönder` (fiyat için "Teklif Al" bile YOK — "Görüşme Al" olacak) |
| WhatsApp | `WhatsApp'tan Yaz` |
| Fiyat sorulursa (SSS) | `Brief kısa görüşmede net rakam paylaşıyoruz. Formu doldur, 24 saatte dönelim.` |

---

## 🚨 SON UYARILAR

1. Kod yazarken önce `SectorLandingTemplate.tsx` içindeki `pricing` bölümünü **komple sil**. JSON alanı kalabilir (backward compat), ama render etme.
2. Yeni sayfa eklerken **fiyat blok template'i asla dahil etme**.
3. Mevcut 95 blog + 125 landing URL yapısı **korunacak** — sadece design katmanı değişir, içerik ve slug aynı.
4. `portzenai` her yerden temizlenecek. `grep -r "portzenai" .` sıfır sonuç dönmeli.
5. Build sonrası `next build` çıktısında hata olmayacak.
6. Design'ı önce **Yön A** ile başlat. Kullanıcı Yön B isterse switch et.

---

## 🎯 BAŞLAMA KOMUTU

Kullanıcıya sor:
1. "Yön A (Editorial Brutalism 2.0) mı, Yön B (Dark Studio) mı?"
2. "Hero'da Luxury Reels mi, Kıvanç Reels mi, Derya Reels mi kullanacağız?"
3. "Vaka çalışması olarak sadece Cihangir mi, başka referans var mı?"

Cevaplarını al, Faz 1'den başla. Her fazın sonunda kullanıcıdan onay iste.

**Şimdi bekle. İlk cevabımı ver.**
