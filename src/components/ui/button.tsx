"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Neobrutalist button — extracted & reskinned from 21st.dev `Button21`
 * (it was already border-2 + hard-shadow neobrutalist). Border + 6px offset
 * shadow that collapses toward the surface on hover; vivid fills (revision §2).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-base border-3 border-ink font-extrabold uppercase tracking-[0.02em] shadow-brutal transition-all duration-150 ease-brutal hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-lg active:translate-x-0 active:translate-y-0 active:shadow-brutal-sm focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:stroke-[2.5]",
  {
    variants: {
      variant: {
        primary: "bg-brand-yellow text-ink",
        dark: "bg-ink text-paper",
        white: "bg-paper text-ink",
        pink: "bg-brand-pink text-ink",
        green: "bg-brand-green text-ink",
        blue: "bg-brand-blue text-paper",
      },
      size: {
        default: "h-12 px-6 text-small",
        sm: "h-10 px-4 text-small",
        lg: "h-14 px-8 text-body",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonVariants };
