import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  PawPrint,
  Bell,
  Calendar,
  Syringe,
  MessageCircle,
  ShieldCheck,
  Users
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Veteriner Aşı Hatırlatma WhatsApp Sistemi | PORTZEN",
  description:
    "Veteriner klinikler için aşı, muayene ve parazit takibini WhatsApp'tan otomatik hatırlatan sistem. Hasta sadakatini destekler, aşı takvimini takipte tutar. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir.",
  keywords: [
    "veteriner aşı hatırlatma",
    "veteriner whatsapp sistemi",
    "veteriner müşteri yönetimi",
    "evcil hayvan aşı takip",
    "veteriner crm",
    "veteriner otomasyon"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/veteriner-asi-hatirlatma-sistemi",
    siteName: "PORTZEN",
    title: "Veteriner Aşı Hatırlatma WhatsApp Sistemi | PORTZEN",
    description:
      "Kuduz, karma, iç-dış parazit — takvim geldiğinde sahibe otomatik WhatsApp gider. Aşı geri çağırma oranını artırmayı hedefler."
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteriner Aşı Hatırlatma WhatsApp Sistemi",
    description:
      "Aşı zamanı geldiğinde sahibe otomatik hatırlatma. Kaçırılan aşı ve kontrol randevularını azaltmayı hedefler."
  },
  alternates: { canonical: "https://portzenai.com/veteriner-asi-hatirlatma-sistemi" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Veteriner Aşı Hatırlatma WhatsApp Sistemi",
  serviceType: "Veteriner klinik müşteri iletişim otomasyonu",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905318639117",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Veteriner klinikleri için hasta kartı üzerinden aşı takvimi, muayene ve parazit hatırlatmalarını WhatsApp üzerinden otomatik gönderen sistem. KVKK gerekliliklerini dikkate alarak kurgulanır (açık rıza, aydınlatma akışı)."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Sistem hangi aşıları takip eder?", acceptedAnswer: { "@type": "Answer", text: "Kedi ve köpek için karma, kuduz, leptospiroz, iç ve dış parazit ilaçlarını ve klinik olarak kaydettiğiniz her aşıyı otomatik takip eder. Sonraki uygulama tarihi geldiğinde sahibe WhatsApp mesajı gider." } },
    { "@type": "Question", name: "Kurulum ne kadar sürer?", acceptedAnswer: { "@type": "Answer", text: "Teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Mevcut hasta kartlarınızın aktarımı yapılacaksa veri temizliği adımı eklenir. Brief görüşmesinde net süreyi birlikte çıkarıyoruz." } },
    { "@type": "Question", name: "Fiyatı ne kadar?", acceptedAnswer: { "@type": "Answer", text: `İş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. Hasta sayısı, aşı takvimi çeşitliliği ve ek modüller (kampanya, sadakat, çoklu klinik) hangi paketin yeteceğini belirler.` } },
    { "@type": "Question", name: "KVKK ve hayvan sahibinin izni nasıl yönetiliyor?", acceptedAnswer: { "@type": "Answer", text: "İlk kart açılışında açık rıza cümlesiyle onay alıyoruz. Sahip 'artık mesaj gelmesin' diyebilir; tek tıkla kayıt işaretlenir ve otomatik akıştan çıkarılır; bu işlemler loglanır. Verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir." } },
    { "@type": "Question", name: "Randevu da açabiliyor mu?", acceptedAnswer: { "@type": "Answer", text: "Evet. Sahip mesaja 'randevu almak istiyorum' yazarsa sistem uygun saatleri sunar ve doğrudan Google Takvim'inize randevu oluşturur. Karmaşık durumlarda veteriner hekime devreder." } },
    { "@type": "Question", name: "Mevcut hasta kartlarımı sisteme aktarabilir miyim?", acceptedAnswer: { "@type": "Answer", text: "Excel, CSV veya klinik yönetim yazılımınızdan çıktı alabilirseniz biz toplu olarak aktarıyoruz. Aşı takvimleri, hayvan bilgileri ve sahip bilgileri korunur; hangi aşının ne zaman yapılacağı otomatik hesaplanır." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "Veteriner Aşı Hatırlatma", item: "https://portzenai.com/veteriner-asi-hatirlatma-sistemi" }
  ]
};

const stats = [
  { metric: "WhatsApp", label: "Kanal" },
  { metric: "3 aşama", label: "Hatırlatma: 7 gün önce, 1 gün önce ve aynı gün" },
  { metric: "Tek seferlik", label: "Kurulum (isteğe bağlı aylık bakım)" },
  { metric: "KVKK", label: "Açık rıza akışı hazır teslim" }
];

