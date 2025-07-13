import { cn } from "@/utils/cn";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("max-w-[1256px] mx-auto px-16", className)}>
      {children}
    </div>
  );
};
