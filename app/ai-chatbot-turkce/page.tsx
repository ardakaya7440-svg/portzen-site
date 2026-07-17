import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Languages,
  Bot,
  ShieldCheck,
  Sparkles,
  Database,
  Globe2,
  UserCheck,
  CheckCircle2,
  Brain,
  Server,
  Lock
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Türkçe AI Chatbot | Yerli, Doğal, KVKK Uyumlu — PORTZEN",
  description:
    "Türkçe doğal yanıt veren AI chatbot. Sen/siz ayrımı, sektör jargonu, KVKK uyumlu Türkiye sunucusu. WhatsApp + Instagram + Telegram + Web. KOBİ için ₺8.500'den.",
  keywords: [
    "türkçe ai chatbot",
    "türkçe yapay zeka asistanı",
    "yerli chatbot",
    "kvkk uyumlu chatbot",
    "türkçe gpt chatbot",
    "türk dili yapay zeka",
    "türkçe doğal dil işleme"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/ai-chatbot-turkce",
    siteName: "PORTZEN",
    title: "Türkçe AI Chatbot | Yerli, Doğal, KVKK Uyumlu — PORTZEN",
    description:
      "Türkçe doğal yanıt veren AI chatbot. Sen/siz ayrımı, sektör jargonu, KVKK uyumlu Türkiye sunucusu."
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkçe AI Chatbot — PORTZEN",
    description:
      "Yerli, doğal Türkçe, KVKK uyumlu AI chatbot. KOBİ ve markalar için."
  },
  alternates: { canonical: "https://portzenai.com/ai-chatbot-turkce" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Türkçe AI Chatbot Kurulum Hizmeti",
  serviceType: "Türkçe Doğal Dil İşleme ve Yapay Zeka Chatbot",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Türkçe doğal dil işleme modelleriyle eğitilmiş, sektör jargonuna hakim, KVKK uyumlu ve Türkiye sunucularında çalışan AI chatbot. WhatsApp, Instagram, Telegram ve Web kanallarında aktif.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺8500-₺32000",
    availability: "https://schema.org/InStock"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "GPT mi kullanıyorsunuz, kendi modeliniz mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hibrit yaklaşım kullanıyoruz: birden fazla premium dil modelini Türkçeye optimize edilmiş katmanlarla birleştiren orkestrasyon altyapımız var. Bu sayede hem yüksek genel zeka hem de doğal Türkçe yanıt elde ediliyor."
      }
    },
    {
      "@type": "Question",
      name: "Türk dili nasıl iyileştiriliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Türkçeye özel ince ayar (fine-tuning) yapıyoruz: sen/siz ayrımı, kibarlık seviyesi, sektör terimleri (reçete, irsaliye, tapu, fatura), bölgesel ifadeler. Sürekli güncellenen Türkçe konuşma veri setiyle eğitiliyor."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu nasıl sağlanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tüm konuşma verileri Türkiye'deki sunucularda saklanır. KVKK aydınlatma metni, açık rıza akışı, veri silme talebi ve anonim mod sistem içine entegredir. Veri Sorumlusu - Veri İşleyen sözleşmesi standart sunulur."
      }
    },
    {
      "@type": "Question",
      name: "Veri Türkiye'de mi tutuluyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Müşteri konuşma kayıtları, profil verileri ve bilgi tabanı içerikleri Türkiye'deki Tier 3 veri merkezlerinde saklanır. Sadece anonim AI eğitimi için yurt dışı modellere veri gönderilir; bu da KVKK kapsamında değildir."
      }
    },
    {
      "@type": "Question",
      name: "Hangi modeller destekleniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birden fazla premium dil modeline bağlanan hibrit orkestrasyon altyapısı ve Türkçeye özel eğitilmiş modeller. Müşteri ihtiyacına göre uygun katman seçilir; veri hassasiyeti yüksek projelerde self-hosted opsiyon önerilir."
      }
    },
    {
      "@type": "Question",
      name: "Sen/siz seçimi nasıl yapılıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulumda işletmenizin ton tercihi belirlenir: resmi 'siz' (hukuk, finans, sağlık) veya samimi 'sen' (kafe, butik, genç markalar). Asistan tüm yanıtlarda bu tonu tutarlı şekilde kullanır."
      }
    },
    {
      "@type": "Question",
      name: "Hangi kanalları destekliyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, web sitesi canlı sohbeti ve e-posta. Tek bilgi tabanı, tüm kanallarda tutarlı Türkçe yanıt."
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
      name: "Türkçe AI Chatbot",
      item: "https://portzenai.com/ai-chatbot-turkce"
    }
  ]
};

