import { AdminShell } from "@/components/admin/admin-shell";
import { requireAdmin } from "@/lib/auth";
import { getContactSubmissions } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export default async function AdminContactPage() {
  await requireAdmin();
  const submissions = await getContactSubmissions();

  return (
    <AdminShell
      description="Iletisim formundan gelen basvurular burada listelenir. Ad, e-posta, telefon ve varsa not bilgilerini tek ekranda gorebilirsiniz."
      title="Iletisim Basvurulari"
    >
      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#060d1a]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-white/[0.06] bg-[#0a1428]">
              <tr className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                <th className="px-6 py-4">Kisi</th>
                <th className="px-6 py-4">Sirket</th>
                <th className="px-6 py-4">Telefon</th>
                <th className="px-6 py-4">Mesaj</th>
                <th className="px-6 py-4">Tarih</th>
              </tr>
            </thead>
            <tbody>
              {submissions.length ? (
                submissions.map((submission) => (
                  <tr
                    key={submission.id}
                    className="border-b border-white/[0.05] align-top last:border-b-0"
                  >
                    <td className="px-6 py-5">
                      <p className="text-sm font-semibold text-white/90">{submission.name}</p>
                      <p className="mt-1 text-xs text-white/50">{submission.email}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-white/50">{submission.company || "-"}</td>
                    <td className="px-6 py-5 text-sm text-white/50">{submission.phone || "-"}</td>
                    <td className="max-w-xs px-6 py-5 text-sm leading-7 text-white/50">
                      {submission.message || "Mesaj birakilmadi."}
                    </td>
                    <td className="px-6 py-5 text-sm text-white/40">
                      {formatDate(submission.createdAt)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-8 text-sm text-white/40" colSpan={5}>
                    Henuz iletisim basvurusu yok.
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
