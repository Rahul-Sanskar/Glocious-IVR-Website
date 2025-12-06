"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Revenue Generated", value: 500, suffix: "M+", prefix: "$" },
  { label: "Projects Shipped", value: 150, suffix: "+" },
  { label: "Awards Won", value: 24, suffix: "" },
  { label: "Global Clients", value: 40, suffix: "+" },
];

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".stat-item");
    
    items.forEach((item: any) => {
        const counter = item.querySelector(".stat-value");
        const targetValue = parseInt(counter.dataset.value);
        
        gsap.fromTo(counter, 
            { innerText: 0 },
            {
                innerText: targetValue,
                duration: 2.5,
                ease: "power2.out",
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                onUpdate: function() {
                    counter.innerText = Math.ceil(this.targets()[0].innerText); 
                }
            }
        );
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-black border-y border-white/5 relative">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                    <div className="text-5xl md:text-7xl font-bold font-heading text-white mb-2 tracking-tighter">
                        {stat.prefix}<span className="stat-value" data-value={stat.value}>0</span>{stat.suffix}
                    </div>
                    <p className="text-sm md:text-base font-mono uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
