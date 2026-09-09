import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Industries } from "@/components/home/Industries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve — Glocious Infotech",
  description:
    "Glocious IVR solutions for banking, healthcare, education, retail, logistics, travel, and more. Tailored telephony for every industry vertical.",
  alternates: { canonical: "https://www.glocious.com/industries" },
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24">
        <Industries />
      </main>
      <Footer />
    </div>
  );
}
