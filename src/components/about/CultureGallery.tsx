"use client";

import React from "react";
import { cn } from "@/lib/utils";

const photos = [
  { src: "/culture-1.jpg", alt: "Code on dark monitors in an agency workspace", span: "row-span-2" },
  { src: "/culture-2.jpg", alt: "Circuit board close-up representing technical precision", span: "row-span-1" },
  { src: "/culture-3.jpg", alt: "Digital data flow and code visualization", span: "row-span-1" },
  { src: "/culture-4.jpg", alt: "Modern dark agency studio workspace", span: "row-span-2" },
  { src: "/culture-5.jpg", alt: "Abstract 3D geometric forms representing creative problem-solving", span: "row-span-1" },
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
