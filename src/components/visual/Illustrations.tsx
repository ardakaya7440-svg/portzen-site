import type { VisualKind } from "@/data/catalog";
import { cn } from "@/lib/utils";

/**
 * Kodla çizilmiş temsili görseller (fotoğraf/marka görseli değildir).
 * Admin'den hizmet görseli yüklenmediğinde kartlarda bunlar görünür.
 * Sosyal medya: içerik örneği · Yazılım: ekran · Otomasyon: akış.
 */

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden bg-light", className)}
      aria-hidden
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime/50 blur-2xl" />
      {children}
    </div>
  );
}

function Social() {
  const tiles = ["bg-slate", "bg-lime", "bg-white", "bg-white", "bg-slate/80", "bg-lime/70", "bg-lime/40", "bg-white", "bg-slate"];
  return (
    <Frame>
      <div className="relative w-[46%] min-w-[120px] rounded-[22px] border border-slate/15 bg-white p-2 shadow-card-lg">
        <div className="flex items-center gap-2 px-1 pb-2">
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-lime to-slate" />
          <span className="h-1.5 w-14 rounded-full bg-slate/20" />
        </div>
        <div className="grid grid-cols-3 gap-1">
          {tiles.map((c, i) => (
            <div key={i} className={cn("aspect-square rounded-[6px] border border-slate/10", c)}>
              {i === 1 && <div className="m-1.5 h-1 w-6 rounded-full bg-slate/60" />}
              {i === 4 && <div className="flex h-full items-center justify-center"><span className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" /></div>}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[14%] left-[8%] w-[34%] min-w-[90px] rounded-xl border border-slate/10 bg-white p-2.5 shadow-card-lg">
        <div className="h-1.5 w-3/4 rounded-full bg-slate/70" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-slate/20" />
        <div className="mt-2 flex gap-1">
          <span className="h-3 w-8 rounded-full bg-lime" />
          <span className="h-3 w-6 rounded-full bg-light" />
        </div>
      </div>
    </Frame>
  );
}

function Video() {
  return (
    <Frame>
      <div className="relative aspect-[9/16] h-[78%] rounded-[18px] bg-slate p-2 shadow-card-lg">
        <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-gradient-to-b from-slate via-slate/80 to-lime/60">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
              <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-slate" />
            </span>
          </div>
          <div className="absolute bottom-6 left-2 right-2 space-y-1">
            <div className="mx-auto h-2 w-4/5 rounded bg-white" />
            <div className="mx-auto h-2 w-3/5 rounded bg-lime" />
          </div>
          <div className="absolute bottom-2 left-2 right-2 h-1 rounded-full bg-white/30">
            <div className="h-full w-2/5 rounded-full bg-lime" />
          </div>
        </div>
      </div>
      <div className="absolute right-[10%] top-[18%] flex flex-col gap-1.5">
        {["Kurgu", "Altyazı", "Kapak"].map((t) => (
          <span key={t} className="rounded-full border border-slate/15 bg-white px-2.5 py-1 text-[10px] font-bold text-slate shadow-card">
            {t}
          </span>
        ))}
      </div>
    </Frame>
  );
}

function Ads() {
  const bars = [38, 52, 44, 66, 58, 74, 70];
  return (
    <Frame>
      <div className="w-[78%] rounded-2xl border border-slate/15 bg-white p-3 shadow-card-lg">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-16 rounded-full bg-slate/70" />
          <span className="rounded-full bg-light px-2 py-0.5 text-[9px] font-bold text-slate/60">Haftalık</span>
        </div>
        <div className="mt-3 flex h-20 items-end gap-1.5">
          {bars.map((h, i) => (
            <div key={i} className={cn("flex-1 rounded-t-md", i === bars.length - 2 ? "bg-lime" : "bg-slate/15")} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["Kampanya", "Hedefleme", "Rapor"].map((t) => (
            <span key={t} className="truncate rounded-md bg-light px-1.5 py-1 text-center text-[9px] font-bold text-slate/70">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Chat() {
  return (
    <Frame>
      <div className="w-[80%] max-w-[260px] rounded-2xl border border-slate/15 bg-white shadow-card-lg">
        <div className="flex items-center gap-2 border-b border-slate/10 px-3 py-2">
          <span className="h-5 w-5 rounded-full bg-[#25D366]" />
          <span className="h-1.5 w-14 rounded-full bg-slate/50" />
        </div>
        <div className="space-y-1.5 p-3 text-[10px] leading-snug">
          <p className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-lime px-2.5 py-1.5 font-semibold text-slate">Yarın randevu var mı?</p>
          <p className="w-fit max-w-[90%] rounded-xl rounded-bl-sm bg-light px-2.5 py-1.5 text-slate">Uygun saatler: 10.00 ve 14.30</p>
          <p className="ml-auto w-fit rounded-xl rounded-br-sm bg-lime px-2.5 py-1.5 font-semibold text-slate">14.30 olsun</p>
        </div>
      </div>
    </Frame>
  );
}

function WebChat() {
  return (
    <Frame>
      <div className="relative w-[84%] overflow-hidden rounded-xl border border-slate/15 bg-white shadow-card-lg">
        <div className="flex items-center gap-1 border-b border-slate/10 bg-light px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
        </div>
        <div className="space-y-1.5 p-3">
          <div className="h-2 w-1/2 rounded bg-slate/70" />
          <div className="h-1.5 w-3/4 rounded bg-slate/15" />
          <div className="h-1.5 w-2/3 rounded bg-slate/15" />
          <div className="h-10 w-1/2 rounded-md bg-light" />
        </div>
        <div className="absolute bottom-2 right-2 w-[55%] rounded-xl border border-slate/15 bg-white p-2 text-[9px] leading-snug shadow-card-lg">
          <p className="w-fit rounded-lg bg-light px-2 py-1 text-slate">Merhaba, nasıl yardımcı olabilirim?</p>
          <p className="ml-auto mt-1 w-fit rounded-lg bg-lime px-2 py-1 font-semibold text-slate">Kargo ne zaman?</p>
        </div>
      </div>
    </Frame>
  );
}

function Dm() {
  return (
    <Frame>
      <div className="flex w-[88%] items-center gap-2">
        <div className="flex-1 rounded-xl border border-slate/15 bg-white p-2.5 shadow-card">
          <p className="text-[9px] font-bold text-slate/50">Yorum</p>
          <p className="mt-1 text-[11px] font-bold text-slate">“FİYAT”</p>
        </div>
        <span className="text-slate/40">→</span>
        <div className="flex-1 rounded-xl border border-slate bg-slate p-2.5 shadow-card">
          <p className="text-[9px] font-bold text-white/60">Kural</p>
          <p className="mt-1 whitespace-nowrap text-[11px] font-bold text-lime">Kelime eşleşti</p>
        </div>
        <span className="text-slate/40">→</span>
        <div className="flex-1 rounded-xl border border-slate/15 bg-white p-2.5 shadow-card">
          <p className="text-[9px] font-bold text-slate/50">DM</p>
          <p className="mt-1 whitespace-nowrap text-[11px] font-bold text-slate">Yanıt gitti</p>
        </div>
      </div>
    </Frame>
  );
}

function Flow() {
  const nodes = [
    { x: 10, y: 22, t: "Form" },
    { x: 54, y: 10, t: "CRM" },
    { x: 54, y: 56, t: "E-posta" },
    { x: 10, y: 66, t: "Tablo" }
  ];
  return (
    <Frame>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <path d="M30 30 C 42 30, 42 18, 54 18" className="fill-none stroke-slate/40" strokeWidth="0.8" strokeDasharray="2 1.5" vectorEffect="non-scaling-stroke" />
        <path d="M30 30 C 42 30, 42 64, 54 64" className="fill-none stroke-slate/40" strokeWidth="0.8" strokeDasharray="2 1.5" vectorEffect="non-scaling-stroke" />
        <path d="M54 64 C 42 64, 42 74, 30 74" className="fill-none stroke-lime" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
      {nodes.map((n, i) => (
        <span
          key={n.t}
          className={cn(
            "absolute flex w-[34%] items-center gap-1.5 whitespace-nowrap rounded-xl border px-2 py-2 text-[10px] font-bold shadow-card",
            i === 0 ? "border-slate bg-slate text-white" : "border-slate/15 bg-white text-slate"
          )}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className={cn("h-2 w-2 shrink-0 rounded-full", i === 0 ? "bg-lime" : "bg-slate/30")} />
          {n.t}
        </span>
      ))}
    </Frame>
  );
}

function Phone() {
  const wave = [3, 6, 10, 7, 12, 9, 5, 8, 11, 6, 4, 7, 10, 5];
  return (
    <Frame>
      <div className="w-[62%] min-w-[150px] rounded-2xl border border-slate/15 bg-white p-3 shadow-card-lg">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lime text-[11px] font-bold text-slate">AI</span>
          <div>
            <div className="h-1.5 w-16 rounded-full bg-slate/70" />
            <div className="mt-1 h-1.5 w-10 rounded-full bg-slate/20" />
          </div>
        </div>
        <div className="mt-3 flex h-8 items-center gap-[3px]">
          {wave.map((h, i) => (
            <span key={i} className="w-full rounded-full bg-slate/70" style={{ height: `${h * 2.2}px` }} />
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-light px-2 py-1.5 text-[10px] font-semibold text-slate/80">Not ekibe iletildi</div>
      </div>
    </Frame>
  );
}

function Web() {
  return (
    <Frame>
      <div className="w-[82%] overflow-hidden rounded-xl border border-slate/15 bg-white shadow-card-lg">
        <div className="flex items-center gap-1 border-b border-slate/10 bg-light px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
          <span className="h-1.5 w-1.5 rounded-full bg-slate/30" />
          <span className="ml-2 h-2.5 flex-1 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-[1.3fr_1fr] gap-2 p-3">
          <div>
            <div className="h-2.5 w-4/5 rounded bg-slate" />
            <div className="mt-1.5 h-2.5 w-3/5 rounded bg-slate" />
            <div className="mt-2 h-1.5 w-full rounded bg-slate/15" />
            <div className="mt-1 h-1.5 w-4/5 rounded bg-slate/15" />
            <span className="mt-2.5 inline-block h-4 w-14 rounded-full bg-lime" />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-lime/70 to-slate/60" />
        </div>
        <div className="grid grid-cols-3 gap-2 px-3 pb-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 rounded-md bg-light" />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function App() {
  return (
    <Frame>
      <div className="relative aspect-[9/18] h-[80%] rounded-[22px] border-[5px] border-slate bg-white shadow-card-lg">
        <div className="mx-auto mt-1 h-1 w-8 rounded-full bg-slate/20" />
        <div className="space-y-1.5 p-2">
          <div className="h-2 w-2/3 rounded bg-slate" />
          <div className="grid grid-cols-2 gap-1">
            <div className="h-8 rounded-md bg-lime" />
            <div className="h-8 rounded-md bg-light" />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-1 rounded-md bg-light p-1">
              <span className="h-3 w-3 rounded bg-slate/30" />
              <span className="h-1.5 flex-1 rounded bg-slate/20" />
            </div>
          ))}
        </div>
        <div className="absolute bottom-1.5 left-2 right-2 flex justify-around">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className={cn("h-1.5 w-1.5 rounded-full", i === 0 ? "bg-slate" : "bg-slate/25")} />
          ))}
        </div>
      </div>
      <div className="absolute right-[12%] top-[22%] w-[26%] rounded-lg border border-slate/15 bg-white p-2 shadow-card">
        <div className="h-1.5 w-3/4 rounded bg-slate/60" />
        <div className="mt-1 h-1.5 w-1/2 rounded bg-lime" />
      </div>
    </Frame>
  );
}

function Game() {
  return (
    <Frame>
      <div className="relative aspect-[18/9] w-[80%] rounded-[18px] border-[5px] border-slate bg-gradient-to-b from-light to-lime/40 shadow-card-lg">
        <span className="absolute bottom-[18%] left-[12%] h-[30%] w-[12%] rounded-md bg-slate" />
        <span className="absolute bottom-[18%] left-[34%] h-[18%] w-[18%] rounded-full bg-lime ring-2 ring-slate" />
        <span className="absolute right-[14%] top-[20%] h-[22%] w-[10%] rotate-12 rounded-sm bg-slate/70" />
        <span className="absolute bottom-[10%] left-0 right-0 h-[8%] bg-slate/20" />
        <span className="absolute left-2 top-1.5 rounded-full bg-white px-1.5 text-[9px] font-bold text-slate">★ 120</span>
      </div>
    </Frame>
  );
}


function Film() {
  return (
    <Frame>
      <div className="w-[82%] rounded-xl bg-slate p-2 shadow-card-lg">
        <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-slate via-slate/70 to-lime/70">
          <span className="absolute left-2 top-2 rounded-full bg-lime px-2 py-0.5 text-[9px] font-bold text-slate">AI</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90">
              <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[9px] border-y-transparent border-l-slate" />
            </span>
          </div>
        </div>
        <div className="mt-2 flex gap-1">
          {[40, 25, 20, 15].map((w, i) => (
            <span key={i} className={cn("h-3 rounded-sm", i === 1 ? "bg-lime" : "bg-white/25")} style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </Frame>
  );
}

function Dashboard() {
  return (
    <Frame>
      <div className="w-[84%] overflow-hidden rounded-xl border border-slate/15 bg-white shadow-card-lg">
        <div className="grid grid-cols-[28%_1fr]">
          <div className="space-y-1.5 bg-slate p-2">
            <span className="block h-2 w-3/4 rounded bg-lime" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="block h-1.5 w-full rounded bg-white/25" />
            ))}
          </div>
          <div className="p-2.5">
            <div className="grid grid-cols-3 gap-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className={cn("h-7 rounded-md", i === 0 ? "bg-lime/70" : "bg-light")} />
              ))}
            </div>
            <div className="mt-2 space-y-1">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-1.5 rounded bg-light px-1.5 py-1">
                  <span className="h-1.5 w-1/3 rounded bg-slate/40" />
                  <span className="h-1.5 flex-1 rounded bg-slate/15" />
                  <span className={cn("h-2 w-6 rounded-full", i % 2 ? "bg-slate/20" : "bg-lime")} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const MAP: Record<VisualKind, () => JSX.Element> = { social: Social, video: Video, film: Film, ads: Ads, chat: Chat, webchat: WebChat, dm: Dm, flow: Flow, phone: Phone, web: Web, dashboard: Dashboard, app: App, game: Game };

export function Illustration({ kind, className }: { kind: VisualKind; className?: string }) {
  const C = MAP[kind];
  return (
    <div className={cn("h-full w-full", className)}>
      <C />
    </div>
  );
}
