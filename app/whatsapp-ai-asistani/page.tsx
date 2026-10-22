import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  MessageCircle,
  Clock3,
  ShieldCheck,
  Bot,
  Calendar,
  Languages,
  Database,
  PhoneCall,
  Building2,
  CheckCircle2
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { RelatedSectorsSection } from "@/components/landing/RelatedSectorsSection";
import { RelatedLocationsSection } from "@/components/landing/RelatedLocationsSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ServiceAtAGlance } from "@/components/visual/ServiceAtAGlance";
import { MoreDetails } from "@/components/visual/MoreDetails";
import { familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "WhatsApp AI Asistanı | 7/24 Müşteri Temsilcisi — PORTZEN",
  description:
    "WhatsApp AI asistanı kurulumu: gelen mesajlara otomatik yanıt, randevu açma, sipariş alma. KOBİ'ler için WhatsApp Business API üzerinden kurulum; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. 15 dakikalık ücretsiz keşif.",
  keywords: [
    "whatsapp ai asistanı",
    "whatsapp chatbot",
    "yapay zeka müşteri hizmetleri",
    "whatsapp business otomasyonu",
    "whatsapp bot kurulumu",
    "kobi whatsapp asistanı"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/whatsapp-ai-asistani",
    siteName: "PORTZEN",
    title: "WhatsApp AI Asistanı | 7/24 Müşteri Temsilcisi — PORTZEN",
    description:
      "Gelen WhatsApp mesajlarına otomatik yanıt veren, randevu açan, sipariş alan AI asistan. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Asistanı | 7/24 Müşteri Temsilcisi",
    description:
      "PORTZEN, KOBİ'ler için WhatsApp AI asistanı kurar. Mesajlara otomatik yanıt verir, 7/24 aktiftir; teslim süresi teklifte yazılı olarak belirtilir."
  },
  alternates: { canonical: "https://portzenai.com/whatsapp-ai-asistani" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WhatsApp AI Asistanı Kurulumu",
  serviceType: "WhatsApp Chatbot ve Yapay Zeka Müşteri Hizmetleri",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "WhatsApp Business API üzerinden çalışan, gelen mesajlara 7/24 yanıt veren, randevu oluşturan, sipariş alan AI asistan kurulumu. KOBİ ve markalar için; teslim süresi kapsama göre teklifte yazılı olarak belirtilir."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "WhatsApp AI asistanı kurulumu kaç gün sürer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Kurulum; ilk brief görüşmesi, bilgi tabanı oluşturma, bot eğitimi, test ve canlıya alma aşamalarını içerir. Sektöre özel karmaşık akışlar (örneğin çoklu şube veya stok entegrasyonu) kapsamı ve dolayısıyla süreyi büyütür."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp AI asistanı fiyatı ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `AI müşteri asistanı aylık ücret ve tek seferlik kurulumdan oluşur (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Meta mesaj ücretleri ve harici platform ücretleri ayrıca belirtilir.`
      }
    },
    {
      "@type": "Question",
      name: "Mevcut WhatsApp numaramı kullanabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet, WhatsApp Business API üzerinden mevcut numaranızı bu sisteme bağlıyoruz. Numara değişikliği gerekmez, müşterileriniz aynı numaradan size ulaşmaya devam eder."
      }
    },
    {
      "@type": "Question",
      name: "Bot her şeyi cevaplayabilir mi yoksa insan da gerekir mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asistan, bilgi tabanına eklenen sık sorulan soruları (fiyat, saat, adres, süreç gibi) kendisi yanıtlar. Bilgi tabanında karşılığı olmayan veya hassas durumlarda konuşmayı otomatik olarak insan temsilciye devreder. Böylece ekibiniz tekrar eden sorular yerine devredilen konuşmalarla ilgilenir."
      }
    },
    {
      "@type": "Question",
      name: "Hangi sektörler için uygun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eczane, klinik, estetik merkezi, restoran, hukuk bürosu, emlak ofisi, oto servis, butik, kuaför ve e-ticaret en sık uyguladığımız sektörler. Gelen mesaj yoğunluğu olan her işletme için uygun."
      }
    },
    {
      "@type": "Question",
      name: "Randevu ve CRM sistemimle entegre olur mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Randevu alma ve standart CRM entegrasyonu (Google Takvim, Calendly, HubSpot, Bitrix24 gibi) Büyüme paketinde, birden fazla standart entegrasyon Kurumsal pakette dahildir; Başlangıç paketinde randevu ve entegrasyon yoktur. Özel sistemleriniz için ek geliştirme ayrıca tekliflendirilir."
      }
    },
    {
      "@type": "Question",
      name: "Asistanı sonradan güncellemek mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bilgi tabanı ve yanıtlar aylık hizmet kapsamında güncellenir; Büyüme paketinde ayda 2 saat, Kurumsal pakette ayda 6 saat iyileştirme dahildir."
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
      name: "WhatsApp AI Asistanı",
      item: "https://portzenai.com/whatsapp-ai-asistani"
    }
  ]
};

