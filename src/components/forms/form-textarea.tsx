
import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export function FormTextarea({
  className,
  label,
  error,
  required,
  id,
  ...props
}: FormTextareaProps) {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <div className={cn("space-y-2", className)}>
      <Label 
        htmlFor={textareaId}
        className={cn(required && "after:content-['*'] after:ml-0.5 after:text-red-500")}
      >
        {label}
      </Label>
      <Textarea
        id={textareaId}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(error && "border-red-500")}
        required={required}
        {...props}
      />
      {error && (
        <p 
          id={`${textareaId}-error`}
          className="text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}
