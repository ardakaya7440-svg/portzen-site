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

export const metadata: Metadata = {
  title: "Sosyal Medya Yönetimi | Instagram + Facebook + TikTok Aylık Paket - PORTZEN",
  description:
    "Sosyal medya yönetimi hizmeti: Instagram, Facebook, TikTok, LinkedIn içerik üretimi, planlama, reklam ve topluluk yönetimi. Aylık paket, ölçülebilir sonuç.",
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
      "Sosyal medya yönetimi hizmeti: Instagram, Facebook, TikTok, LinkedIn içerik üretimi, planlama, reklam ve topluluk yönetimi. Aylık paket, ölçülebilir sonuç."
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
    telephone: "+905015884853",
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
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TRY",
    lowPrice: "8500",
    highPrice: "35000",
    priceRange: "₺8.500-₺35.000/ay",
    availability: "https://schema.org/InStock"
  }
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
        text: "Standart sözleşme süremiz 6 aydır çünkü sosyal medya yönetiminde organik sonuçlar ilk 3 ayda görünür, kalıcı büyüme 6. ayda netleşir. 3 aylık deneme paketi de sunuyoruz. 12 aylık sözleşmelerde %10-15 indirim uyguluyoruz. İlk 30 gün içinde uyumsuzluk hissederseniz cayma hakkınız saklıdır."
      }
    },
    {
      "@type": "Question",
      name: "Fotoğraf çekimleri için stüdyo kuruyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İzmir merkez ofisimizde ürün ve mini portre çekimleri için sabit bir stüdyo alanımız var. İstanbul ve Ankara'da haftalık yerinde çekim için ekip gönderiyoruz. Yerinde mekân çekimleri (restoran, mağaza, klinik, otel) sizin işletmenizde yapılır. Aylık pakete dahil çekim gün sayısı sözleşmede net yazılıdır."
      }
    },
    {
      "@type": "Question",
      name: "Reklam bütçesi hizmet ücretine dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, reklam bütçesi ayrıdır. Meta Ads ve TikTok Ads'e ödenen reklam harcaması doğrudan reklam platformuna gider; ajans yönetim ücreti pakete dahildir. Büyüme paketinde aylık 50.000 TL'ye kadar reklam bütçesi yönetimi sabit ücretle, üzerinde harcamanın %15-20'si modelinde çalışıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "İçerik onayı nasıl işliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her ay bir sonraki aya ait içerik takvimi ve tüm görseller/videolar bir onay paneli üzerinden sunulur. Her posta özel not, revizyon isteği veya red işlemi yapabilirsiniz. Onay süresi 48 saattir; süresinde dönmezseniz taslak otomatik onaylı sayılır. Aylık toplam 2 tur revizyon hakkı standarttır, ekstra revizyonlar ek paketle karşılanır."
      }
    },
    {
      "@type": "Question",
      name: "Takipçi ve etkileşim garantisi veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İlk 90 günde minimum organik erişim, etkileşim ve takipçi hedeflerini sözleşmeye yazıyoruz. Bu hedefler tutmazsa o ay ücretsizdir. Sahte takipçi veya botla büyütme yapmıyoruz çünkü uzun vadede algoritma cezalandırır. Hedef rakamlar sektörünüze ve mevcut hesap durumunuza göre keşif görüşmesinde birlikte belirlenir."
      }
    },
    {
      "@type": "Question",
      name: "Sözleşmeyi iptal etmek istersem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sözleşme iptali 30 gün önceden yazılı bildirim ile yapılır. İlk 30 gün deneme süresidir - bu süre içinde koşulsuz cayma hakkı vardır. 30 günden sonra iptal talebi geldiğinde son ay tamamlanır, tüm içerik dosyaları ve raporlar teslim edilir, hesap yönetimi devredilir. Hiçbir gizli ceza veya erken çıkış ücreti yoktur."
      }
    },
    {
      "@type": "Question",
      name: "Kriz anında 7/24 destek veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyüme ve Kurumsal paketlerde 7/24 kriz hattı dahildir. Olumsuz yorum patlaması, marka itibarı riski veya PR krizinde 2 saat içinde aksiyon alıyoruz. Kurumsal paketimizde adanmış hesap yöneticisi 09:00-22:00 arası WhatsApp'tan direkt erişilebilir; hafta sonları rotasyonel destek aktiftir. Başlangıç paketinde kriz desteği 09:00-18:00 mesai içidir."
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
  { metric: "5 kanal", label: "Instagram, Facebook, TikTok, LinkedIn, YouTube Shorts" },
  { metric: "30+ içerik", label: "Aylık ortalama üretim adedi" },
  { metric: "8 metrik", label: "Aylık raporda izlenen gösterge" },
  { metric: "2 saat", label: "DM ve yorumlara ortalama yanıt süresi" }
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
    desc: "AI destekli görsel üretim, foto çekim, reels/short video, motion graphic ve grafik tasarım. Aylık ortalama 30-60 görsel + 8-16 video. Marka kimliğine sabit tutarlılık."
  },
  {
    icon: Sparkles,
    title: "Yayın ve zamanlama",
    desc: "Kanal-bazlı optimum saatlerde otomatik yayın, feed dağılımı, story serileri, reels sabitleme. Aynı içerik uygun formatta 5 kanala çapraz dağıtılır."
  },
  {
    icon: MessageSquare,
    title: "Topluluk yönetimi",
    desc: "DM, yorum, mention ve story yanıtları 2 saat içinde. Sıcak lead'ler CRM'e aktarılır, olumsuz yorumlar diplomatik çözülür, marka itibarı korunur. Şablon değil, insan yanıtı."
  }
];

