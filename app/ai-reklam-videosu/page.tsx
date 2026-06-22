import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Video,
  Clock3,
  Sparkles,
  Film,
  Wand2,
  Megaphone,
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

export const metadata: Metadata = {
  title: "AI Reklam Videosu | Çekim Ekibi Yok, 3 Günde Teslim — PORTZEN",
  description:
    "AI reklam videosu üretimi: yapay zeka ile profesyonel ürün, marka, hizmet videoları. Çekim ekibi yok, 3 günde teslim. 4.500 TL'den başlar. Ücretsiz brief.",
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
    title: "AI Reklam Videosu | Çekim Ekibi Yok, 3 Günde Teslim — PORTZEN",
    description:
      "Yapay zeka ile profesyonel reklam videoları. Çekim ekibi yok, oyuncu yok, 3 günde teslim. Ürün, marka, hizmet için."
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Reklam Videosu | 3 Günde Teslim",
    description:
      "PORTZEN, markalar için AI ile reklam videosu üretir. 4.500 TL'den başlar, çekim ekibi gerekmez."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Yapay zeka ile profesyonel reklam videoları üretiyoruz. Çekim ekibi, oyuncu, stüdyo gerekmez — sadece brief'ten 3 günde teslim. Instagram Reels, TikTok, YouTube Shorts, Meta Ads için ürün, marka ve hizmet videoları.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺4500-₺75000",
    availability: "https://schema.org/InStock"
  }
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
        text: "Çekim ekibi, oyuncu, stüdyo, mekan tutmaya gerek kalmaz. Süre 3-7 güne iner, maliyet 5-10 kat azalır. Marka tonunuza uygun avatar, mekan ve aksiyon yapay zeka ile üretilir; profesyonel seslendirme eklenir."
      }
    },
    {
      "@type": "Question",
      name: "Teslim süresi gerçekten 3 gün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tek video için brief alındıktan sonra 3 iş günü standart süredir. Paket halinde aylık 5 video için sürekli üretim takvimi kurulur, haftada 1-2 video teslim edilir."
      }
    },
    {
      "@type": "Question",
      name: "Fiyatı nasıl belirleniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tek video 4.500-12.000 TL aralığında — uzunluk, karmaşıklık, revizyon sayısına göre değişir. Aylık 5 video paketi 25.000 TL. Kurumsal düzenli üretim için özel teklif çıkarıyoruz."
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
        text: "Instagram Reels, TikTok, YouTube Shorts, Meta Ads (Facebook + Instagram reklam), Google Ads video, web sitesi banner, e-ticaret ürün videoları. Her platforma uygun format (9:16, 1:1, 16:9) ayrıca teslim edilir."
      }
    },
    {
      "@type": "Question",
      name: "Revizyon hakkımız var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her video için 2 revizyon hakkı standart. Aylık paketlerde sınırsız küçük düzenleme + 3 büyük revizyon. Üretim AI ile olduğu için revizyon süresi 24-48 saat."
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
  { metric: "3 gün", label: "Brief'ten teslime" },
  { metric: "0 ekip", label: "Çekim, oyuncu, stüdyo yok" },
  { metric: "5-10x", label: "Geleneksel videodan ucuz" },
  { metric: "4K", label: "Sinematik kalite çıktı" }
];

const problems = [
  "Çekim ekibi, oyuncu ve stüdyo masrafı tek bir video için on binlerce TL'ye çıkıyor — küçük marka kalkamıyor.",
  "Bir reklam videosu hazırlamak haftalar sürüyor; sezon, kampanya, indirim fırsatı geçip gidiyor.",
  "Modeller, mekan ve donanım kiralamak için her seferinde aynı yorucu süreci yeniden yaşamak.",
  "Sosyal medyada haftada 3-5 yeni video gerekiyor ama bu hızda üretim imkansız görünüyor.",
  "Test edip beğenmediğiniz konsept için zaten 30.000 TL yakmış oluyorsunuz — A/B test lüks."
];

