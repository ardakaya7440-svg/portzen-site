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
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";

export const metadata: Metadata = {
  title: "Türkçe AI Chatbot | Doğal Türkçe, KVKK Odaklı Kurulum — PORTZEN",
  description:
    "Türkçe doğal yanıt veren AI chatbot. Sen/siz ayrımı, sektör jargonu, KVKK gerekliliklerini dikkate alan kurulum. WhatsApp + Instagram + Telegram + Web.",
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
    title: "Türkçe AI Chatbot | Doğal Türkçe, KVKK Odaklı Kurulum — PORTZEN",
    description:
      "Türkçe doğal yanıt veren AI chatbot. Sen/siz ayrımı, sektör jargonu, KVKK gerekliliklerini dikkate alan kurulum."
  },
  twitter: {
    card: "summary_large_image",
    title: "Türkçe AI Chatbot — PORTZEN",
    description:
      "Doğal Türkçe yanıt veren, KVKK gereklilikleri gözetilerek kurulan AI chatbot. KOBİ ve markalar için."
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
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Doğal Türkçe yanıt verecek şekilde yapılandırılan, işletmenin sektör terimleriyle beslenen ve KVKK gerekliliklerini dikkate alarak kurgulanan (açık rıza, aydınlatma akışı) AI chatbot; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. WhatsApp, Instagram, Telegram ve Web kanallarında kurulabilir; paket kapsamındaki kanallar pakete göre değişir.",
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
        text: "Kurulumda asistanın Türkçe yanıt kuralları işletmenize göre ayarlanır: sen/siz ayrımı, kibarlık seviyesi, sektör terimleri (reçete, irsaliye, tapu, fatura), bölgesel ifadeler. Bilgi tabanı ve yanıt kuralları, canlı kullanımda gelen sorulara göre güncellenir."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu nasıl sağlanıyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asistan KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni, açık rıza akışı, veri silme talebi ve kişisel veri sormayan anonim mod kurulumda yapılandırılır. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Veri işlemeye ilişkin sözleşme maddeleri teklif aşamasında yazılı olarak netleştirilir."
      }
    },
    {
      "@type": "Question",
      name: "Veri Türkiye'de mi tutuluyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bu, kullanılan altyapıya bağlıdır. Konuşma kayıtları, profil verileri ve bilgi tabanı içeriklerinin hangi sağlayıcıda ve hangi bölgede tutulacağı teklifte yazılı olarak belirtilir. Yanıt üreten dil modeli sağlayıcıları yurt dışında olabilir; bu durumda yurt dışına aktarım için KVKK'nın aradığı şartlar (aydınlatma, açık rıza) kurulumda dikkate alınır."
      }
    },
    {
      "@type": "Question",
      name: "Hangi modeller destekleniyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Birden fazla premium dil modeline bağlanan hibrit orkestrasyon altyapısı, Türkçe yanıt kurallarıyla yapılandırılır. Müşteri ihtiyacına göre uygun katman seçilir; veri hassasiyeti yüksek projelerde kendi sunucunuzda çalışan model seçeneği kapsam görüşmesinde değerlendirilir."
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
        text: "WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, web sitesi canlı sohbeti ve e-posta. Tek bilgi tabanı, tüm kanallarda tutarlı Türkçe yanıt. Paket kapsamındaki kanallar pakete göre değişir: Başlangıç pakette tek kanal (WhatsApp veya web sitesi), Kurumsal pakette Web + WhatsApp + Instagram; diğer kanallar teklifte yazılı olarak belirtilir."
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
  { metric: "Sen/siz", label: "Marka tonuna göre hitap" },
  { metric: "KVKK", label: "Aydınlatma ve açık rıza akışı" },
  { metric: "WA/IG/Web", label: "Kanal (pakete göre)" },
  { metric: "Yerli", label: "Sektör jargonuna hakim" }
];

const problems = [
  "Standart dil modelleri İngilizce ağırlıklı eğitilmiş; doğrudan Türkçe sorduğunuzda yanıtlar resmi, soğuk ve doğal değil.",
  "Çeviri tabanlı chatbotlar 'robot dili' konuşuyor: 'Size nasıl yardımcı olabilirim?' yerine 'Sana ne yapabilirim?' gibi tuhaf cümleler.",
  "Türkçe nüansları (sen/siz, kibarlık seviyesi, yöresel ifade) yurtdışı modeller anlamıyor.",
  "Türk sektör terimleri (reçete, irsaliye, tapu, e-fatura, KDV, SGK) yabancı modellerde eksik veya yanlış.",
  "Verinin nerede tutulduğu, yurt dışına aktarım ve açık rıza gibi KVKK konuları hazır yurtdışı araçlarda çoğu zaman net değil."
];

