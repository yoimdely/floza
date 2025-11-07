import { cn } from "@/lib/cn";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium",
        "bg-gradient-to-r from-emerald-300 to-emerald-500 text-ink hover:opacity-90 transition shadow-soft",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
