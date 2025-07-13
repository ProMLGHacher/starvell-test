import { cn } from "@/utils";

interface SortIconProps {
  className?: string;
  sortState?: "asc" | "desc" | undefined | null | false;
}

export function SortIcon({ className, sortState }: SortIconProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[2px] text-[#6E7076] size-[12px] px-[2px] py-[1px]",
        className
      )}
    >
      <svg
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "size-0 w-[8px] h-[4px]",
          sortState === "asc" && "text-primary"
        )}
      >
        <path
          d="M1.93137 4C1.32555 4 1.02265 4 0.882383 3.8802C0.760678 3.77626 0.696091 3.62033 0.708648 3.46077C0.723121 3.27688 0.937309 3.06269 1.36569 2.63431L3.43431 0.565685C3.63232 0.367677 3.73133 0.268673 3.84549 0.231579C3.94591 0.19895 4.05409 0.19895 4.15451 0.231579C4.26867 0.268673 4.36768 0.367677 4.56569 0.565686L6.63432 2.63432C7.06269 3.06269 7.27688 3.27688 7.29135 3.46077C7.30391 3.62033 7.23932 3.77626 7.11762 3.8802C6.97735 4 6.67445 4 6.06863 4H1.93137Z"
          fill="currentColor"
        />
      </svg>
      <svg
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "size-0 w-[8px] h-[4px]",
          sortState === "desc" && "text-primary"
        )}
      >
        <path
          d="M1.93137 0C1.32555 0 1.02265 0 0.882383 0.119797C0.760678 0.223743 0.696091 0.37967 0.708648 0.53923C0.723121 0.723121 0.937309 0.937309 1.36569 1.36569L3.43431 3.43431C3.63232 3.63232 3.73133 3.73133 3.84549 3.76842C3.94591 3.80105 4.05409 3.80105 4.15451 3.76842C4.26867 3.73133 4.36768 3.63232 4.56569 3.43431L6.63432 1.36568C7.06269 0.937309 7.27688 0.723121 7.29135 0.53923C7.30391 0.37967 7.23932 0.223743 7.11762 0.119797C6.97735 0 6.67445 0 6.06863 0H1.93137Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
