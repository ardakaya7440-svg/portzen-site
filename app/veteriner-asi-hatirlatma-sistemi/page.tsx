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

export const metadata: Metadata = {
  title: "Veteriner Aşı Hatırlatma WhatsApp Sistemi | PORTZEN",
  description:
    "Veteriner klinikler için aşı, muayene ve parazit takibini WhatsApp'tan otomatik hatırlatan sistem. Hasta sadakati artar, aşı takvimi kaçmaz. 2 haftada kurulum.",
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
      "Kuduz, karma, iç-dış parazit — takvim geldiğinde sahibe otomatik WhatsApp gider. Aşı geri çağırma oranı %60'a çıkar."
  },
  twitter: {
    card: "summary_large_image",
    title: "Veteriner Aşı Hatırlatma WhatsApp Sistemi",
    description:
      "Aşı zamanı geldiğinde sahibe otomatik hatırlatma. Klinik ciro artışı sistematik gelir."
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
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Veteriner klinikleri için hasta kartı üzerinden aşı takvimi, muayene ve parazit hatırlatmalarını WhatsApp üzerinden otomatik gönderen sistem. KVKK uyumlu, kurumsal AI altyapılı."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Sistem hangi aşıları takip eder?", acceptedAnswer: { "@type": "Answer", text: "Kedi ve köpek için karma, kuduz, leptospiroz, iç ve dış parazit ilaçlarını ve klinik olarak kaydettiğiniz her aşıyı otomatik takip eder. Sonraki uygulama tarihi geldiğinde sahibe WhatsApp mesajı gider." } },
    { "@type": "Question", name: "Kurulum ne kadar sürer?", acceptedAnswer: { "@type": "Answer", text: "Standart tek şube veteriner için 10-14 iş günü. Mevcut hasta kartlarınızın aktarımı yapılacaksa 1 haftalık veri temizliği eklenebilir. Brief görüşmesinde net süre çıkarıyoruz." } },
    { "@type": "Question", name: "Fiyatı ne kadar?", acceptedAnswer: { "@type": "Answer", text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Hasta sayısı, aşı takvim çeşitliliği ve entegrasyon isteği kapsamı belirliyor." } },
    { "@type": "Question", name: "KVKK ve hayvan sahibinin izni nasıl yönetiliyor?", acceptedAnswer: { "@type": "Answer", text: "İlk kart açılışında açık rıza cümlesiyle onay alıyoruz. Sahip 'artık mesaj gelmesin' diyebilir; tek tıkla kayıt işaretlenir ve otomatik akıştan çıkarılır. Türkiye sunucusu, denetime hazır log." } },
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
  { metric: "%62", label: "Aşı geri çağırma oranındaki ortalama artış" },
  { metric: "0 kayıp", label: "Takvim kayıp müşteri (sistem sonrası)" },
  { metric: "14 gün", label: "Standart kurulum süresi" },
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
  { n: "01", title: "Brief", desc: "Klinik protokollerini, aşı takvimlerini, kullandığınız markaları ve müşteri profilinizi 30 dakikada birlikte çıkarıyoruz." },
  { n: "02", title: "Kurulum", desc: "Hasta kartı paneli, aşı takvim motoru, WhatsApp bildirim akışı ve KVKK açık rıza formu — hepsi 7 günde kurulur." },
  { n: "03", title: "Test", desc: "Mevcut 20 hasta kartıyla canlıya benzer test. Mesaj tonu, sıklık, hekim onayı — hepsi burada rafine edilir." },
  { n: "04", title: "Yayın", desc: "Toplu hasta kartı aktarımı ve canlı kullanım başlıyor. İlk 30 gün haftalık performans raporu paylaşıyoruz." }
];

const features = [
  { icon: PawPrint, title: "Hasta kartı paneli", desc: "Her hayvan için tür, ırk, doğum tarihi, aşı geçmişi, alerji ve sahip bilgisi tek ekranda. Aramada 3 saniyede kart açılır." },
  { icon: Bell, title: "Otomatik aşı hatırlatma", desc: "Sistem aşı takvimini bilir; 7 gün önce ve gün geldiğinde sahibe otomatik WhatsApp gönderir. Yanıt gelirse randevu akışına geçer." },
  { icon: Calendar, title: "Randevu entegrasyonu", desc: "Google Takvim veya kendi randevu sisteminize doğrudan bağlanır. Sahip mesaja cevap verirken randevu açılır." },
  { icon: Syringe, title: "Rapel takibi", desc: "Karma aşı gibi çift dozlu protokolleri sistem bilir; 21. gün rapelini asla kaçırmaz, sahibi zamanında getirtir." },
  { icon: Users, title: "Sadakat kanalı", desc: "Doğum günü, klinik kampanya, mevsimlik uyarılar (kene, sıcak, kış) için tek panelden toplu duyuru — segmentli gönderim." },
  { icon: ShieldCheck, title: "KVKK ve hayvan sahibi rızası", desc: "İlk kayıtta açık rıza cümlesi, mesaj çıkma isteği tek tıkla. Türkiye sunucusu, log denetime hazır." }
];

const faqs = [
  { q: "Kaç gün önce hatırlatma gidiyor?", a: "Standart olarak 7 gün önce, 1 gün önce ve o günün sabahı — üç aşamalı hatırlatma. Bu kaçırılma oranını neredeyse sıfıra indiriyor. Klinik protokolünüze göre saat, sıklık ve mesaj tonunu birlikte ayarlıyoruz." },
  { q: "Sahibi 'artık mesaj gelmesin' derse ne olur?", a: "Mesaja 'kaldır' yazması yeterli; sistem otomatik olarak o kartı otomatik akıştan çıkarır. KVKK gereği bu isteği anında işleriz ve log tutarız. Hekim kaydı kliniğinizde kalmaya devam eder." },
  { q: "Klinik yönetim yazılımımla entegre olur mu?", a: "Popüler Türk veteriner yazılımlarının çoğuyla API veya CSV üzerinden entegre olabiliyoruz. Entegrasyon uygun değilse hasta kartı panelimizi ana ekran olarak kullanabilir, dışarıdan çıktı alabilirsiniz." },
  { q: "Fiyat nasıl belirleniyor?", a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Hasta sayısı, ekstra modüller (kampanya, sadakat, çoklu klinik) toplam kapsamı belirliyor." },
  { q: "Personelim bunu kullanabilecek mi?", a: "Panel tek ekranda; hekim asistanı 20 dakikalık eğitimle rahatça yönetir. Ayrıca yazılı bir cheat sheet ve video eğitim de teslim ediyoruz. Kritik bir işlem yok — kartı aç, aşı yap, sistem gerisini halleder." },
  { q: "Klinik dışı ürün satışına (mama, oyuncak) uyar mı?", a: "Evet. Klinik CRM'i olarak kullanabilirsiniz; ürün satın alan sahibi 'bir sonraki torba mama tahmini' gibi akışlarla otomatik hatırlatılabilir. Bu bir gelir kanalına dönüşür." }
];

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-paper py-section">
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
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-orange text-paper px-3 py-1.5 shadow-brutal-sm mb-6">
                  <PawPrint className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Veteriner çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Veteriner Aşı Hatırlatma <span className="font-serif italic font-normal">WhatsApp Sistemi</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Karma, kuduz, iç-dış parazit — her aşının takvimini sistem bilir, zamanı geldiğinde hayvan sahibine otomatik WhatsApp mesajı gider. Klinik geliriniz sistematik, hasta sadakatiniz kalıcı. 14 günde kurulum.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                  >
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={cn("border-3 border-ink p-5 shadow-brutal", i % 2 === 0 ? "bg-brand-yellow" : "bg-brand-orange text-paper")}>
                    <div className="font-display text-4xl md:text-5xl font-black leading-none mb-2">{s.metric}</div>
                    <div className="text-xs font-medium opacity-90">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Tanıdık geliyor mu?
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Aşı takvimini elle takip ettiğiniz her hasta, <span className="font-serif italic font-normal">unutulmaya aday.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-3 border-paper bg-paper/5 p-5 shadow-[6px_6px_0_#FFFDF5]">
                  <p className="text-body font-medium leading-relaxed">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-orange text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adım — 2 haftada canlı.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-3 border-ink bg-paper text-ink p-6 shadow-brutal h-full">
                  <div className="font-display text-5xl font-black opacity-30 mb-3">{s.n}</div>
                  <h3 className="font-display text-xl font-black mb-2">{s.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Sistem kapsamı
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Veteriner paketinizde neler <span className="font-serif italic font-normal">yer alıyor?</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 60}>
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

      <section className="bg-brand-green text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-paper text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
              Vaka çalışması: bir Şişli veteriner kliniği
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Şişli'de tek şubeli bir veteriner, 3 ayda 487 aşı hatırlatmasını satışa çevirdi.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Klinik 12 yıllık, yaklaşık 2.400 aktif hasta kartıyla çalışıyordu. Aşı takvimini defterde ve Excel'de tutuyor, resepsiyondaki asistan boş vakitlerinde tek tek arıyordu. Ortalama günde 8 arama yapılıyor, 3-4'ü karşılıksız kalıyor, karma aşının rapelini kaçıran hasta oranı %30 seviyesindeydi.
                </p>
                <p>
                  Brief görüşmesinde klinik protokollerini — kaç ayda bir hangi aşı, hangi rapel, hangi parazit tedavisi — birlikte çıkardık. 10 günde tüm hasta kartlarını sisteme aktardık, aşı takvim motorunu kurduk, WhatsApp bildirim tonunu klinik dili ile (samimi, açıklayıcı, biraz sıcak) hazırladık. KVKK açık rıza cümlesini kart açılış akışına yerleştirdik.
                </p>
                <p>
                  3 aylık dönem sonunda net rakam: 487 aşı hatırlatmasından 302'si aynı hafta içinde kliniğe geldi. Karma aşı rapel kaçırma oranı %30'dan %6'ya düştü. Sahiplerden gelen "Böyle bir şey harika, unutuyordum" mesajları klinik itibarını internet üzerinde de yükseltti (Google yorumları arttı). Ekip artık aşı hatırlatma araması yapmıyor; asıl işe odaklandı.
                </p>
                <p>
                  Aylık bakımda mevsimsel uyarılar (kene sezonu, sıcak yaz, kış aşıları) devreye alındı. Ayrıca doğum günü mesajı, %20 mama sadakat kampanyası gibi ekstra kanallar da hasta sadakatini kalıcı hale getirdi.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">%30</div>
                  <div className="text-sm">Rapel kaçırma oranı</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">%6</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">3 ayda</div>
                  <div className="font-display text-4xl font-black text-brand-pink">302</div>
                  <div className="text-sm">Hatırlatmadan gelen randevu</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Personel yükü</div>
                  <div className="font-display text-4xl font-black text-brand-orange">0</div>
                  <div className="text-sm">Aşı hatırlatma araması</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6 max-w-4xl">
          <Reveal>
            <div className="mb-12">
              <div className="inline-block border-3 border-paper bg-brand-purple text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-[6px_6px_0_#FFFDF5]">
                Sıkça Sorulan Sorular
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                Karar vermeden önce <span className="font-serif italic font-normal">merak edilenler</span>
              </h2>
            </div>
          </Reveal>
          <div className="space-y-8">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="border-l-3 border-brand-orange pl-6">
                  <h3 className="font-display text-xl font-black mb-3">{f.q}</h3>
                  <p className="text-body opacity-85 leading-relaxed">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10">
              <div className="inline-block border-3 border-ink bg-brand-blue text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                İlgili içerik
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Konuya devam etmek isteyene
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesaja 60 sn içinde otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "Karşılaştırma", desc: "Yerli yazılımlar ile hazır SaaS'lar arasında hangisi klinik için doğru?", href: "/karsilastirma" },
              { title: "Veteriner Sektörü Sayfası", desc: "Veteriner klinikleri için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/veteriner" }
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <Link href={r.href} className="block border-3 border-ink bg-paper p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full">
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
          <div className="border-3 border-ink bg-brand-yellow p-8 md:p-14 shadow-brutal-lg text-ink">
            <Reveal>
              <h2 className="font-display text-h2 font-black leading-tight mb-4 max-w-3xl">
                Klinik takviminizi <span className="font-serif italic font-normal">sisteme geçirelim.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                15 dakikalık keşif görüşmesinde klinik protokolünüzü konuşuyoruz, uygun kapsamı birlikte belirliyoruz. Aynı gün dönüş garantili.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-3">
                <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Görüşme Al <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/905015884853" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 pt-6 border-t-3 border-ink/20 grid sm:grid-cols-3 gap-4 text-sm">
                <div><div className="text-xs font-bold uppercase opacity-60 mb-1">Telefon</div><a href="tel:+905015884853" className="font-bold hover:underline">0501 588 48 53</a></div>
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
