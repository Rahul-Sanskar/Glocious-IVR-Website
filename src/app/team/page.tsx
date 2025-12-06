import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TeamGrid } from "@/components/team/TeamGrid";
import { CultureStats } from "@/components/team/CultureStats";
import { PerksGrid } from "@/components/team/PerksGrid";
import { JoinMission } from "@/components/team/JoinMission";

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 text-center mb-16">
             <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] uppercase">Human Capital</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-heading mb-8">Meet the Minds</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The architects, designers, and strategists behind your digital success.
            </p>
        </section>

        <TeamGrid />
        
        <CultureStats />
        
        <PerksGrid />

        <JoinMission />
      </main>

      <Footer />
    </div>
  );
}
