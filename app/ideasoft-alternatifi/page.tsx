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
  ShoppingCart,
  TrendingUp,
  Code,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IdeaSoft Alternatifi | KOBİ İçin Modern E-Ticaret Çözümü - PORTZEN",
  description:
    "IdeaSoft modüler hazır paket çözümü yerine PORTZEN, KOBİ markaları için custom Next.js + AI ile geliştirilen modern e-ticaret altyapısı sunar.",
  keywords: [
    "ideasoft alternatifi",
    "kobi eticaret yazılımı",
    "modern eticaret altyapısı",
    "ideasoft mı next.js mi",
    "özel eticaret kobi",
    "ideasoft fiyatları alternatif",
    "ai destekli eticaret",
    "kobi için modern eticaret"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ideasoft-alternatifi",
    siteName: "PORTZEN",
    title: "IdeaSoft Alternatifi | KOBİ İçin Modern E-Ticaret Çözümü - PORTZEN",
    description:
      "IdeaSoft modüler paket yerine KOBİ markaları için custom Next.js + AI ile e-ticaret altyapısı."
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaSoft Alternatifi | PORTZEN",
    description:
      "KOBİ için custom modern e-ticaret. AI ile öneri, içerik ve chatbot dahil."
  },
  alternates: { canonical: "https://portzenai.com/ideasoft-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IdeaSoft Alternatifi, PORTZEN KOBİ E-Ticaret Çözümü",
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
    "IdeaSoft'un modüler hazır paket modelinin sınırlı kaldığı yerde PORTZEN, KOBİ markalarına özel Next.js tabanlı, AI destekli, ölçeklenebilir e-ticaret platformu geliştirir.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺55000-₺250000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "IdeaSoft KOBİ için yetersiz mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, IdeaSoft hızlı kurulum gereken, küçük katalog ve standart akış kullanan KOBİ'ler için pratiktir. Fakat marka kimliği güçlü olmak isteyen, hız ve dönüşüm odaklı KOBİ'ler için custom çözüm daha uygundur."
      }
    },
    {
      "@type": "Question",
      name: "IdeaSoft fiyatları PORTZEN ile karşılaştırınca nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IdeaSoft paket bazında aylık 2.500 ile 12.500 TL arasında lisans ücreti alır. Modüller ek ücretlidir. PORTZEN tek seferlik proje ücreti modelidir. 18 ile 24 ay arasında IdeaSoft toplam maliyeti PORTZEN proje bedelini geçer."
      }
    },
    {
      "@type": "Question",
      name: "IdeaSoft'tan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Küçük katalog (1.000 ürün altı) için 6 hafta, orta katalog (5.000 ürün) için 8 hafta tipik. Ürün, kategori, müşteri ve sipariş geçmişi tamamen taşınır. URL yapısı korunur, 301 redirect ile SEO kayıpsız geçiş."
      }
    },
    {
      "@type": "Question",
      name: "AI hangi noktalarda devreye giriyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otomatik ürün açıklaması üretimi, ürün görsel iyileştirme, kişiselleştirilmiş öneri motoru, sepet terk e-mail kişiselleştirme, AI WhatsApp + site chatbot, kategori sayfa SEO içerik üretimi. IdeaSoft'ta hiçbiri yerleşik değildir."
      }
    },
    {
      "@type": "Question",
      name: "Mobil uyumluluk ve PWA destekleniyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Next.js tabanlı geliştirme standart olarak mobil uyumlu, Progressive Web App (PWA) ile uygulama deneyimi sunar. Müşteri siteyi ana ekrana ekleyip uygulama gibi kullanabilir. IdeaSoft'ta PWA ek modül olarak ücretlidir."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API entegrasyonu. Sipariş onaylanınca otomatik cari kart oluşur, e-Arşiv fatura kesilir, muhasebe sistemine sync edilir."
      }
    },
    {
      "@type": "Question",
      name: "Hosting maliyeti ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vercel veya Netlify üzerinde aylık 200 ile 1.000 TL arasında hosting masrafı tipik. IdeaSoft hosting lisansa dahildir fakat lisans aylık 2.500 ile 12.500 TL arası, dolayısıyla PORTZEN tarafında toplam maliyet daha düşük."
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
      name: "IdeaSoft Alternatifi",
      item: "https://portzenai.com/ideasoft-alternatifi"
    }
  ]
};

