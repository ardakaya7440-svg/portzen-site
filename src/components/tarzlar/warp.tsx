"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import WarpCarousel, { WARP_CAROUSEL_CARDS, type WarpCard } from "@/components/ui/warp-carousel";

/* ---------------- Rakam Halkası (klinik / eğitim / kurumsal) ---------------- */

const WARP_TEXT: Pick<WarpCard, "title" | "value" | "unit" | "footer" | "labels">[] = [
  { title: "Hasta\nmemnuniyeti", value: "98", unit: "%", footer: "Örnek veri", labels: ["İyi", "Mükemmel"] },
  { title: "Yıllık\ntecrübe", value: "25", unit: "yıl", footer: "1999'dan beri", labels: ["Kuruluş", "bugün", "yarın"] },
  { title: "Günlük\nrandevu", value: "120", unit: "", footer: "Online randevuyla" },
  { title: "Uzman\nkadro", value: "18", unit: "", footer: "Alanında uzman" },
];

const WARP_CARDS: WarpCard[] = WARP_CAROUSEL_CARDS.map((card, i) => ({ ...card, ...WARP_TEXT[i] }));

export function WarpDemo() {
  return (
    <div className="relative h-[520px] w-full overflow-hidden" style={{ backgroundColor: "#efefef" }}>
      <WarpCarousel cards={WARP_CARDS} autoplay ariaLabel="Rakamlarla örnek klinik" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
