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

export const metadata: Metadata = {
  title: "n8n Kurulum Hizmeti | Self-Hosted Otomasyon Türkiye — PORTZEN",
  description:
    "n8n self-hosted kurulumu, Docker + SSL + backup, Türk uygulamalar entegre (Logo, Mikro, Iyzico, NetGSM). Zapier'den geçiş, eğitim, bakım. Tek seferlik 25.000 TL'den.",
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
      "n8n sunucunuza kurulur, Türk uygulamalar entegre edilir, eğitim ve bakım dahil. Tek seferlik 25.000 TL'den."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "n8n iş akışı otomasyon aracının self-hosted kurulumu: VPS/DigitalOcean üzerine Docker + SSL + otomatik backup, Türk uygulamalar (Logo, Mikro, Iyzico, NetGSM, WhatsApp Business API) entegrasyonu, Türkçe eğitim ve bakım dahil.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺25000-₺95000",
    availability: "https://schema.org/InStock"
  }
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
        text: "Başlangıç için DigitalOcean Premium AMD 4GB RAM ($24/ay) veya Hetzner CX22 (~€5/ay) önerilir. Orta ölçek için Contabo VPS M (€8/ay) veya Türk Telekom Cloud Türkiye sunucusu uygundur. Türkiye veri yerelleştirme gerekiyorsa TT Cloud veya Turkcell BIP önerilir."
      }
    },
    {
      "@type": "Question",
      name: "Aylık ek ücret var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "n8n self-hosted ücretsizdir (lisans bedeli yok). Sadece VPS sunucu maliyeti (yaklaşık ₺350-1.500/ay) ve isterseniz PORTZEN bakım paketi (3 ay 8.500 TL veya 12 ay 28.000 TL) ödenir. Workflow sayı limiti yok."
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
        text: "Evet. Mevcut Zapier veya Make zaplerınızı/scenariolarınızı analiz ediyor, n8n'de eşdeğer workflow'ları kuruyoruz. Geçiş sırasında her iki sistem paralel çalışır; n8n test edildikten sonra Zapier kapatılır. Pro pakette dahildir."
      }
    },
    {
      "@type": "Question",
      name: "Eğitim dahil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. 2 saatlik canlı online eğitim (Zoom) ve Türkçe video kılavuz seti sağlanır. Pro ve Kurumsal pakette ayrıca ekibinize workflow oluşturma eğitimi (4 saat) verilir."
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
  { metric: "₺25.000", label: "Tek seferlik kurulum" },
  { metric: "0₺", label: "Lisans bedeli (self-hosted)" },
  { metric: "∞", label: "Sınırsız workflow" },
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
    description: "İlk 3-5 workflow'unuz birlikte tasarlanır, test edilir, canlıya alınır."
  },
  {
    icon: Settings,
    title: "Bakım",
    description: "Aylık güncelleme, otomatik backup kontrolü, performans izleme ve Türkçe destek hattı."
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
    title: "Türkçe eğitim videosu",
    desc: "Ekibiniz için adım adım Türkçe video kılavuz seti. İlk workflow'u 30 dakikada kurun."
  },
  {
    icon: RefreshCw,
    title: "Aylık güncelleme",
    desc: "n8n yeni sürüm geldikçe güvenlik ve özellik güncellemeleri biz yapıyoruz."
  }
];

