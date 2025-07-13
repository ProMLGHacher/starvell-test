import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/index";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ring-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary not-disabled:hover:bg-primary-hover text-primary-foreground shadow-[0px_0px_0px_1px_#4665d2,0px_1px_2px_0px_#3959cc80]",
        secondary:
          "bg-secondary not-disabled:hover:bg-secondary-hover text-secondary-foreground shadow-[0px_0px_0px_1px_#313131,0px_1px_2px_0px_#1F2126]",
        ghost:
          "bg-tertiary not-disabled:hover:bg-tertiary-hover border border-tertiary text-foreground shadow-[0px_0px_0px_1px_#12376914,0px_1px_2px_0px_#A4ACB93D]",
        clean: "bg-transparent text-foreground p-0! h-fit! w-fit!",
      },
      size: {
        sm: "h-8 rounded-md gap-1.5 px-3 text-xs",
        md: "h-[32px] px-[12px] py-[6px] text-sm font-medium",
        lg: "h-[36px] rounded-[8px] px-[16px] py-[8px] text-sm font-medium",
        xl: "h-[40px] rounded-[8px] px-[16px] py-[8px] text-base font-medium",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      aria-disabled={props.disabled}
      className={cn(
        buttonVariants({ size, variant, className }),
        "disabled:cursor-not-allowed",
        "aria-disabled:cursor-not-allowed"
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
