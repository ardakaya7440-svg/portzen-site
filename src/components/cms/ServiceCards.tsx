import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BILLING_SUFFIX, PRICING, SINGLE, familyRange, formatTL } from "@/data/pricing";
import { SERVICE_GROUPS, type ServiceItem } from "@/data/catalog";
import type { PublicWork } from "@/server/cms";
import { Illustration } from "@/components/visual/Illustrations";
import { Media } from "./Media";
import { cn } from "@/lib/utils";

/** Kartta gösterilen kısa fiyat ("aylık 9.900 TL'den") — fiyatlar tek kaynaktan */
export function fromPrice(item: ServiceItem): string | null {
  const p = item.price;
  if (!p) return null;
  if ("family" in p) {
    const f = PRICING[p.family];
    const low = formatTL(familyRange(f).low);
    if (f.billing === "monthly") return `Aylık ${low}'den`;
    if (f.billing === "one-time") return `Kurulum ${low}'den`;
    return `${low}'den, ${BILLING_SUFFIX[f.billing].replace("/ ", "")} başı`;
  }
  const s = SINGLE[p.single];
  if (s.startingAt) return `${formatTL(s.price)}'den başlayan`;
  if (s.setupFee && s.monthly) return `Aylık ${formatTL(s.monthly)} + kurulum`;
  return `${formatTL(s.price)}`;
}

const COLS: Record<number, string> = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5" };

export function ServiceCard({ item, visual }: { item: ServiceItem; visual?: PublicWork }) {
  const price = fromPrice(item);
  return (
    <article className="group relative flex h-full w-[78vw] min-w-0 max-w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate/15 bg-white transition-shadow hover:shadow-card-lg md:w-full md:max-w-none md:shrink">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-slate/10">
        {visual?.cover ? <Media media={visual.cover} alt={visual.alt ?? item.label} /> : <Illustration kind={item.visual} />}
        {visual?.isDemo && (
          <span className="absolute left-3 top-3 rounded-full bg-slate px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Demo</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h4 className="text-[17px] font-bold leading-snug text-slate">
          <Link href={item.href} className="after:absolute after:inset-0 focus-visible:outline-none">
            {item.label}
          </Link>
        </h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate/70">{item.short}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          {price && <span className="text-sm font-bold text-slate tabular-nums">{price}</span>}
          <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-light text-slate transition-colors group-hover:bg-lime" aria-hidden>
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-slate group-focus-within:ring-2" aria-hidden />
    </article>
  );
}

export function ServiceGroups({ visuals }: { visuals: PublicWork[] }) {
  const byKey = new Map(visuals.filter((v) => v.serviceKey).map((v) => [v.serviceKey!, v]));
  return (
    <div className="flex flex-col gap-14 lg:gap-20">
      {SERVICE_GROUPS.map((g, i) => (
        <section key={g.id} aria-labelledby={`grup-${g.id}`}>
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold text-slate/50">0{i + 1}</p>
              <h3 id={`grup-${g.id}`} className="text-2xl font-bold text-slate lg:text-3xl">
                {g.title}
              </h3>
            </div>
            <p className="max-w-md text-[15px] text-slate/70">{g.intro}</p>
          </div>
          <ul
            className={cn(
              "-mx-6 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0",
              COLS[g.links.length] ?? "lg:grid-cols-4"
            )}
          >
            {g.links.map((l) => (
              <li key={l.href} className="flex min-w-0">
                <ServiceCard item={l} visual={byKey.get(l.href)} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