const packages = [
  {
    name: "Tek Seferlik Kurulum",
    price: "25.000 TL",
    period: "tek seferlik",
    setup: "Bakım: opsiyonel (1.500 TL/ay)",
    color: "bg-paper",
    features: [
      "VPS sunucu kurulum",
      "Docker + Nginx + SSL",
      "Otomatik günlük backup",
      "3 hazır workflow",
      "Türkçe video kılavuz",
      "30 gün e-posta destek"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "45.000 TL",
    period: "kurulum + 3 ay bakım",
    setup: "Sonraki ay: 5.000 TL/ay",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Tek Seferlik Kurulum içeriği",
      "8 özel workflow tasarımı",
      "Türk uygulamalar entegre",
      "Zapier/Make'dan taşıma",
      "2 saat canlı ekip eğitimi",
      "3 ay aylık güncelleme + bakım",
      "WhatsApp Türkçe destek"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "95.000 TL",
    period: "kurulum + 12 ay bakım",
    setup: "Sonraki yıl: 4.000 TL/ay",
    color: "bg-paper",
    features: [
      "Pro paket içeriği",
      "Sınırsız workflow tasarımı",
      "Özel Türk uygulama node'u",
      "Yüksek erişilebilirlik (HA)",
      "Adanmış proje yöneticisi",
      "SLA + öncelikli destek",
      "12 ay tam bakım + güncelleme"
    ],
    cta: "Kurumsal Teklif"
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
    a: "Başlangıç (5-10 workflow, düşük hacim) için DigitalOcean Premium AMD 4GB RAM ($24/ay ≈ ₺850) veya Hetzner CX22 (~€5/ay ≈ ₺180) önerilir. Orta ölçek (20+ workflow, orta hacim) için Contabo VPS M (€8/ay) veya Türk Telekom Cloud Türkiye sunucusu uygundur. KVKK veri yerelleştirme gerekiyorsa TT Cloud, Turkcell BIP veya yerli sağlayıcılar önerilir. Kurulumda sizinle birlikte seçeriz."
  },
  {
    q: "Aylık ek ücret var mı?",
    a: "n8n self-hosted ücretsizdir, lisans bedeli yoktur (n8n Cloud aylık $20+'dan başlar; self-hosted bu maliyeti tamamen ortadan kaldırır). Sadece VPS sunucu maliyeti (yaklaşık ₺350-1.500/ay) ve isterseniz PORTZEN bakım paketi (3 ay 8.500 TL veya 12 ay 28.000 TL) ödenir. Tek seferlik kurulum paketinde bakım opsiyoneldir."
  },
  {
    q: "Workflow sayı limiti var mı?",
    a: "Hayır. n8n self-hosted'da sınırsız workflow ve sınırsız execution çalıştırılabilir. Tek sınır sunucunuzun kapasitesi (RAM, CPU). Karşılaştırma: Zapier 100 task/ay ($20'lık planda), Make.com 1.000 operation/ay (€9'luk planda). n8n self-hosted ile aylık 1 milyon execution rahatlıkla çalıştırılabilir."
  },
  {
    q: "Zapier'den n8n'e taşıma yapıyor musunuz?",
    a: "Evet. Mevcut Zapier zaplarınızı veya Make scenariolarınızı analiz ediyor, n8n'de eşdeğer workflow'ları kuruyoruz. Geçiş sırasında her iki sistem paralel çalışır; n8n test edildikten ve performans onaylandıktan sonra Zapier/Make hesabınız kapatılır. Bu hizmet Pro pakete dahildir, Tek Seferlik Kurulum'da ek ücretle (workflow başına 1.500 TL) yapılır."
  },
  {
    q: "Eğitim dahil mi?",
    a: "Tek Seferlik Kurulum: Türkçe video kılavuz seti dahil. Pro: 2 saat canlı online ekip eğitimi (Zoom/Meet) + video kılavuz. Kurumsal: 4 saat detaylı workflow oluşturma eğitimi + her ay 1 saat optimizasyon görüşmesi. Eğitim sonrası 30 gün öncelikli WhatsApp destek hattı."
  },
  {
    q: "Hangi Türk uygulamalar entegre edilebilir?",
    a: "Hazır geliştirdiğimiz Türk uygulama node'ları: Logo Tiger, Mikro ERP, Iyzico, NetGSM SMS, WhatsApp Business API (resmi BSP), Trendyol Marketplace, Hepsiburada, n11, Paraşüt, Bizimhesap, e-Fatura/e-Arşiv portalları (GİB), Yapı Kredi/Garanti Open Banking API'leri. Listede olmayan Türk uygulaması için özel node geliştiriyoruz (Kurumsal pakette dahil, diğer paketlerde 5.000 TL'den)."
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
              <span className="text-ink">n8n Kurulum Hizmeti</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-blue text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Workflow className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Self-Hosted Otomasyon</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  n8n Kurulum Hizmeti | Self-Hosted Otomasyon Türkiye
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Zapier USD bazlı pahalı, Make karmaşık, n8n self-hosted ama kurulumu teknik bilgi istiyor. PORTZEN n8n'i sizin sunucunuza kurar, Türk uygulamaları (Logo, Mikro, Iyzico, NetGSM, WhatsApp Business API) entegre eder, Türkçe eğitim ve bakım sağlar. Lisans bedeli yok, sınırsız workflow.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Keşif <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="https://wa.me/905015884853"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
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
                      "border-3 border-ink p-5 shadow-brutal",
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-pink text-paper"
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
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOLUTION */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Kurulum süreci
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                n8n'i 4 adımda devreye alıyoruz
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Sunucu seçiminden ilk workflow'a, eğitimden bakıma kadar tüm süreç PORTZEN sorumluluğunda.
              </p>
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

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
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

      {/* 5. CASE STUDY */}
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek vaka: İstanbul reklam ajansı
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              İstanbul'da bir ajans Zapier'den n8n self-hosted'a geçti — aylık $189'dan tek seferlik ₺35.000'e indi.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  İstanbul merkezli orta ölçekli bir dijital reklam ajansı, müşteri raporlama ve süreç otomasyonu için 2 yıldır Zapier Professional ($89/ay) ve birkaç Premium add-on ($100/ay) kullanıyordu. Aylık fatura $189 — kurla beraber ₺7.000+. Yıllık $2.268 ödüyorlardı (yaklaşık ₺85.000).
                </p>
                <p>
                  Daha kötüsü, Zapier task limitleri sürekli aşılıyordu: müşteri ekledikçe workflow'lar artıyor, task sayısı şişiyor, faturada sürpriz "overage" maliyetleri çıkıyordu. Üstüne Logo Tiger ve Iyzico entegrasyonları için Zapier'de hazır node yoktu — özel webhook'larla bağladıkları geçici çözümler kırılıyor, ajans operasyonu sekteye uğruyordu.
                </p>
                <p>
                  PORTZEN'in Pro paketi (₺45.000 — kurulum + 3 ay bakım) ile geçtik. DigitalOcean Premium AMD 4GB ($24/ay ≈ ₺850) sunucu üzerine n8n + Docker + Nginx + SSL kurduk. Mevcut 18 Zapier zap'ını n8n workflow'una taşıdık. Logo, Iyzico, NetGSM SMS ve WhatsApp Business API entegrasyonlarımız hazır geldi, 2 günde devreye girdi. Ekip için 2 saat eğitim verdik.
                </p>
                <p>
                  Geçişten 4 ay sonraki tablo: aylık otomasyon maliyeti ₺7.000+'dan ₺850 (sunucu) + ₺5.000 (PORTZEN bakım) = toplam ₺5.850'ye düştü. Task limiti yok, sınırsız workflow. Logo ve Iyzico kırılma problemleri çözüldü. Geri ödeme süresi 7 ay; 2. yılın sonunda toplam ₺95.000 tasarruf hesaplandı.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce (Zapier)</div>
                  <div className="font-display text-4xl font-black mb-1">₺7.000+</div>
                  <div className="text-sm">Aylık (dalgalı)</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra (n8n)</div>
                  <div className="font-display text-4xl font-black text-brand-green">₺5.850</div>
                  <div className="text-sm">Sunucu + bakım (sabit)</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Kurulum yatırımı</div>
                  <div className="font-display text-4xl font-black mb-1">₺45.000</div>
                  <div className="text-sm">Tek seferlik (Pro paket)</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Geri ödeme</div>
                  <div className="font-display text-4xl font-black text-brand-pink">7 ay</div>
                  <div className="text-sm">2. yıl sonu ₺95.000 tasarruf</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Tek seferlik kurulum modeli
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                n8n kurulum paketleri
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Aylık SaaS yerine tek seferlik yatırım + opsiyonel bakım. Sunucu maliyeti sizde, kontrol sizde.
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
                    <span className="font-display text-4xl font-black">{p.price}</span>
                  </div>
                  <div className="text-xs font-bold opacity-75 mb-1">{p.period}</div>
                  <div className="text-xs font-bold opacity-75 mb-6">{p.setup}</div>
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
          <Reveal delay={400}>
            <div className="mt-8 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-[260px]">
                <Lock className="h-6 w-6 shrink-0 mt-1 text-brand-yellow" />
                <div>
                  <div className="font-display text-lg font-black mb-1">n8n lisansı ücretsiz</div>
                  <p className="text-sm opacity-90">
                    n8n self-hosted Fair Code lisansı altında ücretsizdir. Sadece VPS sunucu (~₺350-1.500/ay) maliyeti ödenir; lisans veya kullanım ücreti yoktur.
                  </p>
                </div>
              </div>
              <Link
                href="/crm-otomasyonu"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                CRM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CROSS-LINK STRIP */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                İlgili hizmetler
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                PORTZEN'in diğer çözümleri
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {crossLinks.map((link, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link
                  href={link.href}
                  className="block border-3 border-ink bg-paper p-5 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full"
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Zapier'den kurtulalım. Sunucunuza n8n kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde mevcut otomasyon ihtiyaçlarınızı analiz ediyor, n8n kurulum + Türk uygulamalar entegrasyon planını birlikte çıkarıyoruz. Aynı gün dönüyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/905015884853"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Yaz
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:destek@portzenai.com"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  E-posta Gönder <ArrowUpRight className="h-4 w-4" />
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
