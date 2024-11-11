import * as React from "react";

import { cn } from "@/lib/utils";
import ErrorMessage from "../ErrorMessage";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none",
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
Input.displayName = "Input";

export { Input };
