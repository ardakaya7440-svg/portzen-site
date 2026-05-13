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
      description="Blog sayilarini, yayindaki ve taslak durumlarini gorun; tek tikla yeni icerik ekranina gecin."
      title="Dashboard"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Toplam blog", value: stats.totalPosts, color: "text-white/95" },
          { label: "Yayindaki yazi", value: stats.publishedPosts, color: "text-[#34c38f]" },
          { label: "Taslak yazi", value: stats.draftPosts, color: "text-white/60" },
          { label: "Iletisim formu", value: stats.totalLeads, color: "text-[#00aaff]" }
        ].map((item) => (
          <article
            key={item.label}
            className="rounded-[1.75rem] border border-white/[0.08] bg-[#060d1a] p-6"
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              {item.label}
            </p>
            <p className={`mt-4 text-4xl font-semibold tracking-tight ${item.color}`}>
              {item.value}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066ff]">
                Son guncellenen
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white/90">
                Icerik takibi
              </h2>
            </div>
            <Link className={buttonStyles({ variant: "primary", size: "sm" })} href="/admin/blog">
              Tumunu gor
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            {stats.recentPosts.length ? (
              stats.recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-white/90">{post.title}</p>
                      <p className="mt-1 text-xs text-white/40">/{post.slug}</p>
                    </div>
                    <div className="text-right text-xs text-white/40">
                      <p>{getStatusLabel(post.status)}</p>
                      <p>{formatDate(post.updatedAt)}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4 text-sm text-white/40">
                Henuz blog yazisi yok.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/[0.08] bg-[#0a1428] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066ff]">
            Hizli aksiyon
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white/95">
            Yeni bir blog yazisi ekle
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Baslik, slug, meta alanlari ve markdown icerigiyle yeni blog yazisi olusturun.
          </p>
          <div className="mt-6">
            <Link className={buttonStyles({ size: "lg" })} href="/admin/blog/yeni">
              Yeni blog ekle
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0066ff]">
              Son basvurular
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-white/90">
              Formdan gelen kisiler
            </h2>
          </div>
          <Link
            className={buttonStyles({ variant: "primary", size: "sm" })}
            href="/admin/iletisim"
          >
            Tumunu gor
          </Link>
        </div>
        <div className="mt-5 space-y-3">
          {stats.recentLeads.length ? (
            stats.recentLeads.map((lead) => (
              <div
                key={lead.id}
                className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white/90">{lead.name}</p>
                    <p className="mt-1 text-xs text-white/50">{lead.email}</p>
                    {lead.phone ? (
                      <p className="mt-1 text-xs text-white/40">{lead.phone}</p>
                    ) : null}
                  </div>
                  <p className="text-xs text-white/40">{formatDate(lead.createdAt)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[1.5rem] border border-white/[0.06] bg-[#0a1428] p-4 text-sm text-white/40">
              Henuz iletisim basvurusu yok.
            </div>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
