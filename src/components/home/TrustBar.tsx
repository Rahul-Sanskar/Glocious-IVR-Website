"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const stats = [
  { label: "Years of Experience", value: 12, suffix: "+" },
  { label: "Projects Completed", value: 500, suffix: "+" },
  { label: "Industries Served", value: 9, suffix: "" },
  { label: "Client Retention Rate", value: 95, suffix: "%" },
];

// Triple the items so the -33.33% translate resets invisibly mid-scroll
const repeated = [...stats, ...stats, ...stats];

export function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Scroll by exactly one-third of the total width, then loop seamlessly
    gsap.to(scrollerRef.current, {
      xPercent: -33.333,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="py-12 bg-black border-y border-white/10 overflow-hidden relative z-10"
    >
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Our Impact
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        {/* Scroller — tripled content ensures the reset point is never visible */}
        <div ref={scrollerRef} className="flex whitespace-nowrap will-change-transform">
          {repeated.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-max"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-white mb-1 tracking-tighter">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-xs md:text-sm font-mono uppercase tracking-widest text-muted-foreground/80">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