const platforms = [
  {
    icon: Instagram,
    title: "Instagram yönetimi",
    desc: "Reels, story, feed ve Instagram Shop yönetimi. Haftalık 4-8 post, günlük 2-4 story, aylık 8-16 reels. Hashtag stratejisi, algoritma takibi, DM funnel'ı entegrasyonu.",
    color: "bg-brand-pink",
    link: "/instagram-dm-otomasyonu"
  },
  {
    icon: Users,
    title: "Facebook yönetimi",
    desc: "Sayfa yönetimi, grup içerik dağıtımı, Facebook Marketplace optimizasyonu. 35+ yaş hedef kitlede hâlâ en yüksek dönüşümlü kanal. Instagram cross-post entegrasyonu.",
    color: "bg-brand-blue"
  },
  {
    icon: Video,
    title: "TikTok yönetimi",
    desc: "Organik short-form video stratejisi + TikTok Ads reklam yönetimi. Trend takibi, ses/müzik seçimi, TikTok Shop entegrasyonu. Reels ile çift kanal içerik dönüşümü.",
    color: "bg-brand-yellow"
  },
  {
    icon: TrendingUp,
    title: "LinkedIn yönetimi (B2B)",
    desc: "Kurucu profili + şirket sayfası ikili yönetimi. Thought leadership içerik, sektör raporları, LinkedIn Ads. B2B karar vericilerin bulunduğu tek profesyonel platform.",
    color: "bg-brand-green"
  },
  {
    icon: Video,
    title: "YouTube Shorts",
    desc: "Trafik kaynağı olarak Shorts stratejisi. Reels ve TikTok içerikleri YouTube formatına uyarlanır. Uzun vadeli SEO değeri en yüksek short-form platformu.",
    color: "bg-brand-orange"
  }
];

