import Link from "next/link";
import type { Post } from "@prisma/client";

import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function BlogCard({
  post,
  tone = "light"
}: {
  post: Post;
  tone?: "light" | "dark";
}) {
  return (
    <article
      className={cn(
        "group rounded-[2rem] p-6 transition duration-300 sm:p-7",
        tone === "light" && "glass-light glow-hover",
        tone === "dark" && "glass-dark glow-hover"
      )}
    >
      <div
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.18em]",
          tone === "light" ? "text-[#5b73bc]" : "text-white/56"
        )}
      >
        {formatDate(post.publishedAt || post.createdAt)}
      </div>
      <h3
        className={cn(
          "mt-4 text-2xl font-semibold tracking-tight",
          tone === "light" ? "text-[#0d1726]" : "text-white"
        )}
      >
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className={cn("mt-4 text-sm leading-7", tone === "light" ? "text-muted-foreground" : "text-white/66")}>
        {post.excerpt}
      </p>
      <Link
        className={cn(
          "mt-6 inline-flex items-center text-sm font-semibold transition",
          tone === "light"
            ? "text-[#0d1726] group-hover:text-[#5b73bc]"
            : "text-white group-hover:text-[#dfe7ff]"
        )}
        href={`/blog/${post.slug}`}
      >
        Yaziyi oku
      </Link>
    </article>
  );
}
