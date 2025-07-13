import { SVGProps } from "react";
export const YouTubeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <ellipse cx={22} cy={12} fill="#FF5C5C" rx={12} ry={5} />
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
        fill="#FF5C5C"
        d="M27.846 14H16.154C13.86 14 12 16.102 12 18.696v6.608C12 27.898 13.86 30 16.154 30h11.692C30.14 30 32 27.898 32 25.304v-6.608C32 16.102 30.14 14 27.846 14Zm-2.809 8.322-5.469 2.948c-.146.079-.314-.041-.314-.224v-6.082c0-.185.173-.305.319-.221l5.469 3.133c.162.093.16.357-.005.445Z"
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
        <stop stopColor="#FF5C5C" />
        <stop offset={1} stopColor="#FF5C5C" stopOpacity={0.52} />
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
          result="effect1_innerShadow_147_2076"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.27451 0 0 0 0 0.501961 0 0 0 0 0.760784 0 0 0 0.04 0" />
        <feBlend in2="shape" result="effect1_innerShadow_147_2076" />
      </filter>
    </defs>
  </svg>
);
