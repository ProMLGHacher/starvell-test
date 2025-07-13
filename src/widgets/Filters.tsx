"use client";

import { LightningIcon } from "@/components/icons/Lightning";
import { BageSelect } from "@/components/ui/bage-select";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const filters = [
  { label: "Все", value: "Все" },
  { label: "Бели", value: "Бели" },
  { label: "Аккаунты", value: "Аккаунты" },
  { label: "Предметы", value: "Предметы" },
  { label: "VIP-сервер", value: "VIP-сервер" },
  { label: "Услуги", value: "Услуги" },
  { label: "Гайды", value: "Гайды" },
];

export const Filters = () => {
  const [filter, setFilter] = useState<string>("");

  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[4px]">
        <BageSelect
          options={filters}
          value={filter}
          onChange={setFilter}
          bageSize="lg"
          className="gap-1"
        />
        <Select>
          <SelectTrigger className="w-[168px] h-[36px] shadow-none">
            <SelectValue
              className="border-[#E8EBF0]"
              placeholder="Способ доставки"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Первый способ</SelectItem>
            <SelectItem value="dark">Второй способ</SelectItem>
            <SelectItem value="system">Третий способ</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-[4px]">
        <label
          htmlFor="online"
          className="flex items-center gap-[8px] h-[36px] border border-[#E8EBF0] rounded-[8px] px-[12px] py-[8px]"
        >
          <span className="text-[14px] font-normal text-muted">
            Только продавцы онлайн
          </span>
          <Switch id="online" />
        </label>
        <label
          htmlFor="delivery"
          className="flex items-center gap-[8px] h-[36px] border border-[#E8EBF0] rounded-[8px] px-[12px] py-[8px]"
        >
          <LightningIcon className="size-[12px] animate-bounce" />
          <span className="text-[14px] font-normal text-muted">
            Моментальная доставка
          </span>
          <Switch id="delivery" />
        </label>
        <Input
          className="placeholder:text-[#9E9DA4] text-[14px] placeholder:text-[14px] shadow-none"
          wrapperClassName="w-[317px] h-[36px] shadow-none"
          suffix={<SearchIcon className="size-[16px]" color="#9A9BA3" />}
          placeholder="Поиск по описанию лота..."
        />
      </div>
    </div>
  );
};
