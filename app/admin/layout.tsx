import type { Metadata } from "next";
import Link from "next/link";
import { getSession } from "@/server/auth";
import { logoutAction } from "./actions";
import { AdminNav } from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: { absolute: "PORTZEN Yönetim" },
  robots: { index: false, follow: false }
};
export const dynamic = "force-dynamic";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = getSession();
  if (!session) return <div className="min-h-screen bg-light">{children}</div>;
  return (
    <div className="min-h-screen bg-light lg:grid lg:grid-cols-[240px_1fr]">
      <aside className="relative border-b border-slate/10 bg-white lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between gap-3 px-5 py-4 lg:block">
          <Link href="/admin" className="block">
            <span className="text-lg font-bold tracking-tight text-slate">PORTZEN</span>
            <span className="ml-2 rounded-full bg-lime px-2 py-0.5 text-[11px] font-bold text-slate">Yönetim</span>
          </Link>
          <p className="hidden truncate pt-1 text-xs text-slate/60 lg:block">{session.sub}</p>
        </div>
        <AdminNav />
        <div className="hidden px-5 pb-5 lg:absolute lg:bottom-0 lg:block lg:w-full">
          <Link href="/" target="_blank" className="block py-2 text-sm font-semibold text-slate/70 hover:text-slate">
            Siteyi aç ↗
          </Link>
          <form action={logoutAction}>
            <button className="py-2 text-sm font-semibold text-slate/70 hover:text-slate">Çıkış yap</button>
          </form>
        </div>
      </aside>
      <div className="min-w-0">
        <main id="admin-main" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
          {children}
        </main>
        <div className="flex gap-4 border-t border-slate/10 px-4 py-4 sm:px-6 lg:hidden">
          <Link href="/" target="_blank" className="text-sm font-semibold text-slate/70">
            Siteyi aç ↗
          </Link>
          <form action={logoutAction}>
            <button className="text-sm font-semibold text-slate/70">Çıkış yap</button>
          </form>
        </div>
      </div>
    </div>
  );
}
