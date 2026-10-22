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
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { formatTL, familyPriceSummary, AD_SPEND_CAP, AD_OVERAGE_RATE } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi - PORTZEN",
  description:
    "Meta reklam ajansı arıyorsanız PORTZEN. Facebook ve Instagram reklamlarını ROAS odaklı yönetir, AI ile kreatif üretiriz. KOBİ için ölçüme dayalı yönetim, şeffaf raporlama.",
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
      "Facebook ve Instagram reklamlarını ROAS odaklı yöneten Meta reklam ajansı. AI destekli kreatif üretim, şeffaf raporlama, KOBİ için ölçüme dayalı yönetim."
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi",
    description:
      "PORTZEN, KOBİ'ler için Meta reklamlarını ROAS odaklı yönetir. Düzenli kreatif varyant testi, şeffaf haftalık raporlama."
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
    telephone: "+905318639117",
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
        text: `Reklam yönetimi aylık üç pakettir (KDV hariç): ${familyPriceSummary("reklam-yonetimi")}. Başlangıç Meta veya Google'da aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye, Büyüme Meta + Google'da ${formatTL(AD_SPEND_CAP.buyume)}'ye, Kurumsal ${formatTL(AD_SPEND_CAP.kurumsal)}'ye kadar harcamayı kapsar. Reklam harcaması ayrıdır ve doğrudan platforma ödenir; sınır aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir.`
      }
    },
    {
      "@type": "Question",
      name: "Facebook ve Instagram reklamları kaç günde sonuç verir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Süre bütçe, sektör ve dönüşüm hacmine göre değişir; bu nedenle sabit bir gün sayısı vaat etmiyoruz. Meta algoritmasının öğrenme aşamasında sonuçlar dalgalı olabilir. Bu dönemde haftalık optimizasyon yapılır ve düşük performanslı kreatifler değiştirilir."
      }
    },
    {
      "@type": "Question",
      name: "ROAS nedir ve sizden ne kadar ROAS bekleyebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ROAS (Return on Ad Spend), her 1 birim reklam harcamasından kaç birim ciro döndüğünüzü gösterir. Sabit bir ROAS vaat etmiyoruz; e-ticarette ROAS, hizmet sektöründe lead başına maliyet (CPA) odaklı çalışırız ve hedef seviye audit sonrasında ürün marjı, sektör ve geçmiş hesap verisine göre birlikte belirlenir."
      }
    },
    {
      "@type": "Question",
      name: "Reklam kreatiflerini ben mi hazırlıyorum ajans mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reklam kreatifleri PORTZEN ekibi tarafından AI destekli üretilebilir. Statik görsel, video, carousel ve Reels formatlarında varyasyonlar düzenli test edilir; kreatif adedi ve formatı teklifte belirtilir. Sizin sadece ürün fotoğrafı veya ham çekim sağlamanız yeterli, bazı projelerde stok görseller ile de tam kreatif üretebiliriz."
      }
    },
    {
      "@type": "Question",
      name: "Pixel ve Conversions API zaten kurulu, neden ajansla çalışayım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pixel kurulu olmak yetmez. iOS 14.5 sonrası dönemde Conversions API (CAPI) ile sunucu taraflı veri akışı, doğru olay isimlendirmesi, Domain Verification ve katmanlı dönüşüm olayları kritik. PORTZEN audit aşamasında mevcut kurulumunuzu test eder ve eksikleri tamamlar; süre kurulumun durumuna göre teklifte yazılı olarak belirtilir. Yanlış kurulum nedeniyle Meta'nın dönüşüm olaylarının bir kısmını görememesi sık karşılaşılan bir durumdur."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşme süresi var mı, ne zaman iptal edebilirim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Meta algoritmasının öğrenme aşaması ve optimizasyon döngüsü zaman aldığı için sonuçları ilk aydan değil, birkaç aylık dönemde değerlendirmenizi öneririz."
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
  { metric: "ROAS", label: "E-ticarette ana ölçüt; hedef audit sonrası belirlenir" },
  { metric: "A/B", label: "Düzenli kreatif varyant testi" },
  { metric: "Ayrı", label: "Reklam harcaması doğrudan platforma ödenir" },
  { metric: "CAPI", label: "Pixel + Conversions API kurulumu dahil" }
];

