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
  CreditCard,
  TrendingUp,
  Wallet,
  Banknote
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "iyzico Alternatifi | Düşük Komisyonlu Ödeme Sistemleri - PORTZEN",
  description:
    "iyzico komisyonu yüksek geliyor mu? PayTR, Garanti Sanal POS, Param ve Stripe TR karşılaştırması. Doğru ödeme sağlayıcısı seçimi ve sitenize entegrasyonu PORTZEN ile.",
  keywords: [
    "iyzico alternatifi",
    "düşük komisyonlu ödeme sistemi",
    "paytr iyzico karşılaştırma",
    "sanal pos sağlayıcısı",
    "stripe türkiye",
    "param pos",
    "ödeme entegrasyonu",
    "eticaret ödeme sistemi"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/iyzico-alternatifi",
    siteName: "PORTZEN",
    title: "iyzico Alternatifi | Düşük Komisyonlu Ödeme Sistemleri - PORTZEN",
    description:
      "iyzico komisyonu yüksek geldi mi? PayTR, Garanti Sanal POS, Param ve Stripe karşılaştırması ve sitenize entegrasyon."
  },
  twitter: {
    card: "summary_large_image",
    title: "iyzico Alternatifi | PORTZEN",
    description:
      "İşletmenize uygun ödeme sağlayıcısı seçimi ve sitenize hızlı entegrasyon."
  },
  alternates: { canonical: "https://portzenai.com/iyzico-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "iyzico Alternatifi, Ödeme Sağlayıcı Seçimi ve Entegrasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  serviceType: "Payment Gateway Integration",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "İşletmenizin cirosuna, ürün tipine ve kurguladığınız ödeme akışına göre PayTR, Garanti Sanal POS, Param, Stripe TR veya iyzico arasından doğru sağlayıcı seçimi ve web sitenize entegrasyonu."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "iyzico komisyonu gerçekten yüksek mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "iyzico standart komisyonu taksitli işlemde daha yükselir. KOBİ ölçeğinde mantıklı olabilir, fakat yüksek cirolu markalar için Garanti Sanal POS veya PayTR ile pazarlık yapılabilir. Fiyat brief görüşmesinde net paylaşılıyor."
      }
    },
    {
      "@type": "Question",
      name: "PayTR ile iyzico arasındaki temel fark nedir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PayTR Türkiye merkezli, aynı gün havale ile öne çıkar. iyzico ise abonelik ve hatırlatma ödeme akışlarında, marketplace çok satıcı yapılarında daha gelişmiş. Tercih iş modeline bağlıdır."
      }
    },
    {
      "@type": "Question",
      name: "Stripe Türkiye'de gerçek bir seçenek mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stripe Türkiye'de yerel BDDK lisansıyla resmen yok, fakat yurt dışı şirketi (Estonya e-Residency, Delaware LLC, Birleşik Krallık Ltd) kuran ihracatçı markalar için kullanılır. Yurt içi satışta yerel sağlayıcı tercih edilmelidir."
      }
    },
    {
      "@type": "Question",
      name: "Garanti Sanal POS bireysel işletme için açılır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Açılır, fakat bankanın iç değerlendirmesi katıdır. Şahıs şirketleri için ciro talebi ve teminat istenebilir. Limited şirket veya AŞ statüsünde aktif vergi mükellefliği olan işletmeler daha hızlı onay alır."
      }
    },
    {
      "@type": "Question",
      name: "PORTZEN ödeme sistemi geliştiriyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır, PORTZEN ödeme kuruluşu değildir. Mevcut sağlayıcılar arasından işletmenize en uygun olanı seçer, sözleşme sürecinde danışmanlık verir, web sitenize ve CRM'inize entegre eder."
      }
    },
    {
      "@type": "Question",
      name: "Birden fazla ödeme sağlayıcı kullanılabilir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Bir sağlayıcının onaylamadığı kart için diğerine fallback yapılabilir, taksitli işlemde uygun sağlayıcıya yönlendirilebilir. Çoklu sağlayıcı kurulumu PORTZEN paketinde standart."
      }
    },
    {
      "@type": "Question",
      name: "PCI DSS uyumluluğu beni nasıl etkiler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Modern sağlayıcılar (iyzico, PayTR, Param) tokenizasyon ile kart bilgilerini sitenizde saklamadan işler. PCI DSS uyumluluk yükü sağlayıcıdadır. Geleneksel sanal POS entegrasyonunda kart bilgisi sitenizden geçerse PCI DSS sizin sorumluluğunuza geçer."
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
      name: "iyzico Alternatifi",
      item: "https://portzenai.com/iyzico-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Multi-PSP", label: "Çoklu sağlayıcı routing" },
  { metric: "5 sağlayıcı", label: "Karşılaştırmalı seçim" },
  { metric: "7 gün", label: "Entegrasyon süresi" },
  { metric: "PCI DSS", label: "Tokenizasyon ile uyum" }
];

