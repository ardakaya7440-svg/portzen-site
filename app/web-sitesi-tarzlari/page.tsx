import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Hand, Lightbulb, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { DemoFrame, type DemoKey } from "@/components/tarzlar/DemoFrame";
import { StyleNav } from "@/components/tarzlar/StyleNav";
import { whatsappUrl } from "@/data/pricing";

const URL = "https://portzenai.com/web-sitesi-tarzlari";
const TITLE = "Web Sitenizin Tarzını Seçin: 7 Canlı Tasarım Örneği | PORTZEN";
const DESCRIPTION =
  "Web sitenizin nasıl görüneceğini canlı demolarla seçin: askıda dönen kıyafetler, yörüngede dönen tabaklar, yürüyen bant menü, cam klasörler ve daha fazlası. Sınırımız hayal gücünüz.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    "web sitesi tasarım örnekleri",
    "web sitesi tarzları",
    "etkileşimli web tasarım",
    "restoran web sitesi örnekleri",
    "butik web sitesi tasarımı",
    "farklı web sitesi tasarımı",
    "animasyonlu web sitesi",
    "özel web tasarım"
  ],
  openGraph: { type: "website", locale: "tr_TR", url: URL, siteName: "PORTZEN", title: TITLE, description: DESCRIPTION },
  alternates: { canonical: URL },
  robots: { index: true, follow: true }
};

type Style = {
  id: string;
  demo: DemoKey;
  name: string;
  hook: string;
  desc: string;
  sectors: string[];
  note?: string;
  tip: string;
  height: number;
};

const STYLES: Style[] = [
  {
    id: "canli-aski",
    tip: "Askının üzerinde gezinin, bir askıyı sürükleyin, parçaya tıklayıp arkasını çevirin.",
    demo: "rail",
    name: "Canlı Askı",
    hook: "Ürünleriniz gerçek bir askıda asılı gibi durur.",
    desc: "Ziyaretçi askıda gezinir, bir askıyı kaydırır, parçaya tıklayıp önünü arkasını çevirir. Mağazada kıyafete dokunma hissini sitenize taşır.",
    sectors: ["Butik", "Giyim markası", "Tekstil üreticisi", "Moda e-ticareti"],
    height: 620
  },
  {
    id: "yorungedeki-tabak",
    tip: "Oklarla ya da alttaki tabaklara tıklayarak yemek değiştirin; sağdaki kartta içindekilere bakın.",
    demo: "dish",
    name: "Yörüngedeki Tabak",
    hook: "Menünüz bir vitrine dönüşür.",
    desc: "Tabak yörüngede dönerek değişir; şef, puan, açıklama ve içindekiler yanında akar. Yemeğin fotoğrafı sahnenin yıldızı olur.",
    sectors: ["Restoran", "Ocakbaşı", "Fine dining", "Otel restoranı"],
    height: 690
  },
  {
    id: "yuruyen-bant",
    tip: "Bandın üzerine gelince durur; kaydırarak çevirin, bir tabağa tıklayıp siparişe ekleyin.",
    demo: "conveyor",
    name: "Yürüyen Bant Menü",
    hook: "Ürünler bandın üzerinde akar, müşteri istediğini alır.",
    desc: "Ziyaretçi bandı durdurur, kaydırır, bir tabağı seçip siparişe ekler. Fiyat renkleri tabaklarda; menü kendini gezdirir.",
    sectors: ["Sushi", "Kafe", "Pastane", "Tatlıcı", "Fast food"],
    height: 640
  },
  {
    id: "cam-klasorler",
    tip: "Klasörün üzerine gelin, tıklayıp açın; + ile yeni dosya atın.",
    demo: "folders",
    name: "Cam Klasörler",
    hook: "Dosyalarınız buzlu camdan bir klasörde durur.",
    desc: "Üzerine gelince klasör size doğru eğilir, tıklayınca dosyalar yelpaze gibi açılır. Portfolyo, albüm ve belge göstermenin en zarif yolu.",
    sectors: ["Avukat", "Mali müşavir", "Fotoğrafçı", "Ajans portfolyosu", "Mimarlık"],
    height: 560
  },
  {
    id: "rakam-halkasi",
    tip: "Halkayı sürükleyerek çevirin ya da bir karta tıklayın.",
    demo: "warp",
    name: "Rakam Halkası",
    hook: "Başarılarınız 3 boyutlu bir halkada döner.",
    desc: "Her kart bir rakamı sahneye taşır: memnuniyet, tecrübe, randevu, uzman kadro. Sürükleyerek çevrilir, kendiliğinden de döner.",
    sectors: ["Klinik", "Eğitim kurumu", "Spor salonu", "Kurumsal firma"],
    height: 580
  },
  {
    id: "su-damlali-odeme",
    tip: "Kartlara tıklayıp değiştirin, ödeme butonuna basıp suyun dolmasını izleyin.",
    demo: "checkout",
    name: "Su Damlalı Ödeme",
    hook: "Ödeme ekranı bile akılda kalır.",
    desc: "Kartların içinde su dalgalanır, ödeme butonu dolar ve onay damlasına dönüşür. Sepetten ödemeye kadar markanızın hissi bozulmaz.",
    sectors: ["E-ticaret", "Abonelik", "Online eğitim", "Bağış sayfası"],
    note: "Örnek ödeme ekranıdır: kart bilgisi istenmez, gerçek ödeme alınmaz.",
    height: 640
  },
  {
    id: "cam-panel",
    tip: "Soldaki menüden görünüm değiştirin, dönemi seçin, ay ikonuyla koyu temaya geçin.",
    demo: "dashboard",
    name: "Cam Panel",
    hook: "İşinizi tek ekrandan, keyifle yönetin.",
    desc: "Ciro grafikleri, otomasyonlar, onay bekleyen işler ve iş panosu; açık ve koyu tema. Müşterinize ya da ekibinize özel yönetim paneli.",
    sectors: ["Özel yazılım", "CRM", "Yönetim paneli", "SaaS", "Bayi paneli"],
    height: 800
  }
];

