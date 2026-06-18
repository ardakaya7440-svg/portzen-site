# PORTZEN — Web Sitesi v2

Next.js 14 (App Router) + Tailwind + Adelia UI Kit (neobrutalist) ile yeniden inşa edildi.

## Kurulum

```bash
npm install
npm run dev   # http://localhost:3000
```

## Yapı

```
portzen-site/
├── app/
│   ├── layout.tsx          → Root (Navbar + Footer + Montserrat font)
│   ├── page.tsx            → Anasayfa (Hero + 5 hizmet + sosyal kanıt + CTA)
│   ├── globals.css         → Adelia tokenları (paper, ink, brand renkleri)
│   ├── hizmetler/
│   │   ├── ai-video/page.tsx
│   │   ├── whatsapp-bot/page.tsx
│   │   ├── otomasyon/page.tsx
│   │   ├── sosyal-medya/page.tsx
│   │   └── web-tasarim/page.tsx
│   ├── referanslar/page.tsx
│   ├── iletisim/page.tsx
│   ├── hakkimizda/page.tsx
│   └── portfolyo/page.tsx
├── src/
│   ├── components/
│   │   ├── navbar/Navbar.tsx       → Bayigram tarzı 2-katmanlı mega-menu
│   │   └── ui/                     → Adelia bileşenleri (button, card, reveal, vs.)
│   ├── data/services.ts            → 5 hizmet kategorisi + alt servisler
│   └── lib/utils.ts                → cn()
├── public/assets/hero/hero-bg.mp4  → Higgsfield sosyal medya icon flow loop
└── tailwind.config.ts              → Adelia neobrutalist tokenları
```

## Özellikler

- **Bayigram tarzı navbar**: Üst bar (logo + arama + DM CTA + giriş) + alt mega-menu (5 hizmet, hover'da açılır panel)
- **Anasayfa hero**: Higgsfield video bg + solid transition gradient + neobrutalist başlık
- **5 hizmet sayfası**: Dinamik template, kendi alt servisleriyle
- **Referanslar**: Vaka yerine müşteri yorumları (6 sektör, renkli kart grid)
- **İletişim**: Form + WhatsApp / E-posta / Cal.com aksesuar kartlar
- **Mobile-first**: Navbar drawer (sağdan slide-in)
- **framer-motion**: Reveal scroll animasyonları, mega-menu fade+slide

## Tasarım Dili (Adelia)

- Paper `#FFFDF5`, ink `#0A0A0A`
- Brand renkleri: yellow, pink, blue, green, purple, orange
- `border-3` (3px solid black) + `shadow-brutal` (6px hard offset)
- Hover: `-translate-x-0.5 -translate-y-0.5` + `shadow-brutal-lg`
- Font: Montserrat (display + body)

## Sıradakiler (opsiyonel)

- [ ] Form'u Resend/Brevo'ya bağla
- [ ] Sitemap + robots.txt
- [ ] OG/Twitter meta görseller
- [ ] Blog rotası
- [ ] Hizmet alt sayfalarında her servisin detay tab'ı
