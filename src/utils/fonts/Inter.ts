import localFont from "next/font/local";

export const Inter = localFont({
  src: [
    {
      path: "../../assets/fonts/inter/web/Inter-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-ExtraBoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../assets/fonts/inter/web/Inter-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["sans-serif"],
});
