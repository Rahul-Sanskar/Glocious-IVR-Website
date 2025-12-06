import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceList } from "@/components/services/ServiceList";
import { TechStackMarquee } from "@/components/services/TechStackMarquee";
import { ServiceMethodology } from "@/components/services/ServiceMethodology";
import { DeliverablesTimeline } from "@/components/services/DeliverablesTimeline";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 mb-16 text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] uppercase">Our Capabilities</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-heading mb-8">
                Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Full-spectrum digital engineering for ambitious brands.
            </p>
        </section>

         <TechStackMarquee />

        <ServiceList />
        
        <ServiceMethodology />
        
        <DeliverablesTimeline />
        
        {/* CTA */}
         <section className="py-32 container mx-auto px-6">
            <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 md:p-24 text-center">
                 <h2 className="text-4xl md:text-6xl font-bold font-heading mb-8">Need something custom?</h2>
                  <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                    We thrive on complex challenges. If you have a project that doesn't fit into a box, let's talk about it.
                 </p>
                 <a href="/contact" className="inline-block px-10 py-4 mb-4 text-lg font-bold bg-white text-black rounded-full hover:bg-white/90 transition-colors">
                    Book a Consultation
                 </a>
            </div>
         </section>
      </main>

      <Footer />
    </div>
  );
}
