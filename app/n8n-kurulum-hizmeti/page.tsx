import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Server,
  ShieldCheck,
  Workflow,
  Container,
  Lock,
  Database,
  PlayCircle,
  CheckCircle2,
  Settings,
  RefreshCw,
  Cpu
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection } from "@/components/pricing/PricingSection";
import { PRICING, familyOffersSchema, formatTL } from "@/data/pricing";

export const metadata: Metadata = {
  title: "n8n Kurulum Hizmeti | Self-Hosted Otomasyon Türkiye — PORTZEN",
  description:
    "n8n self-hosted kurulumu, Docker + SSL + backup, Türk uygulamalar entegre (Logo, Mikro, Iyzico, NetGSM). Zapier'den geçiş, eğitim, bakım. Tek seferlik kurulum.",
  keywords: [
    "n8n kurulum",
    "n8n türkçe",
    "n8n self hosted",
    "zapier alternatifi",
    "make alternatifi",
    "n8n hizmet",
    "iş akışı otomasyonu türkiye",
    "n8n logo entegrasyonu"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/n8n-kurulum-hizmeti",
    siteName: "PORTZEN",
    title: "n8n Kurulum Hizmeti | Self-Hosted Otomasyon Türkiye",
    description:
      "n8n sunucunuza kurulur, Türk uygulamalar entegre edilir. Tek seferlik kurulum; ekip eğitimi Büyüme ve Kurumsal paketlerde, aylık bakım isteğe bağlı."
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Kurulum Hizmeti — PORTZEN",
    description:
      "Self-hosted n8n + Docker + SSL + backup + Türk entegrasyonlar."
  },
  alternates: { canonical: "https://portzenai.com/n8n-kurulum-hizmeti" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "n8n Self-Hosted Kurulum Hizmeti",
  serviceType: "İş Akışı Otomasyonu ve n8n Sunucu Kurulumu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "n8n iş akışı otomasyon aracının self-hosted kurulumu: VPS/DigitalOcean üzerine Docker + SSL + otomatik backup, Türk uygulamalar (Logo, Mikro, Iyzico, NetGSM, WhatsApp Business API) entegrasyonu, Türkçe ekip eğitimi (Büyüme ve Kurumsal paketlerde) ve isteğe bağlı aylık bakım.",
  offers: familyOffersSchema(PRICING["is-otomasyonu"])
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "n8n kendi sunucuma mı kurulacak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. n8n sizin kontrolünüzdeki bir VPS veya kendi sunucunuza kurulur. Tüm workflow verileri, API anahtarları ve müşteri kayıtları sizde kalır. Üçüncü taraf bir SaaS'a bağlı değilsiniz."
      }
    },
    {
      "@type": "Question",
      name: "Hangi VPS önerirsiniz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Küçük ölçek için DigitalOcean Premium AMD 4GB RAM ($24/ay) veya Hetzner CX22 (~€5/ay) önerilir. Orta ölçek için Contabo VPS M (€8/ay) veya Türk Telekom Cloud Türkiye sunucusu uygundur. Türkiye veri yerelleştirme gerekiyorsa TT Cloud veya Turkcell BIP önerilir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık ek ücret var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n self-hosted ücretsizdir (lisans bedeli yok). Sadece VPS sunucu maliyeti ve isterseniz PORTZEN bakım paketi ödenir. Workflow sayı limiti yok."
      }
    },
    {
      "@type": "Question",
      name: "Workflow sayı limiti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. n8n self-hosted'da sınırsız workflow ve sınırsız execution çalıştırılabilir. Tek sınır sunucunuzun kapasitesi. Zapier'in 100 task/ay, Make'in 1.000 operation/ay sınırı yoktur."
      }
    },
    {
      "@type": "Question",
      name: "Zapier'den n8n'e taşıma yapıyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Mevcut Zapier veya Make senaryolarınızı analiz ediyor, n8n'de eşdeğer iş akışlarını kuruyoruz. Geçiş sırasında iki sistem paralel çalışır; n8n test edildikten sonra Zapier kapatılır. Taşınan her akış paketin iş akışı sayısından düşülür."
      }
    },
    {
      "@type": "Question",
      name: "Eğitim dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Büyüme ve Kurumsal paketlerde ekip eğitimi dahildir; Kurumsal pakette ayrıca dokümantasyon teslim edilir. Başlangıç paketinde eğitim yoktur, ihtiyaç olursa ayrıca planlanır."
      }
    },
    {
      "@type": "Question",
      name: "Hangi Türk uygulamalar entegre edilebilir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Logo Tiger, Mikro ERP, Iyzico, NetGSM SMS, WhatsApp Business API, Trendyol, Hepsiburada, n11, Paraşüt, Bizimhesap, e-Fatura/e-Arşiv portalları için hazır node geliştirmelerimiz var. Listede olmayan Türk uygulaması için özel node yazılır."
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
      name: "n8n Kurulum Hizmeti",
      item: "https://portzenai.com/n8n-kurulum-hizmeti"
    }
  ]
};

