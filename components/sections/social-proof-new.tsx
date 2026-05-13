"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const DEPLOYMENTS = [
  {
    industry: "Emlak Danışmanı",
    problem: "Manuel lead takibi haftada 12 saat alıyor, form yanıtları geç kalıyor",
    systems: ["n8n Workflow", "AI Lead Agent", "CRM Entegrasyonu"],
    story: "Tüm lead kanalları tek workflow'a bağlandı. Form dolduran her lead anında CRM'e düştü, AI agent 5 dakika içinde WhatsApp ile yanıt verdi.",
    metrics: [
      { val: "12 sa.", label: "Haftalık Kazanım" },
      { val: "%0", label: "Lead Kaybı" },
    ],
    accent: "#0066ff",
  },
  {
    industry: "Güzellik & Cilt Bakım Kliniği",
    problem: "İçerik üretimi manuel, DM'ler yanıtsız, rezervasyonlar gelmiyor",
    systems: ["AI İçerik Sistemi", "Instagram DM Bot", "Rezervasyon Otomasyonu"],
    story: "Aylık 30 içerik AI ile üretildi, DM otomasyonu devreye alındı. 4 ayda organik büyüme 3.4x artarken rezervasyon doluluk oranı belirgin yükseliş gösterdi.",
    metrics: [
      { val: "+340%", label: "Organik Büyüme" },
      { val: "+45%", label: "Rezervasyon" },
    ],
    accent: "#8b5cf6",
  },
  {
    industry: "Klinik & Sağlık",
    problem: "Randevu no-show %28 seviyesinde, Google Ads bütçesi dönüşümsüz akıyor",
    systems: ["WhatsApp Hatırlatma", "AI Appointment Setter", "Google Ads Optimizasyonu"],
    story: "Randevudan 24 ve 2 saat önce otomatik WhatsApp gönderildi. Google Ads dönüşüm izleme kuruldu, organik hasta akışı 3 ayda 2.8x büyüdü.",
    metrics: [
      { val: "-%60", label: "No-Show Azalması" },
      { val: "2.8x", label: "Organik Hasta" },
    ],
    accent: "#10b981",
  },
  {
    industry: "Koç & Danışmanlık",
    problem: "Lead akışı düzensiz, program yerleri dolmuyor, takip tamamen manuel",
    systems: ["Web Sistemi", "E-posta Otomasyonu", "AI Appointment Setter"],
    story: "Funnel kuruldu, lead yakalama otomatize edildi, AI appointment setter ile program doluluk oranı %100'e ulaştı.",
    metrics: [
      { val: "%100", label: "Program Doluluk" },
      { val: "Sıfır", label: "Manuel Takip" },
    ],
    accent: "#f59e0b",
  },
];

export function SocialProofNew() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".pz-result-card");
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
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);
        const items = sectionRef.current?.querySelectorAll(".pz-result-item");
        if (!items) return;
        items.forEach((item, i) => {
          gsap.fromTo(item,
            { opacity: 0, y: 32 },
            {
              opacity: 1, y: 0,
              duration: 0.65,
              delay: (i % 2) * 0.1,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
            }
          );
        });
      };
      init();
    }

    return () => cleanups.forEach(fn => fn());
  }, []);

  return (
    <section
      id="sonuclar"
      ref={sectionRef}
      className="relative py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, #040c1e 0%, #020710 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,102,255,0.04), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Deployment Senaryoları</SectionLabel>
          <h2
            className="font-black leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
          >
            Problem tanımlandı. Sistem kuruldu. Sonuç geldi.
          </h2>
          <p
            className="mt-4 text-sm"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            * Senaryolar gerçek kullanım vakalarını temsil etmektedir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEPLOYMENTS.map((d) => (
            <div key={d.industry} className="pz-result-item opacity-0">
              <div
                className="pz-result-card relative h-full rounded-2xl overflow-hidden"
                style={{
                  padding: "1px",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                  "--mx": "-100px",
                  "--my": "-100px",
                } as React.CSSProperties}
              >
                {/* Spotlight */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none z-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(320px circle at var(--mx) var(--my), ${d.accent}12, transparent 55%)`,
                  }}
                />

                <div
                  className="relative z-10 h-full rounded-[calc(1rem-1px)] p-7 flex flex-col"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Industry tag */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: d.accent, boxShadow: `0 0 8px ${d.accent}80` }}
                    />
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.24em]"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {d.industry}
                    </p>
                  </div>

                  {/* Problem */}
                  <p
                    className="text-xs mb-3 leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <span
                      className="inline-block text-[9px] font-bold uppercase tracking-[0.18em] mr-2"
                      style={{ color: "rgba(255,255,255,0.20)" }}
                    >
                      Problem /
                    </span>
                    {d.problem}
                  </p>

                  {/* Systems deployed */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {d.systems.map((sys) => (
                      <span
                        key={sys}
                        className="inline-block rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.12em]"
                        style={{
                          background: `${d.accent}10`,
                          border: `1px solid ${d.accent}28`,
                          color: d.accent,
                        }}
                      >
                        {sys}
                      </span>
                    ))}
                  </div>

                  <p
                    className="text-sm leading-relaxed flex-1 mb-6"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {d.story}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-3">
                    {d.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 rounded-xl p-4 text-center"
                        style={{
                          background: `${d.accent}0a`,
                          border: `1px solid ${d.accent}1a`,
                        }}
                      >
                        <p
                          className="text-xl font-black tracking-tight"
                          style={{ color: d.accent }}
                        >
                          {m.val}
                        </p>
                        <p
                          className="mt-1 text-[10px] font-medium leading-tight"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
