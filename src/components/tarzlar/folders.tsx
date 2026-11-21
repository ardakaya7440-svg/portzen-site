"use client";

// Tarz demosu — içerik örnektir; isim, fiyat ve rakamlar uydurmadır.

import * as React from "react";
import GlassFolder from "@/components/ui/glass-folder-cards";

/* ---------------- Cam Klasörler (avukat / fotoğrafçı / ajans) ---------------- */

export function FoldersDemo() {
  const [w, setW] = React.useState<number | undefined>(undefined);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 420px)");
    const update = () => setW(mq.matches ? 270 : undefined);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-background px-6 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.12]"
        style={{ backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)", backgroundSize: "22px 22px" }}
      />
      <div className="relative grid max-w-[1180px] grid-cols-1 items-end justify-items-center gap-x-14 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <GlassFolder
          width={w}
          label="Müvekkil Dosyaları"
          art="glacier"
          seed={5}
          appearDelay={0}
          files={[
            { name: "Vekâletname.pdf", meta: "PDF · 220 KB" },
            { name: "Dilekçe taslağı", meta: "DOCX · 48 KB" },
            { name: "Duruşma takvimi", meta: "3 tarih" },
          ]}
        />
        <GlassFolder
          width={w}
          label="Düğün Albümü 2026"
          art="dusk"
          seed={3}
          action="more"
          labelPlacement="top-left"
          appearDelay={140}
          files={[
            { name: "Nikâh", meta: "86 fotoğraf", art: "aurora" },
            { name: "Dış çekim", meta: "124 fotoğraf", art: "ember" },
            { name: "Klip", meta: "MP4 · 1,4 GB", art: "verdant" },
          ]}
          menu={[{ label: "Müşteriyle paylaş…" }, { label: "Albümü indir" }]}
        />
        <GlassFolder
          width={w}
          label="Proje Portfolyosu"
          meta="Güncellendi: bugün"
          tone="dark"
          art="ember"
          seed={11}
          labelPlacement="top-right"
          appearDelay={280}
          files={[
            { name: "Marka kimliği", meta: "32 görsel", art: "aurora" },
            { name: "Web sitesi", meta: "Canlı proje", art: "glacier" },
            { name: "Kampanya", meta: "12 görsel", art: "dusk" },
          ]}
        />
      </div>
    </div>
  );
}
