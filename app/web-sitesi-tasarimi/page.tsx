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
import { PricingSection, WebExtrasSection } from "@/components/pricing/PricingSection";
import { PRICING, familyOffersSchema, familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Web Sitesi Tasarımı | Kurumsal + E-Ticaret + Landing Sayfası - PORTZEN",
  description:
    "Web sitesi tasarımı hizmeti: hızlı, SEO uyumlu, mobil dostu kurumsal siteler, e-ticaret ve landing page'ler. Next.js altyapısı; teslim süresi kapsama göre teklifte yazılı olarak belirtilir.",
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
      "Hızlı, SEO uyumlu ve mobil dostu web sitesi tasarımı. Kurumsal siteler, e-ticaret ve landing page'ler Next.js altyapısıyla; teslim süresi teklifte yazılı olarak belirtilir."
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Sitesi Tasarımı | PORTZEN",
    description:
      "Kurumsal, e-ticaret ve landing page tasarımı. Next.js, Lighthouse 90+ hedefi, SEO uyumlu; teslim süresi teklifte yazılı."
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
    "PORTZEN, KOBİ ve kurumsal markalar için kurumsal web sitesi, e-ticaret sitesi ve landing page tasarımı sunar. Next.js altyapısı, Lighthouse 90+ hedefi, mobil öncelikli tasarım ve SEO uyumu; teslim süresi kapsama göre teklifte yazılı olarak belirtilir.",
  offers: [...familyOffersSchema(PRICING["kurumsal-web-sitesi"]), ...familyOffersSchema(PRICING["e-ticaret"])]
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
        text: "Landing page tek sayfadır ve 6 bölüme kadar içerir. Kurumsal web sitesi Başlangıç paketinde 3–5, Büyüme paketinde 10, Kurumsal pakette 20 sayfadır (Kurumsal 2 dil). E-ticaret paketlerinde dosyadan 50, 250 veya 1.000 ürün aktarımı dahildir. CMS ve blog Büyüme paketinde standarttır."
      }
    },
    {
      "@type": "Question",
      name: "Alan adı ve hosting siz mi alıyorsunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Alan adı ve hosting satın alımını sizin adınıza yapabiliriz veya sizin hesabınızda kalır. Önerimiz Vercel + Cloudflare kombinasyonu; düşük yıllık maliyetli, Next.js için ideal. Kurumsal projelerde AWS + Cloudflare mimarisini kuruyoruz. Alan adı sahibi her zaman siz olursunuz."
      }
    },
    {
      "@type": "Question",
      name: "İçeriği kim yazıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İki seçenek var. Birinci seçenek sizin metinlerinizi kullanmamız. İkinci seçenek metin yazımını PORTZEN'e vermeniz; sayfa başına ücretlendirmeyle SEO uyumlu içerik üretiyoruz. Görsel içerik için stok görsel kütüphanesi standart, fotoğraf çekimi ise ekstra hizmet."
      }
    },
    {
      "@type": "Question",
      name: "Kaç revizyon hakkım var?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Revizyon tur sayısı ve yayın sonrası düzeltme süresi teklifte yazılı olarak belirtilir. Büyük revizyon tanımı: layout değişikliği veya bölüm ekleme/çıkarma. Yayından sonraki değişiklikler aylık Web bakım hizmeti kapsamındadır."
      }
    },
    {
      "@type": "Question",
      name: "Yayın sonrası bakım hizmeti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Evet. Web bakım aylık üç seviyedir (KDV hariç): ${familyPriceSummary("web-bakim")}. Saatler o paketin aylık toplam hakkıdır, birbirine eklenmez ve devretmez; yeni modül ve kapsamlı tasarım ayrıca tekliflendirilir. Bakım isteğe bağlıdır; siteniz size aittir, istediğiniz zaman başka bir ekibe devredebilirsiniz.`
      }
    },
    {
      "@type": "Question",
      name: "SEO için neler yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her projede SEO temeli (site hızı, meta etiketler, sitemap, robots.txt, canonical, mobil uyum) kurulur; Büyüme ve Kurumsal paketlerde schema.org dahil teknik SEO ve ölçümleme kurulumu yer alır. Lighthouse skorunda 90+ hedefliyoruz. Ancak organik trafik sıralaması içerik ve backlink stratejisine bağlıdır; sıralama garantisi vermiyoruz çünkü Google'ın kararıdır. SEO danışmanlığı ayrı bir hizmet olarak sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Ödeme planı nasıl işliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ödeme planı ve taksit seçenekleri teklifte yazılı olarak belirtilir. Fatura resmi olarak kesilir, kurumsal ödemelerde havale ve kredi kartı kabul edilir."
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
  { metric: "Next.js", label: "Altyapı" },
  { metric: "90+", label: "Lighthouse performans hedefi" },
  { metric: "100%", label: "Mobil öncelikli tasarım" },
  { metric: "6 tip", label: "Kurumsal, e-ticaret, landing, blog, SaaS, portfolyo" }
];

