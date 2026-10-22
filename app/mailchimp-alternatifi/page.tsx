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
  Building2,
  TrendingUp,
  Mail,
  Inbox
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";
import { PricingSection } from "@/components/pricing/PricingSection";

export const metadata: Metadata = {
  title: "Mailchimp Alternatifi | Türk KOBİ İçin Email Otomasyonu - PORTZEN",
  description:
    "Mailchimp KVKK uyumu sizde, Türkçe destek yok. PORTZEN; Brevo / Resend backend, dinamik segment, İYS izin kontrolü ve KVKK gerekliliklerini dikkate alan email otomasyonu kurar.",
  keywords: [
    "mailchimp alternatifi",
    "mailchimp türkçe",
    "email pazarlama yazılımı",
    "kvkk uyumlu email",
    "brevo alternatif",
    "mailerlite türkçe",
    "kobi email otomasyon",
    "transactional email türkiye"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/mailchimp-alternatifi",
    siteName: "PORTZEN",
    title: "Mailchimp Alternatifi | Türk KOBİ İçin Email Otomasyonu - PORTZEN",
    description:
      "Mailchimp yerine KVKK gerekliliklerini dikkate alan, Türkçe destekli, İYS entegre email otomasyonu."
  },
  twitter: {
    card: "summary_large_image",
    title: "Mailchimp Alternatifi | PORTZEN",
    description:
      "Türk KOBİ için tasarlanmış, İYS izin kontrollü, KVKK gerekliliklerini dikkate alan email otomasyonu."
  },
  alternates: { canonical: "https://portzenai.com/mailchimp-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mailchimp Alternatifi - PORTZEN Email Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "Email Marketing Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Mailchimp'in sınırlı KVKK uyumu ve İngilizce desteği yerine PORTZEN; Türkçe arayüz, İYS entegrasyonu ve dinamik segment destekli email otomasyonu sunar."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mailchimp'in Essentials planı ucuz görünüyor, neden alternatif?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mailchimp Essentials kişi başına ücretlendirir; liste büyüdükçe fatura katlanır. Otomasyon journey sayısı kısıtlı, gelişmiş segmentasyon ve A/B test Standard / Premium plana özel. PORTZEN'de bu özellikler plan kilidine bağlı değildir; kurulacak iş akışı ve uygulama bağlantısı sayısı seçilen pakete göre belirlenir."
      }
    },
    {
      "@type": "Question",
      name: "Domain doğrulama ve teslim oranı nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN kurulumunda domain için SPF, DKIM, DMARC kayıtları yapılır. Backend olarak Resend / Amazon SES / Brevo kullanılır; teslim oranı domain doğrulaması, liste kalitesi ve gönderim servisine göre değişir. Spam puanı ve inbox placement haftalık raporlanır."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Mailchimp listemi taşıyabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Mailchimp'ten CSV export ile kişi, segment ve tag bilgileri çekilir, PORTZEN'e taşınır. Otomasyon journey'leri PORTZEN'in workflow editöründe yeniden kurulur. İYS izin kontrolü taşıma sırasında otomatik yapılır."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe şablon ve eğitim var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN içerisinde Türkçe email şablonları (welcome, sepet bırakma, post-purchase, win-back, doğum günü, kampanya) hazır gelir. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir; Türkçe video kütüphanesi de sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Transactional email (sipariş onayı, şifre sıfırlama) da gönderebilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. PORTZEN aynı altyapı üzerinden marketing + transactional email gönderir. Resend / SES API ile uygulamanız PORTZEN'e bağlanır, kullanıcı işlemlerinde otomatik mail tetiklenir. Mailchimp Transactional (Mandrill) ayrı lisans gerektirir; PORTZEN'de aynı altyapıda kurulur, gönderim servisi ücreti hizmet bedeline dahil değildir."
      }
    },
    {
      "@type": "Question",
      name: "Shopify, WooCommerce, Trendyol entegrasyonu var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Shopify, WooCommerce, T-Soft, Ideasoft, Ticimax gibi platformlar için hazır entegrasyon mevcut. n8n köprüsü ile Trendyol, Hepsiburada, N11 sipariş verisi PORTZEN'e akar, müşteri otomatik segmentlenir."
      }
    },
    {
      "@type": "Question",
      name: "KVKK ve İYS uyumu nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Her gönderim öncesi İYS izni kontrol edilir, izinsiz adres listeden düşer. Açık rıza alma akışı, izin iptal linki, KVKK aydınlatma metni şablonu ve veri silme talep yönetimi paket dahildir. Mailchimp'te tüm bunlar sizin sorumluluğunuzdadır."
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
      name: "Mailchimp Alternatifi",
      item: "https://portzenai.com/mailchimp-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Sabit", label: "Kur riskinden bağımsız" },
  { metric: "SPF/DKIM", label: "Domain doğrulaması kurulumda" },
  { metric: "İYS", label: "Otomatik izin kontrolü" },
  { metric: "CSV + API", label: "Mailchimp'ten taşıma" }
];

