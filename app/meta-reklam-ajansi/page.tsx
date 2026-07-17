import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Target,
  TrendingUp,
  Layers,
  LineChart,
  Sparkles,
  Users,
  ShoppingCart,
  Megaphone,
  PlayCircle,
  MessageCircle,
  ClipboardCheck,
  Settings,
  Rocket,
  BarChart3,
  CheckCircle2,
  Building2,
  Zap,
  ShieldCheck,
  Wallet,
  Eye,
  MousePointerClick
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi - PORTZEN",
  description:
    "Meta reklam ajansı arıyorsanız PORTZEN. Facebook ve Instagram reklamlarını ROAS odaklı yönetir, AI ile kreatif üretiriz. KOBİ için ölçülebilir sonuç, şeffaf raporlama.",
  keywords: [
    "meta reklam ajansı",
    "facebook reklam ajansı",
    "instagram reklam ajansı",
    "meta ads agency turkey",
    "facebook ads yönetimi",
    "instagram ads yönetimi",
    "kobi meta reklam",
    "meta business yönetimi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/meta-reklam-ajansi",
    siteName: "PORTZEN",
    title: "Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi - PORTZEN",
    description:
      "Facebook ve Instagram reklamlarını ROAS odaklı yöneten Meta reklam ajansı. AI destekli kreatif üretim, şeffaf raporlama, KOBİ için ölçülebilir sonuç."
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi",
    description:
      "PORTZEN, KOBİ'ler için Meta reklamlarını ROAS odaklı yönetir. Haftalık 8-12 kreatif varyant testi, şeffaf haftalık raporlama."
  },
  alternates: { canonical: "https://portzenai.com/meta-reklam-ajansi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Meta Reklam Yönetimi (Facebook Instagram Ads)",
  serviceType: "Meta Reklam Yönetimi (Facebook Instagram Ads)",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Facebook ve Instagram reklamlarının kurulumu, kreatif üretimi, A/B testleme, Pixel + Conversions API entegrasyonu ve haftalık raporlama dahil tam kapsamlı Meta reklam yönetimi. KOBİ ve markalar için ROAS odaklı yönetim."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Meta reklam ajansı ile çalışmak ne kadara mal olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Ajans yönetim ücreti ile Meta'ya ödenen reklam bütçesi ayrı işler; brief görüşmesinde sektör, hedef ve reklam bütçesine göre net rakam paylaşıyoruz. 30 dakikalık ücretsiz brief görüşmesinde belirliyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Facebook ve Instagram reklamları kaç günde sonuç verir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İlk veriler 7-10 gün içinde gelir, ancak Meta algoritmasının öğrenme aşamasını tamamlaması ortalama 14-21 gün sürer. ROAS (reklam harcama getirisi) optimizasyonunda gerçek istikrar genellikle 30-45 gün sonra netleşir. Bu sürede haftalık optimizasyon yapılır ve düşük performanslı kreatifler değiştirilir."
      }
    },
    {
      "@type": "Question",
      name: "ROAS nedir ve sizden ne kadar ROAS bekleyebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROAS (Return on Ad Spend), her 1 birim reklam harcamasından kaç birim ciro döndüğünüzü gösterir. E-ticaret projelerinde 3.5x ROAS hedefliyoruz, hizmet sektöründe lead başına maliyet (CPA) odaklı çalışıyoruz. İlk ay sektör ortalaması, ikinci aydan itibaren yüzde 20-40 üzerinde performans hedefliyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Reklam kreatiflerini ben mi hazırlıyorum ajans mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm reklam kreatifleri PORTZEN ekibi tarafından AI destekli üretilir. Statik görsel, video, carousel ve Reels formatlarında haftada 8-12 yeni varyasyon test edilir. Sizin sadece ürün fotoğrafı veya ham çekim sağlamanız yeterli, bazı projelerde stok görseller ile de tam kreatif üretebiliriz."
      }
    },
    {
      "@type": "Question",
      name: "Pixel ve Conversions API zaten kurulu, neden ajansla çalışayım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pixel kurulu olmak yetmez. iOS 14.5 sonrası dönemde Conversions API (CAPI) ile sunucu taraflı veri akışı, doğru olay isimlendirmesi, Domain Verification ve katmanlı dönüşüm olayları kritik. PORTZEN audit aşamasında mevcut kurulumunuzu test eder, eksikleri 5-7 gün içinde tamamlar. Yanlış kurulum nedeniyle Meta'nın yüzde 30-40 daha az veri görmesi sık karşılaştığımız durumdur."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı, ne zaman iptal edebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minimum çalışma süresi 3 aydır çünkü Meta algoritmasının öğrenme fazı en az 30-45 gün sürer ve ilk ayda anlamlı sonuç ölçmek zordur. 3 ay sonrası aylık devam eden esnek sözleşme yapısı vardır, 30 gün önceden bildirimle iptal edebilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "Hangi sektörlere Meta reklamı yönetiyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "E-ticaret, hizmet sektörü ve yerel işletmelerde yoğunlaşıyoruz. Eczane, estetik klinik, emlak ofisi, restoran, butik mağaza, oto servis, hukuk bürosu, online eğitim ve B2B SaaS firmaları odaklandığımız sektörler arasında. Tüm Türkiye'ye uzaktan hizmet veriyoruz, İzmir merkezli operasyon yürütüyoruz."
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
      name: "Meta Reklam Ajansı",
      item: "https://portzenai.com/meta-reklam-ajansi"
    }
  ]
};

