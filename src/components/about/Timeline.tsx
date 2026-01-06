"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2018", title: "Founded", description: "SoftBiz was established with a focus on web development and digital solutions." },
  { year: "2019", title: "Growing the Team", description: "Expanded our capabilities by bringing on specialists in e-commerce and marketing." },
  { year: "2020", title: "Remote-First", description: "Transitioned to a fully remote team, allowing us to serve clients across multiple time zones." },
  { year: "2021", title: "E-commerce Focus", description: "Deepened our expertise in Shopify and Amazon marketplace solutions." },
  { year: "2022", title: "Process Refinement", description: "Developed standardized workflows to improve project delivery and client communication." },
  { year: "2023", title: "Service Expansion", description: "Added comprehensive digital marketing and SEO services to our offerings." },
  { year: "2024", title: "Looking Ahead", description: "Continuing to grow while maintaining the quality and attention that got us here." },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const totalWidth = containerRef.current!.scrollWidth - window.innerWidth;

    gsap.to(containerRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        // snap: 1 / (milestones.length - 1), // Optional: snap to items
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen bg-background overflow-hidden relative">
      <div className="absolute top-12 left-12 z-10">
        <h2 className="text-4xl font-bold font-heading text-primary">Our Journey</h2>
      </div>

      <div className="h-full flex items-center">
        <div ref={containerRef} className="flex px-12 space-x-24 w-max">
          {milestones.map((item, index) => (
            <div key={index} className="w-[400px] flex flex-col space-y-6 relative group">
              {/* Timeline Line/Dot */}
              <div className="absolute -top-16 left-0 w-full border-t border-white/20">
                <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-primary" />
              </div>

              <span className="text-8xl font-bold font-heading text-white/5 group-hover:text-white/10 transition-colors">
                {item.year}
              </span>
              <h3 className="text-3xl font-bold text-white">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
