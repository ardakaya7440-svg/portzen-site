import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Video,
  Clock3,
  Sparkles,
  Languages,
  Palette,
  Layers,
  Camera,
  MessageCircle,
  Building2,
  CheckCircle2,
  Music
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PRICING, familyOffersSchema, familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "AI Reklam Videosu | Çekim Ekibi Olmadan Üretim — PORTZEN",
  description:
    "AI reklam videosu üretimi: yapay zeka ile profesyonel ürün, marka, hizmet videoları. Çekim ekibi yok; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Ücretsiz brief.",
  keywords: [
    "ai reklam videosu",
    "yapay zeka ile video üretimi",
    "yapay zeka ajansı",
    "ai video reklam",
    "ai video üretimi",
    "yapay zeka video"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ai-reklam-videosu",
    siteName: "PORTZEN",
    title: "AI Reklam Videosu | Çekim Ekibi Olmadan Üretim — PORTZEN",
    description:
      "Yapay zeka ile profesyonel reklam videoları. Çekim ekibi yok, oyuncu yok; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Ürün, marka, hizmet için."
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Reklam Videosu | Çekim Ekibi Olmadan",
    description:
      "PORTZEN, markalar için AI ile reklam videosu üretir; çekim ekibi gerekmez."
  },
  alternates: { canonical: "https://portzenai.com/ai-reklam-videosu" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Reklam Videosu Üretimi",
  serviceType: "Yapay Zeka ile Video Üretimi ve AI Video Reklam",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Yapay zeka ile profesyonel reklam videoları üretiyoruz. Çekim ekibi, oyuncu, stüdyo gerekmez — video brief'ten üretilir; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Instagram Reels, TikTok, YouTube Shorts, Meta Ads için ürün, marka ve hizmet videoları.",
  offers: familyOffersSchema(PRICING["ai-reklam-filmi"])
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "AI reklam videosu gerçek çekimden farkı ne?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Çekim ekibi, oyuncu, stüdyo, mekan tutmaya gerek kalmaz. Çekim takvimi gerekmediği için süreç sadeleşir ve çekim maliyeti oluşmaz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Marka tonunuza uygun avatar, mekan ve aksiyon yapay zeka ile üretilir; profesyonel seslendirme eklenir."
      }
    },
    {
      "@type": "Question",
      name: "Teslim süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi; film süresi, sahne sayısı, format sayısı ve revizyon kapsamına göre değiştiği için teklifte yazılı olarak belirtilir. Birden fazla film için teslim takvimi birlikte planlanır."
      }
    },
    {
      "@type": "Question",
      name: "Fiyatı nasıl belirleniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `AI reklam filmi proje başı üç pakettir (KDV hariç): ${familyPriceSummary("ai-reklam-filmi")}. Başlangıç 10–15 sn ve en fazla 3 sahne, Büyüme en fazla 30 sn / 6 sahne ve 2 kısa kesit, Kurumsal en fazla 60 sn / 12 sahne, özel konsept ve storyboard içerir. AI seslendirme dahil, saha çekimi hariçtir.`
      }
    },
    {
      "@type": "Question",
      name: "Türkçe seslendirme yapılabiliyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Doğal Türkçe AI seslendirme, lip-sync ve markaya özel ses tonu seçenekleri var. İsterseniz İngilizce, Arapça gibi diğer dillerde de üretiyoruz — aynı video farklı dillerde."
      }
    },
    {
      "@type": "Question",
      name: "Hangi platformlar için video üretiyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram Reels, TikTok, YouTube Shorts, Meta Ads (Facebook + Instagram reklam), Google Ads video, web sitesi banner, e-ticaret ürün videoları. Teslim edilen format sayısı pakete göre değişir (9:16, 1:1, 16:9 arasından); en geniş format seti Kurumsal pakettedir."
      }
    },
    {
      "@type": "Question",
      name: "Revizyon hakkımız var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Revizyon kapsamı ve küçük düzeltmelerin (metin, müzik, kesim) süresi teklifte yazılı olarak belirtilir. Paketin sahne sınırını aşan yeni sahne ekleme ayrı iş olarak planlanır."
      }
    },
    {
      "@type": "Question",
      name: "AI influencer/avatar hizmeti de veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Markaya özel AI avatar üretiyoruz — yüzü, sesi, kişiliği size ait. Bu avatar haftalık içerik üretir, sosyal medyada düzenli görünür. Detaylar için detaylı hizmet sayfasına bakabilirsiniz."
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
      name: "AI Reklam Videosu",
      item: "https://portzenai.com/ai-reklam-videosu"
    }
  ]
};

