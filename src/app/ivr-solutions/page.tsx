import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IVRFeatures } from "@/components/home/IVRFeatures";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVR Solutions — Glocious Infotech",
  description:
    "Explore Glocious Infotech's enterprise IVR solutions: intelligent call routing, multi-level menus, cloud telephony, and 24/7 automated customer support.",
  alternates: { canonical: "https://www.glocious.com/ivr-solutions" },
};

export default function IVRSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20 sm:pt-24">
        <IVRFeatures />
      </main>
      <Footer />
    </div>
  );
}
