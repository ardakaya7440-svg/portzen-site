"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import SushiConveyorMenu, { type ConveyorDish } from "@/components/ui/sushi-conveyor-menu";

/* ---------------- Yürüyen Bant Menü (kafe / sushi / pastane) ---------------- */

const SUSHI: ConveyorDish[] = [
  { id: "somon-nigiri", name: "Somon nigiri", price: "₺120", tier: 2, description: "Taze somon dilimleri, sirkeli pirinç üzerinde, zencefil turşusuyla.", details: ["2 adet", "Balık", "Şefin önerisi"], image: "/tarzlar/sushi/somon-nigiri.webp" },
  { id: "ton-nigiri", name: "Ton balığı nigiri", price: "₺180", tier: 4, description: "Yağsız kırmızı ton balığı, ılık pirinç üzerinde.", details: ["2 adet", "Balık"], image: "/tarzlar/sushi/ton-nigiri.webp" },
  { id: "karides-nigiri", name: "Karides nigiri", price: "₺120", tier: 2, description: "Haşlanmış kelebek karides, pirinç üzerinde.", details: ["2 adet", "Kabuklu deniz ürünü"], image: "/tarzlar/sushi/karides-nigiri.webp" },
  { id: "california", name: "California roll", price: "₺150", tier: 3, description: "Yengeç, avokado ve salatalık; turuncu tobiko ile.", details: ["4 adet", "Deniz ürünü"], image: "/tarzlar/sushi/california-roll.webp" },
  { id: "dragon", name: "Dragon roll", price: "₺240", tier: 5, description: "Tempura karidesli roll, avokado kaplı, unagi sosla.", details: ["4 adet", "Buğday", "Şefin önerisi"], image: "/tarzlar/sushi/dragon-roll.webp" },
  { id: "tamago", name: "Tamago nigiri", price: "₺90", tier: 1, description: "Tatlı rulo omlet, nori şeridiyle pirince bağlanır.", details: ["2 adet", "Yumurta"], image: "/tarzlar/sushi/tamago.webp" },
  { id: "edamame", name: "Tuzlu edamame", price: "₺90", tier: 1, description: "Buharda pişmiş soya fasulyesi, pul tuzla.", details: ["1 kase", "Vegan"], image: "/tarzlar/sushi/edamame.webp" },
  { id: "mochi", name: "Mochi dondurma", price: "₺150", tier: 3, description: "Matcha ve çilekli mochi dondurma, birer adet.", details: ["2 adet", "Süt", "Tatlı"], image: "/tarzlar/sushi/mochi.webp" },
];

export function ConveyorDemo() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="relative">
      <div className="relative z-20 flex justify-end px-4 pt-4 md:absolute md:right-4 md:top-4 md:p-0">
        <span aria-live="polite" className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium">
          Sepet: <span className="tabular-nums">{count}</span> tabak
        </span>
      </div>
      <SushiConveyorMenu
        items={SUSHI}
        legend={{ 1: "₺90", 2: "₺120", 3: "₺150", 4: "₺180", 5: "₺240" }}
        eyebrow="Öğle menüsü · Yürüyen bant"
        heading="Menünüz sayfada dönmeye devam eder."
        caption="Bandı durdurmak için üzerine gelin, çevirmek için kaydırın, bir tabak seçin."
        autoplay
        onAdd={() => setCount((n) => n + 1)}
      />
    </div>
  );
}
