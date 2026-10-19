import { ChevronDown } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

/** Thin Tailwind skin over the native <select> — full Radix Select isn't worth the weight here. */
function Select({
  className,
  wrapperClassName,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { wrapperClassName?: string }) {
  return (
    <span className={cn("relative inline-flex", wrapperClassName)}>
      <select
        className={cn(
          "h-9 w-full appearance-none rounded-md border border-input bg-card py-1 pl-3 pr-8 text-sm leading-tight shadow-xs outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
          className,
        )}
        {...props}
      />
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </span>
  );
}

export { Select };
