import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

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
            <p className="mt-4 max-w-prose text-body text-ink/70">İsim ve sektör gerçek, paylaşım izinli alıntılar. Reel + dashboard ekran kayıtları üye girişi sonrası mevcuttur.</p>
          </Reveal>
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
