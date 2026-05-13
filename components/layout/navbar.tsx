"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BrandMark } from "@/components/brand/brand-mark";

export function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = siteConfig.nav.filter(n => n.href !== "/");

  return (
    <header className={cn(
      "z-50 px-4 pt-3 sm:px-6",
      isHome ? "absolute inset-x-0 top-0" : "sticky top-0"
    )}>
      <div
        className="mx-auto max-w-6xl rounded-2xl transition-all duration-500"
        style={{
          border: `1px solid ${scrolled || !isHome ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.06)"}`,
          background: scrolled || !isHome
            ? "rgba(2,7,16,0.88)"
            : "rgba(2,7,16,0.45)",
          backdropFilter: "blur(20px) saturate(180%)",
          boxShadow: scrolled || !isHome
            ? "0 4px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "none",
        }}
      >
        {/* Main row */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-7">

          {/* Brand */}
          <Link className="group flex items-center gap-3 flex-shrink-0" href="/">
            <BrandMark className="h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0" />
            <div className="hidden sm:block">
              <p
                className="text-[9px] font-bold uppercase tracking-[0.28em] leading-none mb-0.5"
                style={{ color: "rgba(0,170,255,0.5)" }}
              >
                {siteConfig.tagline}
              </p>
              <p
                className="text-sm font-black leading-none tracking-[-0.01em]"
                style={{ color: "rgba(255,255,255,0.95)" }}
              >
                {siteConfig.name}
              </p>
            </div>
            <p className="sm:hidden text-sm font-black tracking-[-0.01em] text-white">
              {siteConfig.name}
            </p>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-xl",
                  "transition-all duration-200 ease-out",
                  pathname === item.href
                    ? "text-white bg-white/8"
                    : "text-white/50 hover:text-white/90 hover:bg-white/5"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/blog"
              className="px-3.5 py-2 text-sm font-medium rounded-xl text-white/45 transition-all duration-200 hover:text-white/80 hover:bg-white/5"
            >
              Blog
            </Link>
            <Link
              href="/iletisim"
              className="group relative flex items-center gap-2 rounded-xl pl-4 pr-2 py-2 text-sm font-bold text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0066ff 0%, #0055ee 100%)",
                boxShadow: "0 0 0 1px rgba(0,102,255,0.35), 0 4px 20px rgba(0,102,255,0.3)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.5), 0 6px 28px rgba(0,102,255,0.5)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(0,102,255,0.35), 0 4px 20px rgba(0,102,255,0.3)";
              }}
            >
              <span>Sistem Analizi Al</span>
              <span
                className="flex h-6 w-6 items-center justify-center rounded-lg text-[11px] font-bold transition-transform duration-200 group-hover:translate-x-0.5"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                ↗
              </span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl text-white transition-colors duration-200 lg:hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
            }}
            onClick={() => setOpen((c) => !c)}
            type="button"
          >
            <span className="flex flex-col gap-[5px] w-[15px]">
              <span className={cn(
                "block h-[1.5px] w-full bg-white rounded-full origin-center",
                "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open && "translate-y-[6.5px] rotate-45"
              )} />
              <span className={cn(
                "block h-[1.5px] bg-white rounded-full",
                "transition-all duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open ? "w-0 opacity-0" : "w-full opacity-100"
              )} />
              <span className={cn(
                "block h-[1.5px] w-full bg-white rounded-full origin-center",
                "transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open && "-translate-y-[6.5px] -rotate-45"
              )} />
            </span>
          </button>
        </div>

        {/* Mobile menu — aria-hidden + tabIndex prevent focus leaking when collapsed */}
        <div
          className={cn("nav-menu-wrap lg:hidden", open && "open")}
          aria-hidden={!open}
        >
          <div className="nav-menu-inner">
            <div
              className="border-t px-4 py-3 flex flex-col gap-1 rounded-b-2xl"
              style={{
                borderColor: "rgba(255,255,255,0.06)",
                background: "rgba(2,7,16,0.96)",
                backdropFilter: "blur(20px)",
              }}
            >
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    "rounded-xl px-4 py-2.5 text-sm font-medium",
                    "transition-all duration-200",
                    pathname === item.href
                      ? "bg-white/8 text-white"
                      : "text-white/65 hover:bg-white/5 hover:text-white"
                  )}
                  href={item.href}
                  tabIndex={open ? undefined : -1}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #0066ff 0%, #0055ee 100%)",
                  boxShadow: "0 4px 20px rgba(0,102,255,0.3)",
                }}
              >
                Sistem Analizi Al ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
