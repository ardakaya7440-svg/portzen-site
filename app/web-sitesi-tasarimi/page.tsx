import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Globe,
  Layout,
  Code,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  MapPin
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Web Sitesi Tasarımı | Kurumsal + E-Ticaret + Landing Sayfası - PORTZEN",
  description:
    "Web sitesi tasarımı hizmeti: hızlı, SEO uyumlu, mobil dostu kurumsal siteler, e-ticaret ve landing page'ler. Next.js altyapısı, 3 haftada teslim.",
  keywords: [
    "web sitesi tasarımı",
    "web sitesi tasarım",
    "kurumsal web sitesi",
    "e-ticaret sitesi",
    "landing page tasarım",
    "web site yaptırma",
    "site tasarımı fiyatları",
    "profesyonel web tasarım",
    "modern web sitesi",
    "next.js web tasarım"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/web-sitesi-tasarimi",
    siteName: "PORTZEN",
    title: "Web Sitesi Tasarımı | Kurumsal + E-Ticaret + Landing Sayfası - PORTZEN",
    description:
      "Hızlı, SEO uyumlu ve mobil dostu web sitesi tasarımı. Kurumsal siteler, e-ticaret ve landing page'ler Next.js altyapısıyla 3 haftada teslim."
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Sitesi Tasarımı | PORTZEN",
    description:
      "Kurumsal, e-ticaret ve landing page tasarımı. Next.js, Lighthouse 95+, SEO uyumlu, 3 haftada teslim."
  },
  alternates: { canonical: "https://portzenai.com/web-sitesi-tasarimi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Sitesi Tasarımı Hizmetleri",
  serviceType: "Web Sitesi Tasarımı ve Geliştirme",
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
    "PORTZEN, KOBİ ve kurumsal markalar için kurumsal web sitesi, e-ticaret sitesi ve landing page tasarımı sunar. Next.js altyapısı, Lighthouse 95+ skor, mobil öncelikli tasarım, SEO uyumu ve 3 haftada teslim ortalaması.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "TRY",
    lowPrice: "10000",
    highPrice: "150000",
    priceRange: "₺10.000-₺85.000/proje",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Web sitesi tasarımı fiyatlarında kaç sayfa dahil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing page paketinde tek sayfa (bölümlü uzun scroll), kurumsal pakette 5-15 sayfa, e-ticaret paketinde ise sınırsız ürün + 8-12 sabit sayfa dahildir. Ekstra sayfa talebi sayfa başına 1.500-3.500 TL arasında fiyatlandırılır. Blog modülü kurumsal pakete standart olarak eklenir."
      }
    },
    {
      "@type": "Question",
      name: "Alan adı ve hosting siz mi alıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alan adı ve hosting satın alımını sizin adınıza yapabiliriz veya sizin hesabınızda kalır. Önerimiz Vercel + Cloudflare kombinasyonu; yıllık 500-1.200 TL aralığında, Next.js için ideal. Kurumsal projelerde AWS + Cloudflare mimarisini kuruyoruz. Alan adı sahibi her zaman siz olursunuz."
      }
    },
    {
      "@type": "Question",
      name: "İçeriği kim yazıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İki seçenek var. Birinci seçenek sizin metinlerinizi kullanmamız. İkinci seçenek metin yazımını PORTZEN'e vermeniz; sayfa başına 750-1.500 TL karşılığında SEO uyumlu içerik üretiyoruz. Görsel içerik için stok görsel kütüphanesi standart, fotoğraf çekimi ise ekstra hizmet."
      }
    },
    {
      "@type": "Question",
      name: "Kaç revizyon hakkım var?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tasarım sürecinde 2 tur büyük revizyon, geliştirme sürecinde ise sınırsız küçük düzeltme (metin, renk, boşluk) hakkınız var. Büyük revizyon tanımı: layout değişikliği veya bölüm ekleme/çıkarma. Yayın sonrası 30 gün ücretsiz düzeltme garantisi standart."
      }
    },
    {
      "@type": "Question",
      name: "Yayın sonrası bakım hizmeti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, iki bakım paketimiz var. Temel Bakım aylık 1.500 TL: yedekleme, güvenlik güncellemesi, aylık 2 saat içerik güncelleme. Pro Bakım aylık 3.500 TL: temel bakım + aylık 8 saat geliştirme + performans optimizasyonu + SEO takibi. Bakım isteğe bağlıdır; siteniz size aittir, istediğiniz zaman başka bir ekibe devredebilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "SEO nasıl garantilenir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teknik SEO temeli (site hızı, meta etiketler, schema.org, sitemap, robots.txt, canonical, mobil uyum) her projede standart olarak kurulur. Lighthouse skoru minimum 90 garantimiz var. Ancak organik trafik sıralaması içerik ve backlink stratejisine bağlıdır; sıralama garantisi vermiyoruz çünkü Google'ın kararıdır. SEO danışmanlığı ayrı bir hizmet olarak sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Ödeme planı nasıl işliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standart ödeme planı 3 taksit: sözleşme imzasında %40, tasarım onayında %30, yayına almadan önce %30. 50.000 TL üzeri projelerde 4 taksit seçeneği sunuyoruz. Fatura resmi olarak kesilir, kurumsal ödemelerde havale ve kredi kartı kabul edilir. E-ticaret projelerinde kısmi ön ödeme sonrası aylık taksit modeli de mümkün."
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
      name: "Web Sitesi Tasarımı",
      item: "https://portzenai.com/web-sitesi-tasarimi"
    }
  ]
};

