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
  Store,
  TrendingUp,
  Wallet,
  Heart
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shopier Alternatifi | Kendi Mağazanız + Düşük Komisyon - PORTZEN",
  description:
    "Shopier her satışta %3.5+ komisyon kesiyor. Kendi web mağazanız ile %0 platform komisyonu, güçlü marka kimliği. PORTZEN ile bağımsız e-ticaret kurulumu.",
  keywords: [
    "shopier alternatifi",
    "shopier komisyon",
    "kendi eticaret sitesi",
    "shopier mı kendi site mi",
    "düşük komisyonlu satış",
    "butik mağaza eticaret",
    "instagram satıştan siteye geçiş",
    "shopier yerine ne"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/shopier-alternatifi",
    siteName: "PORTZEN",
    title: "Shopier Alternatifi | Kendi Mağazanız + Düşük Komisyon - PORTZEN",
    description:
      "Shopier %3.5+ komisyon yerine kendi mağazanız, kendi marka kimliği, %0 platform komisyonu."
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopier Alternatifi | PORTZEN",
    description:
      "Kendi web mağazanız ile platform komisyonundan kurtulun, marka kimliği inşa edin."
  },
  alternates: { canonical: "https://portzenai.com/shopier-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopier Alternatifi, PORTZEN Kendi Mağazanız",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "E-Commerce Setup",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Shopier ve benzeri pazaryeri komisyon yapısının yerine PORTZEN, butik markalar için kendi domain'i, kendi tasarımı, kendi sahipliği olan e-ticaret mağazası kurar. Platform komisyonu yok, marka kimliği güçlü.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺28000-₺120000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Shopier komisyonu ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopier işlem başına %3.49 ile %5.5 arasında komisyon alır. Taksitli satışlarda komisyon yükselir, hızlı havale opsiyonunda ek ücret çıkar. Aylık 30.000 TL satış yapan markada yıllık 12.000 TL'nin üstünde platform komisyonu çıkar."
      }
    },
    {
      "@type": "Question",
      name: "Kendi sitemi kurmak için Shopier'dan ne kazanırım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Platform komisyonundan %100 tasarruf, ödeme sağlayıcısına direkt sözleşme ile %1.49 ile %2.5 arasında komisyon, kendi marka kimliği, SEO ile organik trafik, müşteri verisi tamamen size ait. Shopier sitenizi kapatamaz."
      }
    },
    {
      "@type": "Question",
      name: "Shopier ile aynı kolay satış akışı kurulabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Kendi sitenize WhatsApp tek tık sipariş, hızlı ödeme (cüzdan, tek kart), Instagram Story link entegrasyonu, kupon ve indirim akışları kurulur. Müşteri deneyimi Shopier kadar pürüzsüz olur, ek olarak markanız öne çıkar."
      }
    },
    {
      "@type": "Question",
      name: "Shopier'da bana hazır gelen kargo entegrasyonu siteye gelir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yurtiçi Kargo, MNG, Aras, PTT, Sürat entegrasyonları PORTZEN paketinde standarttır. Sipariş onayında otomatik kargo etiketi basılır, müşteriye takip numarası WhatsApp ve e-mail ile gönderilir."
      }
    },
    {
      "@type": "Question",
      name: "Instagram Bio link Shopier yerine ne gösterilecek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kendi domain'iniz. Örneğin instagram.com/markanız → biolink olarak markanizad.com gösterilir. Linktree ihtiyacı kalmaz, tüm trafik direkt sitenize gelir, SEO ve marka değeri size kalır."
      }
    },
    {
      "@type": "Question",
      name: "Tek ürün satıyorum, kendi site kurmaya değer mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık 5.000 TL altı satış için Shopier başlangıç için uygun. Aylık 15.000 TL üzeri satış yapıyorsanız kendi siteniz 12 ay içinde amorti olur. Marka inşa etmek istiyorsanız ilk günden kendi siteniz mantıklıdır."
      }
    },
    {
      "@type": "Question",
      name: "Instagram DM otomasyonu site ile uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tamamen uyumlu. Müşteri Instagram Story'ye yorum yazınca otomatik DM ile ürün linki gelir, sepete eklenir, sitenizden ödeme alır. /instagram-dm-otomasyonu/butik sayfasında detaylar mevcut."
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
      name: "Shopier Alternatifi",
      item: "https://portzenai.com/shopier-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%0", label: "Platform komisyonu" },
  { metric: "12 ay", label: "Ortalama amorti süresi" },
  { metric: "Kendi", label: "Domain + marka kimliği" },
  { metric: "Sahip", label: "Müşteri verisi ve site size ait" }
];

