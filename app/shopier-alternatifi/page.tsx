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
  Store,
  TrendingUp,
  Wallet,
  Heart
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Shopier Alternatifi | Kendi Mağazanız + Marka Kimliği - PORTZEN",
  description:
    "Shopier platform komisyonundan kurtulun. Kendi web mağazanızla marka kimliği, SEO ve müşteri verisi sizde. PORTZEN ile bağımsız e-ticaret kurulumu.",
  keywords: [
    "shopier alternatifi",
    "shopier komisyon",
    "kendi eticaret sitesi",
    "shopier mı kendi site mi",
    "düşük komisyonlu satış",
    "butik mağaza eticaret",
    "instagram satıştan siteye geçiş",
    "shopier yerine ne"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/shopier-alternatifi",
    siteName: "PORTZEN",
    title: "Shopier Alternatifi | Kendi Mağazanız + Marka Kimliği - PORTZEN",
    description:
      "Shopier yerine kendi mağazanız, kendi marka kimliği, tam sahiplik."
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopier Alternatifi | PORTZEN",
    description:
      "Kendi web mağazanız ile platform komisyonundan kurtulun, marka kimliği inşa edin."
  },
  alternates: { canonical: "https://portzenai.com/shopier-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Shopier Alternatifi, PORTZEN Kendi Mağazanız",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "E-Commerce Setup",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Shopier ve benzeri pazaryeri komisyon yapısının yerine PORTZEN, butik markalar için kendi domain'i, kendi tasarımı, kendi sahipliği olan e-ticaret mağazası kurar. Platform komisyonu yok, marka kimliği güçlü."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Shopier komisyonu ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopier işlem başına platform komisyonu alır, taksitli satışlarda komisyon yükselir, hızlı havale opsiyonunda ek ücret çıkabilir. Kendi mağazanızda bu platform kesintisi olmaz. Fiyat brief görüşmesinde net paylaşılıyor."
      }
    },
    {
      "@type": "Question",
      name: "Kendi sitemi kurmak için Shopier'dan ne kazanırım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Platform komisyonundan tam tasarruf, ödeme sağlayıcısıyla doğrudan sözleşme, kendi marka kimliği, SEO ile organik trafik, müşteri verisi tamamen size ait. Shopier sitenizi kapatamaz."
      }
    },
    {
      "@type": "Question",
      name: "Shopier ile aynı kolay satış akışı kurulabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Kendi sitenize WhatsApp tek tık sipariş, hızlı ödeme (cüzdan, tek kart), Instagram Story link entegrasyonu, kupon ve indirim akışları kurulur. Müşteri deneyimi Shopier kadar pürüzsüz olur, ek olarak markanız öne çıkar."
      }
    },
    {
      "@type": "Question",
      name: "Shopier'da bana hazır gelen kargo entegrasyonu siteye gelir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yurtiçi Kargo, MNG, Aras, PTT, Sürat entegrasyonları PORTZEN paketinde standarttır. Sipariş onayında otomatik kargo etiketi basılır, müşteriye takip numarası WhatsApp ve e-mail ile gönderilir."
      }
    },
    {
      "@type": "Question",
      name: "Instagram Bio link Shopier yerine ne gösterilecek?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kendi domain'iniz. Örneğin instagram.com/markanız → biolink olarak markanizad.com gösterilir. Linktree ihtiyacı kalmaz, tüm trafik direkt sitenize gelir, SEO ve marka değeri size kalır."
      }
    },
    {
      "@type": "Question",
      name: "Tek ürün satıyorum, kendi site kurmaya değer mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Düşük hacimli satışta Shopier başlangıç için uygun olabilir. Belirli bir hacmin üzerinde kendi siteniz belirli bir sürede kendini karşılamaya başlar. Marka inşa etmek istiyorsanız ilk günden kendi siteniz mantıklıdır. Fiyat brief görüşmesinde net paylaşılıyor."
      }
    },
    {
      "@type": "Question",
      name: "Instagram DM otomasyonu site ile uyumlu mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tamamen uyumlu. Müşteri Instagram Story'ye yorum yazınca otomatik DM ile ürün linki gelir, sepete eklenir, sitenizden ödeme alır. /instagram-dm-otomasyonu/butik sayfasında detaylar mevcut."
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
      name: "Shopier Alternatifi",
      item: "https://portzenai.com/shopier-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Sıfır", label: "Platform komisyonu" },
  { metric: "Whitelabel", label: "Kendi domain + marka kimliği" },
  { metric: "KVKK", label: "Türkiye sunucu + veri sahipliği" },
  { metric: "Sahip", label: "Kod ve müşteri verisi sizde" }
];

