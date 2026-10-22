import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Instagram,
  MessageSquare,
  Camera,
  Video,
  Calendar,
  TrendingUp,
  Users,
  Sparkles,
  Bot,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { formatTL, familyPriceSummary, AD_SPEND_CAP, AD_OVERAGE_RATE } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi | Instagram + Facebook + TikTok Aylık Paket - PORTZEN",
  description:
    "Sosyal medya yönetimi hizmeti: Instagram, Facebook, TikTok, LinkedIn içerik üretimi, planlama, reklam ve topluluk yönetimi. Aylık paket, aylık raporlama.",
  keywords: [
    "sosyal medya yönetimi",
    "sosyal medya yönetim ajansı",
    "instagram yönetimi",
    "facebook yönetimi",
    "tiktok yönetimi",
    "sosyal medya paketi",
    "aylık sosyal medya",
    "kobi sosyal medya",
    "içerik üretimi",
    "sosyal medya danışmanlığı"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/sosyal-medya-yonetimi",
    siteName: "PORTZEN",
    title: "Sosyal Medya Yönetimi | Instagram + Facebook + TikTok Aylık Paket - PORTZEN",
    description:
      "Sosyal medya yönetimi hizmeti: Instagram, Facebook, TikTok, LinkedIn içerik üretimi, planlama, reklam ve topluluk yönetimi. Aylık paket, aylık raporlama."
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Medya Yönetimi | Aylık Paket",
    description:
      "Instagram, Facebook, TikTok yönetimi + içerik üretimi + reklam + topluluk yönetimi. Aylık paketle uçtan uca hizmet."
  },
  alternates: { canonical: "https://portzenai.com/sosyal-medya-yonetimi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sosyal Medya Yönetimi Hizmeti",
  serviceType: "Sosyal Medya Yönetimi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "İzmir",
      addressCountry: "TR"
    }
  },
  areaServed: [
    { "@type": "Country", name: "Turkey" }
  ],
  description:
    "PORTZEN sosyal medya yönetimi hizmeti; Instagram, Facebook, TikTok, LinkedIn ve YouTube Shorts kanallarında içerik takvimi, görsel ve video üretimi, zamanlanmış yayın, topluluk yönetimi ve aylık raporlama kapsar. KOBİ ve büyüyen markalar için aylık paketler.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi sözleşme süresi kaç ay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Sosyal medyada organik sonuçlar genellikle birkaç ay içinde netleştiği için süreyi hedeflerinize göre birlikte planlarız."
      }
    },
    {
      "@type": "Question",
      name: "Fotoğraf çekimleri için stüdyo kuruyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İzmir merkez ofisimizde ürün ve mini portre çekimleri için sabit bir stüdyo alanımız var. İzmir dışındaki çekimler pakete dahil değildir, ihtiyaç olursa ayrıca planlanır. Yerinde mekân çekimleri (restoran, mağaza, klinik, otel) sizin işletmenizde yapılır. Saha çekimi yalnızca Kurumsal pakette dahildir: ayda 1 gün (8 saat), İzmir içi."
      }
    },
    {
      "@type": "Question",
      name: "Reklam bütçesi hizmet ücretine dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Hayır, reklam bütçesi ayrıdır ve doğrudan reklam platformuna ödenir. Reklam yönetimi Büyüme paketinde Meta için Başlangıç düzeyinde (1 hesap, 2 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye kadar harcama), Kurumsal pakette Meta + Google için Büyüme kapsamında (2 hesap, 4 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.buyume)}'ye kadar harcama) dahildir; Başlangıç paketinde reklam yönetimi yoktur. Harcama sınırı aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir.`
      }
    },
    {
      "@type": "Question",
      name: "İçerik onayı nasıl işliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her ay bir sonraki aya ait içerik takvimi ve tüm görseller/videolar bir onay paneli üzerinden sunulur. Her posta özel not, revizyon isteği veya red işlemi yapabilirsiniz. Onay için tanınan süre ve revizyon kapsamı teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Takipçi ve etkileşim garantisi veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Takipçi, etkileşim veya satış garantisi vermiyoruz; sonuç sektöre, içeriğe ve reklam bütçesine bağlıdır. Pakette kanal sayısı, özgün içerik adedi ve moderasyon kapsamı yazılıdır; her ay aynı metriklerle rapor paylaşırız. Sahte takipçi veya botla büyütme yapmıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşmeyi iptal etmek istersem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Çalışma sona erdiğinde tüm içerik dosyaları ve raporlar teslim edilir, hesap yönetimi size devredilir."
      }
    },
    {
      "@type": "Question",
      name: "Kriz anında destek veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyüme ve Kurumsal paketlerde yorum ve mesajlar hafta içi her gün kontrol edilir; olumsuz bir durum fark ettiğimizde size hemen haber verir, yanıtı birlikte netleştiririz. 7/24 insan desteği sunmuyoruz. Başlangıç paketinde moderasyon dahil değildir."
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
      name: "Sosyal Medya Yönetimi",
      item: "https://portzenai.com/sosyal-medya-yonetimi"
    }
  ]
};

