import { SVGProps } from "react";

export const UploadIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#36394A"
      fillRule="evenodd"
      d="M19.491 8.187A6 6 0 0 1 18 20H6.5A6.5 6.5 0 0 1 4.968 7.181a8.003 8.003 0 0 1 14.523 1.005Zm-12.198 4.52a1 1 0 0 0 1.414 0L11 10.414V16a1 1 0 1 0 2 0v-5.586l2.293 2.293a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
