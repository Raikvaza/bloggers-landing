import { cn } from "@/shared/utils/common";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label
            className="pb-2 pl-3 text-sm font-medium text-gray-700"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(
            "file:text-foreground border-[1px] border-[#1717191F] focus:border-bg-accent",
            "placeholder:text-[#171719E0]",
            "flex h-[53px] w-full rounded-[24px] border bg-transparent",
            "px-[14px] py-[6px]",
            "text-sm shadow-sm transition-colors",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium",
            "focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
