"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navbar — sade, dikkat dağıtmayan.
 * Dropdown/mega menu yok. Direkt 5 hizmet + Referanslar + Blog + Hakkımızda.
 * Mobil: drawer.
 */

const NAV = [
  { label: "AI Video", href: "/yapay-zeka-video-uretimi" },
  { label: "WhatsApp AI", href: "/whatsapp-ai-asistani" },
  { label: "Otomasyon", href: "/crm-otomasyonu" },
  { label: "Sosyal Medya", href: "/sosyal-medya-yonetimi" },
  { label: "Web Tasarım", href: "/web-tasarim" }
];

const SECONDARY = [
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" }
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-brutal",
        scrolled
          ? "bg-paper border-b-3 border-ink shadow-brutal-sm"
          : "bg-transparent border-b-3 border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-container items-center gap-2 px-6 py-3">
        <Link href="/" className="flex items-center shrink-0">
          <div className="border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm">
            <span className="font-display text-xl font-black tracking-tight text-ink">PORTZEN</span>
          </div>
        </Link>

        {/* Desktop nav — sade, tek satır */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink/5 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}

          <span className="mx-2 h-5 w-px bg-ink/20" />

          {SECONDARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink/5 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/iletisim"
            className="hidden sm:inline-flex items-center gap-2 border-3 border-ink bg-ink px-4 py-2 text-sm font-bold uppercase text-paper shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal whitespace-nowrap"
          >
            Görüşme Al
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden border-3 border-ink bg-paper p-2 shadow-brutal-sm"
            aria-label="Menü"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* MOBİL DRAWER — sade dikey liste */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-ink/80 z-50"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 22, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-paper border-l-3 border-ink overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b-3 border-ink">
                <span className="font-display font-black text-lg">MENÜ</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="border-3 border-ink bg-paper p-1.5 shadow-brutal-sm"
                  aria-label="Kapat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-2 px-1">
                  Hizmetler
                </div>
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-3 border-ink bg-brand-yellow p-3 font-bold uppercase text-sm text-ink shadow-brutal-sm"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-ink/20 my-3" />
                {SECONDARY.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-3 border-ink bg-paper p-3 font-bold uppercase text-sm shadow-brutal-sm"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/iletisim"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-between border-3 border-ink bg-ink p-3 font-bold uppercase text-sm text-paper shadow-brutal-sm"
                >
                  <span>Görüşme Al</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
