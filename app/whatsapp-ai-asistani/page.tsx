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

export const metadata: Metadata = {
  title: "WhatsApp AI Asistanı | 7/24 Müşteri Temsilcisi — PORTZEN",
  description:
    "WhatsApp AI asistanı kurulumu: gelen mesajlara 60 saniyede yanıt, randevu açma, sipariş alma. KOBİ için 14 günde devreye girer. 15 dakikalık ücretsiz keşif.",
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
      "Gelen WhatsApp mesajlarına 60 saniyede yanıt veren, randevu açan, sipariş alan AI asistan. 14 günde kurulum."
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Asistanı | 7/24 Müşteri Temsilcisi",
    description:
      "PORTZEN, KOBİ'ler için WhatsApp AI asistanı kurar. 60 saniyede ilk yanıt, 14 günde kurulum, 7/24 aktif."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "WhatsApp Business API üzerinden çalışan, gelen mesajlara 7/24 yanıt veren, randevu oluşturan, sipariş alan AI asistan kurulumu. KOBİ ve markalar için 14 günde devreye giren sistem.",
  offers: {
    "@type": "Offer",
    priceCurrency: "TRY",
    priceRange: "₺8500-₺75000",
    availability: "https://schema.org/InStock"
  }
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
        text: "Standart bir KOBİ için kurulum 10-14 iş günü sürer. İlk brief görüşmesi, bilgi tabanı oluşturma, bot eğitimi, test ve canlıya alma aşamalarını içerir. Sektöre özel karmaşık akışlar 3 haftaya çıkabilir."
      }
    },
    {
      "@type": "Question",
      name: "WhatsApp AI asistanı fiyatı ne kadar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kurulum 25.000 TL'den başlar, aylık operasyon bakım ücreti 8.500 TL'den itibarendir. Kesin fiyat günlük mesaj hacmi, entegrasyon sayısı ve sektör karmaşıklığına göre keşif görüşmesinde netleşir."
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
        text: "Asistan, sektörünüze ait sık sorulan soruların yaklaşık %75-85'ini tek başına çözer. Karmaşık durumlarda otomatik olarak insan temsilciye devreder. Yani manuel iş yükü azalır, kaybolan müşteri olmaz."
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
        text: "Evet, Google Takvim, Calendly, HubSpot, Bitrix24 gibi sık kullanılan araçlara entegre ederiz. Özel sistemleriniz için ek geliştirme planlanır."
      }
    },
    {
      "@type": "Question",
      name: "Asistanı sonradan güncellemek mümkün mü?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aylık bakım paketine dahil olarak senaryoları, yanıtları ve bilgi tabanını her ay güncelleriz. Acil değişiklikler 24 saat içinde devreye alınır."
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
  { metric: "60 sn", label: "İlk yanıt süresi hedefi" },
  { metric: "7/24", label: "Gece, hafta sonu, tatil aktif" },
  { metric: "%78", label: "Estetik klinik vakasında mesaj yükü azalması" },
  { metric: "14 gün", label: "Standart kurulum süresi" }
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
    title: "60 saniyede ilk yanıt",
    desc: "Gece 03:00'te gelen mesaj bile bekletmeden yanıtlanır. Müşteri ilgisiz bırakılmaz."
  },
  {
    icon: Calendar,
    title: "Otomatik randevu açma",
    desc: "Google Takvim, Calendly veya kendi sisteminize doğrudan randevu kaydı yapar."
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
    title: "KVKK uyumlu",
    desc: "Tüm konuşmalar Türkiye sunucularında, KVKK ve WhatsApp politikalarına uygun saklanır."
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
      "Aylık 2.000 mesaja kadar",
      "Standart soru-cevap senaryoları",
      "WhatsApp Business API",
      "Google Takvim entegrasyonu",
      "Aylık 1 optimizasyon turu"
    ],
    cta: "Projeyi Konuşalım"
  },
  {
    name: "Pro",
    price: "16.500 TL",
    period: "/ay",
    setup: "Kurulum: 35.000 TL",
    color: "bg-brand-yellow",
    badge: "En Çok Tercih Edilen",
    features: [
      "Aylık 8.000 mesaja kadar",
      "Özel akışlar + sipariş alımı",
      "CRM entegrasyonu (Hubspot/Bitrix)",
      "Çok dilli yanıt",
      "Haftalık optimizasyon",
      "İnsan devir yönetimi"
    ],
    cta: "Pro Paketi Konuşalım"
  },
  {
    name: "Kurumsal",
    price: "Özel",
    period: "",
    setup: "Kurulum: 45.000 TL+",
    color: "bg-paper",
    features: [
      "Sınırsız mesaj",
      "Birden fazla numara/şube",
      "Özel API entegrasyonları",
      "Adanmış proje yöneticisi",
      "SLA ve öncelikli destek",
      "Aylık detaylı analiz raporu"
    ],
    cta: "Kurumsal Teklif"
  }
];