const stats = [
  { metric: "%94", label: "Türkçe yanıt memnuniyeti" },
  { metric: "TR", label: "Türkiye sunucu (KVKK)" },
  { metric: "4+", label: "Aktif kanal (WA/IG/TG/Web)" },
  { metric: "Yerli", label: "Sektör jargonuna hakim" }
];

const problems = [
  "Standart dil modelleri İngilizce ağırlıklı eğitilmiş; doğrudan Türkçe sorduğunuzda yanıtlar resmi, soğuk ve doğal değil.",
  "Çeviri tabanlı chatbotlar 'robot dili' konuşuyor: 'Size nasıl yardımcı olabilirim?' yerine 'Sana ne yapabilirim?' gibi tuhaf cümleler.",
  "Türkçe nüansları (sen/siz, kibarlık seviyesi, yöresel ifade) yurtdışı modeller anlamıyor.",
  "Türk sektör terimleri (reçete, irsaliye, tapu, e-fatura, KDV, SGK) yabancı modellerde eksik veya yanlış.",
  "KVKK uyumu, Türkiye sunucu, veri yerelleştirme gibi yasal gereklilikler yurtdışı sağlayıcılarda belirsiz."
];

const solutionSteps = [
  {
    icon: Languages,
    title: "Türkçe Eğit",
    description: "Türkçeye özel eğitilmiş premium dil modelleri ile sen/siz ayrımı ve doğal ifade öğretilir."
  },
  {
    icon: Database,
    title: "Sektör Yükle",
    description: "Sizin sektörünüze ait terimler, sık sorulan sorular ve bilgi tabanı sisteme yüklenir."
  },
  {
    icon: ShieldCheck,
    title: "KVKK Uyumla",
    description: "Aydınlatma metni, açık rıza akışı, anonim mod ve TR sunucu yerleştirilir."
  },
  {
    icon: Globe2,
    title: "Çoklu Kanal Aç",
    description: "WhatsApp, Instagram, Telegram ve web sitesi tek bilgi tabanıyla devreye alınır."
  }
];

const features = [
  {
    icon: Languages,
    title: "Doğal Türkçe yanıt",
    desc: "Çeviri kokmayan, gerçek Türkçe konuşma. Türk müşterinin alışık olduğu ton ve ifade."
  },
  {
    icon: UserCheck,
    title: "Sen/siz seçimi",
    desc: "Markanızın tonuna göre resmi 'siz' veya samimi 'sen' tutarlı şekilde kullanılır."
  },
  {
    icon: Brain,
    title: "Sektör jargonu",
    desc: "Reçete, irsaliye, tapu, e-fatura, KDV, SGK gibi Türk sektör terimlerine hakim."
  },
  {
    icon: Lock,
    title: "KVKK uyumlu kayıt",
    desc: "Aydınlatma metni, açık rıza, veri silme talebi ve loglama tamamen KVKK uyumlu."
  },
  {
    icon: ShieldCheck,
    title: "Anonim mod",
    desc: "Hassas sorularda kişisel veri toplamadan yanıt verir; sağlık ve hukuk için ideal."
  },
  {
    icon: Globe2,
    title: "4 kanal tek panel",
    desc: "WhatsApp + Instagram + Telegram + Web Chat tek bilgi tabanı, tutarlı yanıt."
  }
];

const packages = [
  {
    name: "Başlangıç",
    price: "8.500 TL",
    period: "/ay",
    setup: "Kurulum: 25.000 TL",
    color: "bg-paper",
    features: [
      "Aylık 2.500 konuşmaya kadar",
      "Premium dil modeli + Türkçe fine-tune",
      "Sen/siz tutarlı yanıt",
      "WhatsApp veya Web Chat",
      "KVKK aydınlatma akışı",
      "Aylık 1 optimizasyon turu"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "17.000 TL",
    period: "/ay",
    setup: "Kurulum: 35.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 10.000 konuşmaya kadar",
      "Sektör bazlı eğitim",
      "Tüm kanallar (WA + IG + TG + Web)",
      "Anonim mod + KVKK + TR sunucu",
      "CRM entegrasyonu",
      "Haftalık optimizasyon",
      "Türkçe canlı destek"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "32.000 TL",
    period: "/ay",
    setup: "Kurulum: 45.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız konuşma",
      "Self-hosted model opsiyonu",
      "Özel veri eğitimi (fine-tune)",
      "Çoklu marka/şube yönetimi",
      "SLA + öncelikli destek",
      "DPA + güvenlik denetim raporu",
      "Adanmış proje yöneticisi"
    ],
    cta: "Kurumsal Teklif"
  }
];

