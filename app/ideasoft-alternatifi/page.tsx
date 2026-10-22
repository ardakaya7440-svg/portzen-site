import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Check,
  X,
  MessageCircle,
  Phone,
  Sparkles,
  ShieldCheck,
  Users,
  BookOpen,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  ShoppingCart,
  TrendingUp,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IdeaSoft Alternatifi | KOBİ İçin Modern E-Ticaret Çözümü - PORTZEN",
  description:
    "IdeaSoft modüler hazır paket çözümü yerine PORTZEN, KOBİ markaları için custom Next.js + AI ile geliştirilen modern e-ticaret altyapısı sunar.",
  keywords: [
    "ideasoft alternatifi",
    "kobi eticaret yazılımı",
    "modern eticaret altyapısı",
    "ideasoft mı next.js mi",
    "özel eticaret kobi",
    "ideasoft fiyatları alternatif",
    "ai destekli eticaret",
    "kobi için modern eticaret"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ideasoft-alternatifi",
    siteName: "PORTZEN",
    title: "IdeaSoft Alternatifi | KOBİ İçin Modern E-Ticaret Çözümü - PORTZEN",
    description:
      "IdeaSoft modüler paket yerine KOBİ markaları için custom Next.js + AI ile e-ticaret altyapısı."
  },
  twitter: {
    card: "summary_large_image",
    title: "IdeaSoft Alternatifi | PORTZEN",
    description:
      "KOBİ için custom modern e-ticaret. AI ile öneri, içerik ve chatbot seçenekleri."
  },
  alternates: { canonical: "https://portzenai.com/ideasoft-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IdeaSoft Alternatifi, PORTZEN KOBİ E-Ticaret Çözümü",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "E-Commerce Platform",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "IdeaSoft'un modüler hazır paket modelinin sınırlı kaldığı yerde PORTZEN, KOBİ markalarına özel Next.js tabanlı, AI destekli, ölçeklenebilir e-ticaret platformu geliştirir."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "IdeaSoft KOBİ için yetersiz mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, IdeaSoft hızlı kurulum gereken, küçük katalog ve standart akış kullanan KOBİ'ler için pratiktir. Fakat marka kimliği güçlü olmak isteyen, hız ve dönüşüm odaklı KOBİ'ler için custom çözüm daha uygundur."
      }
    },
    {
      "@type": "Question",
      name: "IdeaSoft fiyatları PORTZEN ile karşılaştırınca nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IdeaSoft aylık lisans + modül başı ek ücret modelidir. PORTZEN e-ticaret sitesini proje başı üç paketle (Başlangıç, Büyüme, Kurumsal) sunar; özel ERP geliştirmesi ve altyapı lisansları ayrıca tekliflendirilir."
      }
    },
    {
      "@type": "Question",
      name: "IdeaSoft'tan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi katalog büyüklüğüne ve kapsama göre teklifte yazılı olarak belirtilir. Ürünler dosyadan aktarılır; aktarılan ürün adedi pakete göre değişir, müşteri ve sipariş geçmişi aktarımı teklifte yazılı olarak belirtilir. URL yapısı korunur veya 301 redirect haritası kurulur; amaç SEO kaybını en aza indirmektir."
      }
    },
    {
      "@type": "Question",
      name: "AI hangi noktalarda devreye giriyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Otomatik ürün açıklaması üretimi, ürün görsel iyileştirme, kişiselleştirilmiş öneri motoru, sepet terk e-mail kişiselleştirme, AI WhatsApp + site chatbot, kategori sayfa SEO içerik üretimi. IdeaSoft'ta hiçbiri yerleşik değildir; üçüncü parti SaaS abonelikleri ayrı sözleşme gerektirir. PORTZEN'de bu özellikler kapsama göre projeye eklenir ve teklifte yazılı olarak belirtilir; AI WhatsApp ve site chatbotu ayrı bir hizmet olan AI müşteri asistanı kapsamındadır."
      }
    },
    {
      "@type": "Question",
      name: "Mobil uyumluluk ve PWA destekleniyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Next.js tabanlı geliştirme standart olarak mobil uyumlu, Progressive Web App (PWA) ile uygulama deneyimi sunar. Müşteri siteyi ana ekrana ekleyip uygulama gibi kullanabilir. IdeaSoft'ta PWA ek modül olarak ücretlidir."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API entegrasyonu. Sipariş onaylanınca otomatik cari kart oluşur, e-Arşiv fatura kesilir, muhasebe sistemine sync edilir. Hazır ERP/muhasebe bağlayıcısı Kurumsal pakete dahildir; özel ERP geliştirmesi ayrıca tekliflendirilir."
      }
    },
    {
      "@type": "Question",
      name: "Hosting maliyeti ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vercel veya Netlify üzerinde trafiğe göre değişen sabit bir hosting kalemi olur. Kurumsal trafik için AWS, GCP veya self-hosted altyapı seçilebilir. Fiyat brief görüşmesinde net paylaşılıyor."
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
      name: "IdeaSoft Alternatifi",
      item: "https://portzenai.com/ideasoft-alternatifi"
    }
  ]
};

