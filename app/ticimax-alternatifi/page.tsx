import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Users,
  BookOpen,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  ShoppingBag,
  TrendingUp,
  Code,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ticimax Alternatifi | Modern E-Ticaret Yazılım Karşılaştırması - PORTZEN",
  description:
    "Ticimax hazır kalıp e-ticaret altyapısı yerine markanıza özel Next.js + AI ile geliştirilen modern e-ticaret çözümü. Hız, SEO ve dönüşüm optimizasyonu PORTZEN ile.",
  keywords: [
    "ticimax alternatifi",
    "e-ticaret yazılımı karşılaştırma",
    "modern e-ticaret altyapısı",
    "next js e-ticaret",
    "headless commerce türkiye",
    "shopify mı ticimax mı",
    "özel e-ticaret yazılımı",
    "hızlı eticaret sitesi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ticimax-alternatifi",
    siteName: "PORTZEN",
    title: "Ticimax Alternatifi | Modern E-Ticaret Yazılım Karşılaştırması - PORTZEN",
    description:
      "Hazır kalıp Ticimax yerine markanıza özel Next.js + AI ile geliştirilen modern e-ticaret altyapısı."
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticimax Alternatifi | PORTZEN",
    description:
      "Markaya özel modern e-ticaret. Hız, SEO ve dönüşüm odaklı."
  },
  alternates: { canonical: "https://portzenai.com/ticimax-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ticimax Alternatifi, PORTZEN Markaya Özel E-Ticaret",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "E-Commerce Platform",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Ticimax'in hazır kalıp altyapısı yerine PORTZEN, markanıza özel Next.js tabanlı, AI destekli, ölçeklenebilir e-ticaret platformu geliştirir. SEO, hız ve dönüşüm odaklı.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺85000-₺400000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ticimax kötü bir platform mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Ticimax 5.000+ ürünlü, standart e-ticaret işletmesi için hızlı çözüm sunar. Fakat marka kimliği ön planda olan, hız ve SEO konusunda Google sıralamasında öne çıkmak isteyen işletmeler için hazır kalıp sınırlı kalır."
      }
    },
    {
      "@type": "Question",
      name: "Next.js e-ticaret nedir, neden Ticimax'tan daha hızlı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js sunucu tarafında render ile sayfaları milisaniyeler içinde getirir. Ticimax monolitik PHP altyapısı, plugin yükü ve eski tema mimarisi sebebiyle ortalama TTFB 800ms üzeri. Next.js'te 100ms altı tipik."
      }
    },
    {
      "@type": "Question",
      name: "Ticimax'tan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ürün katalog boyutuna bağlı. 500 ürün altı için 6 hafta, 5.000 ürün için 10 hafta tipik. Ürün, kategori, müşteri ve sipariş geçmişi tamamen taşınır. URL yapısı korunarak SEO kaybı önlenir."
      }
    },
    {
      "@type": "Question",
      name: "AI hangi noktalarda kullanılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ürün açıklaması otomatik yazımı, ürün görseli iyileştirme, kişiselleştirilmiş öneri motoru, sepet terk e-mail kişiselleştirmesi, müşteri sorularını yanıtlayan chatbot, kategori sayfa SEO içeriği otomatik üretimi. Ticimax'ta hiçbiri yerleşik değildir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık lisans ücreti ödüyor muyum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. PORTZEN tek seferlik proje ücreti + opsiyonel aylık bakım paketi modelidir. Ticimax'ın aylık 4.500 TL ile 18.000 TL arasındaki lisans ücreti yoktur. Lisansı siz sahipsiniz, kod size aittir."
      }
    },
    {
      "@type": "Question",
      name: "Hosting maliyeti ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js Vercel veya Netlify üzerinde aylık 200 ile 1.000 TL arasında hosting masrafı çıkarır. Ticimax kendi hosting'inde tutar fakat lisansa dahil değildir, ayrı abonelik. Toplam maliyet PORTZEN tarafında daha düşük."
      }
    },
    {
      "@type": "Question",
      name: "Ödeme sağlayıcısı entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iyzico, PayTR, Param, Garanti Sanal POS, Akbank, İş Bankası, Stripe entegrasyonları hazır şablonlu olarak gelir. Multi-PSP routing (sağlayıcı reddederse diğerine fallback) standarttır."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ticimax Alternatifi",
      item: "https://portzenai.com/ticimax-alternatifi"
    }
  ]
};

