import * as React from "react";

import { cn } from "@/utils/index";

interface InputProps
  extends Omit<React.ComponentProps<"input">, "prefix" | "suffix"> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  wrapperClassName?: string;
}

function Input({
  className,
  type,
  prefix,
  suffix,
  wrapperClassName,
  ...props
}: InputProps) {
  return (
    <div
      className={cn(
        "relative [&>svg]:size-5 [&>svg]:text-muted-foreground rounded-md shadow-[0px_1px_2px_0px_#99A1B029] border border-[#11264214] focus-within:border-[#11264229] px-3 py-1",
        wrapperClassName
      )}
    >
      {prefix && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 size-4">
          {prefix}
        </div>
      )}
      {suffix && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 size-4">
          {suffix}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        prefix="osdisdofij"
        className={cn(
          "file:text-foreground placeholder:text-[#6E7076] border-none selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-8 w-full min-w-0 rounded-md bg-transparent text-sm transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          "text-foreground placeholder:text-[#6E7076]",
          "w-full h-full",
          suffix && "pr-7",
          prefix && "pl-7",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
