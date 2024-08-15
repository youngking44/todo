import type { Metadata } from "next";
import "./globals.css";
import roboto from "@/utils/font";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Todo List",
  description: "This is Todo list app for daily life activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
