"use client";

import React from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ArrowRight, Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export function BlogPostCard({ title, excerpt, category, author, date, image, slug, featured }: BlogPostProps) {
  return (
    <TransitionLink 
        href={`/blog/${slug}`}
        className={cn(
            "group flex flex-col bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300",
            featured ? "md:flex-row md:col-span-2 md:h-[400px]" : "h-full"
        )}
    >
        {/* Image */}
        <div className={cn(
            "relative overflow-hidden",
            featured ? "md:w-1/2 h-64 md:h-full" : "h-48 w-full"
        )}>
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary text-black rounded-full">
                    {category}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className={cn(
            "flex flex-col p-6",
            featured ? "md:w-1/2 justify-center p-8 md:p-12" : "flex-grow"
        )}>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center"><Calendar size={14} className="mr-1"/> {date}</div>
                <div className="flex items-center"><User size={14} className="mr-1"/> {author}</div>
            </div>
            
            <h3 className={cn(
                "font-bold font-heading mb-3 group-hover:text-primary transition-colors",
                featured ? "text-3xl md:text-4xl" : "text-xl"
            )}>
                {title}
            </h3>
            
            <p className="text-muted-foreground mb-6 line-clamp-3">
                {excerpt}
            </p>

            <div className="mt-auto flex items-center text-primary font-medium">
                Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </TransitionLink>
  );
}