const stats = [
  { metric: "AI ses", label: "Seslendirme her pakette dahil" },
  { metric: "0 ekip", label: "Çekim, oyuncu, stüdyo yok" },
  { metric: "Çoklu format", label: "9:16, 1:1, 16:9 — sayısı pakete göre" },
  { metric: "4K", label: "Sinematik kalite çıktı" }
];

const problems = [
  "Çekim ekibi, oyuncu ve stüdyo masrafı tek bir video için on binlerce TL'ye çıkıyor — küçük marka kalkamıyor.",
  "Bir reklam videosu hazırlamak haftalar sürüyor; sezon, kampanya, indirim fırsatı geçip gidiyor.",
  "Modeller, mekan ve donanım kiralamak için her seferinde aynı yorucu süreci yeniden yaşamak.",
  "Sosyal medyada haftada 3-5 yeni video gerekiyor ama bu hızda üretim imkansız görünüyor.",
  "Test edip beğenmediğiniz konsept için zaten ciddi bir bütçe yakmış oluyorsunuz — A/B test lüks."
];

const features = [
  {
    icon: Clock3,
    title: "Planlı teslim",
    desc: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir; üretim kampanya tarihinize göre planlanır."
  },
  {
    icon: Camera,
    title: "Çekim ekibi yok",
    desc: "Oyuncu, stüdyo, ekipman maliyeti sıfır. AI tüm görüntüyü üretir."
  },
  {
    icon: Languages,
    title: "Türkçe seslendirme",
    desc: "Doğal AI sesleri + lip-sync. İngilizce, Arapça opsiyonel."
  },
  {
    icon: Layers,
    title: "Çoklu format teslim",
    desc: "Reels (9:16), kare (1:1), yatay (16:9) — teslim edilen format sayısı pakete göre değişir."
  },
  {
    icon: Palette,
    title: "Marka stiline özel",
    desc: "Renkleriniz, tonunuz, logo yerleşimi — marka kitabınıza uygun."
  },
  {
    icon: Music,
    title: "Müzik + ses efekti",
    desc: "Kullanım hakkı olan müzik ve ses efektleri seçilir; kullanım koşulları teklifte belirtilir."
  }
];