const stats = [
  { metric: "100ms", label: "TTFB Next.js ile" },
  { metric: "AI", label: "Ürün önerisi ve içerik" },
  { metric: "%0", label: "Aylık lisans, kod sizin" },
  { metric: "6 hafta", label: "Tipik taşıma süresi" }
];

const painPoints = [
  {
    title: "Hazır kalıp tema",
    desc: "Ticimax tema marketinden seçilen tasarımlar binlerce site arasında ortak kullanılır. Marka kimliği zayıflar, rakipten ayrışmak güçleşir."
  },
  {
    title: "Yavaş yükleme",
    desc: "Monolitik PHP mimarisi, plugin yükü ve eski tema yapısı sebebiyle ortalama Time To First Byte 800ms üzeri. Google PageSpeed skoru çoğu zaman 60 altı."
  },
  {
    title: "Aylık lisans ücreti",
    desc: "Paket bazında aylık 4.500 ile 18.000 TL arasında lisans ücreti. Yıllık 54.000 ile 216.000 TL arasında sabit gider, kod size ait değil."
  },
  {
    title: "Modül başı ücret",
    desc: "B2B modülü, çoklu mağaza, özel domain, hediye paketi gibi her ek özellik ayrı ücretli modüldür. Toplam maliyet katlanır."
  },
  {
    title: "SEO sınırlı",
    desc: "URL yapısı, meta veri kontrolü, schema markup, breadcrumb ayarları kısıtlı. Custom SEO ihtiyaçlarında Ticimax destek ekibine bağımlı kalırsınız."
  },
  {
    title: "AI yerleşik değil",
    desc: "Ürün öneri motoru, otomatik içerik üretimi, AI chatbot için ayrı SaaS abonelikleri (Algolia, Insider, Klevu) gerekir, aylık ek 5.000 ile 25.000 TL maliyet."
  }
];

const comparisonRows = [
  { feature: "Tasarım esnekliği", ticimax: "Tema kalıbı", portzen: "Markaya özel custom" },
  { feature: "Time To First Byte", ticimax: "800ms ile 1500ms", portzen: "100ms altı (Vercel edge)" },
  { feature: "Google PageSpeed", ticimax: "60 altı tipik", portzen: "95 üzeri tipik" },
  { feature: "Aylık lisans", ticimax: "4.500 ile 18.000 TL", portzen: "Yok, kod size ait" },
  { feature: "Modül başı ücret", ticimax: "Her modül ek", portzen: "Tek proje, her şey dahil" },
  { feature: "AI ürün önerisi", ticimax: "Üçüncü parti SaaS", portzen: "Yerleşik, dahil" },
  { feature: "SEO kontrolü", ticimax: "Sınırlı", portzen: "Tam, schema dahil" },
  { feature: "Çoklu dil ve para", ticimax: "Modül başı ücretli", portzen: "Standart dahil" },
  { feature: "Headless API", ticimax: "Kısıtlı", portzen: "Full REST + GraphQL" },
  { feature: "Mobil uygulama bağlantısı", ticimax: "Ekstra modül", portzen: "API'den direkt kullanılır" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Marka analizi",
    description: "Markanızın hedef kitlesi, ürün portföyü, mevcut Ticimax kurulumu ve hedef rakiplerinizi analiz ediyoruz. Tasarım yönü ve teknik gereksinimleri netleştiriyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Figma'da markaya özel tasarım, ardından Next.js + Tailwind + headless commerce mimarisinde geliştirme. 4 ile 8 hafta arasında prototip hazır."
  },
  {
    icon: BookOpen,
    title: "Veri taşıma",
    description: "Ürün, kategori, müşteri, sipariş geçmişi tamamen taşınır. URL yapısı korunur, 301 redirect haritası kurulur, SEO sıralaması kaybedilmez."
  },
  {
    icon: CheckCircle2,
    title: "Canlı geçiş",
    description: "Staging ortamında test, müşteri eğitimi, canlı geçiş gece bakım penceresinde. Sonraki 30 gün yoğun destek, optimizasyon turu."
  }
];