const stats = [
  { metric: `${formatTL(PRICING["is-otomasyonu"].tiers.baslangic.price)}`, label: "Başlangıç kurulum (tek seferlik)" },
  { metric: "0₺", label: "Lisans bedeli (self-hosted)" },
  { metric: "2–12", label: "Pakete göre iş akışı" },
  { metric: "TR", label: "Türk uygulamalar dahil" }
];

const problems = [
  "Zapier USD bazlı; Professional planı $89/ay ($1.068/yıl ≈ ₺40.000+) ve task başına ücretlendirme yapıyor.",
  "Make.com (eski Integromat) ucuz görünse de complex senaryolarda aylık operation maliyeti hızla yükseliyor.",
  "n8n self-hosted ücretsiz ama kurulumu zor: Docker, SSL, reverse proxy, backup, güncelleme bilgisi gerekiyor.",
  "Türk uygulamaları (Logo, Mikro, Iyzico, NetGSM) yurtdışı otomasyon platformlarında yok veya çok kısıtlı.",
  "Workflow patladığında kim destek verecek? Yurtdışı dokümanlarla saatlerce uğraşmak gerekiyor."
];

const solutionSteps = [
  {
    icon: Server,
    title: "Sunucu",
    description: "VPS sağlayıcı seçimi (DO/Hetzner/TT Cloud), n8n + Docker + Nginx + Let's Encrypt SSL kurulumu."
  },
  {
    icon: Workflow,
    title: "Entegrasyon",
    description: "Türk uygulamalar (Logo, Mikro, Iyzico, NetGSM, WhatsApp) için hazır node'lar yüklenir."
  },
  {
    icon: PlayCircle,
    title: "Workflow",
    description: "Paketinizdeki iş akışı sayısı kadar workflow birlikte tasarlanır, test edilir, canlıya alınır."
  },
  {
    icon: Settings,
    title: "Bakım",
    description: "İsteğe bağlı aylık bakım (ikinci aydan itibaren): güncelleme, backup kontrolü, performans izleme ve Türkçe destek."
  }
];

const features = [
  {
    icon: Server,
    title: "VPS/DigitalOcean kurulum",
    desc: "DO, Hetzner, Contabo veya TT Cloud üzerine sıfırdan kurulum. Sunucu seçiminde de yardım."
  },
  {
    icon: Container,
    title: "Docker + Nginx + SSL",
    desc: "Docker Compose ile izole kurulum, Nginx reverse proxy, Let's Encrypt otomatik SSL yenileme."
  },
  {
    icon: Database,
    title: "Otomatik backup",
    desc: "Günlük PostgreSQL + workflow JSON backup'ları S3/Backblaze'e otomatik gönderilir."
  },
  {
    icon: Workflow,
    title: "Türk uygulamalar entegre",
    desc: "Logo, Mikro, Iyzico, NetGSM, WhatsApp Business API, Trendyol, Paraşüt için hazır node'lar."
  },
  {
    icon: PlayCircle,
    title: "Türkçe ekip eğitimi",
    desc: "Büyüme ve Kurumsal paketlerde ekip eğitimi dahildir; Başlangıç paketinde ihtiyaç olursa ayrıca planlanır."
  },
  {
    icon: RefreshCw,
    title: "Aylık güncelleme",
    desc: "İsteğe bağlı aylık bakımla, n8n yeni sürüm geldikçe güvenlik ve özellik güncellemelerini biz yapıyoruz."
  }
];


const crossLinks = [
  {
    title: "CRM Otomasyonu",
    desc: "n8n + CRM entegrasyonu ile müşteri sürecini otomatikleştir.",
    href: "/crm-otomasyonu"
  },
  {
    title: "WhatsApp AI Asistanı",
    desc: "n8n workflow'larıyla WhatsApp AI asistanını birleştir.",
    href: "/whatsapp-ai-asistani"
  },
  {
    title: "Intercom Alternatifi",
    desc: "Müşteri destek + n8n otomasyon birleştirilmiş çözüm.",
    href: "/intercom-alternatifi"
  },
  {
    title: "AI Chatbot Türkçe",
    desc: "n8n + Türkçe AI chatbot birlikte çalışan sistem.",
    href: "/ai-chatbot-turkce"
  }
];

