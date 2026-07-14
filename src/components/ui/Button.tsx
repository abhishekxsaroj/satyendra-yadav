"use client";

import { forwardRef, useRef } from "react";
import { cn } from "@/utils/cn";
import { useMagnetic } from "@/hooks/useMagnetic";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-[0_8px_24px_rgba(37,99,235,0.25)] hover:bg-[#1d4ed8] hover:shadow-[0_12px_32px_rgba(37,99,235,0.3)]",
  secondary:
    "bg-card text-foreground border border-border hover:bg-hover shadow-[var(--shadow-sm)]",
  ghost: "bg-transparent text-secondary hover:text-foreground hover:bg-hover",
  outline:
    "bg-transparent text-primary border border-primary/30 hover:bg-primary-soft hover:border-primary/50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm gap-2",
  md: "h-12 px-6 text-sm gap-2.5",
  lg: "h-14 px-8 text-base gap-3",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      magnetic = false,
      href,
      target,
      rel,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const magneticRef = useMagnetic(0.3);
    const localRef = useRef<HTMLElement | null>(null);

    const setRefs = (node: HTMLElement | null) => {
      localRef.current = node;
      if (magnetic) {
        (magneticRef as React.MutableRefObject<HTMLElement | null>).current =
          node;
      }
      if (typeof ref === "function") {
        ref(node as HTMLButtonElement);
      } else if (ref) {
        ref.current = node as HTMLButtonElement;
      }
    };

    const classes = cn(
      "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out will-change-transform select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          ref={setRefs as React.Ref<HTMLAnchorElement>}
          className={classes}
          data-cursor="button"
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={setRefs as React.Ref<HTMLButtonElement>}
        type={type}
        className={classes}
        data-cursor="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
