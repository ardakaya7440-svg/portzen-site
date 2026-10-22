import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Video,
  Camera,
  Users,
  BarChart3,
  Calendar,
  Sparkles,
  Target,
  CheckCircle2,
  Search,
  Megaphone,
  Layers,
  MapPin,
  PenTool,
  HeartHandshake
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PRICING, familyOffersSchema, formatTL, familyPriceSummary, AD_SPEND_CAP, AD_OVERAGE_RATE } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Sosyal Medya Ajansı | İzmir, İstanbul, Türkiye - PORTZEN",
  description:
    "Sosyal medya ajansı arıyorsanız doğru yerdesiniz. PORTZEN; Instagram, Facebook, TikTok ve LinkedIn yönetimi, içerik üretimi, reklam ve büyüme stratejisi - tek ekipten.",
  keywords: [
    "sosyal medya ajansı",
    "izmir sosyal medya ajansı",
    "istanbul sosyal medya ajansı",
    "instagram yönetimi",
    "facebook yönetimi",
    "tiktok ajansı",
    "sosyal medya yönetimi",
    "kobi sosyal medya",
    "ai destekli sosyal medya",
    "sosyal medya reklam ajansı",
    "linkedin yönetimi b2b",
    "içerik üretim ajansı"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/sosyal-medya-ajansi",
    siteName: "PORTZEN",
    title: "Sosyal Medya Ajansı | İzmir, İstanbul, Türkiye - PORTZEN",
    description:
      "Instagram, Facebook, TikTok ve LinkedIn yönetimi, içerik üretimi, paid social reklamları ve büyüme stratejisi - KOBİ ve markalar için tek ekipten AI destekli sosyal medya ajansı."
  },
  twitter: {
    card: "summary_large_image",
    title: "Sosyal Medya Ajansı | İzmir, İstanbul, Türkiye",
    description:
      "PORTZEN; Instagram, Facebook, TikTok, LinkedIn yönetimi, içerik üretimi ve reklam - beş ajans yerine tek ekip."
  },
  alternates: { canonical: "https://portzenai.com/sosyal-medya-ajansi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sosyal Medya Ajansı Hizmetleri",
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
    { "@type": "Country", name: "Turkey" },
    { "@type": "City", name: "İzmir" },
    { "@type": "City", name: "İstanbul" },
    { "@type": "City", name: "Ankara" }
  ],
  description:
    "PORTZEN, KOBİ ve markalar için Instagram, Facebook, TikTok ve LinkedIn yönetimi, içerik üretimi, paid social reklam ve büyüme stratejisi sunan AI destekli sosyal medya ajansıdır. İzmir merkezli, tüm Türkiye'ye uzaktan hizmet.",
  offers: familyOffersSchema(PRICING["sosyal-medya"])
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sosyal medya ajansı fiyatları ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `PORTZEN sosyal medya paketleri aylıktır ve fiyatları yazılıdır (KDV hariç): ${familyPriceSummary("sosyal-medya")}. Kanal sayısı, özgün içerik adedi, moderasyon ve dahil reklam yönetimi pakete göre değişir. Reklam bütçesi ayrıdır.`
      }
    },
    {
      "@type": "Question",
      name: "Sosyal medya ajansı seçerken nelere dikkat etmeliyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Önce ekibin gerçek referanslarına ve sektörünüze yakın işlerine bakın. Sözleşmede aylık içerik adedi, kanal kapsamı, reklam yönetimi, raporlama sıklığı ve revizyon hakkı net yazılı olmalı. Ayda bir performans raporu, takvim onayı ve aylık strateji toplantısı standarttır. PORTZEN'de kanal, içerik adedi ve dahil hizmetler her paket için yazılıdır."
      }
    },
    {
      "@type": "Question",
      name: "Hangi sosyal medya kanallarını yönetiyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram, Facebook, TikTok, LinkedIn ve YouTube Shorts en sık yönettiğimiz kanallar. Başlangıç paketinde 1, Büyüme'de 3, Kurumsal'da 5 kanal yönetilir. X (Twitter) ve Threads talep üzerine eklenir."
      }
    },
    {
      "@type": "Question",
      name: "İçerik üretimini siz mi yapıyorsunuz, dışarıdan mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İçerik üretimi tamamen PORTZEN ekibi tarafından yapılır: foto çekim, reels-tiktok video, grafik tasarım, metin yazımı ve AI destekli görsel üretim. Dış kaynak kullanmıyoruz çünkü marka tutarlılığı kaybolur. Saha çekimi Kurumsal pakette İzmir içinde dahildir; diğer paketlerde ve şehirlerde çekim ayrıca tekliflendirilir."
      }
    },
    {
      "@type": "Question",
      name: "Reklam yönetimi paketlere dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Hayır, reklam bütçesi ayrıdır ve doğrudan reklam platformuna ödenir. Reklam yönetimi Büyüme paketinde Meta için Başlangıç düzeyinde (1 hesap, 2 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye kadar harcama), Kurumsal pakette Meta + Google için Büyüme kapsamında (2 hesap, 4 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.buyume)}'ye kadar harcama) dahildir; Başlangıç paketinde reklam yönetimi yoktur. Harcama sınırı aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir.`
      }
    },
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi sözleşmesi kaç ay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Organik büyüme hesabın başlangıç durumuna, sektöre ve içerik düzenine göre değişir; bu nedenle sonuçları birkaç aylık dönemde değerlendirmenizi öneririz."
      }
    },
    {
      "@type": "Question",
      name: "Sonuçları nasıl ölçüyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık rapor 8 ana metriği içerir: erişim, etkileşim oranı, takipçi büyüme, profil ziyareti, DM/yorum sayısı, link tıklama, reklam ROAS ve dönüşüm. Google Analytics, Meta Business Suite ve TikTok Analytics verilerini tek panelde birleştiriyoruz. Aylık 60 dakikalık strateji toplantısında sonuçlar yorumlanır ve sonraki ay revize edilir."
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
      name: "Sosyal Medya Ajansı",
      item: "https://portzenai.com/sosyal-medya-ajansi"
    }
  ]
};

