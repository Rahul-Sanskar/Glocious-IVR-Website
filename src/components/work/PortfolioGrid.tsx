"use client";

import React, { useState, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock Data - Extensive list
const allProjects = [
  { id: "1", title: "Neon Horizon", category: "Web Dev", year: "2024", slug: "neon-horizon", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" },
  { id: "2", title: "Cyber Finance", category: "Fintech", year: "2023", slug: "cyber-finance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  { id: "3", title: "Orbital UI", category: "Design System", year: "2024", slug: "orbital-ui", image: "https://images.unsplash.com/photo-1558655146-d09347e0c766?auto=format&fit=crop&q=80&w=800" },
  { id: "4", title: "Quantum Compute", category: "SaaS", year: "2022", slug: "quantum-compute", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800" },
  { id: "5", title: "Echo Logistics", category: "Web App", year: "2023", slug: "echo-logistics", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
  { id: "6", title: "Void Fashion", category: "E-commerce", year: "2024", slug: "shopmax-growth", image: "https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=800" },
  { id: "7", title: "Nexus Health", category: "Web Dev", year: "2023", slug: "nexus-health", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" },
  { id: "8", title: "Stellar Realty", category: "Marketing", year: "2022", slug: "stellar-realty", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" },
  { id: "9", title: "Apex Motors", category: "Web Dev", year: "2024", slug: "apex-motors", image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800" },
  { id: "10", title: "Technova SEO", category: "Marketing", year: "2023", slug: "technova-seo", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { id: "11", title: "Solstice Energy", category: "SaaS", year: "2024", slug: "solstice-energy", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800" },
  { id: "12", title: "Mirage VR", category: "E-commerce", year: "2024", slug: "mirage-vr", image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", "Web Dev", "E-commerce", "SaaS", "Marketing", "Design System"];

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  useGSAP(() => {
    // Animate items when filter changes or on load
    gsap.fromTo(
      ".project-card-wrapper", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.1, 
        ease: "power3.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
      }
    );
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <div ref={containerRef} className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold font-mono uppercase tracking-wider border transition-all duration-300 ${
                    filter === cat 
                    ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(59,130,246,0.5)]" 
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-white/50 hover:text-white"
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* Grid - CSS Grid for Masonry-ish look (simple columns for now, true masonry needs JS or columns-count) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card-wrapper"> 
               {/* 
                  To simulate masonry with different heights, we could toggle aspect ratios based on index
                  For now keeping consistent for grid stability 
                */}
                <ProjectCard {...project} />
            </div>
        ))}
      </div>
      
      {/* Load More Trigger (Simulated) */}
      <div className="flex justify-center pt-24">
         <Button variant="outline" size="xl" className="border-white/10 hover:border-primary/50 text-muted-foreground hover:text-white animate-pulse-slow">
            Load More Archives
         </Button>
      </div>
    </div>
  );
}