const advantages = [
  {
    icon: Smartphone,
    title: "Mobil dostu tasarım",
    desc: "Türkiye'de web trafiğinin büyük kısmı mobil cihazlardan geliyor. Bu yüzden tüm siteleri önce mobilde kuruyor, sonra tablet ve masaüstüne genişletiyoruz. Dokunmatik hedef boyutları, okunabilir tipografi ve tek elle kullanım standart."
  },
  {
    icon: Zap,
    title: "Hızlı yüklenen sayfalar",
    desc: "Lighthouse skorunda 90+ hedefliyoruz. Next.js sunucu tarafı render, görsel optimizasyonu (WebP + AVIF), lazy loading, CDN önbelleği ve kritik CSS ile ilk boyama süresini kısa tutmayı hedefliyoruz."
  },
  {
    icon: Search,
    title: "SEO temeli hazır",
    desc: "Her site SEO temeliyle kurulur: sitemap.xml, robots.txt, canonical etiketler, meta açıklamalar, Open Graph, Twitter Card ve semantik HTML. Büyüme ve Kurumsal paketlerde schema.org dahil teknik SEO ve Google Search Console ile ölçümleme kurulumu yer alır."
  },
  {
    icon: Sparkles,
    title: "AI destekli içerik üretimi",
    desc: "Sayfa metinleri, ürün açıklamaları ve blog yazıları için AI destekli içerik üretim akışımız var. Marka tonu korunur, dilbilgisi editörden geçer, SEO anahtar kelimeleri yerleşir. Aynı bütçeyle daha fazla içerik çıkar."
  }
];

const siteTypes = [
  {
    icon: Globe,
    title: "Kurumsal site",
    desc: "Pakete göre sayfa sayısı değişen şirket web siteleri. Hakkımızda, hizmetler, referanslar, ekip ve iletişim; Büyüme paketinde CMS ve blog, Kurumsal pakette çoklu dil. KVKK aydınlatma metni ve açık rıza onayı içeren iletişim formu standart.",
    color: "bg-light",
    link: "/web-tasarim"
  },
  {
    icon: Layout,
    title: "E-ticaret sitesi",
    desc: "Shopify, WooCommerce veya özel (custom) e-ticaret altyapısı. Ürün yönetimi, sepet, iyzico/PayTR entegrasyonu, kargo API'leri, stok takibi. Ticimax ve İdeasoft alternatifi olarak da kuruyoruz.",
    color: "bg-light",
    link: "/ticimax-alternatifi"
  },
  {
    icon: Zap,
    title: "Landing page",
    desc: "Satış odaklı tek sayfa. Reklam kampanyalarınızın (Meta Ads, Google Ads) trafiğini yönlendirdiğiniz dönüşüm odaklı sayfalar. A/B test hazır, form entegrasyonu tam.",
    color: "bg-light"
  },
  {
    icon: Search,
    title: "Blog + içerik sitesi",
    desc: "SEO odaklı içerik siteleri. Kategori yönetimi, yazar profilleri, ilgili yazılar, RSS, yorum modülü ve haber bülteni entegrasyonu. Medium veya WordPress alternatifi olarak Next.js + Sanity yapısı.",
    color: "bg-light"
  },
  {
    icon: Code,
    title: "SaaS + panel",
    desc: "Kullanıcı girişli, ölçeklenebilir web uygulamaları. Kullanıcı yönetimi, ödeme entegrasyonu (Stripe, iyzico), rol tabanlı erişim, admin paneli ve API mimarisi. Özel geliştirme gerektirir.",
    color: "bg-light"
  },
  {
    icon: Sparkles,
    title: "Kişisel marka + portfolyo",
    desc: "Danışmanlar, sanatçılar, mimarlar ve freelancer'lar için portfolyo siteleri. Proje vitrini, hikâye anlatımı, CV, iletişim ve blog. Görsel öne çıkarma, animasyon ve etkileşim ön planda.",
    color: "bg-light"
  }
];

