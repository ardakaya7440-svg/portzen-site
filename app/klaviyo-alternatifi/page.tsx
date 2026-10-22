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
  HeadphonesIcon,
  CheckCircle2,
  TrendingUp,
  Mail,
  ShoppingCart
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Klaviyo Alternatifi | E-Ticaret İçin Daha Ekonomik Otomasyon - PORTZEN",
  description:
    "Klaviyo profil sayısı arttıkça fatura hızla büyür. PORTZEN; cart abandonment, win-back, post-purchase otomasyonlarını KVKK gerekliliklerini dikkate alarak, Türkçe destekle kurar.",
  keywords: [
    "klaviyo alternatifi",
    "klaviyo türkçe",
    "e-ticaret email otomasyonu",
    "shopify email yazılımı",
    "sepet bırakma otomasyonu",
    "omnisend alternatif",
    "brevo e-ticaret",
    "kvkk e-ticaret email"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/klaviyo-alternatifi",
    siteName: "PORTZEN",
    title: "Klaviyo Alternatifi | E-Ticaret İçin Daha Ekonomik Otomasyon - PORTZEN",
    description:
      "Klaviyo'nun e-ticaret özelliklerini KVKK gerekliliklerini dikkate alan, Türkçe destekli, brief bazlı bir kurulumla alın."
  },
  twitter: {
    card: "summary_large_image",
    title: "Klaviyo Alternatifi | PORTZEN",
    description:
      "E-ticaret için cart abandonment, post-purchase, win-back otomasyonu - KVKK gerekliliklerini dikkate alan, Türkçe destekli kurulum."
  },
  alternates: { canonical: "https://portzenai.com/klaviyo-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Klaviyo Alternatifi - PORTZEN E-Ticaret Email Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "E-commerce Marketing Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Klaviyo'nun profil bazlı ücretlendirmesi yerine PORTZEN; Shopify, WooCommerce, Trendyol entegre, n8n + Resend altyapısıyla cart abandonment, post-purchase ve win-back akışlarını kapsam bazlı çalıştırır."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Klaviyo gerçekten pahalı mı? Free tier var değil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klaviyo 250 kişiye kadar ücretsiz. Aktif profil arttıkça fatura hızla büyür, SMS modülü ayrı kredi, push notification ayrı modüldür. PORTZEN aynı kapsamı KVKK gerekliliklerini (açık rıza, aydınlatma akışı) dikkate alarak ve Türkçe destekle kurar. Fiyat brief görüşmesinde net paylaşılıyor."
      }
    },
    {
      "@type": "Question",
      name: "Cart abandonment akışını PORTZEN'de nasıl kurulur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shopify / WooCommerce / T-Soft / Ideasoft eventleri n8n üzerinden PORTZEN'e akar. 1. saat WhatsApp + ürün görseli, 24. saat e-mail + alternatif öneriler, 72. saat SMS + kupon kodu. Tüm akış Türkçe şablonlarla hazır gelir."
      }
    },
    {
      "@type": "Question",
      name: "Klaviyo'dan veri taşıma mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Klaviyo API üzerinden profiller, segmentler, flow'lar, gönderim geçmişi ve metric verisi çekilir. Flow'lar PORTZEN editöründe yeniden kurulur, segmentler korunur. Taşıma süresi kapsama göre teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "Türk e-ticaret platformlarına entegre mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "T-Soft, Ideasoft, Ticimax, Shopify, WooCommerce, Magento için hazır connector mevcut. Trendyol, Hepsiburada, N11 için n8n köprüsü kurulur. Klaviyo'da Trendyol native entegrasyonu yoktur."
      }
    },
    {
      "@type": "Question",
      name: "RFM segmentasyon ve predictive analytics var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN; recency, frequency, monetary değerlere göre dinamik segment, lifetime value tahmini, churn risk skoru ve next best offer önerisi sunar. Klaviyo'nun predictive analytics özelliklerine eş değer."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp ve SMS dahil mi, ek modül mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email + WhatsApp Business API + SMS tek altyapıda gelir. Klaviyo'nun SMS modülü ayrı kredi gerektirir, WhatsApp ise yoktur. PORTZEN'de üç kanal aynı flow editöründe orkestre edilir."
      }
    },
    {
      "@type": "Question",
      name: "Teslim oranı ve domain yönetimi nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPF, DKIM, DMARC kayıtları kurulum aşamasında yapılır. Resend / Amazon SES backend kullanılır; teslim oranı domain doğrulaması, liste kalitesi ve gönderim servisine göre değişir. IP reputation ve spam puanı haftalık raporlanır."
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
      name: "Klaviyo Alternatifi",
      item: "https://portzenai.com/klaviyo-alternatifi"
    }
  ]
};

