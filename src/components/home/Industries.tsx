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
  Shield,
  Building2,
  Zap,
  Car,
  Scale,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Industry = {
  id: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  problem: string;
  solution: string;
  color: string;
};

// Exactly 15 — 3 rows × 5 columns
const industries: Industry[] = [
  // ── Row 1 ──────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Banking & Finance",
    icon: Banknote,
    problem: "High call volumes overwhelm support during peak hours",
    solution: "Route to accounts, loans, and fraud departments instantly",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: HeartPulse,
    problem: "Patients can't reach the right department quickly",
    solution: "Direct to appointments, prescriptions, and emergencies",
    color: "from-rose-500 to-pink-400",
  },
  {
    id: 3,
    title: "Education",
    icon: GraduationCap,
    problem: "Long wait times for admissions and student support",
    solution: "Auto-route to admissions, financial aid, and services",
    color: "from-emerald-500 to-green-400",
  },
  {
    id: 4,
    title: "Real Estate",
    icon: Home,
    problem: "Property inquiries get lost, leading to missed deals",
    solution: "Connect buyers, sellers, and renters to agents instantly",
    color: "from-violet-500 to-purple-400",
  },
  {
    id: 5,
    title: "E-commerce",
    icon: ShoppingCart,
    problem: "Order and return queries flood customer service lines",
    solution: "Automate tracking, returns, and product inquiries 24/7",
    color: "from-orange-500 to-amber-400",
  },
  // ── Row 2 ──────────────────────────────────────────────────────────────
  {
    id: 6,
    title: "Retail",
    icon: Store,
    problem: "Store hours and inventory questions overwhelm staff",
    solution: "Instant self-service answers; complex issues routed out",
    color: "from-fuchsia-500 to-pink-400",
  },
  {
    id: 7,
    title: "Logistics",
    icon: Truck,
    problem: "Shipment tracking calls create constant phone traffic",
    solution: "Real-time updates and delivery notifications automated",
    color: "from-lime-500 to-green-400",
  },
  {
    id: 8,
    title: "Travel & Hospitality",
    icon: Plane,
    problem: "Booking changes and cancellations surge in travel season",
    solution: "Handle reservations and modifications efficiently",
    color: "from-teal-500 to-cyan-400",
  },
  {
    id: 9,
    title: "Technology",
    icon: Laptop,
    problem: "IT support tickets overwhelm technical teams",
    solution: "Route issues to specialists with live status updates",
    color: "from-indigo-500 to-blue-400",
  },
  {
    id: 10,
    title: "Insurance",
    icon: Shield,
    problem: "Policy queries and claims calls clog agent queues",
    solution: "Self-serve policy info; escalate claims to the right team",
    color: "from-sky-500 to-cyan-400",
  },
  // ── Row 3 ──────────────────────────────────────────────────────────────
  {
    id: 11,
    title: "Government",
    icon: Building2,
    problem: "Citizens struggle to reach the right department",
    solution: "Structured menus route queries to correct civic services",
    color: "from-slate-400 to-blue-400",
  },
  {
    id: 12,
    title: "Utilities",
    icon: Zap,
    problem: "Outage and billing calls spike and overwhelm helpdesks",
    solution: "Automated outage status and billing self-service 24/7",
    color: "from-yellow-400 to-orange-400",
  },
  {
    id: 13,
    title: "Automotive",
    icon: Car,
    problem: "Service bookings and parts queries jam dealership lines",
    solution: "Auto-schedule service slots and route parts inquiries",
    color: "from-zinc-400 to-slate-400",
  },
  {
    id: 14,
    title: "Legal Services",
    icon: Scale,
    problem: "Client intake calls are unstructured and time-consuming",
    solution: "Qualify leads and route to the right practice area fast",
    color: "from-red-500 to-rose-400",
  },
  {
    id: 15,
    title: "Other Businesses",
    icon: Briefcase,
    problem: "Generic lines struggle with diverse inquiry types",
    solution: "Customise call flows for any unique customer journey",
    color: "from-purple-500 to-indigo-400",
  },
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useGSAP(() => {
    /* Header */
    gsap.from(".industries-header > *", {
      y: 24,
      opacity: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".industries-header",
        start: "top 88%",
        toggleActions: "play none none reverse",
      },
    });

    /* All 15 cards fade+slide in together in a fast stagger.
       IMPORTANT: set opacity:1 on all cards immediately so none stay dim */
    const cards = gsap.utils.toArray<HTMLElement>(".industry-card");

    // Reset to visible first so there's no flash of invisible cards
    gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: {
        each: 0.04,
        from: "start",
      },
      duration: 0.55,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".industries-grid",
        start: "top 84%",
        toggleActions: "play none none reverse",
        onLeaveBack: () => gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 }),
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20 bg-background/50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />
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

        {/* ── 5-column grid ──────────────────────────────────────────────
            On screens < md  → 2 columns
            On screens ≥ md  → 5 columns always
            Each row = exactly 5 cards, 3 rows total = 15 cards         */}
        <div className="industries-grid grid grid-cols-2 md:grid-cols-5 gap-3">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden cursor-default
                hover:border-white/25 hover:-translate-y-1
                transition-all duration-300"
              onMouseEnter={() => setHovered(industry.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Per-card colour wash — same opacity for every card */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none`}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${industry.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              />

              <div className="relative z-10 p-4">
                {/* Icon — solid coloured square, same treatment for all */}
                <div className="industry-icon relative inline-flex mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${industry.color}`}
                  >
                    <industry.icon size={17} className="text-white drop-shadow" />
                  </div>
                  {hovered === industry.id && (
                    <span
                      className={`absolute inset-0 rounded-lg bg-gradient-to-br ${industry.color} opacity-50 animate-ping`}
                    />
                  )}
                </div>

                {/* Title — gradient text on hover */}
                <h3
                  className={`text-sm font-bold text-white mb-3 leading-snug
                    group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${industry.color}
                    transition-all duration-300`}
                >
                  {industry.title}
                </h3>

                {/* Problem */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-red-400" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {industry.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="flex items-start gap-2">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