const problems = [
  "Aşı takvimini elle takip ediyorsunuz; 200+ hastada birkaç kart mutlaka kaçırılıyor.",
  "Kuduz aşısı zamanı gelen köpek sahibi 3 ay sonra hatırlıyor; bu arada 'her yıl geliyordum' dediği kliniğe olan bağlılığı zayıflıyor.",
  "Ekibinizin bir kişisi hatırlatma mesajlarına ayrılmış — asıl işi yapamıyor.",
  "Karma aşının 21. gün rapelini kaçıran hasta baştan başlıyor; siz bunu geri istediğinizde 'gelmedi' oluyor.",
  "İç-dış parazit ilacı gibi 3 ayda bir tekrar eden ürünler unutuluyor, satış tekrar eden gelir olmaktan çıkıyor.",
  "Rakip klinik daha modern göründüğü için genç sahipler orada tercih ediyor; sizin klinikte 'sistemli takip' hissi yok."
];

const steps = [
  { n: "01", title: "Brief", desc: "Klinik protokollerini, aşı takvimlerini, kullandığınız markaları ve müşteri profilinizi kısa bir görüşmede birlikte çıkarıyoruz." },
  { n: "02", title: "Kurulum", desc: "Hasta kartı paneli, aşı takvim motoru, WhatsApp bildirim akışı ve KVKK açık rıza formu kurulur." },
  { n: "03", title: "Test", desc: "Mevcut 20 hasta kartıyla canlıya benzer test. Mesaj tonu, sıklık, hekim onayı — hepsi burada rafine edilir." },
  { n: "04", title: "Yayın", desc: "Toplu hasta kartı aktarımı ve canlı kullanım başlıyor. İlk 30 gün kurulum hatalarının giderilmesi dahildir." }
];

const features = [
  { icon: PawPrint, title: "Hasta kartı paneli", desc: "Her hayvan için tür, ırk, doğum tarihi, aşı geçmişi, alerji ve sahip bilgisi tek ekranda. Arama ile kart hızlıca açılır." },
  { icon: Bell, title: "Otomatik aşı hatırlatma", desc: "Sistem aşı takvimini bilir; 7 gün önce ve gün geldiğinde sahibe otomatik WhatsApp gönderir. Yanıt gelirse randevu akışına geçer." },
  { icon: Calendar, title: "Randevu entegrasyonu", desc: "Google Takvim veya kendi randevu sisteminize doğrudan bağlanır. Sahip mesaja cevap verirken randevu açılır." },
  { icon: Syringe, title: "Rapel takibi", desc: "Karma aşı gibi çift dozlu protokolleri sistem bilir; 21. gün rapelini takvime işler ve sahibe zamanında hatırlatır." },
  { icon: Users, title: "Sadakat kanalı", desc: "Doğum günü, klinik kampanya, mevsimlik uyarılar (kene, sıcak, kış) için tek panelden toplu duyuru — segmentli gönderim." },
  { icon: ShieldCheck, title: "KVKK ve hayvan sahibi rızası", desc: "KVKK gerekliliklerini dikkate alarak kurgulanır: ilk kayıtta açık rıza cümlesi, mesaj çıkma isteği tek tıkla, işlemler loglanır. Veri konumu altyapıya göre teklifte yazılı olarak belirtilir." }
];

