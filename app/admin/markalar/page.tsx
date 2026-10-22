/* eslint-disable @next/next/no-img-element */
import { getDb } from "@/server/db";
import { BrandStrip } from "@/components/cms/BrandStrip";
import { logoBox } from "@/lib/logo-box";
import { FileInput } from "@/components/admin/FileInput";
import { ActionButton, Card, ConfirmAction, Empty, Field, Flash, PageHead, StatusPill, btn, input } from "@/components/admin/ui";
import type { PublicBrand } from "@/server/cms";
import { createBrandAction, deleteBrandAction, moveBrandAction, toggleBrandAction, updateBrandAction } from "../actions";

export const dynamic = "force-dynamic";

type BrandRow = { id: number; name: string; kind: "client" | "tool"; url: string | null; visible: boolean; logo_id: string | null; width: number | null; height: number | null };

const ACCEPT = "image/png,image/jpeg,image/webp,image/svg+xml,image/gif";

function BrandList({ title, rows }: { title: string; rows: BrandRow[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-slate">{title}</h2>
      {rows.length === 0 ? (
        <div className="mt-3">
          <Empty>Henüz logo yok. Bu başlık sitede logo eklenene kadar görünmez.</Empty>
        </div>
      ) : (
        <ul className="mt-3 divide-y divide-slate/10 rounded-2xl border border-slate/15 bg-white">
          {rows.map((b, i) => {
            const box = logoBox(b.width, b.height);
            return (
              <li key={b.id} className="p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex h-20 w-full shrink-0 items-center justify-center rounded-xl border border-slate/10 bg-[repeating-conic-gradient(#f3f7f9_0_25%,#fff_0_50%)] bg-[length:16px_16px] md:w-48">
                    {b.logo_id && <img src={`/api/media/${b.logo_id}`} alt={b.name} style={{ width: box.width, height: box.height }} className="object-contain" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="flex flex-wrap items-center gap-2 font-bold text-slate">
                      {b.name} <StatusPill status={b.visible ? "visible" : "hidden"} />
                    </p>
                    <p className="truncate text-sm text-slate/60">{b.url ?? "Bağlantı yok"}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <ActionButton action={moveBrandAction} fields={{ id: b.id, dir: "up" }} label={`${b.name} yukarı taşı`}>
                      ↑
                    </ActionButton>
                    <ActionButton action={moveBrandAction} fields={{ id: b.id, dir: "down" }} label={`${b.name} aşağı taşı`}>
                      ↓
                    </ActionButton>
                    <ActionButton action={toggleBrandAction} fields={{ id: b.id }}>
                      {b.visible ? "Gizle" : "Göster"}
                    </ActionButton>
                    <ConfirmAction action={deleteBrandAction} fields={{ id: b.id }} label="Kaldır" confirmText="Evet, kaldır" question={`“${b.name}” logosu kalıcı olarak silinsin mi?`} />
                  </div>
                </div>
                <details className="mt-3">
                  <summary className="cursor-pointer text-sm font-semibold text-slate underline underline-offset-4">Düzenle / logoyu değiştir</summary>
                  <form action={updateBrandAction} className="mt-4 grid gap-4 rounded-xl bg-light p-4 md:grid-cols-2">
                    <input type="hidden" name="id" value={b.id} />
                    <Field label="Marka adı" htmlFor={`n-${b.id}`} required>
                      <input id={`n-${b.id}`} name="name" defaultValue={b.name} required maxLength={80} className={input} />
                    </Field>
                    <Field label="Bağlantı" htmlFor={`u-${b.id}`}>
                      <input id={`u-${b.id}`} name="url" type="url" defaultValue={b.url ?? ""} placeholder="https://" className={input} />
                    </Field>
                    <Field label="Başlık" htmlFor={`k-${b.id}`} required>
                      <select id={`k-${b.id}`} name="kind" defaultValue={b.kind} className={input}>
                        <option value="client">Müşteri logosu</option>
                        <option value="tool">Araç / platform logosu</option>
                      </select>
                    </Field>
                    <Field label="Yeni logo" htmlFor={`l-${b.id}`} hint="Boş bırakırsanız mevcut logo kalır.">
                      <FileInput id={`l-${b.id}`} name="logo" accept={ACCEPT} />
                    </Field>
                    <div className="md:col-span-2">
                      <button className={btn("primary")}>Kaydet</button>
                    </div>
                  </form>
                </details>
                <span className="sr-only">Sıra: {i + 1}</span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default async function BrandsPage({ searchParams }: { searchParams: { ok?: string; err?: string } }) {
  const db = await getDb();
  const rows = (
    await db.query<BrandRow>(
      `select b.id, b.name, b.kind, b.url, b.visible, b.logo_id, m.width, m.height from brands b left join media m on m.id = b.logo_id order by b.kind, b.sort, b.id`
    )
  ).rows;
  const preview: PublicBrand[] = rows
    .filter((r) => r.visible && r.logo_id)
    .map((r) => ({ id: r.id, name: r.name, kind: r.kind, url: r.url, logo: { id: r.logo_id!, kind: "image", width: r.width, height: r.height } }));

  return (
    <>
      <PageHead
        title="Markalar"
        intro="Logo eklediğinizde ana sayfadaki şeride hemen eklenir. Müşteri logoları ve araç/platform logoları ayrı başlıklar altında görünür. Yalnızca kullanım izniniz olan logoları ekleyin."
      />
      <Flash ok={searchParams.ok} err={searchParams.err} />

      <Card className="mt-6">
        <h2 className="text-lg font-bold text-slate">Yeni logo ekle</h2>
        <form action={createBrandAction} className="mt-4 grid gap-4 md:grid-cols-2">
          <Field label="Marka adı" htmlFor="name" required hint="Logonun alternatif metni olarak da kullanılır.">
            <input id="name" name="name" required maxLength={80} className={input} />
          </Field>
          <Field label="Bağlantı" htmlFor="url">
            <input id="url" name="url" type="url" placeholder="https://" className={input} />
          </Field>
          <Field label="Başlık" htmlFor="kind" required>
            <select id="kind" name="kind" className={input} defaultValue="client">
              <option value="client">Müşteri logosu</option>
              <option value="tool">Araç / platform logosu</option>
            </select>
          </Field>
          <Field label="Logo dosyası" htmlFor="logo" required hint="PNG, SVG, WebP veya JPG; en fazla 4 MB. Saydam zeminli PNG/SVG en iyi sonucu verir. Logo kırpılmaz; otomatik olarak boyutlandırılır.">
            <FileInput id="logo" name="logo" accept={ACCEPT} required />
          </Field>
          <div className="md:col-span-2">
            <button className={btn("primary")}>Logoyu ekle</button>
          </div>
        </form>
      </Card>

      <BrandList title="Müşteri logoları" rows={rows.filter((r) => r.kind === "client")} />
      <BrandList title="Araç ve platform logoları" rows={rows.filter((r) => r.kind === "tool")} />

      <section className="mt-10">
        <h2 className="text-lg font-bold text-slate">Sitede görünüm</h2>
        <p className="mt-1 text-sm text-slate/60">6 veya daha fazla logo olan başlık yavaşça kayar; daha azında logolar sabit dizilir.</p>
        <div className="mt-3 rounded-2xl border border-slate/15 bg-white px-4 py-8">
          {preview.length ? <BrandStrip brands={preview} /> : <p className="text-center text-sm text-slate/60">Görünür logo yok; ana sayfada bu bölüm gösterilmiyor.</p>}
        </div>
      </section>
    </>
  );
}
