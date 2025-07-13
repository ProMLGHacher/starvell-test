import { SVGProps } from "react";

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="m14 14-4-4m1.333-3.333a4.667 4.667 0 1 1-9.333 0 4.667 4.667 0 0 1 9.333 0Z"
      />
    </svg>
  );
};