const stats = [
  { metric: "Otomatik", label: "Gelen mesajlara ilk yanıt" },
  { metric: "7/24", label: "Gece, hafta sonu, tatil aktif" },
  { metric: "WhatsApp + web", label: "Kanal" },
  { metric: "Türkçe", label: "Dil (çok dilli yanıt seçeneğiyle)" }
];

const problems = [
  "Gelen WhatsApp mesajlarına saatlerce, bazen ertesi güne kadar yanıt veremiyorsunuz — müşteri rakibe gidiyor.",
  "Aynı 10-15 soru günde defalarca soruluyor: fiyat, saat, adres, stok. Ekibinizin enerjisi tükeniyor.",
  "Akşam 21:00'den sonra ve hafta sonu gelen mesajlar ya hiç görülmüyor ya da çok geç görülüyor.",
  "Randevu kaçırma oranı yüksek çünkü hatırlatma ve teyit süreci elle yapılıyor.",
  "Personel tatile çıktığında veya hastalandığında WhatsApp tamamen sahipsiz kalıyor."
];

const features = [
  {
    icon: Clock3,
    title: "Otomatik ilk yanıt",
    desc: "Gece 03:00'te gelen mesaja da asistan otomatik yanıt verir. Müşteri ilgisiz bırakılmaz."
  },
  {
    icon: Calendar,
    title: "Otomatik randevu açma",
    desc: "Büyüme ve Kurumsal paketlerde Google Takvim, Calendly veya kendi sisteminize doğrudan randevu kaydı yapar."
  },
  {
    icon: Database,
    title: "Bilgi tabanı entegrasyonu",
    desc: "Menü, fiyat listesi, kampanyalar — hepsi tek panelden güncellenir, asistan anlık bilir."
  },
  {
    icon: PhoneCall,
    title: "İnsan devri",
    desc: "Karmaşık durumda otomatik olarak ekibinize devreder, müşteri elden kaçmaz."
  },
  {
    icon: Languages,
    title: "Çok dilli yanıt",
    desc: "Türkçe, İngilizce, Arapça — turistik bölgeler ve ihracatçı markalar için ideal."
  },
  {
    icon: ShieldCheck,
    title: "KVKK gereklilikleri dikkate alınır",
    desc: "Akış, KVKK gerekliliklerini dikkate alarak kurgulanır (açık rıza, aydınlatma akışı) ve Meta'nın resmi WhatsApp Business API'si üzerinden çalışır. Konuşma verisinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir."
  }
];


