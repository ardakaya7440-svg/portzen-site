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
import { familyPriceSummary, maintenanceSummary } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Avukat Dosya Takip Portalı + Müvekkil WhatsApp | PORTZEN",
  description:
    "Hukuk büroları için müvekkil dosya takip portalı ve otomatik WhatsApp bilgilendirme. Duruşma, tebligat, karar özet — müvekkil dosya durumunu portaldan görür, önemli aşamalarda WhatsApp ile bilgilendirilir.",
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
    telephone: "+905318639117",
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
    { "@type": "Question", name: "Portal ne yapıyor?", acceptedAnswer: { "@type": "Answer", text: "Her müvekkil şifresiyle giriş yapabildiği bir portala erişir; kendi dosyalarını, güncel durumu, planlanan duruşmayı ve önemli notları görür. Avukat panelden dosyaya güncelleme eklediğinde müvekkile otomatik WhatsApp bildirimi gider. Böylece 'ne durumda dosya?' aramalarının belirgin şekilde azalması hedeflenir." } },
    { "@type": "Question", name: "Mesleki sır ve KVKK açısından güvenli mi?", acceptedAnswer: { "@type": "Answer", text: "Sistem KVKK gerekliliklerini ve mesleki sırrı dikkate alarak kurgulanır: iki aşamalı kimlik doğrulama ve dosya bazlı rol erişimi kurulumda yapılandırılır; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir. Mesleki sırrın gerektirdiği paylaşım kısıtlamaları göz önüne alınarak alan bazlı gizleme (bazı notlar yalnızca avukat görür) desteklenir. Erişimler kayıt altına alınır." } },
    { "@type": "Question", name: "UYAP verisiyle entegre olur mu?", acceptedAnswer: { "@type": "Answer", text: "UYAP'tan çıkardığınız güncel durum verisini panele hızlı aktarabileceğiniz bir arayüz sunuyoruz. Otomatik entegrasyon UYAP tarafında API kısıtları sebebiyle sınırlı; ama günün en verimli akışını kurulum sırasında birlikte tasarlıyoruz." } },
    { "@type": "Question", name: "Hangi bilgilendirmeler otomatik gidiyor?", acceptedAnswer: { "@type": "Answer", text: "Duruşma tarihi + saati hatırlatması (7 gün, 1 gün, sabah), tebligat özet bildirimi, karar özet metni, ücret ödeme hatırlatması, dilekçe hazır bildirimi — bunların hepsi kısa ve anlaşılır dille otomatik gönderilir. Ne gönderileceğini avukat onaylar." } },
    { "@type": "Question", name: "Fiyat ne kadar?", acceptedAnswer: { "@type": "Answer", text: `İş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. Aktif müvekkil sayısı, çoklu avukat kullanımı ve ek modüller (tahsilat, dilekçe kütüphanesi) hangi paketin yeteceğini belirler. Tamamen özel bir müvekkil portalı özel web uygulaması kapsamına girer.` } },
    { "@type": "Question", name: "Küçük büro için de mantıklı mı?", acceptedAnswer: { "@type": "Answer", text: "Evet. 1-3 avukat büroları için bu portal ve WhatsApp akışı, tekrar eden 'dosyam ne durumda?' sorularını sistemli bir bilgilendirme akışına taşır: dosya durumu portalda görünür, önemli aşamalarda müvekkile otomatik mesaj gider. Küçük büro için özel modüller de tanımlanabilir." } }
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
  { metric: "Portal + WA", label: "Müvekkil bilgilendirme kanalı" },
  { metric: "3 kademe", label: "Duruşma hatırlatması: 7 gün, 1 gün, sabah" },
  { metric: "Tek seferlik", label: "Kurulum; süre kapsama göre teklifte yazılı" },
  { metric: "KVKK", label: "Mesleki sır ve erişim kontrolü dikkate alınır" }
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
  { n: "01", title: "Brief", desc: "Büronuzun dava çeşitliliğini, tipik bilgilendirme akışını, KVKK/mesleki sır kısıtlarınızı brief görüşmesinde birlikte çıkarıyoruz." },
  { n: "02", title: "Kurulum", desc: "Müvekkil portalı + dosya panel + WhatsApp bilgilendirme akışı + rol bazlı erişim kontrolü kuruluyor. Onay şablonları hazırlanıyor." },
  { n: "03", title: "Test", desc: "Pilot dosyalarla canlıya benzer akış. Mesaj tonu, hangi bilgilendirmenin gönderileceği, hangi bilginin gizleneceği — hepsi rafine ediliyor." },
  { n: "04", title: "Yayın", desc: "Aktif müvekkiller portala davet ediliyor. İlk 30 gün kurulum hataları giderilir; sonrasında isteğe bağlı aylık bakım alınabilir." }
];