const solutionSteps = [
  {
    icon: MessageCircle,
    title: "Brief al",
    description: "Markanı, ürününü, hedef kitleni ve tonunu birlikte çıkarırız."
  },
  {
    icon: Wand2,
    title: "Konsept üret",
    description: "AI ile 2-3 farklı senaryo ve görsel yön sunarız — sen seçersin."
  },
  {
    icon: Film,
    title: "Video üret",
    description: "Görüntü, ses, müzik, geçiş — hepsi AI ile sinematik kalitede üretilir."
  },
  {
    icon: Megaphone,
    title: "Teslim et",
    description: "Farklı format (9:16, 1:1, 16:9) ve uzunluklarda hazır teslim."
  }
];

const features = [
  {
    icon: Clock3,
    title: "3 günde teslim",
    desc: "Brief'ten finale 3 iş günü. Sezon kampanyalarını kaçırmayın."
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
    desc: "Reels (9:16), kare (1:1), yatay (16:9) — hepsi tek üretimden."
  },
  {
    icon: Palette,
    title: "Marka stiline özel",
    desc: "Renkleriniz, tonunuz, logo yerleşimi — marka kitabınıza uygun."
  },
  {
    icon: Music,
    title: "Telifli müzik + ses efekti",
    desc: "Lisans dertsiz, sosyal medyada sorun çıkarmaz."
  }
];

const timeline = [
  { step: "01", title: "Brief alımı", desc: "1 gün — ürün, marka tonu, hedef kitle." },
  { step: "02", title: "Konsept + senaryo", desc: "1 gün — 2-3 yön sunulur, onay alınır." },
  { step: "03", title: "AI üretim + montaj", desc: "1-2 gün — görüntü, ses, müzik birleştirilir." },
  { step: "04", title: "Revizyon + teslim", desc: "1 gün — 2 revizyon hakkı, çoklu format teslim." }
];

const packages = [
  {
    name: "Tekil Video",
    price: "4.500 TL",
    period: "/video",
    setup: "10-15 saniye, 2 revizyon",
    color: "bg-paper",
    features: [
      "Brief + konsept",
      "15 saniyeye kadar video",
      "Türkçe AI seslendirme",
      "Müzik + ses efekti",
      "2 format teslim (9:16 + 1:1)",
      "2 revizyon hakkı"
    ],
    cta: "Tek Video İste"
  },
  {
    name: "Aylık 5 Video",
    price: "25.000 TL",
    period: "/ay",
    setup: "Sürekli üretim takvimi",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Ayda 5 video (haftada 1-2)",
      "Her video 15-30 saniye",
      "Sınırsız küçük revizyon",
      "Tüm formatlar dahil",
      "Aylık içerik takvimi",
      "Performans raporu"
    ],
    cta: "Aylık Paket Konuşalım"
  },
  {
    name: "Premium / Kurumsal",
    price: "12.000 TL",
    period: "/video",
    setup: "Sinematik prodüksiyon",
    color: "bg-paper",
    features: [
      "30-60 saniye sinematik video",
      "Özel AI karakter / avatar",
      "Çoklu sahne, geçiş, efekt",
      "5 revizyon hakkı",
      "Tüm dillerde seslendirme",
      "Reklam kampanyası uyumlu"
    ],
    cta: "Premium Konuşalım"
  }
];

