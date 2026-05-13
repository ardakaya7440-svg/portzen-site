"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/section-label";

const SERVICES = [
  {
    id: "ai-agent",
    label: "Core System",
    title: "AI Agent Sistemleri",
    desc: "İşletmeniz adına lead takibi yapan, müşteri sorularını yanıtlayan ve randevu kuran özerk AI agent'lar.",
    stack: ["GPT-4o", "Webhook", "CRM Sync"],
    accent: "#0066ff",
    accentSoft: "rgba(0,102,255,0.08)",
    featured: true,
  },
  {
    id: "whatsapp",
    label: "Messaging",
    title: "WhatsApp & Telegram Otomasyonu",
    desc: "Gelen mesajlara anında yanıt veren, lead'leri filtreleyen ve satış sürecini başlatan akıllı mesajlaşma sistemleri.",
    stack: ["WhatsApp API", "n8n", "AI NLP"],
    accent: "#00aaff",
    accentSoft: "rgba(0,170,255,0.08)",
  },
  {
    id: "lead-gen",
    label: "Acquisition",
    title: "Lead Generation Sistemi",
    desc: "Web sitesi, sosyal medya ve ads kanallarından gelen lead'leri otomatik yakalayan ve besleyen altyapı.",
    stack: ["Landing Page", "Form AI", "Lead Score"],
    accent: "#6366f1",
    accentSoft: "rgba(99,102,241,0.08)",
  },
  {
    id: "google-ads",
    label: "Paid Growth",
    title: "Google Ads & Meta Yönetimi",
    desc: "Dönüşüm odaklı kampanya yapısı, AI destekli hedefleme ve gerçek zamanlı optimizasyon ile maksimum ROI.",
    stack: ["Google Ads", "Meta", "AI Bid"],
    accent: "#f59e0b",
    accentSoft: "rgba(245,158,11,0.07)",
  },
  {
    id: "appointment",
    label: "Conversion",
    title: "AI Appointment Setter",
    desc: "Lead'leri otomatik qualify eden, takvim entegrasyonuyla randevu oluşturan ve no-show oranını sıfıra yaklaştıran sistem.",
    stack: ["Cal.com", "AI Voice", "Auto-remind"],
    accent: "#10b981",
    accentSoft: "rgba(16,185,129,0.08)",
  },
  {
    id: "web-dev",
    label: "Infrastructure",
    title: "Web Sistemi Geliştirme",
    desc: "Next.js tabanlı, hızlı, SEO-first ve CRM entegrasyonlu web siteleri. Sadece güzel değil, müşteri kazanan.",
    stack: ["Next.js", "TypeScript", "Edge"],
    accent: "#8b5cf6",
    accentSoft: "rgba(139,92,246,0.08)",
  },
  {
    id: "instagram",
    label: "Social",
    title: "Instagram Marketing Intelligence",
    desc: "AI destekli içerik üretimi, algoritma analizi ve growth hacking stratejisiyle organik takipçi ve müşteri büyümesi.",
    stack: ["AI Content", "Analytics", "Auto-post"],
    accent: "#ec4899",
    accentSoft: "rgba(236,72,153,0.07)",
  },
  {
    id: "workflow",
    label: "Automation",
    title: "Workflow Automation",
    desc: "n8n ile kurulan, tüm araçlarınızı birbirine bağlayan ve manuel işleri sıfıra indiren otomasyonlar.",
    stack: ["n8n", "Zapier", "API"],
    accent: "#14b8a6",
    accentSoft: "rgba(20,184,166,0.08)",
  },
];

export function ServicesNew() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".pz-service-card");
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

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReduced) {
      const init = async () => {
        const { gsap }          = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const items = sectionRef.current?.querySelectorAll(".pz-service-item");
        if (!items) return;

        items.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 36 },
            {
              opacity: 1, y: 0,
              duration: 0.65,
              delay: (i % 4) * 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      };
      init();
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="sistemler"
      ref={sectionRef}
      className="relative py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, #020710 0%, #040c1e 100%)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.25), transparent)" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(0,102,255,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">

        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Sistem Kataloğu</SectionLabel>
          <h2
            className="font-black leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Tek altyapı. Sekiz güçlü sistem.
          </h2>
          <p
            className="mt-5 text-lg leading-relaxed"
            style={{ color: "rgba(255,255,255,0.60)" }}
          >
            Her sistem birbirine entegre çalışır. Tek bir görüşmeyle tüm altyapınızı kuruyoruz.
          </p>
        </div>

        {/* ── Service grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.id}
              className="pz-service-item opacity-0"
              style={{ gridColumn: i === 0 ? "span 2" : undefined }}
            >
              <div
                className="pz-service-card relative h-full rounded-2xl overflow-hidden cursor-default"
                style={{
                  padding: "1px",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  "--mx": "-100px",
                  "--my": "-100px",
                } as React.CSSProperties}
              >
                {/* Spotlight */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0 transition-opacity duration-500 hover:opacity-100"
                  style={{
                    background: `radial-gradient(350px circle at var(--mx) var(--my), ${s.accentSoft.replace("0.08", "0.12")}, transparent 55%)`,
                  }}
                />

                <div
                  className="relative z-10 h-full rounded-[calc(1rem-1px)] p-6 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Label */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.28em]"
                      style={{ color: s.accent + "99" }}
                    >
                      {s.label}
                    </span>
                    {s.featured && (
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                        style={{
                          background: `${s.accent}18`,
                          border: `1px solid ${s.accent}35`,
                          color: s.accent,
                        }}
                      >
                        Core
                      </span>
                    )}
                  </div>

                  {/* Accent dot */}
                  <div
                    className="mb-4 w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: s.accentSoft, border: `1px solid ${s.accent}25` }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: s.accent }} />
                  </div>

                  <h3
                    className="font-bold leading-snug tracking-[-0.01em] mb-2.5"
                    style={{
                      fontSize: i === 0 ? "1.2rem" : "1rem",
                      color: "rgba(255,255,255,0.92)",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-5"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {s.desc}
                  </p>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {s.stack.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-lg"
                        style={{
                          background: `${s.accent}10`,
                          border: `1px solid ${s.accent}20`,
                          color: `${s.accent}cc`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/iletisim"
            className="group inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-sm font-bold text-white transition-all duration-300"
            style={{
              border: "1px solid rgba(0,102,255,0.25)",
              background: "rgba(0,102,255,0.08)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,102,255,0.18)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,102,255,0.45)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(0,102,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,102,255,0.08)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,102,255,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Tüm Sistemleri Keşfet
            <svg className="w-4 h-4 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
