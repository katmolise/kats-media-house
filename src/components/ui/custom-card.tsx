
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  isHoverable?: boolean;
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, children, header, footer, isHoverable, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "border border-border/50 bg-background",
          isHoverable && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {header && <CardHeader>{header}</CardHeader>}
        <CardContent>{children}</CardContent>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    );
  }
);

CustomCard.displayName = "CustomCard";

export { CustomCard };
