import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function SectionLabel({ children }: Props) {
  return (
    <div
      className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em]"
      style={{
        background: "rgba(0,102,255,0.08)",
        border: "1px solid rgba(0,102,255,0.18)",
        color: "rgba(0,170,255,0.80)",
      }}
    >
      <span className="w-1 h-1 rounded-full bg-[#0066ff]" aria-hidden="true" />
      {children}
    </div>
  );
}
