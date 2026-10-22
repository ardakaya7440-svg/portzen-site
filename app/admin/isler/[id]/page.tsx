/* eslint-disable @next/next/no-img-element */
import { notFound } from "next/navigation";
import { getDb } from "@/server/db";
import type { MediaRef, PublicWork } from "@/server/cms";
import { ActionButton, ConfirmAction, Flash, LinkButton, PageHead, StatusPill } from "@/components/admin/ui";
import { WorkForm } from "@/components/admin/WorkForm";
import { moveWorkMediaAction, removeWorkMediaAction, setCoverAction, setWorkStatusAction } from "../../actions";

export const dynamic = "force-dynamic";

type Row = Record<string, unknown>;

export default async function WorkEditPage({ params, searchParams }: { params: { id: string }; searchParams: { ok?: string; err?: string; tur?: string } }) {
  const isNew = params.id === "yeni";
  const db = await getDb();
  let row: Row | null = null;
  let media: (MediaRef & { size: number })[] = [];
  if (!isNew) {
    const id = Number(params.id);
    if (!Number.isInteger(id)) notFound();
    row = (await db.query<Row>(`select * from works where id = $1`, [id])).rows[0] ?? null;
    if (!row) notFound();
    media = (
      await db.query<Row>(
        `select m.id, m.kind, m.width, m.height, m.size from work_media wm join media m on m.id = wm.media_id where wm.work_id = $1 order by wm.sort`,
        [id]
      )
    ).rows.map((m) => ({ id: String(m.id), kind: m.kind as "image" | "video", width: m.width == null ? null : Number(m.width), height: m.height == null ? null : Number(m.height), size: Number(m.size) }));
  }
  const kind = (row?.kind as "work" | "service") ?? (searchParams.tur === "service" ? "service" : "work");
  const coverId = (row?.cover_media_id as string) ?? null;
  const cover = media.find((m) => m.id === coverId) ?? null;
  const initial: PublicWork = {
    id: row ? Number(row.id) : 0,
    kind,
    title: (row?.title as string) ?? "",
    summary: (row?.summary as string) ?? null,
    category: (row?.category as PublicWork["category"]) ?? "sosyal-medya",
    serviceKey: (row?.service_key as string) ?? null,
    alt: (row?.alt as string) ?? null,
    projectUrl: (row?.project_url as string) ?? null,
    videoUrl: (row?.video_url as string) ?? null,
    isDemo: row ? Boolean(row.is_demo) : true,
    cover: cover ? { id: cover.id, kind: cover.kind, width: cover.width, height: cover.height } : null,
    media
  };
  const status = row ? (row.status as "draft" | "published") : null;
  const title = isNew ? (kind === "service" ? "Yeni hizmet görseli" : "Yeni iş") : kind === "service" ? "Hizmet görselini düzenle" : "İşi düzenle";
  return (
    <>
      <PageHead
        title={title}
        intro={status && <StatusPill status={status} />}
        actions={
          <>
            <LinkButton href="/admin/isler">Listeye dön</LinkButton>
            {status === "published" && (
              <ActionButton action={setWorkStatusAction} fields={{ id: initial.id, status: "draft" }} size="md">
                Yayından kaldır
              </ActionButton>
            )}
          </>
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />
      <WorkForm key={String(row?.updated_at ?? "new") + coverId + media.length} initial={initial} status={status} />

      {media.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate">Dosyalar</h2>
          <p className="mt-1 text-sm text-slate/60">Kapak, kartta görünen dosyadır. Sıra, ileride galeri gösteriminde kullanılır.</p>
          <ul className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((m) => (
              <li key={m.id} className={`overflow-hidden rounded-2xl border bg-white ${m.id === coverId ? "border-slate ring-2 ring-lime" : "border-slate/15"}`}>
                <div className="aspect-[4/3] bg-light">
                  {m.kind === "video" ? (
                    <video src={`/api/media/${m.id}`} className="h-full w-full object-cover" muted controls preload="metadata" />
                  ) : (
                    <img src={`/api/media/${m.id}`} alt="" className="h-full w-full object-cover" />
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 p-3">
                  {m.id === coverId ? (
                    <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-slate">Kapak</span>
                  ) : (
                    <ActionButton action={setCoverAction} fields={{ id: initial.id, media: m.id }}>
                      Kapak yap
                    </ActionButton>
                  )}
                  <ActionButton action={moveWorkMediaAction} fields={{ id: initial.id, media: m.id, dir: "up" }} label="Öne al">
                    ←
                  </ActionButton>
                  <ActionButton action={moveWorkMediaAction} fields={{ id: initial.id, media: m.id, dir: "down" }} label="Geri al">
                    →
                  </ActionButton>
                  <ConfirmAction action={removeWorkMediaAction} fields={{ id: initial.id, media: m.id }} label="Kaldır" confirmText="Evet, kaldır" question="Bu dosya kaldırılsın mı?" />
                  <span className="ml-auto text-xs text-slate/50">
                    {m.kind === "image" ? `${m.width}×${m.height}` : "video"} · {Math.round(m.size / 1024)} KB
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
