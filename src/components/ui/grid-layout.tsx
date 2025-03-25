
import React from "react";
import { cn } from "@/lib/utils";

export interface GridLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: "none" | "sm" | "md" | "lg";
}

const gapClasses = {
  none: "gap-0",
  sm: "gap-2 md:gap-3",
  md: "gap-4 md:gap-6",
  lg: "gap-6 md:gap-8",
};

export function GridLayout({
  className,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "md",
  children,
  ...props
}: GridLayoutProps) {
  const getGridColumns = () => {
    const { sm = 1, md = 2, lg = 3 } = columns;
    return `grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg}`;
  };

  return (
    <div
      className={cn(
        "grid",
        gapClasses[gap],
        getGridColumns(),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
