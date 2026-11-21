"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import LiquidCheckout from "@/components/ui/liquid-glass-checkout";

/* ---------------- Su Damlalı Ödeme (e-ticaret) ---------------- */

export function CheckoutDemo() {
  return (
    <div className="flex w-full justify-center px-4 py-12" style={{ background: "#DCEBF5" }}>
      <LiquidCheckout amount={1249} currency="TRY" locale="tr-TR" merchant="Örnek Mağaza" layout="wallet" tone="light" />
    </div>
  );
}
