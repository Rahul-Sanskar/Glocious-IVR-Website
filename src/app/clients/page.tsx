import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientLogoWall } from "@/components/clients/ClientLogoWall";
import { TestimonialSlider } from "@/components/clients/TestimonialSlider";
import { ClientSuccessMetrics } from "@/components/clients/ClientSuccessMetrics";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 text-center mb-16">
            <h1 className="text-5xl md:text-8xl font-bold font-heading mb-8">Trusted by Giants</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We build digital products for the world's most ambitious companies.
            </p>
        </section>

        <ClientLogoWall />
        
        <ClientSuccessMetrics />

        <section className="py-24 bg-secondary/5">
             <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Success Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading">What they say.</h3>
                </div>
                <TestimonialSlider />
             </div>
        </section>
        
        <section className="py-32 container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[3rem] bg-gradient-to-tr from-primary/20 to-accent/20 border border-white/10">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Join the Ranks.</h2>
                <Button size="xl" asChild className="text-lg px-12 py-8 rounded-full">
                    <Link href="/contact">Partner with Us <ArrowRight className="ml-2" /></Link>
                </Button>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
