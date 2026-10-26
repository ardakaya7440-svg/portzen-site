import Link from "next/link";
import { getDb } from "@/server/db";
import { whatsappUrl } from "@/data/pricing";
import { ConfirmAction, Empty, Flash, PageHead, btn, input, trDate } from "@/components/admin/ui";
import { deleteLeadAction, updateLeadAction } from "../actions";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

const STATUS: Record<string, [string, string]> = {
  new: ["Yeni", "bg-lime text-slate"],
  contacted: ["Görüşüldü", "bg-sky-100 text-sky-900"],
  quoted: ["Teklif verildi", "bg-amber-100 text-amber-900"],
  won: ["Anlaşıldı", "bg-emerald-100 text-emerald-900"],
  lost: ["Olmadı", "bg-light text-slate/70"]
};

type Lead = {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  service: string | null;
  package: string | null;
  message: string | null;
  source: string | null;
  landing: string | null;
  page: string | null;
  status: string;
  note: string | null;
  created_at: string | Date;
};

const iso = (v: string | Date) => (v instanceof Date ? v.toISOString() : String(v));
const digits = (p: string) => p.replace(/[^\d+]/g, "").replace(/^0/, "+90").replace(/^\+?(?!90)(\d{10})$/, "+90$1");

export default async function LeadsPage({ searchParams }: { searchParams: { ok?: string; err?: string; durum?: string } }) {
  const db = await getDb();
  const filter = searchParams.durum && STATUS[searchParams.durum] ? searchParams.durum : null;
  const rows = (
    await db.query<Lead>(
      `select * from leads ${filter ? "where status = $1" : ""} order by created_at desc limit 300`,
      filter ? [filter] : []
    )
  ).rows;
  const counts = Object.fromEntries(
    (await db.query<{ status: string; n: string }>(`select status, count(*)::text as n from leads group by status`)).rows.map((r) => [r.status, Number(r.n)])
  );
  const total = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <>
      <PageHead
        title="Teklif talepleri"
        intro="Sitedeki iletişim formunu dolduran herkes burada listelenir. Ziyaretçi WhatsApp'ta mesajı göndermese bile bilgileri kaydedilir."
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />

      <nav aria-label="Duruma göre süz" className="mt-6 flex flex-wrap gap-2">
        <Link href="/admin/talepler" className={cn(btn(filter ? "ghost" : "primary", "sm"))}>
          Tümü ({total})
        </Link>
        {Object.entries(STATUS).map(([k, [label]]) => (
          <Link key={k} href={`/admin/talepler?durum=${k}`} className={cn(btn(filter === k ? "primary" : "ghost", "sm"))}>
            {label} ({counts[k] ?? 0})
          </Link>
        ))}
      </nav>

      {rows.length === 0 ? (
        <div className="mt-6">
          <Empty>{filter ? "Bu durumda talep yok." : "Henüz talep yok. Sitedeki iletişim formu doldurulduğunda burada görünür."}</Empty>
        </div>
      ) : (
        <ul className="mt-6 flex flex-col gap-4">
          {rows.map((l) => {
            const [label, cls] = STATUS[l.status] ?? STATUS.new;
            const wa = l.phone ? whatsappUrl(`Merhaba ${l.name}, PORTZEN'den yazıyorum. Teklif talebiniz için teşekkürler.`).replace(/wa\.me\/\d+/, `wa.me/${digits(l.phone).replace("+", "")}`) : null;
            return (
              <li key={l.id} className="rounded-2xl border border-slate/15 bg-white p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="flex flex-wrap items-center gap-2 text-lg font-bold text-slate">
                      {l.name}
                      <span className={cn("rounded-full px-2.5 py-0.5 text-xs font-bold", cls)}>{label}</span>
                    </p>
                    <p className="mt-0.5 text-sm text-slate/60">
                      {trDate(iso(l.created_at), true)}
                      {l.source && <> · Kaynak: {l.source}</>}
                      {l.landing && <> · İlk sayfa: {l.landing}</>}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {l.phone && (
                      <a href={`tel:${digits(l.phone)}`} className={btn("ghost", "sm")}>
                        Ara
                      </a>
                    )}
                    {wa && (
                      <a href={wa} target="_blank" rel="noopener noreferrer" className={btn("ghost", "sm")}>
                        WhatsApp
                      </a>
                    )}
                    {l.email && (
                      <a href={`mailto:${l.email}`} className={btn("ghost", "sm")}>
                        E-posta
                      </a>
                    )}
                  </div>
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[140px_1fr]">
                  <dt className="font-semibold text-slate/60">E-posta</dt>
                  <dd className="text-slate">{l.email ?? "—"}</dd>
                  <dt className="font-semibold text-slate/60">Telefon</dt>
                  <dd className="text-slate">{l.phone ?? "—"}</dd>
                  <dt className="font-semibold text-slate/60">Hizmet</dt>
                  <dd className="text-slate">
                    {l.service ?? "—"}
                    {l.package && ` · ${l.package}`}
                  </dd>
                  <dt className="font-semibold text-slate/60">Mesaj</dt>
                  <dd className="whitespace-pre-line text-slate">{l.message ?? "—"}</dd>
                </dl>

                <form action={updateLeadAction} className="mt-4 grid gap-3 border-t border-slate/10 pt-4 sm:grid-cols-[200px_1fr_auto] sm:items-end">
                  <input type="hidden" name="id" value={l.id} />
                  {filter && <input type="hidden" name="filter" value={filter} />}
                  <label className="flex flex-col gap-1 text-sm font-bold text-slate">
                    Durum
                    <select name="status" defaultValue={l.status} className={input}>
                      {Object.entries(STATUS).map(([k, [lab]]) => (
                        <option key={k} value={k}>
                          {lab}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-1 text-sm font-bold text-slate">
                    Not
                    <input name="note" defaultValue={l.note ?? ""} maxLength={2000} placeholder="Örn. Salı arandı, teklif gönderilecek" className={input} />
                  </label>
                  <div className="flex gap-2">
                    <button className={btn("primary")}>Kaydet</button>
                    <ConfirmAction action={deleteLeadAction} fields={{ id: l.id }} label="Sil" confirmText="Evet, sil" question={`${l.name} adlı talep kalıcı olarak silinsin mi?`} />
                  </div>
                </form>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
