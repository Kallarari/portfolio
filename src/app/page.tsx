"use client";
import CenterName from "@/components/CenterName";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-24">
      <CenterName />
      <Footer />
    </main>
  );
}