const crossLinks = [
  {
    title: "WhatsApp AI Asistanı",
    desc: "WhatsApp Business API üzerinden 7/24 Türkçe yanıt veren AI asistan.",
    href: "/whatsapp-ai-asistani"
  },
  {
    title: "Intercom Alternatifi",
    desc: "Türkçe, KVKK uyumlu, TL fiyatlı Intercom alternatifi.",
    href: "/intercom-alternatifi"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Instagram DM'leri Türkçe AI ile otomatik yanıtla.",
    href: "/instagram-dm-otomasyonu"
  },
  {
    title: "CRM Otomasyonu",
    desc: "Müşteri verilerini tek panelde topla, AI destekli yönet.",
    href: "/crm-otomasyonu"
  }
];

const faqs = [
  {
    q: "GPT mi kullanıyorsunuz, kendi modeliniz mi?",
    a: "Hibrit yaklaşım kullanıyoruz. Birden fazla premium dil modelini Türkçeye optimize edilmiş prompt ve fine-tune katmanlarıyla birleştiren orkestrasyon altyapısı üzerine kurulu. Bu sayede hem yüksek genel zeka hem de doğal, akıcı Türkçe yanıt elde ediliyor. Veri hassasiyeti yüksek projelerde self-hosted model opsiyonu da sunuyoruz. Hangi motoru kullandığımız iş sırrımızdır, ancak çıktının kalitesi demo görüşmesinde birebir test edilebilir."
  },
  {
    q: "Türk dili nasıl iyileştiriliyor?",
    a: "Türkçeye özel ince ayar (fine-tuning) yapıyoruz: sen/siz ayrımı tutarlı, kibarlık seviyesi marka tonuna göre ayarlı, sektör terimleri (reçete, irsaliye, tapu, fatura, SGK) doğru kullanılır. Sürekli güncellenen Türkçe konuşma veri setiyle eğitiliyor; her ay yeni müşteri konuşmalarından öğrenmeye devam ediyor."
  },
  {
    q: "KVKK uyumu nasıl sağlanıyor?",
    a: "Tüm konuşma verileri Türkiye'deki sunucularda saklanır. KVKK aydınlatma metni, açık rıza akışı, veri silme talebi yönetimi ve anonim mod sistem içine entegredir. Veri Sorumlusu - Veri İşleyen sözleşmesi (DPA) standart sunulur. Hassas sektörler için ek güvenlik katmanları (uçtan uca şifreleme, audit log) eklenir."
  },
  {
    q: "Veri Türkiye'de mi tutuluyor?",
    a: "Evet. Müşteri konuşma kayıtları, profil verileri ve sizin yüklediğiniz bilgi tabanı içerikleri Türkiye'deki Tier 3 veri merkezlerinde saklanır. Sadece anonim ve kimliksizleştirilmiş AI inference için yurt dışı modellere geçici sorgu gönderilir; bu sorgular KVKK kapsamı dışında kalır. Self-hosted opsiyonda hiçbir veri yurt dışına çıkmaz."
  },
  {
    q: "Hangi modeller destekleniyor?",
    a: "Kurumsal seviye premium dil modellerinden oluşan hibrit bir orkestrasyon altyapısı kullanıyoruz; Türkçeye özel eğitilmiş fine-tune katmanları ve self-hosted opsiyon dahil. Müşteri ihtiyacına göre uygun katman seçilir: genel KOBİ için hızlı yanıt profili, veri hassas projeler için self-hosted mod, çok dilli ihracat için çok dilli katman. Hangi sağlayıcıların kullanıldığı ticari sırrımızdır; sözleşme aşamasında NDA altında paylaşılır."
  },
  {
    q: "Sen/siz seçimi nasıl yapılıyor?",
    a: "Kurulumda işletmenizin marka tonu belirlenir: resmi 'siz' (hukuk bürosu, finansal danışmanlık, sağlık kurumu) veya samimi 'sen' (kafe, butik, genç hedef kitleli markalar). Asistan tüm yanıtlarda bu tonu tutarlı kullanır. Karmaşık durumda otomatik 'siz'e geçer (örneğin şikayet, hukuki konu)."
  },
  {
    q: "Hangi kanalları destekliyor?",
    a: "WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, web sitesi canlı sohbeti ve e-posta. Tek bilgi tabanı tüm kanallarda tutarlı Türkçe yanıt verir. Müşteri WhatsApp'tan sorduğu soruyu yarın Instagram'dan sorarsa aynı yanıtı ve geçmişi görür."
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
              <span className="text-ink">Türkçe AI Chatbot</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-purple text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Languages className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yerli AI Çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Türkçe AI Chatbot | Yerli, Doğal, KVKK Uyumlu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yurtdışı GPT chatbotları İngilizce ağırlıklı eğitilmiş; doğrudan Türkçe sorduğunuzda yanıtlar tuhaf, çeviri kokuyor. PORTZEN'in Türkçe AI chatbotu sen/siz ayrımı bilen, sektör jargonuna hakim, KVKK uyumlu ve Türkiye sunucularında çalışan yerli bir çözümdür.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Ücretsiz Demo Al <ArrowUpRight className="h-4 w-4" />
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
                      i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-green text-paper"
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
                Yurtdışı GPT chatbotların Türkçe sorunu
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                İngilizce eğitilmiş bot, Türk müşterinizle doğru konuşamaz.
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
                4 Adımlık Süreç
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Türkçe AI chatbot nasıl kurulur?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                Hazır şablon değil; sizin sektörünüzün diline, ton tercihinize ve KVKK gerekliliklerinize özel.
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
                Türkçe AI farkı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Yurtdışı chatbotların yapamadığı 6 şey
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
              Gerçek vaka: Ankara hukuk bürosu
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Ankara'da bir hukuk bürosu Türkçe AI bot kurdu — danışan memnuniyeti %94'e çıktı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Ankara merkezli orta ölçekli bir hukuk bürosu, web sitesine yurtdışı bir chatbot SaaS'ı (aylık $79) kurmuştu. Danışanlardan gelen "avukatlık ücreti ne kadar", "boşanma davası ne kadar sürer", "miras paylaşımı nasıl olur" gibi soruları bot çevirili bir Türkçeyle yanıtlıyordu: "Sana yardım etmek için buradayım", "Senin sorunu çözmek istiyorum". Resmi bir hukuk bürosu için bu ton kabul edilemezdi.
                </p>
                <p>
                  Daha kötüsü, bot "Yargıtay içtihadı", "mehir", "nafaka", "ihtiyati tedbir" gibi hukuk terimlerini ya hiç anlamıyor ya da yanlış kullanıyordu. KVKK uyumu belirsizdi: konuşma verileri ABD sunucularında tutuluyor, danışana özel veri talep eden konuşmalar yasal risk taşıyordu.
                </p>
                <p>
                  PORTZEN'in Türkçe AI chatbotunu kurduk. Sen/siz tonunu "resmi siz" olarak ayarladık. Bilgi tabanına büronun avukatlık ücret tarifesi, sık sorulan soruları (boşanma, miras, ticaret hukuku) ve hukuk terimleri yüklendi. Anonim mod açıldı: bot, danışan kimlik bilgisi sormadan genel bilgi veriyor, randevu aşamasında insan avukata devrediyor.
                </p>
                <p>
                  Geçişten 3 ay sonra anket sonucu: danışan memnuniyeti %94'e çıktı (önce %58'di). "Avukatlık ücreti ne kadar" sorusuna doğal Türkçe yanıt geliyor: "Davanızın türüne göre değişmekle birlikte, asgari ücret tarifesi üzerinden başlayan ücretlerimiz hakkında detaylı görüşme için randevu oluşturalım." Sektör jargonu eksiksiz, KVKK denetimi temiz, veriler Türkiye'de.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Memnuniyet</div>
                  <div className="font-display text-4xl font-black mb-1">%58 → %94</div>
                  <div className="text-sm">Danışan memnuniyet anketi</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yanıt kalitesi</div>
                  <div className="font-display text-4xl font-black text-brand-green">Doğal TR</div>
                  <div className="text-sm">"Siz" formal, hukuk terimi tam</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Aylık maliyet</div>
                  <div className="font-display text-4xl font-black text-brand-pink">₺8.500</div>
                  <div className="text-sm">$79/ay (kur dalgalı) yerine sabit TL</div>
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
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Türkçe AI chatbot paketleri
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                3 paket; KOBİ'den kurumsal markaya. Tüm paketler Türkiye sunucu + KVKK uyumlu.
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
                    <span className="text-sm opacity-70">{p.period}</span>
                  </div>
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
                <Server className="h-6 w-6 shrink-0 mt-1 text-brand-yellow" />
                <div>
                  <div className="font-display text-lg font-black mb-1">Self-hosted opsiyonu</div>
                  <p className="text-sm opacity-90">
                    Hassas veri (sağlık, hukuk, finans) için self-hosted model opsiyonu — hiçbir veri yurt dışına çıkmaz. Kurumsal pakette dahil.
                  </p>
                </div>
              </div>
              <Link
                href="/blog/ai-chatbot-nedir"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
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
                Türkçe AI chatbot hakkında 7 soru
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
                Doğal Türkçe konuşan AI botunuzu kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde sektörünüze ve ton tercihinize uygun Türkçe AI chatbotu birlikte planlayalım. Demo görmek için hemen iletişime geçin.
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
