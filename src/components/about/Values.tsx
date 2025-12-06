"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Zap, Target, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: <Heart size={32} />, title: "Passion", description: "We love what we do, and it shows in our work." },
  { icon: <Zap size={32} />, title: "Innovation", description: "Constantly pushing boundaries and exploring new tech." },
  { icon: <Target size={32} />, title: "Impact", description: "Focused on delivering measurable results for clients." },
  { icon: <Shield size={32} />, title: "Integrity", description: "Transparent, honest, and ethical in all dealings." },
];

export function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(gridRef.current?.children || [], {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-16">Our Core Values</h2>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