const stats = [
  { metric: "AI dahil", label: "Öneri, içerik, chatbot" },
  { metric: "PWA", label: "Standart mobil uygulama" },
  { metric: "0 TL", label: "Aylık lisans ücreti" },
  { metric: "18 ay", label: "Ortalama amorti süresi" }
];

const painPoints = [
  {
    title: "Modüler ücretlendirme",
    desc: "Çoklu mağaza, B2B, hediye paketi, sadakat programı, çoklu dil gibi her özellik ayrı modül olarak fiyatlandırılır. Toplam maliyet katlanır."
  },
  {
    title: "Hazır tema kalıbı",
    desc: "Tema marketinden seçilen tasarımlar diğer IdeaSoft sitelerinde de kullanılır. Marka kimliği zayıflar, görsel ayrışma güçtür."
  },
  {
    title: "Aylık lisans yükü",
    desc: "Paket bazında aylık 2.500 ile 12.500 TL arasında sabit lisans gideri. 5 yılda toplam 150.000 ile 750.000 TL arasında, kod size ait değil."
  },
  {
    title: "AI yerleşik değil",
    desc: "Ürün önerisi, otomatik açıklama, AI chatbot için üçüncü parti SaaS abonelikleri gerekir. Insider, Klevu, Algolia aylık 5.000 ile 25.000 TL ek maliyet."
  },
  {
    title: "SEO kontrolü sınırlı",
    desc: "Meta veri, schema markup, URL yapısı, breadcrumb gibi SEO temel ayarları kısıtlıdır. Custom schema veya özel URL stratejisi için IdeaSoft destek beklenir."
  },
  {
    title: "PWA ve mobil app ekstra",
    desc: "Progressive Web App, mobil uygulama bağlantısı, push notification için ek modül abonelikleri gerekir. KOBİ'ye toplam yük artar."
  }
];

const comparisonRows = [
  { feature: "Tasarım esnekliği", idea: "Tema kalıbı", portzen: "Markaya özel custom" },
  { feature: "Aylık lisans", idea: "2.500 ile 12.500 TL", portzen: "Yok, kod size ait" },
  { feature: "Modül başı ücret", idea: "Her modül ek", portzen: "Tek proje, her şey dahil" },
  { feature: "AI ürün önerisi", idea: "Üçüncü parti SaaS", portzen: "Yerleşik, dahil" },
  { feature: "AI chatbot", idea: "Üçüncü parti", portzen: "Site + WhatsApp dahil" },
  { feature: "PWA destek", idea: "Ek modül", portzen: "Standart dahil" },
  { feature: "Logo/Mikro/Netsis", idea: "Modül ücretli", portzen: "Hazır API entegre" },
  { feature: "SEO kontrolü", idea: "Sınırlı", portzen: "Tam, schema dahil" },
  { feature: "PageSpeed skoru", idea: "60 ile 75 arası tipik", portzen: "95+ tipik" },
  { feature: "Multi-PSP ödeme routing", idea: "Yok", portzen: "Standart dahil" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "KOBİ analizi",
    description: "İşletmenizin ürün portföyü, mevcut IdeaSoft kurulumu, hedef rakipleri ve büyüme planını birlikte inceliyoruz. Hangi modüller önce kurulacak, netleştiriyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Figma'da markaya özel tasarım, Next.js + Tailwind + headless backend ile geliştirme. 4 ile 6 hafta arasında prototip hazır."
  },
  {
    icon: BookOpen,
    title: "Veri taşıma",
    description: "Ürün, kategori, müşteri, sipariş geçmişi tam taşınır. URL yapısı korunur veya 301 redirect haritası kurulur, SEO sıralaması kayıp olmaz."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim ve canlı geçiş",
    description: "Yönetim paneli eğitimi, staging testi, canlı geçiş. Sonraki 60 gün yoğun destek, optimizasyon turu, ekibinizin alışma süreci."
  }
];