const features = [
  { icon: Zap, title: "Hız öncelikli mimari", desc: "Next.js sunucu tarafı render, Vercel edge network, otomatik image optimization. Google PageSpeed 95+ tipik skor." },
  { icon: Code, title: "Headless commerce", desc: "Saleor, Medusa veya custom backend ile API-first mimari. Mobil app, kiosk, sosyal medya satış kanalları aynı API'den beslenir." },
  { icon: Sparkles, title: "AI yerleşik", desc: "Ürün öneri motoru, otomatik ürün açıklaması, kişiselleştirilmiş anasayfa, AI chatbot. Üçüncü parti SaaS aboneliği gerekmez." },
  { icon: TrendingUp, title: "SEO tam kontrol", desc: "URL yapısı, schema markup, breadcrumb, meta veri, sitemap, robots.txt, canonical, hreflang tam kontrol. Custom SEO stratejisi uygulanır." },
  { icon: ShoppingBag, title: "Multi-PSP ödeme", desc: "iyzico, PayTR, Garanti Sanal POS, Stripe routing. Reddedilen işlem fallback ile diğer sağlayıcıya iletilir, satış kaybı önlenir." },
  { icon: ShieldCheck, title: "KVKK ve PCI", desc: "Tokenizasyon ile kart bilgisi sitenizde tutulmaz, PCI DSS yükü sağlayıcıda. KVKK aydınlatma, açık rıza, veri silme akışları yerleşik." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "85.000 TL",
    period: "/proje",
    setup: "8 hafta teslim",
    color: "bg-paper",
    features: [
      "500 ürüne kadar",
      "Markaya özel tasarım",
      "Next.js + headless backend",
      "Tek ödeme sağlayıcı entegre",
      "SEO temel optimizasyon",
      "3 ay bakım dahil"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    price: "180.000 TL",
    period: "/proje",
    setup: "10 hafta teslim",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "5.000 ürüne kadar",
      "AI öneri motoru + chatbot",
      "Multi-PSP ödeme routing",
      "CRM ve e-Arşiv entegre",
      "Çoklu dil, para birimi",
      "Sosyal medya satış kanalı",
      "6 ay bakım dahil"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "400.000 TL+",
    period: "/proje",
    setup: "16 hafta teslim",
    color: "bg-paper",
    features: [
      "Sınırsız ürün ve kategori",
      "B2B + B2C ayrı modüller",
      "Mobil uygulama API'si",
      "Self hosted altyapı",
      "Adanmış proje ekibi",
      "12 ay bakım + SLA"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Ticimax kötü bir platform mu, hiç kullanılmamalı mı?",
    a: "Hayır. Ticimax 5.000+ ürünlü, standart e-ticaret işletmesi için hızlı çözüm sunar; özellikle hızlı kurulum gereken, marka kimliği ikincil olan, teknik ekibi olmayan KOBİ'ler için mantıklı bir başlangıçtır. Fakat marka kimliği ön planda olan, Google sıralamasında öne çıkmak isteyen, hız ve dönüşüm konusunda rakiplerden ayrışmayı hedefleyen işletmeler için hazır kalıp tema ve monolitik altyapı sınırlı kalır. PORTZEN bu noktada custom yaklaşım sunar."
  },
  {
    q: "Next.js e-ticaret nedir, neden Ticimax'tan daha hızlı?",
    a: "Next.js, Vercel firmasının geliştirdiği modern bir React framework'üdür. Sunucu tarafında ön-render (Server Side Rendering) ve statik sayfa üretimi (Static Site Generation) ile sayfaları milisaniyeler içinde tarayıcıya iletir. Ticimax monolitik PHP altyapısı, plugin yükü ve eski tema mimarisi sebebiyle ortalama Time To First Byte 800ms ile 1500ms arasıdır. Next.js'te 100ms altı tipiktir. Sayfa hızı Google sıralamasında doğrudan SEO faktörüdür, ayrıca her saniyelik gecikme dönüşüm oranını %7 düşürür."
  },
  {
    q: "Ticimax'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Ürün katalog boyutuna ve özelleştirme miktarına bağlı. 500 ürün altı için 6 hafta, 2.000 ürün için 8 hafta, 5.000 ürün için 10 hafta tipik. Ürün, kategori, varyasyon, müşteri ve sipariş geçmişi tamamen taşınır. URL yapısı korunarak veya 301 redirect haritası kurularak SEO kaybı önlenir. Google Search Console aktarımı yapılır. Mevcut sıralamanız korunur, hatta sayfa hızı artışıyla iyileşir."
  },
  {
    q: "AI hangi noktalarda kullanılıyor?",
    a: "Ürün açıklaması otomatik yazımı (yeni ürün eklediğinizde SEO uyumlu açıklama AI ile gelir), ürün görseli iyileştirme (arka plan temizleme, boyut standartlaştırma), kişiselleştirilmiş öneri motoru (her kullanıcıya farklı anasayfa), sepet terk e-mail kişiselleştirmesi, müşteri sorularını yanıtlayan WhatsApp + site chatbot, kategori sayfa SEO içeriği otomatik üretimi, A/B test fikir önerisi. Ticimax'ta hiçbiri yerleşik değildir, üçüncü parti SaaS abonelikleri (Insider, Algolia, Klevu) gerekir, aylık 5.000 ile 25.000 TL ek maliyet çıkarır."
  },
  {
    q: "Aylık lisans ücreti ödüyor muyum?",
    a: "Hayır. PORTZEN tek seferlik proje ücreti + opsiyonel aylık bakım paketi modelidir. Ticimax'ın aylık 4.500 TL (Başlangıç paket) ile 18.000 TL (Kurumsal paket) arasındaki lisans ücreti yoktur. Kod tamamen size aittir, GitHub repo'sunda kalır, isterseniz başka bir ajansa devredebilirsiniz. PORTZEN aylık bakım almasanız bile site sahibi sizsiniz, kilitlenme yoktur."
  },
  {
    q: "Hosting maliyeti ne olur?",
    a: "Next.js Vercel, Netlify veya Cloudflare Pages üzerinde aylık 200 ile 1.000 TL arasında hosting masrafı çıkarır (trafiğe bağlı). Kurumsal trafik için AWS, GCP veya self-hosted altyapı 2.000 ile 8.000 TL arasında. Ticimax kendi hosting'inde tutar fakat lisansa dahil değildir, ayrı abonelik gerekir. Toplam maliyet (lisans + hosting + modüller) PORTZEN tarafında uzun vadede daha düşük çıkar."
  },
  {
    q: "Ödeme sağlayıcısı entegrasyonu var mı?",
    a: "iyzico, PayTR, Param, Garanti Sanal POS, Akbank Sanal POS, İş Bankası, Stripe TR entegrasyonları hazır şablonlu olarak gelir. Multi-PSP routing (bir sağlayıcı reddederse diğerine fallback) standarttır, satış kaybı önlenir. Komisyon pazarlığı gerekiyorsa /iyzico-alternatifi sayfamızda detaylı süreç anlatılır."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Ticimax Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Ticimax Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Ticimax alternatifi, markaya özel modern e-ticaret altyapısı
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Ticimax hazır kalıp tema ve monolitik PHP altyapısı KOBİ için hızlı bir başlangıçtır. Marka kimliği, hız ve dönüşüm konusunda öne çıkmak isteyenler için PORTZEN, Next.js + AI ile markaya özel e-ticaret platformu kurar.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/web-tasarim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Web Tasarım <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-purple text-paper"
                    )}
                  >
                    <div className="font-display text-3xl md:text-4xl font-black leading-none mb-2">
                      {s.metric}
                    </div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. NEDEN ALTERNATİF */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Ticimax'ın 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Ticimax başlangıç için hızlı, ama marka büyüdükçe kalıp daralır.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-purple text-paper mb-4">
                    <X className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2">{p.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Ticimax vs PORTZEN, 10 kritik e-ticaret özelliği
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Ticimax</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.ticimax}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-sm bg-brand-yellow/30 text-ink">
                        <div className="flex flex-col items-center gap-1">
                          <Check className="h-4 w-4 text-green-700" />
                          <span className="text-xs font-bold">{row.portzen}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-ink/60 max-w-2xl">
              <strong>Kaynak.</strong> Ticimax paket fiyat listesi (ticimax.com), PORTZEN müşteri taşıma deneyimleri, Lighthouse benchmark testleri, Ocak 2026.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Ticimax'tan modern e-ticarete nasıl geçilir?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-2 text-ink">{s.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{s.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Ticimax modülünde ekstra ödediğiniz 6 özellik
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-7 w-7 text-ink mb-4" />
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{f.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. USE CASES */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Kullanım örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Markaya özel e-ticaret büyümeyi nasıl açıyor?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İstanbul, 1.200 SKU'lu butik moda markası.</strong> Ticimax Profesyonel pakette aylık 9.500 TL lisans ödüyordu, PageSpeed skoru 38'di, dönüşüm oranı %0.9 seviyesindeydi. PORTZEN ile Next.js'e taşındı, tasarım sıfırdan markaya özel kurguladı. PageSpeed 96'ya çıktı, dönüşüm oranı %2.4'e yükseldi, sepet terk e-mail AI ile kişiselleştirildi. Yıllık lisans tasarrufu 114.000 TL, ek dönüşüm artışı 6 ayda proje maliyetini karşıladı.
                </p>
                <p>
                  <strong>Ankara, B2B endüstriyel ürün satıcısı.</strong> 4.000 SKU, hem B2C hem B2B satış. Ticimax'ta B2B modülü aylık 6.500 TL ek ücret istiyordu, fiyat farklılaştırma sınırlıydı. PORTZEN custom backend kurdu, B2B müşteriye giriş sonrası farklı fiyat, vade ve sepet kuralları gösterildi. SKU başı dinamik fiyat hesaplama, kurumsal proforma fatura otomasyonu eklendi.
                </p>
                <p>
                  <strong>İzmir, kozmetik markası, ihracat ağırlıklı.</strong> Türkiye, Almanya, Hollanda, Birleşik Krallık'a satış yapıyordu. Ticimax çoklu dil modülü aylık 4.000 TL, çoklu para birimi 2.500 TL, hreflang otomatik değildi. PORTZEN'de TR, DE, NL, EN dilleri standart geldi, hreflang otomatik, ülkeye göre fiyat ve KDV otomatik hesaplandı. EU müşteri için Stripe + TR müşteri için iyzico routing kuruldu.
                </p>
                <p>
                  <strong>Bursa, ev tekstili markası, hızlı büyüyen.</strong> Yılda %180 büyüyordu, Ticimax altyapısı kampanya saatinde çöküyordu. Vercel edge network'e taşındı, eşzamanlı 50.000 kullanıcıya sorunsuz çıktı. Black Friday günü 12 saat boyunca sıfır kesinti, normal trafiğin 8 katı sipariş aldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">PageSpeed</div>
                  <div className="font-display text-4xl font-black mb-1">38 → 96</div>
                  <div className="text-sm">Next.js + edge network</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Dönüşüm oranı</div>
                  <div className="font-display text-4xl font-black mb-1">%0.9 → %2.4</div>
                  <div className="text-sm">Hız + AI öneri ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yıllık lisans tasarrufu</div>
                  <div className="font-display text-4xl font-black text-brand-pink">114.000 TL</div>
                  <div className="text-sm">Tek seferlik proje modeli</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf TL fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                3 paket, aylık lisans yok, kod size ait
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Ticimax'ın aylık 4.500 ile 18.000 TL arasındaki lisans modelinin aksine, PORTZEN tek seferlik proje ücreti alır. Yıl sonunda yatırım amorti olur.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={cn(
                    "border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full flex flex-col relative",
                    p.color,
                    "text-ink"
                  )}
                >
                  {p.badge && (
                    <div className="absolute -top-3 left-6 border-3 border-ink bg-brand-pink text-paper px-2 py-0.5 text-xs font-black uppercase shadow-brutal-sm">
                      {p.badge}
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-black mb-2">{p.name}</h3>
                  <div className="mb-1">
                    <span className="font-display text-4xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.setup}</div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center gap-2 border-3 border-ink bg-ink px-4 py-2.5 text-xs font-bold uppercase text-paper shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    {p.cta} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300}>
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">Daha fazla okuma</div>
                <p className="text-sm opacity-90">
                  Shopify vs WooCommerce, WordPress vs Shopify karşılaştırmalı blog yazılarımızı inceleyin.
                </p>
              </div>
              <Link
                href="/blog/shopify-vs-woocommerce-turkiye"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Blog: Shopify vs WooCommerce <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Ticimax'tan geçmeden önce merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <HeadphonesIcon className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">WordPress mu Shopify mı?</h3>
                <p className="text-sm opacity-85 mb-3">
                  E-ticaret platformları karşılaştırmalı blog yazımız.
                </p>
                <Link href="/blog/wordpress-vs-shopify-eticaret" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Yazıyı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">IdeaSoft kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ için IdeaSoft alternatif analizi.
                </p>
                <Link href="/ideasoft-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  IdeaSoft Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Ticimax aylık lisansını yatırıma çevirelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Ticimax sitenizi analiz ediyoruz. PageSpeed, SEO, lisans yükü ve dönüşüm oranı baz alınarak tahmini ROI raporu çıkarıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Analiz Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905015884853"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div>
                  <a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div>
                  <span className="font-bold">İzmir, Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/web-tasarim" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/shopify-vs-woocommerce-turkiye" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Shopify vs WooCommerce <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/wordpress-vs-shopify-eticaret" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: WP vs Shopify <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
