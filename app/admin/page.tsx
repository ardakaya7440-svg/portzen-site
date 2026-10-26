import Link from "next/link";
import { PRICE_VERSION } from "@/data/pricing";
import { getDb } from "@/server/db";
import { getPublished } from "@/server/prices";
import { Card, PageHead, trDate } from "@/components/admin/ui";

export const dynamic = "force-dynamic";

async function counts() {
  const db = await getDb();
  const one = async (sql: string) => Number((await db.query<{ n: string }>(sql)).rows[0]?.n ?? 0);
  return {
    db: db.kind,
    brands: await one(`select count(*)::text as n from brands where visible`),
    brandsAll: await one(`select count(*)::text as n from brands`),
    reviews: await one(`select count(*)::text as n from testimonials where status = 'published'`),
    reviewsDraft: await one(`select count(*)::text as n from testimonials where status = 'draft'`),
    works: await one(`select count(*)::text as n from works where kind = 'work' and status = 'published'`),
    services: await one(`select count(*)::text as n from works where kind = 'service' and status = 'published'`),
    drafts: await one(`select count(*)::text as n from price_versions where status = 'draft'`),
    leadsNew: await one(`select count(*)::text as n from leads where status = 'new'`),
    leadsAll: await one(`select count(*)::text as n from leads`)
  };
}

export default async function AdminHome() {
  const [c, pub] = await Promise.all([counts(), getPublished()]);
  const pricesPending = pub && pub.id !== PRICE_VERSION.version;
  const hook = Boolean(process.env.DEPLOY_HOOK_URL);
  const tiles = [
    { href: "/admin/talepler", title: "Teklif talepleri", value: String(c.leadsNew), note: `yeni · toplam ${c.leadsAll}` },
    { href: "/admin/fiyatlar", title: "Fiyatlar", value: `v${pub?.id ?? "—"}`, note: c.drafts ? `${c.drafts} taslak bekliyor` : "Taslak yok" },
    { href: "/admin/markalar", title: "Markalar", value: String(c.brands), note: `${c.brandsAll} kayıttan görünür olanlar` },
    { href: "/admin/yorumlar", title: "Müşteri yorumları", value: String(c.reviews), note: `${c.reviewsDraft} taslak` },
    { href: "/admin/isler", title: "Görseller ve işler", value: String(c.works + c.services), note: `${c.works} iş, ${c.services} hizmet görseli yayında` }
  ];
  return (
    <>
      <PageHead title="Genel bakış" intro="Sitedeki fiyatları, logoları, yorumları ve görselleri buradan yönetirsiniz." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {tiles.map((t) => (
          <Link key={t.href} href={t.href} className="rounded-2xl border border-slate/15 bg-white p-5 transition-colors hover:border-slate">
            <p className="text-sm font-semibold text-slate/70">{t.title}</p>
            <p className="mt-2 text-3xl font-bold text-slate tabular-nums">{t.value}</p>
            <p className="mt-1 text-sm text-slate/60">{t.note}</p>
          </Link>
        ))}
      </div>

      <Card className="mt-6">
        <h2 className="text-lg font-bold text-slate">Yayın durumu</h2>
        <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[220px_1fr]">
          <dt className="font-semibold text-slate/70">Sitede uygulanan fiyat sürümü</dt>
          <dd className="text-slate">
            v{PRICE_VERSION.version} · {trDate(PRICE_VERSION.publishedAt, true)}
            {pricesPending && (
              <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-bold text-amber-900">
                v{pub!.id} yayımlandı, derleme bekleniyor
              </span>
            )}
          </dd>
          <dt className="font-semibold text-slate/70">Logolar, yorumlar, işler</dt>
          <dd className="text-slate">Kaydettiğiniz anda sitede yenilenir (önbellek etiketi: cms).</dd>
          <dt className="font-semibold text-slate/70">Fiyat yayını</dt>
          <dd className="text-slate">
            {hook ? "Yayımla dediğinizde site yeniden derlenir (deploy hook tanımlı)." : "Deploy hook tanımlı değil: fiyatlar bir sonraki derlemede siteye yansır."}
          </dd>
          <dt className="font-semibold text-slate/70">Veritabanı</dt>
          <dd className="text-slate">{c.db === "postgres" ? "Postgres (PORTZEN_DATABASE_URL)" : "Yerel PGlite (yalnızca önizleme)"}</dd>
        </dl>
      </Card>
    </>
  );
}
