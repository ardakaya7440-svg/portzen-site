import Link from "next/link";
import { getDb } from "@/server/db";
import { ActionButton, ConfirmAction, Empty, Flash, LinkButton, PageHead, StatusPill, trDate } from "@/components/admin/ui";
import { Stars } from "@/components/cms/Testimonials";
import { deleteTestimonialAction, moveTestimonialAction, setTestimonialStatusAction } from "../actions";

export const dynamic = "force-dynamic";

type Row = { id: number; body: string; display_name: string; company: string | null; rating: number | null; source: string; status: string; review_date: string | Date | null; updated_at: string | Date };

export default async function ReviewsPage({ searchParams }: { searchParams: { ok?: string; err?: string } }) {
  const db = await getDb();
  const rows = (await db.query<Row>(`select id, body, display_name, company, rating, source, status, review_date, updated_at from testimonials order by sort, id`)).rows;
  const published = rows.filter((r) => r.status === "published").length;
  return (
    <>
      <PageHead
        title="Müşteri yorumları"
        intro={
          <>
            Yorumları elle girin (Google yorumlarını kopyalayıp yapıştırabilirsiniz). Yayımlanan yorumlar sitede görünür; hiç yayımlanmış yorum
            yoksa bölüm gizlenir. Puanı olmayan yorumda yıldız gösterilmez; toplam puan veya yorum sayısı hesaplanmaz.
          </>
        }
        actions={
          <LinkButton href="/admin/yorumlar/yeni" tone="primary">
            Yeni yorum
          </LinkButton>
        }
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />
      <p className="mt-6 text-sm text-slate/70">
        Sitede görünen: <strong className="text-slate">{published}</strong> yorum. Sıralama sitedeki sırayı belirler.
      </p>
      {rows.length === 0 ? (
        <div className="mt-3">
          <Empty>Henüz yorum yok. Sitede yorum bölümü gösterilmiyor.</Empty>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-slate/10 rounded-2xl border border-slate/15 bg-white">
          {rows.map((r) => (
            <li key={r.id} className="flex flex-col gap-3 p-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-2 font-bold text-slate">
                  <Link href={`/admin/yorumlar/${r.id}`} className="underline-offset-4 hover:underline">
                    {r.display_name}
                  </Link>
                  {r.company && <span className="font-semibold text-slate/60">· {r.company}</span>}
                  <StatusPill status={r.status} />
                  <span className="rounded-full bg-light px-2 py-0.5 text-xs font-bold text-slate/70">{r.source === "google" ? "Google" : "Doğrudan"}</span>
                  {r.rating !== null ? <Stars rating={Number(r.rating)} /> : <span className="text-xs text-slate/50">Puan yok</span>}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-slate/70">{r.body}</p>
                <p className="mt-1 text-xs text-slate/50">
                  Yorum tarihi: {r.review_date ? trDate(String(r.review_date instanceof Date ? r.review_date.toISOString() : r.review_date)) : "—"} · son düzenleme{" "}
                  {trDate(r.updated_at instanceof Date ? r.updated_at.toISOString() : String(r.updated_at), true)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ActionButton action={moveTestimonialAction} fields={{ id: r.id, dir: "up" }} label="Yukarı taşı">
                  ↑
                </ActionButton>
                <ActionButton action={moveTestimonialAction} fields={{ id: r.id, dir: "down" }} label="Aşağı taşı">
                  ↓
                </ActionButton>
                <LinkButton href={`/admin/yorumlar/${r.id}`} size="sm">
                  Düzenle
                </LinkButton>
                {r.status === "published" ? (
                  <ActionButton action={setTestimonialStatusAction} fields={{ id: r.id, status: "draft" }}>
                    Yayından kaldır
                  </ActionButton>
                ) : (
                  <ActionButton action={setTestimonialStatusAction} fields={{ id: r.id, status: "published" }} tone="accent">
                    Yayımla
                  </ActionButton>
                )}
                <ConfirmAction action={deleteTestimonialAction} fields={{ id: r.id }} label="Sil" confirmText="Evet, sil" question="Bu yorum kalıcı olarak silinsin mi?" />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