const features = [
  { icon: Folder, title: "Müvekkil portalı", desc: "Her müvekkil kendi kullanıcı adı ve şifresiyle giriş yapar; sadece kendi dosyalarını görür. Dosya durumu, planlanan duruşma, önemli notlar sadeleştirilmiş dille sunulur." },
  { icon: Bell, title: "Duruşma hatırlatma", desc: "Duruşmadan 7 gün önce, 1 gün önce ve sabahı otomatik WhatsApp gider. Adres, saat, hazırlanması gereken belge listesi dahil." },
  { icon: FileText, title: "Tebligat ve karar özeti", desc: "Panele avukat kısa özet yazar; sistem müvekkile anlaşılır bir dille bildirimi ve gerekli aksiyonu gönderir. Uzun telefon açıklaması yerine yazılı özet iletilir." },
  { icon: Lock, title: "Rol bazlı erişim", desc: "Avukat, sekreter, stajyer için farklı yetkiler. Bazı notlar yalnızca avukat görür; bu alanlar müvekkil portalında gösterilmez. Erişimler kayıt altına alınır." },
  { icon: Calendar, title: "Ücret ve tahsilat", desc: "Müvekkile ödeme yaklaşan tarih hatırlatması otomatik gönderilir. Yatırıldığında panelde işaretlenir; tahsilat listesi tek yerde toplanır." },
  { icon: ShieldCheck, title: "KVKK ve mesleki sır", desc: "İki aşamalı kimlik doğrulama, dosya bazlı erişim izinleri, silme talebi akışı ve erişim kaydı KVKK gerekliliklerini dikkate alarak kurgulanır; verinin hangi sağlayıcıda ve bölgede tutulacağı kullanılan altyapıya göre teklifte yazılı olarak belirtilir." }
];

