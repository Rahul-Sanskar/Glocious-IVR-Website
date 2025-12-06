"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  gradient: string;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, gradient, href, className }: ServiceCardProps) {
  return (
    <Link 
        href={href} 
        className={cn(
            "group relative overflow-hidden rounded-3xl p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:scale-[1.02]", 
            className
        )}
    >
        {/* Background Gradient */}
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity", gradient)} />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

        {/* Content */}
        <div className="relative z-10">
            <h3 className="text-3xl font-bold font-heading text-white mb-2">{title}</h3>
            <p className="text-white/70 max-w-xs">{description}</p>
        </div>

        {/* Icon/CTA */}
        <div className="relative z-10 self-end">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-6 h-6" />
            </div>
        </div>
    </Link>
  );
}
