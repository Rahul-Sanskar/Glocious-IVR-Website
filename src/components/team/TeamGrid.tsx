"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { animateReveal } from "@/lib/animations";

const departments = ["All", "Leadership", "Development", "Design", "Marketing"];

const team = [
  { name: "Alex Morgan", role: "CEO & Founder", dept: "Leadership", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400", quote: "Innovation is our currency." },
  { name: "Sarah Chen", role: "CTO", dept: "Leadership", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", quote: "Code is poetry." },
  { name: "Mike Ross", role: "Lead Developer", dept: "Development", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", quote: "Clean code, clear mind." },
  { name: "Jessica Suits", role: "Creative Director", dept: "Design", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400", quote: "Design is intelligence made visible." },
  { name: "David Kim", role: "Head of Marketing", dept: "Marketing", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400", quote: "Data tells the story." },
  { name: "Emily Blunt", role: "UI/UX Designer", dept: "Design", image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&q=80&w=400", quote: "Empathy drives design." },
  // Add more as needed
];

export function TeamGrid() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredTeam = team.filter(member => filter === "All" || member.dept === filter);

  useGSAP(() => {
    // Animate items when filter changes using optimized utility
    const cards = gsap.utils.toArray(".team-card");
    animateReveal(cards, 0.05);
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <section className="py-12" ref={containerRef}>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {departments.map((dept) => (
          <button
            key={dept}
            onClick={() => setFilter(dept)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
              filter === dept 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-white/10"
            )}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {filteredTeam.map((member, index) => (
          <div 
            key={`${member.name}-${index}`} 
            className="team-card group relative h-[450px] rounded-2xl overflow-hidden bg-secondary"
          >
            <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:grayscale"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold font-heading text-white">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                </div>
                
                {/* Reveal on Hover */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    <p className="text-sm text-gray-300 italic mb-4">"{member.quote}"</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-white hover:text-primary transition-colors"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
