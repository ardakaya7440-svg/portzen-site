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
  Wallet,
  TrendingUp,
  Mail,
  ShoppingCart
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Klaviyo Alternatifi | E-Ticaret İçin Daha Ekonomik Otomasyon - PORTZEN",
  description:
    "Klaviyo profil sayısı 25.000'i aşınca fatura $700+/ay. PORTZEN; cart abandonment, win-back, post-purchase otomasyonlarını Klaviyo'nun yarısı maliyetle, TL faturalı kurar.",
  keywords: [
    "klaviyo alternatifi",
    "klaviyo türkçe",
    "e-ticaret email otomasyonu",
    "shopify email yazılımı",
    "sepet bırakma otomasyonu",
    "omnisend alternatif",
    "brevo e-ticaret",
    "kvkk e-ticaret email"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/klaviyo-alternatifi",
    siteName: "PORTZEN",
    title: "Klaviyo Alternatifi | E-Ticaret İçin Daha Ekonomik Otomasyon - PORTZEN",
    description:
      "Klaviyo'nun e-ticaret özelliklerini TL faturalı, KVKK uyumlu, Türkçe destekli olarak yarı maliyetle alın."
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaviyo Alternatifi | PORTZEN",
    description:
      "E-ticaret için cart abandonment, post-purchase, win-back otomasyonu - Klaviyo'nun yarı maliyetinde."
  },
  alternates: { canonical: "https://portzenai.com/klaviyo-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klaviyo Alternatifi - PORTZEN E-Ticaret Email Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "E-commerce Marketing Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Klaviyo'nun profil bazlı USD fiyatlandırması yerine PORTZEN; Shopify, WooCommerce, Trendyol entegre, n8n + Resend altyapısıyla cart abandonment, post-purchase ve win-back akışlarını yarı maliyetle çalıştırır.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺10000-₺40000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Klaviyo gerçekten pahalı mı? Free tier var değil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klaviyo 250 kişiye kadar ücretsiz. 25.000 aktif profil ve unlimited email aylık $700 (≈₺28.000), 50.000 profilde $1.000+ (≈₺40.000). SMS modülü ayrı kredi, push notification ayrı modül. PORTZEN aynı kapsamı yarı fiyata, TL fatura ile sunar."
      }
    },
    {
      "@type": "Question",
      name: "Cart abandonment akışını PORTZEN'de nasıl kurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify / WooCommerce / T-Soft / Ideasoft eventleri n8n üzerinden PORTZEN'e akar. 1. saat WhatsApp + ürün görseli, 24. saat e-mail + alternatif öneriler, 72. saat SMS + kupon kodu. Tüm akış Türkçe şablonlarla hazır gelir."
      }
    },
    {
      "@type": "Question",
      name: "Klaviyo'dan veri taşıma mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Klaviyo API üzerinden profiller, segmentler, flow'lar, gönderim geçmişi ve metric verisi çekilir. Flow'lar PORTZEN editöründe yeniden kurulur, segmentler korunur. Taşıma 14-18 iş günü sürer."
      }
    },
    {
      "@type": "Question",
      name: "Türk e-ticaret platformlarına entegre mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "T-Soft, Ideasoft, Ticimax, Shopify, WooCommerce, Magento için hazır connector mevcut. Trendyol, Hepsiburada, N11 için n8n köprüsü kurulur. Klaviyo'da Trendyol native entegrasyonu yoktur."
      }
    },
    {
      "@type": "Question",
      name: "RFM segmentasyon ve predictive analytics var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN; recency, frequency, monetary değerlere göre dinamik segment, lifetime value tahmini, churn risk skoru ve next best offer önerisi sunar. Klaviyo'nun predictive analytics özelliklerine eş değer."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp ve SMS dahil mi, ek modül mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email + WhatsApp Business API + SMS tek altyapıda gelir. Klaviyo'nun SMS modülü ayrı kredi gerektirir, WhatsApp ise yoktur. PORTZEN'de üç kanal aynı flow editöründe orkestre edilir."
      }
    },
    {
      "@type": "Question",
      name: "Teslim oranı ve domain yönetimi nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPF, DKIM, DMARC kayıtları kurulum aşamasında yapılır. Resend / Amazon SES backend kullanılır, teslim oranı %99 bandındadır. IP reputation ve spam puanı haftalık raporlanır."
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
      name: "Klaviyo Alternatifi",
      item: "https://portzenai.com/klaviyo-alternatifi"
    }
  ]
};

