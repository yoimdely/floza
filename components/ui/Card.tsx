import { cn } from "@/lib/cn";
import React from "react";

export default function Card({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={cn("glass rounded-2xl p-6", className)}>{children}</div>;
}
