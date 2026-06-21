"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectorOption {
  slug: string;
  name: string;
}

export interface ServicePanelData {
  serviceSlug: string;
  label: string;
  shortLabel: string;
  tone: string;
  sectors: SectorOption[];
  locations: SectorOption[];
}

interface Props {
  panels: ServicePanelData[];
}

/* ============================================================
   Anasayfada kompakt 5 buton + modal pop-up.
   Tıklayınca hizmete özel sektör + şehir seçim ekranı açılır.
   ============================================================ */
export function ServiceSelectorGrid({ panels }: Props) {
  const [openServiceSlug, setOpenServiceSlug] = useState<string | null>(null);
  const openPanel = panels.find((p) => p.serviceSlug === openServiceSlug);

  // ESC ile modal kapat + body scroll kilidi
  useEffect(() => {
    if (!openServiceSlug) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenServiceSlug(null);
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [openServiceSlug]);

  return (
    <>
      {/* 5 KOMPAKT HİZMET BUTONU */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {panels.map((panel) => {
          const isLight = panel.tone === "yellow" || panel.tone === "orange";
          return (
            <button
              key={panel.serviceSlug}
              type="button"
              onClick={() => setOpenServiceSlug(panel.serviceSlug)}
              className={cn(
                "group relative text-left border-3 border-ink p-6 shadow-brutal hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg transition-all",
                `bg-brand-${panel.tone}`,
                isLight ? "text-ink" : "text-paper"
              )}
            >
              <Sparkles className="h-6 w-6 mb-3 opacity-80" />
              <h3 className="font-display text-xl font-black leading-tight mb-2">{panel.label}</h3>
              <div className="text-sm opacity-80">
                {panel.sectors.length} sektör · {panel.locations.length} şehir
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider border-b-2 border-current pb-0.5">
                Seçeneklerimi Gör <ArrowUpRight className="h-3 w-3" />
              </div>
            </button>
          );
        })}
      </div>

      {/* MODAL */}
      {openPanel && (
        <div
          className="fixed inset-0 z-[100] bg-ink/85 flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setOpenServiceSlug(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-paper border-3 border-ink shadow-brutal-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header — sticky */}
            <div className="sticky top-0 z-10 bg-paper border-b-3 border-ink px-5 py-4 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-0.5">
                  Hizmet
                </div>
                <h3 className="font-display text-xl md:text-2xl font-black text-ink leading-tight">
                  {openPanel.label}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpenServiceSlug(null)}
                className="border-3 border-ink bg-paper p-2 shadow-brutal-sm hover:bg-brand-yellow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all shrink-0 ml-3"
                aria-label="Kapat"
              >
                <X className="h-4 w-4 text-ink" />
              </button>
            </div>

            <div className="p-5 space-y-6">
              {/* Genel hizmet sayfası CTA */}
              <Link
                href={`/${openPanel.serviceSlug}`}
                onClick={() => setOpenServiceSlug(null)}
                className={cn(
                  "block border-3 border-ink p-4 shadow-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg transition-all",
                  `bg-brand-${openPanel.tone}`,
                  openPanel.tone === "yellow" || openPanel.tone === "orange" ? "text-ink" : "text-paper"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">
                      Genel Hizmet Sayfası
                    </div>
                    <div className="font-display text-lg font-black leading-tight">
                      {openPanel.label} hakkında her şey
                    </div>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0" />
                </div>
              </Link>

              {/* Sektörler grid */}
              {openPanel.sectors.length > 0 && (
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3 flex items-center justify-between">
                    <span>Sektörünüze Özel</span>
                    <span className="text-ink/40">{openPanel.sectors.length} sektör</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {openPanel.sectors.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${openPanel.serviceSlug}/${s.slug}`}
                        onClick={() => setOpenServiceSlug(null)}
                        className="group inline-flex items-center justify-between gap-2 border-3 border-ink bg-paper px-3 py-2.5 text-sm font-bold text-ink shadow-brutal-sm hover:bg-brand-yellow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                      >
                        <span>{s.name}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-40 group-hover:opacity-100 transition-opacity shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Şehirler grid */}
              {openPanel.locations.length > 0 && (
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-ink/60 mb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      Şehrinize Özel
                    </span>
                    <span className="text-ink/40">{openPanel.locations.length} şehir</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {openPanel.locations.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${openPanel.serviceSlug}/${s.slug}`}
                        onClick={() => setOpenServiceSlug(null)}
                        className="group inline-flex items-center justify-center gap-1.5 border-3 border-ink bg-paper px-2 py-2.5 text-sm font-bold text-ink shadow-brutal-sm hover:bg-brand-yellow hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal transition-all"
                      >
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{s.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