const faqs = [
  {
    q: "n8n kendi sunucuma mı kurulacak?",
    a: "Evet. n8n sizin kontrolünüzdeki bir VPS'e (DigitalOcean, Hetzner, Contabo, TT Cloud) veya kendi fiziksel/sanal sunucunuza kurulur. Tüm workflow verileri, API anahtarları ve müşteri kayıtları sizde kalır. Üçüncü taraf bir SaaS'a bağlı değilsiniz; istediğiniz zaman sunucu değiştirebilir, taşıyabilirsiniz."
  },
  {
    q: "Hangi VPS önerirsiniz?",
    a: "Küçük ölçek (5-10 workflow, düşük hacim) için DigitalOcean Premium AMD 4GB RAM ($24/ay ≈ ₺850) veya Hetzner CX22 (~€5/ay ≈ ₺180) önerilir. Orta ölçek (20+ workflow, orta hacim) için Contabo VPS M (€8/ay) veya Türk Telekom Cloud Türkiye sunucusu uygundur. KVKK veri yerelleştirme gerekiyorsa TT Cloud, Turkcell BIP veya yerli sağlayıcılar önerilir. Kurulumda sizinle birlikte seçeriz."
  },
  {
    q: "Aylık ek ücret var mı?",
    a: "n8n self-hosted ücretsizdir, lisans bedeli yoktur (n8n Cloud aylık $20+'dan başlar; self-hosted bu maliyeti tamamen ortadan kaldırır). Sadece VPS sunucu maliyeti ve isterseniz PORTZEN bakım paketi ödenir. Tek seferlik kurulum paketinde bakım opsiyoneldir."
  },
  {
    q: "Workflow sayı limiti var mı?",
    a: "Hayır. n8n self-hosted'da sınırsız workflow ve sınırsız execution çalıştırılabilir. Tek sınır sunucunuzun kapasitesi (RAM, CPU). Karşılaştırma: Zapier 100 task/ay ($20'lık planda), Make.com 1.000 operation/ay (€9'luk planda). Aylık çalıştırılabilecek execution sayısı seçilen sunucunun kapasitesine bağlıdır."
  },
  {
    q: "Zapier'den n8n'e taşıma yapıyor musunuz?",
    a: "Evet. Mevcut Zapier zaplarınızı veya Make senaryolarınızı analiz ediyor, n8n'de eşdeğer iş akışlarını kuruyoruz. Geçiş sırasında iki sistem paralel çalışır; n8n test edildikten ve performans onaylandıktan sonra Zapier/Make hesabınız kapatılır. Taşınan her akış paketin iş akışı sayısından (2, 6 veya 12) düşülür; sınırı aşan akışlar ayrıca tekliflendirilir."
  },
  {
    q: "Eğitim dahil mi?",
    a: "Büyüme ve Kurumsal paketlerde ekip eğitimi dahildir; Kurumsal pakette ayrıca dokümantasyon teslim edilir. Başlangıç paketinde eğitim yoktur, ihtiyaç olursa ayrıca planlanır. Tüm paketlerde ilk 30 gün kurulum hatalarının giderilmesi dahildir."
  },
  {
    q: "Hangi Türk uygulamalar entegre edilebilir?",
    a: "Hazır geliştirdiğimiz Türk uygulama node'ları: Logo Tiger, Mikro ERP, Iyzico, NetGSM SMS, WhatsApp Business API (Meta'nın resmi API'si), Trendyol Marketplace, Hepsiburada, n11, Paraşüt, Bizimhesap, e-Fatura/e-Arşiv portalları (GİB), Yapı Kredi/Garanti Open Banking API'leri. Listede olmayan Türk uygulaması için özel node geliştiriyoruz (Kurumsal pakette 2 özel API bağlantısı dahildir, diğer paketlerde ayrıca tekliflendirilir)."
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
              <span className="text-ink">n8n Kurulum Hizmeti</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Workflow className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Self-Hosted Otomasyon</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  n8n Kurulum Hizmeti | Self-Hosted Otomasyon Türkiye
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Zapier USD bazlı pahalı, Make karmaşık, n8n self-hosted ama kurulumu teknik bilgi istiyor. PORTZEN n8n&apos;i sizin sunucunuza kurar, Türk uygulamaları (Logo, Mikro, Iyzico, NetGSM, WhatsApp Business API) entegre eder, Türkçe eğitim ve bakım sağlar. n8n için lisans bedeli yok.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
                    Ücretsiz Keşif <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905318639117"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Sor
                  </a>
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

      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Otomasyon araçlarında karşılaşılan sorunlar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Zapier pahalı, Make karmaşık, n8n self-hosted ama kurmak zor.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Kurulum süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                n8n&apos;i 4 adımda devreye alıyoruz
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Sunucu seçiminden ilk workflow&apos;a, eğitimden bakıma kadar tüm süreç PORTZEN sorumluluğunda.
              </p>
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

      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Kurulum içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Kurulum paketinde neler var?
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

      {/* 5. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: dijital reklam ajansı
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek bir geçiş: bir ajansın Zapier akışlarını n8n self-hosted&apos;a taşımak.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda müşteri raporlama ve süreç otomasyonu için Zapier Professional ($89/ay) ve birkaç Premium add-on kullanan orta ölçekli bir dijital reklam ajansı düşünelim. Fatura USD bazlı geliyor ve kurla birlikte değişiyor.
                </p>
                <p>
                  Bu tür kurulumlarda tipik sorunlar görülür: müşteri ekledikçe workflow&apos;lar ve task sayısı artar, faturada &quot;overage&quot; maliyetleri çıkabilir. Logo Tiger ve Iyzico için Zapier&apos;de hazır node olmadığından özel webhook&apos;larla kurulan geçici çözümler kırılgan kalır.
                </p>
                <p>
                  Örnek kurulumda bir VPS (ör. DigitalOcean Premium AMD 4GB, $24/ay) üzerine n8n + Docker + Nginx + SSL kurulur. Mevcut Zapier zap&apos;ları analiz edilip n8n workflow&apos;larına taşınır; taşınan her akış paketin iş akışı sayısından düşülür. Logo, Iyzico, NetGSM SMS ve WhatsApp Business API bağlantıları hazır node&apos;larla kurulur. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir.
                </p>
                <p>
                  İş akışında değişen: otomasyonlar sizin sunucunuzda çalışır ve n8n için lisans bedeli ödenmez; task başına ücretlendirme yerine sunucu maliyeti ve isteğe bağlı bakım bedeli kalır. Logo ve Iyzico bağlantıları geçici webhook çözümleri yerine izlenebilir iş akışlarıyla yönetilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce (Zapier)</div>
                  <div className="font-display text-lg font-black mb-1">Task başına, USD bazlı ücretlendirme</div>
                  <div className="text-sm">Kurla değişen fatura</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra (n8n)</div>
                  <div className="font-display text-lg font-black text-ink">Lisans bedeli yok, akışlar kendi sunucunuzda</div>
                  <div className="text-sm">Sunucu gideri ve isteğe bağlı bakım ayrı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Taşınan akış</div>
                  <div className="font-display text-4xl font-black mb-1">2–12</div>
                  <div className="text-sm">Pakete göre iş akışı sayısı</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Entegrasyon</div>
                  <div className="font-display text-4xl font-black text-ink">TR</div>
                  <div className="text-sm">Logo, Iyzico, NetGSM, WhatsApp için hazır node&apos;lar</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="is-otomasyonu" heading="n8n kurulum fiyatları" intro="n8n, Make ve CRM otomasyonları tek hizmet ailesidir. Kurulum tek seferliktir; ilk 30 gün kurulum hatalarının giderilmesi dahildir, isteğe bağlı aylık bakım ikinci aydan itibaren başlar. Tutarlar TL ve KDV hariçtir." />


      {/* 7. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                n8n kurulum öncesi 7 soru
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
        </div>
      </section>

      {/* 8. CROSS-LINK STRIP */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                İlgili hizmetler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN&apos;in diğer çözümleri
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {crossLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={link.href}
                  className="block border-3 border-ink/15 bg-paper p-5 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl"
                >
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{link.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed mb-3">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink">
                    İncele <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Zapier&apos;den kurtulalım. Sunucunuza n8n kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde mevcut otomasyon ihtiyaçlarınızı analiz ediyor, n8n kurulum + Türk uygulamalar entegrasyon planını birlikte çıkarıyoruz. En kısa sürede dönüş yapıyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905318639117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:destek@portzenai.com"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  E-posta Gönder <ArrowUpRight className="h-4 w-4" />
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
          </div>
        </div>
      </section>
    </>
  );
}