const heroStats = [
  { metric: "5 kanal", label: "Instagram, Facebook, TikTok, LinkedIn, YouTube" },
  { metric: "Yazılı", label: "Pakete göre aylık içerik adedi" },
  { metric: "Hafta içi", label: "Günlük moderasyon (Büyüme ve Kurumsal)" },
  { metric: "8 metrik", label: "Aylık şeffaf raporlama" }
];

const differentiators = [
  {
    icon: Layers,
    title: "Beş ajans yerine tek ekip",
    desc: "Sosyal medya, içerik üretimi, reklam, web ve AI otomasyon - hepsi tek çatı altında. Beş ayrı ajansla koordinasyon derdi olmaz, brief tek seferde verilir, marka tonu tek ekipte korunur."
  },
  {
    icon: Sparkles,
    title: "AI destekli içerik motoru",
    desc: "Trend tespiti, hashtag stratejisi, içerik takvimi ve görsel üretiminde AI araçlarını ekip iş akışına entegre ettik. İçerik adedi pakette yazılıdır; her içerik yayından önce onayınıza sunulur."
  },
  {
    icon: HeartHandshake,
    title: "KOBİ odaklı yaklaşım",
    desc: "Odağımız 5-50 kişilik KOBİ'ler. Ajans dili konuşmak yerine işletme sahibinin anladığı dilde konuşuyoruz. Aylık 10 sayfalık rapor değil, 1 sayfalık net özet."
  },
  {
    icon: BarChart3,
    title: "Yazılı ve ölçülebilir kapsam",
    desc: "Her pakette kanal, içerik adedi ve moderasyon kapsamı yazılıdır; her ay aynı metriklerle rapor alırsınız. Takipçi veya satış garantisi vermiyoruz."
  }
];

