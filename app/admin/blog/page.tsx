import Link from "next/link";

import { AdminShell } from "@/components/admin/admin-shell";
import { DeletePostButton } from "@/components/admin/delete-post-button";
import { buttonStyles } from "@/components/ui/button";
import { requireAdmin } from "@/lib/auth";
import { getAdminPosts } from "@/lib/posts";
import { formatDate, getStatusLabel } from "@/lib/utils";

export default async function AdminBlogPage() {
  await requireAdmin();
  const posts = await getAdminPosts();

  return (
    <AdminShell
      description="Tum blog iceriklerini tek tabloda gorun. Durum, yayin tarihi ve duzenleme aksiyonlari bu sayfadan yonetilir."
      title="Blog Yonetimi"
    >
      <div className="mb-6 flex justify-end">
        <Link className={buttonStyles({ size: "lg" })} href="/admin/blog/yeni">
          Yeni blog ekle
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-border bg-panel">
              <tr className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <th className="px-6 py-4">Baslik</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4">Tarih</th>
                <th className="px-6 py-4">Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-border/70 align-top last:border-b-0">
                  <td className="px-6 py-5">
                    <p className="text-base font-semibold text-foreground">{post.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">/{post.slug}</p>
                  </td>
                  <td className="px-6 py-5 text-sm text-muted-foreground">{getStatusLabel(post.status)}</td>
                  <td className="px-6 py-5 text-sm text-muted-foreground">
                    {formatDate(post.publishedAt || post.updatedAt)}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-2">
                      {post.status === "PUBLISHED" ? (
                        <Link
                          className={buttonStyles({ variant: "primary", size: "sm" })}
                          href={`/blog/${post.slug}`}
                          target="_blank"
                        >
                          Sitede ac
                        </Link>
                      ) : null}
                      <Link
                        className={buttonStyles({ variant: "primary", size: "sm" })}
                        href={`/admin/blog/duzenle/${post.id}`}
                      >
                        Duzenle
                      </Link>
                      <DeletePostButton id={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
