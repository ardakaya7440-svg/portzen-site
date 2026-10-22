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
  Bot,
  Wallet,
  Globe2,
  HeadphonesIcon,
  CheckCircle2,
  Building2,
  Languages,
  CreditCard
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { PricingSection, SinglePriceSection } from "@/components/pricing/PricingSection";

export const metadata: Metadata = {
  title: "ManyChat Alternatifi | Türkiye için WhatsApp + Instagram Otomasyonu — PORTZEN",
  description:
    "ManyChat yerine Türkçe destek, Meta'nın resmi WhatsApp Business API'si ve yerel ödeme entegrasyonu. Instagram'da kural tabanlı DM otomasyonu; serbest sorulara AI yanıtı ayrı hizmet olan AI müşteri asistanında. KVKK gerekliliklerini dikkate alarak kurgulanır.",
  keywords: [
    "manychat alternatifi",
    "manychat türkçe",
    "manychat yerine ne",
    "whatsapp bot türkiye",
    "instagram dm bot türkçe",
    "chatbot platform türkiye",
    "manychat tr alternatif",
    "kvkk uyumlu chatbot"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/manychat-alternatifi",
    siteName: "PORTZEN",
    title: "ManyChat Alternatifi | Türkiye için WhatsApp + Instagram Otomasyonu — PORTZEN",
    description:
      "Türkçe destek, resmi WhatsApp Business API, Iyzico entegre, KVKK gerekliliklerini dikkate alan kurgu — ManyChat'in KOBİ için yerel alternatifi."
  },
  twitter: {
    card: "summary_large_image",
    title: "ManyChat Alternatifi | PORTZEN",
    description:
      "ManyChat'in İngilizce arayüzü ve dolar faturası yerine Türkçe, KVKK gerekliliklerini dikkate alan çözüm."
  },
  alternates: { canonical: "https://portzenai.com/manychat-alternatifi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ManyChat Alternatifi — PORTZEN WhatsApp ve Instagram Otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  serviceType: "Messaging Automation",
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Türkiye pazarına özel WhatsApp Business API ve kural tabanlı Instagram DM otomasyonu; serbest sorulara AI ile yanıt, ayrı bir hizmet olan AI müşteri asistanı kapsamındadır. Türkçe destek, KVKK gerekliliklerini dikkate alan kurgu ve yerel entegrasyonlar."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ManyChat'ten PORTZEN'e taşınma süresi ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mevcut ManyChat akışlarınızı analiz edip PORTZEN üzerinde yeniden kuruyoruz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Eski sistemi kapatmadan paralel test edip onaydan sonra geçiş yapıyoruz, böylece kesinti olmuyor."
      }
    },
    {
      "@type": "Question",
      name: "ManyChat'teki mevcut abonelerimi/kullanıcılarımı kaybeder miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hayır. ManyChat'teki abone listenizi CSV olarak export edip PORTZEN'e import ediyoruz. WhatsApp Business API üzerinden onaylı şablonlarla iletişimi tekrar başlatıyoruz."
      }
    },
    {
      "@type": "Question",
      name: "ManyChat'in WhatsApp entegrasyonu resmi değil mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat WhatsApp için 3rd party çözümler kullanır ve Meta'nın resmi WhatsApp Business Platform iş ortağı listesinde değildir. PORTZEN doğrudan Meta'nın resmi WhatsApp Business API'sini kullanır — böylece 3rd party gateway kaynaklı askıya alınma riski belirgin şekilde azalır."
      }
    },
    {
      "@type": "Question",
      name: "İptal koşulları nasıl?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat genellikle yıllık peşin ödeme ister. PORTZEN'de sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir."
      }
    },
    {
      "@type": "Question",
      name: "KVKK uyumu için ne yapmam gerekiyor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum KVKK gerekliliklerini dikkate alarak kurgulanır: açık rıza ve aydınlatma akışı ile veri silme talep süreci kurulur. Konuşma verisinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. ManyChat'te bu akışları kendiniz kurmanız gerekir."
      }
    },
    {
      "@type": "Question",
      name: "Iyzico ve Param gibi yerel ödeme sistemleri entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, Iyzico, Param, PayTR ve Sipay ile hazır entegrasyonumuz var. ManyChat'in sadece Stripe ödeme akışı yerine yerel ödeme sistemlerini native kullanabilirsiniz."
      }
    },
    {
      "@type": "Question",
      name: "Türkçe doğal dil işleme ManyChat'ten farklı mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ManyChat'in İngilizce odaklı NLP'si Türkçe çekim eklerinde ve kibarlık kalıplarında zayıftır. PORTZEN'in AI müşteri asistanı (ayrı hizmet; Instagram kanalı Kurumsal pakette) premium dil modeli tabanlıdır ve Türkçe konuşma örnekleriyle ayarlanır — 'fiyatınız ne kadar acaba?' ile 'fiyat ne' aynı şekilde anlaşılır. Instagram DM otomasyonu ise kural tabanlıdır: anahtar kelime, yorum ve hikâye tetikleyicilerine önceden tanımlı mesajlarla yanıt verir."
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
      name: "ManyChat Alternatifi",
      item: "https://portzenai.com/manychat-alternatifi"
    }
  ]
};

