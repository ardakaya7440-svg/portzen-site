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
  Workflow,
  Plug,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Languages,
  Wallet,
  Boxes
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zapier Alternatifi | Türk Uygulamalarına Entegre Otomasyon — PORTZEN",
  description:
    "Zapier'in dolar bağımlılığı yerine n8n + Make + özel kod ile Logo, Mikro, NetGSM, Iyzico entegre otomasyon. KOBİ için; KVKK gereklilikleri dikkate alınarak kurgulanır.",
  keywords: [
    "zapier alternatifi",
    "zapier türkçe",
    "zapier yerine ne",
    "n8n türkiye",
    "make integromat türkçe",
    "logo otomasyon",
    "mikro entegrasyon",
    "iş otomasyonu türkiye"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/zapier-alternatifi",
    siteName: "PORTZEN",
    title: "Zapier Alternatifi | PORTZEN n8n + Make + Özel Kod",
    description:
      "Zapier yerine n8n + Make + özel kod. Logo, Mikro, NetGSM, Iyzico hazır entegrasyon. Türkçe panel; KVKK gereklilikleri dikkate alınarak kurgulanır."
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapier Alternatifi | PORTZEN",
    description:
      "Türk uygulamaları (Logo, Mikro, NetGSM) entegre, KVKK gerekliliklerini dikkate alan otomasyon."
  },
  alternates: { canonical: "https://portzenai.com/zapier-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zapier Alternatifi — PORTZEN n8n + Make + Özel Otomasyon",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "Business Process Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Zapier'in eksik kaldığı Türk uygulamalarına (Logo, Mikro, Netsis, NetGSM, Iyzico) entegre, Türkçe destekli ve KVKK gerekliliklerini dikkate alarak kurgulanan otomasyon altyapısı."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Zapier'den n8n'e taşıma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut Zap'larınızı analiz edip n8n + Make üzerinde yeniden kuruyoruz; teslim süresi Zap sayısı ve kapsama göre teklifte yazılı olarak belirtilir. Eski sistemi kapatmadan paralel test ediyoruz, kesintiyi en aza indiriyoruz."
      }
    },
    {
      "@type": "Question",
      name: "n8n self-hosted mı yoksa Zapier gibi cloud mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İkisi de mümkün. Çoğu KOBİ için n8n'i yönetilen bir bulut sunucuda çalıştırıyoruz; isteyene self-hosted kurulum da yapıyoruz. KVKK açısından verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Sunucu ve lisans bedelleri hizmet bedeline dahil değildir; bakım isteğe bağlı aylık hizmettir."
      }
    },
    {
      "@type": "Question",
      name: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Logo Tiger/Go, Mikro Run, Netsis Wings için hazır webhook + API katmanımız var. Zapier'de hiçbiri yok, custom integration için ayrı geliştirici tutmanız gerekiyordu."
      }
    },
    {
      "@type": "Question",
      name: "NetGSM, Iletimerkezi gibi Türk SMS sağlayıcıları için connector var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. NetGSM, İletimerkezi, Verimor, Sms.net ve Mutlu Cep için kurulu connector. Zapier'in Twilio bağımlılığı yok."
      }
    },
    {
      "@type": "Question",
      name: "Aylık ücret var mı, bakıma neler dahil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "İş otomasyonu kurulumu tek seferliktir; ilk 30 gün kurulum hatalarının giderilmesi dahildir. İkinci aydan itibaren isteğe bağlı aylık bakım alabilirsiniz, bakım bedeli pakete göre değişir. Hata bildirimi Büyüme ve Kurumsal paketlerde dahildir. Sunucu, n8n/Make ve diğer harici yazılım lisansları hizmet bedeline dahil değildir."
      }
    },
    {
      "@type": "Question",
      name: "Mevcut Zapier Zap'larım taşınır mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zapier'in JSON export dosyasını alıp n8n eşdeğer akışlarına manuel dönüştürüyoruz. Birebir taşıma değil; aynı işin daha verimli kurulması. Çoğu durumda birbirine bağlı Zap'lar tek akışta birleştirilerek daha az adımla kurulur."
      }
    },
    {
      "@type": "Question",
      name: "Limit aşımında ne olur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PORTZEN'de Zapier'deki gibi Task bazlı ücretlendirme yoktur; kurulum tek seferlik, bakım isteğe bağlı sabit aylık bedeldir. Sunucu ve n8n/Make lisans maliyetleri kullanıma göre değişir, hizmet bedeline dahil değildir ve teklifte ayrıca belirtilir."
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
      name: "Zapier Alternatifi",
      item: "https://portzenai.com/zapier-alternatifi"
    }
  ]
};

