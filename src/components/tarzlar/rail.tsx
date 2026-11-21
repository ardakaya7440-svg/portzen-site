"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import ClothingRailHero, { type RailGarment } from "@/components/ui/product-rail-gallery";

/* ---------------- Canlı Askı (butik / giyim) ---------------- */

const RAIL_ITEMS: RailGarment[] = [
  { id: "tisort-kemik", name: "Basic tişört · Kemik", kind: "tee", color: "#EFEBE2", tag: "₺749", description: "%100 pamuk, gündelik kesim. Her kombine uyan sade bir parça.", details: ["%100 pamuk", "Regular fit", "S–XXL"] },
  { id: "tisort-hardal", name: "Oversize tişört · Hardal", kind: "tee", color: "#DE9C31", tag: "₺799", description: "Düşük omuzlu, bol kesim yaz tişörtü.", details: ["Oversize", "Düşük omuz"] },
  { id: "gomlek-mavi", name: "Oxford gömlek · Gök mavisi", kind: "shirt", color: "#A3D3EB", trim: "#f4f1ea", tag: "₺1.290", description: "Düğmeli yaka, göğüs cepli klasik oxford gömlek.", details: ["Oxford pamuk", "Düğmeli yaka"] },
  { id: "hirka-zeytin", name: "Örgü hırka · Zeytin", kind: "knit", color: "#758151", tag: "₺1.690", description: "Ahşap düğmeli, kalın örgü yün hırka.", details: ["Yün karışımı", "Ahşap düğme"] },
  { id: "kapusonlu-gri", name: "Kapüşonlu sweat · Gri", kind: "hoodie", color: "#A0A5AB", tag: "₺1.490", description: "Kanguru cepli, içi şardonlu kapüşonlu sweatshirt.", details: ["Şardonlu", "Kanguru cep"] },
  { id: "sweat-lila", name: "Bisiklet yaka sweat · Lila", kind: "knit", color: "#CCB2E0", tag: "₺1.190", description: "Yumuşak dokulu, ribanalı bisiklet yaka sweatshirt.", details: ["Ribana detay", "Unisex"] },
  { id: "ceket-lacivert", name: "Kısa ceket · Lacivert", kind: "jacket", color: "#2D3B5C", trim: "#c9a86a", tag: "₺2.490", description: "Çıtçıtlı, çift cepli mevsimlik ceket.", details: ["Pamuklu kanvas", "Çift cep"] },
  { id: "kaban-deve", name: "Uzun kaban · Deve tüyü", kind: "coat", color: "#B8895A", trim: "#3a2a1c", tag: "₺3.990", description: "Diz boyu, kemerli kış kabanı.", details: ["Yün karışımı", "Diz boyu"] },
];

export function RailDemo() {
  return (
    <ClothingRailHero
      items={RAIL_ITEMS}
      hanger="wood"
      eyebrow="Yeni sezon · Askıda 8 parça"
      heading="Mağazanızın askısı, artık sitenizde."
      caption="Askıda gezinin, bir askıyı kaydırın, bir parçaya tıklayıp arkasına bakın."
      autoplay
    />
  );
}