const faqs = [
  { q: "UYAP verisi otomatik yansıtılıyor mu?", a: "Doğrudan UYAP API entegrasyonu üzerinde teknik kısıtlar var. En verimli akış, avukat veya sekreterin UYAP'tan çıkardığı durumu tek satırla panele girmesi ve sistemin müvekkile anlaşılır dille bildirim göndermesi. Kurulumda büronuzun UYAP kullanım rutinine göre tam senkron akışı birlikte tasarlıyoruz." },
  { q: "Müvekkile hangi bilgiler otomatik gidiyor?", a: "Duruşma hatırlatması, tebligat özet bildirimi, karar özeti, ücret ödeme hatırlatması, dilekçe hazır bildirimi. Her mesaj şablonunu avukat onaylar; sistem hiçbir hukuki yorum yapmadan yalnızca büronun onayladığı şablonu gönderir." },
  { q: "Mesleki sır nasıl korunuyor?", a: "Bazı notlar (avukat özel notu, karşı tarafın önerdiği uzlaşma tutarı, iç strateji) müvekkil portalinda görünmez. Sadece avukat panelde. Bu ayrımı dosya-alan bazında dosya açılırken belirlersiniz. Hem hız hem gizlilik sağlanır." },
  { q: "Fiyat ne kadar?", a: `İş otomasyonu paketleri tek seferliktir (KDV hariç): ${familyPriceSummary("is-otomasyonu")}. İsteğe bağlı aylık bakım ikinci aydan itibaren ${maintenanceSummary()}. Aktif müvekkil sayısı, çoklu avukat kullanımı ve ek modüller (tahsilat, dilekçe kütüphanesi) hangi paketin yeteceğini belirler. Tamamen özel bir müvekkil portalı özel web uygulaması kapsamına girer.` },
  { q: "Küçük büroysam bile mantıklı mı?", a: "Evet, hatta özellikle mantıklı. Küçük bürolarda müvekkil bilgilendirmesi çoğu zaman avukatın kendisine kalır. Portal ve WhatsApp akışı kurulunca dosya durumu, duruşma hatırlatması ve karar özetleri sistemli şekilde müvekkile iletilir; avukat yalnızca güncellemeyi panele girer." },
  { q: "Müvekkil portalı zor mu?", a: "Portal mümkün olan en sade şekilde tasarlanır: giriş yap, dosyayı gör, durumu oku. Yaşlı müvekkil için WhatsApp bildirimi asıl kanaldır; portal yalnızca detay isteyene açıktır. İstenirse portal olmadan sadece WhatsApp akışı da kurulabilir." }
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
              <span className="text-ink">Avukat Dosya Takip Portalı</span>
            </nav>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate text-lime px-3 py-1.5 shadow-brutal-sm mb-6 rounded-full">
                  <Scale className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-wider">Hukuk bürosu çözümü</span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="font-display text-h1 font-black leading-tight max-w-4xl text-ink">
                  Avukat Dosya Takip Portalı + <span className="font-normal">Müvekkil WhatsApp Bilgilendirme</span>
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 max-w-prose text-body text-ink/80 font-medium">
                  Müvekkil kendi dosya durumunu web portalından görür, önemli her aşamada otomatik WhatsApp bilgilendirme alır. &quot;Ne durumda dosyam?&quot; telefonları azalır, siz dava hazırlığına odaklanırsınız.
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
                &quot;Dosyam ne durumda?&quot; araması, <span className="font-normal">gerçek hukuki çalışma vaktinizi çalıyor.</span>
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
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-4 shadow-brutal-sm rounded-full">
                Nasıl çalışır
              </div>
              <h2 className="font-display text-h2 font-black leading-tight">
                4 adımda kurulum.
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
                Hukuk bürosu sisteminde neler <span className="font-normal">yer alabilir?</span>
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
              Örnek senaryo: hukuk bürosu
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display text-h2 font-black leading-tight max-w-4xl">
              Örnek senaryo: 4 avukatlı bir büroda müvekkil bilgilendirme akışı nasıl kurulur?
            </h2>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <Reveal delay={200}>
              <div className="space-y-5 text-body leading-relaxed opacity-95">
                <p>
                  Bu örnek senaryoda büro yüzlerce aktif dosyayla çalışıyor. Müvekkiller sık sık &quot;dosyam ne durumda?&quot; diye arıyor. Sekreter çoğunlukla dosyayı bilmediği için avukatı bekletiyor; avukat ise duruşma hazırlığından koparılıyor. Dilekçe hazırlık günleri telefon trafiğiyle bölünüyor.
                </p>
                <p>
                  Brief görüşmesinde büronun dava çeşitliliği (aile, ceza, ticaret), mesleki sırrın gerektirdiği paylaşım kısıtları ve tipik müvekkil profili birlikte çıkarılır. Ardından müvekkil portalı, dosya paneli, WhatsApp bilgilendirme akışı ve rol bazlı erişim kontrolü kurulur; teslim süresi kapsama göre teklifte yazılı olarak belirtilir. Her müvekkile giriş bilgileri ile KVKK aydınlatma ve açık rıza metni gönderilir.
                </p>
                <p>
                  Kurulumdan sonra iş akışı şöyle değişir: müvekkil dosya durumunu portaldan görür; duruşmadan 7 gün önce, 1 gün önce ve duruşma sabahı hazırlanacak belge listesiyle WhatsApp hatırlatması alır; tebligat ve karar özetleri yazılı olarak iletilir. Sekreter tahsilat listesini Excel yerine panelden takip eder.
                </p>
                <p>
                  Aylık bakımda yeni tebligat özet şablonları, sık sorulan sorular için bilgi tabanı zenginleştirilir. Müvekkil portal kullanım raporu, hangi müvekkilin portala girmediğini ve yalnızca WhatsApp bildirimine yanıt verdiğini gösterir — iletişim tonu bu gruplara göre ayrıştırılabilir.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid gap-4">
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Önce</div>
                  <div className="font-display text-4xl font-black mb-1">Telefon</div>
                  <div className="text-sm">Dosya durumu telefonla soruluyor</div>
                  <div className="mt-4 text-xs font-bold uppercase opacity-70 mb-1">Sonra</div>
                  <div className="font-display text-4xl font-black text-ink">Portal</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Duruşma hatırlatması</div>
                  <div className="font-display text-4xl font-black text-ink">3 kademe</div>
                  <div className="text-sm">7 gün, 1 gün ve sabah; belge listesiyle</div>
                </div>
                <div className="border-3 border-ink/15 bg-paper text-ink p-5 shadow-brutal rounded-2xl">
                  <div className="text-xs font-bold uppercase opacity-70 mb-1">Tahsilat</div>
                  <div className="font-display text-4xl font-black text-ink">Tek liste</div>
                  <div className="text-sm">Ödeme hatırlatması ve panelde takip</div>
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
                <div className="border-l-3 border-lime pl-6">
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
              { title: "CRM Otomasyonu", desc: "Müvekkil ilişkileri, tahsilat ve iş akışları için özel çözüm.", href: "/crm-otomasyonu" },
              { title: "Avukat Sektörü Sayfası", desc: "Hukuk büroları için PORTZEN'in özel çözüm sayfası.", href: "/whatsapp-ai-asistani/avukat" }
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
                Büronuzu <span className="font-normal">&quot;dosya durumunu ben soruyorum&quot; yaklaşımına geçirelim.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-body opacity-90 mb-8 max-w-2xl font-medium">
                20 dakikalık keşif görüşmesinde büronuzun akışını, mesleki sır kısıtlarınızı ve müvekkil profilinizi konuşuyoruz. Uygun kapsamı birlikte belirliyoruz.
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