const faqs = [
  {
    q: "AI reklam videosu gerçek çekimden farkı ne?",
    a: "Çekim ekibi, oyuncu, stüdyo, mekan tutma derdi yok. Süre 3-7 güne iner (geleneksel video 3-6 hafta), maliyet 5-10 kat azalır. Görüntü kalitesi sinematik — 2025 itibarıyla AI video çıktıları çoğu zaman insanın 'çekim mi AI mi?' diye ayırt edemediği seviyede. Marka tonunuza uygun avatar, mekan, aksiyon AI ile üretilir; profesyonel Türkçe seslendirme eklenir."
  },
  {
    q: "Teslim süresi gerçekten 3 gün mü?",
    a: "Evet. Tek video için brief alındıktan sonra 3 iş günü standarttır. 1. gün brief + konsept, 2. gün üretim, 3. gün revizyon ve teslim. Aylık paketlerde sürekli takvim var — haftada 1-2 video düzenli akar."
  },
  {
    q: "Fiyatı nasıl belirleniyor, kalemler nedir?",
    a: "Tek video 4.500-12.000 TL — uzunluk, karmaşıklık, revizyon sayısı, özel avatar gerekip gerekmediğine göre değişir. Aylık 5 video paketi 25.000 TL ve tek tek almaktan %30 ucuz. Kurumsal düzenli üretim (10+ video/ay) için özel teklif çıkarıyoruz."
  },
  {
    q: "Türkçe seslendirme doğal duyuluyor mu?",
    a: "Evet. 2025 itibarıyla AI Türkçe sesler insan sesi kalitesinde. 8+ farklı ton seçeneği var: sıcak kadın, profesyonel erkek, genç enerjik, otoriter, esprili vs. Markanızın tonuna göre seçiyoruz, isterseniz örnek dinletiyoruz. Lip-sync videolarda dudak hareketleri ses ile senkron."
  },
  {
    q: "Hangi platformlar için video üretiyorsunuz?",
    a: "Instagram Reels, TikTok, YouTube Shorts, Meta Ads (Facebook + Instagram reklam), Google Ads video, web sitesi banner ve hero videoları, e-ticaret ürün tanıtım videoları. Her platforma uygun aspect ratio (9:16 dikey, 1:1 kare, 16:9 yatay) tek üretimden çıkarılır."
  },
  {
    q: "Revizyon hakkı kaç tane, ne kadar sürer?",
    a: "Tekil videoda 2 revizyon, premium pakette 5 revizyon, aylık paketlerde sınırsız küçük + 3 büyük revizyon. AI ile üretim olduğu için revizyon 24-48 saat sürer (geleneksel videoda 1-2 hafta sürerdi)."
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
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-paper/80">
              <Link href="/" className="hover:text-paper transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-paper">AI Reklam Videosu</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-paper text-ink px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Video className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yapay Zeka Video Üretimi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl">
                  AI Reklam Videosu | Çekim Ekibi Yok, 3 Günde Teslim
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body opacity-95 font-medium">
                  Yapay zeka ile profesyonel reklam videoları. Çekim ekibi, oyuncu, stüdyo derdi yok — sadece brief'ten 3 günde teslim. PORTZEN, ürün satan markalar, restoranlar, klinikler ve e-ticaret için reklam videosu üretir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Brief Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/hizmetler/ai-video"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
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
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow text-ink" : "bg-brand-pink text-paper"
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
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çözüm
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN'in çözümü nasıl çalışır?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                4 adımda video çıkar — brief'ten finale 3 iş günü. Çekim takvimi, oyuncu kira, stüdyo masrafı yok.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-purple text-paper shadow-brutal-sm mb-4">
                      <Icon className="h-5 w-5" />
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

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
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

      {/* 5. TIMELINE */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Brief'ten videoya — 3 günlük yol haritası
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-ink p-6 shadow-[8px_8px_0_#FFFDF5]">
                  <div className="font-display text-5xl font-black text-brand-yellow mb-3">{t.step}</div>
                  <div className="font-bold text-lg mb-2">{t.title}</div>
                  <div className="text-sm opacity-75 leading-relaxed">{t.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASE STUDY */}
      <section className="bg-brand-yellow text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-ink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir örnek: e-ticaret markası
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              E-ticaret markası için 1 ayda ürettiğimiz 5 AI video, reklam CTR'sini %180 artırdı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed">
                <p>
                  Marka, ev tekstili satıyordu. Geleneksel video çekimi için ajanslara teklif alıyor — tek video 35.000-50.000 TL, 4 hafta süre, üstelik beğenmediği konsepti silip yeniden çekemiyor. Reklamda eski katalog görsellerini kullanıyor, CTR düşük, satış durağan.
                </p>
                <p>
                  Brief'te 5 ürün kategorisi, hedef kitle (25-45 yaş kadın, ev sahibi), mevsim kampanyaları (ilkbahar yenileme) konuştuk. Aylık paket önerdik: ayda 5 video, her biri 15 saniye, Instagram Reels + Meta Ads için optimize. Her hafta 1-2 video çıkardık — bir hafta nevresim, sonraki perde, sonraki yatak örtüsü.
                </p>
                <p>
                  Her video farklı bir konsepte sahipti: 'sabah uyanış' (yatak odası), 'akşam huzur' (oturma odası), 'minimalist ev' (mutfak). AI ile ürünleri farklı modellerde, farklı mekanlarda gösterdik. Türkçe sıcak kadın seslendirme + chill müzik kullandık.
                </p>
                <p>
                  Bir ay sonra sonuçlar: Meta Ads CTR'si %1.2'den %3.4'e çıktı (%180 artış). Toplam reklam harcaması aynı kaldı ama getirilen sipariş 2.4 kat arttı. Üstelik geleneksel videoda 1 video için ödeyeceği fiyatla 5 farklı video aldı — A/B test edip en iyi performans göstereni bütçeye verdi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">%1.2</div>
                  <div className="text-sm">Meta Ads CTR</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-purple">%3.4</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Maliyet karşılaştırma</div>
                  <div className="font-display text-3xl font-black mb-1">35.000 TL</div>
                  <div className="text-xs opacity-70">Geleneksel · 1 video</div>
                  <div className="mt-3 font-display text-3xl font-black text-brand-purple">25.000 TL</div>
                  <div className="text-xs opacity-70">AI paket · 5 video</div>
                </div>
                <div className="border-3 border-ink bg-paper p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İlk ay</div>
                  <div className="font-display text-4xl font-black text-brand-pink">2.4x</div>
                  <div className="text-sm">Reklam getirisi (ROAS)</div>
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
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi paket size uygun?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Tek video deneme, aylık sürekli üretim veya premium kurumsal — net rakam brief'te belirlenir.
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
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              <strong>Not:</strong> Özel AI avatar/influencer, çoklu dil seslendirme, sinematik prodüksiyon gibi premium istekler ayrı fiyatlandırılır — brief'te netleşir.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-6 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">İlgili okuma</div>
                <p className="text-sm opacity-90">
                  AI reklam videoları geleneksel yapımdan neden 10 kat ucuz — pazarlama yöneticileri için rehber.
                </p>
              </div>
              <Link
                href="/blog/ai-reklam-videolari"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
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
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid sm:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-pink mb-3" />
                <h3 className="font-display text-lg font-black mb-2">Sosyal medya yönetimi de istiyor musunuz?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Video üretimi + Instagram DM otomasyonu birlikte alınırsa pakette indirim var.
                </p>
                <Link
                  href="/instagram-dm-otomasyonu"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
                >
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
                <Sparkles className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-lg font-black mb-2">Markanıza özel AI influencer isteyenler için</h3>
                <p className="text-sm opacity-85 mb-3">
                  Hep aynı avatar — yüzü, sesi size ait, başka markada kullanılmaz.
                </p>
                <Link
                  href="/hizmetler/ai-video"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                3 gün sonra elinizde reklam videosu olsun.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz brief görüşmesinde markanıza uygun konsepti ve paketi belirliyoruz. WhatsApp'tan yazın veya iletişim formunu doldurun — aynı gün dönüyoruz.
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
