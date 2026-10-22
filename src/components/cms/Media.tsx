/* eslint-disable @next/next/no-img-element */
import type { MediaRef } from "@/server/cms";
import { cn } from "@/lib/utils";

/** Admin'den yüklenen görsel/video. Görseller sunucuda WebP'ye çevrilmiş ve boyutlandırılmıştır. */
export function Media({
  media,
  alt,
  className,
  fit = "cover",
  priority = false
}: {
  media: MediaRef;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  const src = `/api/media/${media.id}`;
  if (media.kind === "video") {
    return (
      <video
        src={src}
        className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain", className)}
        muted
        playsInline
        loop
        controls
        preload="metadata"
        aria-label={alt}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={media.width ?? undefined}
      height={media.height ?? undefined}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full", fit === "cover" ? "object-cover" : "object-contain", className)}
    />
  );
}
