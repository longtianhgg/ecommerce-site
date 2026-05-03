import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "NovaMart 电商首页",
  description: "NovaMart 现代清爽的单页面电商首页，涵盖分类、热销商品、优惠活动、用户评价和联系方式。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
