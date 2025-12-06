"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, higher is faster parallax
}

export function ParallaxImage({ src, alt, className = "", speed = 0.5 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !imgRef.current) return;

    gsap.fromTo(imgRef.current, 
      {
        yPercent: -10 * speed,
        scale: 1.1 + (speed * 0.1), // Scale up slightly to prevent whitespace
      },
      {
        yPercent: 10 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
        {/* Using standard img for now to avoid Next.Image layout complexities in this specific animation setup, 
            but in prod Next.Image with 'fill' and object-cover is preferred if configured correctly with parent logic */}
       <img 
        ref={imgRef}
        src={src} 
        alt={alt}
        className="w-full h-[120%] object-cover absolute top-[-10%] left-0"
       />
    </div>
  );
}
