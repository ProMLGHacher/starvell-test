import { SVGProps } from "react";

export const DiscordIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <ellipse cx={22} cy={12} fill="#5865F2" rx={12} ry={5} />
      <foreignObject width={124} height={124} x={-40} y={-40}>
        <div
          style={{
            backdropFilter: "blur(20px)",
            clipPath: "url(#b)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <g
        data-figma-bg-blur-radius={40}
        filter="url(#c)"
        transform="matrix(1 0 0 -1 0 44)"
      >
        <circle cx={22} cy={22} r={22} fill="#fff" fillOpacity={0.04} />
        <circle
          cx={22}
          cy={22}
          r={22}
          fill="url(#d)"
          fillOpacity={0.5}
          style={{
            mixBlendMode: "soft-light",
          }}
        />
        <circle
          cx={22}
          cy={22}
          r={21}
          stroke="url(#e)"
          strokeWidth={2}
          style={{
            mixBlendMode: "soft-light",
          }}
        />
      </g>
      <path
        fill="#5865F2"
        d="M29.636 15.34A18.76 18.76 0 0 0 25.097 14a12.19 12.19 0 0 0-.581 1.134 17.727 17.727 0 0 0-5.03 0A11.822 11.822 0 0 0 18.897 14a18.693 18.693 0 0 0-4.542 1.343c-2.872 4.078-3.65 8.055-3.262 11.975a18.61 18.61 0 0 0 5.567 2.68c.448-.58.848-1.195 1.192-1.844a12.045 12.045 0 0 1-1.877-.859 9.19 9.19 0 0 0 .46-.342c3.62 1.59 7.553 1.59 11.13 0 .15.118.304.233.46.342-.595.337-1.225.626-1.88.86.343.648.742 1.265 1.191 1.845a18.574 18.574 0 0 0 5.57-2.682c.457-4.544-.78-8.485-3.27-11.978Zm-11.29 9.567c-1.087 0-1.978-.953-1.978-2.113 0-1.16.872-2.116 1.977-2.116 1.106 0 1.997.953 1.978 2.116.002 1.16-.872 2.113-1.978 2.113Zm7.308 0c-1.086 0-1.977-.953-1.977-2.113 0-1.16.872-2.116 1.977-2.116 1.106 0 1.997.953 1.978 2.116 0 1.16-.872 2.113-1.978 2.113Z"
      />
    </g>
    <rect
      width={43}
      height={43}
      x={0.5}
      y={0.5}
      stroke="url(#f)"
      strokeOpacity={0.32}
      rx={21.5}
    />
    <defs>
      <linearGradient
        id="e"
        x1={14.709}
        x2={14.709}
        y1={0}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.49} />
      </linearGradient>
      <linearGradient
        id="f"
        x1={22}
        x2={22}
        y1={0}
        y2={44}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5865F2" />
        <stop offset={1} stopColor="#5865F2" stopOpacity={0.52} />
      </linearGradient>
      <clipPath id="b" transform="translate(40 40)">
        <circle cx={22} cy={22} r={22} transform="matrix(1 0 0 -1 0 44)" />
      </clipPath>
      <clipPath id="a">
        <rect width={44} height={44} fill="#fff" rx={22} />
      </clipPath>
      <radialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(103.031 8.543 18.794) scale(30.0649)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.49} />
      </radialGradient>
      <filter
        id="c"
        width={124}
        height={124}
        x={-40}
        y={-40}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          radius={5.6}
          result="effect1_innerShadow_147_2068"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.345098 0 0 0 0 0.396078 0 0 0 0 0.94902 0 0 0 0.04 0" />
        <feBlend in2="shape" result="effect1_innerShadow_147_2068" />
      </filter>
    </defs>
  </svg>
);
