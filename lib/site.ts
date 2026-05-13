export const siteConfig = {
  name: "PORTZEN",
  legalName: "PORTZEN",
  tagline: "AI Growth Infrastructure",
  title: "PORTZEN | AI Automation & Growth Infrastructure",
  description:
    "PORTZEN, işletmeler için AI destekli büyüme altyapısı kurar. WhatsApp & Telegram otomasyonu, lead generation sistemleri, AI appointment setter, Google Ads ve akıllı iş akışlarıyla işletmenizi otopilota alıyoruz.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: "merhaba@portzen.com",
  whatsapp: "https://wa.me/905015884853",
  whatsappDisplay: "+90 501 588 48 53",
  location: "İstanbul, Türkiye",
  nav: [
    { href: "/", label: "Ana Sayfa" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hizmetler", label: "Sistemler" },
    { href: "/blog", label: "Blog" },
    { href: "/sss", label: "SSS" },
    { href: "/iletisim", label: "İletişim" }
  ]
} as const;
