"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import GlassyDashboard from "@/components/ui/glassy-dashboard";

/* ---------------- Cam Panel (özel yazılım / yönetim paneli) ---------------- */

export function DashboardDemo() {
  // transform: içerideki position:fixed öğeleri bu kutuya hapseder
  return (
    <div className="relative h-[760px] w-full overflow-hidden md:h-[880px]" style={{ transform: "translateZ(0)" }}>
      <div className="h-full w-full overflow-y-auto overscroll-contain">
        <GlassyDashboard workspaceName="PANEL" panelFrost={12} initialTheme="light" />
      </div>
    </div>
  );
}
