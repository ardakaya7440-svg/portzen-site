import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  currentPage: number;
  totalPages: number;
  /** Pagination'ın bağlandığı temel URL — örn: "/blog" veya "/blog/kategori/ai" */
  basePath: string;
}

/** 1. sayfa URL'i = basePath, 2+. sayfalar = basePath/sayfa/{n} */
function pageHref(basePath: string, page: number): string {
  if (page <= 1) return basePath;
  // /blog → /blog/sayfa/2
  // /blog/kategori/ai → /blog/kategori/ai/sayfa/2
  return `${basePath.replace(/\/+$/, "")}/sayfa/${page}`;
}

/** "1 ... 4 5 [6] 7 8 ... 12" tipi sayfa listesi üret */
function pageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const set = new Set<number>();
  set.add(1);
  set.add(total);
  for (let i = current - 1; i <= current + 1; i++) {
    if (i >= 1 && i <= total) set.add(i);
  }
  const sorted = Array.from(set).sort((a, b) => a - b);
  const result: (number | "...")[] = [];
  for (let i = 0; i < sorted.length; i++) {
    result.push(sorted[i]);
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) {
      result.push("...");
    }
  }
  return result;
}

export function Pagination({ currentPage, totalPages, basePath }: Props) {
  if (totalPages <= 1) return null;

  const pages = pageNumbers(currentPage, totalPages);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      aria-label="Sayfa gezinmesi"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {/* Önceki */}
      {hasPrev ? (
        <Link
          href={pageHref(basePath, currentPage - 1)}
          className="inline-flex items-center gap-1 border-3 border-ink bg-paper px-3 py-2 text-sm font-bold uppercase shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
          aria-label="Önceki sayfa"
        >
          <ChevronLeft className="h-4 w-4" />
          Önceki
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-1 border-3 border-ink/30 bg-paper/50 px-3 py-2 text-sm font-bold uppercase text-ink/40 cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Önceki
        </span>
      )}

      {/* Sayfa numaraları */}
      <div className="flex flex-wrap items-center gap-2">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`gap-${i}`} className="px-2 text-ink/50 select-none">
              …
            </span>
          ) : (
            <Link
              key={p}
              href={pageHref(basePath, p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={cn(
                "border-3 border-ink min-w-[2.5rem] px-3 py-2 text-sm font-black text-center shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all",
                p === currentPage
                  ? "bg-ink text-paper shadow-brutal"
                  : "bg-paper text-ink"
              )}
            >
              {p}
            </Link>
          )
        )}
      </div>

      {/* Sonraki */}
      {hasNext ? (
        <Link
          href={pageHref(basePath, currentPage + 1)}
          className="inline-flex items-center gap-1 border-3 border-ink bg-ink text-paper px-3 py-2 text-sm font-bold uppercase shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all"
          aria-label="Sonraki sayfa"
        >
          Sonraki
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center gap-1 border-3 border-ink/30 bg-paper/50 px-3 py-2 text-sm font-bold uppercase text-ink/40 cursor-not-allowed"
        >
          Sonraki
          <ChevronRight className="h-4 w-4" />
        </span>
      )}
    </nav>
  );
}
