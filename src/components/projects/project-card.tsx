
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CustomCard } from "@/components/ui/custom-card";
import { CustomImage } from "@/components/ui/custom-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  className?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  categories,
  className,
}: ProjectCardProps) {
  return (
    <CustomCard
      isHoverable
      className={cn("overflow-hidden", className)}
    >
      <div className="relative">
        <CustomImage
          src={imageUrl}
          alt={title}
          aspectRatio={16/9}
          className="w-full"
        />
        <div className="absolute top-2 right-2 flex flex-wrap gap-1 max-w-[calc(100%-16px)]">
          {categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          ))}
          {categories.length > 2 && (
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              +{categories.length - 2}
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <Link 
          to={`/case-study/${id}`}
          className="inline-flex items-center text-primary hover:underline gap-1"
        >
          View Details <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </CustomCard>
  );
}
