"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const techStack = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js", "Node.js", "PostgreSQL",
    "Supabase", "AWS", "Vercel", "Figma", "Blender", "Shopify", "Sanity CMS", "Prisma"
];

// Duplicate for loop
const tech = [...techStack, ...techStack];

export function TechStackMarquee() {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(rowRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, { scope: rowRef });

  return (
    <div className="py-12 border-y border-white/5 bg-secondary/10 overflow-hidden">
        <div className="flex w-max gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500" ref={rowRef}>
            {tech.map((item, i) => (
                <span key={i} className="text-xl md:text-3xl font-mono font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 whitespace-nowrap">
                    {item}
                </span>
            ))}
        </div>
    </div>
  );
}
