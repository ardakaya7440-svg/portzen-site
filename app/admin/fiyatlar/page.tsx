import Link from "next/link";
import { PRICE_VERSION } from "@/data/pricing";
import { listVersions } from "@/server/prices";
import { ActionButton, ConfirmAction, Empty, Flash, LinkButton, PageHead, StatusPill, trDate } from "@/components/admin/ui";
import { deletePriceDraftAction, newPriceDraftAction, rebuildAction, restorePriceAction } from "../actions";

export const dynamic = "force-dynamic";

export default async function PricesPage({ searchParams }: { searchParams: { ok?: string; err?: string } }) {
  const versions = await listVersions();
  const pub = versions.find((v) => v.status === "published");
  const drafts = versions.filter((v) => v.status === "draft");
  const live = PRICE_VERSION.version;
  const hook = Boolean(process.env.DEPLOY_HOOK_URL);
  return (
    <>
      <PageHead
        title="Fiyatlar"
        intro={
          <>
            Fiyatlar sürüm olarak tutulur. Taslakta değiştirin, önizleyin, sonra <strong>Yayımla</strong> deyin. Yayımlanan
            fiyatlar paket kartları, karşılaştırma tabloları, SSS cevapları, yapılandırılmış veri ve WhatsApp mesajlarında
            birlikte güncellenir. Eski bir sürüme her zaman dönebilirsiniz.
          </>
        }
        actions={
          pub && (
            <ActionButton action={newPriceDraftAction} fields={{ from: pub.id }} tone="primary" size="md">
              Yeni taslak oluştur
            </ActionButton>
          )
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate/15 bg-white p-5">
          <p className="text-sm font-semibold text-slate/70">Yayımlanan sürüm (veritabanı)</p>
          <p className="mt-1 text-2xl font-bold text-slate">v{pub?.id ?? "—"}</p>
          <p className="text-sm text-slate/60">{trDate(pub?.publishedAt, true)} · {pub?.note ?? "not yok"}</p>
        </div>
        <div className="rounded-2xl border border-slate/15 bg-white p-5">
          <p className="text-sm font-semibold text-slate/70">Sitede şu an görünen sürüm</p>
          <p className="mt-1 text-2xl font-bold text-slate">v{live}</p>
          {pub && pub.id !== live ? (
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-amber-900">
              <span>v{pub.id} sitede henüz görünmüyor; derleme {hook ? "sürüyor olabilir" : "bekleniyor"}.</span>
              {hook && (
                <ActionButton action={rebuildAction} fields={{}}>
                  Derlemeyi yeniden başlat
                </ActionButton>
              )}
            </div>
          ) : (
            <p className="text-sm text-slate/60">Yayımlanan sürümle aynı.</p>
          )}
        </div>
      </div>

      <h2 className="mt-10 text-lg font-bold text-slate">Taslaklar</h2>
      {drafts.length === 0 ? (
        <div className="mt-3">
          <Empty>Taslak yok. Fiyat değiştirmek için “Yeni taslak oluştur”a basın; yayındaki fiyatlar kopyalanır.</Empty>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-slate/10 rounded-2xl border border-slate/15 bg-white">
          {drafts.map((v) => (
            <li key={v.id} className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold text-slate">
                  v{v.id} <StatusPill status="draft" />
                </p>
                <p className="text-sm text-slate/60">
                  {v.note ?? "Not yok"} · son kayıt {trDate(v.updatedAt, true)}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <LinkButton href={`/admin/fiyatlar/${v.id}`} size="sm" tone="primary">
                  Düzenle
                </LinkButton>
                <LinkButton href={`/admin/fiyatlar/${v.id}/onizleme`} size="sm">
                  Önizle ve yayımla
                </LinkButton>
                <ConfirmAction action={deletePriceDraftAction} fields={{ id: v.id }} label="Sil" confirmText="Evet, taslağı sil" question={`v${v.id} taslağı silinsin mi? Yayındaki fiyatlar etkilenmez.`} />
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-10 text-lg font-bold text-slate">Sürüm geçmişi</h2>
      <div className="mt-3 overflow-x-auto rounded-2xl border border-slate/15 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-slate/10 text-slate/70">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Sürüm</th>
              <th scope="col" className="px-4 py-3 font-semibold">Durum</th>
              <th scope="col" className="px-4 py-3 font-semibold">Yayın tarihi</th>
              <th scope="col" className="px-4 py-3 font-semibold">Not</th>
              <th scope="col" className="px-4 py-3 font-semibold"><span className="sr-only">İşlemler</span></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate/10">
            {versions
              .filter((v) => v.status !== "draft")
              .map((v) => (
                <tr key={v.id}>
                  <td className="px-4 py-3 font-bold text-slate">v{v.id}</td>
                  <td className="px-4 py-3"><StatusPill status={v.status} /></td>
                  <td className="px-4 py-3 text-slate/80">{trDate(v.publishedAt, true)}</td>
                  <td className="px-4 py-3 text-slate/80">{v.note ?? "—"}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/admin/fiyatlar/${v.id}`} className="text-sm font-semibold text-slate underline underline-offset-4">
                        Görüntüle
                      </Link>
                      {v.status === "archived" && (
                        <ConfirmAction
                          action={restorePriceAction}
                          fields={{ id: v.id }}
                          tone="ghost"
                          label="Bu sürüme dön"
                          confirmText={`v${v.id} fiyatlarını yayımla`}
                          question={`v${v.id} fiyatları yeni bir sürüm olarak yeniden yayımlanacak. Mevcut sürüm geçmişte kalır.`}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
