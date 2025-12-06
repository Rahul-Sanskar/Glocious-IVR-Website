"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ReadingProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0,
      }
    });
  }, { scope: barRef });

  return (
    <div 
        ref={barRef} 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 scale-x-0" 
    />
  );
}