const nextjsBenefits = [
  {
    icon: Zap,
    title: "Sunucu tarafı render ile hızlı yükleme",
    desc: "Next.js sayfaları sunucuda üretip tarayıcıya hazır HTML gönderir. Kullanıcı ilk içeriği hızlı görür, arama motorları içeriği tam okur. Hazır temalı ve eklenti yüklü kurulumlara göre yükleme süresini kısaltmak hedeflenir."
  },
  {
    icon: Search,
    title: "Google için ideal SEO altyapısı",
    desc: "Sunucu render + semantik HTML + otomatik sitemap + otomatik canonical + schema.org kolay entegrasyonu. Core Web Vitals metrikleri Google'ın sıralama sinyallerinden biridir; sunucu render ve görsel optimizasyonu bu metrikleri iyileştirmeye yardımcı olur."
  },
  {
    icon: Layout,
    title: "Kolay güncelleme, headless CMS",
    desc: "İçerik yönetimi için Sanity, Contentful veya Strapi gibi headless CMS'ler kullanıyoruz. Editör dostu panel, drag-drop görsel yönetimi, çoklu dil desteği. Kod bilmeden metin, görsel ve blog yazısı ekleyebilirsiniz. CMS, Büyüme ve Kurumsal paketlerde dahildir."
  },
  {
    icon: ShieldCheck,
    title: "Ölçeklenebilir altyapı",
    desc: "Vercel + Cloudflare CDN mimarisi trafik arttığında da performansı korumak için içerik dağıtımını ölçekler. WordPress'te trafik artışında sunucu yükseltmek gerekir; Next.js'te trafik otomatik ölçeklenir; hosting ücreti trafiğe göre değişir ve hizmet bedeline dahil değildir."
  }
];

const sectorPages = [
  {
    name: "Klinik siteleri",
    slug: "klinik",
    desc: "Hekim tanıtımı, hizmet listesi, aydınlatma metni ve açık rıza onaylı randevu formu, hasta yorumları ve tıbbi içerik yönetimi.",
    color: "bg-light"
  },
  {
    name: "Restoran + kafe",
    slug: "restoran",
    desc: "Menü vitrini, rezervasyon formu, konum + harita, yemek fotoğrafı optimizasyonu ve mobil öncelikli hız.",
    color: "bg-light"
  },
  {
    name: "Emlak ofisi",
    slug: "emlak",
    desc: "İlan yönetim paneli, filtreli arama, harita entegrasyonu, sanal tur ve danışman profil sayfaları.",
    color: "bg-light"
  },
  {
    name: "Butik + moda",
    slug: "butik",
    desc: "E-ticaret + Instagram entegrasyonu, koleksiyon vitrini, hızlı ödeme akışı ve influencer ürün etiketleme.",
    color: "bg-light"
  },
  {
    name: "Avukat + hukuk büro",
    slug: "avukat",
    desc: "Uzmanlık alanları, avukat profilleri, hukuki bilgilendirme blog modülü ve gizli danışma formu.",
    color: "bg-light"
  },
  {
    name: "Eğitim kurumu",
    slug: "egitim",
    desc: "Kurs katalog yönetimi, kayıt formu, öğrenci başarı hikâyeleri, eğitmen profilleri ve LMS entegrasyonu.",
    color: "bg-light"
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
    desc: "Levent, Maslak, Kadıköy ve Ataşehir'deki firmalara hizmet verebiliyoruz. Gerektiğinde yüz yüze toplantı planlanır; teslim ve eğitim uzaktan yapılır.",
    badge: "Aktif"
  },
  {
    name: "Ankara",
    slug: "ankara",
    desc: "Çankaya, Söğütözü ve Çukurambar bölgelerindeki KOBİ ve kurumsal firmalara uzaktan tasarım ve planlı toplantılarla hizmet veriyoruz.",
    badge: "Aktif"
  }
];


