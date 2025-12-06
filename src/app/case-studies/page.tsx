import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CaseStudyList } from "@/components/case-studies/CaseStudyList";
import { ClientWall } from "@/components/case-studies/ClientWall";
import { ImpactStats } from "@/components/case-studies/ImpactStats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-0">
        <section className="container mx-auto px-6 text-center mb-16">
            <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                <span className="text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">Our Work</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Proving Success</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results from real partnerships. See how we help our clients win in the digital economy.
            </p>
        </section>

        <ClientWall />
        
        <ImpactStats />

        <section className="container mx-auto px-6 py-24">
            <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                 <div>
                    <h2 className="text-3xl font-bold font-heading">Featured Case Studies</h2>
                    <p className="text-muted-foreground mt-2">Deep dives into our most transformative projects.</p>
                 </div>
            </div>
            <CaseStudyList />
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary text-black">
             <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Have a similar challenge?</h2>
                <p className="text-xl font-medium max-w-2xl mx-auto mb-12 opacity-80">
                    We specialize in solving complex digital problems. Let's discuss your roadmap.
                </p>
                <Button size="xl" asChild className="bg-black text-white hover:bg-black/80 border-none rounded-full px-12 py-8 text-lg">
                    <Link href="/contact">Book a Consultation <ArrowRight className="ml-2" /></Link>
                </Button>
             </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
