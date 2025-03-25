
import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  centered?: boolean;
  fullWidth?: boolean;
}

const SectionContainer = ({
  className,
  children,
  title,
  subtitle,
  centered = false,
  fullWidth = false,
  ...props
}: SectionContainerProps) => {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        !fullWidth && "container mx-auto px-4",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className={cn("mb-12", centered && "text-center")}>
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export { SectionContainer };
