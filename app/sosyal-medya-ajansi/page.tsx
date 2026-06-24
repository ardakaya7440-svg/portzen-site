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
    telephone: "+905015884853",
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
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TRY",
    lowPrice: "8500",
    highPrice: "75000",
    priceRange: "₺8500-₺75000+",
    availability: "https://schema.org/InStock"
  }
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
        text: "PORTZEN sosyal medya ajansı paketleri Başlangıç 8.500-15.000 TL/ay, Büyüme 15.000-35.000 TL/ay, Kurumsal 35.000 TL+/ay aralığındadır. Fiyat; içerik adedi, kanal sayısı, reklam yönetimi ve raporlama derinliğine göre değişir. Net teklif 15 dakikalık ücretsiz keşif görüşmesinde çıkar."
      }
    },
    {
      "@type": "Question",
      name: "Sosyal medya ajansı seçerken nelere dikkat etmeliyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Önce ekibin gerçek referanslarına ve sektörünüze yakın işlerine bakın. Sözleşmede aylık içerik adedi, kanal kapsamı, reklam yönetimi, raporlama sıklığı ve revizyon hakkı net yazılı olmalı. Ayda bir performans raporu, takvim onayı ve aylık strateji toplantısı standarttır. PORTZEN'de bunların hepsi her pakette dahildir."
      }
    },
    {
      "@type": "Question",
      name: "Hangi sosyal medya kanallarını yönetiyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instagram, Facebook, TikTok, LinkedIn ve YouTube Shorts en sık yönettiğimiz kanallar. KOBİ paketlerinde genelde Instagram + Facebook + 1 ek kanal, kurumsal pakette tüm kanallar yönetilir. X (Twitter) ve Threads talep üzerine eklenir."
      }
    },
    {
      "@type": "Question",
      name: "İçerik üretimini siz mi yapıyorsunuz, dışarıdan mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İçerik üretimi tamamen PORTZEN ekibi tarafından yapılır: foto çekim, reels-tiktok video, grafik tasarım, metin yazımı ve AI destekli görsel üretim. Dış kaynak kullanmıyoruz çünkü marka tutarlılığı kaybolur. İzmir, İstanbul ve Ankara'da çekim yapabiliyoruz; diğer şehirlerde uzaktan üretim + kurye modeli uyguluyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Reklam yönetimi paketlere dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyüme ve Kurumsal paketlerde Meta Ads (Facebook + Instagram) ve TikTok Ads yönetimi dahildir. Başlangıç paketinde reklam yönetimi opsiyonel olarak eklenebilir. Reklam bütçesi ayrı olarak Meta'ya ve TikTok'a ödenir; ajans yönetim ücreti reklam harcamasının %15-20'sidir veya pakete dahil sabittir."
      }
    },
    {
      "@type": "Question",
      name: "Sosyal medya yönetimi sözleşmesi kaç ay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart sözleşmemiz 6 aylıktır çünkü organik büyüme ilk 3 ayda görünür hâle gelir, kalıcı sonuçlar 6. ayda netleşir. 3 aylık deneme paketi de sunuyoruz; uzun vadeli sözleşme zorunluluğu yok. İlk ayda fit hissetmezseniz cayma hakkınız var."
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
  { metric: "3.2x", label: "Ortalama erişim artışı (90 gün)" },
  { metric: "%48", label: "Etkileşim oranı artışı" },
  { metric: "8 metrik", label: "Aylık şeffaf raporlama" }
];