const stats = [
  { metric: "AI opsiyonu", label: "Öneri, içerik, chatbot — kapsama göre" },
  { metric: "PWA", label: "Standart mobil uygulama" },
  { metric: "Kod size ait", label: "Custom Next.js kaynak kod sahiplik" },
  { metric: "Multi-PSP", label: "Ödeme sağlayıcı yönlendirme" }
];

const painPoints = [
  {
    title: "Modüler ücretlendirme",
    desc: "Çoklu mağaza, B2B, hediye paketi, sadakat programı, çoklu dil gibi her özellik ayrı modül olarak fiyatlandırılır. Toplam maliyet katlanır."
  },
  {
    title: "Hazır tema kalıbı",
    desc: "Tema marketinden seçilen tasarımlar diğer IdeaSoft sitelerinde de kullanılır. Marka kimliği zayıflar, görsel ayrışma güçtür."
  },
  {
    title: "Aylık lisans yükü",
    desc: "Paket bazında sabit lisans gideri devam eder. Kod size ait değildir; çıkış esnekliği kısıtlıdır ve platform bağımlılığı büyür."
  },
  {
    title: "AI yerleşik değil",
    desc: "Ürün önerisi, otomatik açıklama, AI chatbot için üçüncü parti SaaS abonelikleri gerekir. Insider, Klevu, Algolia gibi ek servisler ayrı sözleşme + entegrasyon çıkarır."
  },
  {
    title: "SEO kontrolü sınırlı",
    desc: "Meta veri, schema markup, URL yapısı, breadcrumb gibi SEO temel ayarları kısıtlıdır. Custom schema veya özel URL stratejisi için IdeaSoft destek beklenir."
  },
  {
    title: "PWA ve mobil app ekstra",
    desc: "Progressive Web App, mobil uygulama bağlantısı, push notification için ek modül abonelikleri gerekir. KOBİ'ye toplam yük artar."
  }
];

const comparisonRows = [
  { feature: "Tasarım esnekliği", idea: "Tema kalıbı", portzen: "Markaya özel custom" },
  { feature: "Fiyat modeli", idea: "Aylık lisans bazlı", portzen: "Proje başı paket fiyatı" },
  { feature: "Modül başı ücret", idea: "Her modül ek", portzen: "Paket kapsamı yazılı; lisanslar hariç" },
  { feature: "AI ürün önerisi", idea: "Üçüncü parti SaaS", portzen: "Kapsama göre, teklifte yazılı" },
  { feature: "AI chatbot", idea: "Üçüncü parti", portzen: "AI müşteri asistanı ayrı hizmet" },
  { feature: "PWA destek", idea: "Ek modül", portzen: "Standart dahil" },
  { feature: "Logo/Mikro/Netsis", idea: "Modül ücretli", portzen: "Kurumsal pakette hazır bağlayıcı" },
  { feature: "SEO kontrolü", idea: "Sınırlı", portzen: "Tam, schema dahil" },
  { feature: "PageSpeed skoru", idea: "60 ile 75 arası tipik", portzen: "90+ hedefi" },
  { feature: "Multi-PSP ödeme routing", idea: "Yok", portzen: "Ödeme bağlantısı dahil; çoklu PSP teklifte" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "KOBİ analizi",
    description: "İşletmenizin ürün portföyü, mevcut IdeaSoft kurulumu, hedef rakipleri ve büyüme planını birlikte inceliyoruz. Hangi modüller önce kurulacak, netleştiriyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Figma'da markaya özel tasarım, Next.js + Tailwind + headless backend ile geliştirme. Prototip ve teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  {
    icon: BookOpen,
    title: "Veri taşıma",
    description: "Ürünler dosyadan aktarılır (adet pakete göre); müşteri ve sipariş geçmişi aktarımı teklifte belirtilir. URL yapısı korunur veya 301 redirect haritası kurulur, SEO kaybı en aza indirilir."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim ve canlı geçiş",
    description: "Yönetim paneli eğitimi, staging testi, canlı geçiş. Yayından sonraki bakım ayrı bir aylık hizmettir (Web bakım)."
  }
];

