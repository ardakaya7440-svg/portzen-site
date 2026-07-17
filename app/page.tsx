import Link from "next/link";
import { ArrowUpRight, Play, Video, MessageSquare, Workflow, Sparkles, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

/**
 * Anasayfa — design ekran görüntüsüne tam sadık.
 *
 * Hero (design):
 * - Sol: eyebrow "BEŞ AJANS YERINE TEK EKIP" + serif başlık "AI ile kurulan büyüme altyapısı"
 *        ("büyüme" turuncu italic serif vurgu) + açıklama + 2 CTA
 * - Sağ: 9:16 video iç içe sarı çerçeve içinde + "▶ LUXURY REELS · 00:20 LOOP" alt caption overlay
 * - Alt bant: kayan referans marka isimleri (Fraunces serif)
 *
 * Diğer bölümler: 5 hizmet, Cihangir vaka, AI örnek videolar, final CTA.
 */

const SERVICES = [
  { title: "AI Reklam Videosu", tagline: "Oyuncu ve stüdyo yok. 3 günde teslim.", href: "/yapay-zeka-video-uretimi", icon: Video, tone: "bg-brand-pink" },
  { title: "WhatsApp AI Asistanı", tagline: "60 saniyede müşteriyi karşılayan asistan.", href: "/whatsapp-ai-asistani", icon: MessageSquare, tone: "bg-brand-green" },
  { title: "Otomasyon & CRM", tagline: "Tekrarlı işleri %80 azaltan iş akışı.", href: "/crm-otomasyonu", icon: Workflow, tone: "bg-brand-blue" },
  { title: "Sosyal Medya İçerik", tagline: "Aylık video + görsel + hikaye paketi.", href: "/sosyal-medya-yonetimi", icon: Sparkles, tone: "bg-brand-yellow" },
  { title: "Web Tasarım", tagline: "Hızlı, satış odaklı, mobil uyumlu site.", href: "/web-tasarim", icon: Globe, tone: "bg-brand-orange" }
] as const;

// Kayan bant — referans marka isimleri (design'daki alt strip)
const REFS = [
  "Aksoy Hukuk",
  "Marina Otomotiv",
  "Vera Butik",
  "Nova Klinik",
  "Cihangir Brasserie",
  "Denta İzmir"
];

const AI_EXAMPLES = [
  { src: "/assets/videos/ai-video/sample-1.mp4", caption: "Sinematik marka reklamı" },
  { src: "/assets/videos/ai-video/sample-2.mp4", caption: "AI karakter tanıtımı" },
  { src: "/assets/videos/ai-video/sample-3.mp4", caption: "Sektörel reklam" }
];

export default function HomePage() {
  return (
    <>
      {/* ═════════════════════════════════════════════
          HERO — design'a tam sadık
          ═════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-container px-6 pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_1fr] items-center">
            {/* Sol: Eyebrow + başlık + açıklama + CTA'lar */}
            <div>
              <Reveal>
                <div className="inline-block border-3 border-ink bg-ink text-paper px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] mb-8 shadow-brutal-sm">
                  Beş Ajans Yerine Tek Ekip
                </div>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="font-serif font-black text-ink leading-[1.02] tracking-tight text-[clamp(3rem,7vw,6.5rem)]">
                  AI ile kurulan{" "}
                  <span className="text-brand-orange italic font-normal">büyüme</span>{" "}
                  altyapısı.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-8 max-w-xl text-lg text-ink/75 leading-relaxed">
                  Sosyal medya, WhatsApp asistanı, otomasyon, web. Hepsi tek ekipten, tek sistemde. Sen işine bak — altyapı bizden.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-6 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                  >
                    Görüşme Al
                  </Link>
                  <Link
                    href="/referanslar"
                    className="inline-flex items-center gap-2 border-3 border-ink bg-paper px-6 py-4 text-sm font-bold uppercase tracking-wide text-ink shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                  >
                    Vaka Çalışmasını İzle
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Sağ: 9:16 video iç içe çerçeve + LUXURY REELS caption */}
            <Reveal delay={200}>
              <div className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-[420px]">
                {/* Dış sarı çerçeve — offset */}
                <div
                  className="absolute inset-0 border-3 border-ink bg-brand-yellow translate-x-4 translate-y-4 rounded-[2rem]"
                  aria-hidden
                />
                {/* İç çerçeve — video */}
                <div className="relative border-3 border-ink bg-mute rounded-[2rem] overflow-hidden">
                  <div className="aspect-[9/16] bg-ink/5 relative">
                    <video
                      src="/assets/hero/hero-bg.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Alt caption overlay — "▶ LUXURY REELS · 00:20 LOOP" */}
                    <div className="absolute bottom-4 left-4 border-3 border-paper bg-ink text-paper px-3 py-1.5 flex items-center gap-2 shadow-[4px_4px_0_#FFFDF5]">
                      <Play className="h-3.5 w-3.5 fill-paper" />
                      <span className="text-[10px] font-black uppercase tracking-[0.15em]">
                        Luxury Reels · 00:20 Loop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Alt bant — kayan referans marka isimleri (Fraunces serif) */}
        <div className="border-t-3 border-b-3 border-ink bg-paper overflow-hidden">
          <div className="marquee-track flex items-center gap-14 py-6 whitespace-nowrap">
            {[...REFS, ...REFS, ...REFS].map((name, i) => (
              <span
                key={i}
                className="font-serif text-2xl md:text-3xl font-bold italic text-ink/70 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee CSS — tek yerde inline */}
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}} />

      {/* ═════════════════════════════════════════════
          HİZMETLER — 5 sade kart
          ═════════════════════════════════════════════ */}
      <section id="hizmetler" className="bg-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-ink">
                Ne <span className="italic font-normal text-brand-orange">yapıyoruz</span>.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Beş hizmet, tek ekip. İşletmenin altyapısını tek koordinasyonla kuruyoruz.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.href} delay={i * 60}>
                <Link
                  href={svc.href}
                  className={`group block border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all h-full ${svc.tone} text-ink`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="border-3 border-ink bg-paper text-ink p-2.5 shadow-brutal-sm">
                      <svc.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl font-black leading-tight mb-2">{svc.title}</h3>
                  <p className="text-sm opacity-85">{svc.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          VAKA — Cihangir Brasserie
          ═════════════════════════════════════════════ */}
      <section className="bg-ink text-paper py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-paper bg-brand-yellow px-3 py-1 text-ink text-xs font-black uppercase tracking-[0.15em] mb-3 shadow-[6px_6px_0_#FFFDF5]">
                Vaka Çalışması
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight">
                Cihangir Brasserie —{" "}
                <span className="italic font-normal text-brand-yellow">18 günde</span>{" "}
                teslim.
              </h2>
              <p className="mt-3 text-body text-paper/80">
                Online rezervasyon, dijital menü, harita entegrasyonu, atmosfer galerisi. Restoran sektörüne özel altyapı.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
            <Reveal>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-yellow border-3 border-paper translate-x-3 translate-y-3" aria-hidden />
                <div className="relative border-3 border-paper bg-paper aspect-video overflow-hidden">
                  <video
                    src="/assets/videos/referanslar/restoran-web-ornegi.mp4"
                    poster="/assets/videos/referanslar/restoran-web-ornegi-poster.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {[
                { before: "220", after: "3.600", label: "Aylık organik trafik" },
                { before: "%72", after: "%94", label: "Hafta sonu doluluk" },
                { before: "6.8 sn", after: "1.2 sn", label: "Site yüklenme süresi" }
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-3 border-paper bg-brand-yellow p-5 shadow-[6px_6px_0_#FFFDF5] text-ink">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-black line-through opacity-50">{stat.before}</span>
                      <ArrowUpRight className="h-5 w-5" />
                      <span className="font-display text-4xl font-black leading-none">{stat.after}</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] opacity-75">{stat.label}</div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={280}>
                <Link
                  href="/referanslar"
                  className="inline-flex items-center gap-2 border-3 border-paper bg-paper px-5 py-3 text-sm font-bold uppercase text-ink shadow-[6px_6px_0_#FFFDF5] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                >
                  Diğer Referanslar
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          AI VİDEO ÖRNEKLERİ
          ═════════════════════════════════════════════ */}
      <section className="bg-paper py-section border-t-3 border-ink">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-ink">
                AI ile <span className="italic font-normal text-brand-orange">ürettiğimiz</span> videolar.
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Oyuncu, stüdyo, ekipman yok. Marka mesajı ve ürün odağı var. 3 gün içinde teslim.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {AI_EXAMPLES.map((v, i) => (
              <Reveal key={v.src} delay={i * 80}>
                <div className="border-3 border-ink bg-paper shadow-brutal overflow-hidden">
                  <div className="aspect-[9/16] bg-ink">
                    <video
                      src={v.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4 border-t-3 border-ink">
                    <div className="text-sm font-bold text-ink">{v.caption}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <div className="mt-10">
              <Link
                href="/yapay-zeka-video-uretimi"
                className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
              >
                AI Video Detayları
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═════════════════════════════════════════════
          FINAL CTA
          ═════════════════════════════════════════════ */}
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="relative">
              <div className="absolute inset-0 border-3 border-ink bg-brand-yellow translate-x-3 translate-y-3" aria-hidden />
              <div className="relative border-3 border-ink bg-paper p-8 md:p-16">
                <div className="max-w-2xl">
                  <h2 className="font-serif text-4xl md:text-5xl font-black leading-tight text-ink">
                    <span className="italic font-normal text-brand-orange">Görüşme</span> al.
                  </h2>
                  <p className="mt-3 text-body text-ink/80">
                    30 dakikalık analiz görüşmesi. İşletmenize hangi hizmetin en hızlı sonuç vereceğini birlikte belirleyelim.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow px-6 py-4 text-sm font-black uppercase tracking-wide text-ink shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                    >
                      Görüşme Al
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