const painPoints = [
  {
    title: "Komisyon oranı yüksek",
    desc: "Shopier işlem başına %3.49 ile %5.5 arasında komisyon alır. Aylık 30.000 TL satışta yıllık 13.000 TL üzeri platform komisyonu, doğrudan kar kaybı."
  },
  {
    title: "Marka kimliği zayıf",
    desc: "Shopier alt domain (markaniz.shopier.com) altında kalırsınız. Kendi domain'iniz yok, görsel tasarım Shopier kalıbında, müşteri sizi platform içinde görür."
  },
  {
    title: "SEO neredeyse yok",
    desc: "Shopier altında ürün sayfaları Google'da çok zor sıralanır, çünkü domain otoritesi paylaşımlı. Organik trafik almak imkansıza yakın."
  },
  {
    title: "Müşteri verisi platforma ait",
    desc: "Müşteri e-mail, telefon ve sipariş geçmişi Shopier altyapısında. Toplu pazarlama, segmentasyon, retargeting yapma kabiliyetiniz çok sınırlı."
  },
  {
    title: "Platform bağımlılığı",
    desc: "Shopier yarın politika değiştirir, fiyat artırır veya hesabınızı askıya alırsa satışlarınız anında durur. Riskiniz tamamen platforma bağlıdır."
  },
  {
    title: "Özelleştirme sınırlı",
    desc: "Ürün sayfası tasarımı, ödeme akışı, kupon kuralları, çoklu dil veya para birimi gibi büyüme döneminde gereken özellikler kısıtlı veya hiç yok."
  }
];

const comparisonRows = [
  { feature: "Platform komisyonu", shopier: "%3.49 ile %5.5", portzen: "%0 (sadece PSP komisyonu)" },
  { feature: "Domain", shopier: "markaniz.shopier.com", portzen: "markanizadi.com" },
  { feature: "Marka tasarımı", shopier: "Shopier kalıbı", portzen: "Markaya özel custom" },
  { feature: "SEO ve organik trafik", shopier: "Çok zayıf", portzen: "Tam kontrol, sıralama" },
  { feature: "Müşteri verisi sahipliği", shopier: "Shopier'da", portzen: "Tamamen sizin" },
  { feature: "Instagram bio link", shopier: "Shopier linki", portzen: "Kendi domain'iniz" },
  { feature: "Kargo entegrasyonu", shopier: "Var", portzen: "Var, daha geniş seçenek" },
  { feature: "AI ürün önerisi", shopier: "Yok", portzen: "Yerleşik dahil" },
  { feature: "Çoklu dil ve para", shopier: "Yok", portzen: "Standart dahil" },
  { feature: "Mağaza sahipliği", shopier: "Platform kontrolünde", portzen: "Tamamen sizin" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Marka analizi",
    description: "Mevcut Shopier satışlarınızı, müşteri profilinizi, Instagram trafiğinizi ve marka konumlandırmanızı inceliyoruz. Hangi tasarım yönünün doğru olacağını birlikte buluyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Markaya özel tasarım, Next.js + Tailwind ile geliştirme, ödeme + kargo entegrasyonu. 3 ile 5 hafta arasında prototip hazır."
  },
  {
    icon: BookOpen,
    title: "Veri ve trafik taşıma",
    description: "Shopier ürün katalogunuz, müşteri listeniz aktarılır. Instagram bio link güncellenir, Shopier mağazasına 301 redirect kurulur, trafik kaybı önlenir."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim ve büyüme",
    description: "Yönetim paneli eğitimi, canlı geçiş. Sonraki 60 gün sosyal medya entegrasyonu, AI öneri, sepet terk akışları optimize edilir."
  }
];

