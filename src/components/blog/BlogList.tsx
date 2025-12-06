"use client";

import React, { useState, useRef } from "react";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { blogPosts } from "@/lib/data";

const categories = ["All", "Web Dev", "Marketing", "E-commerce", "Amazon", "SEO"];


export function BlogList() {
  const [filter, setFilter] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredPosts = blogPosts.filter(post => filter === "All" || post.category === filter);

  useGSAP(() => {
    gsap.fromTo(
      ".blog-item",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" }
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

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
            // Simple logic to show first post as featured only if 'All' is selected and it is indeed featured
            <div key={post.slug} className={cn("blog-item", filter === "All" && index === 0 && post.featured ? "md:col-span-2 lg:col-span-3" : "")}>
                 <BlogPostCard {...post} featured={filter === "All" && index === 0 && post.featured} />
            </div>
        ))}
      </div>
    </div>
  );
}