const scope = [
  "Aylık 30 günlük içerik takvimi ve tema stratejisi",
  "Reels ve short video üretimi (aylık 8-16 adet)",
  "Görsel tasarım - AI destekli + custom illüstrasyon + kurumsal grafik",
  "Metin yazımı - caption, hashtag, story anket, CTA",
  "Zamanlanmış yayın - optimum saat, çapraz kanal dağıtım",
  "Yorum ve DM yanıtlama - 2 saat içinde, marka tonuyla",
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
    desc: "Instagram, TikTok ve YouTube Shorts trend akışları günlük taranır. Sektörünüze uygun trendler 24 saat içinde brief'e dönüşür ve içerik takvimine eklenir. Trendi ikinci gün değil aynı gün yakalarsınız."
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
    color: "bg-brand-yellow"
  },
  {
    name: "Klinik ve estetik",
    slug: "klinik",
    desc: "Hekim profil yönetimi, önce/sonra reels, hasta yorumları, randevu DM funnel'ı, KVKK uyumlu içerik.",
    color: "bg-brand-blue"
  },
  {
    name: "Butik ve moda",
    slug: "butik",
    desc: "Yeni koleksiyon showcase, reels-odaklı satış, story-DM funnel'ı, influencer iş birliği yönetimi.",
    color: "bg-brand-pink"
  },
  {
    name: "Emlak",
    slug: "emlak",
    desc: "Mülk turu videosu, 360 çekim, danışman markalama, lead DM funnel'ı, konut sunum reels.",
    color: "bg-brand-orange"
  },
  {
    name: "Eğitim ve kurs",
    slug: "egitim",
    desc: "Öğretmen tanıtım videosu, öğrenci başarı hikâyeleri, kurs lansmanı, kayıt DM otomasyonu.",
    color: "bg-brand-green"
  },
  {
    name: "Oto servis",
    slug: "oto-servis",
    desc: "Bakım öncesi/sonrası videosu, servis süreç anlatımı, müşteri yorumları, randevu DM funnel'ı.",
    color: "bg-brand-purple"
  },
  {
    name: "Güzellik salonu",
    slug: "guzellik-salonu",
    desc: "Style showcase reels, saç/makyaj öncesi-sonrası, uzman tanıtımı, randevu DM otomasyonu.",
    color: "bg-brand-pink"
  },
  {
    name: "Otel ve konaklama",
    slug: "otel",
    desc: "Misafir deneyimi çekimi, oda turu, mevsimsel kampanya, rezervasyon DM funnel'ı, harita SEO.",
    color: "bg-brand-blue"
  }
];

const packages = [
  {
    name: "Başlangıç",
    price: "8.500 TL",
    period: "/ay",
    desc: "Tek platform ile başlayan KOBİ'ler için",
    color: "bg-paper",
    features: [
      "1 platform (Instagram veya Facebook)",
      "Aylık 12 içerik (post + reels + story)",
      "Aylık 4 reels/short video",
      "Hashtag stratejisi + içerik takvimi",
      "AI destekli görsel üretim",
      "Aylık 1 strateji toplantısı",
      "4 metrikli aylık rapor",
      "Mesai içi topluluk yönetimi (09:00-18:00)"
    ],
    cta: "Başlangıç Paketi Konuşalım"
  },
  {
    name: "Büyüme",
    price: "18.000 TL",
    period: "/ay",
    desc: "Çoklu kanal + reklam ile büyüyen markalar",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "3 platform (IG + FB + TikTok/LinkedIn)",
      "Aylık 30 içerik + günlük story",
      "Aylık 8-12 reels/TikTok video",
      "Aylık 1 yerinde foto çekim günü",
      "Meta Ads + TikTok Ads yönetimi",
      "7/24 topluluk yönetimi",
      "8 metrikli detaylı aylık rapor",
      "Aylık 2 strateji toplantısı",
      "DM otomasyonu + CRM entegrasyonu",
      "Haftalık rakip trend raporu"
    ],
    cta: "Büyüme Paketi Al"
  },
  {
    name: "Kurumsal",
    price: "35.000 TL+",
    period: "/ay",
    desc: "Beş kanal + adanmış ekip + sınırsız kapsam",
    color: "bg-paper",
    features: [
      "5 platform (IG + FB + TikTok + LinkedIn + YouTube Shorts)",
      "Sınırsız içerik üretimi",
      "Aylık 16-24 profesyonel video",
      "Aylık 2 yerinde foto + video çekim günü",
      "Çoklu kampanya reklam yönetimi",
      "Adanmış hesap yöneticisi + PT ekibi",
      "7/24 kriz hattı + WhatsApp direkt erişim",
      "Influencer iş birliği yönetimi",
      "Aylık 4 strateji toplantısı + haftalık check-in",
      "SLA garantili destek + öncelikli iş"
    ],
    cta: "Kurumsal Teklif Al"
  }
];

