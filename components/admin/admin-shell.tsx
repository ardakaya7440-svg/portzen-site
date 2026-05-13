import Link from "next/link";
import type { ReactNode } from "react";

import { logoutAction } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/button";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/blog", label: "Blog Yonetimi" },
  { href: "/admin/iletisim", label: "Iletisim Basvurulari" },
  { href: "/admin/blog/yeni", label: "Yeni Yazi" }
];

export function AdminShell({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="h-fit rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#0066ff]/20">
            <div className="h-2 w-2 rounded-full bg-[#0066ff]" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0066ff]">
            Admin Panel
          </p>
        </div>
        <nav className="mt-6 space-y-1">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/50 transition hover:bg-white/[0.05] hover:text-white/90"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/50 transition hover:bg-white/[0.05] hover:text-white/90"
            href="/"
          >
            Siteyi goruntule ↗
          </Link>
        </nav>
        <div className="mt-6 border-t border-white/[0.06] pt-6">
          <form action={logoutAction}>
            <button
              className={cn(buttonStyles({ variant: "primary", fullWidth: true }))}
              type="submit"
            >
              Cikis yap
            </button>
          </form>
        </div>
      </aside>

      <div>
        <div className="rounded-[2rem] border border-white/[0.08] bg-[#060d1a] p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#0066ff]">
            Yonetim merkezi
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white/95">{title}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/50">{description}</p>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
}
