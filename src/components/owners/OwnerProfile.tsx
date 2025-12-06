"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronDown, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

interface OwnerProfileProps {
  name: string;
  role: string;
  image: string;
  bioShort: string;
  bioLong: string;
  socials: { linkedin?: string; twitter?: string };
  reverse?: boolean;
}

export function OwnerProfile({ name, role, image, bioShort, bioLong, socials, reverse }: OwnerProfileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: "auto", duration: 0.5, ease: "power2.out" });
      gsap.to(".bio-long", { opacity: 1, y: 0, duration: 0.5, delay: 0.2 });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.5, ease: "power2.in" });
      gsap.to(".bio-long", { opacity: 0, y: 10, duration: 0.3 });
    }
  }, { scope: containerRef, dependencies: [isOpen] });

  return (
    <div ref={containerRef} className={cn("flex flex-col gap-12 py-24", reverse ? "lg:flex-row-reverse" : "lg:flex-row")}>
        {/* Image */}
        <div className="lg:w-1/2">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/5">
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute bottom-8 left-8">
                    <h2 className="text-4xl font-bold font-heading text-white">{name}</h2>
                    <p className="text-xl text-primary font-medium">{role}</p>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="text-2xl text-muted-foreground leading-relaxed mb-6 font-light">
                "{bioShort}"
            </p>

            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-primary font-bold tracking-wider uppercase mb-8 hover:text-white transition-colors"
            >
                {isOpen ? "Read Less" : "Read Full Bio"} <ChevronDown className={`ml-2 w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            <div ref={contentRef} className="h-0 overflow-hidden">
                <div className="bio-long opacity-0 translate-y-4 space-y-4 text-lg text-muted-foreground leading-relaxed pb-8 border-l-2 border-primary/20 pl-6">
                    {bioLong.split('\n').map((para, i) => <p key={i}>{para}</p>)}
                </div>
            </div>

            <div className="flex space-x-6 mt-4">
                {socials.linkedin && <a href={socials.linkedin} className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={24}/></a>}
                {socials.twitter && <a href={socials.twitter} className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={24}/></a>}
            </div>
        </div>
    </div>
  );
}
