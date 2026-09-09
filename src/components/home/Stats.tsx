"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  Verified Glocious Statistics                                      */
/* ------------------------------------------------------------------ */

const stats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 1565, suffix: "+" },
  { label: "Satisfied Clients", value: 265, suffix: "+" },
  { label: "Countries Reached", value: 24, suffix: "" },
  { label: "Businesses Trust Us", value: 15000, suffix: "+" },
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
            once: true,
          },
          onUpdate: function () {
            // Format number with commas for visual clarity
            counter.innerText = Math.ceil(parseFloat(this.targets()[0].innerText)).toLocaleString();
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="py-24 md:py-32 bg-black border-y border-white/5 relative overflow-hidden"
      aria-label="Glocious Company Statistics"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* FIX: grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 — last item spans sm:col-span-3 to stay centred on tablet */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item flex flex-col items-center${
                index === stats.length - 1 ? " col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-3 tracking-tighter tabular-nums">
                <span 
                  className="stat-value" 
                  data-value={stat.value}
                  aria-hidden="true"
                >
                  0
                </span>
                {stat.suffix}
                {/* Hidden text for screen readers */}
                <span className="sr-only">
                  {stat.value}{stat.suffix}
                </span>
              </div>
              <p className="text-xs md:text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