const heroStats = [
  { metric: "3 hafta", label: "Ortalama teslim süresi" },
  { metric: "95+", label: "Lighthouse performans skoru" },
  { metric: "100%", label: "Mobil öncelikli tasarım" },
  { metric: "6 tip", label: "Kurumsal, e-ticaret, landing, blog, SaaS, portfolyo" }
];

const advantages = [
  {
    icon: Smartphone,
    title: "Mobil dostu tasarım",
    desc: "Türkiye'de web trafiğinin %72'si mobil cihazlardan geliyor. Bu yüzden tüm siteleri önce mobilde kuruyor, sonra tablet ve masaüstüne genişletiyoruz. Dokunmatik hedef boyutları, okunabilir tipografi ve tek elle kullanım standart."
  },
  {
    icon: Zap,
    title: "Hızlı yüklenen sayfalar",
    desc: "Lighthouse skoru en az 95 garantimiz var. Next.js sunucu tarafı render, görsel optimizasyonu (WebP + AVIF), lazy loading, CDN önbelleği ve kritik CSS ile ilk boyama süresi 1.2 saniyenin altında."
  },
  {
    icon: Search,
    title: "SEO temeli hazır",
    desc: "Her site teknik SEO temeliyle kurulur: schema.org işaretlemeleri, sitemap.xml, robots.txt, canonical etiketler, meta açıklamalar, Open Graph, Twitter Card ve semantik HTML. Google Search Console entegrasyonu ilk gün yapılır."
  },
  {
    icon: Sparkles,
    title: "AI destekli içerik üretimi",
    desc: "Sayfa metinleri, ürün açıklamaları ve blog yazıları için AI destekli içerik üretim akışımız var. Marka tonu korunur, dilbilgisi editörden geçer, SEO anahtar kelimeleri yerleşir. Aynı bütçeyle 3-4 katı içerik çıkar."
  }
];

const siteTypes = [
  {
    icon: Globe,
    title: "Kurumsal site",
    desc: "5-15 sayfalık şirket web siteleri. Hakkımızda, hizmetler, referanslar, ekip, iletişim ve blog modülü. KVKK uyumlu form yönetimi ve çoklu dil desteği standart. Klasik teklif: 22.000-45.000 TL.",
    color: "bg-brand-blue",
    link: "/web-tasarim"
  },
  {
    icon: Layout,
    title: "E-ticaret sitesi",
    desc: "Shopify, WooCommerce veya özel (custom) e-ticaret altyapısı. Ürün yönetimi, sepet, iyzico/PayTR entegrasyonu, kargo API'leri, stok takibi. Ticimax ve İdeasoft alternatifi olarak da kuruyoruz.",
    color: "bg-brand-yellow",
    link: "/ticimax-alternatifi"
  },
  {
    icon: Zap,
    title: "Landing page",
    desc: "Satış odaklı tek sayfa. Reklam kampanyalarınızın (Meta Ads, Google Ads) trafiğini yönlendirdiğiniz dönüşüm odaklı sayfalar. A/B test hazır, form entegrasyonu tam. Klasik teklif: 10.000-15.000 TL.",
    color: "bg-brand-pink"
  },
  {
    icon: Search,
    title: "Blog + içerik sitesi",
    desc: "SEO odaklı içerik siteleri. Kategori yönetimi, yazar profilleri, ilgili yazılar, RSS, yorum modülü ve haber bülteni entegrasyonu. Medium veya WordPress alternatifi olarak Next.js + Sanity yapısı.",
    color: "bg-brand-green"
  },
  {
    icon: Code,
    title: "SaaS + panel",
    desc: "Kullanıcı girişli, ölçeklenebilir web uygulamaları. Kullanıcı yönetimi, ödeme entegrasyonu (Stripe, iyzico), rol tabanlı erişim, admin paneli ve API mimarisi. Özel geliştirme gerektirir.",
    color: "bg-brand-purple"
  },
  {
    icon: Sparkles,
    title: "Kişisel marka + portfolyo",
    desc: "Danışmanlar, sanatçılar, mimarlar ve freelancer'lar için portfolyo siteleri. Proje vitrini, hikâye anlatımı, CV, iletişim ve blog. Görsel öne çıkarma, animasyon ve etkileşim ön planda.",
    color: "bg-brand-orange"
  }
];

