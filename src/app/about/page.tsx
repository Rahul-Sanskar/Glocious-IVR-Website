import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { CultureGallery } from "@/components/about/CultureGallery";
import { OfficeTour } from "@/components/about/OfficeTour";
import { Philosophy } from "@/components/about/Philosophy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SoftBiz — Our Story, Team & Values",
  description: "Learn about SoftBiz — our story, values, and the team behind every project. A digital agency built on transparency, craft, and results.",
  openGraph: {
    title: "About SoftBiz — Our Story, Team & Values",
    description: "Learn about SoftBiz — our story, values, and the team behind every project.",
    url: "https://www.thesoftbiz.com/about",
  },
  twitter: {
    title: "About SoftBiz — Our Story, Team & Values",
  },
  alternates: {
    canonical: "https://www.thesoftbiz.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32">
        {/* Intro */}
        <section className="container mx-auto px-6 mb-24 text-center">
          <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
            <span className="text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">About Us</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold font-heading mb-8">
            The Story of <br className="hidden md:block" /> SoftBiz.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're a digital agency focused on building practical, high-quality solutions for businesses that want results without the hype.
          </p>
        </section>

        <OfficeTour />

        <Philosophy />

        <Timeline />

        <Values />

        <CultureGallery />
      </main>

      <Footer />
    </div>
  );
}
