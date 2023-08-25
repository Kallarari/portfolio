"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "../i18nify";


const inter = Inter({ subsets: ["latin"] });
const metadata: Metadata = {
  title: "My website",
  description: "this is my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
  );
}