const STEPS = [
  { title: "Tarzı seçin", desc: "Beğendiğiniz tarzda \"Bu tarzı istiyorum\" butonuna basın. WhatsApp mesajınız seçtiğiniz tarzla birlikte bize gelir." },
  { title: "15 dakikalık görüşme", desc: "Ürünlerinizi, sayfalarınızı ve hedefinizi konuşuruz. Tarzları karıştırmak ya da size özel bir fikir eklemek de mümkün." },
  { title: "Sizin içeriğinizle kurulum", desc: "Kendi fotoğraflarınız, fiyatlarınız ve renklerinizle sitenizi kurarız. Kapsam ve teslim süresi teklifte yazılı olur." }
];

const faqs = [
  {
    q: "Bu tarzlar sadece yazdığınız sektörler için mi?",
    a: "Hayır. Sektörler sadece fikir vermek için. Örneğin Yürüyen Bant Menü bir kozmetik markasının ürünlerini, Cam Klasörler bir mimarın projelerini gösterebilir. Tarzları birbiriyle de birleştirebiliriz."
  },
  {
    q: "Seçtiğim tarz fiyatı değiştirir mi?",
    a: "Bu tarzlar etkileşimli, özel geliştirme gerektiren tasarımlardır. Kapsam ve fiyat, sitenin geri kalanıyla birlikte teklifte yazılı olarak netleşir. Paket fiyatlarına fiyatlar sayfasından bakabilirsiniz."
  },
  {
    q: "Mobilde ve yavaş telefonlarda çalışıyor mu?",
    a: "Evet. Demolar ekran genişliğine göre düzen değiştirir, dokunmayla çalışır ve cihazında hareket azaltma açık olan ziyaretçiler için animasyonları sadeleştirir. Ağır parçalar yalnızca ekrana gelince yüklenir."
  },
  {
    q: "Demolardaki ürün, fiyat ve rakamlar gerçek mi?",
    a: "Hayır, hepsi örnektir. Sitenizde kendi ürünleriniz, fotoğraflarınız, fiyatlarınız ve markanızın renkleri kullanılır."
  }
];