const painPoints = [
  {
    title: "Dolar bazlı fatura, kur riski",
    desc: "Mailchimp aylık faturası USD üzerinden gelir. Türk müşteri için kur dalgalanmasında bütçe sürprizi yaratır."
  },
  {
    title: "Kişi başına ödeme",
    desc: "Liste büyüdükçe fatura katlanır. Essentials plan basamakları kısıtlıdır, Standard'a çıkmadan gelişmiş özellikler açılmaz."
  },
  {
    title: "KVKK uyumu sizde",
    desc: "Mailchimp ABD/AB sunucu kullanır. KVKK aydınlatma, açık rıza akışı, veri silme süreçleri sizin sorumluluğunuzdadır."
  },
  {
    title: "İYS entegrasyonu yok",
    desc: "İYS ile native entegrasyon yoktur. İzin kontrolü için ayrı script veya manuel CSV süreci kurmanız gerekir."
  },
  {
    title: "Türkçe destek zayıf",
    desc: "Live chat sadece İngilizce, dokümantasyon büyük ölçüde İngilizce. Türkçe destek seçeneği plana özel ve sınırlı."
  },
  {
    title: "Türk e-ticaret entegrasyonu yok",
    desc: "T-Soft, Ideasoft, Ticimax, Trendyol, Hepsiburada için resmi connector yoktur. Custom integration gerektirir."
  }
];

const comparisonRows = [
  { feature: "Ticari model", manychat: "Kişi başı + USD abonelik", portzen: "Kapsam bazlı, brief görüşmesinde net" },
  { feature: "Faturalama modeli", manychat: "USD, kur riski", portzen: "Yerel çalışma modeli, sabit paket" },
  { feature: "İYS entegrasyonu", manychat: "Yok", portzen: "Native, otomatik" },
  { feature: "KVKK aydınlatma + açık rıza akışı", manychat: "Yok (sizde)", portzen: "Şablon + akış dahil" },
  { feature: "Türkçe canlı destek", manychat: "Plana özel + sınırlı", portzen: "Tüm paketlerde dahil" },
  { feature: "T-Soft / Ideasoft / Ticimax entegre", manychat: "Yok", portzen: "Hazır + n8n köprü" },
  { feature: "Trendyol / Hepsiburada veri akışı", manychat: "Yok", portzen: "n8n ile otomatik" },
  { feature: "Transactional email", manychat: "Mandrill ek lisans", portzen: "Aynı altyapıda kurulur" },
  { feature: "Dinamik segment + RFM", manychat: "Premium plana özel", portzen: "Plan kilidi yok, kurulum kapsamında" },
  { feature: "Türkçe şablon kütüphanesi", manychat: "Yok", portzen: "Hazır 25+ şablon" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "Veri taşıma",
    description: "Mailchimp listeleri, segmentler, tag'ler ve otomasyon akışları envanteri çıkarılır."
  },
  {
    icon: Sparkles,
    title: "Domain + kurulum",
    description: "SPF / DKIM / DMARC kayıtları, gönderim domaini, IP reputation kontrolü tamamlanır."
  },
  {
    icon: Mail,
    title: "Şablon + otomasyon",
    description: "Welcome, sepet bırakma, post-purchase, win-back, doğum günü akışları Türkçe şablonlarla kurulur."
  },
  {
    icon: CheckCircle2,
    title: "Canlıya alış",
    description: "Pilot kampanya ile teslim oranı ve açılma testi, sonra tüm liste devreye alınır."
  }
];

const features = [
  { icon: Mail, title: "Yerel çalışma modeli", desc: "Sabit paket mantığı, TL fiyat (KDV hariç), e-Arşiv fatura. USD kur riski yok, bütçe öngörülebilir." },
  { icon: Inbox, title: "Transactional + Marketing tek yer", desc: "Sipariş onayı, şifre sıfırlama, fatura mailleri ve kampanyalar aynı altyapıdan yönetilir; gönderim servisi ücreti ayrıdır." },
  { icon: TrendingUp, title: "Dinamik segment + RFM", desc: "Davranış, sıklık ve sepet tutarına göre dinamik segment. Mailchimp'te Premium plana özel; PORTZEN'de plan kilidi yoktur." },
  { icon: ShieldCheck, title: "İYS izin kontrolü + KVKK akışı", desc: "Her gönderim öncesi İYS izin kontrolü, aydınlatma metni şablonu, veri silme talep yönetimi dahil." },
  { icon: Building2, title: "Türk e-ticaret entegrasyonları", desc: "T-Soft, Ideasoft, Ticimax, Shopify, WooCommerce için hazır connector. Trendyol / Hepsiburada n8n köprüsü." },
  { icon: HeadphonesIcon, title: "Türkçe destek + eğitim", desc: "WhatsApp + telefon ile Türkçe canlı destek. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahil; Türkçe video kütüphanesi." }
];