const solutionSteps = [
  {
    icon: Languages,
    title: "Türkçe Ayarla",
    description: "Premium dil modelleri, sen/siz ayrımı ve doğal ifade için Türkçe yanıt kurallarıyla yapılandırılır."
  },
  {
    icon: Database,
    title: "Sektör Yükle",
    description: "Sizin sektörünüze ait terimler, sık sorulan sorular ve bilgi tabanı sisteme yüklenir."
  },
  {
    icon: ShieldCheck,
    title: "KVKK Akışını Kur",
    description: "Aydınlatma metni, açık rıza akışı ve anonim mod kurulur; verinin hangi sağlayıcıda ve bölgede tutulacağı teklifte yazılı olarak belirtilir."
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
    title: "KVKK odaklı kayıt",
    desc: "Aydınlatma metni, açık rıza, veri silme talebi ve loglama KVKK gerekliliklerini dikkate alarak kurgulanır."
  },
  {
    icon: ShieldCheck,
    title: "Anonim mod",
    desc: "Hassas sorularda kişisel veri toplamadan yanıt verir; sağlık ve hukuk için ideal."
  },
  {
    icon: Globe2,
    title: "Çok kanal tek panel",
    desc: "WhatsApp + Instagram + Telegram + Web Chat tek bilgi tabanı, tutarlı yanıt. Kanal sayısı pakete göre değişir."
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
    desc: "Türkçe, KVKK gereklilikleri gözetilerek kurulan, TL fiyatlı Intercom alternatifi.",
    href: "/intercom-alternatifi"
  },
  {
    title: "Instagram DM Otomasyonu",
    desc: "Yorum ve hikâye etkileşimine kural tabanlı otomatik DM (AI yanıt hizmeti değildir).",
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
    a: "Hibrit yaklaşım kullanıyoruz. Birden fazla premium dil modelini Türkçeye optimize edilmiş prompt ve fine-tune katmanlarıyla birleştiren orkestrasyon altyapısı üzerine kurulu. Bu sayede hem yüksek genel zeka hem de doğal, akıcı Türkçe yanıt elde ediliyor. Veri hassasiyeti yüksek projelerde kendi sunucunuzda çalışan model seçeneği kapsam görüşmesinde değerlendirilir. Hangi motoru kullandığımız iş sırrımızdır, ancak çıktının kalitesi demo görüşmesinde birebir test edilebilir."
  },
  {
    q: "Türk dili nasıl iyileştiriliyor?",
    a: "Kurulumda asistanın Türkçe yanıt kuralları işletmenize göre ayarlanır: sen/siz ayrımı tutarlı, kibarlık seviyesi marka tonuna göre ayarlı, sektör terimleri (reçete, irsaliye, tapu, fatura, SGK) bilgi tabanındaki tanımlara göre kullanılır. Bilgi tabanı ve yanıt kuralları canlı kullanımda gelen sorulara göre güncellenir; Büyüme ve Kurumsal paketlerde bunun için aylık iyileştirme saati vardır."
  },
  {
    q: "KVKK uyumu nasıl sağlanıyor?",
    a: "Asistan KVKK gerekliliklerini dikkate alarak kurgulanır: aydınlatma metni, açık rıza akışı, veri silme talebi yönetimi ve kişisel veri sormayan anonim mod kurulumda yapılandırılır. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Veri işlemeye ilişkin sözleşme maddeleri teklif aşamasında yazılı olarak netleştirilir. Hassas sektörler için ek güvenlik önlemleri (ör. erişim kaydı) kapsam görüşmesinde belirlenir."
  },
  {
    q: "Veri Türkiye'de mi tutuluyor?",
    a: "Bu, kullanılan altyapıya bağlıdır. Müşteri konuşma kayıtları, profil verileri ve sizin yüklediğiniz bilgi tabanı içeriklerinin hangi sağlayıcıda ve hangi bölgede tutulacağı teklifte yazılı olarak belirtilir. Yanıt üreten dil modeli sağlayıcıları yurt dışında olabilir; bu durumda yurt dışına aktarım için KVKK'nın aradığı şartlar (aydınlatma, açık rıza) kurulumda dikkate alınır. Veri hassasiyeti yüksek projelerde kendi sunucunuzda çalışan model seçeneği ayrıca değerlendirilir."
  },
  {
    q: "Hangi modeller destekleniyor?",
    a: "Kurumsal seviye premium dil modellerinden oluşan hibrit bir orkestrasyon altyapısı kullanıyoruz; Türkçe yanıt kurallarıyla yapılandırılır. Müşteri ihtiyacına göre uygun katman seçilir: genel KOBİ için hızlı yanıt profili, veri hassas projeler için kapsam görüşmesinde değerlendirilen kendi sunucunuzda çalışan model seçeneği, çok dilli ihracat için çok dilli katman. Hangi sağlayıcıların kullanıldığı ticari sırrımızdır; sözleşme aşamasında NDA altında paylaşılır."
  },
  {
    q: "Sen/siz seçimi nasıl yapılıyor?",
    a: "Kurulumda işletmenizin marka tonu belirlenir: resmi 'siz' (hukuk bürosu, finansal danışmanlık, sağlık kurumu) veya samimi 'sen' (kafe, butik, genç hedef kitleli markalar). Asistan tüm yanıtlarda bu tonu tutarlı kullanır. Karmaşık durumda otomatik 'siz'e geçer (örneğin şikayet, hukuki konu)."
  },
  {
    q: "Hangi kanalları destekliyor?",
    a: "WhatsApp Business API, Instagram DM, Facebook Messenger, Telegram, web sitesi canlı sohbeti ve e-posta. Tek bilgi tabanı tüm kanallarda tutarlı Türkçe yanıt verir. Müşteri WhatsApp'tan sorduğu soruyu yarın Instagram'dan sorarsa aynı yanıtı ve geçmişi görür. Paket kapsamındaki kanallar pakete göre değişir: Başlangıç pakette tek kanal (WhatsApp veya web sitesi), Kurumsal pakette Web + WhatsApp + Instagram; diğer kanallar teklifte yazılı olarak belirtilir."
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
              <span className="text-ink">Türkçe AI Chatbot</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Languages className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Yerli AI Çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Türkçe AI Chatbot | Doğal Türkçe, KVKK Odaklı Kurulum
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Yurtdışı GPT chatbotları İngilizce ağırlıklı eğitilmiş; doğrudan Türkçe sorduğunuzda yanıtlar tuhaf, çeviri kokuyor. PORTZEN&apos;in Türkçe AI chatbotu sen/siz ayrımı bilen, sektör terimlerinize göre ayarlanan ve KVKK gerekliliklerini dikkate alarak kurgulanan bir çözümdür; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir.
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

      <ServiceAtAGlance href="/ai-chatbot-turkce" />

      <MoreDetails title="Ayrıntılar: Yurtdışı chatbotların Türkçe sorunu" summary="Çeviri tabanlı botlar neden yetersiz kalıyor?">
      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* 3. SOLUTION */}
      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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

      <MoreDetails title="Ayrıntılar: Türkçe AI farkı" summary="Sen/siz, sektör jargonu, KVKK akışı ve çok kanal">
      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
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

      </MoreDetails>
      <MoreDetails title="Ayrıntılar: Örnek senaryo — hukuk bürosu" summary="Türkçe AI bot kurulumu nasıl işler?">
      {/* 5. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: hukuk bürosu
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: bir hukuk bürosunda Türkçe AI bot kurulumu nasıl işler?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda orta ölçekli bir hukuk bürosu, web sitesinde yurtdışı bir chatbot SaaS&apos;ı (aylık $79) kullanıyor. Danışanlardan gelen &quot;avukatlık ücreti ne kadar&quot;, &quot;boşanma davası ne kadar sürer&quot;, &quot;miras paylaşımı nasıl olur&quot; gibi soruları bot çevirili bir Türkçeyle yanıtlıyor: &quot;Sana yardım etmek için buradayım&quot;, &quot;Senin sorunu çözmek istiyorum&quot;. Resmi bir hukuk bürosu için bu ton uygun değil.
                </p>
                <p>
                  Ayrıca bot &quot;Yargıtay içtihadı&quot;, &quot;mehir&quot;, &quot;nafaka&quot;, &quot;ihtiyati tedbir&quot; gibi hukuk terimlerini ya hiç anlamıyor ya da yanlış kullanıyor. Konuşma verilerinin nerede tutulduğu ve danışana özel veri isteyen konuşmaların KVKK açısından nasıl ele alındığı belirsiz.
                </p>
                <p>
                  PORTZEN kurulumunda sen/siz tonu &quot;resmi siz&quot; olarak ayarlanır. Bilgi tabanına büronun avukatlık ücret tarifesi, sık sorulan soruları (boşanma, miras, ticaret hukuku) ve hukuk terimleri yüklenir. Anonim mod açılır: bot, danışan kimlik bilgisi sormadan genel bilgi verir, randevu aşamasında görüşmeyi insan avukata devreder.
                </p>
                <p>
                  Kurulumdan sonra iş akışı şöyle değişir: &quot;Avukatlık ücreti ne kadar&quot; sorusuna doğal Türkçe bir yanıt verilir: &quot;Davanızın türüne göre değişmekle birlikte, asgari ücret tarifesi üzerinden başlayan ücretlerimiz hakkında detaylı görüşme için randevu oluşturalım.&quot; Hukuk terimleri bilgi tabanındaki tanımlara göre kullanılır, aydınlatma ve açık rıza adımları konuşma akışına eklenir; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Devir</div>
                  <div className="font-display text-4xl font-black mb-1">İnsan avukat</div>
                  <div className="text-sm">Randevu aşamasında görüşme avukata devredilir</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Yanıt kalitesi</div>
                  <div className="font-display text-4xl font-black text-ink">Doğal TR</div>
                  <div className="text-sm">&quot;Siz&quot; formal, hukuk terimi tam</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Fiyatlandırma</div>
                  <div className="font-display text-4xl font-black text-ink">Sabit TL</div>
                  <div className="text-sm">Dolar bazlı, kur dalgalı abonelik yerine</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="ai-musteri-asistani" heading="Türkçe AI chatbot fiyatları" intro="Web sitesi chatbotu ve WhatsApp asistanı aynı hizmet ailesidir; fiyatlar ortaktır. Aylık ücretin hemen altında tek seferlik kurulum bedeli ve ilk ay toplamı yazılıdır. Tutarlar TL ve KDV hariçtir." />

      {/* 7. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
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
