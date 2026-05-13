import { PostStatus } from "@prisma/client";

import { prisma } from "@/lib/db";

export async function getPublishedPosts() {
  try {
    return await prisma.post.findMany({
      where: { status: PostStatus.PUBLISHED },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }]
    });
  } catch {
    return [];
  }
}

export async function getLatestPublishedPosts(limit = 3) {
  try {
    return await prisma.post.findMany({
      where: { status: PostStatus.PUBLISHED },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: limit
    });
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    return await prisma.post.findUnique({
      where: { slug }
    });
  } catch {
    return null;
  }
}

export async function getRelatedPosts(currentId: number, limit = 3) {
  try {
    return await prisma.post.findMany({
      where: { status: PostStatus.PUBLISHED, NOT: { id: currentId } },
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      take: limit
    });
  } catch {
    return [];
  }
}

export async function getAdminPosts() {
  try {
    return await prisma.post.findMany({ orderBy: [{ updatedAt: "desc" }] });
  } catch {
    return [];
  }
}

export async function getPostById(id: number) {
  try {
    return await prisma.post.findUnique({ where: { id } });
  } catch {
    return null;
  }
}

export async function getDashboardStats() {
  try {
    const [totalPosts, publishedPosts, draftPosts, totalLeads, recentPosts, recentLeads] = await Promise.all([
      prisma.post.count(),
      prisma.post.count({ where: { status: PostStatus.PUBLISHED } }),
      prisma.post.count({ where: { status: PostStatus.DRAFT } }),
      prisma.contactSubmission.count(),
      prisma.post.findMany({ orderBy: [{ updatedAt: "desc" }], take: 4 }),
      prisma.contactSubmission.findMany({ orderBy: [{ createdAt: "desc" }], take: 4 })
    ]);
    return { totalPosts, publishedPosts, draftPosts, totalLeads, recentPosts, recentLeads };
  } catch {
    return { totalPosts: 0, publishedPosts: 0, draftPosts: 0, totalLeads: 0, recentPosts: [], recentLeads: [] };
  }
}

export async function getContactSubmissions() {
  try {
    return await prisma.contactSubmission.findMany({ orderBy: [{ createdAt: "desc" }] });
  } catch {
    return [];
  }
}

export async function getSitemapPostSlugs() {
  try {
    return await prisma.post.findMany({
      where: { status: PostStatus.PUBLISHED },
      select: { slug: true, updatedAt: true }
    });
  } catch {
    return [];
  }
}
