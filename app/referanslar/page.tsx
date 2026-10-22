import Link from "next/link";
import { ArrowUpRight, Quote, Play, Utensils } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { getPublicContent } from "@/server/cms";
import { TestimonialGrid } from "@/components/cms/Testimonials";
import { WorkCard } from "@/components/cms/Works";

const CASE_STUDIES = [
  {
    sector: "Restoran",
    icon: Utensils,
    title: "Örnek restoran web sitesi",
    subtitle: "Online rezervasyon + dijital menü + atmosfer galerisi",
    videoSrc: "/assets/videos/referanslar/restoran-web-ornegi.mp4",
    poster: "/assets/videos/referanslar/restoran-web-ornegi-poster.jpg",
    stats: [
      { label: "Rezervasyon", before: "Telefonla", after: "Online form" },
      { label: "Menü", before: "Basılı / PDF", after: "Dijital menü" },
      { label: "Konum", before: "Adres metni", after: "Google Maps" }
    ],
    href: "/web-tasarim/restoran",
    tone: "bg-light",
    textTone: "text-ink"
  }
];

const REFS = [
  { sector: "Klinik", quote: "WhatsApp'tan gelen randevu talepleri otomatik yanıtlanır, uygun saat önerilir ve randevu takvime işlenir; hatırlatma mesajları otomatik gider.", who: "Örnek senaryo", role: "AI müşteri asistanı", tone: "bg-light", textTone: "text-ink" },
  { sector: "Hukuk Bürosu", quote: "Hizmet alanlarını anlatan kısa AI reklam filmleri üretilir; reklamdan gelen danışan talepleri form veya WhatsApp üzerinden toplanır.", who: "Örnek senaryo", role: "AI reklam filmi", tone: "bg-light", textTone: "text-ink" },
  { sector: "İnşaat", quote: "Formdan ve reklamdan gelen lead'ler CRM'e otomatik düşer, ilgili satış temsilcisine atanır, takip hatırlatmaları otomatik oluşur.", who: "Örnek senaryo", role: "İş otomasyonu", tone: "bg-light", textTone: "text-ink" },
  { sector: "Restoran", quote: "Rezervasyon talepleri WhatsApp ve web üzerinden otomatik alınır; rezervasyonlar elle not edilmek yerine sisteme kaydedilir.", who: "Örnek senaryo", role: "AI müşteri asistanı", tone: "bg-light", textTone: "text-ink" },
  { sector: "Online Koç", quote: "Aylık içerik planı hazırlanır, tasarım ve kısa videolar üretilip düzenli yayınlanır; içerik adedi seçilen pakete göre belirlenir.", who: "Örnek senaryo", role: "Sosyal medya yönetimi", tone: "bg-light", textTone: "text-ink" },
  { sector: "Otomotiv", quote: "Web sitesi araç ilanlarını ve iletişim kanallarını tek yerde toplar; araçlar AI reklam videolarıyla sosyal medyada tanıtılır.", who: "Örnek senaryo", role: "Web sitesi + AI reklam filmi", tone: "bg-light", textTone: "text-ink" }
];

export default async function Page() {
  const cms = await getPublicContent();
  return (
    <>
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">Referanslar</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight max-w-3xl">Sektörlere göre örnek kurulumlar.</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 max-w-prose text-body text-ink/70">Aşağıdaki kartlar, hizmetlerimizin sektörlere göre nasıl kurgulandığını anlatan örnek senaryolardır; müşteri sonucu olarak sunulmaz. İlk bölümde örnek bir web sitesi ekran kaydı yer alıyor.</p>
          </Reveal>
        </div>
      </section>

      {/* ÖRNEK ÇALIŞMALAR — video + istatistik */}
      <section className="pb-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">
                Örnek Çalışmalar
              </div>
              <h2 className="font-display text-h2 font-black leading-tight text-ink">
                Örnek çalışma: restoran web sitesi
              </h2>
              <p className="mt-3 text-body text-ink/70">
                Bir brasserie restoran için hazırlanmış örnek web sitesi kurgusu. Online rezervasyon,
                dijital menü, Google Maps entegrasyonu, atmosfer galerisi.
              </p>
            </div>
          </Reveal>

          {CASE_STUDIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={i} delay={100}>
                <div className="border-3 border-ink/15 bg-paper shadow-brutal-lg overflow-hidden rounded-2xl">
                  {/* Video */}
                  <div className="relative border-b-3 border-ink/15 bg-light aspect-video">
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
                      <div className="inline-flex items-center gap-2 border-3 border-ink/15 bg-lime text-ink px-3 py-1.5 shadow-brutal-sm mb-4 rounded-full">
                        <Icon className="h-4 w-4" />
                        <span className="text-xs font-black uppercase tracking-wider">{c.sector}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-black leading-tight text-ink mb-2">
                        {c.title}
                      </h3>
                      <p className="text-body text-ink/70 mb-5">{c.subtitle}</p>
                      <Link
                        href={c.href}
                        className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal hover:shadow-brutal-lg transition-all rounded-full"
                      >
                        <Play className="h-4 w-4" />
                        Bu Hizmete Bak
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* İstatistikler */}
                    <div className="grid gap-3">
                      <div className="text-xs font-black uppercase tracking-wider text-ink/50 mb-1">
                        Sitede neler değişir
                      </div>
                      {c.stats.map((s, j) => (
                        <div
                          key={j}
                          className={cn(
                            "border-3 border-ink/15 p-4 shadow-brutal-sm flex items-center justify-between gap-3 rounded-2xl",
                            j === 1 ? "bg-light text-ink" : "bg-light text-ink"
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

      {/* Admin panelinden yayımlanan müşteri yorumları ve işler (yoksa bu bölümler görünmez) */}
      {cms.testimonials.length > 0 && (
        <section className="pb-section" aria-labelledby="musteri-yorumlari">
          <div className="mx-auto max-w-container px-6">
            <h2 id="musteri-yorumlari" className="font-display text-h2 font-black leading-tight text-ink mb-8">
              Müşteri yorumları
            </h2>
            <TestimonialGrid items={cms.testimonials} />
          </div>
        </section>
      )}
      {cms.works.length > 0 && (
        <section className="pb-section" aria-labelledby="secilmis-isler">
          <div className="mx-auto max-w-container px-6">
            <h2 id="secilmis-isler" className="font-display text-h2 font-black leading-tight text-ink mb-8">
              Seçilmiş işler
            </h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cms.works.map((w) => (
                <WorkCard key={w.id} w={w} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-section">
        <div className="mx-auto max-w-container px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REFS.map((r, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={cn("border-3 border-ink/15 p-6 shadow-brutal hover:shadow-brutal-lg transition-all rounded-2xl", r.tone, r.textTone)}>
                <Quote className="h-7 w-7 mb-3 opacity-70" />
                <p className="text-body leading-snug mb-4">{r.quote}</p>
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
          <div className="border-3 border-ink/15 bg-light p-8 shadow-brutal-lg rounded-2xl">
            <h2 className="font-display text-h2 font-black leading-tight mb-3">Sonraki referans sizinki olabilir.</h2>
            <Link href="/iletisim" className="inline-flex items-center gap-2 border-3 border-ink/15 bg-slate px-5 py-3 text-sm font-bold text-white shadow-brutal transition-all rounded-full">Projeyi Konuşalım <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