const nextjsBenefits = [
  {
    icon: Zap,
    title: "Sunucu tarafı render ile hızlı yükleme",
    desc: "Next.js sayfaları sunucuda üretip tarayıcıya hazır HTML gönderir. Kullanıcı 1 saniyenin altında ilk içeriği görür, arama motorları içeriği tam okur. WordPress'te 4-6 saniye olan yükleme süreleri, Next.js'te 1.2 saniyeye iner."
  },
  {
    icon: Search,
    title: "Google için ideal SEO altyapısı",
    desc: "Sunucu render + semantik HTML + otomatik sitemap + otomatik canonical + schema.org kolay entegrasyonu. Core Web Vitals metrikleri Google'ın sıralama sinyali; Next.js bu metriklerde WordPress'e karşı %40-60 avantajlı."
  },
  {
    icon: Layout,
    title: "Kolay güncelleme, headless CMS",
    desc: "İçerik yönetimi için Sanity, Contentful veya Strapi gibi headless CMS'ler kullanıyoruz. Editör dostu panel, drag-drop görsel yönetimi, çoklu dil desteği. Kod bilmeden metin, görsel ve blog yazısı ekleyebilirsiniz."
  },
  {
    icon: ShieldCheck,
    title: "Ölçeklenebilir altyapı",
    desc: "Vercel + Cloudflare CDN mimarisi ile aylık 1 ziyaretçiden 1 milyon ziyaretçiye kadar aynı hızda çalışır. WordPress'te trafik artışında sunucu yükseltmek gerekir; Next.js'te trafik otomatik ölçeklenir, ek maliyet çıkmaz."
  }
];

const process = [
  {
    step: "01",
    title: "Brief görüşmesi",
    desc: "30 dakika - hedeflerinizi, hedef kitleyi, rakip siteleri ve içerik yapısını konuşuruz. Site tipini, sayfa sayısını ve entegrasyonları netleştiririz."
  },
  {
    step: "02",
    title: "Wireframe ve tasarım",
    desc: "5-7 gün - önce düşük çözünürlüklü wireframe, sonra Figma üzerinde yüksek çözünürlüklü mockup. Marka renkleriniz, tipografi ve görsel dil belirlenir."
  },
  {
    step: "03",
    title: "Onay ve revizyon",
    desc: "2 tur büyük revizyon hakkınız var. Onay verdiğiniz Figma dosyası geliştirme referansıdır; sonrasında layout değişikliği ek maliyet doğurur."
  },
  {
    step: "04",
    title: "Geliştirme",
    desc: "10-15 gün - Next.js ile kodlama, CMS entegrasyonu, form yönetimi, ödeme entegrasyonu (varsa), analytics kurulumu. Her hafta ilerleme demo linki gönderilir."
  },
  {
    step: "05",
    title: "Test ve optimizasyon",
    desc: "2-3 gün - performans testi, tarayıcı uyumluluk testi, mobil test, form testi, SSL kurulumu, Lighthouse skorlama. Hedef: 95+ skor."
  },
  {
    step: "06",
    title: "Yayın ve eğitim",
    desc: "Alan adı bağlantısı, DNS yönlendirme, arama motoru gönderimi. 60 dakikalık CMS eğitim toplantısı + PDF kılavuz. Yayın sonrası 30 gün ücretsiz destek."
  }
];

