"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Banknote,
  HeartPulse,
  GraduationCap,
  Home,
  ShoppingCart,
  Store,
  Truck,
  Plane,
  Laptop,
  Briefcase,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Industry = {
  id: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  problem: string;
  solution: string;
  color: string;
  accent: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Banking & Finance",
    icon: Banknote,
    problem: "High call volumes overwhelm support during peak hours",
    solution: "Route to accounts, loans, and fraud departments instantly",
    color: "from-blue-500 to-cyan-500",
    accent: "blue",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: HeartPulse,
    problem: "Patients can't reach the right department quickly",
    solution: "Direct to appointments, prescriptions, and emergencies",
    color: "from-red-500 to-rose-500",
    accent: "red",
  },
  {
    id: 3,
    title: "Education",
    icon: GraduationCap,
    problem: "Long wait times for admissions and student support",
    solution: "Auto-route to admissions, financial aid, and services",
    color: "from-green-500 to-emerald-500",
    accent: "green",
  },
  {
    id: 4,
    title: "Real Estate",
    icon: Home,
    problem: "Property inquiries get lost, leading to missed deals",
    solution: "Connect buyers, sellers, and renters to agents instantly",
    color: "from-purple-500 to-violet-500",
    accent: "purple",
  },
  {
    id: 5,
    title: "E-commerce",
    icon: ShoppingCart,
    problem: "Order and return queries flood customer service lines",
    solution: "Automate tracking, returns, and product inquiries 24/7",
    color: "from-orange-500 to-yellow-500",
    accent: "orange",
  },
  {
    id: 6,
    title: "Retail",
    icon: Store,
    problem: "Store hour and inventory questions overwhelm staff",
    solution: "Instant self-service answers; complex issues routed out",
    color: "from-pink-500 to-rose-500",
    accent: "pink",
  },
  {
    id: 7,
    title: "Logistics",
    icon: Truck,
    problem: "Shipment tracking calls create constant phone traffic",
    solution: "Real-time updates and delivery notifications automated",
    color: "from-amber-500 to-lime-500",
    accent: "amber",
  },
  {
    id: 8,
    title: "Travel & Hospitality",
    icon: Plane,
    problem: "Booking changes and cancellations surge in travel season",
    solution: "Handle reservations and modifications efficiently",
    color: "from-teal-500 to-cyan-500",
    accent: "teal",
  },
  {
    id: 9,
    title: "Technology",
    icon: Laptop,
    problem: "IT support tickets overwhelm technical teams",
    solution: "Route issues to specialists with status updates",
    color: "from-indigo-500 to-blue-500",
    accent: "indigo",
  },
  {
    id: 10,
    title: "Other Businesses",
    icon: Briefcase,
    problem: "Generic lines struggle with diverse inquiry types",
    solution: "Customise call flows for any unique customer journey",
    color: "from-gray-500 to-slate-500",
    accent: "gray",
  },
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    /* Header */
    gsap.from(".industries-header > *", {
      y: 28,
      opacity: 0,
      stagger: 0.1,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".industries-header",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });

    /* Cards — cascade in with staggered clip reveal */
    const cards = gsap.utils.toArray<HTMLElement>(".industry-card");
    gsap.from(cards, {
      opacity: 0,
      y: 36,
      scale: 0.95,
      stagger: {
        each: 0.06,
        from: "start",
        grid: "auto",
      },
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".industries-grid",
        start: "top 83%",
        toggleActions: "play none none reverse",
      },
    });

    /* Icon wrappers pop in */
    gsap.from(".industry-icon", {
      scale: 0,
      rotate: 10,
      stagger: 0.05,
      duration: 0.4,
      ease: "back.out(2)",
      delay: 0.25,
      scrollTrigger: {
        trigger: ".industries-grid",
        start: "top 83%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-background/50 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="industries-header text-center mb-10">
          <p className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
            Built for Every Business
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
            Industry-Specific{" "}
            <span className="text-primary">IVR Solutions</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Tailored call flows that solve real communication challenges across
            every vertical.
          </p>
        </div>

        {/* Grid */}
        <div className="industries-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card group relative rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm overflow-hidden cursor-default
                hover:border-white/20 hover:-translate-y-1 hover:bg-white/7
                transition-all duration-300"
              onMouseEnter={() => setHovered(industry.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Colour wash on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-400 pointer-events-none`}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${industry.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`}
              />

              <div className="relative z-10 p-4 sm:p-5">
                {/* Icon */}
                <div className="industry-icon relative inline-flex mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${industry.color} bg-opacity-15`}
                  >
                    <industry.icon size={18} className="text-white" />
                  </div>
                  {hovered === industry.id && (
                    <span
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${industry.color} opacity-30 animate-ping`}
                    />
                  )}
                </div>

                {/* Title */}
                <h3
                  className={`text-sm font-bold text-white mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${industry.color} transition-all duration-300`}
                >
                  {industry.title}
                </h3>

                {/* Problem */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400/70" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {industry.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-400/70" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {industry.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
