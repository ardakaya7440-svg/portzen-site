"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/section-label";

const FAQS = [
  {
    q: "Web sitesi kaç günde teslim edilir?",
    a: "Standart 5 sayfalık web sitesi 7–10 iş günü içinde teslim edilir. Daha kapsamlı projeler için net bir zaman planı ilk görüşmede belirlenir.",
  },
  {
    q: "Sosyal medya planı tam olarak neleri içeriyor?",
    a: "Aylık 20–30 içerik planı, her içerik için AI destekli caption ve hashtag önerileri, görsel şablon seti, haftalık büyüme raporu ve DM otomasyon kurulumunu içerir.",
  },
  {
    q: "n8n otomasyon nedir, teknik bilgi gerekiyor mu?",
    a: "n8n, farklı uygulamaları birbirine bağlayan bir otomasyon platformudur. Kurulum ve yönetimi tamamen biz yapıyoruz. Sizin teknik bilgiye ihtiyacınız yok.",
  },
  {
    q: "Her işletmeye uygun mu?",
    a: "Güzellik salonundan klinik, emlak, koçluk ve e-ticaret gibi farklı sektörlerde sistemler kuruyoruz. İlk görüşmede işletmenize uygunluğu birlikte değerlendiriyoruz.",
  },
  {
    q: "Mevcut web sitem varsa ne olacak?",
    a: "Mevcut sitenizi inceleyip kısa optimizasyon veya tam yenileme seçeneğini birlikte değerlendiriyoruz. Genellikle temelden yeniden yapmak daha verimli sonuç veriyor.",
  },
  {
    q: "Kurulum sonrası destek veriyor musunuz?",
    a: "Evet. Her paket belirli bir destek süresi içeriyor. Full sistem paketinde aylık strateji görüşmesi ve öncelikli destek dahil.",
  },
];

export function FaqNew() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="sss"
      className="relative py-28 sm:py-36"
      style={{ background: "linear-gradient(180deg, #020710 0%, #040c1e 50%, #020710 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(0,102,255,0.04), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
        <div className="mb-16 max-w-xl">
          <SectionLabel>SSS</SectionLabel>
          <h2
            className="font-black leading-[1.0] tracking-[-0.025em] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.2rem)" }}
          >
            Aklınızdaki sorular.
          </h2>
        </div>

        <div className="space-y-2.5">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="card-outer"
              style={{
                background: open === i
                  ? "linear-gradient(145deg, rgba(0,102,255,0.18) 0%, rgba(0,102,255,0.06) 100%)"
                  : undefined,
              }}
            >
              <div
                className="card-inner overflow-hidden"
                style={open === i ? { "--mx": "-100px", "--my": "-100px" } as React.CSSProperties : undefined}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
                  onClick={() => setOpen(open === i ? null : i)}
                  type="button"
                >
                  <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                  <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-white/8 border border-white/10 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <svg
                      className={`w-3.5 h-3.5 text-[#0066ff] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${open === i ? "rotate-45" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                {/* CSS grid-based smooth expand */}
                <div
                  className="grid transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-white/65 leading-relaxed">{faq.a}</p>
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
