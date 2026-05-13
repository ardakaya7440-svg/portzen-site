import Link from "next/link";

interface CtaBlockProps {
  title: string;
  description?: string;
}

export function CtaBlock({ title, description }: CtaBlockProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[2rem] p-8 sm:p-12"
      style={{
        background: "linear-gradient(135deg, rgba(0,102,255,0.12) 0%, rgba(0,68,204,0.06) 100%)",
        border: "1px solid rgba(0,102,255,0.20)",
      }}
    >
      <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold leading-snug text-white sm:text-2xl">{title}</h2>
          {description && (
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
              {description}
            </p>
          )}
        </div>
        <Link
          href="/iletisim"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#0055ee] to-[#0099ff] px-6 py-3 text-sm font-bold text-white shadow-[0_0_24px_rgba(0,102,255,0.35)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(0,102,255,0.50)]"
        >
          Analiz Al
          <span className="text-xs opacity-70">→</span>
        </Link>
      </div>
    </div>
  );
}
