import { notFound } from "next/navigation";

import { AdminShell } from "@/components/admin/admin-shell";
import { PostEditorForm } from "@/components/admin/post-editor-form";
import { requireAdmin } from "@/lib/auth";
import { getPostById } from "@/lib/posts";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditBlogPage({ params }: Props) {
  await requireAdmin();
  const { id } = await params;
  const post = await getPostById(Number(id));

  if (!post) {
    notFound();
  }

  return (
    <AdminShell
      description="Mevcut blog yazisini duzenleyin, meta alanlarini guncelleyin veya durumu degistirin."
      title="Blog Yazisini Duzenle"
    >
      <PostEditorForm post={post} />
    </AdminShell>
  );
}