const comparison = [
  {
    kriter: "Aylık maliyet",
    hazir: "Sürekli aylık abonelik (sonsuza kadar)",
    custom: "Sadece düşük yıllık hosting maliyeti"
  },
  {
    kriter: "SEO kalitesi",
    hazir: "Sınırlı, şablonların SEO altyapısı zayıf",
    custom: "Lighthouse 90+ hedefi, Core Web Vitals uyumlu"
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
    custom: "Pakete göre standart entegrasyon, ek API'ler teklifle"
  }
];

const faqs = [
  {
    q: "Web sitesi tasarımı fiyatlarında kaç sayfa dahil?",
    a: "Landing page tek sayfadır ve 6 bölüme kadar içerir. Kurumsal web sitesi Başlangıç paketinde 3–5, Büyüme paketinde 10, Kurumsal pakette 20 sayfadır (Kurumsal 2 dil). E-ticaret paketlerinde dosyadan 50, 250 veya 1.000 ürün aktarımı dahildir. CMS ve blog Büyüme paketinde standarttır."
  },
  {
    q: "Alan adı ve hosting siz mi alıyorsunuz?",
    a: "Alan adı ve hosting satın alımını sizin adınıza yapabiliriz veya sizin hesabınızda kalır - tercih size ait. Önerimiz Vercel + Cloudflare kombinasyonu; düşük yıllık maliyetli, Next.js için ideal. Kurumsal projelerde AWS + Cloudflare mimarisini kuruyoruz. Alan adı sahibi her zaman siz olursunuz, satın alma faturası doğrudan size düzenlenir."
  },
  {
    q: "İçeriği kim yazıyor?",
    a: "İki seçenek var. Birinci seçenek: sizin metinlerinizi kullanmamız. Bu durumda sadece düzenleme ve SEO uyum kontrolü yapıyoruz. İkinci seçenek: metin yazımını PORTZEN'e vermeniz; sayfa başına ücretlendirmeyle SEO uyumlu içerik üretiyoruz. Görsel içerik için stok görsel kütüphanesi (Unsplash, Pexels) standart olarak sunulur; profesyonel fotoğraf çekimi ise ekstra hizmet (İzmir, İstanbul, Ankara'da mümkün)."
  },
  {
    q: "Kaç revizyon hakkım var?",
    a: "Revizyon tur sayısı ve yayın sonrası düzeltme süresi teklifte yazılı olarak belirtilir. Büyük revizyon tanımı: layout değişikliği, bölüm ekleme/çıkarma veya renk paleti değiştirme. Yayından sonraki değişiklikler aylık Web bakım hizmeti kapsamındadır; yeni modül ve kapsamlı tasarım ayrıca tekliflendirilir."
  },
  {
    q: "Yayın sonrası bakım hizmeti var mı?",
    a: `Evet. Web bakım aylık üç seviyedir (KDV hariç): ${familyPriceSummary("web-bakim")}. Saatler o paketin aylık toplam hakkıdır, birbirine eklenmez ve devretmez; yeni modül ve kapsamlı tasarım ayrıca tekliflendirilir. Bakım isteğe bağlıdır; siteniz size aittir, istediğiniz zaman başka bir ekibe devredebilirsiniz.`
  },
  {
    q: "SEO için neler yapılıyor?",
    a: "Her projede SEO temeli kurulur: site hızı (Lighthouse 90+ hedefi), semantik HTML, meta etiketler, sitemap.xml, robots.txt, canonical etiketler, Open Graph ve mobil uyum. Büyüme ve Kurumsal paketlerde schema.org işaretlemeleri dahil teknik SEO, hreflang (çoklu dil için) ve Google Search Console ile Analytics ölçümleme kurulumu yer alır. Ancak organik trafik sıralaması içerik ve backlink stratejisine bağlıdır; sıralama garantisi vermiyoruz çünkü nihai kararı Google veriyor. SEO danışmanlığı ayrı bir hizmet olarak sunulur."
  },
  {
    q: "Ödeme planı nasıl işliyor?",
    a: "Ödeme planı ve taksit seçenekleri teklifte yazılı olarak belirtilir. Fatura resmi olarak kesilir; kurumsal ödemelerde havale, EFT ve kredi kartı kabul edilir."
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
              <span className="text-ink">Web Sitesi Tasarımı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Web Sitesi Tasarımı</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Web Sitesi Tasarımı
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-xl md:text-2xl font-bold text-ink/80 max-w-3xl">
                  Kurumsal, e-ticaret, landing page - kapsam ve teslim süresi teklifte yazılı.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Web sitesi tasarımı yaptırırken kritik olan üç şey vardır: hızlı yükleme, mobil uyum ve SEO temeli. PORTZEN bu üç noktayı her projede standart tutarak siz için kurumsal siteler, e-ticaret altyapıları ve landing page&apos;ler kuruyor. Next.js altyapısı, Lighthouse 90+ hedefi ve ölçeklenebilir mimari standart; headless CMS ile kolay güncelleme Büyüme ve Kurumsal paketlerde. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
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

      {/* 2. NASIL BİR WEB SİTESİ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Nasıl bir web sitesi kuruyoruz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Modern web sitesi tasarımının 4 temel gereksinimi
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Web sitesi yaptırırken sadece güzel görünen bir tasarım yeterli değil. 2026&apos;da profesyonel web tasarım demek; mobil öncelikli düzen, saniyenin altında yükleme, arama motoru dostu yapı ve içerik güncelleme kolaylığı demektir. PORTZEN her projede bu dört temel gereksinimi standart olarak ele alır.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {advantages.map((d, i) => {
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

      {/* 3. WEB SİTESİ TÜRLERİ */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
          <Reveal delay={400}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              E-ticaret hazır platform karşılaştırması için <Link href="/ticimax-alternatifi" className="font-bold text-ink underline">Ticimax alternatifi</Link> ve <Link href="/ideasoft-alternatifi" className="font-bold text-ink underline">İdeasoft alternatifi</Link> sayfalarımızı okuyun. Neden custom e-ticaret altyapısı sizin için avantajlı olabilir, detaylı anlatıyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. NEDEN NEXT.JS + ADELIA */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Neden Next.js + Adelia tasarım sistemi?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Modern altyapı, WordPress alternatifi
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                Türkiye&apos;de web sitelerinin önemli bir kısmı hâlâ WordPress + hazır tema modeliyle kuruluyor. Bu modelin dört büyük problemi var: yavaş yükleme, güvenlik açıkları, sınırlı özelleştirme ve zorunlu eklenti bağımlılığı. PORTZEN Next.js altyapısı ve kendi Adelia tasarım sistemimiz ile bu problemleri azaltmayı hedefler. Detaylı karşılaştırma için <Link href="/blog/nextjs-vs-wordpress-2026" className="font-bold text-ink underline">Next.js vs WordPress 2026 rehberimizi</Link> okuyabilirsiniz.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {nextjsBenefits.map((d, i) => {
              const Icon = d.icon;
              return (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal rounded-2xl">
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

      {/* 6. SEKTÖREL ÖRNEKLER */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
              Sektörünüz listede değil mi? Endişelenmeyin, brief görüşmesinde sektörünüze özel sayfa yapısı ve entegrasyon önerisi sunuyoruz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. ŞEHİR BAZLI HİZMET */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Şehir bazlı hizmet
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                İzmir merkez, İstanbul ve Ankara&apos;da aktif
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose leading-relaxed">
                PORTZEN İzmir merkezli bir dijital ajanstır. Bu üç şehirde yerinde brief toplantısı, tasarım sunumu ve yüz yüze teslim yapabiliyoruz. Türkiye&apos;nin diğer 78 şehrine uzaktan hizmet veriyoruz - kalite ve tempo aynı. Şehir bazlı fiyat kırılımı için <Link href="/blog/izmir-web-tasarim-fiyatlari-2026" className="font-bold text-ink underline">İzmir web tasarım fiyatları 2026</Link> blog yazımızı okuyun.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {cities.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link
                  href={`/web-tasarim/${c.slug}`}
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

      <PricingSection family="kurumsal-web-sitesi" heading="Web sitesi tasarımı fiyatları" />
      <PricingSection family="e-ticaret" id="e-ticaret" badge="E-ticaret" heading="E-ticaret sitesi fiyatları" />
      <WebExtrasSection />


      {/* 9. KARŞILAŞTIRMA */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Hazır şablon (Wix, Ticimax) vs Custom Next.js
              </h2>
              <p className="mt-4 text-body opacity-85 max-w-prose leading-relaxed">
                Hazır platformlar (Wix, Ticimax, İdeasoft, WordPress + Elementor) başlangıçta ucuz görünür ama uzun vadede beklenmedik maliyetler doğurur. Sıfırdan yazılmış Next.js sitesi ilk yatırım olarak daha yüksek olsa da platform aboneliği olmadığı için uzun vadede toplam maliyet açısından avantajlı olabilir. İşte 6 kritik başlıkta karşılaştırma:
              </p>
            </div>
          </Reveal>
          <div className="border-3 border-ink/10 overflow-hidden rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-light">
              <div className="p-4 font-display text-lg font-black border-b-3 border-ink/10 md:border-b-3 md:border-r-3">Kriter</div>
              <div className="p-4 font-display text-lg font-black border-b-3 border-ink/10 md:border-r-3 opacity-70">Hazır Şablon</div>
              <div className="p-4 font-display text-lg font-black border-b-3 border-ink/10 text-ink">Custom Next.js</div>
            </div>
            {comparison.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className={cn("grid grid-cols-1 md:grid-cols-3", i < comparison.length - 1 && "border-b-3 border-ink/10")}>
                  <div className="p-4 font-bold text-sm border-b-2 border-ink/10 md:border-b-0 md:border-r-3 md:border-ink/10">{c.kriter}</div>
                  <div className="p-4 text-sm opacity-75 border-b-2 border-ink/10 md:border-b-0 md:border-r-3 md:border-ink/10">{c.hazir}</div>
                  <div className="p-4 text-sm font-medium">{c.custom}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <p className="mt-8 text-sm opacity-70 max-w-2xl">
              <strong>Sonuç:</strong> 3+ yıl kullanacağınız bir siteyi hazır platformda kurmak her yıl ekstra abonelik maliyeti demek. Custom Next.js sitesinde platform aboneliği yoktur; hosting ve isteğe bağlı aylık bakım dışında sabit gider kalmaz. E-ticaret karşılaştırması için <Link href="/blog/wordpress-vs-shopify-eticaret" className="font-bold text-ink underline">WordPress vs Shopify e-ticaret</Link> yazımızı okuyun.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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
      <section className="py-section bg-white">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Web sitenizi birlikte yayına alalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde ihtiyacınızı, hedeflerinizi ve rakiplerinizi birlikte değerlendiriyoruz. Hangi paketin uygun olduğunu, ne kadar sürede teslim edeceğimizi ve toplam maliyeti net konuşuyoruz. WhatsApp&apos;tan yazın veya iletişim formunu doldurun, en kısa sürede dönüş yapıyoruz. Teklif ücretsiz; sözleşme süresi ve koşullar teklifte yazılı olarak belirtilir.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Ücretsiz Teklif Al <ArrowUpRight className="h-4 w-4" />
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