const differentiators = [
  {
    icon: Layers,
    title: "Beş ajans yerine tek ekip",
    desc: "Sosyal medya, içerik üretimi, reklam, web ve AI otomasyon - hepsi tek çatı altında. Beş ayrı ajansla koordinasyon derdi olmaz, brief tek seferde verilir, marka tonu hiç kaymaz."
  },
  {
    icon: Sparkles,
    title: "AI destekli içerik motoru",
    desc: "Trend tespiti, hashtag stratejisi, içerik takvimi ve görsel üretiminde AI araçlarını ekip iş akışına entegre ettik. Aynı bütçeyle %3-4 katı içerik çıkıyor, kalite düşmüyor."
  },
  {
    icon: HeartHandshake,
    title: "KOBİ odaklı yaklaşım",
    desc: "Müşterilerimizin %85'i 5-50 kişilik KOBİ. Ajans dili konuşmak yerine sahibinin anladığı dilde konuşuyoruz. Aylık 10 sayfalık rapor değil, 1 sayfalık net özet."
  },
  {
    icon: BarChart3,
    title: "Ölçülebilir sonuç garantisi",
    desc: "İlk 90 günde minimum erişim, takipçi ve etkileşim artışı sözleşmede yazılı. Hedefler tutmazsa o ay ücretsiz. Çoğu ajans bunu konuşmaz, biz baştan yazıyoruz."
  }
];

const services = [
  {
    icon: Instagram,
    title: "Instagram yönetimi",
    desc: "Feed, story, reels, hashtag stratejisi, DM otomasyonu ve community management. Haftada 4-8 post, günlük story, ayda 8-16 reels. Algoritma değişikliklerine 48 saat içinde adapte oluruz.",
    color: "bg-brand-pink",
    link: "/instagram-dm-otomasyonu"
  },
  {
    icon: Facebook,
    title: "Facebook yönetimi",
    desc: "Sayfa yönetimi, içerik dağıtımı, Facebook Grupları, Marketplace optimizasyonu. KOBİ'ler için hâlâ en yüksek dönüşüm getiren kanallardan biri; özellikle 35+ hedef kitlede.",
    color: "bg-brand-blue"
  },
  {
    icon: Video,
    title: "TikTok yönetimi",
    desc: "TikTok ajansı olarak short-form video stratejisi, trend takibi, ses-müzik seçimi ve TikTok Shop entegrasyonu yapıyoruz. Reels algoritması TikTok'tan besleniyor; çift kanal yönetimi şart.",
    color: "bg-brand-yellow"
  },
  {
    icon: Linkedin,
    title: "LinkedIn yönetimi (B2B)",
    desc: "B2B markalar için kurucu profili + şirket sayfası ikili yönetimi. Thought leadership içerik, sektör raporları, LinkedIn Ads ve outbound sales navigator entegrasyonu.",
    color: "bg-brand-green"
  },
  {
    icon: Megaphone,
    title: "Sosyal medya reklamları",
    desc: "Meta Ads (Facebook + Instagram) ve TikTok Ads yönetimi. Kampanya kurulumu, kreatif testi, hedef kitle optimizasyonu, ROAS odaklı bütçe yönetimi. Ortalama CPM %25 düşüş, ROAS 2.8x.",
    color: "bg-brand-orange"
  },
  {
    icon: Camera,
    title: "İçerik üretimi",
    desc: "Foto çekim, reels-tiktok video, grafik tasarım, motion graphic, AI destekli görsel üretim. Aylık 30-80 görsel + 8-20 video. İzmir, İstanbul, Ankara'da yerinde çekim mümkün.",
    color: "bg-brand-purple"
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
    color: "bg-brand-pink"
  },
  {
    icon: Users,
    title: "Community management",
    desc: "DM, yorum, mention, story yanıtları - 7/24 takip. Kriz anında 2 saat içinde aksiyon. Olumlu yorumlar tag'lenir, olumsuzlar diplomatik çözülür, marka itibarı korunur.",
    color: "bg-brand-blue"
  }
];

