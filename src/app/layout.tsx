import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "STARVELL",
  robots: {
    follow: false,
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
