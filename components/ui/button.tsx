import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

export function buttonStyles({
  variant = "primary",
  size = "md",
  fullWidth = false
}: {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-60",
    variant === "primary" &&
      "bg-[#0d1726] text-white shadow-[0_16px_36px_rgba(9,17,29,0.2)] hover:-translate-y-0.5 hover:bg-[#132236]",
    variant === "secondary" &&
      "border border-white/12 bg-white/6 text-white hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/10",
    variant === "ghost" && "text-inherit hover:bg-white/8",
    variant === "light" &&
      "border border-[#d8e2ff]/80 bg-[#edf2ff] text-[#09111d] shadow-[0_14px_34px_rgba(160,186,255,0.24)] hover:-translate-y-0.5 hover:bg-white",
    size === "sm" && "h-10 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    size === "lg" && "h-12 px-6 text-sm",
    fullWidth && "w-full"
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

export function Button({
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, size, fullWidth }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  };

export function ButtonLink({
  children,
  className,
  variant,
  size,
  fullWidth,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonStyles({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
