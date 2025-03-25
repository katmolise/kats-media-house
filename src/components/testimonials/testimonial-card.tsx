
import React from "react";
import { CustomCard } from "@/components/ui/custom-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <CustomCard className={cn("h-full", className)}>
      <div className="flex flex-col h-full">
        <blockquote className="flex-1 mb-6 text-lg italic text-muted-foreground">
          "{quote}"
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={author} />
            ) : null}
            <AvatarFallback>{getInitials(author)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            {(role || company) && (
              <p className="text-sm text-muted-foreground">
                {role}
                {role && company && ", "}
                {company}
              </p>
            )}
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
