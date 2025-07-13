import { SVGProps } from "react";

export const VkIcon = (props: SVGProps<SVGSVGElement>): React.ReactNode => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <ellipse cx={22} cy={12} fill="#4680C2" rx={12} ry={5} />
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
        fill="#4680C2"
        d="M33.457 15.963a8.362 8.362 0 0 1-1.09 2.214l.019-.03c-.448.732-.983 1.578-1.606 2.537-.533.757-.815 1.15-.847 1.176-.138.17-.234.377-.267.606v.006c.026.208.124.39.267.525l.4.437c2.14 2.155 3.345 3.641 3.612 4.457a.861.861 0 0 1-.112.813l.002-.003a.975.975 0 0 1-.784.283h.004-2.637c-.337 0-.647-.115-.89-.307l.003.002a6.857 6.857 0 0 1-.95-.93l-.01-.011c-.46-.51-.87-.94-1.226-1.29-1.188-1.106-2.065-1.66-2.63-1.66a.796.796 0 0 0-.517.133l.003-.002a.742.742 0 0 0-.16.572v-.004a12.039 12.039 0 0 0-.038 1.375v-.016 1.136a.758.758 0 0 1-.266.742 3.235 3.235 0 0 1-1.618.262l.013.001a8.45 8.45 0 0 1-4.276-1.242l.035.02a11.836 11.836 0 0 1-3.717-3.456l-.027-.041a25.752 25.752 0 0 1-2.472-3.913l-.07-.15a23.898 23.898 0 0 1-1.233-2.747l-.06-.181a6.395 6.395 0 0 1-.31-1.505L10 15.748c0-.495.297-.743.892-.743h2.63a1.073 1.073 0 0 1 .74.22l-.002-.002c.2.215.348.479.42.773l.004.012c.484 1.34.997 2.465 1.587 3.543l-.067-.135c.482.951 1.015 1.77 1.623 2.525l-.023-.03c.534.641.95.962 1.248.962l.032.001a.402.402 0 0 0 .348-.196v-.002a1.717 1.717 0 0 0 .112-.771v.006-3.802a3.096 3.096 0 0 0-.32-1.242l.008.019a2.891 2.891 0 0 0-.45-.681l.003.004a1.069 1.069 0 0 1-.312-.607v-.006c0-.167.077-.317.2-.415a.686.686 0 0 1 .46-.175h4.155a.639.639 0 0 1 .56.218 1.313 1.313 0 0 1 .16.748v-.005 5.07a.955.955 0 0 0 .135.573l-.002-.004a.403.403 0 0 0 .333.174.963.963 0 0 0 .473-.158l-.003.002c.271-.184.506-.392.709-.629l.004-.005a15.32 15.32 0 0 0 1.655-2.205l.039-.068c.344-.56.716-1.247 1.053-1.954l.062-.144.446-.874A1.12 1.12 0 0 1 30.03 15h-.003 2.632c.71 0 .977.32.8.962h-.001Z"
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
        <stop stopColor="#4680C2" />
        <stop offset={1} stopColor="#4680C2" stopOpacity={0.52} />
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
          result="effect1_innerShadow_147_2072"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={6.4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.27451 0 0 0 0 0.501961 0 0 0 0 0.760784 0 0 0 0.04 0" />
        <feBlend in2="shape" result="effect1_innerShadow_147_2072" />
      </filter>
    </defs>
  </svg>
);