const stats = [
  { metric: "Yerel", label: "Iyzico + Param + PayTR" },
  { metric: "Resmi", label: "WhatsApp Business API" },
  { metric: "KVKK", label: "Açık rıza + aydınlatma akışı" },
  { metric: "Kural + AI", label: "DM otomasyonu kural tabanlı; AI asistan ayrı hizmet" }
];

const painPoints = [
  {
    title: "Arayüz sadece İngilizce",
    desc: "ManyChat'in tüm paneli, eğitim materyali ve destek belgeleri İngilizce. Ekibinizin bot kuran kişisi bile akışları kurarken Google Translate ile boğuşuyor."
  },
  {
    title: "Dolar bazlı fatura, TL kazanç",
    desc: "Aboneliği USD üzerinden ödüyorsunuz, kur arttıkça maliyetiniz katlanıyor. ManyChat'in yerel faturalama veya yerel ödeme seçeneği yok."
  },
  {
    title: "WhatsApp resmi değil",
    desc: "ManyChat WhatsApp için 3rd party gateway kullanıyor — Meta tarafından numaranızın askıya alınma riski daima var."
  },
  {
    title: "Türk ödeme sistemleri entegre değil",
    desc: "Iyzico, Param, PayTR yok. Sadece Stripe ile ödeme alabiliyorsunuz; KOBİ müşterileri 3D Secure'la yerel kartla ödeyemiyor."
  },
  {
    title: "KVKK uyumu sizin sorununuz",
    desc: "Veri AB/ABD sunucularında. KVKK aydınlatma metni, veri silme talebi yönetimi, açık rıza — hepsini elle siz kurmak zorundasınız."
  }
];

const comparisonRows = [
  { feature: "Arayüz dili", manychat: "Sadece İngilizce", portzen: "Türkçe + İngilizce", manychatYes: false, portzenYes: true },
  { feature: "Faturalama modeli", manychat: "USD abonelik, kur riski", portzen: "Yerel çalışma modeli, sabit paket", manychatYes: false, portzenYes: true },
  { feature: "WhatsApp Business API (resmi)", manychat: "3rd party gateway", portzen: "Meta'nın resmi API'si üzerinden", manychatYes: false, portzenYes: true },
  { feature: "KVKK uyumu", manychat: "Sizin sorumluluğunuzda", portzen: "Açık rıza + aydınlatma akışı kurulur", manychatYes: false, portzenYes: true },
  { feature: "Türk ödeme (Iyzico/Param/PayTR)", manychat: "Yok", portzen: "Hazır entegre", manychatYes: false, portzenYes: true },
  { feature: "Türk muhasebe (Logo/Mikro)", manychat: "Yok", portzen: "Webhook + API", manychatYes: false, portzenYes: true },
  { feature: "Yerel canlı destek", manychat: "E-mail, 24-48 sa", portzen: "WhatsApp + telefon, en kısa sürede dönüş", manychatYes: false, portzenYes: true },
  { feature: "Sözleşme süresi", manychat: "Yıllık peşin", portzen: "Teklifte yazılı", manychatYes: false, portzenYes: true },
  { feature: "Veri lokalizasyonu", manychat: "ABD/AB sunucu", portzen: "Teklifte yazılı (altyapıya göre)", manychatYes: false, portzenYes: true },
  { feature: "Ticari model", manychat: "Sabit dolar plan basamakları", portzen: "Kapsam bazlı, brief görüşmesinde net", manychatYes: false, portzenYes: true }
];