const comparison = [
  {
    axis: "Zaman",
    inhouse: "Haftada 15-20 saat - içerik üretim, planlama, yayın, yanıt",
    agency: "Sizin tarafta 1-2 saat - sadece onay ve strateji toplantısı"
  },
  {
    axis: "Kalite tutarlılığı",
    inhouse: "Kişi hastalanınca durur, tatilde susar, iş yoğunluğunda düşer",
    agency: "Ekip yedekli çalışır, kesintisiz üretim, aylık kalite kontrolü"
  },
  {
    axis: "Trend takibi",
    inhouse: "Trendi 3-5 gün sonra fark edip 2 hafta içinde uygulama",
    agency: "Trendi aynı gün yakalama, 24-48 saatte içerik takvimine entegrasyon"
  },
  {
    axis: "Rapor + veri",
    inhouse: "Genelde yapılmaz, yapılırsa yüzeysel takipçi sayımı",
    agency: "8 metrikli aylık rapor + 60 dk strateji toplantısı + veri karşılaştırma"
  },
  {
    axis: "Toplam aylık maliyet",
    inhouse: "1 SMM uzman maaşı + tasarım + fotoğrafçı + araçlar = 40.000+ TL",
    agency: "8.500-35.000 TL/ay - tüm hizmetler + araçlar + ekip yedekli"
  }
];

