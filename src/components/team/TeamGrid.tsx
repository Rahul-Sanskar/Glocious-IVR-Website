"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Linkedin, Twitter, Mail, Instagram, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { animateReveal } from "@/lib/animations";

const departments = ["All", "Leadership", "Development", "Design", "Marketing"];

const team = [
  { 
    name: "Shahid Nadeem", 
    role: "CEO & Founder, Chairman", 
    dept: "Leadership", 
    image: "/shahid.png",
    quote: "Leading with vision and purpose." 
  },
  { 
    name: "Abdullah Nadeem", 
    role: "Director & Co-Founder , Lead Developer", 
    dept: "Leadership, Development, Design", 
    image: "/abdullah.jpg",
    quote: "Building ideas into reality." ,
    linkedin: "https://www.linkedin.com/in/abdullah-nadeem-319560285",
    instagram: "https://www.instagram.com/abdullahx__.19",
    mail: "abdullahnadeem2580@gmail.com",
    github:"https://github.com/ab9898998989898"
  },
  { 
    name: "Muhammad Hassan", 
    role: "CMO, Marketing Head", 
    dept: "Marketing", 
    image: "/hassan-avatar.png",
    quote: "Marketing that creates impact." 
  }
];


export function TeamGrid() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredTeam = team.filter(member => {
  if (filter === "All") return true;

  return member.dept.split(",").map(d => d.trim()).includes(filter);
});


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
                alt={`${member.name}, ${member.role} at SoftBiz`}
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
                        <a href={member.linkedin} aria-label={`${member.name} on LinkedIn`} className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        <a href={member.instagram} aria-label={`${member.name} on Instagram`} className="text-white hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href={`mailto:${member.mail}`} aria-label={`Email ${member.name}`} className="text-white hover:text-primary transition-colors"><Mail size={20} /></a>
                        {member.name === "Abdullah Nadeem" && <a href={member.github} aria-label={`${member.name} on GitHub`} className="text-white hover:text-primary transition-colors"><Github size={20} /></a>}
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
