import Link from "next/link";
import { ArrowDown, Check } from "lucide-react";
import { categoryOf, serviceByHref } from "@/data/catalog";
import { DEFAULT_STEPS, SERVICE_GLANCE } from "@/data/service-glance";
import { getPublicContent } from "@/server/cms";
import { fromPrice } from "@/components/cms/ServiceCards";
import { Media } from "@/components/cms/Media";
import { Illustration } from "./Illustrations";
import { ProcessDiagram } from "./ProcessDiagram";

/**
 * Hizmet sayfalarının üst kısmındaki görsel özet: görsel + kısa maddeler + fiyat + süreç diyagramı.
 * Görsel admin panelinden (Görseller ve işler → Hizmet görselleri) gelir; yoksa kodla çizilmiş temsili görsel kullanılır.
 * Maddeler ve adımlar src/data/service-glance.ts dosyasındadır.
 */
export async function ServiceAtAGlance({ href, priceAnchor = "#fiyatlar" }: { href: string; priceAnchor?: string | null }) {
  const item = serviceByHref(href);
  const glance = SERVICE_GLANCE[href];
  if (!item || !glance) return null;
  const cms = await getPublicContent();
  const visual = cms.services.find((s) => s.serviceKey === href);
  const cat = categoryOf(href) ?? "web-yazilim";
  const steps = glance.steps ?? DEFAULT_STEPS[cat];
  const price = fromPrice(item);
  return (
    <section aria-labelledby="kisaca" className="border-t border-slate/10 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-container px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate/15">
            {visual?.cover ? <Media media={visual.cover} alt={visual.alt ?? item.label} /> : <Illustration kind={item.visual} />}
            {visual?.isDemo && (
              <span className="absolute left-4 top-4 rounded-full bg-slate px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Demo</span>
            )}
          </div>
          <div>
            <span className="inline-block rounded-full bg-slate px-3 py-1 text-xs font-semibold text-white">Kısaca</span>
            <h2 id="kisaca" className="mt-5 text-3xl font-bold leading-tight text-slate lg:text-4xl">
              {glance.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {glance.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[16px] leading-relaxed text-slate">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {price && priceAnchor && (
              <Link
                href={priceAnchor}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate/20 py-2 pl-5 pr-2 text-sm font-bold text-slate transition-colors hover:bg-light"
              >
                <span className="tabular-nums">{price}</span>
                <span className="text-slate/50">·</span>
                Paketleri görün
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime">
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-16 lg:mt-20">
          <h3 className="text-xl font-bold text-slate">{glance.stepsTitle ?? "Nasıl ilerliyoruz"}</h3>
          <ProcessDiagram steps={steps} className="mt-8" />
        </div>
      </div>
    </section>
  );
}
