"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: "$500M+", label: "Client Revenue Generated" },
    { value: "40%", label: "Average Conversion Uplift" },
    { value: "99.9%", label: "Uptime Guarantees" },
    { value: "10x", label: "Faster Time-to-Market" },
];

export function ImpactStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".impact-stat",
      { y: 50, opacity: 0 },
      {
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
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
    <section ref={containerRef} className="py-24 border-b border-white/5 relative">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="impact-stat">
                        <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2">
                            {stat.value}
                        </div>
                        <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
