"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChartData {
  label: string;
  value: number; // percentage or relative value
  displayValue: string;
}

interface AnimatedChartProps {
  title: string;
  data: ChartData[];
  color: string;
}

export function AnimatedChart({ title, data, color }: AnimatedChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".chart-bar",
      { height: 0 },
      {
        height: (index) => `${data[index].value}%`,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="p-8 rounded-3xl bg-secondary border border-white/5">
      <h3 className="text-xl font-bold font-heading mb-8">{title}</h3>
      
      <div className="flex items-end justify-between h-64 space-x-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-end w-full h-full group">
             {/* Value Label */}
            <span className="mb-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.displayValue}
            </span>
            
            {/* Bar */}
            <div 
                className={`chart-bar w-full rounded-t-lg bg-${color.replace('text-', '')} opacity-80 group-hover:opacity-100 transition-opacity`} 
                style={{ height: '0%' }} // Initial state for GSAP to animate from
            />
            
            {/* Axis Label */}
            <span className="mt-4 text-xs text-muted-foreground font-medium text-center">
                {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
