import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQ } from "@/components/home/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Glocious Infotech IVR Solutions",
  description:
    "Answers to common questions about Glocious IVR systems, cloud telephony, call routing, integrations, and getting started.",
  alternates: { canonical: "https://www.glocious.com/faq" },
};

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