const whyPortzen = [
  {
    icon: Sparkles,
    title: "Sürekli kreatif varyant testi",
    desc: "AI destekli üretim hattıyla statik görsel, video ve Reels formatlarında varyasyonları sistemli test eder, kazanan kreatifi hızla ölçekleriz."
  },
  {
    icon: TrendingUp,
    title: "ROAS odaklı, vanity metric değil",
    desc: "Beğeni, takipçi, gösterim raporları okumayız. Tek odak: ROAS (Return on Ad Spend), CPA (Cost Per Acquisition) ve LTV (Lifetime Value). Sonuç olmayan kanal kapanır."
  },
  {
    icon: ShieldCheck,
    title: "Türk piyasası için Pixel + CAPI hazırlık",
    desc: "iOS 14.5 sonrası dönemde Pixel tek başına yetmez. Conversions API (sunucu taraflı veri), Domain Verification ve katmanlı olay isimlendirmesini kurar, olayların doğru aktığını test ederiz."
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
    desc: "Statik görsel, video, carousel ve Reels Ads formatlarında AI destekli kreatif. Kreatif adedi ve formatı teklifte belirtilir; video kreatifler kısa video veya AI reklam filmi paketleriyle de üretilebilir."
  },
  {
    icon: Settings,
    title: "Pixel + CAPI + Domain Verification",
    desc: "Tam teknik kurulum: Meta Pixel, Conversions API, Domain Verification, katmanlı olay isimlendirmesi (Add to Cart, Initiate Checkout, Purchase) ve test."
  },
  {
    icon: Layers,
    title: "A/B testleme",
    desc: "Varyasyonlar düzenli test edilir, kazanan kreatif ölçeklenir. Görsel, başlık, CTA, hedef kitle ayrı ayrı test edilir, hipotez bazlı çalışırız."
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
    desc: "Click-to-WhatsApp Ads ile reklamdan direkt WhatsApp konuşmasına gelen lead toplama. Hizmet sektöründe sık tercih edilen Meta reklam formatı."
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
    desc: "Reklamı görenler tek tıkla WhatsApp'tan size yazar; form yerine doğrudan konuşma başlar. Eczane, klinik, butik gibi mesajla satış yapan işletmelerde sık kullanılır."
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
    desc: "Instagram ve Facebook Reels üzerinde dikey video reklamlar; Reels akışında, tam ekran gösterilir."
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


const faqs = [
  {
    q: "Meta reklam ajansı ile çalışmak ne kadara mal olur?",
    a: `Reklam yönetimi aylık üç pakettir (KDV hariç): ${familyPriceSummary("reklam-yonetimi")}. Başlangıç Meta veya Google'da aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye, Büyüme Meta + Google'da ${formatTL(AD_SPEND_CAP.buyume)}'ye, Kurumsal ${formatTL(AD_SPEND_CAP.kurumsal)}'ye kadar harcamayı kapsar. Reklam bütçesi her zaman doğrudan platforma ödenir; sınır aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir. Sosyal medya paketindeki reklam hizmetinden geçerken dahil hizmet bedeli mahsup edilir.`
  },
  {
    q: "Facebook ve Instagram reklamları kaç günde sonuç verir?",
    a: "Süre bütçe, sektör ve dönüşüm hacmine göre değişir; bu nedenle sabit bir gün sayısı vaat etmiyoruz. Meta algoritmasının öğrenme aşamasında (Learning Phase) sonuçlar dalgalı olabilir. Bu dönemde haftalık optimizasyon yapılır, düşük performanslı kreatifler değiştirilir, kazanan audience'lar ölçeklenir. Hedef ROAS veya CPA seviyesi audit sonrasında sektörünüze göre birlikte belirlenir."
  },
  {
    q: "ROAS nedir ve sizden ne kadar ROAS bekleyebilirim?",
    a: "ROAS (Return on Ad Spend), her 1 birim reklam harcamasından kaç birim ciro döndüğünüzü gösterir. Örneğin bir kampanyada 3.5 katı satış yaptıysanız ROAS 3.5x'tir. E-ticarette ROAS, hizmet sektöründe CPA (lead başına maliyet) odaklı çalışıyoruz; hedef seviye ürün marjı ve sektörünüze göre ilk audit sonrasında birlikte belirlenir. Hiçbir zaman 'garanti ROAS' vaadi yapmıyoruz çünkü sektör, marj ve ürün-pazar uyumu sonucu birinci derece etkiler."
  },
  {
    q: "Reklam kreatiflerini ben mi hazırlıyorum, ajans mı?",
    a: "Reklam kreatifleri PORTZEN ekibi tarafından AI destekli üretilebilir. Statik görsel, video, carousel ve Reels formatlarında varyasyonlar düzenli test edilir; kreatif adedi ve formatı teklifte belirtilir. Sizin sadece ürün fotoğrafı veya ham çekim sağlamanız yeterli, bazı projelerde stok görseller ile de tam kreatif üretebiliyoruz. Kreatif üretim sürecimizin detayları için /ai-reklam-videosu sayfamıza göz atabilirsiniz."
  },
  {
    q: "Pixel ve Conversions API zaten kurulu, neden ajansla çalışayım?",
    a: "Pixel kurulu olmak yetmez. iOS 14.5 sonrası dönemde Conversions API (CAPI) ile sunucu taraflı veri akışı, doğru olay isimlendirmesi, Domain Verification ve katmanlı dönüşüm olayları kritik önemde. PORTZEN audit aşamasında mevcut kurulumunuzu test eder ve eksikleri tamamlar; süre kurulumun durumuna göre teklifte yazılı olarak belirtilir. Yanlış kurulum nedeniyle Meta'nın dönüşüm olaylarının bir kısmını görememesi ve dolayısıyla CPA'nın gerçeğin üstünde görünmesi sık karşılaşılan bir durumdur."
  },
  {
    q: "Sözleşme süresi var mı, ne zaman iptal edebilirim?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Meta algoritmasının öğrenme aşaması ve optimizasyon döngüsü zaman aldığı için sonuçları ilk aydan değil, birkaç aylık dönemde değerlendirmenizi öneririz. Reklam hesabınız size aittir, çalışmamız bitse bile veri ve audience'lar sizinle kalır."
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
      <section className="bg-white py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Target className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Performans Reklam Yönetimi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Meta Reklam Ajansı | Facebook + Instagram Reklam Yönetimi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Meta reklam ajansı arıyorsanız PORTZEN doğru adres. Facebook ve Instagram reklamlarınızı ROAS (Return on Ad Spend) odaklı yönetir, AI destekli kreatif varyantları sistemli test ederiz. KOBİ&apos;ler ve markalar için şeffaf haftalık raporlama ve Pixel + Conversions API teknik kurulumu dahildir; lansman süresi kapsama göre teklifte yazılı olarak belirtilir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Audit Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    WhatsApp&apos;tan Yaz <MessageCircle className="h-4 w-4" />
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
                      "border-3 border-ink/15 p-5 shadow-brutal rounded-2xl",
                      i % 2 === 0 ? "bg-light" : "bg-light text-ink"
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

      <ServiceAtAGlance href="/meta-reklam-ajansi" />

      <MoreDetails title="Ayrıntılar: Neden Meta reklamı?" summary="Hedefleme ve Meta ekosistemi">
      {/* 2. NEDEN META */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-3xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Neden Meta reklamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Türkiye&apos;de 60 milyondan fazla aktif Facebook ve Instagram kullanıcısı var. Müşteriniz aralarında.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={80}>
              <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                <Users className="h-7 w-7 text-ink mb-4" />
                <h3 className="font-display text-lg font-black mb-2">60M+ aktif kullanıcı</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Türkiye nüfusunun yüzde 70&apos;i Meta platformlarında. Yaş, ilgi alanı, davranış, satın alma niyeti bazlı hedefleme imkanı.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                <MousePointerClick className="h-7 w-7 text-ink mb-4" />
                <h3 className="font-display text-lg font-black mb-2">Detaylı hedefleme gücü</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Google Ads&apos;in tek başına yapamadığını yapar: kişinin ilgi alanına, geçmiş davranışına, takip ettiği sayfalara göre hedefleme.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                <ShoppingCart className="h-7 w-7 text-ink mb-4" />
                <h3 className="font-display text-lg font-black mb-2">Instagram Shop + Marketplace</h3>
                <p className="text-sm opacity-85 leading-relaxed">
                  Reklam, mağaza ve alışveriş tek ekosistemde. Catalog Ads ile ürün kataloğunuz reklama otomatik dönüşür.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mt-10 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <p className="text-body opacity-90 leading-relaxed max-w-4xl">
                Google Ads ile Meta Ads kıyaslamasını derinlemesine merak ediyorsanız <Link href="/blog/instagram-reklam-vs-google-ads-kobi" className="text-ink font-bold underline underline-offset-4 hover:no-underline">Instagram Reklam vs Google Ads - KOBİ için hangisi</Link> blog yazımızı okumanızı öneririz. Kararsız KOBİ&apos;lerin çoğu için ilk yatırım Meta ile başlamalı.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      <MoreDetails title="Ayrıntılar: Neden PORTZEN?" summary="Kreatif testi, ROAS odağı, Pixel + CAPI ve raporlama">
      {/* 3. NİYE PORTZEN */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Niye PORTZEN
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Neden PORTZEN Meta reklam ajansı?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Yüzlerce Meta ajansı var. PORTZEN&apos;i diğerlerinden ayıran dört net şey.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {whyPortzen.map((w, i) => {
              const Icon = w.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-slate text-white shadow-brutal-sm mb-4 rounded-full">
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

      </MoreDetails>
      {/* 4. HIZMET KAPSAMI */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
                  <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
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
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm mb-4 rounded-full">
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
            <div className="mt-10 border-3 border-ink/15 bg-light text-ink p-6 shadow-brutal flex items-center justify-between flex-wrap gap-4 rounded-2xl">
              <div className="max-w-2xl">
                <div className="font-display text-lg font-black mb-1">Click-to-WhatsApp Ads için altyapı hazır mı?</div>
                <p className="text-sm opacity-90">
                  Reklamdan gelen WhatsApp lead&apos;lerine saatlerce yanıt vermezseniz CPA boşa gider. <Link href="/whatsapp-ai-asistani" className="text-ink font-bold underline underline-offset-4 hover:no-underline">WhatsApp AI Asistanı</Link> ile her lead&apos;e otomatik yanıt verin.
                </p>
              </div>
              <Link
                href="/whatsapp-ai-asistani"
                className="inline-flex items-center gap-1 border-3 border-ink/10 bg-paper text-ink px-4 py-2 text-xs font-bold transition-all rounded-full"
              >
                İncele <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: Sektörler ve şehirler" summary="Odaklandığımız sektörler ve hizmet verdiğimiz şehirler">
      {/* 7. SEKTÖRLER */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektörel deneyim
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Meta reklam ajansı olarak çalıştığımız sektörler
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Her sektörün audience tanımı, CPA hedefi ve kreatif dili farklı. PORTZEN&apos;in odağı bu sektörler.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <Link
                  href={s.href}
                  className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl"
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
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Şehirler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi şehirlerde Meta reklam yönetimi sunuyoruz?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                İzmir merkezli operasyon, tüm Türkiye&apos;ye uzaktan hizmet. Üç büyük şehirde brief toplantılarımızı yerinde de yapabiliyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={c.href}
                  className="block border-3 border-ink/15 bg-light p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group text-ink rounded-2xl"
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

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="reklam-yonetimi" heading="Reklam yönetimi fiyatları" />


      {/* 10. İLGİLİ HİZMETLER */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Birlikte güçlü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Meta reklam ile birleşince katlanan PORTZEN hizmetleri
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Reklam tek başına hiçbir iş yapmaz. Lead karşılama, organik sosyal medya ve CRM funnel&apos;ı reklamla beraber kurulduğunda gerçek sonuç alınır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={80}>
              <Link href="/sosyal-medya-ajansi" className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl">
                <Megaphone className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">Sosyal Medya Ajansı</h3>
                <p className="text-sm text-ink/70">Organik içerik, planlama, topluluk yönetimi - reklamın organik karşılığı.</p>
              </Link>
            </Reveal>
            <Reveal delay={160}>
              <Link href="/ai-reklam-videosu" className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl">
                <PlayCircle className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">AI Reklam Videosu</h3>
                <p className="text-sm text-ink/70">Reklam kreatiflerinin video tarafı - Reels Ads ve story formatları.</p>
              </Link>
            </Reveal>
            <Reveal delay={240}>
              <Link href="/instagram-dm-otomasyonu" className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl">
                <MessageCircle className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">Instagram DM Otomasyonu</h3>
                <p className="text-sm text-ink/70">Reklamdan gelen yorum ve hikâye etkileşimlerine kural tabanlı otomatik DM.</p>
              </Link>
            </Reveal>
            <Reveal delay={320}>
              <Link href="/crm-otomasyonu" className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full group rounded-2xl">
                <LineChart className="h-7 w-7 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2 text-ink group-hover:underline">CRM Otomasyonu</h3>
                <p className="text-sm text-ink/70">Meta&apos;dan gelen lead&apos;leri CRM&apos;e akıtan, takip dizisi tetikleyen funnel.</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
                <div className="border-l-3 border-lime pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">AI reklam videoları konseptini merak ediyorsanız</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Meta kreatiflerini neden AI ile üretmek hız ve maliyet avantajı yaratıyor, blog yazımızda anlattık.
                  </p>
                  <Link
                    href="/blog/ai-reklam-videolari"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
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
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Meta hesabınızı ücretsiz audit edelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz audit görüşmesinde mevcut Meta hesabınızı ve Pixel kurulumunuzu inceler, somut bir iyileştirme planı çıkarırız. WhatsApp&apos;tan yazın veya iletişim formunu doldurun, en kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div>
                  <a href="tel:+905318639117" className="font-bold hover:underline">0531 863 91 17</a>
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
