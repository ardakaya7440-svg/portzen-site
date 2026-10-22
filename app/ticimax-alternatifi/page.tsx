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
  ShoppingBag,
  TrendingUp,
  Code,
  Zap
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ticimax Alternatifi | Modern E-Ticaret Yazılım Karşılaştırması - PORTZEN",
  description:
    "Ticimax hazır kalıp e-ticaret altyapısı yerine markanıza özel Next.js + AI ile geliştirilen modern e-ticaret çözümü. Hız, SEO ve dönüşüm optimizasyonu PORTZEN ile.",
  keywords: [
    "ticimax alternatifi",
    "e-ticaret yazılımı karşılaştırma",
    "modern e-ticaret altyapısı",
    "next js e-ticaret",
    "headless commerce türkiye",
    "shopify mı ticimax mı",
    "özel e-ticaret yazılımı",
    "hızlı eticaret sitesi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ticimax-alternatifi",
    siteName: "PORTZEN",
    title: "Ticimax Alternatifi | Modern E-Ticaret Yazılım Karşılaştırması - PORTZEN",
    description:
      "Hazır kalıp Ticimax yerine markanıza özel Next.js + AI ile geliştirilen modern e-ticaret altyapısı."
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticimax Alternatifi | PORTZEN",
    description:
      "Markaya özel modern e-ticaret. Hız, SEO ve dönüşüm odaklı."
  },
  alternates: { canonical: "https://portzenai.com/ticimax-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ticimax Alternatifi, PORTZEN Markaya Özel E-Ticaret",
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
    "Ticimax'in hazır kalıp altyapısı yerine PORTZEN, markanıza özel Next.js tabanlı, AI destekli, ölçeklenebilir e-ticaret platformu geliştirir. SEO, hız ve dönüşüm odaklı."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ticimax kötü bir platform mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. Ticimax 5.000+ ürünlü, standart e-ticaret işletmesi için hızlı çözüm sunar. Fakat marka kimliği ön planda olan, hız ve SEO konusunda Google sıralamasında öne çıkmak isteyen işletmeler için hazır kalıp sınırlı kalır."
      }
    },
    {
      "@type": "Question",
      name: "Next.js e-ticaret nedir, neden Ticimax'tan daha hızlı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js sunucu tarafında render ile sayfaları milisaniyeler içinde getirir. Ticimax monolitik PHP altyapısı, plugin yükü ve eski tema mimarisi sebebiyle ortalama TTFB 800ms üzeri. Next.js'te edge önbellekleme ile çok daha düşük TTFB hedeflenir."
      }
    },
    {
      "@type": "Question",
      name: "Ticimax'tan PORTZEN'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi katalog boyutu ve kapsama göre teklifte yazılı olarak belirtilir. Paketlerde dosyadan ürün aktarımı adedi yazılıdır (en yüksek adet Kurumsal pakette); daha büyük kataloglar ile müşteri ve sipariş geçmişi aktarımı teklifte ayrıca belirtilir. URL yapısı korunarak SEO kaybı en aza indirilir."
      }
    },
    {
      "@type": "Question",
      name: "AI hangi noktalarda kullanılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ürün açıklaması otomatik yazımı, ürün görseli iyileştirme, kişiselleştirilmiş öneri motoru, sepet terk e-mail kişiselleştirmesi, müşteri sorularını yanıtlayan chatbot, kategori sayfa SEO içeriği otomatik üretimi. Bu özellikler kapsama göre eklenir ve teklifte yazılı olarak belirtilir; chatbot ayrı bir hizmet olan AI müşteri asistanı kapsamındadır. Ticimax'ta hiçbiri yerleşik değildir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık lisans ücreti ödüyor muyum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN'e aylık lisans ücreti ödemezsiniz: e-ticaret sitesi tek seferlik proje bedelidir, yayından sonraki bakım isteğe bağlı aylık hizmettir. Hazır altyapı kullanılan projelerde altyapı ve harici lisans ücretleri hariçtir ve teklifte ayrıca belirtilir. Paket fiyatları yazılıdır; kesin kapsam teklifte belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Hosting maliyeti ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Next.js Vercel veya Netlify üzerinde uygun bir hosting masrafı çıkarır. Ticimax kendi hosting'inde tutar fakat lisansa dahil değildir, ayrı abonelik gerekir. Lisans, hosting ve modül giderlerinden oluşan toplam maliyeti keşif görüşmesinde sizin durumunuza göre birlikte hesaplıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "Ödeme sağlayıcısı entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm e-ticaret paketlerinde ödeme bağlantısı dahildir; iyzico, PayTR, Param, Garanti Sanal POS, Akbank, İş Bankası veya Stripe için hazır şablonlarımız var. Birden fazla sağlayıcı ve Multi-PSP routing (sağlayıcı reddederse diğerine fallback) teklifte ayrıca belirtilir."
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
      name: "Ticimax Alternatifi",
      item: "https://portzenai.com/ticimax-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Next.js", label: "Sunucu tarafı render mimarisi" },
  { metric: "AI", label: "Ürün önerisi ve içerik" },
  { metric: "Tek sefer", label: "Proje bedeli; altyapı lisansları hariç" },
  { metric: "Teklifte", label: "Taşıma süresi kapsama göre yazılı" }
];