const stats = [
  { metric: "AI", label: "RFM + predictive segment" },
  { metric: "3 kanal", label: "Email + WhatsApp + SMS" },
  { metric: "İYS", label: "İzin kontrolü + KVKK akışı" },
  { metric: "API ile", label: "Klaviyo'dan veri taşıma" }
];

const painPoints = [
  {
    title: "Profil bazlı USD ücretlendirme",
    desc: "Aktif profil sayısı arttıkça fatura katlanır. USD bazlı ücretlendirme, kur dalgalanmalarında bütçe planlamasını zorlaştırır."
  },
  {
    title: "SMS ve push ek modül",
    desc: "Klaviyo SMS ayrı kredi, push notification ayrı paket. Çok kanallı strateji için fatura hızla ikiye katlanır."
  },
  {
    title: "WhatsApp Business API yok",
    desc: "Türkiye e-ticaretinin en açılır kanalı WhatsApp. Klaviyo native WhatsApp desteği sunmaz, ayrı entegrasyon gerekir."
  },
  {
    title: "KVKK uyumu sizde",
    desc: "Klaviyo ABD sunucu kullanır. KVKK aydınlatma, açık rıza akışı, veri silme prosedürleri sizin sorumluluğunuzdadır."
  },
  {
    title: "Türk pazaryeri entegrasyonu yok",
    desc: "Trendyol, Hepsiburada, N11 için native connector yoktur. Custom integration ek geliştirme bütçesi ister."
  },
  {
    title: "Türkçe destek zayıf",
    desc: "Live chat sadece İngilizce, dokümantasyon İngilizce. Türkçe partner destek dış kaynaktan ve sınırlı."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", manychat: "USD bazlı", portzen: "TL, brief bazlı" },
  { feature: "Fatura para birimi", manychat: "USD", portzen: "TL (KDV hariç fiyat), e-Arşiv" },
  { feature: "Email + WhatsApp + SMS tek pakette", manychat: "Hayır, ayrı modüller", portzen: "Evet, tek altyapı" },
  { feature: "İYS native entegrasyon", manychat: "Yok", portzen: "Var, otomatik kontrol" },
  { feature: "Trendyol / Hepsiburada bağlantısı", manychat: "Yok", portzen: "n8n köprü, hazır" },
  { feature: "T-Soft / Ideasoft / Ticimax", manychat: "Yok", portzen: "Hazır connector" },
  { feature: "Cart abandonment çok kanal", manychat: "Sadece email + SMS (ek modül)", portzen: "Email + WhatsApp + SMS dahil" },
  { feature: "RFM + predictive analytics", manychat: "Var", portzen: "Var (Büyüme ve Kurumsal kurulumlarda)" },
  { feature: "Türkçe canlı destek", manychat: "Yok / partner", portzen: "Tüm paketlerde dahil" },
  { feature: "KVKK + TR sunucu opsiyonu", manychat: "Yok", portzen: "KVKK akışı kurulur; veri bölgesi teklifte yazılı (sunucu gideri hariç)" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Veri taşıma",
    description: "Klaviyo API üzerinden profiller, segmentler, flow'lar, metricler ve gönderim geçmişi PORTZEN'e aktarılır."
  },
  {
    icon: ShoppingCart,
    title: "E-ticaret bağlantısı",
    description: "Shopify / WooCommerce / T-Soft / Ideasoft + Trendyol / Hepsiburada n8n köprüsü kurulur, event akışı başlar."
  },
  {
    icon: Sparkles,
    title: "Flow'lar",
    description: "Welcome, cart abandonment, browse abandonment, post-purchase, win-back, doğum günü, VIP akışları Türkçeleşir."
  },
  {
    icon: CheckCircle2,
    title: "Optimizasyon",
    description: "Canlıya geçişte A/B test, kanal mix ve segment ayarları yapılır; ilk 30 gün kurulum hataları giderilir, sonrası isteğe bağlı aylık bakımla sürer. KPI panosu canlıya geçer."
  }
];

const features = [
  { icon: ShoppingCart, title: "E-ticaret native entegrasyonu", desc: "Shopify, WooCommerce, T-Soft, Ideasoft, Ticimax, Magento için hazır connector. Trendyol, Hepsiburada, N11 n8n köprüsü." },
  { icon: Mail, title: "Cart abandonment çok kanallı", desc: "1. saat WhatsApp + ürün görseli, 24. saat email + alternatifler, 72. saat SMS + kupon. Klaviyo'da sadece email + SMS." },
  { icon: TrendingUp, title: "RFM + predictive segment", desc: "Recency, frequency, monetary dinamik segment. Churn risk skoru, lifetime value tahmini, next best offer önerisi." },
  { icon: ShieldCheck, title: "İYS izin kontrolü + KVKK akışı", desc: "Her gönderim öncesi izin kontrolü. Açık rıza akışı ve veri silme talep yönetimi KVKK gerekliliklerini dikkate alarak kurgulanır; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir (sunucu gideri hizmet bedeline dahil değildir)." },
  { icon: MessageCircle, title: "WhatsApp Business API resmi", desc: "Meta'nın resmi WhatsApp Business API'si üzerinden. Cart abandonment, sipariş takibi, kargo bildirimi WhatsApp şablonlarıyla otomatik gider." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile Türkçe destek. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir; Türkçe video kütüphanesi." }
];

const faqs = [
  {
    q: "Klaviyo gerçekten pahalı mı? Free tier var değil mi?",
    a: "Klaviyo 250 aktif profile kadar ücretsiz, küçük testler için yeterli. Aktif profil sayısı arttıkça fatura basamak basamak büyür. SMS modülü ayrı kredi sistemiyle gelir, push notification ayrı paket. Çok kanallı strateji izleyen Türk e-ticaret markalarında aylık toplam iletişim gideri hızla yükselir. PORTZEN aynı kapsamı KVKK gerekliliklerini (açık rıza, aydınlatma akışı) dikkate alarak ve Türkçe destekle kurar. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "Cart abandonment akışını PORTZEN'de nasıl kurulur?",
    a: "Shopify / WooCommerce / T-Soft / Ideasoft / Ticimax cart event'leri n8n üzerinden PORTZEN'e webhook ile akar. Tipik 3 adımlı akış: 1. saat WhatsApp Business API (ürün görseli + direkt sepet linki), 24. saat e-mail (alternatif ürün önerileri + sosyal kanıt), 72. saat SMS (kupon kodu ile son hatırlatma). Türkçe şablonlar hazır gelir ve Meta şablon onayından geçirilir; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  {
    q: "Klaviyo'dan veri taşıma mümkün mü?",
    a: "Evet. Klaviyo Public API üzerinden tüm profiller, segmentler, flow'lar, metric verisi, gönderim geçmişi ve form datası çekilir. Flow'lar PORTZEN'in workflow editöründe yeniden kurulur (kopya değil, optimize edilerek). Segment kriterleri ve etiketler korunur. Taşıma süresi profil, flow ve entegrasyon kapsamına göre teklifte yazılı olarak belirtilir. Geçiş sürecinde Klaviyo paralel çalışmaya devam edebilir, böylece kesinti riski en aza iner."
  },
  {
    q: "Türk e-ticaret platformlarına entegre mi?",
    a: "T-Soft, Ideasoft, Ticimax, Shopify, WooCommerce, Magento, Opencart için hazır connector vardır. Trendyol, Hepsiburada, N11, Çiçeksepeti gibi pazaryerleri için n8n köprüsü kurulur, sipariş ve müşteri verisi otomatik akar. Klaviyo'da Türk pazaryerleri için native entegrasyon yoktur, custom API ile çözmeniz gerekir."
  },
  {
    q: "RFM segmentasyon ve predictive analytics var mı?",
    a: "Evet. PORTZEN Büyüme ve Kurumsal kurulumlarda; recency (son alışveriş tarihi), frequency (alışveriş sıklığı), monetary (toplam harcama) değerlerine göre dinamik segment oluşturur. Üzerine lifetime value tahmini, churn risk skoru (60/90 günde ayrılma olasılığı), next best offer önerisi ve replenishment cycle tahmini gelir. Klaviyo'nun Predictive Analytics özelliklerinin pratik karşılığıdır."
  },
  {
    q: "WhatsApp ve SMS dahil mi, ek modül mü?",
    a: "Email + resmi WhatsApp Business API + SMS aynı altyapıda gelir, ek modül lisansı yoktur. Üç kanal aynı flow editöründe orkestre edilir. Klaviyo'nun SMS modülü ayrı kredi gerektirir (ülke bazlı fiyat), WhatsApp ise henüz native değildir; üçüncü parti BSP entegrasyonu ister. PORTZEN üç kanalı tek akışta yönetir; WhatsApp (Meta) ve SMS mesaj ücretleri hizmet bedeline dahil değildir, teklifte ayrıca belirtilir."
  },
  {
    q: "Teslim oranı ve domain yönetimi nasıl?",
    a: "Gönderim domaini için SPF, DKIM ve DMARC DNS kayıtları kurulum aşamasında yapılır. Backend olarak Resend, Amazon SES veya Brevo kullanılır; teslim oranı domain doğrulaması, liste kalitesi ve gönderim servisine göre değişir ve düzenli izlenir. Spam puanı, inbox placement, bounce ve complaint oranı haftalık raporlanır. Adanmış IP ve ısıtma süreci gerekiyorsa teklifte ayrıca belirtilir; gönderim servisi ücretleri hizmet bedeline dahil değildir."
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
              <span className="text-ink">Klaviyo Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Klaviyo Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Klaviyo Alternatifi: E-Ticaret Otomasyonu KVKK Odaklı ve Türkçe Destekli
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Klaviyo profil bazlı USD üzerinden ücretlendirir; profil sayısı arttıkça fatura hızla büyür. PORTZEN; cart abandonment, post-purchase, win-back, RFM segmentasyon ve WhatsApp + email + SMS karması akışları KVKK gerekliliklerini dikkate alarak, Türkçe destekle ve brief bazlı kurar.
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
                    href="/crm-otomasyonu/e-ticaret"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    E-Ticaret CRM <ArrowUpRight className="h-4 w-4" />
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
                Klaviyo&apos;nun Türk e-ticareti için 6 zayıf yönü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Klaviyo global lider, ama Türkiye e-ticareti için fazla pahalı ve kanal eksikli.
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
                Klaviyo vs PORTZEN - 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Klaviyo</th>
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
                          <span className="text-xs">{row.manychat}</span>
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
              <strong>Not:</strong> Karşılaştırma genel bilgilendirme amaçlıdır; Klaviyo özellikleri ve fiyatları değişebilir, güncel bilgi için resmi sayfasını kontrol edin.
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
                Taşıma süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Klaviyo&apos;dan 4 adımda nasıl çıkarsınız?
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
                E-ticaret için Klaviyo&apos;da olmayan 6 yetenek
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

      {/* 6. USE CASE */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: DTC kozmetik markası
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Klaviyo&apos;dan PORTZEN&apos;e örnek bir geçiş kurulumu: sepet hatırlatması e-posta, WhatsApp ve SMS&apos;te tek akışta.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda Shopify mağazası olan ve Klaviyo kullanan bir DTC kozmetik markası düşünelim. Marka düzenli kampanya gönderiyor; profil bazlı USD ücretlendirme ve ayrı SMS modülü nedeniyle iletişim bütçesini öngörmekte zorlanıyor.
                </p>
                <p>
                  Bu tür kurulumlarda tipik 3 sıkıntı görülür: (1) Cart abandonment akışı yalnızca e-posta + SMS ile çalışır, WhatsApp kullanılmaz, (2) Trendyol mağazası vardır ama müşteri verisi Klaviyo&apos;ya aktarılamaz, segmentasyon yalnızca Shopify verisiyle yapılır, (3) KVKK aydınlatma akışı manueldir, İYS izin kontrolü ayrı bir script ile yapılır.
                </p>
                <p>
                  Örnek kurulumda Klaviyo API üzerinden profiller, segmentler ve flow&apos;lar taşınır. Shopify + Trendyol n8n köprüsü kurulur, müşteri ve sipariş verisi çift yönlü senkronize edilir (Trendyol siparişi de PORTZEN segmentlerine düşer). Cart abandonment akışı çok kanallı kurulur: 1. saat WhatsApp (ürün görseli + sepet linki), 24. saat e-posta (alternatif öneriler), 72. saat SMS (kupon kodu). İYS entegrasyonu kurulur, izinsiz adresler gönderim listesinden ayıklanır.
                </p>
                <p>
                  İş akışında değişen: sepetini bırakan müşteriye hatırlatma üç kanaldan sırayla gider, iletişim altyapısı tek panelde toplanır, izin ve rıza kayıtları raporlanabilir formatta tutulur. Sipariş ve kargo sorularına WhatsApp&apos;tan serbest metinle yanıt veren yapay zeka ise AI müşteri asistanı kapsamındadır (ayrı hizmet).
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Cart abandonment</div>
                  <div className="font-display text-4xl font-black mb-1">3 adım</div>
                  <div className="text-sm">WhatsApp → e-posta → SMS hatırlatma sırası</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">WhatsApp altyapısı</div>
                  <div className="font-display text-4xl font-black mb-1">Resmi API</div>
                  <div className="text-sm">Meta&apos;nın WhatsApp Business API&apos;si üzerinden</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kanal sayısı</div>
                  <div className="font-display text-4xl font-black text-ink">1 → 3</div>
                  <div className="text-sm">Email + WhatsApp + SMS tek panelde</div>
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
                Klaviyo&apos;dan geçmeden önce merak edilenler
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
                <Mail className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Mailchimp vs Klaviyo</h3>
                <p className="text-sm opacity-85 mb-3">
                  Iki büyük rakibin yan yana karşılaştırması, hangisi hangi senaryoya uyar.
                </p>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Blog Karşılaştırma <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <ShoppingCart className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">E-ticaret CRM detayı</h3>
                <p className="text-sm opacity-85 mb-3">
                  E-ticaret odaklı CRM otomasyonu, modüller ve örnek senaryolar.
                </p>
                <Link href="/crm-otomasyonu/e-ticaret" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  E-Ticaret CRM <ArrowUpRight className="h-3.5 w-3.5" />
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
                Klaviyo&apos;dan modern altyapıya geçelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Klaviyo kurulumunuzu, aktif profil sayınızı ve flow&apos;larınızı analiz ediyoruz. Hangi akışların PORTZEN&apos;de daha güçlü kurulabileceğini netleştiriyor, iyileşme alanlarını ve dönüşüm potansiyelini raporluyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
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
                <Link href="/crm-otomasyonu/e-ticaret" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  E-Ticaret CRM <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/abandoned-cart-email-sablonlari" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Sepet Bırakma Şablonları <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Mailchimp vs Klaviyo <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/mailchimp-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Mailchimp Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
