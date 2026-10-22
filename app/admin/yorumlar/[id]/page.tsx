import { notFound } from "next/navigation";
import { getDb } from "@/server/db";
import { ActionButton, Flash, LinkButton, PageHead, StatusPill } from "@/components/admin/ui";
import { TestimonialForm } from "@/components/admin/TestimonialForm";
import { setTestimonialStatusAction } from "../../actions";

export const dynamic = "force-dynamic";

type Row = Record<string, unknown>;

export default async function ReviewEditPage({ params, searchParams }: { params: { id: string }; searchParams: { ok?: string; err?: string } }) {
  const isNew = params.id === "yeni";
  let row: Row | null = null;
  if (!isNew) {
    const id = Number(params.id);
    if (!Number.isInteger(id)) notFound();
    const db = await getDb();
    row =
      (
        await db.query<Row>(
          `select t.*, m.width, m.height from testimonials t left join media m on m.id = t.avatar_id where t.id = $1`,
          [id]
        )
      ).rows[0] ?? null;
    if (!row) notFound();
  }
  const d = (v: unknown) => (v == null ? null : v instanceof Date ? v.toISOString().slice(0, 10) : String(v).slice(0, 10));
  const initial = {
    id: row ? Number(row.id) : 0,
    body: row ? String(row.body) : "",
    displayName: row ? String(row.display_name) : "",
    company: (row?.company as string) ?? null,
    title: (row?.title as string) ?? null,
    avatar: row?.avatar_id ? { id: String(row.avatar_id), kind: "image" as const, width: Number(row.width) || null, height: Number(row.height) || null } : null,
    avatarId: (row?.avatar_id as string) ?? null,
    reviewDate: d(row?.review_date),
    rating: row?.rating == null ? null : Number(row.rating),
    source: (row?.source as "google" | "direct") ?? "direct",
    sourceUrl: (row?.source_url as string) ?? null
  };
  const status = row ? (row.status as "draft" | "published") : null;
  return (
    <>
      <PageHead
        title={isNew ? "Yeni yorum" : "Yorumu düzenle"}
        intro={status && <StatusPill status={status} />}
        actions={
          <>
            <LinkButton href="/admin/yorumlar">Yorumlara dön</LinkButton>
            {status === "published" && (
              <ActionButton action={setTestimonialStatusAction} fields={{ id: initial.id, status: "draft", return: `/admin/yorumlar/${initial.id}` }} size="md">
                Yayından kaldır
              </ActionButton>
            )}
          </>
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />
      <TestimonialForm key={String(row?.updated_at ?? "new")} initial={initial} status={status} />
    </>
  );
}