const stats = [
  { metric: "%50", label: "Klaviyo'nun yarı maliyeti" },
  { metric: "3 kanal", label: "Email + WhatsApp + SMS" },
  { metric: "İYS", label: "Uyumlu, TR sunucu opsiyonu" },
  { metric: "16 gün", label: "Klaviyo'dan taşıma" }
];

const painPoints = [
  {
    title: "Profil bazlı USD ücretlendirme",
    desc: "Aktif profil sayısı arttıkça fatura katlanır. 25.000 profilde $700/ay (≈₺28.000), 50.000'de $1.000+/ay."
  },
  {
    title: "SMS ve push ek modül",
    desc: "Klaviyo SMS ayrı kredi, push notification ayrı paket. Çok kanallı strateji için fatura hızla ikiye katlanır."
  },
  {
    title: "WhatsApp Business API yok",
    desc: "Türkiye e-ticaretinin en açılır kanalı WhatsApp. Klaviyo native WhatsApp desteği sunmaz, ayrı entegrasyon gerekir."
  },
  {
    title: "KVKK uyumu sizde",
    desc: "Klaviyo ABD sunucu kullanır. KVKK aydınlatma, açık rıza akışı, veri silme prosedürleri sizin sorumluluğunuzdadır."
  },
  {
    title: "Türk pazaryeri entegrasyonu yok",
    desc: "Trendyol, Hepsiburada, N11 için native connector yoktur. Custom integration ek geliştirme bütçesi ister."
  },
  {
    title: "Türkçe destek zayıf",
    desc: "Live chat sadece İngilizce, dokümantasyon İngilizce. Türkçe partner destek dış kaynaktan ve sınırlı."
  }
];

const comparisonRows = [
  { feature: "Aylık fiyat (25.000 profil)", manychat: "Klaviyo: $700/ay (≈₺28.000)", portzen: "₺14.000/ay sabit" },
  { feature: "Fatura para birimi", manychat: "USD", portzen: "TL, KDV dahil, e-Arşiv" },
  { feature: "Email + WhatsApp + SMS tek pakette", manychat: "Hayır, ayrı modüller", portzen: "Evet, tek altyapı" },
  { feature: "İYS native entegrasyon", manychat: "Yok", portzen: "Var, otomatik kontrol" },
  { feature: "Trendyol / Hepsiburada bağlantısı", manychat: "Yok", portzen: "n8n köprü, hazır" },
  { feature: "T-Soft / Ideasoft / Ticimax", manychat: "Yok", portzen: "Hazır connector" },
  { feature: "Cart abandonment çok kanal", manychat: "Sadece email + SMS (ek modül)", portzen: "Email + WhatsApp + SMS dahil" },
  { feature: "RFM + predictive analytics", manychat: "Var", portzen: "Var (Pro+ paketinde)" },
  { feature: "Türkçe canlı destek", manychat: "Yok / partner", portzen: "Tüm paketlerde dahil" },
  { feature: "KVKK + TR sunucu opsiyonu", manychat: "Yok", portzen: "Kurumsal pakette dahil" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Veri taşıma",
    description: "Klaviyo API üzerinden profiller, segmentler, flow'lar, metricler ve gönderim geçmişi PORTZEN'e aktarılır."
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret bağlantısı",
    description: "Shopify / WooCommerce / T-Soft / Ideasoft + Trendyol / Hepsiburada n8n köprüsü kurulur, event akışı başlar."
  },
  {
    icon: Sparkles,
    title: "Flow'lar",
    description: "Welcome, cart abandonment, browse abandonment, post-purchase, win-back, doğum günü, VIP akışları Türkçeleşir."
  },
  {
    icon: CheckCircle2,
    title: "Optimizasyon",
    description: "Pilot ay süresince A/B test, kanal mix optimizasyonu, segment iyileştirme. KPI panosu canlıya geçer."
  }
];

