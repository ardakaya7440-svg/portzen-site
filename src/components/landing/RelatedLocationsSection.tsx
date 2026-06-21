import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import {
  SERVICE_META,
  getSectorLanding,
  getSectorSlugsForServiceByType,
  type ServiceSlug
} from "@/lib/landings";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface Props {
  service: ServiceSlug;
}

/** Bir ana landing'in altında o hizmetin tüm LOKASYON landing'lerini grid olarak gösterir. */
export function RelatedLocationsSection({ service }: Props) {
  const meta = SERVICE_META[service];
  const locationSlugs = getSectorSlugsForServiceByType(service, "location");
  if (locationSlugs.length === 0) return null;

  const locations = locationSlugs
    .map((slug) => {
      const data = getSectorLanding(service, slug);
      return data ? { slug, name: data.sectorName } : null;
    })
    .filter((s): s is { slug: string; name: string } => s !== null);

  if (locations.length === 0) return null;

  return (
    <section className="bg-ink text-paper py-section border-t-3 border-ink">
      <div className="mx-auto max-w-container px-6">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 border-3 border-paper bg-brand-yellow text-ink px-3 py-1 text-xs font-black uppercase tracking-wider mb-3 shadow-[6px_6px_0_#FFFDF5]">
              <MapPin className="h-3 w-3" />
              Şehrinize Özel
            </div>
            <h2 className="font-display text-h2 font-black leading-tight">
              {meta.label} — Hangi şehir için?
            </h2>
            <p className="mt-3 text-body opacity-80 max-w-prose">
              Şehrinize özel hazırladığımız sayfalar — yerel mahalle, ulaşım, rakip analizi ve
              müşteri profili dahil.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/${service}/${s.slug}`}
                className="group flex items-center justify-between gap-3 border-3 border-paper bg-paper/5 px-5 py-4 shadow-[6px_6px_0_#FFFDF5] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#FFFDF5] hover:bg-brand-yellow hover:text-ink transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="font-display text-lg font-black leading-tight">
                    {s.name}
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity flex-shrink-0" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