const features = [
  { icon: Zap, title: "Hız öncelikli mimari", desc: "Next.js sunucu render + Vercel edge ağı. Google PageSpeed 95+ tipik. IdeaSoft tipik 60 ile 75 arası kalır." },
  { icon: Sparkles, title: "AI yerleşik özellikler", desc: "Öneri motoru, ürün açıklaması, kişiselleştirilmiş anasayfa, AI chatbot, sepet terk kişiselleştirme. Yerleşik, ek SaaS gerekmez." },
  { icon: ShoppingCart, title: "PWA mobil deneyim", desc: "Progressive Web App ile site uygulama gibi çalışır, ana ekrana eklenebilir, offline temel kullanım, push notification gönderilebilir." },
  { icon: Building2, title: "Logo/Mikro/Netsis entegre", desc: "Sipariş onayında otomatik cari kart, e-Arşiv fatura, muhasebe sync. Manuel veri girişi sıfırlanır." },
  { icon: TrendingUp, title: "SEO tam kontrol", desc: "Schema markup, URL kontrolü, breadcrumb, meta, sitemap, robots, canonical, hreflang. Custom SEO stratejisi uygulanabilir." },
  { icon: ShieldCheck, title: "KVKK ve PCI hazır", desc: "Açık rıza akışı, veri silme talebi, tokenizasyon ile kart bilgisi PSP'de. KOBİ uyum yükümlülüğü minimize edilir." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "55.000 TL",
    period: "/proje",
    setup: "6 hafta teslim",
    color: "bg-paper",
    features: [
      "300 ürüne kadar",
      "Markaya özel tasarım",
      "Next.js + headless backend",
      "Tek ödeme sağlayıcı entegre",
      "SEO temel optimizasyon",
      "PWA standart dahil",
      "3 ay bakım dahil"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "120.000 TL",
    period: "/proje",
    setup: "8 hafta teslim",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "2.000 ürüne kadar",
      "AI öneri + chatbot dahil",
      "Multi-PSP ödeme routing",
      "Logo/Mikro/Netsis entegre",
      "Çoklu dil destek",
      "Sosyal medya satış kanalı",
      "6 ay bakım dahil"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "250.000 TL+",
    period: "/proje",
    setup: "12 hafta teslim",
    color: "bg-paper",
    features: [
      "Sınırsız ürün ve kategori",
      "B2B + B2C modüller",
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
    q: "IdeaSoft KOBİ için yetersiz mi?",
    a: "Hayır, IdeaSoft hızlı kurulum gereken, küçük katalog (500 ürün altı) ve standart akış kullanan KOBİ'ler için pratik bir başlangıçtır. Tema marketinden tasarım seçilir, modüller eklenir, 2 ile 3 hafta içinde site canlıda olur. Fakat marka kimliği güçlü olmak isteyen, hız ve dönüşüm odaklı, büyüme planı olan KOBİ'ler için modüler hazır paket model 1 ile 2 yıl içinde sınırlı kalır. PORTZEN bu noktada custom yaklaşım sunar."
  },
  {
    q: "IdeaSoft fiyatları PORTZEN ile karşılaştırınca nasıl?",
    a: "IdeaSoft paket bazında aylık 2.500 TL (Mini) ile 12.500 TL (Kurumsal) arasında lisans ücreti alır. Modüller (B2B, çoklu dil, hediye paketi, sadakat) ayrı ücretlendirilir. PORTZEN tek seferlik proje ücreti modelidir. Hesap basit: IdeaSoft Pro paketi (aylık 6.500 TL) + 3 ek modül (aylık 4.000 TL) = aylık 10.500 TL. 24 ayda toplam 252.000 TL. PORTZEN Pro paketi 120.000 TL tek seferlik, 18 ay sonra amorti olur, sonrasında sıfır lisans gider."
  },
  {
    q: "IdeaSoft'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Küçük katalog (1.000 ürün altı) için 6 hafta, orta katalog (5.000 ürün) için 8 hafta tipik. Ürün, kategori, varyasyon, müşteri ve sipariş geçmişi tamamen taşınır. URL yapısı korunur veya 301 redirect haritası kurulur, SEO sıralaması kayıp olmaz. Google Search Console aktarımı, sitemap güncellemesi, robots.txt kontrolü dahildir."
  },
  {
    q: "AI hangi noktalarda devreye giriyor?",
    a: "Otomatik ürün açıklaması üretimi (yeni ürün eklendiğinde SEO uyumlu açıklama AI ile gelir), ürün görsel iyileştirme (arka plan temizleme, boyut standartlaştırma), kişiselleştirilmiş öneri motoru (her kullanıcıya farklı anasayfa), sepet terk e-mail kişiselleştirme, AI WhatsApp + site chatbot (sipariş takibi, kargo sorgu, basit ürün soruları), kategori sayfa SEO içerik üretimi. IdeaSoft'ta hiçbiri yerleşik değildir; Insider, Klevu, Algolia gibi üçüncü parti SaaS abonelikleri gerekir, aylık 5.000 ile 25.000 TL ek maliyet."
  },
  {
    q: "Mobil uyumluluk ve PWA destekleniyor mu?",
    a: "Evet. Next.js tabanlı geliştirme standart olarak mobil uyumludur, Progressive Web App (PWA) standardında uygulama deneyimi sunar. Müşteri siteyi telefon ana ekranına ekler, uygulama gibi açar, offline temel kullanım yapar, push notification alır. IdeaSoft'ta PWA ek modül olarak aylık ücretlidir, push notification ayrı SaaS aboneliği ister."
  },
  {
    q: "Logo, Mikro, Netsis entegrasyonu var mı?",
    a: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API entegrasyonumuz vardır. Sipariş onaylanınca otomatik müşteri cari kartı oluşur, e-Arşiv fatura kesilir, fatura ve ödeme bilgisi muhasebe sistemine sync edilir. Manuel veri girişi tamamen sıfırlanır. IdeaSoft tarafında Logo/Mikro entegrasyonları ek modül olarak ücretlendirilir."
  },
  {
    q: "Hosting maliyeti ne olur?",
    a: "Next.js Vercel veya Netlify üzerinde aylık 200 ile 1.000 TL arasında hosting masrafı çıkarır (trafiğe bağlı). Kurumsal trafik için AWS, GCP veya self-hosted altyapı 2.000 ile 8.000 TL arasında. IdeaSoft hosting lisans paketine dahildir fakat lisans aylık 2.500 ile 12.500 TL aralığında, dolayısıyla PORTZEN tarafında toplam altyapı maliyeti daha düşük çıkar."
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
              <span className="text-ink">IdeaSoft Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">IdeaSoft Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  IdeaSoft alternatifi, KOBİ için custom modern e-ticaret
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  IdeaSoft modüler hazır paket model KOBİ'ye pratik bir başlangıç verir, ancak büyüme döneminde modül başı ücret + aylık lisans + tema kalıbı maliyeti artırır. PORTZEN, KOBİ markaları için custom Next.js + AI ile geliştirilen e-ticaret altyapısı sunar.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Analiz Al <ArrowUpRight className="h-4 w-4" />
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
                IdeaSoft'un 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                IdeaSoft başlangıçta hızlıdır, fakat büyüme döneminde modüler model pahalanır.
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
                IdeaSoft vs PORTZEN, KOBİ için 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">IdeaSoft</th>
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
                          <span className="text-xs">{row.idea}</span>
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
              <strong>Kaynak.</strong> IdeaSoft paket ve modül fiyat listesi (ideasoft.com.tr), PORTZEN müşteri kurulum deneyimleri, Lighthouse PageSpeed testleri, Ocak 2026.
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
                IdeaSoft'tan modern altyapıya geçiş süreci
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
                Modül başı ödediğiniz 6 özellik, PORTZEN'de standart dahil
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
              KOBİ markaları için custom çözüm, gerçek hikayeler
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İzmir, el yapımı seramik atölyesi, 250 SKU.</strong> IdeaSoft Mini pakette aylık 2.500 TL lisans, +1.500 TL B2B modülü, +1.000 TL çoklu dil modülü, toplam aylık 5.000 TL. Marka kimliği güçlü ama IdeaSoft tema kalıbında ezildi. PORTZEN Başlangıç paketi (55.000 TL tek seferlik) ile markaya özel custom tasarım, Next.js altyapı, AI ürün açıklaması (her seramiğe özgün hikaye AI ile yazıldı), PWA mobil app deneyimi kuruldu. 11 ay sonra IdeaSoft lisansı toplam maliyeti geçti.
                </p>
                <p>
                  <strong>Bursa, organik gıda markası, 800 ürün.</strong> IdeaSoft Pro pakette aylık 6.500 TL, +3.500 TL Logo entegrasyonu modülü. Toplam aylık 10.000 TL. PageSpeed 62, dönüşüm %1.3. PORTZEN Pro paketi (120.000 TL) ile geçiş yapıldı. PageSpeed 97'ye çıktı, AI öneri motoru ile dönüşüm %2.8'e yükseldi. Logo Tiger entegrasyonu hazır olarak geldi, e-Arşiv fatura otomasyonu kuruldu. 12 ay sonra amorti.
                </p>
                <p>
                  <strong>Ankara, butik mücevher markası, 1.500 SKU.</strong> Mobil trafik %78 ama IdeaSoft mobil PWA yoktu, mobil dönüşüm %0.8. PORTZEN'de PWA standart geldi, push notification kuruldu (sepet terk, yeni koleksiyon, kampanya). Mobil dönüşüm %2.1'e çıktı. AI chatbot WhatsApp + site üzerinden 7/24 ürün sorularını yanıtladı, müşteri hizmetlerine düşen ticket sayısı %60 azaldı.
                </p>
                <p>
                  <strong>İstanbul, çocuk giyim markası, hızlı büyüyen KOBİ.</strong> Aylık ciro 350.000 TL'den 1.2 milyon TL'ye çıkmıştı, IdeaSoft sunucusu kampanya saatinde yavaşlıyordu. PORTZEN Pro paketinde Vercel edge ağına taşındı, eşzamanlı 30.000 kullanıcıya sorunsuz çıktı. Anneler Günü kampanyasında 6 saat süresince sıfır kesinti, normal trafiğin 12 katı sipariş aldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">PageSpeed</div>
                  <div className="font-display text-4xl font-black mb-1">62 → 97</div>
                  <div className="text-sm">Vercel edge ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Mobil dönüşüm</div>
                  <div className="font-display text-4xl font-black mb-1">%0.8 → %2.1</div>
                  <div className="text-sm">PWA + push notification</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Müşteri hizmetleri</div>
                  <div className="font-display text-4xl font-black text-brand-pink">-%60</div>
                  <div className="text-sm">AI chatbot ile ticket azaldı</div>
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
                3 paket, modül başı ücret yok, AI standart dahil
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                IdeaSoft'un aylık lisans + modül başı ücret modeli yerine PORTZEN tek seferlik proje ücreti alır. Yıllık ciroya göre amorti 12 ile 18 ay arasında değişir.
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
                <div className="font-display text-lg font-black mb-1">CRM ve sosyal medya birleşik</div>
                <p className="text-sm opacity-90">
                  E-ticaret altyapısı + CRM + sosyal medya yönetimi tek ajansta kurulur, veri tek panelde toplanır.
                </p>
              </div>
              <Link
                href="/crm-otomasyonu"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
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
                IdeaSoft'tan geçmeden önce merak edilenler
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
                <h3 className="font-display text-base font-black mb-2">Ticimax kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Daha büyük ölçek için Ticimax alternatif analizimiz.
                </p>
                <Link href="/ticimax-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Ticimax Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Shopier kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Komisyonsuz kendi mağazanız için Shopier alternatif analizi.
                </p>
                <Link href="/shopier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Shopier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                IdeaSoft modül faturasını yatırıma çevirelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut IdeaSoft kurulumunuzu inceliyoruz. Aylık lisans + modül + üçüncü parti SaaS toplamı hesaplanıyor, PORTZEN amorti süresi raporu çıkarılıyor.
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
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/ticimax-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Ticimax Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
