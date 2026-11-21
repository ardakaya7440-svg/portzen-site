"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import DishOrbitCarousel, { type Dish } from "@/components/ui/dish-orbit-carousel";

/* ---------------- Yörüngedeki Tabak (restoran) ---------------- */

const DISHES: Dish[] = [
  { title: "Közde", subtitle: "Antrikot", label: "Izgara antrikot", image: "/tarzlar/yemek/antrikot.webp", alt: "Patates kızartması ve sebzeyle servis edilen ızgara antrikot", rating: 4.9, chef: "Şef Deniz Kaya", kitchen: "Liman Ocakbaşı", description: "28 gün dinlendirilmiş antrikot, kömür ateşinde mühürlenip tereyağında bekletilir. İnce patates ve közlenmiş yeşillikle.", likes: 96, ingredients: ["Antrikot", "Patates", "Brokoli", "Taze fasulye", "Ev yapımı ketçap"], accent: "#f6a37c" },
  { title: "Bahçeden", subtitle: "Somon", label: "Somonlu bahçe salatası", image: "/tarzlar/yemek/somon-salata.webp", alt: "Somon, avokado ve salatalıklı yeşil salata", rating: 4.3, chef: "Şef Ece Arslan", kitchen: "Sera Mutfak", description: "Narenciyeyle marine somon, roka ve avokado üzerinde; salatalık şeritleri ve dereotlu sosla.", likes: 71, ingredients: ["Somon", "Avokado", "Roka", "Salatalık", "Dereotu"], accent: "#f2a6c6" },
  { title: "Mercimekli", subtitle: "Levrek", label: "Mercimekli levrek", image: "/tarzlar/yemek/levrek.webp", alt: "Siyah mercimek üzerinde susamlı levrek, yumurta ve havuç", rating: 4.6, chef: "Şef Mert Yalın", kitchen: "Tuzlu Su Mutfağı", description: "Çıtır derili levrek, siyah mercimek yatağında; kayısı kıvamında yumurta ve sırlı havuçla.", likes: 88, ingredients: ["Levrek", "Siyah mercimek", "Yumurta", "Havuç", "Susam"], accent: "#bcd98e" },
  { title: "Yaz esintisi", subtitle: "Kavun", label: "Kavunlu yaz salatası", image: "/tarzlar/yemek/kavun-salata.webp", alt: "Kavun, roka ve cherry domatesli yaz salatası", rating: 4.5, chef: "Şef Selin Ak", kitchen: "Asma Altı Kafe", description: "Kavun, közlenmiş cherry domates ve roka; bir sıkım misket limonuyla.", likes: 64, ingredients: ["Kavun", "Cherry domates", "Roka", "Misket limonu"], accent: "#f5d26a" },
  { title: "Tereyağında", subtitle: "Sahanda", label: "Sahanda yumurta", image: "/tarzlar/yemek/yumurta.webp", alt: "Tabakta sarısı parlak sahanda yumurta", rating: 4.7, chef: "Şef Can Demir", kitchen: "Sabah Sofrası", description: "Köy yumurtası, kenarları dantel gibi kızarana kadar tereyağında. Kahvaltının en sade hali.", likes: 120, ingredients: ["Köy yumurtası", "Tereyağı", "Deniz tuzu", "Karabiber"], accent: "#9fcbe8" },
];

export function DishDemo() {
  // Dar ekranda kart altta durduğu için sahne daha uzun olmalı
  const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return <DishOrbitCarousel dishes={DISHES} backdrop="/tarzlar/yemek/mutfak-duvar.webp" height={narrow ? "940px" : "640px"} scrollDriven={false} />;
}
