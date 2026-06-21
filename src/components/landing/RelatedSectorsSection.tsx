import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  SERVICE_META,
  TONE_BG,
  TONE_TEXT,
  getSectorLanding,
  getSectorSlugsForService,
  type ServiceSlug
} from "@/lib/landings";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  service: ServiceSlug;
}

/** Bir ana landing'in altında, o hizmetin tüm sektörel landing'lerini grid olarak gösterir.
 *  Orphan page problemini çözer — her sektörel landing main landing'den link alır. */
export function RelatedSectorsSection({ service }: Props) {
  const meta = SERVICE_META[service];
  const sectorSlugs = getSectorSlugsForService(service);
  if (sectorSlugs.length === 0) return null;

  // Her sektörün display adını al
  const sectors = sectorSlugs
    .map((slug) => {
      const data = getSectorLanding(service, slug);
      return data ? { slug, name: data.sectorName, plural: data.sectorPlural } : null;
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  if (sectors.length === 0) return null;

  return (
    <section className="bg-paper py-section border-t-3 border-ink">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <div
              className={cn(
                "inline-block border-3 border-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-brutal-sm",
                TONE_BG[meta.tone],
                TONE_TEXT[meta.tone]
              )}
            >
              Sektörünüze Özel
            </div>
            <h2 className="font-display text-h2 font-black leading-tight text-ink">
              {meta.label} — Hangi sektör için?
            </h2>
            <p className="mt-3 text-body text-ink/70 max-w-prose">
              Sektörünüze özel kurguladığımız sayfalardan birini seçin — orada sizin işinize özel
              problem, çözüm, fiyat ve örnek vakalar var.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={i * 30}>
              <Link
                href={`/${service}/${s.slug}`}
                className="group flex items-center justify-between gap-3 border-3 border-ink bg-paper px-4 py-3 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal hover:bg-brand-yellow transition-all"
              >
                <span className="font-display text-base font-black text-ink leading-tight">
                  {s.name}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