const services = [
  {
    icon: Instagram,
    title: "Instagram yönetimi",
    desc: "Feed, story, reels ve hashtag stratejisi. İçerik adedi pakete göre: ayda 10–30 özgün içerik ve 4–24 Story uyarlaması.",
    color: "bg-light",
    link: "/instagram-dm-otomasyonu"
  },
  {
    icon: Facebook,
    title: "Facebook yönetimi",
    desc: "Sayfa yönetimi, içerik dağıtımı, Facebook Grupları, Marketplace optimizasyonu. Özellikle 35+ hedef kitleye ulaşmak isteyen KOBİ'ler için hâlâ önemli bir kanal.",
    color: "bg-light"
  },
  {
    icon: Video,
    title: "TikTok yönetimi",
    desc: "TikTok ajansı olarak short-form video stratejisi, trend takibi, ses-müzik seçimi ve TikTok Shop entegrasyonu yapıyoruz. Reels algoritması TikTok'tan besleniyor; çift kanal yönetimi şart.",
    color: "bg-light"
  },
  {
    icon: Linkedin,
    title: "LinkedIn yönetimi (B2B)",
    desc: "B2B markalar için kurucu profili + şirket sayfası ikili yönetimi. Thought leadership içerik ve sektör raporları. LinkedIn Ads, paketlerdeki Meta + Google reklam yönetimine dahil değildir; ayrıca tekliflendirilir.",
    color: "bg-light"
  },
  {
    icon: Megaphone,
    title: "Sosyal medya reklamları",
    desc: "Meta ve Google reklam yönetimi: kampanya kurulumu, kreatif testi, hedef kitle ve bütçe yönetimi. Büyüme ve Kurumsal paketlerde dahildir; ayrı reklam yönetimi paketi de vardır.",
    color: "bg-light"
  },
  {
    icon: Camera,
    title: "İçerik üretimi",
    desc: "Grafik tasarım, reels/TikTok video ve AI destekli görsel üretim. Pakete göre ayda 8–18 tasarım ve 2–12 video. Saha çekimi Kurumsal pakette dahildir (ayda 1 gün, İzmir içi).",
    color: "bg-light"
  },
  {
    icon: BarChart3,
    title: "Aylık raporlama",
    desc: "8 metrik tek panelde: erişim, etkileşim, takipçi büyüme, profil ziyareti, DM, link tıklama, reklam ROAS, dönüşüm. Google Analytics + Meta Business Suite + TikTok Analytics birleşik.",
    color: "bg-paper"
  },
  {
    icon: Calendar,
    title: "AI destekli içerik takvimi",
    desc: "30 günlük içerik planı, AI ile trend tespiti, hashtag analizi ve içerik temaları. Onay paneli üzerinden müşteri her postu yayından önce görüp onaylar.",
    color: "bg-light"
  },
  {
    icon: Users,
    title: "Community management",
    desc: "Yorum, DM ve mention kontrolü hafta içi her gün (Büyüme ve Kurumsal). Olumsuz yorumlar için yanıt sizinle birlikte netleştirilir.",
    color: "bg-light"
  }
];

const sectors = [
  {
    name: "Butik",
    slug: "butik",
    desc: "Yeni koleksiyon lansmanı, reels-odaklı satış, story-DM funnel'ı, influencer iş birliği.",
    color: "bg-light"
  },
  {
    name: "Restoran",
    slug: "restoran",
    desc: "Menü vitrini, food photography, reels-TikTok yemek videosu, rezervasyon DM otomasyonu.",
    color: "bg-light"
  },
  {
    name: "Klinik",
    slug: "klinik",
    desc: "Hekim profil yönetimi, hasta yorumları, randevu DM funnel'ı, KVKK gerekliliklerini dikkate alan içerik.",
    color: "bg-light"
  },
  {
    name: "Eczane",
    slug: "eczane",
    desc: "Sezonsal kampanya, ürün vitrini, danışma DM yanıtı, yerel SEO + sosyal entegrasyonu.",
    color: "bg-light"
  },
  {
    name: "Emlak",
    slug: "emlak",
    desc: "Konut sunumları, 360 video, reels-tour, lead DM funnel'ı, danışman markalama.",
    color: "bg-light"
  },
  {
    name: "Oto servis",
    slug: "oto-servis",
    desc: "Servis süreç videosu, müşteri yorumları, randevu DM, mevsimsel bakım kampanyaları.",
    color: "bg-light"
  },
  {
    name: "Eğitim",
    slug: "egitim",
    desc: "Kurs lansmanı, öğrenci başarı hikâyeleri, canlı yayın, kayıt DM otomasyonu.",
    color: "bg-light"
  },
  {
    name: "Avukat",
    slug: "avukat",
    desc: "Hukuki bilgilendirme içerik, LinkedIn thought leadership, danışma DM funnel'ı.",
    color: "bg-light"
  }
];

const cities = [
  {
    name: "İzmir",
    slug: "izmir",
    desc: "Merkez ofisimiz İzmir'de. Karşıyaka, Bornova, Alsancak ve Çiğli'deki KOBİ'lerle yerinde çekim, aylık toplantı ve hızlı destek mümkün.",
    badge: "Merkez"
  },
  {
    name: "İstanbul",
    slug: "istanbul",
    desc: "Avrupa ve Anadolu yakasındaki markalarla uzaktan çalışıyoruz; Levent, Maslak, Kadıköy ve Ataşehir'de yerinde toplantı planlanabilir. İstanbul'da saha çekimi ayrıca tekliflendirilir.",
    badge: "Aktif"
  },
  {
    name: "Ankara",
    slug: "ankara",
    desc: "Çankaya, Söğütözü, Çukurambar'daki kurumsal müşterilere uzaktan + aylık yerinde toplantı ile hizmet. B2B LinkedIn yönetiminde Ankara güçlü pazarımız.",
    badge: "Aktif"
  }
];


