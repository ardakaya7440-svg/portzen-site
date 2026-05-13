import { PostStatus } from "@prisma/client";

import { prisma } from "@/lib/db";

export async function getPublishedPosts() {
  return prisma.post.findMany({
    where: { status: PostStatus.PUBLISHED },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }]
  });
}

export async function getLatestPublishedPosts(limit = 3) {
  return prisma.post.findMany({
    where: { status: PostStatus.PUBLISHED },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: limit
  });
}

export async function getPostBySlug(slug: string) {
  return prisma.post.findUnique({
    where: { slug }
  });
}

export async function getRelatedPosts(currentId: number, limit = 3) {
  return prisma.post.findMany({
    where: {
      status: PostStatus.PUBLISHED,
      NOT: { id: currentId }
    },
    orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
    take: limit
  });
}

export async function getAdminPosts() {
  return prisma.post.findMany({
    orderBy: [{ updatedAt: "desc" }]
  });
}

export async function getPostById(id: number) {
  return prisma.post.findUnique({
    where: { id }
  });
}

export async function getDashboardStats() {
  const [totalPosts, publishedPosts, draftPosts, totalLeads, recentPosts, recentLeads] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { status: PostStatus.PUBLISHED } }),
    prisma.post.count({ where: { status: PostStatus.DRAFT } }),
    prisma.contactSubmission.count(),
    prisma.post.findMany({
      orderBy: [{ updatedAt: "desc" }],
      take: 4
    }),
    prisma.contactSubmission.findMany({
      orderBy: [{ createdAt: "desc" }],
      take: 4
    })
  ]);

  return {
    totalPosts,
    publishedPosts,
    draftPosts,
    totalLeads,
    recentPosts,
    recentLeads
  };
}

export async function getContactSubmissions() {
  return prisma.contactSubmission.findMany({
    orderBy: [{ createdAt: "desc" }]
  });
}

export async function getSitemapPostSlugs() {
  return prisma.post.findMany({
    where: { status: PostStatus.PUBLISHED },
    select: {
      slug: true,
      updatedAt: true
    }
  });
}
