"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/utils/index";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-[#E8EBF0] inline-flex h-[16px] w-[28px] shrink-0 items-center rounded-full border-none transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-white pointer-events-none block size-3 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-[2px]",
          "shadow-[0px_2px_4px_0px_#0E121B0A,0px_4px_8px_0px_#1B1C1D0F]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