const stats = [
  { metric: "3.5x", label: "E-ticaret ROAS hedefi" },
  { metric: "8-12", label: "Haftalık kreatif varyant testi" },
  { metric: "%0", label: "Reklam bütçesinden komisyon" },
  { metric: "14 gün", label: "Setup + ilk lansman" }
];

const whyPortzen = [
  {
    icon: Sparkles,
    title: "Haftalık 8-12 kreatif varyant testi",
    desc: "AI destekli üretim hattıyla statik görsel, video ve Reels formatlarında haftada 8-12 varyasyon test eder, kazanan kreatifi hızla ölçekleriz."
  },
  {
    icon: TrendingUp,
    title: "ROAS odaklı, vanity metric değil",
    desc: "Beğeni, takipçi, gösterim raporları okumayız. Tek odak: ROAS (Return on Ad Spend), CPA (Cost Per Acquisition) ve LTV (Lifetime Value). Sonuç olmayan kanal kapanır."
  },
  {
    icon: ShieldCheck,
    title: "Türk piyasası için Pixel + CAPI hazırlık",
    desc: "iOS 14.5 sonrası dönemde Pixel tek başına yetmez. Conversions API (sunucu taraflı veri), Domain Verification ve katmanlı olay isimlendirmesini sektör ortalamasının üstünde kurarız."
  },
  {
    icon: Eye,
    title: "Şeffaf raporlama, her hafta dashboard",
    desc: "Her hafta canlı Looker Studio veya Meta Business Suite dashboard linki alırsınız. ROAS, CPA, CPM (Cost Per Mille), CTR, frekans tek ekranda. Soru sormak için ay sonunu beklemezsiniz."
  }
];