const faqs = [
  {
    q: "Sosyal medya yönetimi sözleşme süresi kaç ay?",
    a: "Standart sözleşme süremiz 6 aydır çünkü sosyal medya yönetiminde organik sonuçlar ilk 3 ayda görünür, kalıcı büyüme 6. ayda netleşir. 3 aylık deneme paketi de sunuyoruz; uzun vadeli bağlanma zorunluluğu yoktur. 12 aylık sözleşmelerde %10-15 indirim uyguluyoruz. İlk 30 gün içinde uyumsuzluk hissederseniz cayma hakkınız saklıdır - bunu sözleşmeye yazıyoruz, sözlü değil."
  },
  {
    q: "Fotoğraf çekimleri için stüdyo kuruyor musunuz?",
    a: "İzmir merkez ofisimizde ürün ve mini portre çekimleri için sabit bir stüdyo alanımız var. İstanbul ve Ankara'da haftalık yerinde çekim için ekip gönderiyoruz. Yerinde mekân çekimleri (restoran, mağaza, klinik, otel, showroom) sizin işletmenizde yapılır - ekip ekipmanla gelir, yarım gün veya tam gün çekim yapar. Aylık pakete dahil çekim gün sayısı sözleşmede net yazılıdır. Ek çekim ihtiyacı olursa günlük 3.500 TL tarife uygulanır."
  },
  {
    q: "Reklam bütçesi hizmet ücretine dahil mi?",
    a: "Hayır, reklam bütçesi ayrıdır. Meta Ads ve TikTok Ads'e ödenen reklam harcaması doğrudan reklam platformuna gider; ajans yönetim ücreti aylık pakete dahildir. Büyüme paketinde aylık 50.000 TL'ye kadar reklam bütçesi yönetimi sabit ücretle, üzerinde harcamanın %15-20'si modelinde çalışıyoruz. Kampanyalar ROAS odaklı optimize edilir; hedefimiz her zaman pozitif geri dönüştür. Detaylı reklam yönetimi için /meta-reklam-ajansi sayfamızı inceleyin."
  },
  {
    q: "İçerik onayı nasıl işliyor?",
    a: "Her ay bir sonraki aya ait içerik takvimi ve tüm görseller/videolar bir onay paneli üzerinden sunulur. Her posta özel not, revizyon isteği veya red işlemi yapabilirsiniz. Onay süresi 48 saattir; süresinde dönmezseniz taslak otomatik onaylı sayılır - bu, süreçte tıkanma olmaması için önemli. Aylık toplam 2 tur revizyon hakkı standarttır, ekstra revizyonlar ek paketle karşılanır. Acil değişiklik gerekirse WhatsApp üzerinden hızlı revize alıyoruz."
  },
  {
    q: "Takipçi ve etkileşim garantisi veriyor musunuz?",
    a: "İlk 90 günde minimum organik erişim, etkileşim ve takipçi hedeflerini sözleşmeye yazıyoruz - hangi kanalda hangi rakam olacağı net. Bu hedefler tutmazsa o ay ücretsizdir. Sahte takipçi veya botla büyütme yapmıyoruz çünkü uzun vadede algoritma cezalandırır ve gerçek etkileşim çöker. Hedef rakamlar sektörünüze, mevcut hesap büyüklüğünüze ve içerik hacmine göre keşif görüşmesinde birlikte belirlenir; sözde vaat değil, sözleşmeye yazılı taahhüttür."
  },
  {
    q: "Sözleşmeyi iptal etmek istersem ne olur?",
    a: "Sözleşme iptali 30 gün önceden yazılı bildirim ile yapılır. İlk 30 gün deneme süresidir - bu süre içinde koşulsuz cayma hakkı vardır, sadece o ayın ücreti alınır. 30 günden sonra iptal talebi geldiğinde son ay tamamlanır, tüm içerik dosyaları (RAW görsel, video, tasarım kaynak dosyaları) ve raporlar teslim edilir, hesap yönetim erişimleri size devredilir. Hiçbir gizli ceza veya erken çıkış ücreti yoktur. Kırık ilişki kurmuyoruz - bir gün geri dönebilirsiniz."
  },
  {
    q: "Kriz anında 7/24 destek veriyor musunuz?",
    a: "Büyüme ve Kurumsal paketlerde 7/24 kriz hattı dahildir. Olumsuz yorum patlaması, marka itibarı riski veya PR krizinde 2 saat içinde aksiyon alıyoruz. Kurumsal paketimizde adanmış hesap yöneticisi 09:00-22:00 arası WhatsApp'tan direkt erişilebilir; hafta sonları rotasyonel destek aktiftir. Başlangıç paketinde kriz desteği 09:00-18:00 mesai içidir. Kriz yönetiminde ilk 2 saat kritiktir - bekleyen marka krizi büyütür."
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
              <span className="text-ink">Sosyal Medya Yönetimi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Aylık Paket Hizmet</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
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
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Paket Teklifi Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
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

      {/* 2. NEYİ YÖNETİYORUZ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Neyi yönetiyoruz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Sosyal medya yönetimi hizmeti dört ana koldan oluşur.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya yönetimi tek başına "post atmak" değildir. Bir aylık paket; planlama, üretim, dağıtım ve etkileşim olmak üzere dört disiplinin sürekli çalışan bir döngüsüdür. Bu dört kol birbirine bağlı; birinde aksama olursa tüm hesap performansı düşer. PORTZEN'de dört kol paralel yürür.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {manages.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5]">
                    <Icon className="h-8 w-8 text-brand-yellow mb-4" />
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
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Platformlar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Beş kanalın hepsi tek pakette
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Her platform farklı algoritma, farklı hedef kitle ve farklı içerik dili demek. Aynı içeriği beş kanala kopyalamak boşa emek - her platform kendi formatında yeniden düşünülmeli. PORTZEN'de kanal-bazlı strateji ile aynı çekim malzemesi beş farklı sürüme dönüşür.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((p, i) => {
              const Icon = p.icon;
              const card = (
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink shadow-brutal-sm mb-4", p.color)}>
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
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Hizmet kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Aylık pakette tam olarak ne var?
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya yönetimi paketlerinin en sık şikâyet edilen tarafı kapsamın belirsizliğidir. "Ay sonunda ne teslim aldım?" sorusuna net cevap vermeyen paket, para kaybı demektir. PORTZEN paketlerinde tüm kapsam sözleşmede madde madde yazılıdır. Sekiz ana hizmet her pakette temeldir:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {scope.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-3 border-3 border-paper bg-paper/5 p-4 shadow-[6px_6px_0_#FFFDF5]">
                  <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0 mt-0.5" />
                  <span className="text-body font-medium leading-relaxed">{s}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI AVANTAJI */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                AI avantajı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Neden AI destekli sosyal medya yönetimi daha hızlı?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Klasik ajans modelinde bir içerik briefi 3-5 gün sürer. PORTZEN'de AI araçları ekip iş akışına entegre olduğu için aynı iş 24 saatte biter, üstelik kalite düşmez. Dört ana AI avantajımız aylık maliyetleri sabit tutarken çıktı hacmini belirgin şekilde artırıyor.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {aiAdvantages.map((a, i) => {
              const Icon = a.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all">
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
                className="block border-3 border-ink bg-brand-purple text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Video className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Yapay Zeka Video Üretimi</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Reels ve TikTok videolarınızı AI ile üretiyoruz. Aylık 15-25 video kolayca çıkar.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/ai-reklam-videosu"
                className="block border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Sparkles className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">AI Reklam Videosu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medyada yayınlayacağınız reklam videolarını 48 saatte AI ile üretiyoruz.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SEKTÖRLER */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörel yaklaşım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Her sektörün sosyal medya dili farklıdır.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Bir kliniğin Instagram stratejisi ile restoranın stratejisi aynı olamaz - içerik teması, görsel dil, yayın saati ve DM funnel'ı sektöre göre değişir. PORTZEN 8 ana sektörde derin oyun kitaplarına sahip. Sektörünüze uygun landing sayfamızı inceleyebilirsiniz:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link
                  href={`/instagram-dm-otomasyonu/${s.slug}`}
                  className={cn(
                    "block border-3 border-ink p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full text-ink",
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

      {/* 8. PAKETLER */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Aylık paketler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi fiyatları - 3 net paket
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Türkiye'de sosyal medya yönetimi fiyatları çoğunlukla gizli tutulduğu için karar vermek zorlaşıyor. PORTZEN üç paket başlangıç fiyatını net yayınlıyor. Tam rakam; içerik adedi, kanal sayısı, reklam kapsamı ve yerinde çekim talebine göre keşif görüşmesinde netleşir.
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
                    <span className="font-display text-3xl font-black">{p.price}</span>
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.desc}</div>
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
              <strong>Not:</strong> Fiyatlarımız KDV hariçtir. Reklam yönetiminde Meta Ads ve TikTok Ads'e ödenen bütçe ayrıdır. Ajans yönetim ücreti pakete dahildir. Aylık 50.000 TL altı reklam bütçesinde sabit ücret, üstünde harcamanın %15-20'si modeli uygulanır. Detaylı ajans pozisyonlanmamız için <Link href="/sosyal-medya-ajansi" className="font-bold underline hover:no-underline">sosyal medya ajansı sayfamızı</Link> inceleyebilirsiniz.
            </p>
          </Reveal>

          {/* Şehir iç link */}
          <Reveal delay={400}>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href="/instagram-dm-otomasyonu/izmir"
                className="block border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <div className="font-display text-xl font-black mb-2">İzmir'de misiniz?</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  İzmir merkez ofisimizde yerinde çekim, aylık toplantı ve hızlı destek mümkün. Karşıyaka, Bornova, Alsancak, Çiğli KOBİ'lerine özel paketler.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İzmir sayfası <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/instagram-dm-otomasyonu/istanbul"
                className="block border-3 border-ink bg-brand-purple text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <div className="font-display text-xl font-black mb-2">İstanbul'da misiniz?</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Avrupa ve Anadolu yakasındaki markalarla çalışıyoruz. Levent, Maslak, Kadıköy, Ataşehir için haftalık yerinde çekim ekibi.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İstanbul sayfası <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. KENDİN YAP vs AJANS */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
          <div className="border-3 border-paper bg-paper/5 shadow-[8px_8px_0_#FFFDF5] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-b-3 border-paper">
              <div className="p-4 font-black uppercase text-xs bg-brand-yellow text-ink">Kriter</div>
              <div className="p-4 font-black uppercase text-xs bg-paper/10">Kendi ekibinizle</div>
              <div className="p-4 font-black uppercase text-xs bg-brand-pink text-paper">PORTZEN yönetimi</div>
            </div>
            {comparison.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr] border-b-3 border-paper/20",
                  i === comparison.length - 1 ? "border-b-0" : ""
                )}>
                  <div className="p-4 font-bold text-sm bg-paper/5">{c.axis}</div>
                  <div className="p-4 text-sm opacity-80">{c.inhouse}</div>
                  <div className="p-4 text-sm font-medium">{c.agency}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SSS */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
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
                <div className="border-l-3 border-brand-pink pl-6">
                  <h3 className="font-display text-xl font-black mb-3 text-ink">{f.q}</h3>
                  <p className="text-body text-ink/75 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-ink bg-paper p-6 shadow-brutal">
              <div className="flex items-start gap-4 flex-wrap">
                <Sparkles className="h-6 w-6 shrink-0 text-brand-pink" />
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
          <div className="border-3 border-ink bg-brand-pink p-8 md:p-14 shadow-brutal-lg text-paper">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sosyal medyanızı bize bırakın, siz işinize odaklanın.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut hesaplarınızı, rakiplerinizi ve büyüme potansiyelinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu, ilk 90 günde hangi rakamlara ulaşabileceğinizi net konuşuyoruz. Sözde vaat değil, sözleşmeye yazılı hedef. Hemen WhatsApp yazın veya iletişim formunu doldurun, aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Keşif Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageSquare className="h-4 w-4" /> WhatsApp Yaz
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-paper/20 grid sm:grid-cols-3 gap-4 text-sm">
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