const stats = [
  { metric: "n8n + Make", label: "Hibrit otomasyon motoru" },
  { metric: "40+", label: "Türk uygulama connector" },
  { metric: "KVKK", label: "Aydınlatma + rıza akışı" },
  { metric: "Tek seferlik", label: "Kurulum + isteğe bağlı bakım" }
];

const painPoints = [
  {
    title: "USD bazlı, kur riski",
    desc: "USD bazlı fiyat. Kur arttıkça faturanız katlanır, Task arttıkça katlanır. TL fatura yok."
  },
  {
    title: "Türk uygulamaları yok",
    desc: "Logo, Mikro, Netsis, NetGSM, İletimerkezi, Param, Iyzico, Sipay — Zapier'in 7.000+ app listesinde hiçbiri yok. Hepsini elle webhook'la çözmek zorundasınız."
  },
  {
    title: "Karmaşık akışlarda verimsiz",
    desc: "Bir Multi-step Zap birden çok Task harcar. Günde 100 lead getirmek bile aylık limiti hızla bitirir, paket büyütmek zorunda kalırsınız."
  },
  {
    title: "Türkçe doküman ve destek yok",
    desc: "Tüm Zapier eğitim materyali, hata mesajı ve destek e-posta cevabı İngilizce. Ekibinizin Zap kuran kişisi sürekli çeviri yapıyor."
  },
  {
    title: "KVKK için kapalı kutu",
    desc: "Zapier verileri ABD sunucularında işler. KVKK aydınlatma metni, veri lokalizasyonu, VERBİS kayıt — hepsi sizin başınızın belası."
  }
];

const comparisonRows = [
  { feature: "Fiyat modeli", manychat: "USD bazlı", portzen: "Tek seferlik kurulum + isteğe bağlı bakım" },
  { feature: "Türk muhasebe (Logo/Mikro/Netsis)", manychat: "Yok", portzen: "Hazır connector" },
  { feature: "Türk SMS (NetGSM/İletimerkezi)", manychat: "Yok — Twilio zorunlu", portzen: "5+ Türk sağlayıcı" },
  { feature: "Türk ödeme (Iyzico/Param/PayTR)", manychat: "Yok", portzen: "Hazır entegrasyon" },
  { feature: "WhatsApp Business API resmi", manychat: "Sınırlı, 3rd party", portzen: "Meta'nın resmi API'si üzerinden" },
  { feature: "Otomasyon motoru", manychat: "Sadece Zapier", portzen: "n8n + Make + özel kod" },
  { feature: "Yerel canlı destek", manychat: "E-mail, İngilizce", portzen: "Türkçe WhatsApp + telefon" },
  { feature: "Sözleşme süresi", manychat: "Aylık ama Task sayar", portzen: "Teklifte yazılı" },
  { feature: "KVKK + veri lokalizasyonu", manychat: "ABD sunucu, sorumluluk sizde", portzen: "Veri konumu teklifte yazılı (sunucu bedeli hariç)" },
  { feature: "Kurulum + ilk akış desteği", manychat: "Self-service", portzen: "Tam kurulum; eğitim Büyüme ve Kurumsal'da" }
];

const solutionSteps = [
  {
    icon: Workflow,
    title: "Brief",
    description: "Mevcut Zap'larınızı listeliyoruz; hangileri kalsın, hangileri iyileşsin — n8n'in görsel editöründe yeniden tasarlıyoruz."
  },
  {
    icon: Plug,
    title: "Entegrasyon",
    description: "Logo/Mikro/NetGSM/Iyzico gibi Türk uygulamalarına webhook + API bağlantıları kurulur."
  },
  {
    icon: Sparkles,
    title: "Eğitim",
    description: "Büyüme ve Kurumsal paketlerde ekibinize canlı eğitim — n8n panelini Türkçe gösteriyoruz, basit akış değişikliklerini kendiniz yapabilirsiniz."
  },
  {
    icon: CheckCircle2,
    title: "Canlı",
    description: "Eski Zap'lar açık kalırken yeni akışları paralel test ediyoruz. Onaydan sonra Zapier hesabınızı iptal edip yerel faturaya geçiyorsunuz."
  }
];

