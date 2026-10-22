import { notFound } from "next/navigation";
import { PRICING, SINGLE, TIER_NAMES, formatTL, withPriceData, type TierId } from "@/data/pricing";
import { getPublished, getVersion } from "@/server/prices";
import { PriceOverview } from "@/components/pricing/PriceOverview";
import { PricingSection, SinglePriceCard, WebMaintenanceRow } from "@/components/pricing/PricingSection";
import { ActionButton, Card, Flash, LinkButton, PageHead } from "@/components/admin/ui";
import { publishPriceAction } from "../../../actions";

export const dynamic = "force-dynamic";

type Row = { what: string; field: string; before: number | undefined; after: number | undefined };
const FIELD: Record<string, string> = { price: "Bedel", setupFee: "Kurulum", maintenance: "Bakım", monthly: "Aylık" };

export default async function PricePreviewPage({ params, searchParams }: { params: { id: string }; searchParams: { ok?: string; err?: string } }) {
  const id = Number(params.id);
  const [v, pub] = await Promise.all([Number.isInteger(id) ? getVersion(id) : null, getPublished()]);
  if (!v) notFound();
  const src = withPriceData(v.data);

  const rows: Row[] = [];
  if (pub) {
    for (const f of Object.values(PRICING)) {
      for (const t of ["baslangic", "buyume", "kurumsal"] as TierId[]) {
        const a = pub.data.families[f.id][t] as Record<string, number | undefined>;
        const b = v.data.families[f.id][t] as Record<string, number | undefined>;
        for (const k of ["price", "setupFee", "maintenance"]) {
          if (a[k] !== b[k]) rows.push({ what: `${f.title} · ${TIER_NAMES[t]}`, field: FIELD[k], before: a[k], after: b[k] });
        }
      }
    }
    for (const s of Object.values(SINGLE)) {
      const a = pub.data.singles[s.id] as Record<string, number | undefined>;
      const b = v.data.singles[s.id] as Record<string, number | undefined>;
      for (const k of ["price", "setupFee", "monthly"]) {
        if (s.setupFee !== undefined && s.monthly !== undefined && k === "price") continue;
        if (a[k] !== b[k]) rows.push({ what: s.title, field: FIELD[k], before: a[k], after: b[k] });
      }
    }
  }

  return (
    <>
      <PageHead
        title={`v${v.id} önizlemesi`}
        intro="Aşağıdaki bloklar sitedeki bileşenlerin aynısıdır; yalnızca bu sürümün tutarlarıyla çizilir. Ziyaretçiler bu sayfayı göremez."
        actions={
          <>
            <LinkButton href={`/admin/fiyatlar/${v.id}`}>{v.status === "draft" ? "Düzenlemeye dön" : "Sürüme dön"}</LinkButton>
            {v.status === "draft" && (
              <ActionButton action={publishPriceAction} fields={{ id: v.id }} tone="accent" size="md">
                Yayımla
              </ActionButton>
            )}
          </>
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />

      <Card className="mt-6">
        <h2 className="text-lg font-bold text-slate">Yayındaki sürüme (v{pub?.id}) göre değişen tutarlar</h2>
        {rows.length === 0 ? (
          <p className="mt-2 text-sm text-slate/70">Değişiklik yok; tutarlar yayındaki sürümle aynı.</p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="border-b border-slate/10 text-slate/70">
                <tr>
                  <th scope="col" className="py-2 pr-4 font-semibold">Hizmet / paket</th>
                  <th scope="col" className="py-2 pr-4 font-semibold">Alan</th>
                  <th scope="col" className="py-2 pr-4 font-semibold">Yayındaki</th>
                  <th scope="col" className="py-2 pr-4 font-semibold">Yeni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate/10">
                {rows.map((r) => (
                  <tr key={r.what + r.field}>
                    <td className="py-2 pr-4 text-slate">{r.what}</td>
                    <td className="py-2 pr-4 text-slate/80">{r.field}</td>
                    <td className="py-2 pr-4 tabular-nums text-slate/60 line-through">{r.before !== undefined ? formatTL(r.before) : "—"}</td>
                    <td className="py-2 pr-4 font-bold tabular-nums text-slate">{r.after !== undefined ? formatTL(r.after) : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-4 text-xs text-slate/60">
          Yayımladığınızda site yeniden derlenir; sayfalar, SSS cevaplarındaki tutarlar, yapılandırılmış veri (schema.org) ve WhatsApp
          mesajları bu sürümle birlikte güncellenir.
        </p>
      </Card>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate/15 bg-white">
        <p className="border-b border-slate/10 bg-lime/40 px-5 py-2 text-xs font-bold text-slate">ÖNİZLEME · Ana sayfa fiyat özeti</p>
        <div className="p-5 lg:p-8">
          <PriceOverview src={src} />
        </div>
      </div>

      {Object.values(PRICING)
        .filter((f) => f.id !== "web-bakim")
        .map((f) => (
          <div key={f.id} className="mt-8 overflow-hidden rounded-2xl border border-slate/15 bg-white">
            <p className="border-b border-slate/10 bg-lime/40 px-5 py-2 text-xs font-bold text-slate">ÖNİZLEME · {f.title} paket kartları</p>
            <PricingSection family={f.id} src={src} id={`onizleme-${f.id}`} headingLevel="h3" />
          </div>
        ))}

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate/15 bg-white">
        <p className="border-b border-slate/10 bg-lime/40 px-5 py-2 text-xs font-bold text-slate">ÖNİZLEME · Tekil hizmetler ve web bakım</p>
        <div className="grid gap-6 p-5 lg:grid-cols-2 lg:p-8">
          {Object.values(SINGLE).map((s) => (
            <SinglePriceCard key={s.id} id={s.id} src={src} />
          ))}
          <div className="lg:col-span-2">
            <WebMaintenanceRow src={src} />
          </div>
        </div>
      </div>

      {v.status === "draft" && (
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate bg-white p-5">
          <p className="text-sm text-slate">Her şey doğru görünüyorsa yayımlayın. Gerekirse daha sonra önceki sürüme dönebilirsiniz.</p>
          <ActionButton action={publishPriceAction} fields={{ id: v.id }} tone="accent" size="md">
            v{v.id} fiyatlarını yayımla
          </ActionButton>
        </div>
      )}
    </>
  );
}
