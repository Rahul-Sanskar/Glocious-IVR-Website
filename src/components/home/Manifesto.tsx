"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".manifesto-line", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      skewY: 7,
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 md:py-48 container mx-auto px-6 overflow-hidden">
      <div className="max-w-5xl">
        <h2 className="text-4xl md:text-7xl font-bold font-heading leading-[1.1] tracking-tight">
          <div className="overflow-hidden"><span className="manifesto-line block">We believe in</span></div>
          <div className="overflow-hidden"><span className="manifesto-line block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">doing it right.</span></div>
          <div className="overflow-hidden"><span className="manifesto-line block mt-8 text-2xl md:text-4xl font-light text-muted-foreground leading-relaxed">
            Good work takes time, attention, and honest communication.
          </span></div>
          <div className="overflow-hidden"><span className="manifesto-line block text-2xl md:text-4xl font-light text-muted-foreground leading-relaxed">
            We build digital products that actually work—<strong className="text-white font-medium">reliable, fast,</strong> and <strong className="text-white font-medium">built to last</strong>.
          </span></div>
          <div className="overflow-hidden"><span className="manifesto-line block mt-8 text-xl md:text-2xl text-primary font-mono uppercase tracking-widest">
            // Quality Over Shortcuts
          </span></div>
        </h2>
      </div>
    </section>
  );
}
