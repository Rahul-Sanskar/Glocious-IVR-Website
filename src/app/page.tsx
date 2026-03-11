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
        
        <TestimonialWall />
        
        <FAQ />
        
        {/* Final CTA */}
        <section className="py-32 container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-8xl font-bold font-heading mb-8">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Build Something</span> That Actually Works?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Your digital future is waiting. Let's build something extraordinary together.
            </p>
            <Button size="xl" asChild className="text-lg px-12 py-8 rounded-full bg-white text-black hover:bg-white/90">
                <Link href="/contact">Launch Project <ArrowRight className="ml-2" /></Link>
            </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