const scope = [
  {
    icon: Target,
    title: "Kampanya stratejisi",
    desc: "Awareness, Consideration ve Conversion funnel'larını sektörünüze göre planlarız. Soğuk trafikten satışa kadar her aşama için ayrı kampanya yapısı."
  },
  {
    icon: Users,
    title: "Audience builder",
    desc: "Lookalike (benzer kitle), Custom Audience (özel kitle), Retargeting (yeniden hedefleme) ve interest-based hedefleme. CRM verinizi pazarlama izinleriyle Meta'ya senkron ederiz."
  },
  {
    icon: PlayCircle,
    title: "Kreatif üretim",
    desc: "Statik görsel, video, carousel ve Reels Ads formatlarında haftada 8-12 yeni varyasyon. AI destekli, ürün çekimi sağlamasanız bile üretiriz."
  },
  {
    icon: Settings,
    title: "Pixel + CAPI + Domain Verification",
    desc: "Tam teknik kurulum: Meta Pixel, Conversions API, Domain Verification, katmanlı olay isimlendirmesi (Add to Cart, Initiate Checkout, Purchase) ve test."
  },
  {
    icon: Layers,
    title: "A/B testleme",
    desc: "Haftalık 8-12 varyasyon test edilir, kazanan kreatif ölçeklenir. Görsel, başlık, CTA, hedef kitle ayrı ayrı test edilir, hipotez bazlı çalışırız."
  },
  {
    icon: Wallet,
    title: "Bütçe optimizasyonu",
    desc: "CBO (Campaign Budget Optimization), ABO (Adset Budget Optimization) ve manuel bid stratejileri. Bütçenizi gün içinde performansa göre yönlendiririz."
  },
  {
    icon: BarChart3,
    title: "Aylık raporlama",
    desc: "ROAS, CPA, CPM, CTR (Click-Through Rate), frekans, AOV (Average Order Value), CAC (Customer Acquisition Cost) tek raporda. Yorum + öneri + bir sonraki ay planı dahil."
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business entegrasyonu",
    desc: "Click-to-WhatsApp Ads ile reklamdan direkt WhatsApp konuşmasına gelen lead toplama. Hizmet sektörü için en yüksek dönüşümlü Meta reklam formatı."
  }
];

const adTypes = [
  {
    icon: ClipboardCheck,
    title: "Lead Ads",
    desc: "Form doldurmalı reklam formatı. Kullanıcı Facebook veya Instagram'dan çıkmadan adını, telefon ve e-postasını bırakır. Hizmet sektörü için ideal."
  },
  {
    icon: MessageCircle,
    title: "Click-to-WhatsApp Ads",
    desc: "Reklamı görenler tek tıkla WhatsApp'tan size yazar. CPA en düşük, dönüşüm en yüksek format. Eczane, klinik, butik için patlama yapar."
  },
  {
    icon: ShoppingCart,
    title: "Conversion Ads",
    desc: "E-ticaret için optimize edilmiş, Pixel + CAPI üzerinden satın alma olayına optimize edilen kampanyalar. ROAS odaklı."
  },
  {
    icon: Megaphone,
    title: "Awareness Ads",
    desc: "Yeni markalar veya lansman için marka tanıtım. CPM (bin gösterim maliyeti) düşük tutulur, geniş kitleye erişim sağlanır."
  },
  {
    icon: Layers,
    title: "Catalog Ads (DPA)",
    desc: "DPA (Dinamik Ürün Reklamı) - ürün kataloğunuzdan otomatik üretilen, kullanıcının baktığı ürünü ona geri gösteren retargeting kampanyaları."
  },
  {
    icon: PlayCircle,
    title: "Reels Ads",
    desc: "Instagram ve Facebook Reels üzerinde dikey video reklamlar. 2026'da Meta'nın en düşük CPM'li, en yüksek erişimli reklam formatı."
  }
];

const sectors = [
  { name: "Eczane", desc: "Reçete + dermokozmetik için bölgesel hedefleme, Click-to-WhatsApp.", href: "/instagram-dm-otomasyonu" },
  { name: "Klinik", desc: "Estetik, dermatoloji, ortodonti için yüksek niyetli lead funnel.", href: "/ai-reklam-videosu/klinik" },
  { name: "Emlak", desc: "Bölgesel hedefleme + Lead Ads + retargeting kombine satış hunisi.", href: "/ai-reklam-videosu/emlak" },
  { name: "Restoran", desc: "Yerel hedefleme, rezervasyon dönüşümü, menü tanıtım Reels.", href: "/ai-reklam-videosu/restoran" },
  { name: "E-ticaret", desc: "Catalog Ads + Conversion + dinamik retargeting ile ROAS odaklı.", href: "/ai-reklam-videosu" },
  { name: "Butik", desc: "Instagram Shop + Reels Ads + influencer kreatifleri kombo.", href: "/ai-reklam-videosu/butik" }
];

