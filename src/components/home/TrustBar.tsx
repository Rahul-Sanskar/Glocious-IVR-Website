"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  "Google Ads", "Amazon", "Shopify", "Meta", "Vercel", "Next.js", "React","GSAP"
];

// Duplicate logos to create seamless loop
const marqueeLogos = [...logos, ...logos, ...logos];

export function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Horizontal endless scroll
    gsap.to(scrollerRef.current, {
      xPercent: -33.33, // Move by 1/3 of the total width (since we have 3 sets)
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-12 bg-black border-y border-white/10 overflow-hidden relative z-10">
      <div className="container mx-auto px-6 mb-8 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Our Tech Stack</p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>
        
        <div ref={scrollerRef} className="flex whitespace-nowrap">
          {marqueeLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center mx-12">
              <span className="text-2xl font-bold font-heading text-white/30 hover:text-white/80 transition-colors cursor-default">
                  {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
