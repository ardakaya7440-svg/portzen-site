import { AdminShell } from "@/components/admin/admin-shell";
import { PostEditorForm } from "@/components/admin/post-editor-form";
import { requireAdmin } from "@/lib/auth";

export default async function NewBlogPage() {
  await requireAdmin();

  return (
    <AdminShell
      description="Baslik, slug, kisa aciklama, meta alanlari ve markdown icerigi ile yeni bir blog yazisi olusturun."
      title="Yeni Blog Yazisi"
    >
      <PostEditorForm />
    </AdminShell>
  );
}