const features = [
  { icon: Wallet, title: "Platform komisyonu sıfır", desc: "Sadece ödeme sağlayıcısına (%1.49 ile %2.5 arası) komisyon ödersiniz. Shopier'ın %3.49+ üzeri komisyonu cebinizde kalır." },
  { icon: Store, title: "Kendi domain'iniz", desc: "markanizadi.com altında çalışırsınız. Instagram bio'da, kartvizitte, faturada kendi adresiniz. Marka değeri uzun vadede size birikir." },
  { icon: TrendingUp, title: "SEO ile organik trafik", desc: "Kendi domain otoriteniz Google'da sıralanır. Ücretli reklam dışında organik trafik kanalı açılır, tek pazarlama kanalına bağımlı kalmazsınız." },
  { icon: Heart, title: "Müşteri verisi size ait", desc: "E-mail, telefon, sipariş geçmişi sizin CRM'inizde. Segmentlere göre kampanya, retargeting, sadakat programı yapma özgürlüğünüz var." },
  { icon: MessageCircle, title: "WhatsApp + Instagram entegre", desc: "Story'den DM otomasyonu, ürün linki paylaşımı, WhatsApp tek tık sipariş ve ödeme akışı yerleşik gelir." },
  { icon: ShieldCheck, title: "Mağaza tamamen sizin", desc: "Yarın politika değişikliği, fiyat artışı veya hesap askıya alınması riski yok. Kod ve veri sizde, hosting sağlayıcısı bağımsız." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "28.000 TL",
    period: "/proje",
    setup: "3 hafta teslim",
    color: "bg-paper",
    features: [
      "100 ürüne kadar",
      "Kendi domain + tasarım",
      "iyzico veya PayTR entegre",
      "WhatsApp tek tık sipariş",
      "Instagram bio link kurulumu",
      "Yurtiçi Kargo, MNG entegre",
      "2 ay bakım dahil"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "65.000 TL",
    period: "/proje",
    setup: "5 hafta teslim",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "500 ürüne kadar",
      "AI öneri motoru + chatbot",
      "Multi-PSP ödeme routing",
      "Instagram DM otomasyonu",
      "Sepet terk e-mail akışı",
      "Sadakat ve kupon sistemi",
      "4 ay bakım dahil"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "120.000 TL",
    period: "/proje",
    setup: "8 hafta teslim",
    color: "bg-paper",
    features: [
      "Sınırsız ürün",
      "Çoklu dil + para birimi",
      "Yurt dışı satış kurulumu",
      "Mobil app API'si",
      "Adanmış proje yöneticisi",
      "12 ay bakım + sosyal medya entegre"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Shopier komisyonu ne kadar, gerçekten yüksek mi?",
    a: "Shopier işlem başına %3.49 ile %5.5 arasında komisyon alır (sektör, taksit ve ödeme tipine göre değişir). Hızlı havale (T+1 yerine aynı gün) için ek %1.5 komisyon vardır. Aylık 30.000 TL satış yapan butik markada yıllık 13.000 TL üzeri platform komisyonu çıkar, aylık 100.000 TL satışta yıllık 42.000 TL üzeri. Bu komisyon doğrudan kar kaybıdır, sitenizi kurarsanız aynı satış için sadece PSP komisyonu (%1.49 ile %2.5) öderssiniz."
  },
  {
    q: "Kendi sitemi kurmak için Shopier'dan ne kazanırım?",
    a: "(1) Platform komisyonundan %100 tasarruf, sadece PSP komisyonu (%1.49 ile %2.5 arası), (2) Kendi marka kimliği ve domain'i, müşteri sizi platform değil marka olarak görür, (3) SEO ile Google'dan organik trafik, ücretli reklam dışında satış kanalı, (4) Müşteri verisi tamamen size ait, e-mail kampanyası, retargeting, segmentasyon özgürlüğü, (5) Mağaza sahipliği, Shopier yarın hesabınızı kapatamaz, fiyat değiştiremez."
  },
  {
    q: "Shopier ile aynı kolay satış akışı kurulabilir mi?",
    a: "Evet, hatta daha pürüzsüz. Kendi sitenize WhatsApp tek tık sipariş (müşteri WhatsApp butonuna basar, ürün ve telefon önceden dolu gelir), hızlı ödeme akışı (cüzdan, tek kart), Instagram Story link entegrasyonu (story swipe up direkt ürün sayfasına), kupon ve indirim akışları, sepet terk e-mail otomasyonu kurulur. Müşteri deneyimi Shopier kadar kolay, ek olarak markanız ön planda, müşteri size güven oluşturuyor."
  },
  {
    q: "Shopier'da hazır gelen kargo entegrasyonu siteye gelir mi?",
    a: "Daha fazlası. Yurtiçi Kargo, MNG, Aras, PTT, Sürat, Hepsijet entegrasyonları PORTZEN paketinde standarttır. Sipariş onayında otomatik kargo etiketi basılır (PDF), kargo firması API'si ile takip numarası alınır, müşteriye WhatsApp ve e-mail ile bildirim gider. Kargo fiyatları otomatik hesaplanır (ürün ağırlığı, şehir, kampanyalı kargo). Shopier'ın sunduğu kargo seçeneklerinin tümü dahil, ek olarak markaya özel kargo kuralları kurulabilir (örneğin 500 TL üzeri ücretsiz kargo)."
  },
  {
    q: "Instagram Bio link Shopier yerine ne gösterilecek?",
    a: "Kendi domain'iniz. Örneğin instagram.com/markaniz → biolink olarak markanizad.com gösterilir. Linktree, Beacons gibi üçüncü parti araçlara ihtiyaç kalmaz, tüm trafik direkt sitenize gelir, SEO ve marka değeri size kalır. İsterseniz markanizad.com/instagram alt sayfası kurulup ek Instagram özel kampanyalar gösterilebilir."
  },
  {
    q: "Tek ürün satıyorum, kendi site kurmaya değer mi?",
    a: "Aylık 5.000 TL altı satış için Shopier başlangıç için uygun, kurulum hızı ve bakım maliyeti açısından mantıklıdır. Aylık 15.000 TL üzeri satış yapıyorsanız kendi siteniz 12 ay içinde amorti olur (platform komisyonu tasarrufu projeyi karşılar). Marka inşa etmek istiyorsanız, uzun vadeli müşteri tabanı kurmak istiyorsanız ilk günden kendi siteniz mantıklıdır, çünkü marka değeri ve müşteri verisi zamanla katlanarak değer kazanır."
  },
  {
    q: "Instagram DM otomasyonu site ile uyumlu mu?",
    a: "Tamamen uyumlu, hatta daha güçlü. Müşteri Instagram Story'ye yorum yazınca otomatik DM ile ürün linki gelir, sepete eklenir, sitenizden ödeme alır. Sepet terk akışında DM hatırlatma yapılır, müşteri 10 dakika içinde geri gelir. /instagram-dm-otomasyonu/butik sayfasında detaylı süreç anlatılmıştır. Shopier'da bu seviyede otomasyon yoktur."
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
              <span className="text-ink">Shopier Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Store className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Shopier Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Shopier alternatifi, kendi mağazanız ve sıfır platform komisyonu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Shopier her satışta %3.5 ile %5.5 arasında komisyon kesiyor, mağazanız markaniz.shopier.com altında kalıyor, müşteri verisi platforma ait. PORTZEN size kendi domain'inizde, kendi tasarımınızda, kendi marka kimliğinizle mağaza kurar; platform komisyonu sıfır olur.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Komisyon Hesabı <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/web-tasarim/butik"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Butik Web Tasarım <ArrowUpRight className="h-4 w-4" />
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
                Shopier'ın 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Shopier başlangıçta kolay, ama uzun vadede markaya zarar.
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
                Shopier vs PORTZEN kendi mağazanız, 10 kritik fark
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Shopier</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN Kendi Mağazanız</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.shopier}</span>
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
              <strong>Kaynak.</strong> Shopier komisyon listesi (shopier.com/yardim), PORTZEN müşteri kurulum deneyimleri, Ocak 2026.
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
                Shopier'dan kendi mağazanıza 3 ile 5 hafta arasında geçiş
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
                Shopier'da hiç sahip olamadığınız 6 özellik
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
              Butik markalar Shopier'dan kendi sitelerine geçince ne oluyor?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İzmir, el yapımı takı markası, aylık 45.000 TL Shopier satışı.</strong> Shopier komisyonu %4.5, aylık 2.025 TL platform komisyonu, yıllık 24.300 TL. Müşteri verisi Shopier'da, e-mail kampanyası yapamıyordu. PORTZEN Başlangıç paketi (28.000 TL) ile kendi siteye geçti, iyzico ile %2.1 komisyon pazarlığı yapıldı. Yıllık 13.000 TL platform komisyonu tasarrufu + Instagram bio'da kendi domain. 14 ay sonra amorti, müşteri listesi 1.800'e ulaştı, e-mail kampanyaları ile aylık satış 75.000 TL'ye çıktı.
                </p>
                <p>
                  <strong>İstanbul, butik moda markası, aylık 120.000 TL Shopier satışı.</strong> Komisyon %5.5 (taksitli + hızlı havale). Aylık 6.600 TL, yıllık 79.200 TL. Müşteri Shopier'da görüyordu, marka kimliği zayıftı. PORTZEN Pro (65.000 TL) ile geçiş, PayTR ile %1.89 komisyon. Yıllık 53.000 TL tasarruf. AI öneri motoru ile sepet ortalaması %22 arttı, Instagram DM otomasyonu ile story'den gelen dönüşüm %18'e çıktı. 10 ayda amorti.
                </p>
                <p>
                  <strong>Ankara, ev dekorasyonu markası.</strong> Shopier'da aylık 25.000 TL satış ama büyüme yavaştı, Google'dan trafik gelmiyordu. PORTZEN kendi sitesi kuruldu, SEO optimize edildi, blog stratejisi geliştirildi. 8 ayda Google organik trafik aylık 4.500 ziyarete çıktı, organik satış toplam cironun %35'i oldu. Tek pazarlama kanalı (Instagram reklam) yerine üç kanal (organik, Instagram, e-mail) açıldı.
                </p>
                <p>
                  <strong>Bursa, organik sabun markası.</strong> Shopier'da 2 yıldır satıyordu, müşteri verisi Shopier'da kilitliydi, retargeting yapamıyordu. PORTZEN'e geçti, son 12 ayın siparişlerini Shopier API'den çekti, müşteri listesi CRM'e aktarıldı, segmentlere ayrıldı (yeni, sadık, kayıp). Win-back kampanyası ile kayıp müşterilerin %22'si geri kazanıldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yıllık komisyon tasarrufu</div>
                  <div className="font-display text-4xl font-black mb-1">53.000 TL</div>
                  <div className="text-sm">120.000 TL aylık satışta</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Organik trafik (8 ay)</div>
                  <div className="font-display text-4xl font-black mb-1">0 → 4.500</div>
                  <div className="text-sm">Aylık ziyaret, SEO ile</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Win-back oranı</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%22</div>
                  <div className="text-sm">Kayıp müşteri geri kazanımı</div>
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
                3 paket, tek seferlik proje ücreti, kod size ait
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Shopier'ın her satışta komisyon kesmesi yerine PORTZEN tek seferlik proje ücreti alır. Aylık 30.000 TL üzeri satışta 12 ay içinde amorti olur.
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
                <div className="font-display text-lg font-black mb-1">Instagram DM otomasyonu paket</div>
                <p className="text-sm opacity-90">
                  Butik markalar için Instagram DM ile sipariş ve sepet terk otomasyonu detayları.
                </p>
              </div>
              <Link
                href="/instagram-dm-otomasyonu/butik"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Butik DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
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
                Shopier'dan kendi sitenize geçmeden önce
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
                <h3 className="font-display text-base font-black mb-2">Butik Web Tasarım</h3>
                <p className="text-sm opacity-85 mb-3">
                  Butik markalar için markaya özel web tasarım hizmetimiz.
                </p>
                <Link href="/web-tasarim/butik" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Butik Web Tasarım <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">iyzico Alternatifi</h3>
                <p className="text-sm opacity-85 mb-3">
                  Ödeme sağlayıcısı seçimi ve komisyon pazarlığı.
                </p>
                <Link href="/iyzico-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  iyzico Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                Shopier komisyonunu yatırıma çevirelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz komisyon analizinde mevcut Shopier satışınızı inceliyoruz. Yıllık platform komisyonu hesaplanıyor, PORTZEN kendi siteye geçiş ile amorti süresi raporu çıkarılıyor.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Komisyon Hesabı <ArrowUpRight className="h-4 w-4" />
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
                <Link href="/web-tasarim/butik" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Butik Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu/butik" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Butik Instagram DM <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/iyzico-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  iyzico Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
