/**
 * Uzun açıklama bölümlerini açılır hâle getirir. İçerik silinmez; sayfada (HTML'de) durur,
 * yalnızca varsayılan olarak kapalıdır. Başlık her zaman görünür.
 */
export function MoreDetails({ title, summary, children }: { title: string; summary?: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-slate/10 bg-white">
      <details className="group mx-auto max-w-container px-6">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block text-xl font-bold text-slate lg:text-2xl">{title}</span>
            {summary && <span className="mt-1 block text-[15px] text-slate/70">{summary}</span>}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate/20 text-2xl font-light text-slate transition-transform group-open:rotate-45" aria-hidden>
            +
          </span>
        </summary>
        <div className="-mx-6 pb-4">{children}</div>
      </details>
    </section>
  );
}
