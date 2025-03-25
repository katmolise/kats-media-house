
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function FormField({
  className,
  label,
  error,
  required,
  id,
  ...props
}: FormFieldProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <div className={cn("space-y-2", className)}>
      <Label 
        htmlFor={inputId}
        className={cn(required && "after:content-['*'] after:ml-0.5 after:text-red-500")}
      >
        {label}
      </Label>
      <Input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(error && "border-red-500")}
        required={required}
        {...props}
      />
      {error && (
        <p 
          id={`${inputId}-error`}
          className="text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
}