const faqs = [
  {
    q: "Sosyal medya ajansı fiyatları ne kadar?",
    a: `PORTZEN sosyal medya paketleri aylıktır ve fiyatları yazılıdır (KDV hariç): ${familyPriceSummary("sosyal-medya")}. Kanal sayısı, özgün içerik adedi, moderasyon ve dahil reklam yönetimi pakete göre değişir. Reklam bütçesi ayrıdır.`
  },
  {
    q: "Sosyal medya ajansı seçerken nelere dikkat etmeliyim?",
    a: "Önce ekibin gerçek referanslarına ve sektörünüze yakın işlerine bakın - vaka çalışması istemek ayıp değildir. Sözleşmede aylık içerik adedi, kanal kapsamı, reklam yönetimi, raporlama sıklığı ve revizyon hakkı net yazılı olmalı. Ayda bir performans raporu, takvim onayı ve aylık strateji toplantısı standarttır. Ekstra; içerik üretiminin dışarıya verilip verilmediğini ve hesap yöneticinizin sürekli aynı kişi olup olmayacağını sorun. PORTZEN'de kanal, içerik adedi ve dahil hizmetler her paket için yazılıdır."
  },
  {
    q: "Hangi sosyal medya kanallarını yönetiyorsunuz?",
    a: "Instagram, Facebook, TikTok, LinkedIn ve YouTube Shorts en sık yönettiğimiz kanallar. Başlangıç paketinde 1, Büyüme'de 3, Kurumsal'da 5 kanal yönetilir. X (Twitter) ve Threads talep üzerine eklenir. Pinterest ise e-ticaret ve dekorasyon markaları için aktif kullandığımız bir kanal."
  },
  {
    q: "İçerik üretimini siz mi yapıyorsunuz, dışarıdan mı?",
    a: "İçerik üretimi tamamen PORTZEN ekibi tarafından yapılır: foto çekim, reels-tiktok video, grafik tasarım, metin yazımı ve AI destekli görsel üretim. Dış kaynak kullanmıyoruz çünkü marka tutarlılığı kaybolur ve revize döngüleri uzar. Saha çekimi Kurumsal pakette İzmir içinde dahildir; diğer paketlerde ve şehirlerde çekim ayrıca tekliflendirilir, içerikler uzaktan üretilir."
  },
  {
    q: "Reklam yönetimi paketlere dahil mi?",
    a: `Hayır, reklam bütçesi ayrıdır ve doğrudan reklam platformuna ödenir. Reklam yönetimi Büyüme paketinde Meta için Başlangıç düzeyinde (1 hesap, 2 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.baslangic)}'ye kadar harcama), Kurumsal pakette Meta + Google için Büyüme kapsamında (2 hesap, 4 aktif kampanya, aylık ${formatTL(AD_SPEND_CAP.buyume)}'ye kadar harcama) dahildir; Başlangıç paketinde reklam yönetimi yoktur. Harcama sınırı aşılırsa yalnızca aşan tutarın %${Math.round(AD_OVERAGE_RATE * 100)}'u eklenir.`
  },
  {
    q: "Sosyal medya yönetimi sözleşmesi kaç ay?",
    a: "Sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir. Organik büyüme hesabın başlangıç durumuna, sektöre ve içerik düzenine göre değişir; bu nedenle sonuçları birkaç aylık dönemde değerlendirmenizi öneririz."
  },
  {
    q: "Sonuçları nasıl ölçüyorsunuz?",
    a: "Aylık rapor 8 ana metriği içerir: erişim (reach), etkileşim oranı (engagement rate), takipçi büyüme, profil ziyareti, DM ve yorum sayısı, link tıklama (CTR), reklam ROAS ve dönüşüm. Google Analytics, Meta Business Suite ve TikTok Analytics verilerini tek panelde birleştiriyoruz. Aylık 60 dakikalık strateji toplantısında sonuçlar yorumlanır ve sonraki ay revize edilir. Vanity metric (sadece takipçi) konuşmayız; iş hedefine (satış, lead, randevu) bağlı raporlama yaparız."
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
              <span className="text-ink">Sosyal Medya Ajansı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Sosyal Medya Ajansı</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Sosyal Medya Ajansı | İzmir, İstanbul ve Türkiye Geneli - PORTZEN
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Sosyal medya ajansı arıyorsanız doğru yerdesiniz. PORTZEN; Instagram, Facebook, TikTok ve LinkedIn yönetimi, içerik üretimi, paid social reklamları ve büyüme stratejisini tek ekipten sunar. Beş ayrı ajansla uğraşmak yerine AI destekli, ölçülebilir ve KOBİ odaklı bir sosyal medya operasyonu kurarız.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
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

      {/* 2. NİYE PORTZEN */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Niye PORTZEN sosyal medya ajansı?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik ajans modeli sizin için çalışmıyorsa, sebebi belli.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Klasik ajans modeli; ayda bir rapor, üç farklı kişiyle iletişim, ay sonu sürpriz fatura ve &quot;trend bu, biz de yapalım&quot; yaklaşımıdır. PORTZEN bu modeli baştan kurmadı. KOBİ&apos;lerin ve büyüyen markaların ihtiyaçlarına göre tasarlanmış dört farklılığımız var.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/10 bg-light p-6 rounded-2xl">
                    <Icon className="h-8 w-8 text-ink mb-4" />
                    <h3 className="font-display text-xl font-black mb-3">{d.title}</h3>
                    <p className="text-body opacity-85 leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. HİZMET KAPSAMI */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Hizmet kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi paketinde tam olarak ne var?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Sosyal medya ajansı seçerken en sık karşılaşılan sorun, kapsamın belirsiz kalmasıdır. PORTZEN&apos;de paket içeriği baştan net: hangi kanal, kaç içerik, hangi tip rapor - sözleşmede yazılı. İşte tipik bir sosyal medya yönetimi paketinde sunduğumuz 9 ana hizmet:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const card = (
                <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 shadow-brutal-sm mb-4 rounded-full", s.color)}>
                    <Icon className="h-5 w-5 text-ink" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{s.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                  {s.link && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                      Detay <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
              );
              return (
                <Reveal key={i} delay={i * 60}>
                  {s.link ? <Link href={s.link}>{card}</Link> : card}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SEKTÖRLERE GÖRE YAKLAŞIM */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sektörlere göre özelleşmiş yaklaşım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi sektöre göre değişir.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Bir butiğin Instagram stratejisi ile bir hukuk bürosunun LinkedIn stratejisi aynı olamaz. PORTZEN her sektör için ayrı bir oyun kitabı kullanır: içerik temaları, hashtag stratejisi, yayın saatleri, DM funnel&apos;ı ve reklam hedefleme - hepsi sektöre özel. İşte en aktif olduğumuz 8 sektör:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link
                  href={`/instagram-dm-otomasyonu/${s.slug}`}
                  className={cn(
                    "block border-3 border-ink/15 p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl",
                    s.color,
                    s.color === "bg-light" || s.color === "bg-light" ? "text-ink" : "text-ink"
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
              Sektörünüz listede değil mi? Endişelenmeyin, keşif görüşmesinde sektörünüze özel strateji önerisi sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. ŞEHİRLER */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Hizmet verdiğimiz şehirler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                İzmir merkez, İstanbul ve Ankara&apos;da aktif
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                PORTZEN İzmir merkezli bir sosyal medya ajansıdır. Kurumsal pakette İzmir içinde saha çekimi dahildir; İstanbul ve Ankara&apos;da çekim ayrıca tekliflendirilir, yüz yüze toplantı planlanabilir. Türkiye&apos;nin diğer 78 şehrine uzaktan üretim modeli ile hizmet veriyoruz - kalite ve tempo aynı.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={`/instagram-dm-otomasyonu/${c.slug}`}
                  className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-ink" />
                      <div className="font-display text-2xl font-black text-ink">{c.name}</div>
                    </div>
                    <span className="border-3 border-ink/15 bg-lime text-ink px-2 py-0.5 text-[10px] font-black shadow-brutal-sm rounded-full">
                      {c.badge}
                    </span>
                  </div>
                  <p className="text-sm text-ink/75 leading-relaxed mb-4">{c.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                    Şehir sayfasına git <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="sosyal-medya" heading="Sosyal medya ajansı fiyatları" />


      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Sosyal medya ajansı seçerken merak edilenler
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

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Search className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-3">Daha derin okuma için blog yazılarımız</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog/instagram-dm-donusum-artirma" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Instagram DM dönüşümünü artırmanın 7 yolu <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
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
                      <Link href="/blog/tiktok-vs-instagram-reels-kobi" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        TikTok vs Instagram Reels: KOBİ için hangisi öncelik <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/istanbul-sosyal-medya-ajansi-rehberi" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        İstanbul sosyal medya ajansı seçim rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sosyal medyanızı birlikte büyütelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz analiz görüşmesinde mevcut hesaplarınızı, rakiplerinizi ve büyüme potansiyelinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu ve ilk 90 günün planını net konuşuyoruz. WhatsApp&apos;tan yazın veya iletişim formunu doldurun, en kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
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
