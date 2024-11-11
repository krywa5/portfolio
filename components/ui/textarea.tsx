import * as React from "react";

import { cn } from "@/lib/utils";
import ErrorMessage from "../ErrorMessage";

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string };

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative">
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          aria-invalid={!!error}
          {...props}
        />
        {error && <ErrorMessage message={error} />}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