const heroStats = [
  { metric: "1–5 kanal", label: "Pakete göre: Instagram, Facebook, TikTok, LinkedIn, YouTube Shorts" },
  { metric: "10–30 içerik", label: "Pakete göre aylık özgün içerik" },
  { metric: "8 metrik", label: "Aylık raporda izlenen gösterge" },
  { metric: "Hafta içi", label: "Günlük moderasyon kontrolü (Büyüme ve Kurumsal)" }
];

const manages = [
  {
    icon: Calendar,
    title: "İçerik takvimi",
    desc: "Aylık 30 günlük içerik planı, tema-bazlı yayın stratejisi, kampanya günleri ve resmi gün entegrasyonu. Onay panelinden takvim baştan sonra görülür, her post için not eklenebilir."
  },
  {
    icon: Camera,
    title: "Görsel ve video üretim",
    desc: "Görsel tasarım ve kısa video üretimi; marka kimliğine sabit tutarlılık. İçerik adedi pakete göre: ayda 10–30 özgün içerik (8–18 tasarım, 2–12 video). Saha çekimi yalnızca Kurumsal pakette dahildir."
  },
  {
    icon: Sparkles,
    title: "Yayın ve zamanlama",
    desc: "Kanal-bazlı optimum saatlerde otomatik yayın, feed dağılımı, story serileri, reels sabitleme. Aynı içerik uygun formatta paketinizdeki kanallara çapraz dağıtılır."
  },
  {
    icon: MessageSquare,
    title: "Topluluk yönetimi",
    desc: "Büyüme ve Kurumsal paketlerde yorum, DM ve mention'lar hafta içi her gün kontrol edilir. Sıcak talepler size iletilir, olumsuz yorumlar için yanıt birlikte netleştirilir."
  }
];

const platforms = [
  {
    icon: Instagram,
    title: "Instagram yönetimi",
    desc: "Reels, story ve feed yönetimi. İçerik adedi pakete göre: ayda 10–30 özgün içerik ve 4–24 Story uyarlaması. Hashtag stratejisi ve algoritma takibi.",
    color: "bg-light",
    link: "/instagram-dm-otomasyonu"
  },
  {
    icon: Users,
    title: "Facebook yönetimi",
    desc: "Sayfa yönetimi, grup içerik dağıtımı, Facebook Marketplace optimizasyonu. 35+ yaş hedef kitleye ulaşmak için hâlâ önemli bir kanal. Instagram cross-post entegrasyonu.",
    color: "bg-light"
  },
  {
    icon: Video,
    title: "TikTok yönetimi",
    desc: "Organik short-form video stratejisi. Trend takibi, ses/müzik seçimi. Reels ile çift kanal içerik dönüşümü. TikTok Ads yönetimi ve TikTok Shop kurulumu paketlere dahil değildir; teklifte ayrıca belirtilir.",
    color: "bg-light"
  },
  {
    icon: TrendingUp,
    title: "LinkedIn yönetimi (B2B)",
    desc: "Kurucu profili + şirket sayfası ikili yönetimi. Thought leadership içerik, sektör raporları (LinkedIn Ads yönetimi paketlere dahil değildir, teklifte ayrıca belirtilir). B2B karar vericilerin bulunduğu tek profesyonel platform.",
    color: "bg-light"
  },
  {
    icon: Video,
    title: "YouTube Shorts",
    desc: "Trafik kaynağı olarak Shorts stratejisi. Reels ve TikTok içerikleri YouTube formatına uyarlanır. Arama tarafında uzun vadeli görünürlük sağlayabilen bir short-form platformu.",
    color: "bg-light"
  }
];

