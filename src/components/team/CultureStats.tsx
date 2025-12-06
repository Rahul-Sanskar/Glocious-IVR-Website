"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Coffee Consumed", value: "Too Much" },
    { label: "Average Age", value: "26" },
    { label: "Countries Represented", value: "12" },
    { label: "Dogs in Office", value: "5" },
];

export function CultureStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".culture-stat", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 border-y border-white/5 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
                <div key={i} className="culture-stat p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-3xl md:text-4xl font-bold font-heading text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