const features = [
  { icon: Boxes, title: "n8n + Make + özel kod", desc: "Tek motor değil; üç ayrı otomasyon altyapısını birlikte kullanıp her senaryoya en verimlisini seçiyoruz." },
  { icon: Plug, title: "40+ Türk connector", desc: "Logo Tiger/Go, Mikro Run, Netsis, NetGSM, İletimerkezi, Iyzico, Param, PayTR, Trendyol, N11, Hepsiburada — hepsi hazır." },
  { icon: Languages, title: "Türkçe panel + dokümentasyon", desc: "Ekibinizin n8n editörünü Türkçe kullanabilmesi için ekip eğitimi (Büyüme ve Kurumsal) ve dokümantasyon (Kurumsal)." },
  { icon: ShieldCheck, title: "KVKK + veri konumu", desc: "İsteğe bağlı self-hosted kurulum (sunucu bedeli hariç); verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. KVKK aydınlatma metni ve VERBİS kayıt desteği gibi kalemler teklifte yazılı olarak belirtilir." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile en kısa sürede dönüş yapıyoruz. Zapier'in e-mail-only İngilizce desteği yerine gerçek insan." },
  { icon: Wallet, title: "TL bazlı e-Arşiv fatura", desc: "Tek seferlik kurulum ve isteğe bağlı sabit aylık bakım; TL bazlı e-Arşiv fatura, tutarlar KDV hariç yazılır. Task bazlı aşım ücreti yok." }
];

const faqs = [
  {
    q: "Zapier'den n8n'e taşıma süresi ne kadar?",
    a: "Teslim süresi mevcut Zap sayısı ve kapsama göre teklifte yazılı olarak belirtilir. Zapier'in JSON export'unu alıp her akışı n8n eşdeğeriyle yeniden kuruyoruz. Eski sistemi kapatmadan paralel test ediyoruz."
  },
  {
    q: "n8n self-hosted mı, cloud mu?",
    a: "İkisi de mümkün. Başlangıç ve Büyüme kurulumlarında n8n'i yönetilen bir bulut sunucuda çalıştırıyoruz; isteğe bağlı aylık bakımla güncelleme ve izleme bizde kalır. Kurumsal kurulumda test ortamı da kurulur; self-hosted opsiyonu mümkündür ve verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Sunucu ve harici yazılım lisansları hizmet bedeline dahil değildir."
  },
  {
    q: "Logo, Mikro, Netsis gibi Türk muhasebe yazılımlarına entegre olur mu?",
    a: "Evet. Logo Tiger/Go, Mikro Run/Fly, Netsis Wings için hazır webhook + REST API katmanımız var. Zapier'in 7.000+ app listesinde hiçbiri yok — orada custom integration için ayrı geliştirici tutmanız gerekiyordu, burada hazır."
  },
  {
    q: "NetGSM, Iletimerkezi gibi Türk SMS sağlayıcıları için connector var mı?",
    a: "NetGSM, İletimerkezi, Verimor, Sms.net, Mutlu Cep ve Vodafone Mesaj Servisleri için hazır connector. Zapier'in Twilio bağımlılığı yok — Türk SMS sağlayıcısıyla yerel fatura."
  },
  {
    q: "Aylık ücret var mı, bakıma neler dahil?",
    a: "İş otomasyonu kurulumu tek seferliktir; ilk 30 gün kurulum hatalarının giderilmesi dahildir. İkinci aydan itibaren isteğe bağlı aylık bakım alabilirsiniz, bakım bedeli pakete göre değişir. Hata bildirimi (alarm) Büyüme ve Kurumsal paketlerde dahildir. Türkçe canlı destek WhatsApp ve telefon üzerinden verilir, en kısa sürede dönüş yapıyoruz. Sunucu, n8n/Make ve diğer harici yazılım lisansları hizmet bedeline dahil değildir."
  },
  {
    q: "Mevcut Zapier Zap'larım birebir taşınır mı?",
    a: "Birebir değil; aynı işin daha verimli kurulması. Zapier'de 5 Task harcayan bir multi-step Zap, n8n'de tek node ile çözülebilir. Çoğu durumda birbirine bağlı adımlar tek akışta birleştirilerek daha sade kurulur."
  },
  {
    q: "Limit aşımında sürpriz fatura olur mu?",
    a: "PORTZEN'de Zapier'deki gibi Task bazlı ücretlendirme ve otomatik üst plana atma yoktur; kurulum tek seferlik, bakım isteğe bağlı sabit aylık bedeldir. Sunucu ve n8n/Make lisans maliyetleri kullanıma göre değişir, hizmet bedeline dahil değildir ve teklifte ayrıca belirtilir."
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
              <span className="text-ink">Zapier Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Workflow className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Zapier Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Zapier Alternatifi: n8n + Make + Türk Uygulamalarına Entegre Otomasyon
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Zapier&apos;in dolar faturası, Türk uygulamalarına entegrasyon eksikliği ve İngilizce paneli yerine PORTZEN n8n + Make + özel kod kombinasyonunu kullanır. Logo, Mikro, NetGSM, Iyzico hazır bağlı; yerel fatura, Türkçe destek; KVKK gereklilikleri dikkate alınarak kurgulanır.
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
                Zapier&apos;in Türk pazarında 5 zayıflığı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Zapier KOBİ için lüks — Türk uygulamalarına bağlanamadığında daha da pahalı.
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
                Zapier vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">Zapier</th>
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
              <strong>Not:</strong> Karşılaştırma genel ürün özelliklerine dayanır; Zapier plan içerikleri ve ücretleri için güncel bilgiyi Zapier&apos;den teyit edin.
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
                Zapier&apos;den 4 adımda nasıl çıkarsınız?
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
                Zapier&apos;de olmayan 6 özellik
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

      {/* 6. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: dijital ajans
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek kurulum: Logo entegrasyonu, NetGSM ile SMS, n8n + Make hibrit yapı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda bir dijital reklam ajansı Zapier Team planı kullanıyor; ek Task paketleri nedeniyle bazı aylarda fatura yükseliyor. Aktif Zap&apos;lar şunlar: Facebook Lead Ads → Google Sheets, Sheets → Slack, Sheets → e-posta bildirimi, Sheets → Trello, Calendly → Notion vb.
                </p>
                <p>
                  Bu durumda 3 sorun çıkar: (1) Yeni gelen lead&apos;lerin Logo Tiger&apos;a müşteri kaydı olarak da açılması isteniyor ama Zapier&apos;de Logo connector yok; elle kurulan webhook zamanla bozuluyor, (2) SMS bildirimleri Twilio üzerinden dolar bazlı ödeniyor, kur dalgalanması maliyeti öngörülemez kılıyor, (3) KVKK aydınlatma metni kayıt akışında devrede değil.
                </p>
                <p>
                  Kurulumda akışlar n8n + Make hibridine taşınır: Logo Tiger için API katmanı bağlanır (her yeni lead otomatik cari kayıt + cari kart), Twilio yerine NetGSM bağlanır (yerel SMS sağlayıcısıyla TL fatura), KVKK aydınlatma onaylarını Notion&apos;da kayıt altına alan akış kurulur.
                </p>
                <p>
                  Birbirine bağlı Zap&apos;lar mümkün olduğunda tek n8n akışında birleştirilir; aynı iş daha az adımla yürür.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">SMS altyapısı</div>
                  <div className="font-display text-3xl font-black mb-1">Twilio → NetGSM</div>
                  <div className="text-sm">Yerel sağlayıcı, TL fatura</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Muhasebe entegrasyonu</div>
                  <div className="font-display text-3xl font-black mb-1">Logo Tiger</div>
                  <div className="text-sm">Otomatik cari kart açma</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Akış yapısı</div>
                  <div className="font-display text-4xl font-black text-ink">Birleşik</div>
                  <div className="text-sm">Birbirine bağlı Zap&apos;lar tek akışta</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Zapier&apos;den geçmeden önce merak edilenler
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
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">ManyChat&apos;i de mi düşünüyorsunuz?</h3>
                <p className="text-sm opacity-85 mb-3">
                  ManyChat&apos;in dolar bağımlılığı ve KVKK uyumsuzluğu yerine yerel WhatsApp + IG çözümü.
                </p>
                <Link href="/manychat-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  ManyChat Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">HubSpot pahalı geliyor mu?</h3>
                <p className="text-sm opacity-85 mb-3">
                  HubSpot Starter yerine TL bazlı, Türk muhasebe entegre CRM otomasyonu.
                </p>
                <Link href="/hubspot-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  HubSpot Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-section bg-white">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Zapier akışlarınızı n8n + Make hibride taşıyalım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde mevcut Zap&apos;larınızı listeliyoruz, hangilerinin n8n&apos;de daha verimli kurulacağını gösteriyoruz.
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
                  <span className="font-bold">İzmir — Türkiye geneli uzaktan</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link href="/blog/crm-otomasyonu-rehberi" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: CRM Otomasyonu Rehberi <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/whatsapp-ai-asistani" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  WhatsApp AI Asistanı <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
