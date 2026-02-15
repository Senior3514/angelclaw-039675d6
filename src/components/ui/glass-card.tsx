import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "amber" | "red" | "none";
  aurora?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = "none", aurora = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl glass p-5 transition-all duration-300",
          glow === "cyan" && "glow-cyan",
          glow === "amber" && "glow-amber",
          glow === "red" && "glow-red",
          aurora && "aurora-border",
          "hover:border-border/70",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
