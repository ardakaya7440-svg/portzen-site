import { ArrowUpRight } from "lucide-react";
import type { PublicWork } from "@/server/cms";
import { CATEGORY_LABEL, type VisualKind } from "@/data/catalog";
import { Illustration } from "@/components/visual/Illustrations";
import { Media } from "./Media";

/** "Demo" rozeti: örnek/temsili çalışmalar açıkça işaretlenir */
export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-slate px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white ${className}`}>
      Demo
    </span>
  );
}

export function WorkCard({ w }: { w: PublicWork }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate/15 bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-light">
        {w.cover && <Media media={w.cover} alt={w.alt ?? w.title} />}
        {w.isDemo && <DemoBadge className="absolute left-3 top-3" />}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold text-slate/60">{CATEGORY_LABEL[w.category]}</p>
        <h3 className="mt-1 text-lg font-bold text-slate">{w.title}</h3>
        {w.summary && <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate/70">{w.summary}</p>}
        {(w.projectUrl || w.videoUrl) && (
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold text-slate">
            {w.projectUrl && (
              <a href={w.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:no-underline">
                Projeyi görün <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
            {w.videoUrl && (
              <a href={w.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline underline-offset-4 hover:no-underline">
                Videoyu izleyin <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/** Yayımlanmış iş yoksa gösterilen, kodla çizilmiş temsili örnekler (hepsi "Demo") */
const BUILTIN: { title: string; summary: string; category: PublicWork["category"]; visual: VisualKind }[] = [
  { title: "Kafe için aylık içerik seti", summary: "Feed tasarımları, hikâye şablonları ve kısa video kapakları için örnek düzen.", category: "sosyal-medya", visual: "social" },
  { title: "Randevu soran müşteriye WhatsApp yanıtı", summary: "Uygun saatleri sunan, gerektiğinde ekibe aktaran asistan akışı.", category: "ai-otomasyon", visual: "chat" },
  { title: "Hizmet firması için kurumsal site", summary: "Hizmetler, teklif formu ve WhatsApp bağlantısı olan sade bir site düzeni.", category: "web-yazilim", visual: "web" }
];

export function WorksGrid({ works }: { works: PublicWork[] }) {
  if (works.length) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {works.map((w) => (
          <WorkCard key={w.id} w={w} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {BUILTIN.map((b) => (
          <article key={b.title} className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate/15 bg-white">
            <div className="relative aspect-[4/3]">
              <Illustration kind={b.visual} />
              <DemoBadge className="absolute left-3 top-3" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-bold text-slate/60">{CATEGORY_LABEL[b.category]}</p>
              <h3 className="mt-1 text-lg font-bold text-slate">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate/70">{b.summary}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate/60">Bu kartlar temsili örneklerdir; gerçek bir müşteri çalışması değildir.</p>
    </div>
  );
}