const process = [
  {
    step: "01",
    title: "Brief ve marka denetimi",
    desc: "1 hafta - mevcut sosyal medya hesaplarınızı, rakiplerinizi ve hedef kitlenizi analiz ederiz. Mevcut içerik tonu, görsel dil ve performans verisi çıkar."
  },
  {
    step: "02",
    title: "Strateji ve içerik takvimi",
    desc: "1 hafta - 90 günlük büyüme stratejisi, kanal-bazlı yaklaşım, içerik temaları, hashtag stratejisi ve ilk ayın günlük takvimi hazırlanır."
  },
  {
    step: "03",
    title: "Üretim",
    desc: "Sürekli - foto çekim, video çekim, grafik tasarım, metin yazımı. Her ay 30-80 görsel, 8-20 video, 4-8 reels. Onay panelinden müşteri görür."
  },
  {
    step: "04",
    title: "Yayın ve community",
    desc: "Günlük - içerikler optimum saatlerde yayınlanır, DM ve yorumlar 2 saat içinde yanıtlanır, kriz yönetimi aktif. Reklam kampanyaları paralel optimize edilir."
  },
  {
    step: "05",
    title: "Raporlama ve revize",
    desc: "Aylık - 8 metrikli rapor, 60 dakikalık strateji toplantısı, sonraki ay için içerik teması revize. Hedef tutmazsa düzeltici aksiyon planı çıkarılır."
  }
];

const sectors = [
  {
    name: "Butik",
    slug: "butik",
    desc: "Yeni koleksiyon lansmanı, reels-odaklı satış, story-DM funnel'ı, influencer iş birliği.",
    color: "bg-brand-pink"
  },
  {
    name: "Restoran",
    slug: "restoran",
    desc: "Menü vitrini, food photography, reels-TikTok yemek videosu, rezervasyon DM otomasyonu.",
    color: "bg-brand-yellow"
  },
  {
    name: "Klinik",
    slug: "klinik",
    desc: "Hekim profil yönetimi, hasta yorumları, randevu DM funnel'ı, KVKK uyumlu içerik.",
    color: "bg-brand-blue"
  },
  {
    name: "Eczane",
    slug: "eczane",
    desc: "Sezonsal kampanya, ürün vitrini, danışma DM yanıtı, yerel SEO + sosyal entegrasyonu.",
    color: "bg-brand-green"
  },
  {
    name: "Emlak",
    slug: "emlak",
    desc: "Konut sunumları, 360 video, reels-tour, lead DM funnel'ı, danışman markalama.",
    color: "bg-brand-orange"
  },
  {
    name: "Oto servis",
    slug: "oto-servis",
    desc: "Servis süreç videosu, müşteri yorumları, randevu DM, mevsimsel bakım kampanyaları.",
    color: "bg-brand-purple"
  },
  {
    name: "Eğitim",
    slug: "egitim",
    desc: "Kurs lansmanı, öğrenci başarı hikâyeleri, canlı yayın, kayıt DM otomasyonu.",
    color: "bg-brand-pink"
  },
  {
    name: "Avukat",
    slug: "avukat",
    desc: "Hukuki bilgilendirme içerik, LinkedIn thought leadership, danışma DM funnel'ı.",
    color: "bg-brand-blue"
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
    desc: "Avrupa ve Anadolu yakasında 40+ aktif müşteri. Çekim ekibimiz haftalık İstanbul'a iniyor; Levent, Maslak, Kadıköy ve Ataşehir'de yerinde hizmet.",
    badge: "Aktif"
  },
  {
    name: "Ankara",
    slug: "ankara",
    desc: "Çankaya, Söğütözü, Çukurambar'daki kurumsal müşterilere uzaktan + aylık yerinde toplantı ile hizmet. B2B LinkedIn yönetiminde Ankara güçlü pazarımız.",
    badge: "Aktif"
  }
];

