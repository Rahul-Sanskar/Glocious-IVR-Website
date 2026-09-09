"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
  MessageSquare,
  User,
  Zap,
  Headphones,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    id: 1,
    title: "Caller Initiates Contact",
    description:
      "A customer dials your business number and connects instantly to the Glocious IVR cloud infrastructure.",
    icon: Phone,
  },
  {
    id: 2,
    title: "IVR Greeting",
    description:
      "A professional voice prompt greets the caller and presents a clear menu of options for routing.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Menu Selection",
    description:
      "The caller speaks or presses a key — the system captures intent and navigates to the right branch.",
    icon: User,
  },
  {
    id: 4,
    title: "Intelligent Routing",
    description:
      "AI-powered logic evaluates availability, skills, and caller history to find the optimal destination.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Agent / Self-Service",
    description:
      "The caller reaches the right team or automated flow — resolving the request without hold-time waste.",
    icon: Headphones,
  },
  {
    id: 6,
    title: "Call Analytics",
    description:
      "Every interaction feeds real-time dashboards, giving you the data to continuously improve performance.",
    icon: BarChart3,
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  /* Scroll-driven progress */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.max(0, Math.min(1, (vh - top) / height)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    /* Header slide-in */
    gsap.from(".process-header", {
      y: 40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-header",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });

    /* Connector line draw */
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    /* Step cards — alternating left/right slide */
    steps.forEach((_, i) => {
      const isEven = i % 2 === 0;
      gsap.fromTo(
        `.step-card-${i}`,
        { opacity: 0, x: isEven ? -48 : 48, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.step-card-${i}`,
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* Icon pulse on enter */
      gsap.fromTo(
        `.step-icon-${i}`,
        { scale: 0, rotate: -20 },
        {
          scale: 1,
          rotate: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: `.step-card-${i}`,
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
          delay: 0.15,
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="process-header text-center mb-12">
          <p className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
            How Glocious IVR Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-3">
            From Caller to Resolution —{" "}
            <span className="text-primary">in Seconds</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Six intelligent steps that turn every incoming call into a seamless,
            resolved customer experience.
          </p>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-full transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <p className="text-xs font-mono text-primary/60 text-right mt-1">
            {Math.round(progress * 100)}% through
          </p>
        </div>

        {/* Steps — vertical timeline layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated connector line */}
          <div
            ref={lineRef}
            className="absolute left-5 md:left-7 top-6 bottom-6 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent origin-top"
          />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-card-${index} relative flex gap-5 md:gap-8 items-start`}
              >
                {/* Icon node on the timeline */}
                <div className={`step-icon-${index} relative flex-shrink-0 z-10`}>
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center ring-4 ring-background">
                    <step.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  {/* Active glow when section is scrolled past this step */}
                  {progress > (index + 0.5) / steps.length && (
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 pb-2 group">
                  <div className="bg-white/4 hover:bg-white/8 border border-white/8 hover:border-primary/25 rounded-2xl p-4 md:p-6 transition-all duration-300 cursor-default">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-primary/50 tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1 h-px bg-white/5" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-white mb-1.5 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flow breadcrumb */}
        <div className="flex items-center justify-center gap-1.5 mt-10 flex-wrap">
          {["Caller", "IVR", "Menu", "Route", "Agent", "Analytics"].map(
            (label, i, arr) => (
              <React.Fragment key={label}>
                <span
                  className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 text-white/50"
                  style={{ opacity: 0.4 + (i / arr.length) * 0.6 }}
                >
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-primary/40 text-xs">→</span>
                )}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </section>
  );
}
