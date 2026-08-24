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
    description: "A customer calls your business number and connects to the Glocious IVR system through our cloud telephony infrastructure.",
    icon: Phone,
  },
  {
    id: 2,
    title: "IVR Greeting",
    description: "An interactive voice response greets the caller with a professional message and presents menu options for routing.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "Menu Selection",
    description: "The caller selects their preferred option through voice commands or keypad input, guiding the system to the right department.",
    icon: User,
  },
  {
    id: 4,
    title: "Intelligent Routing",
    description: "Our AI-powered routing engine directs the call to the most appropriate agent or self-service option based on availability and intent.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Agent / Self-Service",
    description: "Call connects to the right department or automated self-service, resolving the customer's request efficiently.",
    icon: MapPin,
  },
  {
    id: 6,
    title: "Call Analytics",
    description: "All interactions are recorded and analyzed, providing actionable insights to continuously improve customer experience and operational efficiency.",
    icon: BarChart3,
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Update progress based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      const scrollPercent = Math.max(0, Math.min(1, (viewportHeight - elementTop) / elementHeight));
      setProgress(scrollPercent);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate elements as they come into view
  useGSAP(() => {
    const timeline = gsap.timeline();

    // Animate steps in as they come into view
    steps.forEach((step, index) => {
      const targets = `.step-content-${index}`;
      timeline.fromTo(
        targets,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
        index === 0 ? 0 : index * 0.1
      );
    });

    // Animate the progress bar
    timeline.to(
      ".progress-bar",
      {
        width: `${progress * 100}%`,
        opacity: progress > 0 ? 1 : 0,
      },
      0.5
    );
  }, [progress]);

  return (
    <section 
      ref={containerRef} 
      className="py-24 md:py-48 bg-secondary/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center mb-8">
        <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
          How Glocious IVR Works
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold font-heading mb-3">
          From Caller to Resolution — in Seconds
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          See how our intelligent IVR system transforms every incoming call into a seamless customer experience, routing to the right department instantly.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="relative w-full max-w-4xl mx-auto mb-12">
        <div className="w-full bg-secondary/30 rounded-full overflow-hidden" style={{ height: "4px" }}>
          <div 
            className="bg-primary rounded-full h-2 transition-all duration-500" 
            style={{ width: `${progress * 100}%`, opacity: progress > 0 ? 1 : 0 }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono text-primary tracking-widest">
            {progress > 0 ? Math.round(progress * 100) : 0}% processed
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-6">
        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`step-${index} relative flex flex-col items-center gap-4 md:flex-row md:items-start md:space-y-0 md:space-x-8`}
            >
              {/* Icon */}
              <div 
                className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4"
              >
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <span className="block text-5xl font-bold text-white/30 mb-2">
                  {index + 1}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call flow visualization */}
      <div className="absolute bottom-6 left-6 flex items-center gap-1 text-xs font-medium text-white/60">
        <span>📞</span>
        <span>Caller</span>
        <span>→</span>
        <span>IVR</span>
        <span>→</span>
        <span>Route</span>
        <span>→</span>
        <span>Dept</span>
      </div>
    </section>
  );
}
