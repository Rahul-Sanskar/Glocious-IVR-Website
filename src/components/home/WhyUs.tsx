"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  Users,
  ShieldCheck,
  Zap,
  Headphones,
  Layers,
  Target,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const whyGlocious = [
  {
    icon: Award,
    title: "12+ Years Expertise",
    description:
      "A decade-long track record delivering specialised communication technology across global markets.",
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description:
      "Intelligent systems that bridge businesses and customers through innovative telephony solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Enterprise-grade security and robust cloud infrastructure for high-availability 99.9% uptime.",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    description:
      "Platforms that grow with you — from startup to multi-national operation without re-architecting.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock technical assistance to keep your communication channels always operational.",
  },
  {
    icon: Zap,
    title: "Multi-Industry",
    description:
      "Proven expertise across healthcare, finance, retail, and logistics with vertical-specific IVR.",
  },
  {
    icon: Target,
    title: "Results-Oriented",
    description:
      "Systems built to reduce costs, increase efficiency, and measurably improve satisfaction scores.",
  },
];

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    /* Header */
    gsap.from(".why-header > *", {
      y: 32,
      opacity: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    /* Cards — scale + fade in with stagger */
    gsap.from(".why-card", {
      y: 40,
      opacity: 0,
      scale: 0.94,
      stagger: {
        each: 0.08,
        from: "start",
      },
      duration: 0.65,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".why-grid",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });

    /* Icon containers — pop in after cards */
    gsap.from(".why-icon", {
      scale: 0,
      rotate: -15,
      stagger: 0.07,
      duration: 0.45,
      ease: "back.out(2.5)",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".why-grid",
        start: "top 82%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-secondary/30 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="why-header max-w-2xl mb-10">
          <p className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-3">
            The Glocious Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-4">
            Why Choose{" "}
            <span className="text-primary">Glocious Infotech</span>?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We don&apos;t just provide telephony — we build the intelligent
            infrastructure that drives meaningful customer engagement.
          </p>
        </div>

        {/* Grid */}
        <div className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {whyGlocious.map((item, index) => (
            <div
              key={index}
              className={`why-card group relative p-6 rounded-2xl bg-white/4 border border-white/8 backdrop-blur-sm
                hover:bg-white/8 hover:border-primary/30 hover:-translate-y-1
                transition-all duration-300 cursor-default
                ${index === whyGlocious.length - 1 ? "xl:col-span-2" : ""}`}
            >
              {/* Hover gradient sweep */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="why-icon relative z-10 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <item.icon className="w-5 h-5" />
              </div>

              <h3 className="relative z-10 text-base font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="why-card xl:col-span-2 relative p-6 rounded-2xl bg-primary text-white flex flex-col justify-between overflow-hidden group min-h-[200px]">
            {/* Animated rings */}
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/10 group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/10 group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />

            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-white/60 mb-3">
                Get started today
              </p>
              <h3 className="text-xl font-bold mb-2 leading-snug">
                Ready to optimise your communication?
              </h3>
              <p className="text-white/75 text-sm">
                Join 15,000+ businesses using our intelligent IVR platform.
              </p>
            </div>

            <Link
              href="/contact"
              className="relative z-10 inline-flex items-center gap-2 mt-5 self-start px-5 py-2.5 bg-white text-primary rounded-full font-bold text-sm hover:bg-white/90 hover:gap-3 transition-all duration-200 group/btn"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
