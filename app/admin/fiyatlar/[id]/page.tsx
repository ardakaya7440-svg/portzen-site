import { notFound } from "next/navigation";
import { getPublished, getVersion } from "@/server/prices";
import { priceMeta } from "@/server/price-meta";
import { PriceEditor } from "@/components/admin/PriceEditor";
import { ActionButton, Flash, LinkButton, PageHead, StatusPill } from "@/components/admin/ui";
import { newPriceDraftAction } from "../../actions";

export const dynamic = "force-dynamic";

export default async function PriceVersionPage({ params, searchParams }: { params: { id: string }; searchParams: { ok?: string; err?: string } }) {
  const id = Number(params.id);
  const [v, pub] = await Promise.all([Number.isInteger(id) ? getVersion(id) : null, getPublished()]);
  if (!v) notFound();
  const meta = priceMeta();
  const draft = v.status === "draft";
  return (
    <>
      <PageHead
        title={`Fiyat sürümü v${v.id}`}
        intro={
          <span className="inline-flex flex-wrap items-center gap-2">
            <StatusPill status={v.status} />
            {draft
              ? "Değişiklikler kaydedilene kadar hiçbir yerde görünmez; yayımlanana kadar sitede görünmez."
              : "Yayımlanmış ve arşiv sürümleri değiştirilemez. Değişiklik için bu sürümden yeni taslak oluşturun."}
          </span>
        }
        actions={
          <>
            <LinkButton href="/admin/fiyatlar">Sürümlere dön</LinkButton>
            {draft ? (
              <LinkButton href={`/admin/fiyatlar/${v.id}/onizleme`} tone="accent">
                Önizle ve yayımla
              </LinkButton>
            ) : (
              <ActionButton action={newPriceDraftAction} fields={{ from: v.id }} tone="primary" size="md">
                Bu sürümden taslak oluştur
              </ActionButton>
            )}
          </>
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />
      <PriceEditor
        versionId={v.id}
        initial={v.data}
        published={pub && pub.id !== v.id ? pub.data : null}
        note={v.note}
        families={meta.families}
        singles={meta.singles}
        readOnly={!draft}
      />
    </>
  );
}