const painPoints = [
  {
    title: "Hazır kalıp tema",
    desc: "Ticimax tema marketinden seçilen tasarımlar binlerce site arasında ortak kullanılır. Marka kimliği zayıflar, rakipten ayrışmak güçleşir."
  },
  {
    title: "Yavaş yükleme",
    desc: "Monolitik PHP mimarisi, plugin yükü ve eski tema yapısı sebebiyle ortalama Time To First Byte 800ms üzeri. Google PageSpeed skoru çoğu zaman 60 altı."
  },
  {
    title: "Aylık lisans ücreti",
    desc: "Paket bazında aylık lisans ücreti her ay sabit gider olarak devam eder, kod size ait değildir. Yıllık toplamda ciddi bir kalıcı maliyet birikir."
  },
  {
    title: "Modül başı ücret",
    desc: "B2B modülü, çoklu mağaza, özel domain, hediye paketi gibi her ek özellik ayrı ücretli modüldür. Toplam maliyet katlanır."
  },
  {
    title: "SEO sınırlı",
    desc: "URL yapısı, meta veri kontrolü, schema markup, breadcrumb ayarları kısıtlı. Custom SEO ihtiyaçlarında Ticimax destek ekibine bağımlı kalırsınız."
  },
  {
    title: "AI yerleşik değil",
    desc: "Ürün öneri motoru, otomatik içerik üretimi, AI chatbot için ayrı SaaS abonelikleri (Algolia, Insider, Klevu) gerekir, aylık ek maliyet çıkarır."
  }
];

const comparisonRows = [
  { feature: "Tasarım esnekliği", ticimax: "Tema kalıbı", portzen: "Markaya özel custom" },
  { feature: "Time To First Byte", ticimax: "800ms ile 1500ms", portzen: "Düşük TTFB hedefi (Vercel edge)" },
  { feature: "Google PageSpeed", ticimax: "60 altı tipik", portzen: "90+ hedefi" },
  { feature: "Fiyat modeli", ticimax: "Aylık lisans bazlı", portzen: "Tek seferlik proje bedeli, paket fiyatları yazılı" },
  { feature: "Modül başı ücret", ticimax: "Her modül ek", portzen: "Kapsam pakette yazılı" },
  { feature: "AI ürün önerisi", ticimax: "Üçüncü parti SaaS", portzen: "Kapsama göre eklenir" },
  { feature: "SEO kontrolü", ticimax: "Sınırlı", portzen: "Tam, schema dahil" },
  { feature: "Çoklu dil ve para", ticimax: "Modül başı ücretli", portzen: "Kurumsal pakette çoklu dil" },
  { feature: "Headless API", ticimax: "Kısıtlı", portzen: "Full REST + GraphQL" },
  { feature: "Mobil uygulama bağlantısı", ticimax: "Ekstra modül", portzen: "API'den direkt kullanılır" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Marka analizi",
    description: "Markanızın hedef kitlesi, ürün portföyü, mevcut Ticimax kurulumu ve hedef rakiplerinizi analiz ediyoruz. Tasarım yönü ve teknik gereksinimleri netleştiriyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Figma'da markaya özel tasarım, ardından Next.js + Tailwind + headless commerce mimarisinde geliştirme. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  {
    icon: BookOpen,
    title: "Veri taşıma",
    description: "Ürünler pakette yazılı adede kadar dosyadan aktarılır; müşteri ve sipariş geçmişi aktarımı teklifte belirtilir. URL yapısı korunur, 301 redirect haritası kurulur, SEO kaybı en aza indirilir."
  },
  {
    icon: CheckCircle2,
    title: "Canlı geçiş",
    description: "Staging ortamında test, müşteri eğitimi, canlı geçiş gece bakım penceresinde. Yayın sonrası bakım ve optimizasyon ayrı aylık Web bakım hizmetiyle sunulur."
  }
];