const sectorPages = [
  {
    name: "Klinik siteleri",
    slug: "klinik",
    desc: "Hekim tanıtımı, hizmet listesi, KVKK uyumlu randevu formu, hasta yorumları ve tıbbi içerik yönetimi.",
    color: "bg-brand-blue"
  },
  {
    name: "Restoran + kafe",
    slug: "restoran",
    desc: "Menü vitrini, rezervasyon formu, konum + harita, yemek fotoğrafı optimizasyonu ve mobil öncelikli hız.",
    color: "bg-brand-yellow"
  },
  {
    name: "Emlak ofisi",
    slug: "emlak",
    desc: "İlan yönetim paneli, filtreli arama, harita entegrasyonu, sanal tur ve danışman profil sayfaları.",
    color: "bg-brand-orange"
  },
  {
    name: "Butik + moda",
    slug: "butik",
    desc: "E-ticaret + Instagram entegrasyonu, koleksiyon vitrini, hızlı ödeme akışı ve influencer ürün etiketleme.",
    color: "bg-brand-pink"
  },
  {
    name: "Avukat + hukuk büro",
    slug: "avukat",
    desc: "Uzmanlık alanları, avukat profilleri, hukuki bilgilendirme blog modülü ve gizli danışma formu.",
    color: "bg-brand-purple"
  },
  {
    name: "Eğitim kurumu",
    slug: "egitim",
    desc: "Kurs katalog yönetimi, kayıt formu, öğrenci başarı hikâyeleri, eğitmen profilleri ve LMS entegrasyonu.",
    color: "bg-brand-green"
  }
];

const cities = [
  {
    name: "İzmir",
    slug: "izmir",
    desc: "Merkez ofisimiz İzmir'de. Karşıyaka, Bornova, Alsancak ve Çiğli'deki firmalarla yerinde brief toplantısı, tasarım sunumu ve teslim mümkün.",
    badge: "Merkez"
  },
  {
    name: "İstanbul",
    slug: "istanbul",
    desc: "Levent, Maslak, Kadıköy ve Ataşehir'de 60+ aktif proje. Kurumsal müşterilerimizle aylık yüz yüze toplantı yapıyoruz; teslim ve eğitim uzaktan.",
    badge: "Aktif"
  },
  {
    name: "Ankara",
    slug: "ankara",
    desc: "Çankaya, Söğütözü ve Çukurambar bölgelerindeki KOBİ ve kurumsal müşterilere uzaktan tasarım + aylık toplantı ile hizmet veriyoruz.",
    badge: "Aktif"
  }
];

const packages = [
  {
    name: "Landing Page",
    price: "10.000-15.000 TL",
    period: "/proje",
    desc: "Reklam kampanyaları ve satış odaklı tek sayfa",
    color: "bg-paper",
    features: [
      "Tek sayfa, 6-10 bölümlü uzun scroll",
      "Mobil öncelikli tasarım",
      "Form entegrasyonu (WhatsApp, e-posta)",
      "Google Analytics + Meta Pixel",
      "A/B test hazırlığı",
      "Lighthouse 95+ skor",
      "3 iş günü teslim",
      "1 tur büyük revizyon"
    ],
    cta: "Landing Page İste"
  },
  {
    name: "Kurumsal",
    price: "22.000-45.000 TL",
    period: "/proje",
    desc: "Şirketler için 5-15 sayfalık kurumsal site",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "5-15 sayfa (anasayfa + iç sayfalar)",
      "Headless CMS (Sanity/Strapi)",
      "Blog modülü + kategori yönetimi",
      "Çoklu dil desteği (TR + EN)",
      "KVKK uyumlu iletişim formları",
      "SEO temeli tam kurulur",
      "Lighthouse 95+ skor",
      "2 tur büyük revizyon",
      "3 hafta teslim",
      "30 gün ücretsiz destek"
    ],
    cta: "Kurumsal Site Al"
  },
  {
    name: "E-ticaret / Özel",
    price: "45.000-150.000 TL",
    period: "/proje",
    desc: "E-ticaret siteleri ve özel geliştirme projeleri",
    color: "bg-paper",
    features: [
      "Sınırsız ürün + kategori yönetimi",
      "iyzico/PayTR ödeme entegrasyonu",
      "Aras/Yurtiçi/PTT kargo API'leri",
      "Stok + sipariş yönetim paneli",
      "Fatura + e-arşiv entegrasyonu",
      "Kupon + kampanya modülü",
      "Instagram Shop entegrasyonu",
      "6-10 hafta teslim",
      "60 gün ücretsiz destek",
      "Adanmış proje yöneticisi"
    ],
    cta: "E-ticaret Teklifi"
  }
];

