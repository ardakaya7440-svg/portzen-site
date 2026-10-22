import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const WORKS = [
  { sector: "Eczane", tone: "bg-light", textTone: "text-ink", desc: "Sektörel reels showcase" },
  { sector: "Hukuk Bürosu", tone: "bg-light", textTone: "text-ink", desc: "Brand video + reels" },
  { sector: "İnşaat", tone: "bg-light", textTone: "text-ink", desc: "Sektörel reels + landing" },
  { sector: "Restoran", tone: "bg-light", textTone: "text-ink", desc: "WhatsApp bot + reels" },
  { sector: "Galeri", tone: "bg-light", textTone: "text-ink", desc: "AI reklam video setleri" },
  { sector: "Online Koç", tone: "bg-light", textTone: "text-ink", desc: "Sosyal medya 90 günlük takvim" }
];

export default function Page() {
  return (
    <>
      <section className="py-section">
        <div className="mx-auto max-w-container px-6">
          <Reveal>
            <div className="inline-block border-3 border-ink/15 bg-slate text-white px-3 py-1 text-xs font-black tracking-wider mb-3 shadow-brutal-sm rounded-full">Portfolyo</div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display text-h1 font-black leading-tight max-w-3xl">Sektör sektör — neler üretebiliriz.</h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-section">
        <div className="mx-auto max-w-container px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={cn("border-3 border-ink/15 aspect-square p-6 shadow-brutal flex flex-col justify-between hover:shadow-brutal-lg transition-all rounded-2xl", w.tone, w.textTone)}>
                <div className="text-xs font-black uppercase tracking-wider opacity-70">Sektör</div>
                <div>
                  <h3 className="font-display text-3xl font-black leading-tight mb-2">{w.sector}</h3>
                  <p className="text-sm opacity-85">{w.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
