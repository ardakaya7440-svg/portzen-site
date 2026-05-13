import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { buttonStyles } from "@/components/ui/button";
import { getDashboardStats } from "@/lib/posts";
import { requireAdmin } from "@/lib/auth";
import { formatDate, getStatusLabel } from "@/lib/utils";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const stats = await getDashboardStats();

  return (
    <AdminShell
      description="Dashboard uzerinden blog sayilarini, yayindaki ve taslak durumlarini gorebilir; tek tikla yeni icerik ekranina gecebilirsiniz."
      title="Dashboard"
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Toplam blog", value: stats.totalPosts },
          { label: "Yayindaki yazi", value: stats.publishedPosts },
          { label: "Taslak yazi", value: stats.draftPosts },
          { label: "Iletisim formu", value: stats.totalLeads }
        ].map((item) => (
          <article key={item.label} className="rounded-[1.75rem] border border-border bg-white p-6 shadow-card">
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{item.value}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-border bg-white p-6 shadow-card">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
                Son guncellenen yazilar
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                Icerik takibi
              </h2>
            </div>
            <Link className={buttonStyles({ variant: "primary", size: "sm" })} href="/admin/blog">
              Tumunu gor
            </Link>
          </div>
          <div className="mt-6 space-y-4">
            {stats.recentPosts.map((post) => (
              <div key={post.id} className="rounded-[1.5rem] border border-border bg-panel p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-foreground">{post.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">/{post.slug}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{getStatusLabel(post.status)}</p>
                    <p>{formatDate(post.updatedAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-foreground p-6 text-white shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
            Hizli aksiyon
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Yeni bir blog yazisi ekle</h2>
          <p className="mt-4 text-sm leading-7 text-white/75">
            Baslik, slug, meta alanlari ve markdown icerigiyle birlikte yeni blog yazisi
            olusturabilirsiniz.
          </p>
          <div className="mt-6">
            <Link
              className={buttonStyles({ variant: "secondary", size: "lg" })}
              href="/admin/blog/yeni"
            >
              Yeni blog ekle
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-border bg-white p-6 shadow-card">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
              Son iletisim basvurulari
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              Formdan gelen kisiler
            </h2>
          </div>
          <Link className={buttonStyles({ variant: "primary", size: "sm" })} href="/admin/iletisim">
            Tumunu gor
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {stats.recentLeads.length ? (
            stats.recentLeads.map((lead) => (
              <div key={lead.id} className="rounded-[1.5rem] border border-border bg-panel p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-foreground">{lead.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{lead.email}</p>
                    {lead.phone ? <p className="mt-1 text-sm text-muted-foreground">{lead.phone}</p> : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{formatDate(lead.createdAt)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-border bg-panel p-4 text-sm text-muted-foreground">
              Henuz iletisim basvurusu yok.
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
