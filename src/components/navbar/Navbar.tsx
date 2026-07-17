"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight, Video, MessageSquare, Workflow, Sparkles, Globe, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navbar — hibrit yaklaşım:
 * - Sol: yeni dark logo (public/logo.png) — dark kutu içinde
 * - Orta: "Hizmetler" TEK dropdown (eski renkli mini grid — sade 5 hizmet)
 *         + Referanslar / Blog / Hakkımızda düz linkler (yeni sadelik)
 * - Sağ: "Projeyi Konuşalım" CTA
 * - Mobil: drawer (sade, hizmetler + secondary)
 */

interface ServiceItem {
  title: string;
  href: string;
  icon: LucideIcon;
  tone: string;
  textTone: string;
}

const SERVICES: ServiceItem[] = [
  { title: "AI Reklam Videosu", href: "/yapay-zeka-video-uretimi", icon: Video, tone: "bg-brand-pink", textTone: "text-paper" },
  { title: "WhatsApp AI Asistanı", href: "/whatsapp-ai-asistani", icon: MessageSquare, tone: "bg-brand-green", textTone: "text-paper" },
  { title: "Otomasyon & CRM", href: "/crm-otomasyonu", icon: Workflow, tone: "bg-brand-blue", textTone: "text-paper" },
  { title: "Sosyal Medya İçerik", href: "/sosyal-medya-yonetimi", icon: Sparkles, tone: "bg-brand-yellow", textTone: "text-ink" },
  { title: "Web Tasarım", href: "/web-tasarim", icon: Globe, tone: "bg-brand-orange", textTone: "text-paper" }
];

const SECONDARY = [
  { label: "Referanslar", href: "/referanslar" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkımızda", href: "/hakkimizda" }
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
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
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="mx-auto flex max-w-container items-center gap-2 px-6 py-3">
        {/* Sol: Logo — yes.tools tarzı direkt, kutu yok. Ink siyah, transparan bg. */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          onMouseEnter={() => setServicesOpen(false)}
        >
          <Image
            src="/logo-inked.png"
            alt="PORTZEN"
            width={96}
            height={96}
            priority
            className="h-24 w-24 object-contain"
          />
        </Link>

        {/* Orta nav — desktop */}
        <nav className="hidden lg:flex items-center gap-1 ml-6">
          {/* Hizmetler dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
          >
            <button
              type="button"
              className={cn(
                "flex items-center gap-1.5 border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors whitespace-nowrap",
                servicesOpen
                  ? "border-ink bg-ink text-paper"
                  : "text-ink hover:bg-ink/5"
              )}
            >
              <span>Hizmetler</span>
              <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 transition-transform", servicesOpen && "rotate-180")} />
            </button>
          </div>

          <span className="mx-2 h-5 w-px bg-ink/20" />

          {/* Secondary linkler — düz */}
          {SECONDARY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseEnter={() => setServicesOpen(false)}
              className="border-3 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide text-ink hover:bg-ink/5 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sağ: CTA + mobil hamburger */}
        <div
          className="ml-auto flex items-center gap-2"
          onMouseEnter={() => setServicesOpen(false)}
        >
          <Link
            href="/iletisim"
            className="hidden sm:inline-flex items-center gap-2 border-3 border-ink bg-ink px-4 py-2 text-sm font-bold uppercase text-paper shadow-brutal-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal whitespace-nowrap"
          >
            Projeyi Konuşalım
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

      {/* HİZMETLER DROPDOWN — renkli mini grid */}
      <AnimatePresence>
        {servicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: [0.2, 0.9, 0.3, 1] }}
            className="absolute left-0 right-0 top-full"
          >
            <div className="mx-auto max-w-container px-6 pb-4">
              <div className="border-3 border-ink bg-paper shadow-brutal-lg p-3 max-w-3xl">
                <div className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
                  {SERVICES.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className={cn(
                          "group flex items-center gap-2 border-3 border-ink px-3 py-2.5 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all",
                          svc.tone,
                          svc.textTone
                        )}
                      >
                        <div className="border-3 border-ink bg-paper text-ink p-1 flex-shrink-0">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-xs font-black leading-tight flex-1">
                          {svc.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
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
                <Image src="/logo-inked.png" alt="PORTZEN" width={40} height={40} className="h-10 w-10 object-contain" />
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
                {SERVICES.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center gap-3 border-3 border-ink p-3 shadow-brutal-sm",
                        svc.tone,
                        svc.textTone
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-bold uppercase text-sm">{svc.title}</span>
                    </Link>
                  );
                })}
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
                  <span>Projeyi Konuşalım</span>
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
