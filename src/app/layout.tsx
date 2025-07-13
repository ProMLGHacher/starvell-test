import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "STARVELL",
  robots: {
    follow: false,
  },
  openGraph: {
    title: "STARVELL",
    description:
      "На бирже STARVELL вы можете купить игровую валюту, предметы, услуги и другие игровые ценности напрямую у других игроков, а также продать свои.",
    images: [
      {
        url: "/og-image.png",
      },
    ],
    type: "website",
    siteName: "STARVELL",
    url: "https://starvell.com",
    locale: "ru_RU",
    countryName: "Россия",
  },
  twitter: {
    card: "summary_large_image",
    title: "STARVELL",
    creator: "araik.dev",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
  description:
    "На бирже STARVELL вы можете купить игровую валюту, предметы, услуги и другие игровые ценности напрямую у других игроков, а также продать свои.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${Inter.variable} font-inter antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
