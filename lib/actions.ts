"use server";

import { PostStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  checkLoginRateLimit,
  clearLoginAttempts,
  clearAdminSession,
  recordFailedLogin,
  requireAdmin,
  setAdminSession,
  verifyAdminCredentials,
} from "@/lib/auth";
import { prisma } from "@/lib/db";
import { slugify } from "@/lib/utils";

export type FormState = {
  error?: string;
  success?: string;
};

const loginSchema = z.object({
  username: z.string().min(1, "Kullanici adi gerekli."),
  password: z.string().min(1, "Sifre gerekli.")
});

const postSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(8, "Baslik en az 8 karakter olmalı."),
  slug: z.string().min(3, "Slug gerekli."),
  excerpt: z.string().min(30, "Kisa aciklama en az 30 karakter olmali."),
  metaTitle: z.string().min(10, "Meta title en az 10 karakter olmali."),
  metaDescription: z.string().min(30, "Meta description en az 30 karakter olmali."),
  content: z.string().min(200, "Icerik en az 200 karakter olmali."),
  status: z.nativeEnum(PostStatus),
  publishedAt: z.string().optional()
});

const contactSchema = z.object({
  name: z.string().min(2, "Ad soyad gerekli."),
  company: z.string().optional(),
  email: z.string().email("Gecerli bir e-posta girin."),
  phone: z.string().optional(),
  message: z.string().max(1500, "Mesaj alani cok uzun.").optional().or(z.literal(""))
});

export async function loginAction(_: FormState, formData: FormData): Promise<FormState> {
  const { headers } = await import("next/headers");
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  const rateLimit = checkLoginRateLimit(ip);
  if (!rateLimit.allowed) {
    return { error: `Cok fazla basarisiz giris denemesi. ${rateLimit.waitMinutes} dakika sonra tekrar deneyin.` };
  }

  const parsed = loginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || "Giris bilgilerini kontrol edin." };
  }

  const isValid = await verifyAdminCredentials(parsed.data.username, parsed.data.password);

  if (!isValid) {
    recordFailedLogin(ip);
    return { error: "Kullanici adi veya sifre hatali." };
  }

  clearLoginAttempts(ip);
  await setAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

export async function savePostAction(_: FormState, formData: FormData): Promise<FormState> {
  await requireAdmin();

  const parsed = postSchema.safeParse({
    id: formData.get("id"),
    title: formData.get("title"),
    slug: slugify(String(formData.get("slug") || "")),
    excerpt: formData.get("excerpt"),
    metaTitle: formData.get("metaTitle"),
    metaDescription: formData.get("metaDescription"),
    content: formData.get("content"),
    status: formData.get("status"),
    publishedAt: formData.get("publishedAt")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || "Form alanlarini kontrol edin." };
  }

  const data = parsed.data;
  const existingBySlug = await prisma.post.findUnique({
    where: { slug: data.slug }
  });

  if (existingBySlug && String(existingBySlug.id) !== data.id) {
    return { error: "Bu slug zaten kullaniliyor. Farkli bir slug deneyin." };
  }

  const publishedAt =
    data.status === PostStatus.PUBLISHED
      ? data.publishedAt
        ? new Date(data.publishedAt)
        : new Date()
      : null;

  let previousSlug: string | null = null;

  if (data.id) {
    const existing = await prisma.post.findUnique({
      where: { id: Number(data.id) }
    });

    previousSlug = existing?.slug || null;

    await prisma.post.update({
      where: { id: Number(data.id) },
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        content: data.content,
        status: data.status,
        publishedAt
      }
    });
  } else {
    await prisma.post.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        content: data.content,
        status: data.status,
        publishedAt
      }
    });
  }

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin");
  revalidatePath("/admin/blog");
  revalidatePath("/sitemap.xml");

  if (previousSlug) {
    revalidatePath(`/blog/${previousSlug}`);
  }

  revalidatePath(`/blog/${data.slug}`);
  redirect("/admin/blog");
}

export async function deletePostAction(formData: FormData) {
  await requireAdmin();

  const id = Number(formData.get("id"));

  if (!id) {
    throw new Error("Gecerli bir yazi secilmedi.");
  }

  const existing = await prisma.post.findUnique({
    where: { id }
  });

  await prisma.post.delete({
    where: { id }
  });

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/admin");
  revalidatePath("/admin/blog");

  if (existing?.slug) {
    revalidatePath(`/blog/${existing.slug}`);
  }
}

export async function submitContactAction(
  _: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message")
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message || "Lutfen alanlari kontrol edin." };
  }

  await prisma.contactSubmission.create({
    data: {
      ...parsed.data,
      message: parsed.data.message || ""
    }
  });

  return {
    success: "Bilgileriniz ulasti. En kisa surede size geri donus yapacagiz."
  };
}
