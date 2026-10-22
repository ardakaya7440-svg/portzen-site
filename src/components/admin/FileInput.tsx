"use client";

import * as React from "react";

/**
 * Dosya seçimi + anında önizleme. Tarayıcı tarafı kontrol yalnızca kolaylık içindir;
 * asıl tür/boyut doğrulaması sunucuda yapılır.
 */
export function FileInput({
  id,
  name,
  accept,
  multiple = false,
  required = false,
  maxBytes = 4 * 1024 * 1024,
  fit = "contain"
}: {
  id: string;
  name: string;
  accept: string;
  multiple?: boolean;
  required?: boolean;
  maxBytes?: number;
  fit?: "contain" | "cover";
}) {
  const [items, setItems] = React.useState<{ url: string; name: string; video: boolean }[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => () => items.forEach((i) => URL.revokeObjectURL(i.url)), [items]);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const list = Array.from(e.target.files ?? []);
    const big = list.find((f) => f.size > maxBytes);
    if (big) {
      setError(`“${big.name}” ${Math.round(maxBytes / 1024 / 1024)} MB sınırını aşıyor.`);
      e.target.value = "";
      setItems([]);
      return;
    }
    setError(null);
    setItems(list.map((f) => ({ url: URL.createObjectURL(f), name: f.name, video: f.type.startsWith("video/") })));
  }

  return (
    <div className="flex flex-col gap-3">
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        required={required}
        onChange={onChange}
        aria-describedby={error ? `${id}-err` : undefined}
        className="block w-full text-sm text-slate file:mr-3 file:min-h-[40px] file:rounded-full file:border-0 file:bg-slate file:px-4 file:text-sm file:font-bold file:text-white hover:file:bg-slate/90"
      />
      {error && (
        <p id={`${id}-err`} role="alert" className="text-sm font-semibold text-red-700">
          {error}
        </p>
      )}
      {items.length > 0 && (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((i) => (
            <li key={i.url} className="overflow-hidden rounded-xl border border-slate/15 bg-[repeating-conic-gradient(#f3f7f9_0_25%,#fff_0_50%)] bg-[length:16px_16px]">
              {i.video ? (
                <video src={i.url} className="aspect-video w-full object-contain" muted controls />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={i.url} alt="" className={`aspect-video w-full ${fit === "cover" ? "object-cover" : "object-contain p-3"}`} />
              )}
              <p className="truncate border-t border-slate/10 bg-white px-2 py-1 text-xs text-slate/70">{i.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