const features = [
  { icon: Zap, title: "Hız öncelikli mimari", desc: "Next.js sunucu render + Vercel edge ağı. Google PageSpeed'te 90+ hedefi. IdeaSoft tipik 60 ile 75 arası kalır." },
  { icon: Sparkles, title: "AI yerleşik özellikler", desc: "Öneri motoru, ürün açıklaması, kişiselleştirilmiş anasayfa, AI chatbot, sepet terk kişiselleştirme. Kapsama göre projeye eklenir ve teklifte yazılı olarak belirtilir." },
  { icon: ShoppingCart, title: "PWA mobil deneyim", desc: "Progressive Web App ile site uygulama gibi çalışır, ana ekrana eklenebilir, offline temel kullanım, push notification gönderilebilir." },
  { icon: Building2, title: "Logo/Mikro/Netsis entegre", desc: "Kurumsal pakette hazır ERP/muhasebe bağlayıcısı: sipariş onayında otomatik cari kart, e-Arşiv fatura, muhasebe sync." },
  { icon: TrendingUp, title: "SEO tam kontrol", desc: "Schema markup, URL kontrolü, breadcrumb, meta, sitemap, robots, canonical, hreflang. Custom SEO stratejisi uygulanabilir." },
  { icon: ShieldCheck, title: "KVKK ve ödeme güvenliği", desc: "Açık rıza akışı ve veri silme talebi KVKK gerekliliklerini dikkate alarak kurgulanır; kart bilgisi PSP tarafında tokenize edilir, sitede tutulmaz." }
];