const painPoints = [
  {
    title: "Standart komisyon yüksek",
    desc: "iyzico standart komisyonu taksitli işlemlerde daha da yükselir. Yüksek cirolu markalar için ciddi bir fark oluşturur."
  },
  {
    title: "Pazarlık sınırlı",
    desc: "iyzico ciroya göre indirim verir, ama bankaların doğrudan sanal POS pazarlığı veya PayTR seviyesi tutturmak çoğu zaman mümkün değildir."
  },
  {
    title: "Para erişim süresi",
    desc: "Standart pakette para hesabınıza T+1 ile T+2 arasında geçer. Hızlı erişim ek koşullara bağlı olabilir. Garanti Sanal POS aynı gün havale yapar."
  },
  {
    title: "Yurt dışı satış için yetersiz",
    desc: "iyzico yabancı para birimi işlemi kabul eder ama yurt dışı kartlar için reddedilme oranı yüksek olabilir. İhracat yapan markalar için Stripe gibi global çözüm daha uygundur."
  },
  {
    title: "Subscription modeli karmaşık",
    desc: "Abonelik satan SaaS işletmeleri için iyzico'nun hatırlatma ödeme akışı stabil ama kurulum karmaşık. Stripe ya da PayTR abonelik modülü daha pratik olabilir."
  },
  {
    title: "Çağrı merkezi destek geç",
    desc: "iyzico Türkçe destek sunar, ama acil talep veya tehlikeli işlem sorgusu için bekleme süresi uzun olabilir."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", iyzico: "Sabit komisyon", portzen: "Brief'te belirlenir" },
  { feature: "Para erişim süresi", iyzico: "T+1, T+2", portzen: "Sağlayıcıya göre aynı gün" },
  { feature: "Yurt dışı kart kabulü", iyzico: "Yüksek red oranı", portzen: "Stripe TR ihracat odaklı" },
  { feature: "Abonelik modülü", iyzico: "Karmaşık kurulum", portzen: "Stripe veya PayTR ile sade" },
  { feature: "Çoklu sağlayıcı routing", iyzico: "Tek sağlayıcı", portzen: "Multi-PSP fallback dahil" },
  { feature: "Taksit yapısı", iyzico: "Sınırlı esneklik", portzen: "Banka pazarlığı ile esnek" },
  { feature: "PCI DSS yükü", iyzico: "Sağlayıcıda", portzen: "Tokenizasyon ile sizden alınır" },
  { feature: "KOBİ onay süresi", iyzico: "Hızlı (1, 2 gün)", portzen: "Sağlayıcıya göre 1 ile 7 gün" },
  { feature: "Marketplace çok satıcı", iyzico: "Güçlü", portzen: "iyzico veya Param tercih edilir" },
  { feature: "CRM ve e-fatura entegre", iyzico: "Sınırlı", portzen: "Logo/Mikro/Netsis hazır" }
];

const solutionSteps = [
  {
    icon: Users,
    title: "İşletme analizi",
    description: "Aylık cironuzu, ortalama sepet tutarınızı, taksit oranınızı, yurt dışı satış payınızı analiz ediyoruz. Hangi sağlayıcının size en uygun olduğunu netleştiriyoruz."
  },
  {
    icon: Sparkles,
    title: "Sağlayıcı pazarlığı",
    description: "Garanti, Akbank, İş Bankası sanal POS ekibi, PayTR ve iyzico kurumsal kanalları ile komisyon pazarlığını sizin adınıza yürütüyoruz."
  },
  {
    icon: BookOpen,
    title: "Entegrasyon",
    description: "Seçilen sağlayıcı(lar) web sitenize, CRM'inize ve e-fatura sisteminize 7 gün içinde entegre edilir. Test ortamı ve canlı geçiş yönetimi dahil."
  },
  {
    icon: CheckCircle2,
    title: "Optimizasyon",
    description: "Üç ayda bir reddedilen işlem analizi, komisyon raporu ve sağlayıcı performans karşılaştırması. Gerekiyorsa pazarlık yenilemesi."
  }
];

const features = [
  { icon: CreditCard, title: "Çoklu sağlayıcı routing", desc: "Akıllı yönlendirme ile kart bin numarasına göre en uygun sağlayıcıya işlem düşer. Reddedilen işlem fallback ile diğer sağlayıcıya iletilir." },
  { icon: TrendingUp, title: "Komisyon pazarlığı", desc: "Cironuzu kullanarak Garanti Sanal POS, PayTR ve Param ile komisyon pazarlığını sizin adınıza yürütüyoruz." },
  { icon: Wallet, title: "Para erişim hızı", desc: "Sağlayıcı seçimi para erişim hızınızı belirler. Aynı gün havale, T+1 veya T+2 seçenekleri arasında işletmenize uygun olanı seçiyoruz." },
  { icon: ShieldCheck, title: "PCI DSS tokenizasyon", desc: "Kart bilgileri sitenizde saklanmaz, sağlayıcıda token olarak tutulur. PCI DSS uyumluluk yükü tamamen sağlayıcıdadır." },
  { icon: Building2, title: "Logo/Mikro/Netsis entegre", desc: "Başarılı ödeme sonrası otomatik e-Arşiv fatura kesilir, muhasebe sisteminize sync edilir. Manuel veri girişi sıfırlanır." },
  { icon: Banknote, title: "Marketplace ve abonelik", desc: "Çok satıcı pazaryeri için iyzico veya Param, abonelik SaaS için Stripe TR veya PayTR. İş modeline göre kurulum yapılır." }
];

const faqs = [
  {
    q: "iyzico komisyonu gerçekten yüksek mi?",
    a: "iyzico standart komisyonu taksitli işlemde daha yükselir. KOBİ ölçeğinde entegrasyon kolaylığı ve müşteri desteği bedeli karşılayabilir. Fakat yüksek cirolu markalar için Garanti Sanal POS veya PayTR ile doğrudan pazarlık yapılarak daha uygun bir yapı kurulabilir. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "PayTR ile iyzico arasındaki temel fark nedir?",
    a: "PayTR Türkiye merkezli, aynı gün havale opsiyonu ve daha esnek KOBİ onay süreci ile öne çıkar. iyzico ise abonelik ve hatırlatma ödeme akışlarında, marketplace çok satıcı yapılarında (örneğin Trendyol satıcı modeli) daha gelişmiş bir altyapı sunar. Tercih iş modeline ve cironuza bağlıdır."
  },
  {
    q: "Stripe Türkiye'de gerçek bir seçenek mi?",
    a: "Stripe Türkiye'de yerel BDDK lisansıyla resmen yoktur. Fakat yurt dışı şirketi (Estonya e-Residency, Delaware LLC, Birleşik Krallık Limited) kuran ihracatçı markalar, SaaS girişimcileri ve dijital ürün satıcıları için kullanılır. Stripe Atlas ile kurulum, yabancı para hesabı, global kart kabulü, abonelik modülü güçlüdür. Yurt içi satış için yerel sağlayıcı (iyzico, PayTR, Garanti) tercih edilmelidir, yasal sorumluluk dağılımı açıkça net olmalıdır."
  },
  {
    q: "Garanti Sanal POS bireysel işletme için açılır mı?",
    a: "Açılır, fakat bankanın iç değerlendirmesi katıdır. Şahıs şirketleri için ciro talebi ve teminat istenebilir. Limited şirket veya AŞ statüsünde aktif vergi mükellefliği olan işletmeler daha hızlı onay alır. Komisyon yapısı işletmenin riskine, sektörüne ve beklenen cirosuna göre belirlenir. PORTZEN olarak başvuru evrakı hazırlama, müşteri temsilcisi ile pazarlık aşamasında danışmanlık veriyoruz. Fiyat brief görüşmesinde net paylaşılıyor."
  },
  {
    q: "PORTZEN ödeme sistemi geliştiriyor mu?",
    a: "Hayır, PORTZEN ödeme kuruluşu değildir, kart işleme lisansımız yoktur. Görevimiz mevcut sağlayıcılar (iyzico, PayTR, Param, Garanti Sanal POS, Akbank Sanal POS, İş Bankası, Stripe) arasından işletmenize en uygun olanı seçmek, sözleşme sürecinde danışmanlık vermek, web sitenize ve CRM'inize entegre etmektir. Tarafsızız çünkü sağlayıcılardan affiliate komisyonu almıyoruz."
  },
  {
    q: "Birden fazla ödeme sağlayıcı kullanılabilir mi?",
    a: "Evet. Bir sağlayıcının onaylamadığı kart için diğerine fallback yapılabilir (örneğin iyzico'nun reddettiği bir kart PayTR'ye düşer ve başarılı geçer, satış kaybedilmez). Taksitli işlemde uygun sağlayıcıya yönlendirilebilir, yurt dışı kart için Stripe'a yönlendirilebilir. Çoklu sağlayıcı routing kurulumu PORTZEN yaklaşımında standarttır."
  },
  {
    q: "PCI DSS uyumluluğu beni nasıl etkiler?",
    a: "Modern sağlayıcılar (iyzico, PayTR, Param, Stripe) tokenizasyon ile kart bilgilerini sitenizde hiç saklamadan işler; müşteri kart bilgisini sağlayıcının iframe'ine girer, size token döner, siz token ile işlem yaparsınız. Bu kurulumda PCI DSS uyumluluk yükü tamamen sağlayıcıdadır. Geleneksel sanal POS entegrasyonunda (Garanti, Akbank klasik POS) kart bilgisi sitenizden geçerse PCI DSS sertifikasyonu sizin sorumluluğunuza geçer, ciddi bir uyum yükü doğar. PORTZEN tüm kurulumlarında tokenizasyon yöntemini kullanır."
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
              <span className="text-ink">iyzico Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">iyzico Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  iyzico alternatifi, düşük komisyonlu ödeme sistemleri ve doğru seçim
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  iyzico KOBİ ölçeğinde işe yarar, ama yüksek cirolu markalar için komisyon ciddi bir kayba dönüşür. PORTZEN, PayTR, Garanti Sanal POS, Param ve Stripe TR arasından işletmenize en uygun olanı seçer, pazarlığını yürütür, sitenize entegre eder.
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
                    href="/web-tasarim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
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
                iyzico'nun 6 sınırı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                iyzico kötü değil, ama bazı işletmeler için artık optimal değil.
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
                iyzico standart vs PORTZEN ile multi-PSP kurulum
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink shadow-brutal min-w-[700px]">
                <thead>
                  <tr className="bg-ink text-paper">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">iyzico Standart</th>
                    <th className="p-4 text-center font-black uppercase text-xs bg-brand-yellow text-ink">PORTZEN Multi-PSP</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b-2 border-ink/10 bg-paper">
                      <td className="p-4 font-bold text-sm text-ink">{row.feature}</td>
                      <td className="p-4 text-center text-sm text-ink/80">
                        <div className="flex flex-col items-center gap-1">
                          <X className="h-4 w-4 text-red-500" />
                          <span className="text-xs">{row.iyzico}</span>
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
              <strong>Kaynak.</strong> iyzico dokümantasyonu (iyzico.com), PayTR ve Garanti Sanal POS kurumsal pazarlık deneyimleri, Ocak 2026 itibarıyla.
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
                Doğru sağlayıcıyı 7 günde nasıl seçer ve entegre ederiz?
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
                Tek sağlayıcı yerine, akıllı çoklu yapı
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
              Cironuza ve iş modelinize göre doğru sağlayıcı seçimi
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  <strong>İstanbul, yüksek cirolu kozmetik markası.</strong> iyzico'da yüksek komisyon oranıyla çalışıyordu, taksitli işlemlerde daha da artıyordu. PORTZEN analizi: Garanti Sanal POS pazarlığı yapıldı, komisyon anlamlı ölçüde düşürüldü. iyzico fallback olarak tutuldu (Garanti reddederse iyzico'ya düşer, satış kaybı sıfır).
                </p>
                <p>
                  <strong>Ankara, B2B SaaS girişimi.</strong> Abonelik satıyordu, iyzico abonelik modülü kurulumu karmaşık geliyordu. PORTZEN, Stripe Atlas ile Delaware LLC kurulumunu yönlendirdi, Stripe ile otomatik tahsilat akışı kuruldu. Yurt içi satış için PayTR ikincil sağlayıcı olarak entegre edildi, abonelik churn yönetimi kolaylaştı.
                </p>
                <p>
                  <strong>İzmir, butik moda markası.</strong> Taksitli satış payı yüksekti. iyzico taksit yükü artıyordu. PORTZEN, Akbank Sanal POS pazarlığı yaptı, taksit yapısı optimize edildi. Aynı gün havale opsiyonu eklendi, müşteriden gelen para haftalık değil günlük hesaba geçmeye başladı, nakit akışı rahatladı.
                </p>
                <p>
                  <strong>Bursa, ihracat yapan tekstil markası.</strong> Almanya ve Hollanda'dan yurt dışı satış alıyordu, iyzico yurt dışı kart reddi yüksekti, sepet terk oranı ciddi seviyedeydi. PORTZEN, Estonya e-Residency ile Stripe kurulumu yaptı, yabancı para hesabı açıldı, AB kartı kabulü belirgin şekilde arttı, sepet terk düştü.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Fallback routing</div>
                  <div className="font-display text-3xl font-black mb-1">Multi-PSP</div>
                  <div className="text-sm">Reddedilen işlem başka sağlayıcıya düşer, satış kaybı sıfırlanır</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Entegre kanal</div>
                  <div className="font-display text-3xl font-black mb-1">PSP + CRM + e-Fatura</div>
                  <div className="text-sm">Sipariş, tahsilat ve muhasebe tek akışta senkron</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">PCI DSS</div>
                  <div className="font-display text-3xl font-black text-brand-pink">Tokenizasyon</div>
                  <div className="text-sm">Uyumluluk yükü sağlayıcıya devrolur, sitenizde kart saklanmaz</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Ödeme sağlayıcısı seçmeden önce merak edilenler
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
                <h3 className="font-display text-base font-black mb-2">CRM Otomasyonu</h3>
                <p className="text-sm opacity-85 mb-3">
                  Başarılı ödeme sonrası otomatik CRM kaydı, segmente göre kampanya akışı.
                </p>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                <Building2 className="h-6 w-6 text-brand-yellow mb-3" />
                <h3 className="font-display text-base font-black mb-2">Sosyal Medya Ajansı</h3>
                <p className="text-sm opacity-85 mb-3">
                  Ödeme akışı tamamlandı, ziyaretçiyi nereden çekiyorsunuz?
                </p>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all">
                  Sosyal Medya <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-section bg-paper">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Ödeme komisyonunuzu düşürelim, doğru sağlayıcıyı seçelim
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                Kısa bir brief görüşmesinde mevcut iyzico veya başka sağlayıcı sözleşmenizi inceliyoruz. Cironuza, ürün tipinize ve taksit yapınıza göre uygun sağlayıcı ve pazarlık planını çıkarıyoruz.
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
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/sosyal-medya-ajansi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Sosyal Medya Ajansı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/shopier-alternatifi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Shopier Alternatifi <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
