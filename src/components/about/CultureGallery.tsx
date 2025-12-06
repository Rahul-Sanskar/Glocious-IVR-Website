"use client";

import React from "react";
import { cn } from "@/lib/utils";

const photos = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", alt: "Team Collaboration", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", alt: "Office Vibe", span: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", alt: "Strategy Meeting", span: "row-span-1" },
  { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", alt: "Brainstorming", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800", alt: "Coding Session", span: "row-span-1" },
];

export function CultureGallery() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading mb-4">Our Culture</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We foster an environment of creativity, continuous learning, and fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
            {photos.map((photo, index) => (
                <div 
                    key={index} 
                    className={cn(
                        "relative overflow-hidden rounded-2xl group",
                        index === 0 || index === 3 ? "md:row-span-2" : "md:row-span-1"
                    )}
                >
                    {/* Placeholder image usage */}
                    <div className="absolute inset-0 bg-secondary animate-pulse" /> {/* Loading state simulation */}
                    
                    {/* Actual Image (using img for now, in real app Next/Image) */}
                    <img 
                        src={photo.src} 
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium text-lg">{photo.alt}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