const faqs = [
  { q: "Kaç gün önce hatırlatma gidiyor?", a: "Standart olarak 7 gün önce, 1 gün önce ve o günün sabahı — üç aşamalı hatırlatma. Amaç, kaçırılan aşı sayısını azaltmaktır. Klinik protokolünüze göre saat, sıklık ve mesaj tonunu birlikte ayarlıyoruz." },
  { q: "Sahibi 'artık mesaj gelmesin' derse ne olur?", a: "Mesaja 'kaldır' yazması yeterli; sistem otomatik olarak o kartı otomatik akıştan çıkarır. KVKK gereği bu isteği anında işleriz ve log tutarız. Hekim kaydı kliniğinizde kalmaya devam eder." },
  { q: "Klinik yönetim yazılımımla entegre olur mu?", a: "API veya CSV dışa aktarımı sunan klinik yazılımlarıyla entegre olabiliyoruz. Entegrasyon uygun değilse hasta kartı panelimizi ana ekran olarak kullanabilir, dışarıdan çıktı alabilirsiniz." },
  { q: "Fiyat nasıl belirleniyor?", a: `İş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. Hasta sayısı, aşı takvimi çeşitliliği ve ek modüller (kampanya, sadakat, çoklu klinik) hangi paketin yeteceğini belirler.` },
  { q: "Personelim bunu kullanabilecek mi?", a: "Panel tek ekranda; hekim asistanı kısa bir eğitimle yönetebilir. Ekip eğitimi Büyüme ve Kurumsal paketlerde dahildir; Kurumsal pakette yazılı dokümantasyon da teslim edilir. Kritik bir işlem yok — kartı aç, aşı yap, sistem gerisini halleder." },
  { q: "Klinik dışı ürün satışına (mama, oyuncak) uyar mı?", a: "Evet. Klinik CRM'i olarak kullanabilirsiniz; ürün satın alan sahibi 'bir sonraki torba mama tahmini' gibi akışlarla otomatik hatırlatılabilir. Böylece tekrar eden satış için ek bir hatırlatma kanalı oluşur." }
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
              <span className="text-ink">Veteriner Aşı Hatırlatma</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-white px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <PawPrint className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Veteriner çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Veteriner Aşı Hatırlatma <span className="font-normal">WhatsApp Sistemi</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Karma, kuduz, iç-dış parazit — her aşının takvimini sistem bilir, zamanı geldiğinde hayvan sahibine otomatik WhatsApp mesajı gider. Hatırlatmalar elle değil sistemle takip edilir. Teslim süresi kapsama göre teklifte yazılı olarak belirtilir.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                  >
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
                Aşı takvimini elle takip ettiğiniz her hasta, <span className="font-normal">unutulmaya aday.</span>
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
                Veteriner paketinizde neler <span className="font-normal">yer alıyor?</span>
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
              Örnek senaryo: tek şubeli veteriner kliniği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Tek şubeli bir veteriner kliniği için örnek kurulum: aşı takvimi defterden sisteme.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Örnek senaryoda klinik aşı takvimini defterde ve Excel&apos;de tutuyor; resepsiyondaki asistan boş vakitlerinde sahipleri tek tek arıyor. Aramaların bir kısmı karşılıksız kalıyor, karma aşının rapelini kaçıran hastalar gözden kaçabiliyor.
                </p>
                <p>
                  Brief görüşmesinde klinik protokolleri — kaç ayda bir hangi aşı, hangi rapel, hangi parazit tedavisi — birlikte çıkarılır. Hasta kartları sisteme aktarılır, aşı takvim motoru kurulur, WhatsApp bildirim tonu klinik diliyle (samimi, açıklayıcı, biraz sıcak) hazırlanır. KVKK açık rıza cümlesi kart açılış akışına yerleştirilir.
                </p>
                <p>
                  Bu noktadan sonra iş akışı değişir: aşı zamanı yaklaşan her hayvanın sahibine hatırlatma otomatik gider, sahibin yanıtı randevu akışına geçer, rapel tarihleri takvime kendiliğinden işlenir. Ekip hatırlatma araması yapmak yerine kliniğe gelen hastalarla ilgilenir.
                </p>
                <p>
                  İsteğe bağlı aylık bakım kapsamında mevsimsel uyarılar (kene sezonu, sıcak yaz, kış aşıları) eklenebilir. Doğum günü mesajı veya kliniğin kendi %20 mama sadakat kampanyası gibi duyurular da aynı kanaldan gönderilebilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Defter</div>
                  <div className="text-sm">Aşı takvimi defter ve Excel&apos;de, elle takip ediliyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Otomatik</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Akış</div>
                  <div className="font-display text-4xl font-black text-ink">WhatsApp</div>
                  <div className="text-sm">Hatırlatmaya gelen yanıt randevu akışına geçiyor</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Personel yükü</div>
                  <div className="font-display text-4xl font-black text-ink">Arama yok</div>
                  <div className="text-sm">Hatırlatma telefonla değil WhatsApp&apos;tan gidiyor</div>
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
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesajlara otomatik yanıt veren AI asistan.", href: "/whatsapp-ai-asistani" },
              { title: "Karşılaştırma", desc: "Yerli yazılımlar ile hazır SaaS'lar arasında hangisi klinik için doğru?", href: "/karsilastirma" },
              { title: "Veteriner Sektörü Sayfası", desc: "Veteriner klinikleri için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/veteriner" }
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
                Klinik takviminizi <span className="font-normal">sisteme geçirelim.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde klinik protokolünüzü konuşuyoruz, uygun kapsamı birlikte belirliyoruz. En kısa sürede dönüş yapıyoruz.
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
