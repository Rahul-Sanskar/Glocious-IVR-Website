"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Code2, Rocket, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: "01. Discovery & Strategy",
    description: "We don't start with code; we start with questions. We dive deep into your business model, audience, and competitors to unearth the strategic insights that will drive growth."
  },
  {
    icon: PenTool,
    title: "02. UX/UI Design",
    description: "We craft interfaces that are not just beautiful, but intuitive. Every pixel is purposeful, designed to guide the user effortlessly towards conversion while evoking an emotional response."
  },
  {
    icon: Code2,
    title: "03. High-Performance Development",
    description: "Our engineering standards are obsessive. We build scalable, secure, and lightning-fast applications using the latest edge technologies (Next.js, React, Node.js)."
  },
  {
    icon: Rocket,
    title: "04. Quality Assurance & Launch",
    description: "Perfection is in the details. We conduct rigorous stress testing, device compatibility checks, and accessibility audits before a seamless, zero-downtime deployment."
  },
  {
    icon: BarChart3,
    title: "05. Growth & Optimization",
    description: "Launch is just Day 1. We continually monitor user behavior, relying on data analytics to iterate, improve features, and maximize your ROI over time."
  }
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animate the vertical line drawing down
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        }
      }
    );

    // Animate each step
    const stepElements = gsap.utils.toArray(".process-step");
    stepElements.forEach((step: any) => {
      gsap.from(step, {
        opacity: 0,
        x: -50,
        duration: 1,
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section className="py-24 md:py-48 bg-secondary/10 relative overflow-hidden">
        {/* Background Mesh Gradient */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-mesh opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 max-w-2xl">
            <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">The Methodology</h2>
            <h3 className="text-4xl md:text-6xl font-bold font-heading">From Concept to <br/><span className="text-secondary-foreground">Launch — and Beyond.</span></h3>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical Guide Line */}
          <div className="absolute left-0 md:left-[50%] top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
             <div ref={lineRef} className="w-full bg-gradient-to-b from-primary via-accent to-primary shadow-[0_0_10px_var(--primary)]" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={index} className={`process-step relative flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse md:text-left' : 'md:text-right'}`}>
                 
                 {/* Icon Node */}
                 <div className="absolute left-[-2.1rem] md:left-[50%] md:-translate-x-1/2 w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <step.icon className="w-8 h-8 text-white" />
                 </div>

                 <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <div className="glass-panel p-8 rounded-2xl hover:border-primary/50 transition-colors duration-300">
                        <span className="block text-5xl font-bold font-heading text-white/5 mb-4">{`0${index + 1}`}</span>
                        <h4 className="text-2xl font-bold text-white mb-4">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                 </div>
                 <div className="md:w-1/2" /> {/* Spacer */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
