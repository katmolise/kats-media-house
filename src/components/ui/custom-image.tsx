
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

export interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: number;
  fill?: boolean;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
}

const roundedClasses = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const CustomImage = React.forwardRef<HTMLImageElement, CustomImageProps>(
  ({ className, aspectRatio, fill, rounded = "none", alt = "", ...props }, ref) => {
    const imageComponent = (
      <img
        ref={ref}
        className={cn(
          "object-cover w-full h-full transition-opacity duration-300",
          roundedClasses[rounded],
          className
        )}
        alt={alt}
        loading="lazy"
        {...props}
      />
    );

    if (aspectRatio) {
      return (
        <AspectRatio ratio={aspectRatio} className="overflow-hidden">
          {imageComponent}
        </AspectRatio>
      );
    }

    if (fill) {
      return (
        <div className="relative w-full h-full">
          {imageComponent}
        </div>
      );
    }

    return imageComponent;
  }
);

CustomImage.displayName = "CustomImage";

export { CustomImage };
