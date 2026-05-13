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
      <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-soft">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="border-b border-border bg-panel">
              <tr className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
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
                    className="border-b border-border/70 align-top last:border-b-0"
                  >
                    <td className="px-6 py-5">
                      <p className="text-base font-semibold text-foreground">{submission.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{submission.email}</p>
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">
                      {submission.company || "-"}
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">
                      {submission.phone || "-"}
                    </td>
                    <td className="px-6 py-5 text-sm leading-7 text-muted-foreground">
                      {submission.message || "Mesaj birakilmadi."}
                    </td>
                    <td className="px-6 py-5 text-sm text-muted-foreground">
                      {formatDate(submission.createdAt)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    className="px-6 py-8 text-sm text-muted-foreground"
                    colSpan={5}
                  >
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