const faqs = [
  {
    q: "Mailchimp'in Essentials planı ucuz görünüyor, neden alternatif?",
    a: `Mailchimp Essentials kişi başına ücretlendirir; liste büyüdükçe fatura basamak basamak katlanır. Üstelik otomasyon journey sayısı kısıtlı, gelişmiş segmentasyon, multivariate test, predictive segmentation gibi özellikler Standard / Premium plana özeldir. PORTZEN'de bu özellikler plan kilidine bağlı değildir; kurulacak iş akışı ve uygulama bağlantısı sayısı seçilen pakete göre belirlenir. PORTZEN iş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}.`
  },
  {
    q: "Domain doğrulama ve teslim oranı nasıl?",
    a: "PORTZEN kurulumunda gönderim domaini için SPF, DKIM ve DMARC DNS kayıtları yapılır. Backend olarak Resend, Amazon SES veya Brevo kullanılır; teslim oranı domain doğrulaması, liste kalitesi ve gönderim servisine göre değişir ve düzenli izlenir. Spam puanı, inbox placement, bounce ve complaint oranı haftalık raporlanır. IP reputation izlenir, sorun anında uyarı çıkar."
  },
  {
    q: "Mevcut Mailchimp listemi taşıyabilir miyim?",
    a: "Evet. Mailchimp'ten CSV export ile kişi listeleri, segmentler, tag'ler ve gönderim geçmişi çekilir, PORTZEN'e import edilir. Otomasyon journey'leri (welcome, sepet bırakma, post-purchase vb.) PORTZEN'in workflow editöründe yeniden kurulur. Taşıma sırasında İYS izin kontrolü otomatik yapılır, izinsiz adresler ayıklanır."
  },
  {
    q: "Türkçe şablon ve eğitim var mı?",
    a: "Evet. PORTZEN içinde 25+ Türkçe email şablonu hazır gelir: welcome serisi (3 adımlı), sepet bırakma (3 adımlı), post-purchase teşekkür, çapraz satış, win-back (30/60/90 gün), doğum günü, kampanya duyurusu, ürün önerisi, anket. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir; Türkçe video kütüphanesi de sunulur."
  },
  {
    q: "Transactional email (sipariş onayı, şifre sıfırlama) da gönderebilir miyim?",
    a: "Evet. PORTZEN aynı altyapı üzerinden hem marketing hem transactional email gönderir. Resend / SES API ile uygulamanız PORTZEN'e bağlanır, kullanıcı işlemlerinde otomatik mail tetiklenir. Mailchimp'te Transactional (Mandrill) ayrı lisans ve kullanım kredisi gerektirir; PORTZEN'de aynı altyapıda kurulur, gönderim servisi ücreti hizmet bedeline dahil değildir."
  },
  {
    q: "Shopify, WooCommerce, Trendyol entegrasyonu var mı?",
    a: "Evet. Shopify, WooCommerce, T-Soft, Ideasoft, Ticimax, Magento gibi platformlar için hazır connector mevcut. Trendyol, Hepsiburada, N11 gibi pazaryerleri için n8n köprüsü kurulur, sipariş verisi PORTZEN'e akar, müşteri otomatik segmentlenir (sıklık, sepet, kategori). Yeni müşteri = welcome serisi, kayıp müşteri = win-back tetiklenir."
  },
  {
    q: "KVKK ve İYS uyumu nasıl?",
    a: "PORTZEN, İleti Yönetim Sistemi (İYS) ile API üzerinden entegre çalışır. Her gönderim öncesi izin durumu kontrol edilir, izinsiz adres listeden düşer. Açık rıza alma akışı (web form, kasa kasası, double opt-in), izin iptal linki, KVKK aydınlatma metni şablonu, veri silme talep yönetimi paket dahildir. Mailchimp ABD/AB sunucu kullanır, KVKK uyumu tamamen sizin sorumluluğunuzdadır."
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
              <span className="text-ink">Mailchimp Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Mail className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Mailchimp Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Mailchimp Alternatifi: İYS Entegre, Türkçe Email Otomasyonu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Mailchimp dolar üzerinden faturalanır, kişi başına ücret artar, KVKK uyumu sizde, Türkçe destek zayıftır. PORTZEN; İYS entegre, dinamik segment destekli, transactional + marketing email otomasyonunu tek altyapıda sunar.
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
                    href="/crm-otomasyonu"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    CRM Otomasyonu <ArrowUpRight className="h-4 w-4" />
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
                Mailchimp&apos;in Türk KOBİ için 6 zayıf yönü
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Mailchimp global standart, ama yerel uyum tarafı sancılı.
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
                Mailchimp Standard vs PORTZEN - 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Mailchimp Standard</th>
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
              <strong>Kaynak:</strong> Mailchimp özellik ve plan bilgileri mailchimp.com&apos;dan derlenmiştir; plan ve fiyatlar değişebilir, güncel bilgi için resmi sayfayı kontrol edin.
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
                Mailchimp&apos;ten 4 adımda nasıl çıkarsınız?
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
                Mailchimp&apos;te ek lisans gereken 6 özellik
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
              Örnek senaryo: moda perakende markası
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Mailchimp Standard&apos;dan PORTZEN&apos;e örnek bir geçiş kurulumu.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda Mailchimp Standard planı kullanan bir moda perakende markası düşünelim. Liste büyüyor; welcome, sepet bırakma, post-purchase ve win-back otomasyonları çalışıyor, düzenli kampanya gönderiliyor.
                </p>
                <p>
                  Bu tür kurulumlarda tipik 3 sıkıntı görülür: (1) Kişi sayısı arttıkça USD fatura kur farkıyla büyür, (2) İYS entegrasyonu olmadığı için izinli/izinsiz takibi manuel CSV ile yapılır, (3) Shopify entegrasyonu vardır ama Trendyol mağazasındaki müşteri verisi sisteme akmaz, segmentasyon eksik kalır.
                </p>
                <p>
                  Örnek kurulumda Mailchimp&apos;ten kişi listeleri, segmentler ve gönderim geçmişi taşınır; İYS izin kontrolü taşıma sırasında otomatik yapılır ve izinsiz adresler ayıklanır. Shopify + Trendyol n8n köprüsü ile çift yönlü senkronize edilir. Türkçe şablonlar (welcome 3 adım, sepet bırakma 3 adım, post-purchase, çapraz satış, win-back 30/60/90, doğum günü, VIP) kurulur.
                </p>
                <p>
                  İş akışında değişen: kampanya ve otomasyon e-postaları Türkçe şablonlarla, segmentlere göre gider; her gönderim öncesi İYS izni otomatik kontrol edilir; Trendyol ve Shopify müşterileri aynı segmentlerde toplanır. Transactional e-postalar da aynı altyapıdan yönetilir (gönderim servisi ücreti hizmet bedeline dahil değildir).
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İzin kontrolü</div>
                  <div className="font-display text-4xl font-black mb-1">İYS</div>
                  <div className="text-sm">Her gönderim öncesi otomatik</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Şablonlar</div>
                  <div className="font-display text-4xl font-black text-ink">Türkçe</div>
                  <div className="text-sm">Welcome, sepet, win-back, doğum günü</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kurulum</div>
                  <div className="font-display text-4xl font-black text-ink">Tek seferlik</div>
                  <div className="text-sm">Liste, segment ve akışlar taşınır</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="is-otomasyonu" heading="E-posta ve iş otomasyonu fiyatları" intro="E-posta akışları iş otomasyonu paketleriyle kurulur. Kurulum tek seferliktir; isteğe bağlı aylık bakım ikinci aydan itibaren başlar. Gönderim servisi ve harici yazılım lisansları hariçtir. Tutarlar TL ve KDV hariçtir." />

      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Mailchimp&apos;ten geçmeden önce merak edilenler
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
                <Inbox className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Mailchimp vs Klaviyo karar?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Iki büyük rakibin yan yana karşılaştırması, hangisi hangi senaryoya uyar.
                </p>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Blog Karşılaştırma <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Mail className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Klaviyo da pahalı geliyorsa?</h3>
                <p className="text-sm opacity-85 mb-3">
                  E-ticaret için Klaviyo&apos;ya TL bazlı, kapsamı yazılı bir alternatif.
                </p>
                <Link href="/klaviyo-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Klaviyo Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                Mailchimp&apos;ten Türkçe, İYS entegre bir kuruluma geçelim.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde mevcut Mailchimp listenizi, otomasyon akışlarınızı ve gönderim verinizi analiz ediyoruz. Hangi şablonların PORTZEN&apos;de Türkçeleşeceğini, hangi entegrasyonların ekleneceğini ve net rakamı bu görüşmede paylaşıyoruz.
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
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/email-pazarlama-otomasyonu-rehber" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Email Pazarlama Rehberi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/blog/mailchimp-vs-klaviyo-email" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: Mailchimp vs Klaviyo <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/klaviyo-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Klaviyo Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
