"use client";

import { cn } from "@/utils/cn";
import { Bage, BageProps } from "./bage";

export type BageSelectOption = {
  label: string;
  value: string;
  meta?: Record<
    string,
    string | number | boolean | null | undefined | React.ReactNode
  >;
};

export type BageSelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  options: BageSelectOption[];
  renderValue?: (value: BageSelectOption, isActive: boolean) => React.ReactNode;
  className?: string;
  bageSize?: BageProps["size"];
};

export const BageSelect = ({
  value,
  onChange,
  options,
  renderValue,
  className,
  bageSize,
}: BageSelectProps) => {
  const handleClick = (value: string) => {
    onChange?.(value);
  };

  return (
    <div className={cn("flex gap-[8px] flex-wrap", className)}>
      {options.map((option) =>
        renderValue ? (
          <ButtonSelectItem
            bageSize={bageSize}
            isActive={option.value === value}
            key={option.value}
            onClick={() => handleClick(option.value)}
          >
            {renderValue(option, option.value === value)}
          </ButtonSelectItem>
        ) : (
          <ButtonSelectItem
            bageSize={bageSize}
            isActive={option.value === value}
            key={option.value}
            onClick={() => handleClick(option.value)}
          >
            {option.label}
          </ButtonSelectItem>
        )
      )}
    </div>
  );
};

function ButtonSelectItem({
  children,
  onClick,
  isActive,
  bageSize,
}: {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  bageSize?: BageProps["size"];
}) {
  return (
    <Bage variant={isActive ? "active" : "muted"} asChild size={bageSize}>
      <button
        className="cursor-pointer shrink-0 text-[14px] font-medium"
        onClick={onClick}
      >
        {children}
      </button>
    </Bage>
  );
}
