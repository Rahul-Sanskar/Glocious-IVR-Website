"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const categories = ["All", "E-commerce", "SaaS", "Local Business", "Enterprise"];

const clients = [
  { name: "TechNova", category: "SaaS", logo: "TN" },
  { name: "ShopMax", category: "E-commerce", logo: "SM" },
  { name: "GlobalCorp", category: "Enterprise", logo: "GC" },
  { name: "UrbanEats", category: "Local Business", logo: "UE" },
  { name: "StreamLine", category: "SaaS", logo: "SL" },
  { name: "FashionForward", category: "E-commerce", logo: "FF" },
  { name: "GreenEnergy", category: "Enterprise", logo: "GE" },
  { name: "BistroOne", category: "Local Business", logo: "BO" },
  { name: "CloudScale", category: "SaaS", logo: "CS" },
  { name: "PureBeauty", category: "E-commerce", logo: "PB" },
];

export function ClientLogoWall() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredClients = clients.filter(c => filter === "All" || c.category === filter);

  useGSAP(() => {
    gsap.fromTo(
      ".client-logo",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, stagger: 0.05, duration: 0.4, ease: "back.out(1.7)" }
    );
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <section className="py-24 bg-background" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-heading mb-8">Our Partners in Success</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
                    filter === cat 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-white/10"
                )}
                >
                {cat}
                </button>
            ))}
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {filteredClients.map((client, index) => (
                <div 
                    key={`${client.name}-${index}`}
                    className="client-logo aspect-square rounded-2xl bg-secondary/50 border border-white/5 flex items-center justify-center hover:border-primary/50 transition-colors group cursor-pointer"
                >
                    {/* Placeholder Logo */}
                    <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="text-2xl font-bold font-heading text-muted-foreground group-hover:text-primary">{client.logo}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