const faqs = [
  {
    q: "IdeaSoft KOBİ için yetersiz mi?",
    a: "Hayır, IdeaSoft hızlı kurulum gereken, küçük katalog (500 ürün altı) ve standart akış kullanan KOBİ'ler için pratik bir başlangıçtır. Tema marketinden tasarım seçilir, modüller eklenir, 2 ile 3 hafta içinde site canlıda olur. Fakat marka kimliği güçlü olmak isteyen, hız ve dönüşüm odaklı, büyüme planı olan KOBİ'ler için modüler hazır paket model 1 ile 2 yıl içinde sınırlı kalır. PORTZEN bu noktada custom yaklaşım sunar."
  },
  {
    q: "IdeaSoft fiyatları PORTZEN ile karşılaştırınca nasıl?",
    a: "IdeaSoft aylık lisans + modül başı ek ücret modeliyle çalışır. PORTZEN ise e-ticaret sitesini proje başı üç paketle (Başlangıç, Büyüme, Kurumsal) sunar. Ürün aktarım adedi, pazaryeri ve ERP bağlayıcısı sayısı pakete göre değişir; özel ERP geliştirmesi, AI özellikleri ve altyapı lisansları ayrıca tekliflendirilir."
  },
  {
    q: "IdeaSoft'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Teslim süresi katalog büyüklüğüne ve kapsama göre teklifte yazılı olarak belirtilir. Ürünler dosyadan aktarılır; aktarılan ürün adedi pakete göre değişir, müşteri ve sipariş geçmişi aktarımı teklifte yazılı olarak belirtilir. URL yapısı korunur veya 301 redirect haritası kurulur; amaç SEO kaybını en aza indirmektir. Google Search Console aktarımı, sitemap güncellemesi, robots.txt kontrolü dahildir."
  },
  {
    q: "AI hangi noktalarda devreye giriyor?",
    a: "Otomatik ürün açıklaması üretimi (yeni ürün eklendiğinde SEO uyumlu açıklama AI ile gelir), ürün görsel iyileştirme (arka plan temizleme, boyut standartlaştırma), kişiselleştirilmiş öneri motoru (her kullanıcıya farklı anasayfa), sepet terk e-mail kişiselleştirme, AI WhatsApp + site chatbot (sipariş takibi, kargo sorgu, basit ürün soruları), kategori sayfa SEO içerik üretimi. IdeaSoft'ta hiçbiri yerleşik değildir; Insider, Klevu, Algolia gibi üçüncü parti SaaS abonelikleri ayrı sözleşme + entegrasyon gerektirir. PORTZEN'de bu özellikler kapsama göre projeye eklenir ve teklifte yazılı olarak belirtilir; AI WhatsApp ve site chatbotu ayrı bir hizmet olan AI müşteri asistanı kapsamındadır."
  },
  {
    q: "Mobil uyumluluk ve PWA destekleniyor mu?",
    a: "Evet. Next.js tabanlı geliştirme standart olarak mobil uyumludur, Progressive Web App (PWA) standardında uygulama deneyimi sunar. Müşteri siteyi telefon ana ekranına ekler, uygulama gibi açar, offline temel kullanım yapar, push notification alır. IdeaSoft'ta PWA ek modül olarak sunulur, push notification ayrı SaaS aboneliği ister."
  },
  {
    q: "Logo, Mikro, Netsis entegrasyonu var mı?",
    a: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API entegrasyonumuz vardır. Sipariş onaylanınca otomatik müşteri cari kartı oluşur, e-Arşiv fatura kesilir, fatura ve ödeme bilgisi muhasebe sistemine sync edilir. Hazır ERP/muhasebe bağlayıcısı Kurumsal pakete dahildir; özel ERP geliştirmesi ayrıca tekliflendirilir. IdeaSoft tarafında Logo/Mikro entegrasyonları ek modül olarak ücretlendirilir."
  },
  {
    q: "Hosting maliyeti ne olur?",
    a: "Next.js Vercel veya Netlify üzerinde trafiğe göre değişen sabit bir hosting kalemi olur; kurumsal trafik için AWS, GCP veya self-hosted altyapı seçilebilir. IdeaSoft hosting lisans paketine dahildir fakat lisans + modül birleşimi devam ettiği sürece toplam yapı bağımlı kalır. Fiyat brief görüşmesinde net paylaşılıyor."
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
              <span className="text-ink">IdeaSoft Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">IdeaSoft Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  IdeaSoft alternatifi, KOBİ için custom modern e-ticaret
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  IdeaSoft modüler hazır paket model KOBİ&apos;ye pratik bir başlangıç verir, ancak büyüme döneminde modül başı ücret + aylık lisans + tema kalıbı maliyeti artırır. PORTZEN, KOBİ markaları için custom Next.js + AI ile geliştirilen e-ticaret altyapısı sunar.
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
                  <Link
                    href="/web-tasarim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    Web Tasarım <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-light" : "bg-light text-ink"
                    )}
                  >
                    <div className="font-display text-3xl md:text-4xl font-black leading-none mb-2">
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

      {/* 2. NEDEN ALTERNATİF */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                IdeaSoft&apos;un 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                IdeaSoft başlangıçta hızlıdır, fakat büyüme döneminde modüler model pahalanır.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/10 bg-light p-5 h-full rounded-2xl">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-ink/10 bg-slate text-white mb-4 rounded-full">
                    <X className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-black mb-2">{p.title}</h3>
                  <p className="text-sm opacity-85 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KARŞILAŞTIRMA TABLOSU */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                IdeaSoft vs PORTZEN, KOBİ için 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">IdeaSoft</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-light text-ink">PORTZEN</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.idea}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-sm bg-light text-ink">
                        <div className="flex flex-col items-center gap-1">
                          <Check className="h-4 w-4 text-green-700" />
                          <span className="text-xs font-bold">{row.portzen}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-sm text-ink/60 max-w-2xl">
              <strong>Not.</strong> Karşılaştırma genel bilgi amaçlıdır; PORTZEN sütunu paket kapsamına göre hazırlanmıştır. Güncel IdeaSoft koşulları için IdeaSoft&apos;un kendi sayfaları esas alınmalıdır.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                IdeaSoft&apos;tan modern altyapıya geçiş süreci
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink/15 bg-lime shadow-brutal-sm mb-4 rounded-full">
                      <Icon className="h-5 w-5 text-ink" />
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

      {/* 5. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                PORTZEN&apos;in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Modül başı ödediğiniz 6 özellik, PORTZEN&apos;de proje kapsamında
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

      {/* 6. USE CASES */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Kullanım örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              KOBİ markaları için custom çözüm: örnek senaryolar
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>Örnek senaryo: el yapımı seramik atölyesi, 250 SKU.</strong> IdeaSoft paket + modül birleşimi hızlı başlar ama marka kimliği tema kalıbında kaybolur. PORTZEN ile markaya özel tasarım, Next.js altyapı, AI ürün açıklaması (her seramik için özgün hikaye taslağı AI ile yazılır) ve PWA mobil deneyimi kurulur. Marka, tema kalıbı yerine kendine ait bir arayüzle ayrışır.
                </p>
                <p>
                  <strong>Örnek senaryo: organik gıda markası, 800 ürün.</strong> IdeaSoft pakette Logo entegrasyonu modül olarak ekleniyor. PORTZEN ile geçişte site Next.js ile yeniden kurulur, PageSpeed için 90+ hedeflenir, AI öneri motoru ürün sayfalarına eklenir. Logo Tiger bağlantısı Kurumsal paketteki hazır ERP/muhasebe bağlayıcısıyla kurulur, e-Arşiv fatura akışı otomatikleşir.
                </p>
                <p>
                  <strong>Örnek senaryo: butik mücevher markası, 1.500 SKU.</strong> Trafiğin büyük kısmı mobilden geliyor ama mevcut kurulumda PWA yok. PORTZEN&apos;de PWA standart gelir, push notification kurulur (sepet terk, yeni koleksiyon, kampanya). Ürün sorularını 7/24 yanıtlayan WhatsApp + site chatbotu, ayrı bir hizmet olan AI müşteri asistanı kapsamında eklenir; karmaşık sorular müşteri hizmetlerine devredilir.
                </p>
                <p>
                  <strong>Örnek senaryo: hızlı büyüyen çocuk giyim markası.</strong> Kampanya saatlerinde mevcut sunucu yavaşlıyor. PORTZEN altyapısında site, trafiğe göre ölçeklenen Vercel edge ağında yayınlanır; hosting kalemi trafiğe göre değişir ve teklifte ayrıca belirtilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">PageSpeed</div>
                  <div className="font-display text-4xl font-black mb-1">90+ hedef</div>
                  <div className="text-sm">Next.js + Vercel edge</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Mobil</div>
                  <div className="font-display text-4xl font-black mb-1">PWA</div>
                  <div className="text-sm">Ana ekrana ekleme + push notification</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Müşteri soruları</div>
                  <div className="font-display text-4xl font-black text-ink">AI asistan</div>
                  <div className="text-sm">Ayrı hizmet: AI müşteri asistanı</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                IdeaSoft&apos;tan geçmeden önce merak edilenler
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
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <HeadphonesIcon className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Ticimax kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Daha büyük ölçek için Ticimax alternatif analizimiz.
                </p>
                <Link href="/ticimax-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Ticimax Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Shopier kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Komisyonsuz kendi mağazanız için Shopier alternatif analizi.
                </p>
                <Link href="/shopier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Shopier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-white">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                IdeaSoft kurulumunuzu modern altyapıya taşıyalım
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut IdeaSoft kurulumunuzu inceliyoruz. Hangi modüllerin custom altyapıya taşınacağı, AI ve PWA&apos;nın nasıl yerleşeceği net bir taşıma haritası olarak paylaşılıyor.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905318639117"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
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
                  <span className="font-bold">İzmir, Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/web-tasarim" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/ticimax-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Ticimax Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
