import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Header />
      
      <main className="flex-grow pt-40 pb-24">
        {/* Header Section */}
        <section className="container mx-auto px-6 mb-24 text-center">
             <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                <span className="text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">Selected Works 2022-2025</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-bold font-heading mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/20">
                Digital <br className="md:hidden" /> Architects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A curated collection of commercially successful digital products, 
                engineered for growth and designed for the future.
            </p>
        </section>

        {/* Portfolio Grid */}
        <section className="container mx-auto px-6">
            <PortfolioGrid />
        </section>
        
        {/* Bottom CTA */}
        <section className="container mx-auto px-6 mt-40">
            <div className="relative p-12 md:p-24 overflow-hidden rounded-[3rem] border border-white/10 bg-secondary/20">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
                
                <div className="relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-bold font-heading mb-8">Ready to build the future?</h2>
                    <a href="/contact" className="inline-flex items-center text-xl font-bold text-primary hover:text-white transition-colors border-b-2 border-primary pb-1">
                        Start your Project <span className="ml-2">→</span>
                    </a>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
