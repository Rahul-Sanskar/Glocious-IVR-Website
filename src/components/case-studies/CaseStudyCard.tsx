"use client";

import React from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyProps {
  title: string;
  client: string;
  category: string;
  stat: string;
  statLabel: string;
  image: string;
  slug: string;
  color: string;
}

export function CaseStudyCard({ title, client, category, stat, statLabel, image, slug, color }: CaseStudyProps) {
  return (
    <TransitionLink 
        href={`/case-studies/${slug}`}
        className="group relative block w-full h-[500px] rounded-3xl overflow-hidden"
    >
        {/* Image Background */}
        <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
                 <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white rounded-full border border-white/10">
                    {category}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-6 h-6" />
                </div>
            </div>

            <div className="space-y-4">
                <div className={cn("text-5xl font-bold font-heading", color)}>
                    {stat}
                </div>
                <p className="text-sm text-gray-300 uppercase tracking-widest font-medium border-l-2 border-white/20 pl-3">
                    {statLabel}
                </p>
                <div className="pt-4">
                    <h3 className="text-3xl font-bold font-heading text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="text-lg text-white/70">{client}</p>
                </div>
            </div>
        </div>
    </TransitionLink>
  );
}
