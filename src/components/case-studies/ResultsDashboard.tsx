"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
    { label: "Conversion Rate", value: 145, suffix: "%", color: "bg-green-500" },
    { label: "Page Load Speed", value: 300, suffix: "% Faster", color: "bg-blue-500" },
    { label: "User Retention", value: 85, suffix: "% Increase", color: "bg-purple-500" },
    { label: "Bounce Rate", value: 40, suffix: "% Decrease", color: "bg-orange-500" },
];

export function ResultsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const bars = gsap.utils.toArray<HTMLElement>(".metric-bar");
    
    bars.forEach((bar, i) => {
        const width = bar.dataset.width;
        gsap.fromTo(bar, 
            { width: "0%" },
            { 
                width: width, 
                duration: 1.5, 
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 85%",
                }
            }
        );
    });

    gsap.from(".metric-value", {
        textContent: 0,
        duration: 2,
        ease: "power1.out",
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-24 bg-secondary/5 border-y border-white/5 my-24">
        <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold font-heading mb-12 text-center">Impact Analysis</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {metrics.map((m, i) => (
                    <div key={i} className="space-y-4">
                        <div className="flex justify-between items-end">
                            <h4 className="text-lg font-mono text-muted-foreground">{m.label}</h4>
                            <div className="text-3xl font-bold text-white">
                                <span className="metric-value">{m.value}</span>{m.suffix.replace(m.value.toString(), '')}
                            </div>
                        </div>
                        <div className="h-4 bg-secondary/30 rounded-full overflow-hidden">
                            <div 
                                className={`metric-bar h-full ${m.color} rounded-full relative`} 
                                data-width={`${Math.min(m.value, 100)}%`} // Clamping visual width for layout
                            >
                                <div className="absolute inset-0 bg-white/20 animate-pulse-slow" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
