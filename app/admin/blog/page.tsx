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
      <div className="mb-5 flex justify-end">
        <Link className={buttonStyles({ size: "lg" })} href="/admin/blog/yeni">
          Yeni blog ekle
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#060d1a]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-white/[0.06] bg-[#0a1428]">
              <tr className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                <th className="px-6 py-4">Baslik</th>
                <th className="px-6 py-4">Durum</th>
                <th className="px-6 py-4">Tarih</th>
                <th className="px-6 py-4">Aksiyon</th>
              </tr>
            </thead>
            <tbody>
              {posts.length ? (
                posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-white/[0.05] align-top last:border-b-0"
                  >
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-white/90">{post.title}</p>
                      <p className="mt-1 text-xs text-white/40">/{post.slug}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-white/50">
                      {getStatusLabel(post.status)}
                    </td>
                    <td className="px-6 py-5 text-sm text-white/50">
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
                ))
              ) : (
                <tr>
                  <td className="px-6 py-8 text-sm text-white/40" colSpan={4}>
                    Henuz blog yazisi yok.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
