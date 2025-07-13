import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";

const bageVariants = cva("disabled:opacity-40 transition-colors", {
  variants: {
    variant: {
      muted: "bg-primary-muted/8 text-primary-muted",
      active: "bg-primary-muted text-white",
    },
    size: {
      sm: "h-8 rounded-sm gap-1.5 px-3 text-xs",
      md: "h-[32px] px-[12px] py-[6px] text-sm font-medium rounded-md",
      lg: "h-[36px] px-[12px] py-[8px] text-sm font-medium rounded-md",
    },
  },
  defaultVariants: {
    variant: "muted",
    size: "md",
  },
});

export type BageProps = React.ComponentProps<"div"> &
  VariantProps<typeof bageVariants> & { asChild?: boolean };

export const Bage = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BageProps) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={cn(bageVariants({ variant, size, className }))}
      {...props}
    />
  );
};