const faqs = [
  {
    q: "WhatsApp AI asistanı kurulumu kaç gün sürer?",
    a: "Standart bir KOBİ için kurulum 10-14 iş günü sürer. Brief görüşmesi, bilgi tabanı oluşturma, bot eğitimi, test ve canlıya alma aşamalarını içerir. Sektöre özel karmaşık akışlar (örneğin çoklu şube + stok entegrasyonu) 3 haftaya çıkabilir."
  },
  {
    q: "Fiyatlandırma nasıl çalışıyor?",
    a: "Kurulum tek seferlik 25.000-45.000 TL aralığındadır. Aylık operasyon ve bakım ücreti 8.500 TL'den başlar, mesaj hacmi ve entegrasyon sayısına göre değişir. WhatsApp Business API'nin Meta'ya ödenen mesaj başına ücreti ayrıca işler."
  },
  {
    q: "Mevcut WhatsApp numaramı kaybeder miyim?",
    a: "Hayır. WhatsApp Business API'ye geçişte numaranız aynı kalır. Tek değişen şey: artık mesajlar normal WhatsApp uygulaması yerine API panelinden yönetilir. Müşterileriniz hiçbir farklılık görmez."
  },
  {
    q: "Bot her şeyi cevaplayabilir mi?",
    a: "Asistan, sektörünüze ait soruların %75-85'ini tek başına çözer. Yanıt veremeyeceği veya hassas durumları (örneğin şikayet, özel teklif) otomatik olarak insan temsilciye devreder. Yani ekibiniz sadece gerçekten önemli mesajlarla ilgilenir."
  },
  {
    q: "Eğitim ve bakım dahil mi?",
    a: "Aylık paket; senaryo güncelleme, yeni soru ekleme, hata düzeltme ve performans raporlamayı içerir. Ekibinizden 1-2 kişiye sistemi nasıl yöneteceklerine dair 2 saatlik canlı eğitim veriyoruz."
  },
  {
    q: "CRM ve randevu sistemimle entegre olur mu?",
    a: "Google Takvim, Calendly, HubSpot, Bitrix24, Trello, Notion gibi popüler araçlara hazır entegrasyon var. Özel sistemler için keşif aşamasında geliştirme efor tahmini çıkarıyoruz."
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
      <section className="bg-paper py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-green text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Bot className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">AI Müşteri Sistemleri</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  WhatsApp AI Asistanı | İşletmeniz İçin 7/24 Müşteri Temsilcisi
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Gelen WhatsApp mesajlarına 60 saniyede yanıt veren, randevu açan, sipariş alan, müşteriyi gece-gündüz bekleten yapay zeka asistanı. PORTZEN, KOBİ'ler ve markalar için bu sistemi 14 günde kurar — eczaneden kliniğe, restorandan emlak ofisine.
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
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                WhatsApp'tan kaçırdığınız her mesaj, rakibinize yazılan bir mesajdır.
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

      {/* 4. FEATURES */}
      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
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

      {/* 6. CASE STUDY */}
      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Gerçek bir örnek: estetik klinik
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              İzmir'de bir estetik kliniği için 14 günde kurduğumuz sistem, ilk ay 312 yeni randevu getirdi.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Klinik, Instagram reklamlarından gelen DM ve WhatsApp mesajlarına yetişemiyordu. Resepsiyon ekibi günde 200+ mesajla boğuşuyor, gece gelen taleplerin %60'ı kayboluyordu. Müşteriler "Cevap gelmedi, başka kliniğe gittim" mesajları atmaya başlamıştı.
                </p>
                <p>
                  Brief görüşmesinde tüm sık sorulan soruları, fiyat aralıklarını, tedavi süreçlerini ve randevu kurallarını birlikte çıkardık. 5 günde bilgi tabanını hazırladık, asistanı kliniğin tonunda — sıcak ama profesyonel — eğittik. Google Takvim'e doğrudan randevu açan akış kurduk; karmaşık vakalarda otomatik olarak hekim asistanına devrettik.
                </p>
                <p>
                  Pilot ilk hafta sürdü. İkinci hafta canlıya aldık. Bir ay sonraki rapor net konuştu: yanıt süresi 4 saatten 38 saniyeye düştü, manuel mesaj yükü %78 azaldı ve sadece WhatsApp üzerinden 312 yeni randevu açıldı. Ekip artık sadece gerçekten karmaşık vakalarla ilgileniyor.
                </p>
                <p>
                  Aylık bakımda haftalık optimizasyon yapıyoruz: yeni tedaviler eklenince asistanın bilgi tabanı güncellenir, kötü performans gösteren senaryolar yeniden yazılır.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">4 sa</div>
                  <div className="text-sm">Ortalama yanıt süresi</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">38 sn</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">%40</div>
                  <div className="text-sm">DM dönüşüm oranı</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">%72</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">İlk ay</div>
                  <div className="font-display text-4xl font-black text-brand-pink">312</div>
                  <div className="text-sm">Yeni randevu (sadece WhatsApp)</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. PRICING */}
      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-orange text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Şeffaf fiyatlandırma
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Hangi paket size uygun?
              </h2>
              <p className="mt-4 text-body text-ink/70 max-w-prose">
                3 paket var — başlangıç KOBİ'sinden çoklu şubeli markaya kadar. Net rakam keşif görüşmesinde verilir.
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
                    p.color === "bg-brand-yellow" ? "text-ink" : "text-ink"
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
          <Reveal delay={300}>
            <p className="mt-8 text-sm text-ink/60 max-w-2xl">
              <strong>Not:</strong> Tam fiyat sektör + müşteri yoğunluğuna göre değişir — 15 dakikalık keşif görüşmesinde netleşir. WhatsApp Business API'nin Meta'ya ödenen mesaj başına ücreti ayrıca işler.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-6 border-3 border-ink bg-brand-blue text-paper p-5 shadow-brutal flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-display text-lg font-black mb-1">İlgili okuma</div>
                <p className="text-sm opacity-90">
                  WhatsApp AI asistanı nedir, nasıl çalışır — detaylı rehber için blog yazımıza bakın.
                </p>
              </div>
              <Link
                href="/blog/whatsapp-ai-asistani-nedir"
                className="inline-flex items-center gap-1 border-3 border-paper bg-paper text-ink px-4 py-2 text-xs font-bold uppercase shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Rehberi Oku <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
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
                <div className="border-l-3 border-brand-yellow pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 border-3 border-paper bg-paper/5 p-6 shadow-[6px_6px_0_#FFFDF5]">
              <div className="flex items-start gap-4 flex-wrap">
                <Building2 className="h-6 w-6 shrink-0 text-brand-yellow" />
                <div className="flex-1 min-w-[200px]">
                  <h3 className="font-display text-lg font-black mb-2">Instagram'dan da gelen DM'leri otomatize etmek mi istiyorsunuz?</h3>
                  <p className="text-sm opacity-85 mb-3">
                    WhatsApp + Instagram DM'yi tek panelden yönetmek isteyen markalar için Instagram DM Otomasyonu sayfamıza göz atın.
                  </p>
                  <Link
                    href="/instagram-dm-otomasyonu"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase text-brand-yellow hover:gap-2 transition-all"
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sisteminizi kuralım.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık ücretsiz keşif görüşmesinde sektörünüze ve mesaj hacminize uygun paketi birlikte belirliyoruz. Hemen WhatsApp yazın veya iletişim formunu doldurun — aynı gün dönüyoruz.
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
                  <MessageCircle className="h-4 w-4" /> WhatsApp ile Mesaj At
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  İletişim Formu <ArrowUpRight className="h-4 w-4" />
                </Link>
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
