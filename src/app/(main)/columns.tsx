"use client";

import { LightningIcon } from "@/components/icons/Lightning";
import { PinIcon } from "@/components/icons/Pin";
import { Button } from "@/components/ui/button";
import { SortIcon } from "@/components/ui/sort-icon";
import { Seller } from "@/widgets/Seller";
import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  description: string;
  count: number;
  price: number;
  hot: boolean;
  pinned: boolean;
  seller: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    isOnline: boolean;
    timeOnSite: string;
    contOfRreviews: string;
  };
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "description",
    header: "Описание",
    enableSorting: true,
    cell: ({ row }) => {
      const description = row.original.description;
      return (
        <p className="text-base text-foreground font-normal leading-[24px]">
          {description}
        </p>
      );
    },
    meta: {
      className: "p-0 h-fit max-w-[640px] break-words tracking-[0%] pr-[18px]",
    },
  },
  {
    accessorKey: "seller",
    header: () => {
      return <span className="text-secondary-foreground">Продавец</span>;
    },
    cell: ({ row }) => {
      const seller = row.original.seller;
      return (
        <Seller
          avatar={seller.avatar}
          name={seller.name}
          rating={seller.rating}
          isOnline={seller.isOnline}
          timeOnSite={seller.timeOnSite}
          contOfRreviews={seller.contOfRreviews}
        />
      );
    },
    meta: {
      className: "w-[236px] p-0 h-fit",
    },
  },
  {
    accessorKey: "count",
    header: ({ column }) => {
      return (
        <div className="w-full flex justify-end">
          <Button
            variant="clean"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center gap-[4px]"
          >
            Наличие
            <SortIcon sortState={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const count = row.original.count;
      return (
        <p className="w-full text-end text-base text-foreground font-normal">
          {count >= 0
            ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            : "∞"}
        </p>
      );
    },
    meta: {
      className: "w-[126px] p-0 h-fit",
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="w-full flex justify-end">
          <Button
            variant="clean"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex items-center gap-[4px]"
          >
            Цена
            <SortIcon sortState={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const price = row.original.price;
      const hot = row.original.hot;
      const pinned = row.original.pinned;
      return (
        <div className="w-full flex justify-end">
          <div className="flex flex-col gap-1">
            <p className="text-base text-foreground font-semibold">
              {price.toFixed(2)} ₽
            </p>
            <div className="flex justify-end items-center gap-1">
              {hot && <LightningIcon className="size-[12px] animate-pulse" />}
              {pinned && <PinIcon className="size-[12px]" color="#F89E17" />}
            </div>
          </div>
        </div>
      );
    },
    meta: {
      className: "w-[126px] p-0 h-fit",
    },
  },
];
