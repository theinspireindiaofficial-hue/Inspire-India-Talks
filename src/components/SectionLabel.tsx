import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  index?: number;
  className?: string;
  align?: "left" | "center";
}

/**
 * SectionLabel
 * Editorial kicker used above section headlines.
 * Renders as: "—— 01 / Chapter Name"
 */
const SectionLabel = ({ children, index, className, align = "left" }: SectionLabelProps) => {
  const padded = typeof index === "number" ? String(index).padStart(2, "0") : null;
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary",
        align === "center" && "justify-center",
        className
      )}
      data-testid="section-label"
    >
      <span aria-hidden className="h-px w-10 bg-primary/60" />
      {padded && (
        <span className="font-serif text-foreground/40 tracking-[0.2em]">{padded}</span>
      )}
      {padded && (
        <span aria-hidden className="text-foreground/30">/</span>
      )}
      <span>{children}</span>
    </div>
  );
};

export default SectionLabel;
