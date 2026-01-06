"use client";

import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Our website now loads faster and converts better. The team was thorough and easy to work with.",
    author: "Client Feedback",
    role: "Founder, Online Retail Business",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "They took the time to understand what we actually needed, not just what we asked for.",
    author: "Client Feedback",
    role: "Director, Professional Services Firm",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    text: "Solid work delivered on schedule. We've already recommended them to others in our network.",
    author: "Client Feedback",
    role: "Owner, E-commerce Brand",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useGSAP(() => {
    gsap.fromTo(slideRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { scope: containerRef, dependencies: [current] });

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-secondary" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-12 -left-12 text-primary/20">
            <Quote size={80} />
          </div>

          <div ref={slideRef} className="text-center relative z-10">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
              "{testimonials[current].text}"
            </p>

            <div className="flex flex-col items-center">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].author}
                className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-primary"
              />
              <h4 className="text-lg font-bold">{testimonials[current].author}</h4>
              <p className="text-muted-foreground">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full lg:-mx-24 pointer-events-none">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-3 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-3 rounded-full bg-background border border-white/10 hover:border-primary text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
