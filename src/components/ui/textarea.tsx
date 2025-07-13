"use client";

import { cn } from "@/utils/index";
import { useState } from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      data-slot="textarea"
      data-value={`${value.length} / 200`}
      className={cn(
        "relative border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "after:content-['hello'] after:absolute after:bottom-[10px] after:right-[10px] after:z-10 after:text-sm after:text-muted-foreground",
        className
      )}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
}

export { Textarea };
