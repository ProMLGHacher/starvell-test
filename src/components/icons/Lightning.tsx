import { SVGProps } from "react";

export const LightningIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#4E75FF"
      d="M6.996 1.062a.5.5 0 0 0-.88-.383L1.65 6.037c-.077.093-.155.186-.212.269a.783.783 0 0 0-.155.432c-.004.23.099.45.278.595.157.126.337.149.432.158.1.009.222.009.342.009h3.098l-.43 3.438a.5.5 0 0 0 .88.382l4.465-5.358c.077-.093.155-.186.212-.269a.784.784 0 0 0 .155-.432.75.75 0 0 0-.278-.595.784.784 0 0 0-.432-.157c-.1-.01-.222-.01-.342-.01H6.566l.43-3.437Z"
    />
  </svg>
);