const features = [
  { icon: Zap, title: "Hız öncelikli mimari", desc: "Next.js sunucu tarafı render, Vercel edge network, otomatik image optimization. Google PageSpeed 90+ hedefi." },
  { icon: Code, title: "Headless commerce", desc: "Saleor, Medusa veya custom backend ile API-first mimari. Mobil app, kiosk, sosyal medya satış kanalları aynı API'den beslenir." },
  { icon: Sparkles, title: "AI özellikleri", desc: "Ürün öneri motoru, otomatik ürün açıklaması ve kişiselleştirilmiş anasayfa kapsama göre eklenir, teklifte yazılı olarak belirtilir. AI chatbot ayrı bir hizmettir (AI müşteri asistanı)." },
  { icon: TrendingUp, title: "SEO tam kontrol", desc: "URL yapısı, schema markup, breadcrumb, meta veri, sitemap, robots.txt, canonical, hreflang tam kontrol. Custom SEO stratejisi uygulanır." },
  { icon: ShoppingBag, title: "Multi-PSP ödeme", desc: "iyzico, PayTR, Garanti Sanal POS, Stripe routing. Reddedilen işlem fallback ile diğer sağlayıcıya iletilir. Paketlerde ödeme bağlantısı dahildir; çoklu sağlayıcı kurgusu teklifte ayrıca belirtilir." },
  { icon: ShieldCheck, title: "KVKK ve PCI", desc: "Tokenizasyon ile kart bilgisi sitenizde tutulmaz, PCI DSS yükü ödeme sağlayıcısındadır. Site, KVKK gerekliliklerini dikkate alarak kurgulanır (aydınlatma metni, açık rıza, veri silme talebi akışı)." }
];

