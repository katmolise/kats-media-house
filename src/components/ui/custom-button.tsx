
import React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  isFullWidth?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, icon, isFullWidth, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "font-medium transition-all",
          isFullWidth && "w-full",
          icon && "flex items-center gap-2",
          className
        )}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
