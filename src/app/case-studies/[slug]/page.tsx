import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResultsDashboard } from "@/components/case-studies/ResultsDashboard";
import { BeforeAfterSlider } from "@/components/case-studies/BeforeAfterSlider";
import { ReadingProgress } from "@/components/blog/ReadingProgress"; 
import { caseStudies } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
// ✅ Import the Client Component wrapper we created
import { AnimatedDiv } from "@/components/ui/AnimatedDiv"; 

// ✅ Fix 1: Await params in metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((p) => p.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  
  return {
    title: `${study.title} | SoftBiz Case Studies`,
    description: study.description,
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// ✅ Fix 2: Make component async and await params
export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((p) => p.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <ReadingProgress />
      <Header />
      
      <main className="flex-grow pt-32">
        {/* ✅ Fix 3: Use AnimatedDiv instead of div with ref */}
        <AnimatedDiv className="container mx-auto px-6 mb-16">
            <div className="max-w-4xl mx-auto text-center">
                 <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-secondary/30 backdrop-blur-sm">
                    <span className="text-xs font-mono font-bold text-green-400 tracking-[0.2em] uppercase">{study.category}</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-bold font-heading mb-8 leading-tight">
                    {study.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {study.description}
                </p>
            </div>
        </AnimatedDiv>

        {/* Hero Video/Image */}
        <div className="container mx-auto px-6 mb-24">
             <div className="aspect-video rounded-[2rem] overflow-hidden relative border border-white/10">
                 <img src={study.image} alt="Cover" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-12 left-12 md:left-24">
                    <div className="flex gap-12 text-center">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{study.stats.timeframe}</div>
                            <div className="text-xs font-mono text-muted-foreground uppercase">Timeline</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">{study.stats.roi}</div>
                            <div className="text-xs font-mono text-muted-foreground uppercase">ROI</div>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Challenge & Solution */}
        <div className="container mx-auto px-6 relative mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                   <div className="sticky top-32">
                        <h3 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">The Challenge</h3>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            {study.content.challenge}
                        </p>
                        
                        <h3 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">The Solution</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {study.content.solution}
                        </p>
                   </div>
                </div>
                
                <div className="lg:col-span-2 prose prose-invert prose-lg max-w-none">
                     <h2>Engineering a Ecosystem</h2>
                     <p>
                        Security and speed are often at odds. We implemented a custom middleware layer reducing latency by 300ms.
                     </p>
                     
                     <blockquote>
                        "SoftBiz didn't just build an app; they built a high-performance infrastructure that scales with us."
                        <span className="block mt-4 not-italic text-sm font-bold text-primary">– CTO, {study.category} Client</span>
                     </blockquote>

                     <h3>Key Technical Wins</h3>
                     <ul>
                        <li><strong>Atomic Design System:</strong> 40+ reusable components ensuring consistency.</li>
                        <li><strong>Real-time Sockets:</strong> Websocket integration for instant transaction notifications.</li>
                        <li><strong>Optimization:</strong> 99/100 Lighthouse Performance Score.</li>
                     </ul>
                </div>
            </div>
        </div>

        <ResultsDashboard />

        <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
            afterImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
        />

        <div className="container mx-auto px-6 py-24 text-center">
             <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-8">Ready to write your success story?</h2>
                <a href="/contact" className="inline-block px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary/90 transition-transform hover:scale-105">
                    Start Your Transformation
                </a>
             </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}