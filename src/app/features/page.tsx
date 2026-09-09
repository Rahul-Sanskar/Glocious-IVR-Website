import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IVRFeatures } from "@/components/home/IVRFeatures";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IVR Features — Glocious Infotech",
  description:
    "Discover the powerful capabilities of Glocious IVR: smart call routing, voice analytics, CRM integration, multi-level menus, and more.",
  alternates: { canonical: "https://www.glocious.com/features" },
};

export default function FeaturesPage() {
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
