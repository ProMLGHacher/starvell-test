import { cn } from "@/utils/cn";
import { StarIcon } from "../icons/Star";

export type RatingBageProps = {
  rating: number;
};

const getRatingBgColor = (rating: number) => {
  if (rating === 5) return "bg-[#1DB46214]";
  if (rating >= 4) return "bg-[#FFE50014]";
  if (rating >= 3) return "bg-[#FF8E2614]";
  return "bg-[#FF5C5C14]";
};

const getRatingTextColor = (rating: number) => {
  if (rating === 5) return "text-[#1DB462]";
  if (rating >= 4) return "text-[#E1B000]";
  if (rating >= 3) return "text-[#FF8E26]";
  return "text-[#FF5C5C]";
};

export function RatingBage({ rating }: RatingBageProps) {
  const ratingBgColor = getRatingBgColor(rating);
  const ratingTextColor = getRatingTextColor(rating);
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-md px-1 py-0.5 w-fit",
        ratingBgColor
      )}
    >
      <p
        className={cn(
          "text-[12px] font-semibold leading-[18px] tracking-[0%]",
          ratingTextColor
        )}
      >
        {rating.toFixed(1)}
      </p>
      <StarIcon className={cn("size-[12px]", ratingTextColor)} />
    </div>
  );
}
