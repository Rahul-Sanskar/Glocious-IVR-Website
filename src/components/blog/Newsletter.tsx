"use client";

import React, { useRef } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Newsletter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-y border-white/5 bg-secondary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-32 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-primary/10 text-primary">
                <Mail size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Stay Ahead of the Curve
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join 10,000+ digital leaders. Get our latest insights on tech, design, and growth strategies delivered straight to your inbox.
            </p>

            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-grow px-6 py-4 rounded-full bg-background border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all text-white placeholder:text-muted-foreground"
                />
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                    Subscribe <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground uppercase tracking-widest">
                No spam. Unsubscribe anytime.
            </p>
        </div>
      </div>
    </section>
  );
}
