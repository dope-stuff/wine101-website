import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import CustomLayout from "../../components/layout";
import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
  baseURL: publicRuntimeConfig.backendUrl,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description:
    "We make wine simple for our customers | เราเชื่อว่า อร่อยของแต่ละคนไม่เหมือนกัน และไวน์ที่ดีที่สุดคือไวน์ที่อร่อยสำหรับตัวเราเอง เรารู้ว่าโลกของไวน์ทั้งซับซ้อนและน่าสับสนแบบสุดๆ แต่เราจะเปลี่ยนมัน!",
  keywords: "wine, wine 101, ไวน์, ดื่มไวน์, how to drink wine, สอนไวน์",
  title: "Wine 101 | Wine Made Simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <CustomLayout>{children}</CustomLayout>
        </NextUIProvider>
      </body>
    </html>
  );
}