const scope = [
  "Aylık 30 günlük içerik takvimi ve tema stratejisi",
  "Reels ve kısa video üretimi (pakete göre ayda 2–12 adet)",
  "Görsel tasarım - AI destekli + custom illüstrasyon + kurumsal grafik",
  "Metin yazımı - caption, hashtag, story anket, CTA",
  "Zamanlanmış yayın - optimum saat, çapraz kanal dağıtım",
  "Yorum ve DM kontrolü - hafta içi günlük (Büyüme ve Kurumsal)",
  "Aylık 8 metrikli analiz raporu + strateji toplantısı",
  "Rakip takibi ve trend raporu - haftalık"
];

const aiAdvantages = [
  {
    icon: Sparkles,
    title: "Günde 3-5 içerik varyantı",
    desc: "Aynı brief için AI ile 3-5 farklı görsel/metin varyantı üretiyoruz. En yüksek etkileşim potansiyeli olan seçiliyor, kalanlar A/B testi için saklanıyor. Klasik yöntemle günde 1-2 varyant üretilebiliyordu."
  },
  {
    icon: Bot,
    title: "Hashtag optimizasyonu AI ile",
    desc: "Her içerik için hedef kitle-sektör-lokasyon üçlüsüne göre AI ile 20-30 hashtag üretimi + rekabet analizi. Yüksek hacim + düşük rekabet kombinasyonu otomatik yakalanır. Manuel taramaya göre çok daha hızlı."
  },
  {
    icon: TrendingUp,
    title: "Trend analizi otomatik",
    desc: "Instagram, TikTok ve YouTube Shorts trend akışları düzenli taranır. Sektörünüze uygun trendler brief'e dönüştürülür ve içerik takvimine eklenir; böylece uygun trendler gecikmeden değerlendirilir."
  },
  {
    icon: Camera,
    title: "Rakip içerik tarama",
    desc: "3-5 rakip markanın haftalık en iyi performans gösteren içerikleri AI ile analiz edilir. Format, ton, açı ve etkileşim tetikleyicileri raporlanır. Aylık rakip stratejisi raporu pakete dahildir."
  }
];

const sectors = [
  {
    name: "Restoran ve kafe",
    slug: "restoran",
    desc: "Menü vitrini, atmosfer çekimi, food photography, reels-TikTok yemek videosu, rezervasyon DM funnel'ı.",
    color: "bg-light"
  },
  {
    name: "Klinik ve estetik",
    slug: "klinik",
    desc: "Hekim profil yönetimi, önce/sonra reels, hasta yorumları, randevu DM funnel'ı, KVKK gerekliliklerini dikkate alan içerik.",
    color: "bg-light"
  },
  {
    name: "Butik ve moda",
    slug: "butik",
    desc: "Yeni koleksiyon showcase, reels-odaklı satış, story-DM funnel'ı, influencer iş birliği yönetimi.",
    color: "bg-light"
  },
  {
    name: "Emlak",
    slug: "emlak",
    desc: "Mülk turu videosu, 360 çekim, danışman markalama, lead DM funnel'ı, konut sunum reels.",
    color: "bg-light"
  },
  {
    name: "Eğitim ve kurs",
    slug: "egitim",
    desc: "Öğretmen tanıtım videosu, öğrenci başarı hikâyeleri, kurs lansmanı, kayıt DM otomasyonu.",
    color: "bg-light"
  },
  {
    name: "Oto servis",
    slug: "oto-servis",
    desc: "Bakım öncesi/sonrası videosu, servis süreç anlatımı, müşteri yorumları, randevu DM funnel'ı.",
    color: "bg-light"
  },
  {
    name: "Güzellik salonu",
    slug: "guzellik-salonu",
    desc: "Style showcase reels, saç/makyaj öncesi-sonrası, uzman tanıtımı, randevu DM otomasyonu.",
    color: "bg-light"
  },
  {
    name: "Otel ve konaklama",
    slug: "otel",
    desc: "Misafir deneyimi çekimi, oda turu, mevsimsel kampanya, rezervasyon DM funnel'ı, harita SEO.",
    color: "bg-light"
  }
];


