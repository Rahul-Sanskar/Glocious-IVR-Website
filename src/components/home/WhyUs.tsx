"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Rocket, ShieldCheck, Globe2, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Rocket size={32} />,
    title: "Fast Load Times",
    description: "We build sites optimized for speed using modern frameworks and efficient code practices.",
  },
  {
    icon: <Globe2 size={32} />,
    title: "Clear Communication",
    description: "Regular updates, honest timelines, and responsive support throughout your project.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Tested & Reliable",
    description: "We test thoroughly before launch and provide documentation so you're not left guessing.",
  },
  {
    icon: <Users size={32} />,
    title: "Focused Team",
    description: "A small, dedicated team means you work with people who actually know your project.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(contentRef.current?.children || [], {
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-secondary relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full bg-primary blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
              Why Partner with <span className="text-primary">SoftBiz</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We define ourselves by the results we deliver. In a crowded digital landscape, we cut through the noise with precision, creativity, and technical excellence.
            </p>

            <div ref={contentRef} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <div className="text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual/Image (Placeholder for now, could be a 3D element or Image) */}
          <div className="hidden lg:flex items-center justify-center bg-white/5 rounded-3xl border border-white/10 aspect-square">
            {/* Abstract Visual Representation */}
            <Image alt="about us image" src={'/about.webp'} width={900} height={900} className="w-full h-full object-cover rounded-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
