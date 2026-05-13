"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");
  const isHome = pathname === "/";

  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      {isAdminRoute ? null : <Navbar />}
      <main className={isHome ? "flex-1" : "flex-1 pt-0"}>{children}</main>
      {isAdminRoute ? null : <Footer />}
    </div>
  );
}