const faqs = [
  {
    q: "Ticimax kötü bir platform mu, hiç kullanılmamalı mı?",
    a: "Hayır. Ticimax 5.000+ ürünlü, standart e-ticaret işletmesi için hızlı çözüm sunar; özellikle hızlı kurulum gereken, marka kimliği ikincil olan, teknik ekibi olmayan KOBİ'ler için mantıklı bir başlangıçtır. Fakat marka kimliği ön planda olan, Google sıralamasında öne çıkmak isteyen, hız ve dönüşüm konusunda rakiplerden ayrışmayı hedefleyen işletmeler için hazır kalıp tema ve monolitik altyapı sınırlı kalır. PORTZEN bu noktada custom yaklaşım sunar."
  },
  {
    q: "Next.js e-ticaret nedir, neden Ticimax'tan daha hızlı?",
    a: "Next.js, Vercel firmasının geliştirdiği modern bir React framework'üdür. Sunucu tarafında ön-render (Server Side Rendering) ve statik sayfa üretimi (Static Site Generation) ile sayfaları milisaniyeler içinde tarayıcıya iletir. Ticimax monolitik PHP altyapısı, plugin yükü ve eski tema mimarisi sebebiyle ortalama Time To First Byte 800ms ile 1500ms arasıdır. Next.js'te edge önbellekleme ile çok daha düşük TTFB hedeflenir. Sayfa hızı Google'ın sıralama sinyallerinden biridir; Aberdeen Group araştırmasına göre 1 saniyelik gecikme dönüşümleri yaklaşık %7 azaltabilir."
  },
  {
    q: "Ticimax'tan PORTZEN'e taşıma süresi ne kadar?",
    a: "Teslim süresi katalog boyutu ve özelleştirme miktarına göre teklifte yazılı olarak belirtilir. Paketlerde dosyadan ürün aktarımı adedi yazılıdır (en yüksek adet Kurumsal pakette); daha büyük kataloglar ile varyasyon, müşteri ve sipariş geçmişi aktarımı teklifte ayrıca belirtilir. URL yapısı korunarak veya 301 redirect haritası kurularak SEO kaybı en aza indirilir. Google Search Console aktarımı yapılır; daha hızlı sayfalar sıralama sinyallerinden birini iyileştirir."
  },
  {
    q: "AI hangi noktalarda kullanılıyor?",
    a: "Ürün açıklaması otomatik yazımı (yeni ürün eklediğinizde SEO uyumlu açıklama AI ile gelir), ürün görseli iyileştirme (arka plan temizleme, boyut standartlaştırma), kişiselleştirilmiş öneri motoru (her kullanıcıya farklı anasayfa), sepet terk e-mail kişiselleştirmesi, müşteri sorularını yanıtlayan WhatsApp + site chatbot, kategori sayfa SEO içeriği otomatik üretimi, A/B test fikir önerisi. Bu özellikler kapsama göre eklenir ve teklifte yazılı olarak belirtilir; WhatsApp ve site chatbotu ayrı bir hizmet olan AI müşteri asistanı kapsamındadır. Ticimax'ta hiçbiri yerleşik değildir, üçüncü parti SaaS abonelikleri (Insider, Algolia, Klevu) gerekir, aylık ek maliyet çıkarır."
  },
  {
    q: "Aylık lisans ücreti ödüyor muyum?",
    a: "PORTZEN'e aylık lisans ücreti ödemezsiniz: e-ticaret sitesi tek seferlik proje bedelidir, yayından sonraki bakım isteğe bağlı aylık hizmettir. Özel arayüzle geliştirilen projelerde kod size aittir, GitHub repo'sunda kalır, isterseniz başka bir ajansa devredebilirsiniz; PORTZEN aylık bakım almasanız bile site sahibi sizsiniz. Hazır altyapı kullanılan projelerde altyapı ve harici lisans ücretleri hariçtir ve teklifte ayrıca belirtilir."
  },
  {
    q: "Hosting maliyeti ne olur?",
    a: "Next.js Vercel, Netlify veya Cloudflare Pages üzerinde uygun bir aylık hosting masrafı çıkar (trafiğe bağlı). Kurumsal trafik için AWS, GCP veya self-hosted altyapı seçenekleri mevcut. Ticimax kendi hosting'inde tutar fakat lisansa dahil değildir, ayrı abonelik gerekir. Toplam maliyeti (lisans + hosting + modüller) keşif görüşmesinde sizin durumunuza göre birlikte hesaplıyoruz."
  },
  {
    q: "Ödeme sağlayıcısı entegrasyonu var mı?",
    a: "iyzico, PayTR, Param, Garanti Sanal POS, Akbank Sanal POS, İş Bankası, Stripe TR için hazır şablonlarımız var; tüm e-ticaret paketlerinde ödeme bağlantısı dahildir. Birden fazla sağlayıcı ve Multi-PSP routing (bir sağlayıcı reddederse diğerine fallback) teklifte ayrıca belirtilir. Komisyon pazarlığı gerekiyorsa /iyzico-alternatifi sayfamızda detaylı süreç anlatılır."
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
              <span className="text-ink">Ticimax Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <ShoppingBag className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Ticimax Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Ticimax alternatifi, markaya özel modern e-ticaret altyapısı
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Ticimax hazır kalıp tema ve monolitik PHP altyapısı KOBİ için hızlı bir başlangıçtır. Marka kimliği, hız ve dönüşüm konusunda öne çıkmak isteyenler için PORTZEN, Next.js + AI ile markaya özel e-ticaret platformu kurar.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
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
                Ticimax&apos;ın 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Ticimax başlangıç için hızlı, ama marka büyüdükçe kalıp daralır.
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
                Ticimax vs PORTZEN, 10 kritik e-ticaret özelliği
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Ticimax</th>
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
                          <span className="text-xs">{row.ticimax}</span>
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
              <strong>Not:</strong> Karşılaştırma genel platform özelliklerine dayanır; Ticimax paket içerikleri ve ücretleri için güncel bilgiyi Ticimax&apos;tan teyit edin.
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
                Ticimax&apos;tan modern e-ticarete nasıl geçilir?
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
                Ticimax modülünde ekstra ödediğiniz 6 özellik
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
              Örnek senaryolar
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Markaya özel e-ticaret hangi durumlarda nasıl kurgulanır?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>Örnek senaryo: geniş katalogla satan bir butik moda markası.</strong> Hazır altyapıda aylık sabit lisans ödüyor, tema kalıbı yüzünden marka kimliğini yansıtamıyor ve sayfaları yavaş açılıyor. Bu durumda tasarım sıfırdan markaya özel kurgulanır, site Next.js&apos;e taşınır, görseller otomatik optimize edilir; sepet terk e-postalarının AI ile kişiselleştirilmesi kapsama göre eklenir.
                </p>
                <p>
                  <strong>Örnek senaryo: hem B2C hem B2B satan endüstriyel ürün satıcısı.</strong> Hazır altyapıda B2B modülü ek ücretli, fiyat farklılaştırma sınırlı. Bu durumda özel backend kurulur; B2B müşteriye giriş sonrası farklı fiyat, vade ve sepet kuralları gösterilir, SKU başı dinamik fiyat hesaplama ve kurumsal proforma fatura otomasyonu eklenir.
                </p>
                <p>
                  <strong>Örnek senaryo: ihracat ağırlıklı bir kozmetik markası.</strong> Birden fazla ülkeye satış yapıyor; hazır altyapıda çoklu dil ve çoklu para birimi ek modül olarak faturalanıyor, hreflang otomatik değil. Bu durumda çoklu dil ve hreflang yapısı kurulur (Kurumsal pakette 2 dil; ek diller teklifte ayrıca belirtilir), ülkeye göre fiyat ve KDV hesaplanır, AB müşterisi için Stripe, TR müşterisi için iyzico yönlendirmesi kurulur (çoklu sağlayıcı kurgusu teklifte ayrıca belirtilir).
                </p>
                <p>
                  <strong>Örnek senaryo: kampanya dönemlerinde trafiği ani yükselen bir ev tekstili markası.</strong> Hazır altyapı yoğun saatlerde yavaşlıyor. Bu durumda site önbellekleme ve edge dağıtım kullanan bir altyapıya taşınır, kampanya öncesi yük testi yapılır ve yoğun saatler için izleme planlanır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">PageSpeed</div>
                  <div className="font-display text-4xl font-black mb-1">90+ hedefi</div>
                  <div className="text-sm">Next.js + edge network</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kişiselleştirme</div>
                  <div className="font-display text-4xl font-black mb-1">AI öneri</div>
                  <div className="text-sm">Kapsama göre eklenir, teklifte yazılır</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Aylık lisans</div>
                  <div className="font-display text-4xl font-black text-ink">Yok</div>
                  <div className="text-sm">Tek seferlik proje bedeli; altyapı ve harici lisanslar hariç</div>
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
                Ticimax&apos;tan geçmeden önce merak edilenler
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
                <h3 className="font-display text-base font-black mb-2">WordPress mu Shopify mı?</h3>
                <p className="text-sm opacity-85 mb-3">
                  E-ticaret platformları karşılaştırmalı blog yazımız.
                </p>
                <Link href="/blog/wordpress-vs-shopify-eticaret" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Yazıyı Oku <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">IdeaSoft kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  KOBİ için IdeaSoft alternatif analizi.
                </p>
                <Link href="/ideasoft-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  IdeaSoft Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                Ticimax aylık lisansını yatırıma çevirelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Ticimax sitenizi analiz ediyoruz. PageSpeed, SEO, lisans yükü ve dönüşüm oranı baz alınarak tahmini ROI raporu çıkarıyoruz.
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
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/shopify-vs-woocommerce-turkiye" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Shopify vs WooCommerce <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/wordpress-vs-shopify-eticaret" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: WP vs Shopify <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
