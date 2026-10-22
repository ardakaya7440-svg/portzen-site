/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { getDb } from "@/server/db";
import { CATEGORY_LABEL, type CatalogCategory, serviceByHref } from "@/data/catalog";
import { ActionButton, ConfirmAction, Empty, Flash, LinkButton, PageHead, StatusPill } from "@/components/admin/ui";
import { deleteWorkAction, moveWorkAction, setWorkStatusAction } from "../actions";

export const dynamic = "force-dynamic";

type Row = { id: number; kind: "work" | "service"; title: string; category: CatalogCategory; service_key: string | null; status: string; is_demo: boolean; cover_media_id: string | null; mkind: string | null; alt: string | null; n: string };

function List({ rows, empty }: { rows: Row[]; empty: string }) {
  if (!rows.length) return <Empty>{empty}</Empty>;
  return (
    <ul className="divide-y divide-slate/10 rounded-2xl border border-slate/15 bg-white">
      {rows.map((r) => (
        <li key={r.id} className="flex flex-col gap-3 p-4 md:flex-row md:items-center">
          <div className="aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-light md:w-32">
            {r.cover_media_id &&
              (r.mkind === "video" ? (
                <video src={`/api/media/${r.cover_media_id}`} className="h-full w-full object-cover" muted preload="metadata" />
              ) : (
                <img src={`/api/media/${r.cover_media_id}`} alt="" className="h-full w-full object-cover" />
              ))}
          </div>
          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-2 font-bold text-slate">
              <Link href={`/admin/isler/${r.id}`} className="underline-offset-4 hover:underline">
                {r.title}
              </Link>
              <StatusPill status={r.status} />
              {r.is_demo && <span className="rounded-full bg-slate px-2 py-0.5 text-[11px] font-bold text-white">DEMO</span>}
            </p>
            <p className="text-sm text-slate/60">
              {r.kind === "service" ? serviceByHref(r.service_key ?? "")?.label ?? "Hizmet seçilmedi" : CATEGORY_LABEL[r.category]} · {r.n} dosya
              {!r.alt && <span className="ml-2 font-semibold text-amber-800">· alt metin eksik</span>}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <ActionButton action={moveWorkAction} fields={{ id: r.id, dir: "up" }} label="Yukarı taşı">
              ↑
            </ActionButton>
            <ActionButton action={moveWorkAction} fields={{ id: r.id, dir: "down" }} label="Aşağı taşı">
              ↓
            </ActionButton>
            <LinkButton href={`/admin/isler/${r.id}`} size="sm">
              Düzenle
            </LinkButton>
            {r.status === "published" ? (
              <ActionButton action={setWorkStatusAction} fields={{ id: r.id, status: "draft" }}>
                Yayından kaldır
              </ActionButton>
            ) : (
              <ActionButton action={setWorkStatusAction} fields={{ id: r.id, status: "published" }} tone="accent">
                Yayımla
              </ActionButton>
            )}
            <ConfirmAction action={deleteWorkAction} fields={{ id: r.id }} label="Sil" confirmText="Evet, sil" question="Bu kayıt ve yalnızca ona ait dosyalar kalıcı olarak silinsin mi?" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default async function WorksPage({ searchParams }: { searchParams: { ok?: string; err?: string } }) {
  const db = await getDb();
  const rows = (
    await db.query<Row>(
      `select w.id, w.kind, w.title, w.category, w.service_key, w.status, w.is_demo, w.cover_media_id, w.alt, m.kind as mkind,
              (select count(*) from work_media wm where wm.work_id = w.id)::text as n
         from works w left join media m on m.id = w.cover_media_id order by w.kind, w.sort, w.id`
    )
  ).rows;
  return (
    <>
      <PageHead
        title="Görseller ve işler"
        intro="Seçilmiş işler Referanslar sayfasında, hizmet görselleri ise hizmet sayfalarının “Kısaca” bölümünde görünür. Örnek/temsili çalışmalar “Demo” etiketiyle yayımlanır."
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />
      <section className="mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate">Seçilmiş işler</h2>
          <LinkButton href="/admin/isler/yeni?tur=work" tone="primary" size="sm">
            Yeni iş
          </LinkButton>
        </div>
        <p className="mt-1 text-sm text-slate/60">Yayımlanmış iş yoksa Referanslar sayfasında bu bölüm görünmez.</p>
        <div className="mt-3">
          <List rows={rows.filter((r) => r.kind === "work")} empty="Henüz iş eklenmedi." />
        </div>
      </section>
      <section className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate">Hizmet görselleri</h2>
          <LinkButton href="/admin/isler/yeni?tur=service" tone="primary" size="sm">
            Yeni hizmet görseli
          </LinkButton>
        </div>
        <p className="mt-1 text-sm text-slate/60">Görsel eklenmemiş hizmet kartlarında kodla çizilmiş temsili görsel kullanılır.</p>
        <div className="mt-3">
          <List rows={rows.filter((r) => r.kind === "service")} empty="Henüz hizmet görseli eklenmedi." />
        </div>
      </section>
    </>
  );
}
