"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/data/pricing";
import { SERVICE_GROUPS } from "@/data/catalog";

/**
 * Ortak navbar — tüm sayfalarda tek bileşen (app/layout.tsx).
 * Beyaz zemin, koyu metin, lime "Teklif Al" butonu. Sabit (fixed) durur; altındaki boşluk
 * sayesinde sayfa içeriğini örtmez. Ana sayfadaki koyu video alanı navbarın altından başlar.
 * Masaüstü: Hizmetler açılır menüsü (tıklama + klavye). Mobil: hamburger + Hizmetler akordeonu.
 */

type NavLink = { label: string; href: string };

/** Hizmet grupları tek kaynaktan: src/data/catalog.ts */
export { SERVICE_GROUPS };

const MAIN_LINKS: NavLink[] = [
  { label: "Fiyatlar", href: "/fiyatlar" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" }
];

export const WHATSAPP_URL = whatsappUrl("Merhaba, PORTZEN ile çalışmak istiyorum.");

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href + "/"));
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = React.useState(false); // mobil panel
  const [servicesOpen, setServicesOpen] = React.useState(false); // masaüstü açılır menü
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const servicesBtnRef = React.useRef<HTMLButtonElement>(null);
  const servicesPanelRef = React.useRef<HTMLDivElement>(null);
  const menuBtnRef = React.useRef<HTMLButtonElement>(null);
  const mobilePanelRef = React.useRef<HTMLDivElement>(null);

  const focusFirstRef = React.useRef(false);

  // ↓ ile açıldıysa panel görünür olduktan sonra ilk bağlantıya odaklan
  React.useEffect(() => {
    if (servicesOpen && focusFirstRef.current) {
      focusFirstRef.current = false;
      servicesPanelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }
  }, [servicesOpen]);

  const servicesActive = SERVICE_GROUPS.some((g) => g.links.some((l) => isActive(pathname, l.href)));

  // Sayfa değişince her şeyi kapat
  React.useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Kaydırınca ince bir alt gölge
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape ile kapatma + odağı açan düğmeye geri verme
  React.useEffect(() => {
    if (!servicesOpen && !menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesBtnRef.current?.focus();
      }
      if (menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [servicesOpen, menuOpen]);

  // Masaüstü açılır menü: dışarı tıklayınca veya odak dışarı çıkınca kapat
  React.useEffect(() => {
    if (!servicesOpen) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (servicesPanelRef.current?.contains(t) || servicesBtnRef.current?.contains(t)) return;
      setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [servicesOpen]);

  // Mobil panel açıkken arka plan kaymasın; ekran genişleyince paneli kapat
  React.useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false); // panel her açılışta kapalı alt menüyle başlar
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = prev;
      mq.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const onServicesBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget as Node | null;
    if (next && (servicesPanelRef.current?.contains(next) || servicesBtnRef.current?.contains(next))) return;
    setServicesOpen(false);
  };

  const linkBase =
    "rounded-full px-3 py-2 text-[15px] font-semibold text-slate transition-colors hover:bg-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate focus-visible:ring-offset-2";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white transition-shadow",
          scrolled ? "border-slate/10 shadow-[0_1px_12px_rgba(31,42,46,0.08)]" : "border-slate/10"
        )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-[60] focus:rounded-full focus:bg-slate focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
        >
          İçeriğe geç
        </a>
        <nav aria-label="Ana menü" className="mx-auto flex h-[67px] max-w-container items-center justify-between gap-4 px-4 sm:px-6 lg:h-[75px]">
          <Link href="/" className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate" aria-label="PORTZEN ana sayfa">
            {/* eslint-disable-next-line @next/next/no-img-element -- sabit boyutlu logo, mevcut varlık */}
            <img src="/logo-h-dark.png" alt="PORTZEN" width={155} height={40} className="h-8 w-auto lg:h-9" />
          </Link>

          {/* Masaüstü */}
          <div className="hidden items-center gap-1 lg:flex">
            <div className="relative" onBlur={onServicesBlur}>
              <button
                ref={servicesBtnRef}
                type="button"
                aria-expanded={servicesOpen}
                aria-controls="nav-hizmetler"
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    focusFirstRef.current = true;
                    setServicesOpen(true);
                  }
                }}
                className={cn(linkBase, "inline-flex items-center gap-1", (servicesOpen || servicesActive) && "bg-light")}
              >
                Hizmetler
                <ChevronDown className={cn("h-4 w-4", servicesOpen && "rotate-180")} aria-hidden />
              </button>
              <div
                ref={servicesPanelRef}
                id="nav-hizmetler"
                hidden={!servicesOpen}
                className="absolute left-1/2 top-full mt-3 w-[min(860px,calc(100vw-3rem))] -translate-x-1/2 rounded-2xl border border-slate/10 bg-white p-6 shadow-[0_12px_40px_rgba(31,42,46,0.12)]"
              >
                <div className="grid grid-cols-3 gap-8">
                  {SERVICE_GROUPS.map((g) => (
                    <div key={g.title}>
                      <p className="mb-3 text-xs font-bold text-slate/60">{g.title}</p>
                      <ul className="space-y-1">
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => setServicesOpen(false)}
                              aria-current={isActive(pathname, l.href) ? "page" : undefined}
                              className="block rounded-lg px-2 py-1.5 text-[15px] font-semibold text-slate hover:bg-light focus-visible:bg-light focus-visible:outline-none aria-[current=page]:bg-light"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate/10 pt-4 text-sm">
                  <span className="text-slate/70">Tüm paketler ve fiyatlar tek sayfada.</span>
                  <Link
                    href="/fiyatlar"
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1 font-bold text-slate underline underline-offset-4 hover:no-underline"
                  >
                    Fiyatları görün <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </div>

            {MAIN_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className={cn(linkBase, "aria-[current=page]:bg-light")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/iletisim"
              className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-slate transition-colors hover:bg-[#b2f55d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate focus-visible:ring-offset-2 sm:inline-flex"
            >
              Teklif Al
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              aria-controls="nav-mobil"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate focus-visible:ring-offset-2 lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
            </button>
          </div>
        </nav>

        {/* Mobil panel */}
        <div
          ref={mobilePanelRef}
          id="nav-mobil"
          hidden={!menuOpen}
          className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-slate/10 bg-white lg:hidden"
        >
          <div className="mx-auto max-w-container px-4 pb-6 pt-2 sm:px-6">
            <ul className="divide-y divide-slate/10">
              <li>
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="nav-mobil-hizmetler"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-left text-base font-bold text-slate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate"
                >
                  Hizmetler
                  <ChevronDown className={cn("h-5 w-5", mobileServicesOpen && "rotate-180")} aria-hidden />
                </button>
                <div id="nav-mobil-hizmetler" hidden={!mobileServicesOpen} className="pb-4">
                  {SERVICE_GROUPS.map((g) => (
                    <div key={g.title} className="mt-2 first:mt-0">
                      <p className="px-1 pb-1 pt-2 text-xs font-bold text-slate/60">{g.title}</p>
                      <ul>
                        {g.links.map((l) => (
                          <li key={l.href}>
                            <Link
                              href={l.href}
                              onClick={() => setMenuOpen(false)}
                              aria-current={isActive(pathname, l.href) ? "page" : undefined}
                              className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-slate hover:bg-light aria-[current=page]:bg-light"
                            >
                              {l.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
              {MAIN_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    className="block py-4 text-base font-bold text-slate aria-[current=page]:underline aria-[current=page]:decoration-lime aria-[current=page]:decoration-4 aria-[current=page]:underline-offset-8"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3">
              <Link
                href="/iletisim"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-full bg-lime px-5 py-3.5 text-base font-bold text-slate"
              >
                Teklif Al <ArrowUpRight className="h-5 w-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-full border border-slate/15 px-5 py-3.5 text-base font-bold text-slate"
              >
                WhatsApp&apos;tan yazın <ArrowUpRight className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sabit navbarın yüksekliği kadar boşluk: içerik navbarın altında kalmaz */}
      <div className="h-[68px] lg:h-[76px]" aria-hidden />
    </>
  );
}
