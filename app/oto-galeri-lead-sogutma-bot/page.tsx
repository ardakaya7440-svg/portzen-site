import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Car,
  Zap,
  Users,
  MessageCircle,
  TrendingUp,
  Flame,
  Snowflake
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { familyPriceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Oto Galeri Lead Soğutma WhatsApp Bot | PORTZEN",
  description:
    "Oto galeri leadlerine WhatsApp'tan otomatik yanıt veren bot: test sürüşü randevusu, kredi ve ekspertiz yönlendirmesi, sıcak leadin satıcıya devri.",
  keywords: [
    "oto galeri lead soğutma",
    "oto galeri whatsapp bot",
    "araba satış lead takibi",
    "oto galeri crm",
    "galeri satış otomasyonu",
    "sıfır km 2. el satış otomasyonu"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/oto-galeri-lead-sogutma-bot",
    siteName: "PORTZEN",
    title: "Oto Galeri Lead Soğutma WhatsApp Bot | PORTZEN",
    description:
      "Reklamdan gelen leade otomatik yanıt ver, test sürüşü randevusu aç, kredi ve ekspertize yönlendir. Mesai dışında gelen mesajlar da karşılanır."
  },
  twitter: {
    card: "summary_large_image",
    title: "Oto Galeri Lead Soğutma WhatsApp Bot",
    description:
      "Satılık araca gelen onlarca mesaja tek tek yanıt vermek yerine; sistem karşılasın, ilgi düzeyini ölçsün, satışa hazırlasın."
  },
  alternates: { canonical: "https://portzenai.com/oto-galeri-lead-sogutma-bot" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Oto Galeri Lead Soğutma WhatsApp Bot",
  serviceType: "Otomotiv perakende lead yönetim otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Oto galeri ve galeri sitelerinden gelen leadleri (WhatsApp, ilan bağlantısı, form) otomatik karşılayan, sıcak-ılık-soğuk olarak segmentleyip test sürüşü, kredi ve ekspertize yönlendiren kurumsal AI botu."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Bot ne yapıyor?", acceptedAnswer: { "@type": "Answer", text: "Sahibinden, Arabam, Otoevi gibi ilan platformlarından ve Meta reklamlarınızdan gelen leadleri WhatsApp'ta otomatik karşılıyor. Aracın müsait olduğunu bildiriyor, test sürüşü randevusu açıyor, ödeme tercihini (peşin/kredi/takas) soruyor, ekspertize yönlendiriyor. Sıcak leadi satıcıya devrediyor, ılık leadi hafta içinde tekrar takip ediyor." } },
    { "@type": "Question", name: "Aracın satıldığını nasıl bildiriyorsunuz?", acceptedAnswer: { "@type": "Answer", text: "Panelden 'satıldı' işaretlerseniz o araca gelen tüm yeni leadlere nazikçe 'satıldı, benzer aracımız var mı bakalım' cevabı gider ve alternatif araçları önerir. Böylece satılmış araca gelen talep alternatif araçlara yönlendirilir." } },
    { "@type": "Question", name: "Test sürüşü randevusu nasıl açıyor?", acceptedAnswer: { "@type": "Answer", text: "Sistem müsait saatleri (Google Takvim veya kendi randevu sistemi) bilir. Müşteri 'Cumartesi 14:00 uygun mu?' derse sistem onaylar veya alternatif önerir. Randevu açıldığında satıcıya bildirim gider, hatırlatma otomatik yürür." } },
    { "@type": "Question", name: "Kredi ve ekspertize yönlendirmesi nasıl?", acceptedAnswer: { "@type": "Answer", text: "Müşteri 'kredi kullanmayı düşünüyorum' derse sistem çalıştığınız kredi partneri linklerini paylaşır. Ekspertiz için anlaşmalı olduğunuz merkezi önerir. Partnerlerinizle anlaşmanıza bağlı olarak bu yönlendirmeler galeri için ek gelir kanalı olabilir." } },
    { "@type": "Question", name: "Fiyat ne kadar?", acceptedAnswer: { "@type": "Answer", text: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Galerideki araç sayısı, aylık lead hacmi ve şube sayısı hangi paketin yeteceğini belirler. Test sürüşü randevusu ve CRM entegrasyonu Büyüme ve Kurumsal paketlerde yer alır; Başlangıç paketi tek kanalda (WhatsApp veya web sitesi) sık sorulan soruları yanıtlar ve müşteri bilgisi toplar. Meta mesaj ücretleri hizmet bedeline dahil değildir.` } },
    { "@type": "Question", name: "İkinci el ve sıfır km ayrı akışları var mı?", acceptedAnswer: { "@type": "Answer", text: "Evet. 2. el için ekspertiz, garanti, geçmiş kilometre gibi sorular; sıfır km için kredi, teslim tarihi, tramer sorusu gibi ayrı akışlar kuruluyor. Aracın özelliğine göre bot doğru senaryo ile karşılıyor." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "Oto Galeri Lead Soğutma Bot", item: "https://portzenai.com/oto-galeri-lead-sogutma-bot" }
  ]
};

const stats = [
  { metric: "Otomatik", label: "İlk yanıt, gece-gündüz" },
  { metric: "3 seviye", label: "Sıcak-ılık-soğuk lead ayrımı" },
  { metric: "Teklifte", label: "Kurulum süresi kapsama göre yazılı belirtilir" },
  { metric: "7/24", label: "Bayram, hafta sonu, akşam saati" }
];

const problems = [
  "İlanınızın altında onlarca mesaj birikiyor; siz satıştayken saatler geçiyor, bekleyen alıcıların bir kısmı başka galeriye yöneliyor.",
  "Reklamdan gelen ilgi hızla soğur; ekibiniz toplantıdayken alıcı rakibe yazabilir.",
  "Aynı arabaya çok sayıda kişi soruyor: km, ekspertiz, kredi, takas — hepsine tek tek yazmak enerji tüketiyor.",
  "Satıcı ekibiniz sıcak leade cevap yetiştirmeye çalışırken sıcak müşteri servis alacak yerde manevra yapıyor.",
  "Test sürüşü isteği geldiğinde uygun saati bulmak için ileri-geri mesajlaşma uzuyor — zaman ölüyor.",
  "Satılan aracın altındaki mesajlaşma durmuyor, ekip 'satıldı' demek için bile enerji harcıyor."
];

const steps = [
  { n: "01", title: "Brief", desc: "Galerinizin satış akışını, hangi ilan platformlarını kullandığınızı, tipik müşteri sorularını kısa bir görüşmede birlikte çıkarıyoruz." },
  { n: "02", title: "Kurulum", desc: "WhatsApp Business API + araç veri paneli + test sürüşü randevu akışı + kredi/ekspertiz partner linkleri hazır." },
  { n: "03", title: "Test", desc: "Pilot ilanlarla canlıya benzer test akışı. Mesaj tonu, sıcak lead tespiti, satıcı devir zamanı — hepsi rafine edilir." },
  { n: "04", title: "Yayın", desc: "Tüm ilanlar canlıya alınır. Hangi senaryonun hangi araç için daha iyi çalıştığı panel verileriyle birlikte değerlendirilir (aylık iyileştirme saatleri Büyüme ve Kurumsal paketlerde yer alır)." }
];

const features = [
  { icon: Zap, title: "Otomatik karşılama", desc: "İlan altına gelen mesaja bot doğrudan yanıt verir. Aracın müsait olup olmadığı, temel özellikleri, test sürüşü için müsaitlik — hepsi anında paylaşılır." },
  { icon: Flame, title: "Sıcak-ılık-soğuk segmentasyon", desc: "Müşteri cevap tarzına göre otomatik segmentlenir. Sıcak lead direkt satıcıya devredilir, ılık lead 48 saat sonra hatırlatılır, soğuk lead haftalık akışa alınır." },
  { icon: Car, title: "Araç veri paneli", desc: "Her ilan için km, tramer, garanti, ekstra donanım, video, ekspertiz raporu — tek yerde. Müşteri sorduğunda anında paylaşılır." },
  { icon: Users, title: "Test sürüşü randevusu", desc: "Müsait saatler paneli üzerinden bot doğrudan randevu açar, satıcı ekibine bildirim yapar, gitmeden 3 saat önce müşteri hatırlatma gönderir." },
  { icon: TrendingUp, title: "Satış sonrası CRM", desc: "Aracını sattıktan sonra müşteri 6 ay sonra ekspertiz, sigorta, bakım için otomatik iletişime geçilir. Müşteriyle ilişki satıştan sonra da sürer." },
  { icon: Snowflake, title: "Satıldı otomasyonu", desc: "Panelde 'satıldı' işaretinden sonra o araca gelen yeni mesajlara alternatif araç önerir; talep boşa gitmez." }
];

const faqs = [
  { q: "Bot 40 ayrı ilana ayrı akış kurabilir mi?", a: "Evet. Her aracın kendi veri kartı vardır: km, tramer, garanti, video, ekspertiz raporu, fiyat notu. Bot mesajı hangi ilandan geldiğini bilerek doğru cevabı verir. Panelden herhangi bir aracı 'satıldı' işaretlemek yeterli." },
  { q: "Sıcak leadi nasıl anlıyor?", a: "Belirli sinyaller var: test sürüşü isteme, kredi sorma, aracın 'şimdi bakıp gelmek istiyorum' demesi, takas aracı fotoğrafı göndermesi. Sistem bu sinyalleri okuduğunda satıcıya anında bildirim gönderir. Ilık lead ise 'bakalım', 'düşünüyorum', 'başka aracınız var mı' gibi cevaplarda 48 saat sonra tekrar temas kurulur." },
  { q: "Fiyat ne kadar?", a: `AI müşteri asistanı paketleri (KDV hariç): ${familyPriceSummary("ai-musteri-asistani")}. Galerideki araç sayısı, aylık lead hacmi ve şube sayısı hangi paketin yeteceğini belirler. Test sürüşü randevusu ve CRM entegrasyonu Büyüme ve Kurumsal paketlerde yer alır; Başlangıç paketi tek kanalda (WhatsApp veya web sitesi) sık sorulan soruları yanıtlar ve müşteri bilgisi toplar. Meta mesaj ücretleri hizmet bedeline dahil değildir.` },
  { q: "Sahibinden ve Arabam mesajlarını da yakalar mı?", a: "Sahibinden ve Arabam WhatsApp'a doğrudan yönlendirir; bot buradan devraldığı mesajları yönetir. İlan telefonu ile WhatsApp aynı numaraya geliyor olması yeterli. Direkt platform içi mesaj kutusu için ayrı entegrasyon konuşuyoruz." },
  { q: "Kredi ve ekspertiz partnerlerimden ek gelir yaratır mı?", a: "Bot müşteriyi anlaşmalı kredi/ekspertiz linkine yönlendirir; partnerlerinizle anlaşmanıza göre galeri komisyon veya sabit ücret alabilir. Bu tutarlar sizin partner anlaşmanıza bağlıdır; yönlendirme akışını brief görüşmesinde birlikte kurgularız." },
  { q: "Personel bunu kullanabilecek mi?", a: "Satıcı sadece 'sıcak lead düştü' bildirimini alır, panelden konuşmayı devralır. Ekleme/güncelleme yapmak istediğinde tek sayfa panel yeter; panel kullanımı kısa bir tanıtımla gösterilir." }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-8 text-xs font-bold uppercase tracking-wider text-ink/60">
              <Link href="/" className="hover:text-ink transition-colors">Anasayfa</Link>
              <span className="mx-2">/</span>
              <span className="text-ink">Oto Galeri Lead Soğutma Bot</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Car className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Otomotiv çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Oto Galeri Lead Soğutma <span className="font-normal">WhatsApp Bot</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Sahibinden, Arabam, Otoevi ve Meta reklamlarından gelen leadleri otomatik karşılayan, sıcak-ılık-soğuk olarak segmentleyip test sürüşü, kredi ve ekspertize yönlendiren galeri satış botu. Sizin ekip satarken sistem karşılıyor.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">
                    Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={cn("border-3 border-ink/15 p-5 shadow-brutal rounded-2xl", i % 2 === 0 ? "bg-light" : "bg-light text-ink")}>
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">{s.metric}</div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Lead hızla soğur, <span className="font-normal">rakibinizin telefonunu arar.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-ink/10 bg-light p-5 rounded-2xl">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adımda canlıya geçiş.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink/15 bg-paper text-ink p-6 shadow-brutal h-full rounded-2xl">
                  <div className="font-display text-5xl font-black opacity-30 mb-3">{s.n}</div>
                  <h3 className="font-display text-xl font-black mb-2">{s.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Galeri paketinizde neler <span className="font-normal">yer alıyor?</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
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

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-paper text-ink px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
              Örnek senaryo: 2. el oto galerisi
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek bir kurulum: 2. el galerisinde lead karşılama, segmentasyon ve test sürüşü akışı.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda Sahibinden ve Arabam.com üzerinden yoğun WhatsApp leadi alan bir 2. el galerisi düşünelim. Küçük satış ekibi mesajlaşmayı yetiştiremiyor, yanıtlar saatler sonra gidiyor; akşam ve hafta sonu gelen mesajlar ertesi iş gününe kalıyor.
                </p>
                <p>
                  Brief görüşmesinde satış akışı, hangi platformdan hangi tür lead geldiği ve tipik müşteri soruları birlikte çıkarılır. WhatsApp Business API üzerinden bot altyapısı kurulur. Her aracın veri kartı (km, tramer, video, ekspertiz raporu, taksit tablosu) sisteme yüklenir. Sıcak lead → satıcı bildirimi, ılık lead → 48 saat sonra takip, soğuk lead → haftalık kampanya akışı kurgulanır.
                </p>
                <p>
                  İş akışında değişen: ilk mesaj gece-gündüz otomatik yanıtlanır, sık sorulan sorular (km, ekspertiz, kredi, takas) veri kartından cevaplanır, test sürüşü randevusu takvime düşer. Satıcı ekibi yalnızca sıcak leade odaklanır; ilk mesajlaşma aşamasını bot yönetir. Kredi partneri yönlendirmesi de aynı akış içinde yapılır.
                </p>
                <p>
                  Aylık iyileştirmede hangi araç segmentinin hangi mesaj tonuyla daha iyi döndüğü panel verilerine göre gözden geçirilir (iyileştirme saatleri Büyüme ve Kurumsal paketlerde yer alır). Satıldı işaretli araçlara gelen yeni leadler alternatif araçlara yönlendirilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-lg font-black mb-1">Mesajlar satıcı müsait olunca tek tek yanıtlanıyor</div>
                  <div className="text-sm">İlk yanıt</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-lg font-black text-ink">İlk yanıt WhatsApp&apos;tan otomatik gidiyor, sıcak lead satıcıya düşüyor</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Lead ayrımı</div>
                  <div className="font-display text-4xl font-black text-ink">3 seviye</div>
                  <div className="text-sm">Sıcak, ılık, soğuk</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Test sürüşü</div>
                  <div className="font-display text-4xl font-black text-ink">Takvim</div>
                  <div className="text-sm">Randevu otomatik açılır, hatırlatma gider</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white text-ink py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-ink/10 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 rounded-full">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce <span className="font-normal">merak edilenler</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-ink/15 pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                İlgili içerik
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Konuya devam etmek isteyene
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesajlara otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "CRM Otomasyonu", desc: "Satış ekibi için lead yönetim ve süreç otomasyonu.", href: "/crm-otomasyonu" },
              { title: "Karşılaştırma", desc: "Yerli otomasyon vs hazır SaaS — hangisi galeri için doğru?", href: "/karsilastirma" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href={r.href} className="block border-3 border-ink/15 bg-paper p-6 shadow-brutal hover:shadow-brutal-lg transition-all h-full rounded-2xl">
                  <ArrowUpRight className="h-6 w-6 text-ink mb-4" />
                  <h3 className="font-display text-lg font-black mb-2 text-ink">{r.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{r.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink/15 bg-light p-8 md:p-14 shadow-brutal-lg text-ink rounded-2xl">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Sıcak leadi <span className="font-normal">soğumadan yakalayalım.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde galerinizin satış akışını konuşuyoruz, uygun kapsamı birlikte belirliyoruz.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">
                  Teklif İsteyin <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/905318639117" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div><a href="tel:+905318639117" className="font-bold hover:underline">0531 863 91 17</a></div>
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">E-posta</div><a href="mailto:destek@portzenai.com" className="font-bold hover:underline break-all">destek@portzenai.com</a></div>
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Konum</div><span className="font-bold">İzmir — Türkiye geneli uzaktan</span></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
