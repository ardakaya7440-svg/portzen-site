"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { SERVICES, NAV_GROUPS, TONE_BG, TONE_TEXT } from "@/data/services";
import { cn } from "@/lib/utils";

const SECONDARY_NAV = [
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" }
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState<string | null>(null);
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
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="mx-auto flex max-w-container items-center gap-2 px-6 py-3">
        <Link href="/" className="flex items-center shrink-0" onMouseEnter={() => setOpenGroup(null)}>
          <div className="border-3 border-ink bg-brand-yellow px-3 py-1.5 shadow-brutal-sm">
            <span className="font-display text-xl font-black tracking-tight text-ink">PORTZEN</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6">
          {NAV_GROUPS.map((group) => {
            const isOpen = openGroup === group.slug;
            return (
              <div
                key={group.slug}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.slug)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1.5 border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap",
                    isOpen
                      ? "border-ink bg-ink text-paper"
                      : "text-ink hover:bg-ink/5"
                  )}
                >
                  <span>{group.shortLabel}</span>
                  <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isOpen && "rotate-180")} />
                </button>
              </div>
            );
          })}

          <span className="mx-2 h-5 w-px bg-ink/20" />

          {SECONDARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setOpenGroup(null)}
              className="border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink/5 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2" onMouseEnter={() => setOpenGroup(null)}>
          <Link
            href="/iletisim"
            className="hidden sm:inline-flex items-center gap-2 border-3 border-ink bg-brand-green px-4 py-2 text-sm font-bold uppercase text-paper shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal whitespace-nowrap"
          >
            <MessageSquare className="h-4 w-4" />
            İletişim
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden border-3 border-ink bg-paper p-2 shadow-brutal-sm"
            aria-label="Menü"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* SADE DROPDOWN PANEL — sadece başlık listesi */}
      <AnimatePresence>
        {openGroup && (
          <motion.div
            key={openGroup}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: [0.2, 0.9, 0.3, 1] }}
            className="absolute left-0 right-0 top-full"
          >
            {NAV_GROUPS.filter((g) => g.slug === openGroup).map((group) => {
              const groupServices = SERVICES.filter((s) => group.serviceSlugs.includes(s.slug));
              return (
                <div key={group.slug} className="mx-auto max-w-container px-6 pb-4">
                  <div className="border-3 border-ink bg-paper shadow-brutal-lg max-w-md">
                    <ul className="py-2">
                      {groupServices.map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={svc.href}
                            className="group flex items-center justify-between gap-4 px-5 py-2.5 text-sm font-bold text-ink hover:bg-brand-yellow transition-colors"
                          >
                            <span>{svc.title}</span>
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBİL DRAWER */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-ink/80 z-50"
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
              <div className="p-4 space-y-3">
                {NAV_GROUPS.map((group) => (
                  <div key={group.slug}>
                    <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-2 px-1">
                      {group.label}
                    </div>
                    <div className="space-y-2">
                      {SERVICES.filter((s) => group.serviceSlugs.includes(s.slug)).map((svc) => (
                        <Link
                          key={svc.slug}
                          href={svc.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center gap-3 border-3 border-ink p-3 shadow-brutal-sm",
                            TONE_BG[svc.tone],
                            TONE_TEXT[svc.tone]
                          )}
                        >
                          <svc.icon className="h-5 w-5" />
                          <span className="font-bold uppercase text-sm">{svc.shortTitle}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="h-px bg-ink/20 my-3" />
                {SECONDARY_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block border-3 border-ink bg-paper p-3 font-bold uppercase text-sm shadow-brutal-sm"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
