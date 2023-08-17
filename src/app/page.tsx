"use client";
import CenterName from "@/components/CenterName";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CenterName />
      <Footer />
    </main>
  );
}