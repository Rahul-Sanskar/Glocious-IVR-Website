"use client";

import React, { useRef } from "react";
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
  Briefcase
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Industry = {
  id: number;
  title: string;
  icon: React.ReactNode;
  problem: string;
  solution: string;
  color: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Banking & Financial Services",
    icon: <Banknote size={24} />,
    problem: "High call volumes during peak hours overwhelm support teams",
    solution: "Route customers to the right department for accounts, loans, and fraud support",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Healthcare",
    icon: <HeartPulse size={24} />,
    problem: "Patients struggle to reach the right department for appointments and emergencies",
    solution: "Direct callers to appointments, prescriptions, and emergency services efficiently",
    color: "from-red-500 to-rose-500",
  },
  {
    id: 3,
    title: "Education",
    icon: <GraduationCap size={24} />,
    problem: "Students and parents face long wait times for admissions and support inquiries",
    solution: "Route inquiries to admissions, financial aid, and student services automatically",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Real Estate",
    icon: <Home size={24} />,
    problem: "Property inquiries get lost or delayed, leading to missed opportunities",
    solution: "Connect buyers, sellers, and renters to the right agents instantly",
    color: "from-purple-500 to-violet-500",
  },
  {
    id: 5,
    title: "E-commerce",
    icon: <ShoppingCart size={24} />,
    problem: "Order status and return inquiries flood customer service lines",
    solution: "Automate order tracking, returns, and product inquiries 24/7",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 6,
    title: "Retail",
    icon: <Store size={24} />,
    problem: "Store hours, inventory, and promotion questions overwhelm staff",
    solution: "Provide instant answers to common questions and route complex issues",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 7,
    title: "Logistics",
    icon: <Truck size={24} />,
    problem: "Shipment tracking and delivery updates create constant phone traffic",
    solution: "Offer real-time tracking updates and delivery notifications automatically",
    color: "from-amber-500 to-lime-500",
  },
  {
    id: 8,
    title: "Travel & Hospitality",
    icon: <Plane size={24} />,
    problem: "Booking changes, cancellations, and itinerary questions peak during travel seasons",
    solution: "Handle reservations, modifications, and travel information efficiently",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 9,
    title: "Technology",
    icon: <Laptop size={24} />,
    problem: "Technical support tickets and service inquiries overwhelm IT teams",
    solution: "Route issues to the right technical specialists and provide status updates",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 10,
    title: "Other Businesses",
    icon: <Briefcase size={24} />,
    problem: "Generic customer service lines struggle to handle diverse inquiry types",
    solution: "Customize call flows to match any business's unique customer journey",
    color: "from-gray-500 to-slate-500",
  }
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(gridRef.current?.children || [], {
      y: 60,
      opacity: 0,
      stagger: 0.05,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-background/50 relative overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] animate-[move_30s_linear_infinite]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
            Built for Every Business
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Industry-Specific IVR Solutions
          </h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tailored IVR experiences that solve unique communication challenges across every industry vertical.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 touch-manipulation">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="group relative p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden touch-manipulation"
              >
                {/* Subtle hover glow */}
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
                
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${industry.color} opacity-10`}>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 text-primary/80 flex items-center justify-center">
                      {industry.icon}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">{industry.title}</h4>
                
                <div className="flex items-start space-x-2 mb-3 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary/50 mt-0.5 flex-shrink-0" />
                  <p className="whitespace-normal">{industry.problem}</p>
                </div>
                
                <div className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary/50 mt-0.5 flex-shrink-0" />
                  <p className="whitespace-normal">{industry.solution}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}