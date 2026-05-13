"use client";

import { useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const AUTOMATIONS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Instagram DM → CRM",
    desc: "Instagram'a gelen DM'leri otomatik olarak CRM'e veya Google Sheet'e kaydet. Hiçbir lead kaçmasın.",
    tag: "Sosyal Medya",
    accent: "rgba(124,58,237,0.2)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Form → WhatsApp / E-posta",
    desc: "Form dolduran müşteriye anında otomatik WhatsApp veya e-posta gönder. Yanıt sürenizi sıfıra indirin.",
    tag: "Lead Yönetimi",
    accent: "rgba(0,212,255,0.2)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "İçerik Planı Otomasyonu",
    desc: "AI ile aylık içerik planı üret ve otomatik olarak takvime aktar. Manuel iş bitti.",
    tag: "İçerik",
    accent: "rgba(0,102,255,0.2)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: "Randevu Hatırlatma",
    desc: "Randevudan önce otomatik SMS / WhatsApp hatırlatma. No-show oranını %60 düşürün.",
    tag: "Operasyon",
    accent: "rgba(52,195,143,0.2)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Lead Takip Sistemi",
    desc: "Teklif verdiğiniz müşterileri otomatik takip et. Hiçbir müşteri unutulmasın.",
    tag: "Satış",
    accent: "rgba(245,158,11,0.2)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Haftalık Rapor Otomasyonu",
    desc: "Satış, takipçi ve performans verilerini otomatik topla, haftalık özet olarak gönder.",
    tag: "Analiz",
    accent: "rgba(0,102,255,0.2)",
  },
];

export function AutomationsNew() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cleanups: (() => void)[] = [];

    // Video intersection observer (desktop only)
    const isMobile = window.innerWidth < 768;
    const video = videoRef.current;
    if (video && !isMobile) {
      video.src = "/videos/auto-network.mp4";
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) video.play().catch(() => {});
          else video.pause();
        },
        { threshold: 0 }
      );
      obs.observe(video);
      cleanups.push(() => obs.disconnect());
    }

    // Spotlight effect
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".card-inner");

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
      id="otomasyonlar"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #040c1e 0%, #020710 100%)" }}
    >
      {/* Ambient video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover hidden md:block pointer-events-none"
        style={{
          opacity: 0.06,
          mixBlendMode: "screen",
          filter: "saturate(0.4) hue-rotate(200deg)",
        }}
        muted
        loop
        playsInline
        preload="none"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(0,170,255,0.04), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <SectionLabel>Workflow Engine</SectionLabel>
            <h2
              className="font-black leading-[1.0] tracking-[-0.025em] text-white"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
            >
              Sistem sizin yerinize çalışır.
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              Tekrarlayan işleri AI workflow'lara devredin. Zamanınızı sadece büyümeye ayırın.
            </p>
          </div>

          <div className="card-outer lg:max-w-xs lg:ml-auto w-full">
            <div
              className="card-inner p-6"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse"
                  style={{ background: "#00aaff" }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Ortalama tasarruf
                </span>
              </div>
              <p
                className="font-black"
                style={{ fontSize: "3rem", color: "white", lineHeight: 1 }}
              >
                12<span style={{ fontSize: "1.8rem" }}>+ saat</span>
              </p>
              <p
                className="text-sm mt-1.5"
                style={{ color: "rgba(255,255,255,0.52)" }}
              >
                Her hafta otomatize edilen manuel iş
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUTOMATIONS.map((a) => (
            <div key={a.title} className="card-outer">
              <div
                className="card-inner p-6"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="rounded-xl p-2.5"
                    style={{ background: a.accent, color: "rgba(255,255,255,0.8)" }}
                  >
                    {a.icon}
                  </div>
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
                    style={{
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.48)",
                    }}
                  >
                    {a.tag}
                  </span>
                </div>
                <h3
                  className="text-sm font-bold mb-2 leading-snug"
                  style={{ color: "rgba(255,255,255,0.88)" }}
                >
                  {a.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
