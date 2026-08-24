import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyUs } from "@/components/home/WhyUs";
import { Manifesto } from "@/components/home/Manifesto";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { TestimonialWall } from "@/components/home/TestimonialWall";
import { FAQ } from "@/components/home/FAQ";
import { Industries } from "@/components/home/Industries";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* High Impact Manifesto - Sets the tone */}
        <Manifesto />
        
        <TrustBar />
        
        <Services />
        
        {/* Deep Dive Process Section */}
        <Process />
        
        <Stats />
        
        <WhyUs />
        
        <Industries />
        
        <TestimonialWall />
        
        <FAQ />
        
        {/* Final CTA - IVR Focused */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