const comparison = [
  {
    kriter: "Aylık maliyet",
    hazir: "Aylık 300-1.200 TL abonelik (sonsuza kadar)",
    custom: "Sadece hosting: yıllık 500-1.200 TL"
  },
  {
    kriter: "SEO kalitesi",
    hazir: "Sınırlı, şablonların SEO altyapısı zayıf",
    custom: "Lighthouse 95+, Core Web Vitals uyumlu"
  },
  {
    kriter: "Marka özgünlüğü",
    hazir: "Şablon bağımlı, binlerce benzer site",
    custom: "Sıfırdan tasarım, markaya özel"
  },
  {
    kriter: "Ölçeklenebilirlik",
    hazir: "Trafik artınca plan yükseltmek gerekir",
    custom: "Vercel CDN ile otomatik ölçeklenme"
  },
  {
    kriter: "Sahiplik",
    hazir: "Platform kapatırsa siteniz gider",
    custom: "Kod ve içerik tamamen sizin"
  },
  {
    kriter: "Entegrasyon esnekliği",
    hazir: "Sadece platformun izin verdiği araçlar",
    custom: "İstediğiniz her API ve araç bağlanır"
  }
];

const faqs = [
  {
    q: "Web sitesi tasarımı fiyatlarında kaç sayfa dahil?",
    a: "Landing page paketinde tek sayfa (bölümlü uzun scroll), kurumsal pakette 5-15 sayfa, e-ticaret paketinde ise sınırsız ürün + 8-12 sabit sayfa dahildir. Ekstra sayfa talebi sayfa başına 1.500-3.500 TL arasında fiyatlandırılır. Blog modülü kurumsal pakete standart olarak eklenir, ekstra ücret alınmaz. Detaylı kapsamı brief görüşmesinde birlikte belirliyoruz."
  },
  {
    q: "Alan adı ve hosting siz mi alıyorsunuz?",
    a: "Alan adı ve hosting satın alımını sizin adınıza yapabiliriz veya sizin hesabınızda kalır - tercih size ait. Önerimiz Vercel + Cloudflare kombinasyonu; yıllık 500-1.200 TL aralığında, Next.js için ideal. Kurumsal projelerde AWS + Cloudflare mimarisini kuruyoruz. Alan adı sahibi her zaman siz olursunuz, satın alma faturası doğrudan size düzenlenir."
  },
  {
    q: "İçeriği kim yazıyor?",
    a: "İki seçenek var. Birinci seçenek: sizin metinlerinizi kullanmamız. Bu durumda sadece düzenleme ve SEO uyum kontrolü yapıyoruz. İkinci seçenek: metin yazımını PORTZEN'e vermeniz; sayfa başına 750-1.500 TL karşılığında SEO uyumlu içerik üretiyoruz. Görsel içerik için stok görsel kütüphanesi (Unsplash, Pexels) standart olarak sunulur; profesyonel fotoğraf çekimi ise ekstra hizmet (İzmir, İstanbul, Ankara'da mümkün)."
  },
  {
    q: "Kaç revizyon hakkım var?",
    a: "Tasarım sürecinde 2 tur büyük revizyon, geliştirme sürecinde ise sınırsız küçük düzeltme (metin, renk, boşluk, buton yeri) hakkınız var. Büyük revizyon tanımı: layout değişikliği, bölüm ekleme/çıkarma veya renk paleti değiştirme. Yayın sonrası 30 gün ücretsiz düzeltme garantisi standart olarak sunulur. 30 gün sonrası düzeltme talepleri saatlik ücretlendirilir."
  },
  {
    q: "Yayın sonrası bakım hizmeti var mı?",
    a: "Evet, iki bakım paketimiz var. Temel Bakım aylık 1.500 TL: yedekleme, güvenlik güncellemesi, aylık 2 saat içerik güncelleme, uptime izleme. Pro Bakım aylık 3.500 TL: temel bakım + aylık 8 saat geliştirme + performans optimizasyonu + SEO takibi + aylık rapor. Bakım isteğe bağlıdır; siteniz size aittir, istediğiniz zaman başka bir ekibe devredebilirsiniz. Kod dokümantasyonu tam olarak teslim edilir."
  },
  {
    q: "SEO nasıl garantilenir?",
    a: "Teknik SEO temeli her projede standart olarak kurulur: site hızı (Lighthouse 95+), semantik HTML, meta etiketler, schema.org işaretlemeleri, sitemap.xml, robots.txt, canonical etiketler, Open Graph, mobil uyum, hreflang (çoklu dil için). Google Search Console ve Analytics ilk gün kurulur. Ancak organik trafik sıralaması içerik ve backlink stratejisine bağlıdır; sıralama garantisi vermiyoruz çünkü nihai kararı Google veriyor. SEO danışmanlığı ayrı bir hizmet olarak sunulur."
  },
  {
    q: "Ödeme planı nasıl işliyor?",
    a: "Standart ödeme planı 3 taksit: sözleşme imzasında %40, tasarım onayında %30, yayına almadan önce %30. 50.000 TL üzeri projelerde 4 taksit seçeneği sunuyoruz. Fatura resmi olarak kesilir; kurumsal ödemelerde havale, EFT ve kredi kartı kabul edilir. E-ticaret projelerinde kısmi ön ödeme sonrası aylık taksit modeli de mümkün. Erken ödeme yapan müşterilere %5-8 indirim uygulanır."
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
              <span className="text-ink">Web Sitesi Tasarımı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Web Sitesi Tasarımı</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Web Sitesi Tasarımı
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl md:text-2xl font-bold text-ink/80 max-w-3xl">
                  Kurumsal, e-ticaret, landing page - 3 haftada teslim.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Web sitesi tasarımı yaptırırken kritik olan üç şey vardır: hızlı yükleme, mobil uyum ve SEO temeli. PORTZEN bu üç noktayı garantiye alarak siz için kurumsal siteler, e-ticaret altyapıları ve landing page'ler kuruyor. Next.js altyapısı, Lighthouse 95+ skor, headless CMS ile kolay güncelleme ve ölçeklenebilir mimari standart. Ortalama teslim süresi 3 hafta.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-blue text-paper"
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

      {/* 2. NASIL BİR WEB SİTESİ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Nasıl bir web sitesi kuruyoruz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Modern web sitesi tasarımının 4 temel gereksinimi
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Web sitesi yaptırırken sadece güzel görünen bir tasarım yeterli değil. 2026'da profesyonel web tasarım demek; mobil öncelikli düzen, saniyenin altında yükleme, arama motoru dostu yapı ve içerik güncelleme kolaylığı demektir. PORTZEN her projede bu dört temel gereksinimi garanti eder.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((d, i) => {
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

      {/* 3. WEB SİTESİ TÜRLERİ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Web sitesi türleri
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi tip web sitesi ihtiyacınıza uyuyor?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Web sitesi tasarımı derken tek bir kalıp yok. İşinizin niteliğine göre 6 farklı tipte site kuruyoruz. Her tipin farklı bir altyapı gereksinimi, farklı bir fiyat aralığı ve farklı bir teslim süresi var. Sizin işiniz için doğru olan hangisi, brief görüşmesinde birlikte netleştiriyoruz. Kardeş sayfamız <Link href="/web-tasarim" className="font-bold text-ink underline underline-offset-2 hover:no-underline">web tasarım</Link> daha genel bir kapsamda detay veriyor.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteTypes.map((s, i) => {
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
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              E-ticaret hazır platform karşılaştırması için <Link href="/ticimax-alternatifi" className="font-bold text-ink underline">Ticimax alternatifi</Link> ve <Link href="/ideasoft-alternatifi" className="font-bold text-ink underline">İdeasoft alternatifi</Link> sayfalarımızı okuyun. Neden custom e-ticaret altyapısı sizin için avantajlı olabilir, detaylı anlatıyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. NEDEN NEXT.JS + ADELIA */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Neden Next.js + Adelia tasarım sistemi?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Modern altyapı, WordPress alternatifi
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Türkiye'de web siteleri hâlâ %63 oranında WordPress + hazır tema modeliyle kuruluyor. Bu modelin dört büyük problemi var: yavaş yükleme, güvenlik açıkları, sınırlı özelleştirme ve zorunlu eklenti bağımlılığı. PORTZEN Next.js altyapısı ve kendi Adelia tasarım sistemimiz ile bu problemleri kökten çözüyor. Detaylı karşılaştırma için <Link href="/blog/nextjs-vs-wordpress-2026" className="font-bold text-ink underline">Next.js vs WordPress 2026 rehberimizi</Link> okuyabilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {nextjsBenefits.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal">
                    <Icon className="h-8 w-8 text-ink mb-4" />
                    <h3 className="font-display text-xl font-black mb-3 text-ink">{d.title}</h3>
                    <p className="text-body text-ink/75 leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ÇALIŞMA SÜRECİ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Çalışma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Brief'ten yayına - 6 adımda web sitesi teslim
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Web sitesi tasarımı sürecinde şeffaflık kritiktir. PORTZEN'de her adım ne kadar sürer, ne teslim edilir ve sizin rolünüz ne olur, ilk gün belli. Klasik kurumsal proje ortalama 3 haftada, e-ticaret ortalama 6-10 haftada teslim edilir. Landing page'lerde teslim süresi 3 iş günüdür.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* 6. SEKTÖREL ÖRNEKLER */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sektörel örnekler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Sektörünüze özel web sitesi tasarımı
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Bir klinik sitesi ile bir restoran sitesinin ihtiyacı aynı değil. PORTZEN her sektör için ayrı bir oyun kitabı kullanır: sayfa yapısı, form akışı, entegrasyonlar ve içerik stratejisi sektöre özel. Aşağıdaki sektör landing sayfalarımızda hangi özelliklerin öne çıktığını detaylı anlatıyoruz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectorPages.map((s, i) => (
              <Reveal key={i} delay={i * 50}>
                <Link
                  href={`/web-tasarim/${s.slug}`}
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
              Sektörünüz listede değil mi? Endişelenmeyin - 25+ sektörde aktif proje yürütüyoruz. Brief görüşmesinde sektörünüze özel öneri sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. ŞEHİR BAZLI HİZMET */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şehir bazlı hizmet
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                İzmir merkez, İstanbul ve Ankara'da aktif
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                PORTZEN İzmir merkezli bir dijital ajanstır. Bu üç şehirde yerinde brief toplantısı, tasarım sunumu ve yüz yüze teslim yapabiliyoruz. Türkiye'nin diğer 78 şehrine uzaktan hizmet veriyoruz - kalite ve tempo aynı. Şehir bazlı fiyat kırılımı için <Link href="/blog/izmir-web-tasarim-fiyatlari-2026" className="font-bold text-ink underline">İzmir web tasarım fiyatları 2026</Link> blog yazımızı okuyun.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={`/web-tasarim/${c.slug}`}
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

      {/* 8. FİYAT ARALIĞI */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Web sitesi tasarımı fiyatları - net paketler
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Türkiye'de web sitesi tasarım fiyatları çoğu ajansta gizli tutulur; bu da karar sürecini zorlaştırır. PORTZEN üç ana paket aralığını net yayınlıyor. Fiyat; sayfa sayısı, entegrasyonlar, çoklu dil, ödeme sistemi ve özel geliştirme talebine göre keşif görüşmesinde netleşir. Tüm paketlerde KDV dahildir.
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
              <strong>Not:</strong> Fiyatlara alan adı, hosting ve üçüncü taraf servis abonelikleri (Sanity, iyzico komisyon, kargo API ücretleri) dahil değildir. Tahmini yıllık işletme maliyeti 500-1.500 TL aralığındadır; hazır platformların 12-40 katı düşük.
            </p>
          </Reveal>

          {/* İç link bloğu - kardeş ve tamamlayıcı hizmetler */}
          <Reveal delay={400}>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <Link
                href="/web-tasarim"
                className="block border-3 border-ink bg-brand-blue text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Layout className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Web Tasarım Ana Sayfası</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Kardeş sayfamız - web tasarım hizmetlerimizin genel özeti, referanslar ve süreç detayı burada.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/sosyal-medya-ajansi"
                className="block border-3 border-ink bg-brand-pink text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Sparkles className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Sosyal Medya Ajansı</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Yeni sitenize trafik çekmek için Instagram, Facebook, TikTok yönetimi ve içerik üretimi.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/yapay-zeka-video-uretimi"
                className="block border-3 border-ink bg-brand-yellow text-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Sparkles className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">Yapay Zeka Video Üretimi</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sitenizin hero bölümüne yerleştirilecek AI destekli video içerikler, 48 saatte teslim.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link
                href="/crm-otomasyonu"
                className="block border-3 border-ink bg-brand-purple text-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all"
              >
                <Code className="h-7 w-7 mb-3" />
                <div className="font-display text-xl font-black mb-2">CRM Otomasyonu</div>
                <p className="text-sm opacity-90 leading-relaxed mb-3">
                  Sitenizden gelen form ve lead'leri otomatik olarak CRM'e aktaran entegrasyon sistemi.
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold uppercase">
                  İncele <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. KARŞILAŞTIRMA */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Hazır şablon (Wix, Ticimax) vs Custom Next.js
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Hazır platformlar (Wix, Ticimax, İdeasoft, WordPress + Elementor) başlangıçta ucuz görünür ama uzun vadede beklenmedik maliyetler doğurur. Sıfırdan yazılmış Next.js sitesi ilk yatırım olarak daha yüksek olsa da 2. yıldan itibaren toplam maliyet açısından net şekilde avantajlı. İşte 6 kritik başlıkta karşılaştırma:
              </p>
            </div>
          </Reveal>
          <div className="border-3 border-paper shadow-[8px_8px_0_#FFFDF5] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-paper/10">
              <div className="p-4 font-display text-lg font-black border-b-3 border-paper md:border-b-3 md:border-r-3">Kriter</div>
              <div className="p-4 font-display text-lg font-black border-b-3 border-paper md:border-r-3 opacity-70">Hazır Şablon</div>
              <div className="p-4 font-display text-lg font-black border-b-3 border-paper text-brand-yellow">Custom Next.js</div>
            </div>
            {comparison.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={cn("grid grid-cols-1 md:grid-cols-3", i < comparison.length - 1 && "border-b-3 border-paper/30")}>
                  <div className="p-4 font-bold text-sm border-b-2 border-paper/20 md:border-b-0 md:border-r-3 md:border-paper/30">{c.kriter}</div>
                  <div className="p-4 text-sm opacity-75 border-b-2 border-paper/20 md:border-b-0 md:border-r-3 md:border-paper/30">{c.hazir}</div>
                  <div className="p-4 text-sm font-medium">{c.custom}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-sm opacity-70 max-w-2xl">
              <strong>Sonuç:</strong> 3+ yıl kullanacağınız bir siteyi hazır platformda kurmak yıllık 5.000-14.000 TL ekstra maliyet demek. Custom Next.js sitesi 2. yıldan sonra tamamen ödeme dışı; sadece 500-1.200 TL hosting maliyeti kalır. E-ticaret karşılaştırması için <Link href="/blog/wordpress-vs-shopify-eticaret" className="font-bold text-brand-yellow underline">WordPress vs Shopify e-ticaret</Link> yazımızı okuyun.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Web sitesi tasarımı öncesi merak edilenler
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-blue pl-6">
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
                <Search className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-3 text-ink">Daha derin okuma için blog yazılarımız</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/blog/kurumsal-web-sitesi-rehberi" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Kurumsal web sitesi kurma rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/nextjs-vs-wordpress-2026" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Next.js vs WordPress 2026 karşılaştırması <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/wordpress-vs-shopify-eticaret" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        WordPress vs Shopify: e-ticaret karar rehberi <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/izmir-web-tasarim-fiyatlari-2026" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        İzmir web tasarım fiyatları 2026 <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/lighthouse-skoru-90-optimizasyon" className="font-bold text-ink hover:underline inline-flex items-center gap-1">
                        Lighthouse skoru 90+ nasıl elde edilir <ArrowUpRight className="h-3 w-3" />
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
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Web sitenizi 3 haftada yayına alalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde ihtiyacınızı, hedeflerinizi ve rakiplerinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu, ne kadar sürede teslim edeceğimizi ve toplam maliyeti net konuşuyoruz. WhatsApp'tan yazın veya iletişim formunu doldurun, aynı gün dönüyoruz. Teklif ücretsiz, sözleşme öncesi hiçbir taahhüt yok.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
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