const faqs = [
  {
    q: "AI reklam videosu gerçek çekimden farkı ne?",
    a: "Çekim ekibi, oyuncu, stüdyo, mekan tutma derdi yok. Çekim takvimi gerekmediği için süreç sadeleşir ve çekim maliyeti oluşmaz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Görüntü kalitesi sinematik — 2025 itibarıyla AI video çıktıları çoğu zaman insanın 'çekim mi AI mi?' diye ayırt edemediği seviyede. Marka tonunuza uygun avatar, mekan, aksiyon AI ile üretilir; profesyonel Türkçe seslendirme eklenir."
  },
  {
    q: "Teslim süresi ne kadar?",
    a: "Süreç üç adımdan oluşur: brief ve konsept, üretim, revizyon ve teslim. Teslim süresi; film süresi, sahne sayısı, format sayısı ve revizyon kapsamına göre değiştiği için teklifte yazılı olarak belirtilir. Birden fazla film için teslim takvimi birlikte planlanır."
  },
  {
    q: "Fiyatı nasıl belirleniyor, kalemler nedir?",
    a: `AI reklam filmi proje başı üç pakettir (KDV hariç): ${familyPriceSummary("ai-reklam-filmi")}. Fark; süre, sahne sayısı, format sayısı ve konsept/storyboard çalışmasından gelir. AI seslendirme dahil, saha çekimi hariçtir.`
  },
  {
    q: "Türkçe seslendirme doğal duyuluyor mu?",
    a: "Evet. 2025 itibarıyla AI Türkçe sesler insan sesi kalitesinde. 8+ farklı ton seçeneği var: sıcak kadın, profesyonel erkek, genç enerjik, otoriter, esprili vs. Markanızın tonuna göre seçiyoruz, isterseniz örnek dinletiyoruz. Lip-sync videolarda dudak hareketleri ses ile senkron."
  },
  {
    q: "Hangi platformlar için video üretiyorsunuz?",
    a: "Instagram Reels, TikTok, YouTube Shorts, Meta Ads (Facebook + Instagram reklam), Google Ads video, web sitesi banner ve hero videoları, e-ticaret ürün tanıtım videoları. Format sayısı pakete göre değişir (9:16 dikey, 1:1 kare, 16:9 yatay arasından); en geniş format seti Kurumsal pakettedir."
  },
  {
    q: "Revizyon hakkı kaç tane, ne kadar sürer?",
    a: "Revizyon kapsamı ve küçük düzeltmelerin (metin, müzik, kesim) süresi teklifte yazılı olarak belirtilir. Paketin sahne sınırını aşan yeni sahne ekleme ayrı iş olarak planlanır."
  },
  {
    q: "AI avatar/influencer hizmeti veriyor musunuz?",
    a: "Evet. Markaya özel AI avatar üretiyoruz — yüzü, sesi, kişiliği size ait olur, başka markada kullanılmaz. Bu avatar haftalık içerik üretir, sosyal medyada düzenli görünür, hiçbir oyuncu maaşı veya çekim takvimi gerekmez. Detaylı bilgi için AI Video hizmet sayfamıza bakın."
  }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* 1. HERO */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/80">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">AI Reklam Videosu</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Video className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yapay Zeka Video Üretimi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl">
                  AI Reklam Videosu | Çekim Ekibi Olmadan Üretim
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body opacity-95 font-medium">
                  Yapay zeka ile profesyonel reklam videoları. Çekim ekibi, oyuncu, stüdyo derdi yok — video brief&apos;ten üretilir; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. PORTZEN, ürün satan markalar, restoranlar, klinikler ve e-ticaret için reklam videosu üretir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Brief Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/yapay-zeka-video-uretimi"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    Örnekleri İncele <ArrowUpRight className="h-4 w-4" />
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
                      "border-3 border-ink/15 p-5 shadow-brutal rounded-2xl",
                      i % 2 === 0 ? "bg-light text-ink" : "bg-light text-ink"
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

      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Reklam videosu çekmek artık bir lüks değil, bir tıkanıklık.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Hizmetin tam içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                AI reklam videonuzda neler var?
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
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

      {/* 6. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: e-ticaret markası
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: bir e-ticaret markası için 5 filmlik AI video planı nasıl kurulur?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed">
                <p>
                  Bu örnek senaryoda marka ev tekstili satıyor. Geleneksel video çekimi için ajanslardan teklif alıyor — tek video için yüksek bütçe ve uzun bir çekim planı; üstelik beğenmediği konsepti silip yeniden çekemiyor. Reklamda eski katalog görsellerini kullanıyor.
                </p>
                <p>
                  Brief&apos;te 5 ürün kategorisi, hedef kitle (25-45 yaş kadın, ev sahibi) ve mevsim kampanyaları (ilkbahar yenileme) konuşulur. Beş filmlik bir üretim planı hazırlanır: her biri 15 saniye, Instagram Reels + Meta Ads formatında. Filmler kampanya takvimine yayılır — biri nevresim, sonraki perde, sonraki yatak örtüsü.
                </p>
                <p>
                  Her video farklı bir konsepte sahip olur: &apos;sabah uyanış&apos; (yatak odası), &apos;akşam huzur&apos; (oturma odası), &apos;minimalist ev&apos; (mutfak). AI ile ürünler farklı modellerde, farklı mekanlarda gösterilir. Türkçe sıcak kadın seslendirme + chill müzik kullanılır.
                </p>
                <p>
                  İş akışında değişen şu: tek bir çekime bağlı kalmak yerine birden fazla konsept elde edilir. Videolar Meta Ads&apos;te aynı bütçeyle A/B test edilir; hangi konseptin daha iyi çalıştığı reklam panelindeki verilerle izlenir ve bütçe o videoya kaydırılır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Katalog</div>
                  <div className="text-sm">Reklamda eski katalog görselleri</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">AI video</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Üretim karşılaştırma</div>
                  <div className="font-display text-3xl font-black mb-1">1 konsept</div>
                  <div className="text-xs opacity-70">Geleneksel çekim</div>
                  <div className="mt-3 font-display text-3xl font-black text-ink">5 konsept</div>
                  <div className="text-xs opacity-70">AI üretim planı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Ölçüm</div>
                  <div className="font-display text-4xl font-black text-ink">A/B test</div>
                  <div className="text-sm">Konseptler aynı bütçeyle karşılaştırılır</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="ai-reklam-filmi" heading="AI reklam filmi fiyatları" />


      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce merak edilenler
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
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2">Sosyal medya yönetimi de istiyor musunuz?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Video üretimini Instagram DM otomasyonuyla birlikte planlayabilirsiniz.
                </p>
                <Link
                  href="/instagram-dm-otomasyonu"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                <Sparkles className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-lg font-black mb-2">Markanıza özel AI influencer isteyenler için</h3>
                <p className="text-sm opacity-85 mb-3">
                  Hep aynı avatar — yüzü, sesi size ait, başka markada kullanılmaz.
                </p>
                <Link
                  href="/yapay-zeka-video-uretimi"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                >
                  AI Video Hizmeti <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="ai-reklam-videosu" />
      <RelatedLocationsSection service="ai-reklam-videosu" />

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Reklam videonuzu brief&apos;ten birlikte planlayalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz brief görüşmesinde markanıza uygun konsepti ve paketi belirliyoruz. WhatsApp&apos;tan yazın veya iletişim formunu doldurun — en kısa sürede dönüş yapıyoruz.
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
                  <span className="font-bold">İzmir — Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
