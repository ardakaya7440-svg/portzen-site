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
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
      <aside className="h-fit rounded-[2rem] border border-border bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
          Admin panel
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
          Icerik yonetimi
        </h2>
        <nav className="mt-8 space-y-2">
          {adminLinks.map((link) => (
            <Link
              key={link.href}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-panel hover:text-foreground"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="block rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-panel hover:text-foreground"
            href="/"
          >
            Siteyi goruntule
          </Link>
        </nav>
        <form action={logoutAction} className="mt-8">
          <button className={cn(buttonStyles({ variant: "primary", fullWidth: true }))} type="submit">
            Cikis yap
          </button>
        </form>
      </aside>

      <div>
        <div className="rounded-[2rem] border border-border bg-white p-7 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-strong">
            Yonetim merkezi
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">{title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{description}</p>
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
