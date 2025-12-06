"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  slug: string;
  year: string;
}

export function ProjectCard({ title, category, image, slug, year }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const card = cardRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;

    if (!card || !overlay || !title) return;

    // Hover Animation
    const tl = gsap.timeline({ paused: true });
    
    tl.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to(title, { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.2");

    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());

    return () => {
      card.removeEventListener("mouseenter", () => tl.play());
      card.removeEventListener("mouseleave", () => tl.reverse());
    };
  }, { scope: cardRef });

  return (
    <Link href={`/case-studies/${slug}`} className="block w-full h-full">
      <div 
        ref={cardRef}
        className="group relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-none border border-white/5 bg-secondary/20 transition-all duration-500 hover:border-primary/50"
      >
        {/* Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
             {/* Using simple img tag for preview, replace with Next Image in prod if optimization needed */}
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
            />
        </div>

        {/* Categories / Year Badge */}
        <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md border border-white/10 text-white/70">
                {category}
            </span>
             <span className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white hidden group-hover:block animate-in fade-in">
                {year}
            </span>
        </div>

        {/* Overlay Gradient */}
        <div 
            ref={overlayRef}
            className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 transition-opacity duration-300 z-10" 
        />

        {/* Content Reveal */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
            <h3 
                ref={titleRef} 
                className="text-3xl font-bold font-heading text-white opacity-0 translate-y-8"
            >
                {title}
            </h3>
            <div className="flex items-center mt-4 text-primary font-mono text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
            </div>
        </div>
      </div>
    </Link>
  );
}
