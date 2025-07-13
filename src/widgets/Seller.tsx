import { RatingBage } from "@/components/ui/rating-bage";
import { cn } from "@/utils";

export type SellerProps = {
  name: string;
  avatar: string;
  rating: number;
  isOnline: boolean;
  timeOnSite: string;
  contOfRreviews: string;
};

export function Seller({
  name,
  avatar,
  rating,
  isOnline,
  timeOnSite,
  contOfRreviews,
}: SellerProps) {
  return (
    <div className="flex items-start gap-2">
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatar}
          alt={name}
          className={cn("object-cover relative overflow-hidden rounded-full")}
          width={28}
          height={28}
        />
        <div
          className={cn(
            "absolute bottom-[-2px] right-[-2px] size-[12px] rounded-full border-2 border-white",
            isOnline && "bg-[#1DB462]",
            !isOnline && "bg-[#9E9DA4]"
          )}
        />
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="font-medium text-base text-foreground">{name}</p>
          <RatingBage rating={rating} />
        </div>
        <p className="text-[#6E7076] text-[12px] font-normal leading-[18px]">
          {timeOnSite}, {contOfRreviews}
        </p>
      </div>
    </div>
  );
}
