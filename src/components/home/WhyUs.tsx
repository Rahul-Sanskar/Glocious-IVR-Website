"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Award, 
  Users, 
  ShieldCheck, 
  Zap, 
  Headphones, 
  Layers, 
  Target 
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Verified Glocious Content (Based on Specification)                */
/* ------------------------------------------------------------------ */

const whyGlocious = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "12+ Years Industry Expertise",
    description: "A decade-long track record of delivering specialized communication technology solutions across global markets.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer-Centric Approach",
    description: "Developing intelligent systems that bridge the gap between businesses and their customers through innovative telephony.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Reliable Communication",
    description: "Enterprise-grade security protocols and robust cloud telephony infrastructure for high-availability service.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Scalable Infrastructure",
    description: "Platforms built to scale seamlessly, supporting business growth from startups to multi-national operations.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Professional 24/7 Support",
    description: "Technical assistance available around the clock to ensure your communication channels are always operational.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Multi-Industry Experience",
    description: "Proven expertise serving healthcare, finance, retail, and logistics with industry-specific IVR solutions.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results-Oriented Solutions",
    description: "Systems designed to increase operational efficiency, reduce costs, and improve customer satisfaction scores.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".why-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".why-card", {
      scale: 0.9,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.4)",
    }, "-=0.4");
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Immersive design elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="why-header max-w-3xl mb-16">
          <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">The Glocious Advantage</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-6">
            Why Choose <span className="text-primary">Glocious Infotech</span>?
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't just provide telephony; we build the intelligent infrastructure that drives meaningful customer engagement. Our focus is on technical excellence and real-world results.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {whyGlocious.map((item, index) => (
            <div 
              key={index} 
              className={`why-card group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-primary/30 transition-all duration-300 ${
                index === whyGlocious.length - 1 ? "lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
          
          {/* Central Visual CTA card */}
          <div className="why-card relative p-8 rounded-2xl bg-primary text-white flex flex-col justify-between overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-4">Ready to optimize your communication?</h4>
              <p className="text-white/80 text-sm mb-8">
                Join 15,000+ businesses who trust our intelligent IVR solutions.
              </p>
            </div>
            <button className="relative z-10 self-start px-6 py-3 bg-white text-primary rounded-full font-bold text-sm hover:bg-white/90 transition-colors">
              Get Started
            </button>
            
            {/* Decorative background for the CTA card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
