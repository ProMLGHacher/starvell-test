import { SVGProps } from "react";

export const ArrowDownIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      stroke="#666D80"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M5.12 6.56 8 9.44l2.88-2.88"
    />
  </svg>
);
