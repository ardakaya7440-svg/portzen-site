import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const baseFieldStyles =
  "w-full rounded-3xl border border-white/[0.08] bg-[#0a1428] [color-scheme:dark] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(baseFieldStyles, props.className)} {...props} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(baseFieldStyles, "min-h-[180px] resize-y", props.className)} {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(baseFieldStyles, props.className)} {...props} />;
}

export function Label({
  children,
  htmlFor,
  optional
}: {
  children: string;
  htmlFor: string;
  optional?: boolean;
}) {
  return (
    <label className="mb-2 block text-sm font-medium text-white/70" htmlFor={htmlFor}>
      {children}
      {optional ? (
        <span className="ml-2 text-xs font-normal text-white/40">(Opsiyonel)</span>
      ) : null}
    </label>
  );
}
