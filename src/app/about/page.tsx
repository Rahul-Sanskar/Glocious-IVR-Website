import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Timeline } from "@/components/about/Timeline";
import { Values } from "@/components/about/Values";
import { CultureGallery } from "@/components/about/CultureGallery";
import { OfficeTour } from "@/components/about/OfficeTour";
import { Philosophy } from "@/components/about/Philosophy";

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
                The Origins of <br className="hidden md:block" /> SoftBiz.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We started as a rebellion against boring software. Today, we are a global force for digital innovation.
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
