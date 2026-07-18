import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Scale,
  FileText,
  Folder,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Bell,
  Lock
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Avukat Dosya Takip Portalı + Müvekkil WhatsApp | PORTZEN",
  description:
    "Hukuk büroları için müvekkil dosya takip portalı ve otomatik WhatsApp bilgilendirme. Duruşma, tebligat, karar özet — müvekkil her adımı görür, sizi gereksiz aramaz.",
  keywords: [
    "avukat dosya takip portalı",
    "hukuk bürosu crm",
    "müvekkil bilgilendirme sistemi",
    "avukat whatsapp otomasyon",
    "hukuk bürosu yönetim",
    "avukat müvekkil portal"
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://portzenai.com/avukat-dosya-takip-portali",
    siteName: "PORTZEN",
    title: "Avukat Dosya Takip Portalı + Müvekkil WhatsApp Bilgilendirme",
    description:
      "Müvekkil dosyasını web portalından görsün, önemli aşamada WhatsApp mesajı alsın. Siz odaklanıp dava yapın."
  },
  twitter: {
    card: "summary_large_image",
    title: "Avukat Dosya Takip Portalı + Müvekkil WhatsApp",
    description:
      "Hukuk bürosu için müvekkil bilgilendirme portalı. Duruşma, tebligat, karar — her aşama sistematik."
  },
  alternates: { canonical: "https://portzenai.com/avukat-dosya-takip-portali" },
  robots: { index: true, follow: true }
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Avukat Dosya Takip Portalı ve Müvekkil WhatsApp Bilgilendirme",
  serviceType: "Hukuk bürosu müvekkil ilişkileri yönetimi",
  provider: {
    "@type": "Organization",
    name: "PORTZEN",
    url: "https://portzenai.com",
    telephone: "+905015884853",
    email: "destek@portzenai.com"
  },
  areaServed: { "@type": "Country", name: "Turkey" },
  description:
    "Hukuk büroları için müvekkil kimliği doğrulanmış web portalı, dosya durumu takibi, duruşma-tebligat-karar otomatik WhatsApp bilgilendirme sistemi. KVKK ve mesleki sır korunumu esas alınarak tasarlanır."
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Portal ne yapıyor?", acceptedAnswer: { "@type": "Answer", text: "Her müvekkil şifresiyle giriş yapabildiği bir portala erişir; kendi dosyalarını, güncel durumu, planlanan duruşmayı ve önemli notları görür. Avukat panelden dosyaya güncelleme eklediğinde müvekkile otomatik WhatsApp bildirimi gider. Böylece 'ne durumda dosya?' aramaları neredeyse sıfıra iner." } },
    { "@type": "Question", name: "Mesleki sır ve KVKK açısından güvenli mi?", acceptedAnswer: { "@type": "Answer", text: "Evet. Kimlik doğrulama iki aşamalı; veri Türkiye sunucularında; her dosya için erişim rol bazlı. Mesleki sırrın gerektirdiği paylaşım kısıtlamaları göz önüne alınarak alan bazlı gizleme (bazı notlar yalnızca avukat görür) desteklenir. Log her erişimde tutulur." } },
    { "@type": "Question", name: "UYAP verisiyle entegre olur mu?", acceptedAnswer: { "@type": "Answer", text: "UYAP'tan çıkardığınız güncel durum verisini panele hızlı aktarabileceğiniz bir arayüz sunuyoruz. Otomatik entegrasyon UYAP tarafında API kısıtları sebebiyle sınırlı; ama günün en verimli akışını kurulum sırasında birlikte tasarlıyoruz." } },
    { "@type": "Question", name: "Hangi bilgilendirmeler otomatik gidiyor?", acceptedAnswer: { "@type": "Answer", text: "Duruşma tarihi + saati hatırlatması (7 gün, 1 gün, sabah), tebligat özet bildirimi, karar özet metni, ücret ödeme hatırlatması, dilekçe hazır bildirimi — bunların hepsi kısa ve anlaşılır dille otomatik gönderilir. Ne gönderileceğini avukat onaylar." } },
    { "@type": "Question", name: "Fiyat ne kadar?", acceptedAnswer: { "@type": "Answer", text: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Aktif müvekkil sayısı, dosya çeşitliliği, çoklu avukat kullanımı toplam kapsamı belirliyor." } },
    { "@type": "Question", name: "Küçük büro için de mantıklı mı?", acceptedAnswer: { "@type": "Answer", text: "Evet. 1-3 avukat büroları için bu portal ve WhatsApp akışı — müvekkil aramalarını %70 azaltır. Zamanını aslen dava hazırlığına ayırırsınız. Küçük büro için özel modüller de tanımlanabilir." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: "https://portzenai.com" },
    { "@type": "ListItem", position: 2, name: "Avukat Dosya Takip Portalı", item: "https://portzenai.com/avukat-dosya-takip-portali" }
  ]
};

const stats = [
  { metric: "%70", label: "Müvekkil bilgi araması azalma oranı" },
  { metric: "0 kaçırma", label: "Duruşma hatırlatma sistemi devrede" },
  { metric: "21 gün", label: "Standart kurulum + veri aktarım süresi" },
  { metric: "KVKK", label: "Mesleki sır ve erişim kontrolü hazır" }
];

const problems = [
  "Müvekkilinizin her araması aynı: 'Dosyam ne durumda?' — günde saatler telefon başında geçiyor.",
  "Duruşma saatini elle takip ediyorsunuz; bir kez de olsa kaçırılırsa müvekkil güveni yaralanıyor.",
  "Tebligat ve karar özetlerini müvekkile açıklamak için 20 dakikalık telefon açmanız gerekiyor.",
  "Yeni müvekkil kabul ederken 'siz beni bilgilendirir misiniz?' sorusuna 'evet' diyorsunuz ama sistematik bir akış yok.",
  "Küçük büroysanız 'bu paraya bunu almam' diyor rakip; büyük büroysanız bilgilendirme insan gücüne bağımlı, ekipten biri hastalanınca sorun.",
  "Müvekkil WhatsApp'tan yazıyor ama mesajlar mesai içi bile 3-4 saat cevapsız — sonra 'bilmediğim için avukatımı arıyorum' oluyor."
];

const steps = [
  { n: "01", title: "Brief", desc: "Büronuzun dava çeşitliliğini, tipik bilgilendirme akışını, KVKK/mesleki sır kısıtlarınızı 45 dakikada birlikte çıkarıyoruz." },
  { n: "02", title: "Kurulum", desc: "Müvekkil portalı + dosya panel + WhatsApp bilgilendirme akışı + rol bazlı erişim kontrolü kuruluyor. Onay şablonları hazırlanıyor." },
  { n: "03", title: "Test", desc: "3 gün pilot dosyayla canlıya benzer akış. Mesaj tonu, hangi bilgilendirmenin gönderileceği, hangi bilginin gizleneceği — hepsi rafine ediliyor." },
  { n: "04", title: "Yayın", desc: "Aktif müvekkiller portala davet ediliyor. İlk 30 gün haftalık kullanım raporu ve optimizasyon paylaşılıyor." }
];

const features = [
  { icon: Folder, title: "Müvekkil portalı", desc: "Her müvekkil kendi kullanıcı adı ve şifresiyle giriş yapar; sadece kendi dosyalarını görür. Dosya durumu, planlanan duruşma, önemli notlar sadeleştirilmiş dille sunulur." },
  { icon: Bell, title: "Duruşma hatırlatma", desc: "Duruşmadan 7 gün önce, 1 gün önce ve sabahı otomatik WhatsApp gider. Adres, saat, hazırlanması gereken belge listesi dahil." },
  { icon: FileText, title: "Tebligat ve karar özeti", desc: "Panele avukat kısa özet yazar; sistem müvekkile anlaşılır bir dille bildirimi ve gerekli aksiyonu gönderir. 20 dakikalık telefon açma sona erer." },
  { icon: Lock, title: "Rol bazlı erişim", desc: "Avukat, sekreter, stajyer için farklı yetkiler. Bazı notlar yalnızca avukat görür; mesleki sır otomatik korunur. Her erişim log'lanır." },
  { icon: Calendar, title: "Ücret ve tahsilat", desc: "Müvekkile ödeme yaklaşan tarih hatırlatması otomatik gönderilir. Yatırıldığında panelde işaretlenir; tahsilat listesi tek yerde toplanır." },
  { icon: ShieldCheck, title: "KVKK ve mesleki sır", desc: "Türkiye sunucusu, iki aşamalı kimlik doğrulama, dosya bazlı erişim izinleri. Silme talebi tek tıkla; denetime hazır log tutulur." }
];

const faqs = [
  { q: "UYAP verisi otomatik yansıtılıyor mu?", a: "Doğrudan UYAP API entegrasyonu üzerinde teknik kısıtlar var. En verimli akış, avukat veya sekreterin UYAP'tan çıkardığı durumu tek satırla panele girmesi ve sistemin müvekkile anlaşılır dille bildirim göndermesi. Kurulumda büronuzun UYAP kullanım rutinine göre tam senkron akışı birlikte tasarlıyoruz." },
  { q: "Müvekkile hangi bilgiler otomatik gidiyor?", a: "Duruşma hatırlatması, tebligat özet bildirimi, karar özeti, ücret ödeme hatırlatması, dilekçe hazır bildirimi. Her mesaj şablonunu avukat onaylar; sistem hiçbir hukuki yorum yapmadan yalnızca büronun onayladığı şablonu gönderir." },
  { q: "Mesleki sır nasıl korunuyor?", a: "Bazı notlar (avukat özel notu, karşı tarafın önerdiği uzlaşma tutarı, iç strateji) müvekkil portalinda görünmez. Sadece avukat panelde. Bu ayrımı dosya-alan bazında dosya açılırken belirlersiniz. Hem hız hem gizlilik sağlanır." },
  { q: "Fiyat ne kadar?", a: "Fiyat, ihtiyacına göre kişiselleştiriliyor. Brief görüşmesinde net rakam paylaşıyoruz. Aktif müvekkil sayısı, çoklu avukat kullanımı, ek modüller (tahsilat, dilekçe kütüphanesi) kapsamı belirliyor." },
  { q: "Küçük büroysam bile mantıklı mı?", a: "Evet, hatta özellikle mantıklı. 1-2 avukat büroları müvekkil bilgilendirmeye günde 2-3 saat harcıyor. Portal kurulunca bu vakit aslında dava hazırlığına ayrılıyor. ROI ilk aydan görülür." },
  { q: "Müvekkil portalı zor mu?", a: "Portal mümkün olan en sade şekilde tasarlanır: giriş yap, dosyayı gör, durumu oku. Yaşlı müvekkil için WhatsApp bildirimi asıl kanaldır; portal yalnızca detay isteyene açıktır. İstenirse portal olmadan sadece WhatsApp akışı da kurulabilir." }
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
              <span className="text-ink">Avukat Dosya Takip Portalı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink bg-ink text-brand-yellow px-3 py-1.5 shadow-brutal-sm mb-6">
                  <Scale className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Hukuk bürosu çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-[0.95] max-w-4xl text-ink">
                  Avukat Dosya Takip Portalı + <span className="font-serif italic font-normal">Müvekkil WhatsApp Bilgilendirme</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Müvekkil kendi dosya durumunu web portalından görür, önemli her aşamada otomatik WhatsApp bilgilendirme alır. "Ne durumda dosyam?" telefonları %70 azalır, siz dava hazırlığına odaklanırsınız.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                    Görüşme Al <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className={cn("border-3 border-ink p-5 shadow-brutal", i % 2 === 0 ? "bg-brand-yellow" : "bg-ink text-brand-yellow")}>
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
                "Dosyam ne durumda?" araması, <span className="font-serif italic font-normal">gerçek hukuki çalışma vaktinizi çalıyor.</span>
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

      <section className="bg-brand-yellow text-ink py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-ink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-4 shadow-brutal-sm">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adım — 3 haftada canlı.
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
                Hukuk bürosu paketinizde neler <span className="font-serif italic font-normal">yer alıyor?</span>
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
              Vaka çalışması: bir Ankara hukuk bürosu
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Ankara'da 4 avukatlı bir büro, günlük müvekkil aramalarını 32'den 8'e indirdi.
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Büro yaklaşık 340 aktif dosyayla çalışıyordu. Müvekkiller günde ortalama 32 kez "dosyam ne durumda?" araması yapıyor, her arama ortalama 6 dakika sürüyordu. Sekreter çoğunlukla dosya bilmediği için avukatı bekletiyor; avukat ise duruşma hazırlığından koparılıyordu. Ek olarak bir dilekçe hazırlık günü telefon üstüne telefonla resmen bloke oluyordu.
                </p>
                <p>
                  Brief görüşmesinde büronun dava çeşitliliğini (aile, ceza, ticaret), mesleki sırrın gerektirdiği paylaşım kısıtlarını ve tipik müvekkil profilini birlikte çıkardık. 14 günde müvekkil portalı, dosya panel, WhatsApp bilgilendirme akışı ve rol bazlı erişim kontrolünü kurduk. Her müvekkil için giriş bilgileri ve KVKK açık rıza metni gönderildi.
                </p>
                <p>
                  30 gün sonra rapor net konuştu: günlük müvekkil aramaları 32'den 8'e düştü. Duruşma öncesi hazırlıksız gelme oranı %14'ten %2'ye indi (WhatsApp hatırlatma sayesinde). Sekreter tahsilat listesini panelden okumaya başladı, elle Excel takibi bitti. Avukatlar günde ortalama 90 dakika ekstra hukuki çalışma zamanı kazandı.
                </p>
                <p>
                  Aylık bakımda yeni tebligat özet şablonları, sık sorulan sorular için bilgi tabanı zenginleştirilir. Müvekkil portal kullanım raporu, hangi müvekkilin portale girmediğini ve WhatsApp bildirimine sadece cevap verdiğini gösteriyor — bu segmentlere göre iletişim tonu ayrıştırılıyor.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">32</div>
                  <div className="text-sm">Günlük müvekkil araması</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-brand-green">8</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Duruşma hazırlıksız gelme</div>
                  <div className="font-display text-4xl font-black text-brand-pink">%14 → %2</div>
                  <div className="text-sm">Müvekkil hazırlık oranı</div>
                </div>
                <div className="border-3 border-ink bg-paper text-ink p-5 shadow-brutal">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Günlük ek çalışma</div>
                  <div className="font-display text-4xl font-black text-brand-orange">+90 dk</div>
                  <div className="text-sm">Avukat başına hukuki iş vakti</div>
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
                <div className="border-l-3 border-brand-yellow pl-6">
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
              { title: "WhatsApp AI Asistanı", desc: "Gelen mesajlara 60 sn içinde otomatik yanıt veren asistan.", href: "/whatsapp-ai-asistani" },
              { title: "CRM Otomasyonu", desc: "Müvekkil ilişkileri, tahsilat ve iş akışları için özel çözüm.", href: "/crm-otomasyonu" },
              { title: "Avukat Sektörü Sayfası", desc: "Hukuk büroları için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/avukat" }
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
                Büronuzu <span className="font-serif italic font-normal">"dosya durumunu ben soruyorum" yaklaşımına geçirelim.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                20 dakikalık keşif görüşmesinde büronuzun akışını, mesleki sır kısıtlarınızı ve müvekkil profilinizi konuşuyoruz. Uygun kapsamı birlikte belirliyoruz.
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
