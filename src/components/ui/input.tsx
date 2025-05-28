import * as React from "react";
import { cn } from "@/lib/utils";

type InputProps = {
  id: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, type, label, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          id={id}
          type={type}
          placeholder=" "
          ref={ref}
          className={cn(
            "peer w-full border border-gray-300 px-3 pt-5 pb-2 text-sm focus:border-[#0989ff] focus:ring-1 focus:ring-[#0989ff] focus:outline-none",
            className
          )}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-3 top-2 z-10 text-gray-500 text-xs bg-white px-1 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#0989ff]"
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