const cities = [
  { name: "İzmir", desc: "PORTZEN merkez ofis - İzmir KOBİ'leri için yerinde + uzaktan hizmet.", href: "/ai-reklam-videosu/izmir" },
  { name: "İstanbul", desc: "İstanbul markaları için uzaktan tam kapsamlı Meta reklam yönetimi.", href: "/ai-reklam-videosu/istanbul" },
  { name: "Ankara", desc: "Ankara işletmeleri için bölgesel hedefleme + uzaktan operasyon.", href: "/ai-reklam-videosu/ankara" }
];

const packages = [
  {
    name: "Başlangıç",
    scope: "Tek kampanya hedefi + temel kreatif",
    color: "bg-paper",
    features: [
      "1 kampanya hedefi (lead veya satış)",
      "Haftada 4 yeni kreatif varyasyonu",
      "Pixel + CAPI kurulumu",
      "Aylık dashboard + rapor",
      "Aylık 1 strateji toplantısı"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Büyüme",
    scope: "Tam funnel + çoklu kreatif üretimi",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Çoklu kampanya: funnel tam",
      "Haftada 8-12 yeni kreatif",
      "Pixel + CAPI + DPA katalog",
      "Click-to-WhatsApp Ads dahil",
      "Haftalık dashboard + optimizasyon",
      "Aylık 2 strateji toplantısı"
    ],
    cta: "Görüşme Al"
  },
  {
    name: "Kurumsal",
    scope: "Çoklu marka/şube + adanmış ekip",
    color: "bg-paper",
    features: [
      "Çoklu ürün/marka/şube yönetimi",
      "Haftada 20+ kreatif testi",
      "Adanmış kreatif ekibi",
      "Adanmış strateji yöneticisi",
      "SLA + öncelikli destek",
      "Haftalık canlı raporlama"
    ],
    cta: "Görüşme Al"
  }
];

