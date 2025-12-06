"use client";

import React, { useRef } from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blogPosts } from "@/lib/data";

export function FeaturedPostHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    
    tl.fromTo(".hero-content > *", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
    )
    .fromTo(".hero-image", 
        { scale: 1.1, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.2 }, 
        "-=0.6"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden mb-24 rounded-3xl mx-auto container px-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 hero-image">
            <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 hero-content">
            <div className="max-w-3xl">
                <span className="inline-block px-4 py-2 mb-6 text-xs font-bold font-mono tracking-widest text-black bg-primary rounded-full uppercase">
                    Featured Article
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
                    {featuredPost.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl line-clamp-2">
                    {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-10 font-mono">
                    <div className="flex items-center gap-2">
                        <User size={16} className="text-primary" />
                        <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-primary" />
                        <span>{featuredPost.date}</span>
                    </div>
                </div>

                <TransitionLink 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 group"
                >
                    Read Story
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </TransitionLink>
            </div>
        </div>
    </section>
  );
}
