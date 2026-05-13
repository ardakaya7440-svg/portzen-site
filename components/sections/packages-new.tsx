"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";

const TIERS = [
  {
    name: "Dijital Altyapı",
    model: "Tek seferlik kurulum",
    delivery: "7–10 gün",
    for: "Dijital varlığını ve temel lead sistemlerini kurmak isteyen işletmeler",
    systems: [
      "Kurumsal web sistemi (5 sayfa)",
      "Mobil uyumlu, hızlı yükleme",
      "SEO temel kurulumu",
      "Form + CRM entegrasyonu",
      "Google Analytics & dönüşüm izleme",
      "1 ay teknik destek",
    ],
    cta: "Analiz Al",
    href: "/iletisim",
    outerGrad: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
    featured: false,
  },
  {
    name: "Otomasyon Core",
    model: "Kurulum + Aylık operasyon",
    delivery: "10–14 gün",
    for: "Satış ve büyüme süreçlerini otomatize etmek isteyen aktif işletmeler",
    systems: [
      "WhatsApp AI otomasyon sistemi",
      "Lead generation & takip akışı",
      "n8n workflow engine kurulumu",
      "CRM tam entegrasyonu",
      "Haftalık büyüme raporu",
      "AI içerik üretim sistemi",
    ],
    cta: "Sistem Analizi Al",
    href: "/iletisim",
    outerGrad: "linear-gradient(145deg, rgba(0,102,255,0.20) 0%, rgba(0,68,204,0.10) 100%)",
    featured: true,
  },
  {
    name: "Full AI Growth",
    model: "Kurulum + Operasyon + Reklam",
    delivery: "14–21 gün",
    for: "Tüm büyüme altyapısını tek yerden yönetmek isteyen ölçeklenen işletmeler",
    systems: [
      "Tüm Core sistemler dahil",
      "Google Ads + Meta Ads yönetimi",
      "AI appointment setter",
      "Özel AI agent geliştirme",
      "Aylık strateji görüşmesi",
      "Öncelikli destek & SLA",
    ],
    cta: "Strateji Görüşmesi Al",
    href: "/iletisim",
    outerGrad: "linear-gradient(145deg, rgba(124,58,237,0.16) 0%, rgba(0,102,255,0.10) 100%)",
    featured: false,
  },
];

export function PackagesNew() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".card-inner");
    const cleanups: (() => void)[] = [];

    cards?.forEach((card) => {
      const handler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        card.style.setProperty("--my", `${e.clientY - rect.top}px`);
      };
      card.addEventListener("mousemove", handler);
      cleanups.push(() => card.removeEventListener("mousemove", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="paketler"
      ref={sectionRef}
      className="relative py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, #020710 0%, #040c1e 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(0,102,255,0.06), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mb-16 max-w-xl">
          <SectionLabel>Infrastructure Deployment</SectionLabel>
          <h2
            className="font-black leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
          >
            İşletmenize özel sistem altyapısı.
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Her deployment, analiz görüşmesi sonrası işletmenize özel olarak planlanır ve kurulur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="relative card-outer"
              style={{ background: tier.outerGrad }}
            >
              {tier.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 -translate-y-full pb-1">
                  <span className="inline-block rounded-full bg-gradient-to-r from-[#0055ee] to-[#0099ff] px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_18px_rgba(0,102,255,0.45)]">
                    En Çok Kurulan
                  </span>
                </div>
              )}

              <div className="card-inner p-7 flex flex-col h-full">
                {/* Header */}
                <div className="mb-5">
                  <p className="text-base font-bold text-white mb-2 leading-snug">{tier.name}</p>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="inline-block rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em]"
                      style={{
                        background: "rgba(0,170,255,0.08)",
                        border: "1px solid rgba(0,170,255,0.18)",
                        color: "rgba(0,170,255,0.65)",
                      }}
                    >
                      {tier.model}
                    </span>
                  </div>
                  <p className="text-xs text-white/48">Devreye alma: {tier.delivery}</p>
                </div>

                <p className="text-xs text-[#00d4ff]/75 mb-5 leading-relaxed">{tier.for}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.systems.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-white/70">
                      <svg className="w-3.5 h-3.5 text-[#00aaff] flex-shrink-0 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>

                {tier.featured ? (
                  <Link
                    href={tier.href}
                    className="group flex items-center justify-between rounded-full bg-gradient-to-r from-[#0055ee] to-[#0099ff] pl-5 pr-1.5 py-1.5 text-sm font-bold text-white transition-all duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_0_28px_rgba(0,102,255,0.45)] active:scale-[0.98]"
                  >
                    {tier.cta}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      ↗
                    </span>
                  </Link>
                ) : (
                  <Link
                    href={tier.href}
                    className="group flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] pl-5 pr-1.5 py-1.5 text-sm font-semibold text-white/80 transition-all duration-[350ms] ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-[#0066ff]/35 hover:bg-[#0066ff]/10 hover:text-white"
                  >
                    {tier.cta}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-px">
                      ↗
                    </span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-white/35">
          Tüm planlar görüşme sonrası özelleştirilir. Fiyatlandırma: kurulum + aylık operasyon + varsa reklam bütçesi.
        </p>
      </div>
    </section>
  );
}
