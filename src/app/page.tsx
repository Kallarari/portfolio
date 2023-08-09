"use client";
import CenterName from "@/components/CenterName";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import './globals.css'
import '../i18nify';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <CenterName />
      <Footer />
    </main>
  );
}
