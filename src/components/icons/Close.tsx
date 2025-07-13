import { SVGProps } from "react";

export const CloseIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#0E121B"
      d="m12 10.727 4.455-4.455 1.273 1.273L13.273 12l4.455 4.455-1.273 1.273L12 13.273l-4.455 4.455-1.273-1.273L10.727 12 6.272 7.545l1.273-1.273L12 10.727Z"
      opacity={0.4}
    />
  </svg>
);