const faqs = [
  {
    q: "Meta reklam ajansı ile çalışmak ne kadara mal olur?",
    a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. PORTZEN'de ajans yönetim ücreti ile Meta'ya ödenen reklam bütçesi ayrı kalemler halinde işler; reklam bütçesi her zaman direkt Meta'ya ödenir, komisyon almıyoruz. 30 dakikalık ücretsiz brief görüşmesinde sektör, hedef ve reklam bütçenize göre net rakam paylaşıyoruz. Hemen /iletisim üzerinden yaz."
  },
  {
    q: "Facebook ve Instagram reklamları kaç günde sonuç verir?",
    a: "İlk veriler 7-10 gün içinde gelir. Ancak Meta algoritmasının öğrenme aşamasını (Learning Phase) tamamlaması ortalama 14-21 gün sürer; bu sürede sonuçlar dalgalı olabilir. ROAS optimizasyonunda gerçek istikrar genellikle 30-45 gün sonra netleşir. Bu sürede haftalık optimizasyon yapılır, düşük performanslı kreatifler değiştirilir, kazanan audience'lar ölçeklenir. Hedefimiz, 60. günde audit sonrası belirlenen ROAS seviyesine ulaşmaktır."
  },
  {
    q: "ROAS nedir ve sizden ne kadar ROAS bekleyebilirim?",
    a: "ROAS (Return on Ad Spend), her 1 birim reklam harcamasından kaç birim ciro döndüğünüzü gösterir. Örneğin bir kampanyada 3.5 katı satış yaptıysanız ROAS 3.5x'tir. E-ticaret projelerinde 3.5x ROAS hedefliyoruz; ürün marjı yüksek nişlerde hedef 5x'in üstüne çıkabilir. Hizmet sektöründe CPA (lead başına maliyet) odaklı çalışıyoruz, sektörünüze göre net hedef ilk audit sonrası verilir. Hiçbir zaman 'garanti ROAS' vaadi yapmıyoruz çünkü sektör, marj ve ürün-pazar uyumu sonucu birinci derece etkiler."
  },
  {
    q: "Reklam kreatiflerini ben mi hazırlıyorum, ajans mı?",
    a: "Tüm reklam kreatifleri PORTZEN ekibi tarafından AI destekli üretilir. Statik görsel, video, carousel ve Reels formatlarında haftada 8-12 yeni varyasyon test edilir. Sizin sadece ürün fotoğrafı veya ham çekim sağlamanız yeterli, bazı projelerde stok görseller ile de tam kreatif üretebiliyoruz. Kreatif üretim sürecimizin detayları için /ai-reklam-videosu sayfamıza göz atabilirsiniz."
  },
  {
    q: "Pixel ve Conversions API zaten kurulu, neden ajansla çalışayım?",
    a: "Pixel kurulu olmak yetmez. iOS 14.5 sonrası dönemde Conversions API (CAPI) ile sunucu taraflı veri akışı, doğru olay isimlendirmesi, Domain Verification ve katmanlı dönüşüm olayları kritik önemde. PORTZEN audit aşamasında mevcut kurulumunuzu test eder, eksikleri 5-7 gün içinde tamamlar. Yanlış kurulum nedeniyle Meta'nın yüzde 30-40 daha az veri görmesi ve dolayısıyla CPA'nın gerçeğin çok üstünde görünmesi sık karşılaştığımız bir durumdur."
  },
  {
    q: "Sözleşme süresi var mı, ne zaman iptal edebilirim?",
    a: "Minimum çalışma süresi 3 aydır çünkü Meta algoritmasının öğrenme fazı en az 30-45 gün sürer ve ilk ayda anlamlı sonuç ölçmek mümkün değildir. 3 ay sonrası aylık devam eden esnek sözleşme yapısı vardır, 30 gün önceden bildirimle iptal edebilirsiniz. Reklam hesabınız size aittir, çalışmamız bitse bile veri ve audience'lar sizinle kalır."
  },
  {
    q: "Hangi sektörlere Meta reklamı yönetiyorsunuz?",
    a: "E-ticaret, hizmet sektörü ve yerel işletmelerde yoğunlaşıyoruz. Eczane, estetik klinik, emlak ofisi, restoran, butik mağaza, oto servis, hukuk bürosu, online eğitim ve B2B SaaS firmaları odaklandığımız sektörler arasında. Tüm Türkiye'ye uzaktan hizmet veriyoruz, İzmir merkezli operasyon yürütüyoruz. İzmir, İstanbul ve Ankara için yerinde brief toplantısı da planlayabiliriz."
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
              <span className="text-ink">Meta Reklam Ajansı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Target className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Performans Reklam Yönetimi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Meta reklam ajansı arıyorsanız PORTZEN doğru adres. Facebook ve Instagram reklamlarınızı ROAS (Return on Ad Spend) odaklı yönetir, AI ile haftada 8-12 kreatif varyant test ederiz. KOBİ'ler ve markalar için 14 günde lansman, şeffaf haftalık raporlama, Pixel + Conversions API tam teknik kurulum dahil.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Audit Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    WhatsApp'tan Yaz <MessageCircle className="h-4 w-4" />
                  </a>
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-pink text-paper"
                    )}
                  >
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">
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

      {/* 2. NEDEN META */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Neden Meta reklamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Türkiye'de 60 milyondan fazla aktif Facebook ve Instagram kullanıcısı var. Müşteriniz aralarında.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={80}>
              <div className="border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
                <Users className="h-7 w-7 text-brand-yellow mb-4" />
                <h3 className="font-display text-lg font-black mb-2">60M+ aktif kullanıcı</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Türkiye nüfusunun yüzde 70'i Meta platformlarında. Yaş, ilgi alanı, davranış, satın alma niyeti bazlı hedefleme imkanı.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
                <MousePointerClick className="h-7 w-7 text-brand-yellow mb-4" />
                <h3 className="font-display text-lg font-black mb-2">Detaylı hedefleme gücü</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Google Ads'in tek başına yapamadığını yapar: kişinin ilgi alanına, geçmiş davranışına, takip ettiği sayfalara göre hedefleme.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
                <ShoppingCart className="h-7 w-7 text-brand-yellow mb-4" />
                <h3 className="font-display text-lg font-black mb-2">Instagram Shop + Marketplace</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Reklam, mağaza ve alışveriş tek ekosistemde. Catalog Ads ile ürün kataloğunuz reklama otomatik dönüşür.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mt-10 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <p className="text-body opacity-90 leading-relaxed max-w-4xl">
                Google Ads ile Meta Ads kıyaslamasını derinlemesine merak ediyorsanız <Link href="/blog/instagram-reklam-vs-google-ads-kobi" className="text-brand-yellow font-bold underline underline-offset-4 hover:no-underline">Instagram Reklam vs Google Ads - KOBİ için hangisi</Link> blog yazımızı okumanızı öneririz. Kararsız KOBİ'lerin çoğu için ilk yatırım Meta ile başlamalı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. NİYE PORTZEN */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Niye PORTZEN
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Neden PORTZEN Meta reklam ajansı?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Yüzlerce Meta ajansı var. PORTZEN'i diğerlerinden ayıran dört net şey.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {whyPortzen.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-blue text-paper shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-black mb-2 text-ink">{w.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{w.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink/70 max-w-3xl">
              Reklam kreatif üretim sürecimizin perde arkası için <Link href="/ai-reklam-videosu" className="text-ink font-bold underline underline-offset-4 hover:no-underline">AI Reklam Videosu Üretimi</Link> sayfasına bakabilirsiniz. Organik tarafta Instagram DM yönetimini otomatize etmek isterseniz <Link href="/instagram-dm-otomasyonu" className="text-ink font-bold underline underline-offset-4 hover:no-underline">Instagram DM Otomasyonu</Link> hizmetimize göz atın.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. HIZMET KAPSAMI */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Hizmet kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Meta reklam yönetiminde size sunduğumuz her şey
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Stratejiden teknik kuruluma, kreatif üretimden raporlamaya kadar uçtan uca. Her başlık altında günlük operasyon işler.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {scope.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 60}>
                  <div className="border-3 border-ink bg-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <Icon className="h-6 w-6 text-ink mb-3" />
                    <h3 className="font-display text-base font-black mb-2 text-ink">{s.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. REKLAM TÜRLERİ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Reklam türleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sektörünüze göre doğru Meta reklam formatı
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Tek format kullanan ajansla çalışıyorsanız zaman kaybediyorsunuz. PORTZEN, sektörünüze ve hedefinize göre 6 format arasında geçiş yapar.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adTypes.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5 text-ink" />
                    </div>
                    <h3 className="font-display text-lg font-black mb-2 text-ink">{a.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed">{a.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div className="max-w-2xl">
                <div className="font-display text-lg font-black mb-1">Click-to-WhatsApp Ads için altyapı hazır mı?</div>
                <p className="text-sm opacity-90">
                  Reklamdan gelen WhatsApp lead'lerine saatlerce yanıt vermezseniz CPA boşa gider. <Link href="/whatsapp-ai-asistani" className="text-brand-yellow font-bold underline underline-offset-4 hover:no-underline">WhatsApp AI Asistanı</Link> ile her lead'e 60 saniyede yanıt verin.
                </p>
              </div>
              <Link
                href="/whatsapp-ai-asistani"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                İncele <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SEKTÖRLER */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörel deneyim
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Meta reklam ajansı olarak çalıştığımız sektörler
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektörün audience tanımı, CPA hedefi ve kreatif dili farklı. PORTZEN'in odağı bu sektörler.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <Link
                  href={s.href}
                  className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-black text-ink">{s.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-ink opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ŞEHİRLER */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şehirler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi şehirlerde Meta reklam yönetimi sunuyoruz?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                İzmir merkezli operasyon, tüm Türkiye'ye uzaktan hizmet. Üç büyük şehirde brief toplantılarımızı yerinde de yapabiliyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={c.href}
                  className="block border-3 border-ink bg-brand-yellow p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group text-ink"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-xl font-black">{c.name}</h3>
                    <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{c.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FİYAT MODELİ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çalışma modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Ajans ücreti ve reklam bütçesi ayrı işler
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                PORTZEN size ajans yönetim ücreti faturalar. Reklam bütçesi her zaman direkt Meta'ya ödenir, kazanılan komisyon yapısı kullanılmaz. Kapsam bazlı çalışıyoruz; net rakam brief görüşmesinde paylaşılır.
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
                  <div className="text-sm font-bold opacity-75 mb-6">{p.scope}</div>
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
          <Reveal delay={350}>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border-3 border-ink bg-paper p-5 shadow-brutal-sm">
                <Zap className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink">Komisyon yok, performans modeli yok</h3>
                <p className="text-sm text-ink/70">
                  Bazı ajanslar reklam bütçesi yüzdesi üzerinden fiyatlanır. Bu model büyük bütçede ajansa motivasyon yaratır, küçükte unutulursunuz. PORTZEN sabit kapsam bazlı çalışır, sizin tarafınızda durur.
                </p>
              </div>
              <div className="border-3 border-ink bg-paper p-5 shadow-brutal-sm">
                <Rocket className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink">Hesap size aittir</h3>
                <p className="text-sm text-ink/70">
                  Meta Business hesabını biz açmayız, sizin Business Manager'ınıza partner ekleniriz. Çalışmamız bitse bile hesap, audience'lar ve veriler sizinle kalır.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-6 border-3 border-ink bg-brand-green text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div className="max-w-2xl">
                <div className="font-display text-lg font-black mb-1">Ajansla mı kendin mi çalışmalıyım?</div>
                <p className="text-sm opacity-90">
                  Karar vermeden önce <Link href="/blog/facebook-reklam-ajans-mi-kendin-mi" className="text-brand-yellow font-bold underline underline-offset-4 hover:no-underline">Facebook reklam - ajansla mı kendin mi yönet</Link> blog yazımızı okuyun. Net karar matrisi var.
                </p>
              </div>
              <Link
                href="/blog/facebook-reklam-ajans-mi-kendin-mi"
                className="inline-flex items-center gap-1 border-3 border-ink bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Yazıyı Oku <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. İLGİLİ HİZMETLER */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Birlikte güçlü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Meta reklam ile birleşince katlanan PORTZEN hizmetleri
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Reklam tek başına hiçbir iş yapmaz. Lead karşılama, organik sosyal medya ve CRM funnel'ı reklamla beraber kurulduğunda gerçek sonuç alınır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={80}>
              <Link href="/sosyal-medya-ajansi" className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group">
                <Megaphone className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">Sosyal Medya Ajansı</h3>
                <p className="text-sm text-ink/70">Organik içerik, planlama, topluluk yönetimi - reklamın organik karşılığı.</p>
              </Link>
            </Reveal>
            <Reveal delay={160}>
              <Link href="/ai-reklam-videosu" className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group">
                <PlayCircle className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">AI Reklam Videosu</h3>
                <p className="text-sm text-ink/70">Reklam kreatiflerinin video tarafı - Reels Ads ve story formatları.</p>
              </Link>
            </Reveal>
            <Reveal delay={240}>
              <Link href="/instagram-dm-otomasyonu" className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group">
                <MessageCircle className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">Instagram DM Otomasyonu</h3>
                <p className="text-sm text-ink/70">Reklamdan gelen DM'leri 7/24 karşılayan AI asistan.</p>
              </Link>
            </Reveal>
            <Reveal delay={320}>
              <Link href="/crm-otomasyonu" className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full group">
                <LineChart className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">CRM Otomasyonu</h3>
                <p className="text-sm text-ink/70">Meta'dan gelen lead'leri CRM'e akıtan, takip dizisi tetikleyen funnel.</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Meta reklam ajansı seçimi öncesi merak edilenler
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
            <div className="mt-12 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-brand-yellow" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">AI reklam videoları konseptini merak ediyorsanız</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Meta kreatiflerini neden AI ile üretmek hız ve maliyet avantajı yaratıyor, blog yazımızda anlattık.
                  </p>
                  <Link
                    href="/blog/ai-reklam-videolari"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                  >
                    AI Reklam Videoları Yazısı <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 12. CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Meta hesabınızı ücretsiz audit edelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz audit görüşmesinde mevcut Meta hesabınızı ve Pixel kurulumunuzu inceler, somut ROAS iyileştirme planı çıkarırız. Hemen WhatsApp yazın veya iletişim formunu doldurun, aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
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
                  <span className="font-bold">İzmir - Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