const painPoints = [
  {
    title: "Platform komisyonu yüksek",
    desc: "Shopier işlem başına platform komisyonu keser, taksitli satışta daha da artar. Yıl boyunca birikip doğrudan kar kaybına dönüşür."
  },
  {
    title: "Marka kimliği zayıf",
    desc: "Shopier alt domain (markaniz.shopier.com) altında kalırsınız. Kendi domain'iniz yok, görsel tasarım Shopier kalıbında, müşteri sizi platform içinde görür."
  },
  {
    title: "SEO neredeyse yok",
    desc: "Shopier altında ürün sayfaları Google'da çok zor sıralanır, çünkü domain otoritesi paylaşımlı. Organik trafik almak imkansıza yakın."
  },
  {
    title: "Müşteri verisi platforma ait",
    desc: "Müşteri e-mail, telefon ve sipariş geçmişi Shopier altyapısında. Toplu pazarlama, segmentasyon, retargeting yapma kabiliyetiniz çok sınırlı."
  },
  {
    title: "Platform bağımlılığı",
    desc: "Shopier yarın politika değiştirir, fiyat artırır veya hesabınızı askıya alırsa satışlarınız anında durur. Riskiniz tamamen platforma bağlıdır."
  },
  {
    title: "Özelleştirme sınırlı",
    desc: "Ürün sayfası tasarımı, ödeme akışı, kupon kuralları, çoklu dil veya para birimi gibi büyüme döneminde gereken özellikler kısıtlı veya hiç yok."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", shopier: "Sabit komisyon", portzen: "Brief'te belirlenir" },
  { feature: "Domain", shopier: "markaniz.shopier.com", portzen: "markanizadi.com" },
  { feature: "Marka tasarımı", shopier: "Shopier kalıbı", portzen: "Markaya özel custom" },
  { feature: "SEO ve organik trafik", shopier: "Çok zayıf", portzen: "Tam kontrol, sıralama" },
  { feature: "Müşteri verisi sahipliği", shopier: "Shopier'da", portzen: "Tamamen sizin" },
  { feature: "Instagram bio link", shopier: "Shopier linki", portzen: "Kendi domain'iniz" },
  { feature: "Kargo entegrasyonu", shopier: "Var", portzen: "Var, daha geniş seçenek" },
  { feature: "AI ürün önerisi", shopier: "Yok", portzen: "Yerleşik dahil" },
  { feature: "Çoklu dil ve para", shopier: "Yok", portzen: "Standart dahil" },
  { feature: "Mağaza sahipliği", shopier: "Platform kontrolünde", portzen: "Tamamen sizin" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Marka analizi",
    description: "Mevcut Shopier satışlarınızı, müşteri profilinizi, Instagram trafiğinizi ve marka konumlandırmanızı inceliyoruz. Hangi tasarım yönünün doğru olacağını birlikte buluyoruz."
  },
  {
    icon: Sparkles,
    title: "Tasarım ve geliştirme",
    description: "Markaya özel tasarım, Next.js + Tailwind ile geliştirme, ödeme + kargo entegrasyonu. 3 ile 5 hafta arasında prototip hazır."
  },
  {
    icon: BookOpen,
    title: "Veri ve trafik taşıma",
    description: "Shopier ürün katalogunuz, müşteri listeniz aktarılır. Instagram bio link güncellenir, Shopier mağazasına 301 redirect kurulur, trafik kaybı önlenir."
  },
  {
    icon: CheckCircle2,
    title: "Eğitim ve büyüme",
    description: "Yönetim paneli eğitimi, canlı geçiş. Sonraki 60 gün sosyal medya entegrasyonu, AI öneri, sepet terk akışları optimize edilir."
  }
];

const features = [
  { icon: Wallet, title: "Platform komisyonu sıfır", desc: "Yalnızca doğrudan sözleşmeli ödeme sağlayıcısına ödersiniz. Shopier platform kesintisi ortadan kalkar." },
  { icon: Store, title: "Kendi domain'iniz", desc: "markanizadi.com altında çalışırsınız. Instagram bio'da, kartvizitte, faturada kendi adresiniz. Marka değeri uzun vadede size birikir." },
  { icon: TrendingUp, title: "SEO ile organik trafik", desc: "Kendi domain otoriteniz Google'da sıralanır. Ücretli reklam dışında organik trafik kanalı açılır, tek pazarlama kanalına bağımlı kalmazsınız." },
  { icon: Heart, title: "Müşteri verisi size ait", desc: "E-mail, telefon, sipariş geçmişi sizin CRM'inizde. Segmentlere göre kampanya, retargeting, sadakat programı yapma özgürlüğünüz var." },
  { icon: MessageCircle, title: "WhatsApp + Instagram entegre", desc: "Story'den DM otomasyonu, ürün linki paylaşımı, WhatsApp tek tık sipariş ve ödeme akışı yerleşik gelir." },
  { icon: ShieldCheck, title: "Mağaza tamamen sizin", desc: "Politika değişikliği, koşul değişimi veya hesap askıya alınması riski yok. Kod ve veri sizde, hosting sağlayıcısı bağımsız." }
];

const faqs = [
  {
    q: "Shopier komisyonu gerçekten yüksek mi?",
    a: "Shopier işlem başına platform komisyonu alır (sektör, taksit ve ödeme tipine göre değişir). Hızlı havale opsiyonunda ek komisyon devreye girer. Yüksek satış hacminde bu kesintiler doğrudan kar kaybına dönüşür; kendi mağazanızda ise yalnızca ödeme sağlayıcı (PSP) komisyonu ödersiniz. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "Kendi sitemi kurmak için Shopier'dan ne kazanırım?",
    a: "(1) Platform komisyonundan tam tasarruf, sadece doğrudan sözleşmeli PSP komisyonu, (2) Kendi marka kimliği ve domain'i, müşteri sizi platform değil marka olarak görür, (3) SEO ile Google'dan organik trafik, ücretli reklam dışında satış kanalı, (4) Müşteri verisi tamamen size ait, e-mail kampanyası, retargeting, segmentasyon özgürlüğü, (5) Mağaza sahipliği, Shopier yarın hesabınızı kapatamaz, koşul değiştiremez."
  },
  {
    q: "Shopier ile aynı kolay satış akışı kurulabilir mi?",
    a: "Evet, hatta daha pürüzsüz. Kendi sitenize WhatsApp tek tık sipariş (müşteri WhatsApp butonuna basar, ürün ve telefon önceden dolu gelir), hızlı ödeme akışı (cüzdan, tek kart), Instagram Story link entegrasyonu (story swipe up direkt ürün sayfasına), kupon ve indirim akışları, sepet terk e-mail otomasyonu kurulur. Müşteri deneyimi Shopier kadar kolay, ek olarak markanız ön planda, müşteri size güven oluşturuyor."
  },
  {
    q: "Shopier'da hazır gelen kargo entegrasyonu siteye gelir mi?",
    a: "Daha fazlası. Yurtiçi Kargo, MNG, Aras, PTT, Sürat, Hepsijet entegrasyonları PORTZEN paketinde standarttır. Sipariş onayında otomatik kargo etiketi basılır (PDF), kargo firması API'si ile takip numarası alınır, müşteriye WhatsApp ve e-mail ile bildirim gider. Kargo ücretleri otomatik hesaplanır (ürün ağırlığı, şehir, kampanyalı kargo). Shopier'ın sunduğu kargo seçeneklerinin tümü dahil, ek olarak markaya özel kargo kuralları kurulabilir (belirli tutar üzeri ücretsiz kargo, VIP müşteri hızlı kargo, vb.)."
  },
  {
    q: "Instagram Bio link Shopier yerine ne gösterilecek?",
    a: "Kendi domain'iniz. Örneğin instagram.com/markaniz → biolink olarak markanizad.com gösterilir. Linktree, Beacons gibi üçüncü parti araçlara ihtiyaç kalmaz, tüm trafik direkt sitenize gelir, SEO ve marka değeri size kalır. İsterseniz markanizad.com/instagram alt sayfası kurulup ek Instagram özel kampanyalar gösterilebilir."
  },
  {
    q: "Tek ürün satıyorum, kendi site kurmaya değer mi?",
    a: "Düşük hacimli satışta Shopier başlangıç için uygun olabilir; kurulum hızı ve bakım kolaylığı açısından mantıklıdır. Belirli bir satış hacminin üzerine çıktığınızda platform komisyonu birikimi kendi sitenin proje maliyetini belirli bir sürede karşılamaya başlar. Marka inşa etmek istiyorsanız, uzun vadeli müşteri tabanı kurmak istiyorsanız ilk günden kendi siteniz mantıklıdır, çünkü marka değeri ve müşteri verisi zamanla katlanarak değer kazanır. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "Instagram DM otomasyonu site ile uyumlu mu?",
    a: "Tamamen uyumlu, hatta daha güçlü. Müşteri Instagram Story'ye yorum yazınca otomatik DM ile ürün linki gelir, sepete eklenir, sitenizden ödeme alır. Sepet terk akışında DM hatırlatma yapılır, müşteri 10 dakika içinde geri gelir. /instagram-dm-otomasyonu/butik sayfasında detaylı süreç anlatılmıştır. Shopier'da bu seviyede otomasyon yoktur."
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
              <span className="text-ink">Shopier Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Store className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Shopier Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Shopier alternatifi, kendi mağazanız ve sıfır platform komisyonu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Shopier her satışta platform komisyonu kesiyor, mağazanız markaniz.shopier.com altında kalıyor, müşteri verisi platforma ait. PORTZEN size kendi domain'inizde, kendi tasarımınızda, kendi marka kimliğinizle mağaza kurar; platform komisyonu sıfır olur.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/web-tasarim/butik"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Butik Web Tasarım <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-purple text-paper"
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
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Shopier'ın 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Shopier başlangıçta kolay, ama uzun vadede markaya zarar.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5] h-full">
                  <div className="inline-flex items-center justify-center w-10 h-10 border-3 border-paper bg-brand-purple text-paper mb-4">
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
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Yan yana karşılaştırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Shopier vs PORTZEN kendi mağazanız, 10 kritik fark
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Shopier</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN Kendi Mağazanız</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.shopier}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-sm bg-brand-yellow/30 text-ink">
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
              <strong>Kaynak.</strong> Ürün karşılaştırma PORTZEN müşteri kurulum deneyimlerinden derlenmiştir.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. PORTZEN ÇÖZÜMÜ */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Shopier'dan kendi mağazanıza 3 ile 5 hafta arasında geçiş
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
                    <div className="inline-flex items-center justify-center w-12 h-12 border-3 border-ink bg-brand-yellow shadow-brutal-sm mb-4">
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
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                PORTZEN'in farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Shopier'da hiç sahip olamadığınız 6 özellik
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

      {/* 6. USE CASES */}
      <section className="bg-brand-purple text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Kullanım örnekleri
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Butik markalar Shopier'dan kendi sitelerine geçince ne oluyor?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İzmir, el yapımı takı markası.</strong> Shopier'da satış yapıyor, platform komisyonu her ay kar marjını daraltıyordu. Müşteri verisi Shopier'da kilitliydi, e-mail kampanyası yapamıyordu. PORTZEN ile kendi siteye geçti, doğrudan PSP sözleşmesiyle komisyon yükü düştü, Instagram bio'da artık kendi domain'i var. Müşteri listesi CRM'e aktı, e-mail kampanyaları başladı, aylık satış anlamlı ölçüde büyüdü.
                </p>
                <p>
                  <strong>İstanbul, butik moda markası.</strong> Shopier'da taksitli + hızlı havale kombinasyonuyla toplam komisyon yükü katlanıyordu. Müşteri Shopier'da görüyordu, marka kimliği zayıftı. PORTZEN ile geçiş, doğrudan PSP sözleşmesi yapıldı. AI öneri motoru sepet ortalamasını yükseltti, Instagram DM otomasyonu story'den gelen dönüşümü artırdı, marka kendi domain'inde büyümeye başladı.
                </p>
                <p>
                  <strong>Ankara, ev dekorasyonu markası.</strong> Shopier'da satış yapıyor ama büyüme yavaştı, Google'dan trafik gelmiyordu. PORTZEN kendi sitesi kuruldu, SEO optimize edildi, blog stratejisi geliştirildi. Aylar içinde Google organik trafik anlamlı büyüklüğe çıktı, organik satış toplam cironun önemli bir dilimine ulaştı. Tek pazarlama kanalı (Instagram reklam) yerine üç kanal (organik, Instagram, e-mail) açıldı.
                </p>
                <p>
                  <strong>Bursa, organik sabun markası.</strong> Shopier'da 2 yıldır satıyordu, müşteri verisi Shopier'da kilitliydi, retargeting yapamıyordu. PORTZEN'e geçti, son 12 ayın siparişleri Shopier API'den çekildi, müşteri listesi CRM'e aktarıldı, segmentlere ayrıldı (yeni, sadık, kayıp). Win-back kampanyası ile kayıp müşterilerin belirgin bir kısmı geri kazanıldı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Platform komisyonu</div>
                  <div className="font-display text-4xl font-black mb-1">Sıfır</div>
                  <div className="text-sm">Doğrudan PSP sözleşmesi</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Organik trafik kanalı</div>
                  <div className="font-display text-4xl font-black mb-1">Açıldı</div>
                  <div className="text-sm">SEO ile Google'dan ziyaret</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Müşteri verisi</div>
                  <div className="font-display text-4xl font-black text-brand-pink">Sizin</div>
                  <div className="text-sm">Kampanya, retargeting, sadakat</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. ÇALIŞMA MODELİ */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Çalışma modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Tek seferlik proje, kod size ait
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Shopier'ın her satışta komisyon kesmesi yerine PORTZEN tek seferlik proje modeliyle çalışır. Kapsam brief görüşmesinde birlikte belirlenir; ürün sayısı, tasarım özelleştirmesi, entegrasyon setine göre teklif çıkar.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">Instagram DM otomasyonu</div>
                <p className="text-sm opacity-90">
                  Butik markalar için Instagram DM ile sipariş ve sepet terk otomasyonu detayları.
                </p>
              </div>
              <Link
                href="/instagram-dm-otomasyonu/butik"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Butik DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
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
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Shopier'dan kendi sitenize geçmeden önce
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
            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <HeadphonesIcon className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Butik Web Tasarım</h3>
                <p className="text-sm opacity-85 mb-3">
                  Butik markalar için markaya özel web tasarım hizmetimiz.
                </p>
                <Link href="/web-tasarim/butik" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Butik Web Tasarım <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">iyzico Alternatifi</h3>
                <p className="text-sm opacity-85 mb-3">
                  Ödeme sağlayıcısı seçimi ve komisyon pazarlığı.
                </p>
                <Link href="/iyzico-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  iyzico Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Shopier'dan kendi mağazanıza geçelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Shopier kullanımınızı inceliyoruz. Marka konumlandırması, kanal karışımı ve kendi siteye geçiş planı brief'e uygun şekilde çıkarılır.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Görüşme Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <a
                  href="tel:+905015884853"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <Phone className="h-4 w-4" /> Hemen Ara
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
                  <span className="font-bold">İzmir, Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/web-tasarim" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/web-tasarim/butik" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Butik Web Tasarım <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu/butik" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Butik Instagram DM <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/iyzico-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  iyzico Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
