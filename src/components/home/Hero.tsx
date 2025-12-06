"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

// Simple skeleton loader for the 3D background to avoid layout shift or empty flash
const ThreeBackground = dynamic(() => import("./ThreeBackground"), { 
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030305]" />
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial state
    gsap.set(textRef.current?.children || [], { opacity: 0, y: 50 });
    // Keep H1 visible but its contents hidden initially for granular control
    const typeWriterSpan = textRef.current?.querySelector(".typewriter-text");
    const revealSpan = textRef.current?.querySelector(".reveal-text");

    if (typeWriterSpan) {
       // Allow the text to exist in the DOM naturally.
       // We animate FROM an empty string TO the natural text.
       // This is safer: if JS fails, text is still visible.
       gsap.set(typeWriterSpan.parentElement, { opacity: 1, y: 0 }); 
    }
    
    // 1. Reveal container items (Badge etc)
    tl.to(textRef.current?.children || [], {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
    });

    // 2. Typewriter Effect for "The Future"
    if (typeWriterSpan) {
        tl.from(typeWriterSpan, {
            text: { value: "" },
            duration: 1.5,
            ease: "none",
        }, "-=0.4"); 
    }

    // 3. Reveal "Is Now" (Gradient text)
    if (revealSpan) {
        tl.to(revealSpan, {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        });
    }

  }, { scope: containerRef });


  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background - Lazy Loaded */}
      <div className="absolute inset-0 z-0 opacity-60">
         <ThreeBackground />
      </div>

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030305_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        <div ref={textRef} className="text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-md opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold font-mono text-primary tracking-widest uppercase">System Online // v2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-heading leading-[0.9] mb-8 tracking-tighter text-white drop-shadow-lg transform-gpu min-h-[1.8em]">
            <span className="typewriter-text inline-block">The Future</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 animate-pulse-slow text-glow filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] opacity-0 reveal-text">
              Is Now
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-xl border-l-2 border-primary/20 pl-6 transform-gpu">
            We engineer immersive digital experiences that defy gravity. 
            Elevate your brand with high-performance code and futuristic design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 transform-gpu">
            <Button size="xl" className="group relative overflow-hidden bg-primary text-white border-none hover:bg-primary/90 text-lg px-8 py-6 rounded-none skew-x-[-10deg]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="skew-x-[10deg] flex items-center">
                    Start Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </Button>
            
            <Button variant="outline" size="xl" className="border-white/10 hover:bg-white/5 text-lg px-8 py-6 rounded-none skew-x-[-10deg] backdrop-blur-sm">
                <span className="skew-x-[10deg] flex items-center">
                    Explore Work
                </span>
            </Button>
          </div>
        </div>
      </div>
      
       {/* Scroll Indicator */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to Init</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
       </div>
    </section>
  );
}