const comparison = [
  {
    axis: "Zaman",
    inhouse: "İçerik üretim, planlama, yayın ve yanıt için her hafta düzenli zaman",
    agency: "Sizin tarafta yalnızca onay ve strateji toplantısı"
  },
  {
    axis: "Kalite tutarlılığı",
    inhouse: "Kişi hastalanınca durur, tatilde susar, iş yoğunluğunda düşer",
    agency: "Ekip yedekli çalışır, kesintisiz üretim, aylık kalite kontrolü"
  },
  {
    axis: "Trend takibi",
    inhouse: "Trendi geç fark edip geç uygulama",
    agency: "Düzenli trend takibi; uygun trendlerin içerik takvimine eklenmesi"
  },
  {
    axis: "Rapor + veri",
    inhouse: "Genelde yapılmaz, yapılırsa yüzeysel takipçi sayımı",
    agency: "8 metrikli aylık rapor + 60 dk strateji toplantısı + veri karşılaştırma"
  },
  {
    axis: "Toplam aylık maliyet",
    inhouse: "1 SMM uzman maaşı + tasarım + fotoğrafçı + araçlar, ayrı ayrı",
    agency: `Aylık paket: ${familyPriceSummary("sosyal-medya")} (KDV hariç)`
  }
];

const faqs = [
  {
    q: "Sosyal medya yönetimi sözleşme süresi kaç ay?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Sosyal medyada organik sonuçlar genellikle birkaç ay içinde netleştiği için süreyi hedeflerinize göre birlikte planlarız."
  },
  {
    q: "Fotoğraf çekimleri için stüdyo kuruyor musunuz?",
    a: "İzmir merkez ofisimizde ürün ve mini portre çekimleri için sabit bir stüdyo alanımız var. İzmir dışındaki çekimler pakete dahil değildir, ihtiyaç olursa ayrıca planlanır. Yerinde mekân çekimleri (restoran, mağaza, klinik, otel, showroom) sizin işletmenizde yapılır - ekip ekipmanla gelir, yarım gün veya tam gün çekim yapar. Saha çekimi yalnızca Kurumsal pakette dahildir: ayda 1 gün (8 saat), İzmir içi. Ek çekim ihtiyacı olursa ayrıca planlanır."
  },
  {
    q: "Reklam bütçesi hizmet ücretine dahil mi?",
    a: `Hayır, reklam bütçesi ayrıdır ve doğrudan reklam platformuna ödenir. Reklam yönetimi Büyüme paketinde Meta için Başlangıç düzeyinde (1 hesap, 2 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye kadar harcama), Kurumsal pakette Meta + Google için Büyüme kapsamında (2 hesap, 4 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.buyume)}'ye kadar harcama) dahildir; Başlangıç paketinde reklam yönetimi yoktur. Harcama sınırı aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir.`
  },
  {
    q: "İçerik onayı nasıl işliyor?",
    a: "Her ay bir sonraki aya ait içerik takvimi ve tüm görseller/videolar bir onay paneli üzerinden sunulur. Her posta özel not, revizyon isteği veya red işlemi yapabilirsiniz. Onay için tanınan süre ve revizyon kapsamı teklifte yazılı olarak belirtilir; bu, süreçte tıkanma olmaması için önemli. Acil değişiklik gerekirse WhatsApp üzerinden hızlı revize alıyoruz."
  },
  {
    q: "Takipçi ve etkileşim garantisi veriyor musunuz?",
    a: "Hayır. Takipçi, etkileşim veya satış garantisi vermiyoruz; sonuç sektöre, içeriğe ve reklam bütçesine bağlıdır. Pakette kanal sayısı, özgün içerik adedi ve moderasyon kapsamı yazılıdır; her ay aynı metriklerle rapor paylaşırız. Sahte takipçi veya botla büyütme yapmıyoruz."
  },
  {
    q: "Sözleşmeyi iptal etmek istersem ne olur?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Çalışma sona erdiğinde tüm içerik dosyaları (RAW görsel, video, tasarım kaynak dosyaları) ve raporlar teslim edilir, hesap yönetim erişimleri size devredilir. Kırık ilişki kurmuyoruz - bir gün geri dönebilirsiniz."
  },
  {
    q: "Kriz anında destek veriyor musunuz?",
    a: "Büyüme ve Kurumsal paketlerde yorum ve mesajlar hafta içi her gün kontrol edilir; olumsuz bir durum fark ettiğimizde size hemen haber verir, yanıtı birlikte netleştiririz. 7/24 insan desteği sunmuyoruz. Başlangıç paketinde moderasyon dahil değildir."
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
              <span className="text-ink">Sosyal Medya Yönetimi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Aylık Paket Hizmet</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Sosyal Medya Yönetimi
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 max-w-prose text-body text-ink/80 font-bold">
                  Instagram, Facebook, TikTok - aylık paketle uçtan uca hizmet.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Sosyal medya yönetimi; içerik takvimi, görsel-video üretimi, planlı yayın, topluluk yönetimi ve aylık raporlamayı kapsayan bir servistir. Sizin tarafta ekip kurmak, araç lisansı almak, fotoğrafçı bulmak, trendi takip etmek yok. Ay içinde ne yapılacağı belli, ay sonunda ne çıktığı belli. Siz onaylıyorsunuz, biz üretip yayınlıyoruz.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Paket Teklifi Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    <MessageSquare className="h-4 w-4" /> WhatsApp ile Konuş
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((s, i) => (
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

      <ServiceAtAGlance href="/sosyal-medya-yonetimi" />

      {/* 2. NEYİ YÖNETİYORUZ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Neyi yönetiyoruz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Sosyal medya yönetimi hizmeti dört ana koldan oluşur.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya yönetimi tek başına &quot;post atmak&quot; değildir. Bir aylık paket; planlama, üretim, dağıtım ve etkileşim olmak üzere dört disiplinin sürekli çalışan bir döngüsüdür. Bu dört kol birbirine bağlı; birinde aksama olursa tüm hesap performansı düşer. PORTZEN&apos;de dört kol paralel yürür.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {manages.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                    <Icon className="h-8 w-8 text-ink mb-4" />
                    <h3 className="font-display text-xl font-black mb-3">{m.title}</h3>
                    <p className="text-body opacity-85 leading-relaxed">{m.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PLATFORMLAR */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Platformlar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Beş kanala kadar tek ekipten
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Her platform farklı algoritma, farklı hedef kitle ve farklı içerik dili demek. Aynı içeriği beş kanala kopyalamak boşa emek - her platform kendi formatında yeniden düşünülmeli. PORTZEN&apos;de kanal-bazlı strateji ile aynı çekim malzemesi beş farklı sürüme dönüşür.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              const card = (
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 shadow-brutal-sm mb-4 rounded-full", p.color)}>
                    <Icon className="h-5 w-5 text-ink" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{p.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{p.desc}</p>
                  {p.link && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                      Detay <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
              return (
                <Reveal key={i} delay={i * 60}>
                  {p.link ? <Link href={p.link}>{card}</Link> : card}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. HİZMET KAPSAMI */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Hizmet kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Aylık pakette tam olarak ne var?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya yönetimi paketlerinin en sık şikâyet edilen tarafı kapsamın belirsizliğidir. &quot;Ay sonunda ne teslim aldım?&quot; sorusuna net cevap vermeyen paket, para kaybı demektir. PORTZEN paketlerinde tüm kapsam yazılıdır. Aşağıdaki hizmetlerin adetleri ve kapsamı pakete göre değişir; kesin kapsam fiyat kartlarında yer alır:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {scope.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-3 border-3 border-ink/10 bg-light p-4 rounded-2xl">
                  <CheckCircle2 className="h-5 w-5 text-ink shrink-0 mt-0.5" />
                  <span className="text-body font-medium leading-relaxed">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MoreDetails title="Ayrıntılar: AI destekli üretim" summary="Varyant üretimi, hashtag, trend ve rakip taraması">
      {/* 6. AI AVANTAJI */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                AI avantajı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Neden AI destekli sosyal medya yönetimi daha hızlı?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                PORTZEN&apos;de AI araçları ekip iş akışına entegre olduğu için brief hazırlama, varyant üretimi ve trend tarama gibi tekrar eden adımlar hızlanır; son kontrolü insan editör yapar. Dört ana AI avantajımız şunlar:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {aiAdvantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl">
                    <Icon className="h-8 w-8 text-ink mb-4" />
                    <h3 className="font-display text-xl font-black mb-3 text-ink">{a.title}</h3>
                    <p className="text-body text-ink/70 leading-relaxed">{a.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* AI hizmet iç link bloğu */}
          <Reveal delay={400}>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href="/yapay-zeka-video-uretimi"
                className="block border-3 border-ink/15 bg-light text-ink p-6 shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl"
              >
                <Video className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Yapay Zeka Video Üretimi</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Reels ve TikTok videolarınızı AI ile üretiyoruz. Pakete göre ayda 2–12 video planlanır.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/ai-reklam-videosu"
                className="block border-3 border-ink/15 bg-light text-ink p-6 shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl"
              >
                <Sparkles className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">AI Reklam Videosu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medyada yayınlayacağınız reklam videolarını AI ile üretiyoruz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      <MoreDetails title="Ayrıntılar: Sektörel yaklaşım" summary="Sektörlere göre içerik çerçeveleri ve sektör sayfaları">
      {/* 7. SEKTÖRLER */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektörel yaklaşım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Her sektörün sosyal medya dili farklıdır.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Bir kliniğin Instagram stratejisi ile restoranın stratejisi aynı olamaz - içerik teması, görsel dil, yayın saati ve DM funnel&apos;ı sektöre göre değişir. PORTZEN 8 ana sektör için hazırlanmış içerik çerçeveleriyle çalışır. Sektörünüze uygun landing sayfamızı inceleyebilirsiniz:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link
                  href={`/instagram-dm-otomasyonu/${s.slug}`}
                  className={cn(
                    "block border-3 border-ink/15 p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full text-ink rounded-2xl",
                    s.color
                  )}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-display text-xl font-black">{s.name}</div>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              Sektörünüz listede yok mu? Endişe etmeyin, keşif görüşmesinde sektörünüze özel strateji önerisi sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="sosyal-medya" heading="Sosyal medya yönetimi fiyatları" />


      <MoreDetails title="Ayrıntılar: Kendi ekibiniz mi, dış hizmet mi?" summary="Beş kriterde karşılaştırma">
      {/* 9. KENDİN YAP vs AJANS */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Karar öncesi karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Kendi ekibinizle mi, dış hizmetle mi?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya yönetimini in-house yapmak ilk bakışta ucuz görünür. Ama gerçek maliyet; 1 uzman maaşı + tasarım desteği + fotoğrafçı + araç lisansları + trend takip zamanı toplandığında ajans paketinin çoğunlukla üzerinde çıkar. Beş kritik eksende karşılaştıralım:
              </p>
            </div>
          </Reveal>
          <div className="border-3 border-ink/10 bg-light overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-b-3 border-ink/10">
              <div className="p-4 font-black uppercase text-xs bg-light text-ink">Kriter</div>
              <div className="p-4 font-black uppercase text-xs bg-light">Kendi ekibinizle</div>
              <div className="p-4 font-black uppercase text-xs bg-light text-ink">PORTZEN yönetimi</div>
            </div>
            {comparison.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-b-3 border-ink/10",
                  i === comparison.length - 1 ? "border-b-0" : ""
                )}>
                  <div className="p-4 font-bold text-sm bg-light">{c.axis}</div>
                  <div className="p-4 text-sm opacity-80">{c.inhouse}</div>
                  <div className="p-4 text-sm font-medium">{c.agency}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 10. SSS */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi hizmeti hakkında
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-ink/15 pl-6">
                  <h3 className="font-display text-xl font-black mb-3 text-ink">{f.q}</h3>
                  <p className="text-body text-ink/75 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink/15 bg-paper p-6 shadow-brutal rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Sparkles className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-3 text-ink">Daha derin okuma - blog rehberlerimiz</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog/sosyal-medya-icerik-takvimi" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Sosyal medya içerik takvimi nasıl hazırlanır <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/instagram-hashtag-stratejisi-2026" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Instagram hashtag stratejisi 2026 rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/instagram-reels-algoritmasi-2026" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Instagram Reels algoritması 2026 - nasıl çalışıyor <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/tiktok-vs-instagram-reels-kobi" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        TikTok vs Instagram Reels: KOBİ için hangisi öncelik <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sosyal medyanızı bize bırakın, siz işinize odaklanın.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut hesaplarınızı, rakiplerinizi ve büyüme potansiyelinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu ve ilk 90 günün planını net konuşuyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun, en kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Ücretsiz Keşif Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Yaz
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/10 grid sm:grid-cols-3 gap-4 text-sm">
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
