"use client";

import React, { useState, useRef } from "react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { caseStudies } from "@/lib/data";

const categories = ["All", "E-commerce", "SaaS", "FinTech"];

const mappedStudies = caseStudies.map(study => ({
  title: study.title,
  client: study.slug.split('-')[0], // derived client name
  category: study.category,
  stat: study.stats.roi,
  statLabel: "ROI",
  image: study.image,
  slug: study.slug,
  color: study.category === "E-commerce" ? "text-green-400" : study.category === "SaaS" ? "text-blue-400" : "text-purple-400"
}));


export function CaseStudyList() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredStudies = mappedStudies.filter(cs => filter === "All" || cs.category === filter);

  useGSAP(() => {
    gsap.fromTo(
      ".cs-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [filter] });

  return (
    <div ref={containerRef}>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-transparent",
              filter === cat 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-white/10"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredStudies.map((study, index) => (
            <div key={study.slug} className="cs-card">
                 <CaseStudyCard {...study} />
            </div>
        ))}
      </div>
    </div>
  );
}