const faqs = [
  {
    q: "WhatsApp AI asistanı kurulumu kaç gün sürer?",
    a: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Kurulum; brief görüşmesi, bilgi tabanı oluşturma, bot eğitimi, test ve canlıya alma aşamalarını içerir. Sektöre özel karmaşık akışlar (örneğin çoklu şube + stok entegrasyonu) kapsamı ve dolayısıyla süreyi büyütür."
  },
  {
    q: "Fiyatlandırma nasıl çalışıyor?",
    a: `AI müşteri asistanı aylık ücret ve tek seferlik kurulumdan oluşur (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Meta mesaj ücretleri ve harici platform ücretleri ayrıca belirtilir.`
  },
  {
    q: "Mevcut WhatsApp numaramı kaybeder miyim?",
    a: "Hayır. WhatsApp Business API'ye geçişte numaranız aynı kalır. Tek değişen şey: artık mesajlar normal WhatsApp uygulaması yerine API panelinden yönetilir. Müşterileriniz hiçbir farklılık görmez."
  },
  {
    q: "Bot her şeyi cevaplayabilir mi?",
    a: "Asistan, bilgi tabanına eklenen soruları kendisi yanıtlar. Yanıt veremeyeceği veya hassas durumları (örneğin şikayet, özel teklif) otomatik olarak insan temsilciye devreder. Böylece ekibiniz tekrar eden sorular yerine devredilen mesajlarla ilgilenir."
  },
  {
    q: "Eğitim ve bakım dahil mi?",
    a: "Aylık iyileştirme (senaryo güncelleme, yeni soru ekleme) Büyüme ve Kurumsal paketlerde pakete göre belirli saatlerle dahildir; Başlangıç paketinde aylık iyileştirme saati yoktur. Kurulum sırasında ekibinize sistemi nasıl yöneteceklerini gösteriyoruz."
  },
  {
    q: "CRM ve randevu sistemimle entegre olur mu?",
    a: "Google Takvim, Calendly, HubSpot, Bitrix24, Trello, Notion gibi popüler araçlara hazır entegrasyonumuz var. Randevu alma ve standart CRM entegrasyonu Büyüme paketinde, birden fazla standart entegrasyon Kurumsal pakette dahildir; Başlangıç paketinde randevu ve entegrasyon yoktur. Özel sistemler için keşif aşamasında geliştirme efor tahmini çıkarıp ayrıca tekliflendiriyoruz."
  },
  {
    q: "İzmir dışında hizmet veriyor musunuz?",
    a: "Evet. PORTZEN İzmir merkezli çalışıyor ama tüm Türkiye'ye uzaktan kurulum ve operasyon hizmeti sunuyoruz. Kurulum ve eğitim tamamen online yapılır. İzmir içinde talep edilirse yerinde de gelinebilir."
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
              <span className="text-ink">WhatsApp AI Asistanı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Bot className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">AI Müşteri Sistemleri</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  WhatsApp AI Asistanı | İşletmeniz İçin 7/24 Müşteri Temsilcisi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Gelen WhatsApp mesajlarına otomatik yanıt veren, randevu açan, sipariş alan, müşteriyi gece-gündüz bekletmeyen yapay zeka asistanı. PORTZEN, KOBİ&apos;ler ve markalar için bu sistemi kurar; teslim süresi kapsama göre teklifte yazılı olarak belirtilir — eczaneden kliniğe, restorandan emlak ofisine.
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

      <ServiceAtAGlance href="/whatsapp-ai-asistani" />

      <MoreDetails title="Ayrıntılar: Tanıdık sorunlar" summary="Kaçan mesajlar, tekrar eden sorular, mesai dışı talepler">
      {/* 2. PROBLEM */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                WhatsApp&apos;tan kaçırdığınız her mesaj, rakibinize yazılan bir mesajdır.
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
      {/* 4. FEATURES */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sistemin tam içeriği
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                WhatsApp AI asistanınızda neler var?
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

      <MoreDetails title="Ayrıntılar: Örnek senaryo — estetik klinik" summary="Mesajlar, randevu talepleri ve devir akışı tek sistemde">
      {/* 6. CASE STUDY */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: estetik klinik
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Bir estetik kliniği için örnek bir kurulum: mesajlar, randevu talepleri ve devir akışı tek sistemde.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda klinik, Instagram reklamlarından gelen DM ve WhatsApp mesajlarına yetişemiyor. Resepsiyon ekibi gün boyu aynı soruları yanıtlıyor, mesai dışında gelen talepler ertesi güne kalıyor ya da gözden kaçıyor.
                </p>
                <p>
                  Brief görüşmesinde sık sorulan sorular, fiyat aralıkları, tedavi süreçleri ve randevu kuralları birlikte çıkarılır. Bilgi tabanı hazırlanır, asistan kliniğin tonunda — sıcak ama profesyonel — eğitilir. Google Takvim&apos;e doğrudan randevu açan akış kurulur; karmaşık durumlarda konuşma otomatik olarak hekim asistanına devredilir.
                </p>
                <p>
                  Önce test ortamında örnek konuşmalarla denenir, ardından canlıya alınır. Bu noktadan sonra iş akışı değişir: sık sorulan sorulara asistan yanıt verir, randevu talebi WhatsApp&apos;tan alınıp takvime düşer, ekip yalnızca devredilen konuşmalarla ilgilenir.
                </p>
                <p>
                  Paketteki aylık iyileştirme saatleri kapsamında yeni tedaviler eklendikçe asistanın bilgi tabanı güncellenir, yetersiz kalan senaryolar yeniden yazılır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Elle</div>
                  <div className="text-sm">Mesajlar resepsiyonda tek tek yanıtlanıyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Telefon</div>
                  <div className="text-sm">Randevular telefonla, elle not ediliyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Takvim</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Akış</div>
                  <div className="font-display text-4xl font-black text-ink">WhatsApp</div>
                  <div className="text-sm">Randevu talebi WhatsApp&apos;tan otomatik alınıp takvime düşüyor</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      </MoreDetails>
      {/* FİYATLAR — kaynak: src/data/pricing.ts */}

      <PricingSection family="ai-musteri-asistani" heading="WhatsApp AI asistanı fiyatları" intro="WhatsApp ve web sitesi chatbotu aynı hizmet ailesidir. Aylık ücretin hemen altında tek seferlik kurulum bedeli ve ilk ay toplamı yazılıdır. Tutarlar TL ve KDV hariçtir." />


      {/* 8. FAQ */}
      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce merak edilenler
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
            <div className="mt-12 border-3 border-ink/10 bg-light p-6 rounded-2xl">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-ink" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Instagram&apos;dan da gelen DM&apos;leri otomatize etmek mi istiyorsunuz?</h3>
                  <p className="text-sm opacity-85 mb-3">
                    Instagram DM otomasyonu, yorum ve hikâye etkileşimine önceden tanımlı mesajlar gönderen kural tabanlı ayrı bir hizmettir. Instagram mesajlarını AI ile serbest yanıtlamak ise AI müşteri asistanı kapsamındadır (Instagram kanalı Kurumsal pakette). Ayrıntılar için Instagram DM Otomasyonu sayfamıza göz atın.
                  </p>
                  <Link
                    href="/instagram-dm-otomasyonu"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-ink hover:gap-2 transition-all"
                  >
                    Instagram DM Otomasyonu <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <RelatedSectorsSection service="whatsapp-ai-asistani" />
      <RelatedLocationsSection service="whatsapp-ai-asistani" />

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sisteminizi kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde sektörünüze ve mesaj hacminize uygun paketi birlikte belirliyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun — en kısa sürede dönüş yapıyoruz.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
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