const solutionSteps = [
  {
    icon: MessageCircle,
    title: "Brief",
    description: "Mevcut ManyChat akışlarınızı export edip birlikte inceliyoruz — hangi senaryolar kalsın, hangileri iyileşsin."
  },
  {
    icon: Bot,
    title: "Kurulum",
    description: "Resmi WhatsApp Business API başvurusu ve Instagram bağlantısı yapılır; Instagram'da kural tabanlı DM akışları (anahtar kelime, yorum, hikâye tetikleyicileri) kurulur. Serbest sorulara AI yanıtı istenirse AI müşteri asistanı (ayrı hizmet) yapılandırılır."
  },
  {
    icon: Sparkles,
    title: "Eğitim",
    description: "Ekibinize Türkçe panelden senaryo değiştirmeyi canlı olarak gösteriyoruz, kimseye ManyChat dökümanı okutturmuyoruz."
  },
  {
    icon: CheckCircle2,
    title: "Canlı",
    description: "Eski sistemle paralel test, sonra geçiş. Aboneler, etiketler ve akışlar eksiksiz taşınacak şekilde planlanır."
  }
];

const features = [
  { icon: Languages, title: "Türkçe NLP (AI müşteri asistanı)", desc: "AI müşteri asistanı (ayrı hizmet) premium dil modeli tabanlıdır, Türkçe konuşma örnekleriyle ayarlanır — 'fiyatınız ne acaba' ile 'fiyat ne' aynı algılanır. Instagram DM otomasyonu ise kural tabanlıdır." },
  { icon: ShieldCheck, title: "Resmi WhatsApp API", desc: "Meta'nın resmi WhatsApp Business API'si üzerinden; 3rd party gateway kullanılmaz. Yeşil tik başvurusunda destek veriyoruz, onay Meta'nın kararıdır." },
  { icon: CreditCard, title: "Iyzico + Param + PayTR", desc: "Müşteri WhatsApp'tan link tıklayıp 3D Secure ile yerel kart ödemesi yapar — komisyon Stripe'tan düşük." },
  { icon: Globe2, title: "KVKK Aydınlatma", desc: "Açık rıza akışı ve veri silme talep formu kurulur; verinin hangi sağlayıcıda ve bölgede tutulacağı teklifte yazılı olarak belirtilir." },
  { icon: HeadphonesIcon, title: "Türkçe canlı destek", desc: "WhatsApp + telefon ile en kısa sürede dönüş yapıyoruz. ManyChat'in e-mail-only desteği yerine gerçek insan." },
  { icon: Wallet, title: "Yerel çalışma modeli", desc: "TL fiyat (KDV hariç), yerel e-Arşiv fatura. Kur dalgalanmasından etkilenmezsiniz." }
];