function wa(name: string) {
  return whatsappUrl(`Merhaba, web sitesi tarzlarından "${name}" tarzında bir site istiyorum.`);
}

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Web sitesi tarzları",
    itemListElement: STYLES.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.name, url: `${URL}#${s.id}` }))
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana sayfa", item: "https://portzenai.com" },
      { "@type": "ListItem", position: 2, name: "Web sitesi tarzları", item: URL }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-14 pb-10 md:pt-20 md:pb-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{ backgroundImage: "radial-gradient(rgba(31,42,46,0.10) 1px, transparent 1.3px)", backgroundSize: "22px 22px" }}
        />
        <div className="relative mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime px-3 py-1 text-xs font-black tracking-wider text-ink mb-6 shadow-brutal-sm rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> 7 canlı tasarım · hepsini deneyebilirsiniz
            </div>
            <h1 className="font-display text-h1 font-black leading-[1.05] text-ink max-w-4xl">
              Web sitenizin tarzını seçin.
            </h1>
            <p className="mt-3 font-display text-3xl md:text-6xl font-black leading-tight">
              <span className="text-slate/40">Sınırımız </span>
              <span className="relative inline-block text-slate">
                <span className="absolute inset-x-0 bottom-[0.12em] -z-0 h-[0.38em] rounded-sm bg-lime" aria-hidden="true" />
                <span className="relative">hayal gücünüz.</span>
              </span>
            </p>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed max-w-2xl">
              Şablon değil, deneyim. Aşağıdaki tarzların hepsi canlı: dokunun, kaydırın, çevirin. Beğendiğinizi seçin;
              sitenizi o tarzda, kendi ürünleriniz, fotoğraflarınız ve markanızın renkleriyle kuralım.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tarz-galerisi"
                className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
              >
                Tarzları keşfet <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href={whatsappUrl("Merhaba, web sitem için tarz seçmek istiyorum, yardımcı olur musunuz?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-3 border-ink/15 bg-paper px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
              >
                <MessageCircle className="h-4 w-4" /> Seçmeme yardım edin
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERİ */}
      <section id="tarz-galerisi" className="scroll-mt-24 bg-white pb-16 md:pb-20">
        <div className="mx-auto max-w-container px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STYLES.map((s, i) => (
              <Reveal key={s.id} delay={i * 50}>
                <a
                  href={`#${s.id}`}
                  className="group block h-full overflow-hidden rounded-2xl border-3 border-ink/15 bg-paper shadow-brutal-sm transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-light">
                    <Image
                      src={`/tarzlar/onizleme/${s.id}.webp`}
                      alt={`${s.name} tarzı önizleme`}
                      fill
                      sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-black tabular-nums text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-black text-ink">{s.name}</h3>
                      <ArrowDown className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-hover:translate-y-0.5" />
                    </div>
                    <p className="mt-1 text-sm text-ink/60">{s.sectors.slice(0, 3).join(" · ")}</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={STYLES.length * 50}>
              <a
                href={whatsappUrl("Merhaba, web sitem için aklımda farklı bir tarz var, anlatmak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full min-h-[240px] flex-col justify-between rounded-2xl border-3 border-dashed border-slate/25 bg-lime/40 p-5 transition-colors hover:bg-lime/70"
              >
                <Lightbulb className="h-7 w-7 text-ink" />
                <div>
                  <p className="font-display text-xl font-black text-ink">Aklınızda başka bir şey mi var?</p>
                  <p className="mt-1 text-sm text-ink/70">Bir fikir, bir referans site ya da bir çizim yeterli. Anlatın, tasarlayalım.</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-ink">
                    WhatsApp&apos;tan anlatın <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <StyleNav items={STYLES.map((s) => ({ id: s.id, name: s.name }))} watchId="tarz-galerisi" />

      {/* TARZLAR */}
      {STYLES.map((s, i) => (
        <section key={s.id} id={s.id} className={`scroll-mt-32 py-14 md:py-20 border-t-3 border-ink/10 ${i % 2 ? "bg-light" : "bg-white"}`}>
          <div className="mx-auto max-w-container px-6">
            <div className="mb-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="font-display text-5xl font-black leading-none text-slate/15 tabular-nums md:text-6xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="font-display text-h2 font-black leading-tight text-ink">{s.name}</h2>
                    <p className="text-lg font-bold text-ink/80">{s.hook}</p>
                  </div>
                </div>
                <p className="mt-4 max-w-2xl text-body text-ink/70 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Uygun olduğu işletmeler">
                  {s.sectors.map((x) => (
                    <li key={x} className={`rounded-full px-3 py-1 text-xs font-bold text-ink/70 ${i % 2 ? "bg-white" : "bg-light"}`}>
                      {x}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 inline-flex max-w-2xl items-start gap-2 rounded-xl border-2 border-dashed border-slate/20 px-3 py-2 text-sm font-semibold text-ink/75">
                  <Hand className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span><span className="font-black text-ink">Deneyin:</span> {s.tip}</span>
                </p>
                {s.note && <p className="mt-3 text-xs font-semibold text-ink/55">{s.note}</p>}
              </Reveal>
              <Reveal delay={80}>
                <a
                  href={wa(s.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full"
                >
                  <MessageCircle className="h-4 w-4" /> Bu tarzı istiyorum
                </a>
              </Reveal>
            </div>
            <DemoFrame demo={s.demo} minHeight={s.height} label={s.name} />
          </div>
        </section>
      ))}

      {/* NASIL */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <h2 className="font-display text-h2 font-black leading-tight text-ink max-w-3xl">Tarzı seçtiniz, sonra ne olur?</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((st, i) => (
              <Reveal key={st.title} delay={i * 80}>
                <div className="h-full rounded-2xl border-3 border-ink/15 bg-paper p-6 shadow-brutal-sm">
                  <div className="font-display text-4xl font-black text-slate/15 tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 font-display text-xl font-black text-ink">{st.title}</h3>
                  <p className="mt-2 text-body text-ink/75 leading-relaxed">{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HAYAL GÜCÜ */}
      <section className="bg-slate py-section">
        <div className="mx-auto max-w-container px-6 text-center">
          <Reveal>
            <p className="font-display text-4xl md:text-6xl font-black leading-tight text-lime">Sınırımız hayal gücünüz.</p>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80 leading-relaxed">
              Aklınızdaki tarz bu listede yok mu? Bir fikir, bir referans site ya da bir çizim yeterli. Sektörünüze ve
              markanıza özel etkileşimi birlikte tasarlayalım.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappUrl("Merhaba, web sitem için aklımda farklı bir tarz var, anlatmak istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-3 border-white/20 bg-lime px-5 py-3 text-sm font-bold text-ink shadow-brutal transition-all rounded-full"
              >
                <MessageCircle className="h-4 w-4" /> Fikrimi anlatmak istiyorum
              </a>
              <Link
                href="/web-tasarim"
                className="inline-flex items-center gap-2 border-3 border-white/20 bg-transparent px-5 py-3 text-sm font-bold text-white transition-all rounded-full"
              >
                Web tasarım hizmeti <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SSS */}
      <section className="bg-white py-section border-t-3 border-ink/10">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-display text-h2 font-black leading-tight text-ink">Sıkça sorulan sorular</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border-3 border-ink/15 bg-paper p-5">
                <summary className="cursor-pointer list-none font-bold text-ink">{f.q}</summary>
                <p className="mt-3 text-body text-ink/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink/60">
            Fiyatlar için <Link href="/fiyatlar" className="font-bold underline">fiyatlar sayfasına</Link> bakabilir, e-ticaret
            sitesini sosyal medya ve reklamla birlikte almak için{" "}
            <Link href="/online-is-kurma-paketi" className="font-bold underline">Online İş Kurma Paketi</Link>&apos;ni inceleyebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
