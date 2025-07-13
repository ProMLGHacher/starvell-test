import { SVGProps } from "react";

export const TelegramIcon = (
  props: SVGProps<SVGSVGElement>
): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <ellipse cx={22} cy={12} fill="#23A5E6" rx={12} ry={5} />
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
        fill="#37BBFE"
        d="M30.983 15.382c.156-.921-.801-1.648-1.697-1.288l-17.83 7.157a.704.704 0 0 0 .07 1.34l3.678 1.072a2.558 2.558 0 0 0 2.075-.289l8.29-5.236c.25-.159.522.167.309.368L19.91 24.13a1.162 1.162 0 0 0 .232 1.87l6.682 3.83c.75.43 1.713-.002 1.853-.83l2.306-13.62Z"
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
        <stop stopColor="#23A5E6" />
        <stop offset={1} stopColor="#23A5E6" stopOpacity={0.52} />
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
          result="effect1_innerShadow_147_2064"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.137255 0 0 0 0 0.647059 0 0 0 0 0.901961 0 0 0 0.04 0" />
        <feBlend in2="shape" result="effect1_innerShadow_147_2064" />
      </filter>
    </defs>
  </svg>
);