const packages = [
  {
    name: "Başlangıç",
    price: "8.500-15.000 TL",
    period: "/ay",
    desc: "Tek kanal başlangıç KOBİ'leri için",
    color: "bg-paper",
    features: [
      "1 ana kanal (Instagram veya Facebook)",
      "Aylık 12-16 post + 8-12 story",
      "Aylık 4 reels veya TikTok video",
      "Hashtag + içerik takvimi",
      "AI destekli görsel üretim",
      "Aylık 1 strateji toplantısı",
      "Temel aylık rapor (4 metrik)"
    ],
    cta: "Başlangıç Paketi Konuşalım"
  },
  {
    name: "Büyüme",
    price: "15.000-35.000 TL",
    period: "/ay",
    desc: "Büyüyen markalar için",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "2-3 kanal (IG + FB + TikTok/LinkedIn)",
      "Aylık 24-32 post + günlük story",
      "Aylık 8-12 reels/TikTok video",
      "Aylık 1 yerinde foto çekim",
      "Meta Ads + TikTok Ads yönetimi",
      "Community management (DM + yorum)",
      "Aylık detaylı rapor (8 metrik)",
      "Aylık 2 strateji toplantısı",
      "DM otomasyonu altyapısı"
    ],
    cta: "Büyüme Paketi Al"
  },
  {
    name: "Kurumsal",
    price: "35.000 TL+",
    period: "/ay",
    desc: "Çoklu kanal + ajans yedeği isteyen markalar",
    color: "bg-paper",
    features: [
      "Tüm kanallar (IG + FB + TikTok + LinkedIn + YouTube)",
      "Aylık 40-60+ post",
      "Aylık 16-24 video içerik",
      "Aylık 2 yerinde foto + video çekim",
      "Çoklu kampanya reklam yönetimi",
      "Adanmış proje yöneticisi",
      "7/24 community management",
      "Influencer iş birliği yönetimi",
      "Aylık 4 strateji toplantısı",
      "SLA garantili destek"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "Sosyal medya ajansı fiyatları ne kadar?",
    a: "PORTZEN sosyal medya ajansı paketleri Başlangıç 8.500-15.000 TL/ay, Büyüme 15.000-35.000 TL/ay, Kurumsal 35.000 TL+/ay aralığındadır. Fiyat; aylık içerik adedi, kanal sayısı, reklam yönetimi ve raporlama derinliğine göre değişir. Net teklif 15 dakikalık ücretsiz keşif görüşmesinde çıkar. Reklam bütçesi (Meta + TikTok'a ödenen) ayrıdır."
  },
  {
    q: "Sosyal medya ajansı seçerken nelere dikkat etmeliyim?",
    a: "Önce ekibin gerçek referanslarına ve sektörünüze yakın işlerine bakın - vaka çalışması istemek ayıp değildir. Sözleşmede aylık içerik adedi, kanal kapsamı, reklam yönetimi, raporlama sıklığı ve revizyon hakkı net yazılı olmalı. Ayda bir performans raporu, takvim onayı ve aylık strateji toplantısı standarttır. Ekstra; içerik üretiminin dışarıya verilip verilmediğini ve hesap yöneticinizin sürekli aynı kişi olup olmayacağını sorun. PORTZEN'de bunların hepsi her pakette dahildir."
  },
  {
    q: "Hangi sosyal medya kanallarını yönetiyorsunuz?",
    a: "Instagram, Facebook, TikTok, LinkedIn ve YouTube Shorts en sık yönettiğimiz kanallar. KOBİ paketlerinde genelde Instagram + Facebook + 1 ek kanal, kurumsal pakette tüm kanallar yönetilir. X (Twitter) ve Threads talep üzerine eklenir. Pinterest ise e-ticaret ve dekorasyon markaları için aktif kullandığımız bir kanal."
  },
  {
    q: "İçerik üretimini siz mi yapıyorsunuz, dışarıdan mı?",
    a: "İçerik üretimi tamamen PORTZEN ekibi tarafından yapılır: foto çekim, reels-tiktok video, grafik tasarım, metin yazımı ve AI destekli görsel üretim. Dış kaynak kullanmıyoruz çünkü marka tutarlılığı kaybolur ve revize döngüleri uzar. İzmir, İstanbul ve Ankara'da çekim yapabiliyoruz; diğer şehirlerde uzaktan üretim + kurye modeli ile aylık paket içerik gönderiyoruz."
  },
  {
    q: "Reklam yönetimi paketlere dahil mi?",
    a: "Büyüme ve Kurumsal paketlerde Meta Ads (Facebook + Instagram) ve TikTok Ads yönetimi dahildir. Başlangıç paketinde reklam yönetimi opsiyonel olarak eklenebilir. Reklam bütçesi ayrı olarak Meta'ya ve TikTok'a ödenir; ajans yönetim ücreti reklam harcamasının %15-20'sidir veya pakete dahil sabittir. Ortalama ROAS'ımız 2.8x; düşük bütçeli kampanyalarda bile pozitif dönüş hedefliyoruz."
  },
  {
    q: "Sosyal medya yönetimi sözleşmesi kaç ay?",
    a: "Standart sözleşmemiz 6 aylıktır çünkü organik büyüme ilk 3 ayda görünür hâle gelir, kalıcı sonuçlar 6. ayda netleşir. 3 aylık deneme paketi de sunuyoruz; uzun vadeli sözleşme zorunluluğu yok. İlk ayda fit hissetmezseniz cayma hakkınız var. 12 aylık sözleşmelerde %10-15 indirim sağlıyoruz."
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
      <section className="bg-paper py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-pink text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Instagram className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Sosyal Medya Ajansı</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
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

      {/* 2. NİYE PORTZEN */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Niye PORTZEN sosyal medya ajansı?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klasik ajans modeli sizin için çalışmıyorsa, sebebi belli.
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Klasik ajans modeli; ayda bir rapor, üç farklı kişiyle iletişim, ay sonu sürpriz fatura ve "trend bu, biz de yapalım" yaklaşımıdır. PORTZEN bu modeli baştan kurmadı. KOBİ'lerin ve büyüyen markaların ihtiyaçlarına göre tasarlanmış dört farklılığımız var.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-paper/5 p-6 shadow-[8px_8px_0_#FFFDF5]">
                    <Icon className="h-8 w-8 text-brand-yellow mb-4" />
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
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Hizmet kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi paketinde tam olarak ne var?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Sosyal medya ajansı seçerken en sık karşılaşılan sorun, kapsamın belirsiz kalmasıdır. PORTZEN'de paket içeriği baştan net: hangi kanal, kaç içerik, hangi tip rapor - sözleşmede yazılı. İşte tipik bir sosyal medya yönetimi paketinde sunduğumuz 9 ana hizmet:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const card = (
                <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                  <div className={cn("inline-flex items-center justify-center w-12 h-12 border-3 border-ink shadow-brutal-sm mb-4", s.color)}>
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

      {/* 4. ÇALIŞMA SÜRECİ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Çalışma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Brief'ten ilk raporlamaya - 5 adımda işleyiş
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Sosyal medya ajansı ile çalışırken en sık şikâyet "ne zaman ne olacağı belli değil" yakınmasıdır. PORTZEN'de süreç ilk günden net. İlk iki hafta strateji ve hazırlık, sonraki haftalar üretim + yayın + community. Aylık raporlama ve revize ile döngü kapanır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-ink p-6 shadow-[8px_8px_0_#FFFDF5] h-full">
                  <div className="font-display text-5xl font-black text-brand-yellow mb-3">{p.step}</div>
                  <div className="font-bold text-lg mb-2">{p.title}</div>
                  <div className="text-sm opacity-75 leading-relaxed">{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SEKTÖRLERE GÖRE YAKLAŞIM */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörlere göre özelleşmiş yaklaşım
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya yönetimi sektöre göre değişir.
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Bir butiğin Instagram stratejisi ile bir hukuk bürosunun LinkedIn stratejisi aynı olamaz. PORTZEN her sektör için ayrı bir oyun kitabı kullanır: içerik temaları, hashtag stratejisi, yayın saatleri, DM funnel'ı ve reklam hedefleme - hepsi sektöre özel. İşte en aktif olduğumuz 8 sektör:
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {sectors.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link
                  href={`/instagram-dm-otomasyonu/${s.slug}`}
                  className={cn(
                    "block border-3 border-ink p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full",
                    s.color,
                    s.color === "bg-brand-yellow" || s.color === "bg-brand-pink" ? "text-ink" : "text-ink"
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
              Sektörünüz listede değil mi? Endişelenmeyin - 20+ sektörde aktif çalışıyoruz. Keşif görüşmesinde sektörünüze özel strateji önerisi sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. ŞEHİRLER */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Hizmet verdiğimiz şehirler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                İzmir merkez, İstanbul ve Ankara'da aktif
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                PORTZEN İzmir merkezli bir sosyal medya ajansıdır. Çekim ekibimiz haftalık olarak İstanbul ve Ankara'ya iniyor; bu üç şehirde yerinde foto-video çekim, aylık yüz yüze toplantı ve hızlı destek mümkün. Türkiye'nin diğer 78 şehrine uzaktan üretim modeli ile hizmet veriyoruz - kalite ve tempo aynı.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={`/instagram-dm-otomasyonu/${c.slug}`}
                  className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-ink" />
                      <div className="font-display text-2xl font-black text-ink">{c.name}</div>
                    </div>
                    <span className="border-3 border-ink bg-brand-yellow text-ink px-2 py-0.5 text-[10px] font-black uppercase shadow-brutal-sm">
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

      {/* 7. FİYAT ARALIĞI */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sosyal medya ajansı fiyatları - net aralıklar
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Türkiye'de sosyal medya ajansı fiyatları gizli tutulduğu için karar vermek zorlaşıyor. PORTZEN üç paket aralığını net yayınlıyor. Tam rakam; aylık içerik adedi, kanal sayısı, reklam yönetimi kapsamı ve yerinde çekim talebine göre keşif görüşmesinde netleşir.
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
              <strong>Not:</strong> Reklam yönetiminde Meta Ads ve TikTok Ads'e ödenen bütçe ayrıdır - ajans yönetim ücreti pakete dahildir. Aylık 50.000 TL altı reklam bütçesinde sabit ücret, üstünde harcamanın %15-20'si modeli uygulanır.
            </p>
          </Reveal>

          {/* İç link bloğu - diğer hizmetlere */}
          <Reveal delay={400}>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href="/ai-reklam-videosu"
                className="block border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Video className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">AI Reklam Videosu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medyada yayınlayacağınız reklam videolarını AI ile 48 saatte üretiyoruz. Aylık 8-20 video çıkar.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/web-tasarim"
                className="block border-3 border-ink bg-brand-green text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <PenTool className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Web Tasarım</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medyadan yönlendireceğiniz landing sayfaları + kurumsal siteler. Dönüşüm odaklı tasarım.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/whatsapp-ai-asistani"
                className="block border-3 border-ink bg-brand-yellow text-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <MessageCircle className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">WhatsApp AI Asistanı</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medyadan gelen DM ve WhatsApp mesajlarına 60 saniyede yanıt veren AI asistan.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/crm-otomasyonu"
                className="block border-3 border-ink bg-brand-purple text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Target className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">CRM Otomasyonu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sosyal medya lead'lerinizi CRM'e otomatik aktarın, satış funnel'ını kapatın.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
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
                Sosyal medya ajansı seçerken merak edilenler
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

          {/* Blog iç link bloğu */}
          <Reveal delay={300}>
            <div className="mt-12 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Search className="h-6 w-6 shrink-0 text-brand-yellow" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-3">Daha derin okuma için blog yazılarımız</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog/instagram-dm-donusum-artirma" className="font-bold text-brand-yellow hover:underline inline-flex items-center gap-1">
                        Instagram DM dönüşümünü artırmanın 7 yolu <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/sosyal-medya-icerik-takvimi" className="font-bold text-brand-yellow hover:underline inline-flex items-center gap-1">
                        Sosyal medya içerik takvimi nasıl hazırlanır <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/instagram-hashtag-stratejisi-2026" className="font-bold text-brand-yellow hover:underline inline-flex items-center gap-1">
                        Instagram hashtag stratejisi 2026 rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/tiktok-vs-instagram-reels-kobi" className="font-bold text-brand-yellow hover:underline inline-flex items-center gap-1">
                        TikTok vs Instagram Reels: KOBİ için hangisi öncelik <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/istanbul-sosyal-medya-ajansi-rehberi" className="font-bold text-brand-yellow hover:underline inline-flex items-center gap-1">
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sosyal medyanızı birlikte büyütelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz analiz görüşmesinde mevcut hesaplarınızı, rakiplerinizi ve büyüme potansiyelinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu, ilk 90 günde nereye ulaşacağınızı net konuşuyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun, aynı gün dönüyoruz.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
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
