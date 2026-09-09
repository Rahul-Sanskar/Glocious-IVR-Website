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
  BarChart3,
  MapPin,
  Globe,
  Shield,
  Clock,
  Code,
  Headphones,
  PhoneCall,
  PhoneOff,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  IVR Features Data                                                  */
/* ------------------------------------------------------------------ */

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  glowColor: string;
  supported: boolean;
};

const features: Feature[] = [
  {
    id: 1,
    title: "Custom IVR Menus",
    description:
      "Design personalized IVR menus that match your brand voice and business logic. Create multi-level interactive voice responses that guide callers through intuitive menu structures.",
    icon: Phone,
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "#00c2ff",
    supported: true,
  },
  {
    id: 2,
    title: "Intelligent Call Routing",
    description:
      "AI-powered routing algorithms analyze caller intent, business hours, and service availability to direct calls to the most appropriate department or agent, ensuring optimal customer experience.",
    icon: Zap,
    gradient: "from-purple-500 to-violet-500",
    glowColor: "#7c3aed",
    supported: true,
  },
  {
    id: 3,
    title: "Multi-Level IVR",
    description:
      "Advanced hierarchical menu systems with intelligent routing, natural language processing, and adaptive learning for complex customer journeys across multiple departments.",
    icon: MessageSquare,
    gradient: "from-green-500 to-emerald-500",
    glowColor: "#10b981",
    supported: true,
  },
  {
    id: 4,
    title: "Call Analytics",
    description:
      "Real-time call tracking, performance metrics, and intelligent insights through intuitive dashboards. Monitor call volumes, peak times, customer satisfaction, and agent performance.",
    icon: BarChart3,
    gradient: "from-orange-500 to-yellow-500",
    glowColor: "#f59e0b",
    supported: true,
  },
  {
    id: 5,
    title: "Missed Call Management",
    description:
      "Automatic callback systems that capture missed call information, provide follow-up notifications, and ensure no customer opportunity is lost through intelligent retry mechanisms.",
    icon: PhoneOff,
    gradient: "from-pink-500 to-rose-500",
    glowColor: "#ec4899",
    supported: true,
  },
  {
    id: 6,
    title: "Click-to-Call",
    description:
      "Enable one-click calling from your website, dashboard, or application. Seamlessly connect visitors to your support team with pre-filled context and routing preferences.",
    icon: PhoneCall,
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "#6366f1",
    supported: true,
  },
  {
    id: 7,
    title: "Virtual Numbers",
    description:
      "Acquire and manage virtual phone numbers across multiple regions and countries. Present a local presence to customers while routing calls through our cloud infrastructure.",
    icon: Globe,
    gradient: "from-teal-500 to-cyan-500",
    glowColor: "#14b8a6",
    supported: true,
  },
  {
    id: 8,
    title: "Automated Call Handling",
    description:
      "24/7 automated customer support availability with intelligent call flows, self-service options, and seamless escalation to live agents when complex issues arise.",
    icon: Headphones,
    gradient: "from-red-500 to-orange-500",
    glowColor: "#ef4444",
    supported: true,
  },
  {
    id: 9,
    title: "CRM & API Integration",
    description:
      "Seamless integration with your existing CRM systems and business applications. API integration capabilities enable context-aware calling, customer history tracking, and personalized interactions.",
    icon: Code,
    gradient: "from-slate-500 to-gray-500",
    glowColor: "#64748b",
    supported: true,
  },
  {
    id: 10,
    title: "Call Recording",
    description:
      "Secure call recording capabilities for quality assurance, training, and compliance. Record, store, and retrieve call recordings with customizable retention policies and access controls.",
    icon: Shield,
    gradient: "from-amber-500 to-lime-500",
    glowColor: "#eab308",
    supported: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Feature Card Component                                             */
/* ------------------------------------------------------------------ */

function FeatureCard({ feature, index, isMobile = false, reducedMotion = false }: { feature: Feature; index: number; isMobile?: boolean; reducedMotion?: boolean }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsExpanded(false);
  };
  const handleClick = () => setIsExpanded(!isExpanded);

  return (
    <div
      ref={cardRef}
      className="group relative p-4 sm:p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer touch-manipulation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        transform: isHovered
          ? "translateY(-8px) rotateX(5deg) rotateY(" +
            (index % 2 === 0 ? "5deg" : "-5deg") +
            ")"
          : "translateY(0) rotateX(0) rotateY(0)",
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1.2)",
      }}
    >
      {/* Gradient glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${feature.glowColor}15, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Icon with animation */}
      <div
        className="relative mb-6"
        style={{
          transform: isHovered
            ? "scale(1.1) rotate(-5deg)"
            : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1.2)",
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br"
          style={{
            background: `linear-gradient(135deg, ${feature.glowColor}40, ${feature.glowColor}10)`,
            border: `1px solid ${feature.glowColor}30`,
          }}
        >
          <feature.icon className="w-7 h-7 text-white transition-colors duration-300" />
        </div>
        {/* Animated ring on hover */}
        {isHovered && (
          <div
            className="absolute -inset-2 rounded-full border-2 animate-ping"
            style={{ borderColor: feature.glowColor, opacity: 0.3 }}
          />
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Expandable details */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-white/10 animate-fadeIn" style={{ animation: "fadeIn 0.4s ease-out" }}>
          <div className="flex items-center gap-2 text-xs text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono tracking-widest uppercase">
              Glocious Supported Feature
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            This feature is part of our enterprise-grade IVR platform, backed by 12+ years of communication technology expertise.
          </p>
        </div>
      )}

      {/* Expand indicator */}
      <div
        className="absolute top-6 right-6 text-white/30 group-hover:text-white/60 transition-colors"
        style={{ cursor: "pointer" }}
      >
        <svg
          width={20}
          height={20}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          style={{
            transform: isExpanded ? "rotate(45deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main IVR Features Section                                          */
/* ------------------------------------------------------------------ */

export function IVRFeatures() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(rm.matches);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate section header
    tl.from(".features-header", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate feature cards with stagger
    tl.from(
      gridRef.current?.children || [],
      {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 md:py-48 bg-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-transparent opacity-30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-transparent opacity-30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="features-header text-center mb-16">
          <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
            IVR Features
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading mb-3">
            Enterprise-Grade Communication Capabilities
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive IVR platform features designed to transform your customer communication through intelligent automation and real-time analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 touch-manipulation">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={features.indexOf(feature)}
              isMobile={isMobile}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience the power of enterprise IVR?
          </p>
          <button
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Request a Demo
            <svg
              className="ml-2 w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}