const faqs = [
  {
    q: "ManyChat'ten PORTZEN'e taşınma süresi ne kadar?",
    a: "Mevcut ManyChat akışlarınızı analiz edip PORTZEN üzerinde yeniden kuruyoruz; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Eski sistemi kapatmadan paralel test edip onaydan sonra geçiş yapıyoruz, böylece kesinti olmuyor."
  },
  {
    q: "ManyChat'teki mevcut abonelerimi/kullanıcılarımı kaybeder miyim?",
    a: "Hayır. ManyChat'teki abone listenizi CSV olarak export edip PORTZEN'e import ediyoruz. Etiketler, segmentler ve geçmiş konuşma metadata'sı taşınır. WhatsApp Business API üzerinden onaylı şablonlarla iletişimi sürdürürsünüz."
  },
  {
    q: "ManyChat'in WhatsApp entegrasyonu resmi değil mi?",
    a: "ManyChat WhatsApp için 3rd party gateway kullanır ve Meta'nın resmi WhatsApp Business Solution Provider listesinde yer almaz. Bu da numaranızın askıya alınma riskini artırır. PORTZEN doğrudan Meta'nın resmi WhatsApp Business API'sini kullanır."
  },
  {
    q: "İptal koşulları nasıl?",
    a: "ManyChat genellikle yıllık peşin ödeme talep eder, iadesi karmaşıktır. PORTZEN'de sözleşme süresi ve fesih koşulları teklifte yazılı olarak belirtilir."
  },
  {
    q: "KVKK uyumu için ne yapmam gerekiyor?",
    a: "Kurulum KVKK gerekliliklerini dikkate alarak kurgulanır: açık rıza ve aydınlatma akışı ile veri silme talep süreci kurulur. Konuşma verisinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Aydınlatma metninin hukuki içeriği ve VERBİS kaydı gibi yükümlülükler veri sorumlusu olarak işletmenizdedir; ManyChat'te ise akışların tamamını da kendiniz kurmanız gerekir."
  },
  {
    q: "Iyzico ve Param gibi yerel ödeme sistemleri entegre olur mu?",
    a: "Evet. Iyzico, Param, PayTR ve Sipay ile hazır entegrasyonumuz var. Müşteri WhatsApp'tan ödeme linkine tıklar, 3D Secure ile yerel kart ödemesi yapar — başarılı olunca otomatik teyit mesajı gider. ManyChat'in sadece Stripe ödeme akışı yerine bu yerlidir."
  },
  {
    q: "Türkçe doğal dil işleme ManyChat'ten farklı mı?",
    a: "ManyChat'in İngilizce odaklı NLP'si Türkçe çekim eklerinde ('alabilir miyim', 'alır mıyım', 'alma') ve kibarlık kalıplarında ('acaba', 'lütfen', 'ricam') zayıftır. PORTZEN'in AI müşteri asistanı (ayrı hizmet; Instagram kanalı Kurumsal pakette) premium dil modeli tabanlıdır ve KOBİ müşterinizin kendiliğinden kurduğu cümleleri anlamak üzere Türkçe konuşma örnekleriyle ayarlanır. Instagram DM otomasyonu ise kural tabanlıdır: anahtar kelime, yorum ve hikâye tetikleyicilerine önceden tanımlı mesajlarla yanıt verir."
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
              <span className="text-ink">ManyChat Alternatifi</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">ManyChat Alternatifi</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  ManyChat Alternatifi: Türkiye için Yerel WhatsApp + Instagram Otomasyonu
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  ManyChat sadece İngilizce, USD faturalı ve KVKK&apos;ya uyumsuz. PORTZEN aynı işi resmi WhatsApp Business API, Türkçe panel ve Iyzico/Param entegrasyonu ile yapıyor. Instagram&apos;da DM otomasyonu kural tabanlıdır (anahtar kelime, yorum ve hikâye tetikleyicileri); serbest sorulara AI ile yanıt, ayrı bir hizmet olan AI müşteri asistanı kapsamındadır. Taşıma ve kurulum süresi kapsama göre teklifte yazılı olarak belirtilir.
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
                    href="/whatsapp-ai-asistani"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                  >
                    WhatsApp AI Asistanı <ArrowUpRight className="h-4 w-4" />
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
                Neden ManyChat&apos;ten kaçıyorsunuz?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                ManyChat KOBİ için fazla yabancı ve fazla uyumsuz.
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
                ManyChat vs PORTZEN — 10 kritik özellik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border-3 border-ink/15 shadow-brutal min-w-[700px] rounded-2xl">
                <thead>
                  <tr className="bg-light text-ink">
                    <th className="p-4 text-left font-black uppercase text-xs">Özellik</th>
                    <th className="p-4 text-center font-black uppercase text-xs">ManyChat</th>
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
              <strong>Kaynak:</strong> ManyChat özellik ve entegrasyon bilgileri manychat.com&apos;dan derlenmiştir; özellik ve fiyatlar değişebilir, güncel bilgi için resmi sayfayı kontrol edin.
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
                ManyChat&apos;ten 4 adımda nasıl çıkarsınız?
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
                ManyChat&apos;te olmayan 6 özellik
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
              Örnek senaryo: kadın giyim butiği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              ManyChat&apos;ten PORTZEN&apos;e örnek bir geçiş — Iyzico entegre, KVKK akışı kurulu, yerel faturalı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda ManyChat kullanan bir kadın giyim butiği düşünelim. Aylık fatura USD üzerinden geliyor, ödeme akışı Stripe&apos;a bağlı; müşterilerin çoğu yerel kartla 3D Secure ödeme yapmak istiyor.
                </p>
                <p>
                  Bu tür geçişlerde tipik 3 sorun görülür: (1) WhatsApp tarafında üçüncü parti gateway kullanıldığı için numaranın askıya alınma endişesi, (2) KVKK aydınlatma metni hazır ama akış kurulu değil, (3) mevcut abone listesini kaybetme endişesi.
                </p>
                <p>
                  Örnek kurulumda akışlar PORTZEN&apos;e taşınır: WhatsApp, Meta&apos;nın resmi WhatsApp Business API&apos;si üzerinden bağlanır (yeşil tik başvurusunda destek verilir, onay Meta&apos;nın kararıdır), Iyzico entegre edilip yerel ödeme akışı kurulur, KVKK aydınlatma mesajı WhatsApp şablonu olarak Meta onayına gönderilir. Abone listesi CSV ile etiketleriyle birlikte aktarılır. Instagram&apos;daki yorum ve hikâye tetikleyicili DM akışları kural tabanlı olarak yeniden kurulur.
                </p>
                <p>
                  İş akışında değişen: müşteri WhatsApp&apos;tan ödeme linkine tıklayıp yerel kartla 3D Secure ödeme yapar, başarılı ödemede teyit mesajı otomatik gider; hizmet bedeli TL ve yerel çalışma modeliyle faturalanır, kur dalgalanmasından etkilenmez.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Ödeme</div>
                  <div className="font-display text-4xl font-black mb-1">Iyzico</div>
                  <div className="text-sm">3D Secure ile yerel kart</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Abone taşıma</div>
                  <div className="font-display text-4xl font-black text-ink">CSV</div>
                  <div className="text-sm">Etiketlerle birlikte aktarılır</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">WhatsApp</div>
                  <div className="font-display text-4xl font-black text-ink">Resmi API</div>
                  <div className="text-sm">Meta&apos;nın WhatsApp Business API&apos;si</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <SinglePriceSection id="instagram-dm" heading="Instagram DM otomasyonu fiyatı" intro="Kural tabanlı DM otomasyonu. Serbest sorulara AI ile yanıt için AI müşteri asistanı paketleri geçerlidir. Tutarlar TL ve KDV hariçtir." />
      <PricingSection family="ai-musteri-asistani" id="ai-asistan" badge="AI müşteri asistanı" heading="AI müşteri asistanı fiyatları" />

      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                ManyChat&apos;ten geçmeden önce merak edilenler
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
                <h3 className="font-display text-base font-black mb-2">Zapier de mi pahalı geliyor?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Zapier&apos;in USD fiyatları ve Türk uygulamalarına entegrasyon eksikliği yerine yerel n8n+Make kombinasyonu.
                </p>
                <Link href="/zapier-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Zapier Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                <Building2 className="h-6 w-6 text-ink mb-3" />
                <h3 className="font-display text-base font-black mb-2">Tidio kullanıyorsanız?</h3>
                <p className="text-sm opacity-85 mb-3">
                  Tidio&apos;nun chat-only odağı yerine WhatsApp + IG + chat tek panelde — Türk pazarına özel.
                </p>
                <Link href="/tidio-alternatifi" className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all">
                  Tidio Alternatifi <ArrowUpRight className="h-3.5 w-3.5" />
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
                ManyChat&apos;i bırakın. PORTZEN&apos;i kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                30 dakikalık ücretsiz brief görüşmesinde mevcut ManyChat akışlarınızı analiz edip yerel, KVKK gerekliliklerini dikkate alan PORTZEN kurulumunu netleştiriyoruz. Kapsam ve net rakam bu görüşmede paylaşılır.
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
                <Link href="/blog/whatsapp-ai-asistani-nedir" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Blog: WhatsApp AI Asistanı Nedir <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/instagram-dm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  Instagram DM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
                <Link href="/crm-otomasyonu" className="inline-flex items-center gap-1 font-bold uppercase hover:underline">
                  CRM Otomasyonu <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
