"use client";

import { BageSelect, type BageSelectOption } from "@/components/ui/bage-select";
import { useState } from "react";

const options: BageSelectOption[] = [
  { label: "Робуксы", value: "Робуксы", meta: { count: 395 } },
  {
    label: "Подарочные карты",
    value: "Подарочные карты",
    meta: { count: 1193 },
  },
  {
    label: "Донат робуксов (паки)",
    value: "Донат робуксов (паки)",
    meta: { count: 777 },
  },
  { label: "Premium", value: "Premium", meta: { count: 1193 } },
  { label: "VIP-сервер", value: "VIP-сервер", meta: { count: 395 } },
  { label: "Аккаунты", value: "Аккаунты", meta: { count: 1193 } },
  { label: "Скины", value: "Скины", meta: { count: 777 } },
  { label: "Prime Gaming", value: "Prime Gaming", meta: { count: 395 } },
  { label: "Studio", value: "Studio", meta: { count: 1193 } },
  { label: "Прочее", value: "Прочее", meta: { count: 395 } },
  { label: "Adopt Me", value: "Adopt Me", meta: { count: 1193 } },
  { label: "Anime Defenders", value: "Anime Defenders", meta: { count: 777 } },
  {
    label: "Arm Wrestle Simulator",
    value: "Arm Wrestle Simulator",
    meta: { count: 1193 },
  },
  { label: "ASTD", value: "ASTD", meta: { count: 395 } },
  { label: "Blade Ball", value: "Blade Ball", meta: { count: 1193 } },
  { label: "Blox Fruits", value: "Blox Fruits", meta: { count: 777 } },
  { label: "Da Hood", value: "Da Hood", meta: { count: 395 } },
  { label: "GPO", value: "GPO", meta: { count: 1193 } },
  { label: "Jailbreak", value: "Jailbreak", meta: { count: 777 } },
  {
    label: "Jujutsu Shenanigans",
    value: "Jujutsu Shenanigans",
    meta: { count: 395 },
  },
  { label: "King Legacy", value: "King Legacy", meta: { count: 1193 } },
  { label: "MM2", value: "MM2", meta: { count: 777 } },
  {
    label: "Pet Simulator 99",
    value: "Pet Simulator 99",
    meta: { count: 1193 },
  },
  { label: "Pet Simulator X", value: "Pet Simulator X", meta: { count: 395 } },
  { label: "Project Slayers", value: "Project Slayers", meta: { count: 1193 } },
  {
    label: "Toilet Tower Defense",
    value: "Toilet Tower Defense",
    meta: { count: 777 },
  },
  {
    label: "Tower Defense Simulator",
    value: "Tower Defense Simulator",
    meta: { count: 395 },
  },
  { label: "YBA", value: "YBA", meta: { count: 1193 } },
  { label: "Прочие игры", value: "Прочие игры", meta: { count: 777 } },
];

export const CaregorySelect = ({ className }: { className?: string }) => {
  const [value, setValue] = useState("Blox Fruits");

  return (
    <BageSelect
      className={className}
      value={value}
      onChange={setValue}
      options={options}
      renderValue={(value) => {
        return (
          <span className="flex items-center gap-[6px] shrink-0">
            <span className="text-[14.15px] font-medium">{value.label}</span>
            <span className="text-[11px] font-semibold">
              {value.meta?.count}
            </span>
          </span>
        );
      }}
    />
  );
};