const features = [
  { icon: ShoppingCart, title: "E-ticaret native entegrasyonu", desc: "Shopify, WooCommerce, T-Soft, Ideasoft, Ticimax, Magento için hazır connector. Trendyol, Hepsiburada, N11 n8n köprüsü." },
  { icon: Mail, title: "Cart abandonment çok kanallı", desc: "1. saat WhatsApp + ürün görseli, 24. saat email + alternatifler, 72. saat SMS + kupon. Klaviyo'da sadece email + SMS." },
  { icon: TrendingUp, title: "RFM + predictive segment", desc: "Recency, frequency, monetary dinamik segment. Churn risk skoru, lifetime value tahmini, next best offer önerisi." },
  { icon: ShieldCheck, title: "İYS + KVKK uyum motoru", desc: "Her gönderim öncesi izin kontrolü. Açık rıza akışı, veri silme talep yönetimi, TR sunucu opsiyonu Kurumsal pakette." },
  { icon: MessageCircle, title: "WhatsApp Business API resmi", desc: "Meta iş ortağı altyapısı. Cart abandonment, sipariş takibi, kargo bildirimi WhatsApp şablonlarıyla otomatik gider." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile Türkçe destek tüm paketlerde dahil. 4 saatlik kurulum eğitimi ve Türkçe video kütüphanesi." }
];

const packages = [
  {
    name: "Başlangıç",
    price: "10.000 TL",
    period: "/ay",
    setup: "Kurulum: 30.000 TL",
    color: "bg-paper",
    features: [
      "15.000 profil + 100.000 mail/ay",
      "Email + WhatsApp + SMS",
      "Welcome + cart abandonment + post-purchase",
      "Temel RFM segment",
      "1 e-ticaret entegrasyonu"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Pro",
    price: "22.000 TL",
    period: "/ay",
    setup: "Kurulum: 55.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "50.000 profil + 500.000 mail/ay",
      "Sınırsız flow + segment",
      "Predictive analytics (CLV, churn)",
      "3 e-ticaret + Trendyol/Hepsiburada",
      "WhatsApp AI cevap akışı",
      "Aylık optimizasyon toplantısı"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "40.000 TL",
    period: "/ay",
    setup: "Kurulum: 90.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız profil + gönderim",
      "Adanmış IP + ısıtma",
      "Self-hosted TR sunucu opsiyonu",
      "Özel API + SLA",
      "Çoklu marka + domain yönetimi",
      "7/24 öncelikli destek"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Klaviyo gerçekten pahalı mı? Free tier var değil mi?",
    a: "Klaviyo 250 aktif profile kadar ücretsiz, küçük testler için yeterli. 5.000 profilde ayda $100 (≈₺4.000), 25.000 profilde $700 (≈₺28.000), 50.000 profilde $1.000+ (≈₺40.000) seviyesine çıkar. SMS modülü ayrı kredi sistemiyle gelir, push notification ayrı paket. Çok kanallı strateji izleyen Türk e-ticaret markalarında aylık fatura kolayca ₺50.000+ olur. PORTZEN aynı kapsamı yarı fiyata, TL fatura ile sunar."
  },
  {
    q: "Cart abandonment akışını PORTZEN'de nasıl kurulur?",
    a: "Shopify / WooCommerce / T-Soft / Ideasoft / Ticimax cart event'leri n8n üzerinden PORTZEN'e webhook ile akar. Tipik 3 adımlı akış: 1. saat WhatsApp Business API (ürün görseli + direkt sepet linki), 24. saat e-mail (alternatif ürün önerileri + sosyal kanıt), 72. saat SMS (kupon kodu ile son hatırlatma). Türkçe şablonlar hazır gelir, Meta onayından geçirilir, ilk gün canlıya alınır."
  },
  {
    q: "Klaviyo'dan veri taşıma mümkün mü?",
    a: "Evet. Klaviyo Public API üzerinden tüm profiller, segmentler, flow'lar, metric verisi, gönderim geçmişi ve form datası çekilir. Flow'lar PORTZEN'in workflow editöründe yeniden kurulur (kopya değil, optimize edilerek). Segment kriterleri ve etiketler korunur. Tipik taşıma 14-18 iş günü sürer. Pilot ay süresince Klaviyo paralel çalışmaya devam edebilir, sıfır kesinti riski."
  },
  {
    q: "Türk e-ticaret platformlarına entegre mi?",
    a: "T-Soft, Ideasoft, Ticimax, Shopify, WooCommerce, Magento, Opencart için hazır connector vardır. Trendyol, Hepsiburada, N11, Çiçeksepeti gibi pazaryerleri için n8n köprüsü kurulur, sipariş ve müşteri verisi otomatik akar. Klaviyo'da Türk pazaryerleri için native entegrasyon yoktur, custom API ile çözmeniz gerekir."
  },
  {
    q: "RFM segmentasyon ve predictive analytics var mı?",
    a: "Evet. PORTZEN Pro paket itibarıyla; recency (son alışveriş tarihi), frequency (alışveriş sıklığı), monetary (toplam harcama) değerlerine göre dinamik segment oluşturur. Üzerine lifetime value tahmini, churn risk skoru (60/90 günde ayrılma olasılığı), next best offer önerisi ve replenishment cycle tahmini gelir. Klaviyo'nun Predictive Analytics özelliklerinin pratik karşılığıdır."
  },
  {
    q: "WhatsApp ve SMS dahil mi, ek modül mü?",
    a: "Email + resmi WhatsApp Business API + SMS aynı altyapıda gelir, ek modül lisansı yoktur. Üç kanal aynı flow editöründe orkestre edilir. Klaviyo'nun SMS modülü ayrı kredi gerektirir (ülke bazlı fiyat), WhatsApp ise henüz native değildir; üçüncü parti BSP entegrasyonu ister. PORTZEN tek faturada üç kanal sunar."
  },
  {
    q: "Teslim oranı ve domain yönetimi nasıl?",
    a: "Gönderim domaini için SPF, DKIM ve DMARC DNS kayıtları kurulum aşamasında yapılır. Backend olarak Resend, Amazon SES veya Brevo kullanılır; teslim oranı tipik %99 bandındadır. Spam puanı, inbox placement, bounce ve complaint oranı haftalık raporlanır. Kurumsal pakette adanmış IP ve ısıtma süreci dahildir."
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
              <span className="text-ink">Klaviyo Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Klaviyo Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Klaviyo Alternatifi: E-Ticaret Otomasyonu Yarı Maliyetle, TL Faturalı
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Klaviyo profil bazlı USD üzerinden ücretlendirir; 25.000 profilde aylık $700 (≈₺28.000) seviyesine çıkar. PORTZEN; cart abandonment, post-purchase, win-back, RFM segmentasyon ve WhatsApp + email + SMS karması akışları yarı maliyetle, TL faturalı, KVKK uyumlu kurar.
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
                    href="/crm-otomasyonu/e-ticaret"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    E-Ticaret CRM <ArrowUpRight className="h-4 w-4" />
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
                Klaviyo'nun Türk e-ticareti için 6 zayıf yönü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klaviyo global lider, ama Türkiye e-ticareti için fazla pahalı ve kanal eksikli.
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
                Klaviyo vs PORTZEN - 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Klaviyo</th>
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
                          <span className="text-xs">{row.manychat}</span>
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
              <strong>Kaynak:</strong> Klaviyo fiyatları klaviyo.com/pricing referans alınmıştır; Omnisend ve Brevo karşılaştırması müşteri taşıma deneyimlerine dayanır.
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
                Taşıma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Klaviyo'dan 16 günde nasıl çıkarsınız?
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
                E-ticaret için Klaviyo'da olmayan 6 yetenek
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

      {/* 6. USE CASE */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir vaka: İstanbul kozmetik DTC markası
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Klaviyo $850/ay'dan PORTZEN'e - cart abandonment geliri 2.8x, fatura yarı yarıya.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İstanbul'da bir DTC kozmetik markası 3 yıldır Klaviyo kullanıyordu. 32.000 aktif profil, Shopify mağazası, ayda 18-22 kampanya. Klaviyo fiyatı $850/ay (≈₺34.000), SMS modülü ek $180/ay (≈₺7.200). Aylık iletişim faturası toplam ₺41.000 civarındaydı.
                </p>
                <p>
                  3 ana sıkıntı vardı: (1) Cart abandonment akışı sadece e-mail + SMS, açılma oranı %22 / %14, sepet kurtarmadan aylık 240 sipariş geliyordu, (2) Trendyol mağazası vardı ama müşteri verisi Klaviyo'ya aktarılamıyor, segmentasyon sadece Shopify ile yapılıyordu, (3) KVKK aydınlatma akışı manuel, İYS izin kontrolü ayrı script ile yapılıyor, denetim riski oluşuyordu.
                </p>
                <p>
                  PORTZEN 16 günde devreye alındı. Klaviyo API üzerinden 32.000 profil + 18 segment + 11 flow taşındı. Shopify + Trendyol n8n köprüsü kuruldu, çift yönlü müşteri ve sipariş datası senkronize edildi (Trendyol siparişi de PORTZEN segmentlerine düştü). Cart abandonment akışı çok kanallı kuruldu: 1. saat WhatsApp (ürün görseli + sepet linki), 24. saat e-mail (alternatif önerileri), 72. saat SMS (kupon kodu). İYS entegrasyonu otomatik kuruldu, 2.400 izinsiz adres ayıklandı.
                </p>
                <p>
                  3 ay sonra: cart abandonment'tan aylık sipariş 240'tan 672'ye çıktı (2.8x). WhatsApp utility açılma oranı %78, ek gelir aylık ₺520.000+. Toplam iletişim faturası ₺41.000'den ₺22.000'e düştü (%46 tasarruf). KVKK denetimine hazır rapor formatı kuruldu, müşteri hizmetleri yükü WhatsApp AI cevap akışı ile %30 azaldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Klaviyo + SMS</div>
                  <div className="font-display text-3xl font-black mb-1">$1.030/ay</div>
                  <div className="text-sm">≈ ₺41.000 (toplam)</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">PORTZEN</div>
                  <div className="font-display text-3xl font-black text-brand-green">₺22.000/ay</div>
                  <div className="text-sm">Sabit, 3 kanal dahil</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Cart abandonment</div>
                  <div className="font-display text-4xl font-black mb-1">240 → 672</div>
                  <div className="text-sm">Aylık sipariş (2.8x)</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İletişim faturası</div>
                  <div className="font-display text-4xl font-black text-brand-pink">-%46</div>
                  <div className="text-sm">Tek altyapı, TL fatura</div>
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
                3 paket - profil bazlı ekstra yok
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Klaviyo'nun profil bazlı artan ücretlendirmesinin aksine PORTZEN sabit pakettir. Müşteri listeniz büyüdükçe faturanız katlanmaz.
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
                <div className="font-display text-lg font-black mb-1">Sepet bırakma şablon kütüphanesi</div>
                <p className="text-sm opacity-90">
                  Hazır WhatsApp, e-mail ve SMS sepet bırakma şablonları, en yüksek dönüşüm veren versiyonlar.
                </p>
              </div>
              <Link
                href="/blog/abandoned-cart-email-sablonlari"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Şablonları Gör <ArrowUpRight className="h-3.5 w-3.5" />
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
                Klaviyo'dan geçmeden önce merak edilenler
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
                <Mail className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Mailchimp vs Klaviyo</h3>
                <p className="text-sm opacity-85 mb-3">
                  Iki büyük rakibin yan yana karşılaştırması, hangisi hangi senaryoya uyar.
                </p>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Blog Karşılaştırma <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <ShoppingCart className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">E-ticaret CRM detayı</h3>
                <p className="text-sm opacity-85 mb-3">
                  E-ticaret odaklı CRM otomasyonu, modüller ve referans vakalar.
                </p>
                <Link href="/crm-otomasyonu/e-ticaret" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  E-Ticaret CRM <ArrowUpRight className="h-3.5 w-3.5" />
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
                Klaviyo faturasını yarıya indirelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Klaviyo kurulumunuzu, aktif profil sayınızı ve flow'larınızı analiz ediyoruz. Hangi akışların PORTZEN'de daha güçlü kurulabileceğini netleştiriyor, tahmini tasarruf ve dönüşüm artışı raporu çıkarıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
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
                <Link href="/crm-otomasyonu/e-ticaret" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  E-Ticaret CRM <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/abandoned-cart-email-sablonlari" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Sepet Bırakma Şablonları <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Mailchimp vs Klaviyo <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/mailchimp-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Mailchimp Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
