import Link from "next/link";
import { ArrowUpRight, Quote, Play, Utensils } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const CASE_STUDIES = [
  {
    sector: "Restoran",
    icon: Utensils,
    title: "Cihangir Brasserie Restoran",
    subtitle: "Online rezervasyon + dijital menü + atmosfer galerisi",
    videoSrc: "/assets/videos/referanslar/restoran-web-ornegi.mp4",
    poster: "/assets/videos/referanslar/restoran-web-ornegi-poster.jpg",
    stats: [
      { label: "Aylık Organik Trafik", before: "220", after: "3.600" },
      { label: "Online Rezervasyon", before: "0", after: "180/ay" },
      { label: "Hafta Sonu Doluluk", before: "%72", after: "%94" }
    ],
    href: "/web-tasarim/restoran",
    tone: "bg-brand-yellow",
    textTone: "text-ink"
  }
];

const REFS = [
  { sector: "Eczane", quote: "WhatsApp bot kurulduktan sonra randevu doluluğu %87 arttı. Üç haftada kendini ödedi.", who: "Ayşe K.", role: "Klinik sahibi", tone: "bg-brand-pink", textTone: "text-paper" },
  { sector: "Hukuk Bürosu", quote: "AI reklam videoları sayesinde ilk 2 hafta 18 yeni danışan kazandık.", who: "Cem A.", role: "Avukat", tone: "bg-brand-green", textTone: "text-paper" },
  { sector: "İnşaat", quote: "Otomasyon sistemi lead takibinde harcadığımız 5 saati 30 dakikaya indirdi.", who: "Burak Y.", role: "Müteahhit", tone: "bg-brand-blue", textTone: "text-paper" },
  { sector: "Restoran", quote: "Rezervasyon botumuz telefon yükünü %60 azalttı.", who: "Mert D.", role: "Restoran sahibi", tone: "bg-brand-yellow", textTone: "text-ink" },
  { sector: "Online Koç", quote: "Sosyal medya içerik paketi ile takipçimiz 3 ayda 12K → 28K'ya çıktı.", who: "Selin P.", role: "Yaşam koçu", tone: "bg-brand-orange", textTone: "text-paper" },
  { sector: "Otomotiv", quote: "Web sitemiz + AI reklam videosu ile galeri trafiği %220 arttı.", who: "Onur T.", role: "Galeri sahibi", tone: "bg-brand-purple", textTone: "text-paper" }
];

export default function Page() {
  return (
    <>
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink bg-brand-pink text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">Referanslar</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-[0.95] max-w-3xl">Müşterilerimiz ne diyor.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-prose text-body text-ink/70">İsim ve sektör gerçek, paylaşım izinli alıntılar. Aşağıda örnek çalışmalarımızdan biri — canlı web sitesi kaydı.</p>
          </Reveal>
        </div>
      </section>

      {/* ÖRNEK ÇALIŞMALAR — video + istatistik */}
      <section className="pb-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink bg-brand-green text-paper px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm">
                Örnek Çalışmalar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Canlı vaka: restoran web sitesi
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Cihangir&apos;de bir brasserie restoran için tasarladığımız web sitesi. Online rezervasyon,
                dijital menü, Google Maps entegrasyonu, atmosfer galerisi.
              </p>
            </div>
          </Reveal>

          {CASE_STUDIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={i} delay={100}>
                <div className="border-3 border-ink bg-paper shadow-brutal-lg overflow-hidden">
                  {/* Video */}
                  <div className="relative border-b-3 border-ink bg-ink aspect-video">
                    <video
                      src={c.videoSrc}
                      poster={c.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* İçerik */}
                  <div className="p-6 md:p-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                      <div className="inline-flex items-center gap-2 border-3 border-ink bg-brand-yellow text-ink px-3 py-1.5 shadow-brutal-sm mb-4">
                        <Icon className="h-4 w-4" />
                        <span className="text-xs font-black uppercase tracking-wider">{c.sector}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-ink mb-2">
                        {c.title}
                      </h3>
                      <p className="text-body text-ink/70 mb-5">{c.subtitle}</p>
                      <Link
                        href={c.href}
                        className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
                      >
                        <Play className="h-4 w-4" />
                        Bu Hizmete Bak
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* İstatistikler */}
                    <div className="grid gap-3">
                      <div className="text-xs font-black uppercase tracking-wider text-ink/50 mb-1">
                        3 ayda kazanım
                      </div>
                      {c.stats.map((s, j) => (
                        <div
                          key={j}
                          className={cn(
                            "border-3 border-ink p-4 shadow-brutal-sm flex items-center justify-between gap-3",
                            j === 1 ? "bg-brand-green text-paper" : "bg-brand-yellow text-ink"
                          )}
                        >
                          <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                            {s.label}
                          </div>
                          <div className="flex items-center gap-2 font-display font-black leading-none">
                            <span className="text-sm opacity-60 line-through">{s.before}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-60" />
                            <span className="text-xl md:text-2xl">{s.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-section">
        <div className="mx-auto max-w-container px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFS.map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={cn("border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all", r.tone, r.textTone)}>
                <Quote className="h-7 w-7 mb-3 opacity-70" />
                <p className="text-body leading-snug mb-4">"{r.quote}"</p>
                <div className="border-t-3 border-current/30 pt-3 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-sm">{r.who}</div>
                    <div className="text-xs opacity-75">{r.role} · {r.sector}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <div className="border-3 border-ink bg-brand-yellow p-8 shadow-brutal-lg">
            <h2 className="font-display text-h2 font-black leading-tight mb-3">Sonraki referans sizinki olabilir.</h2>
            <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink bg-ink px-5 py-3 text-sm font-bold uppercase text-paper shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">Görüşme Al <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
