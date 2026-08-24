"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Glocious Testimonials (from approved content specification)        */
/* ------------------------------------------------------------------ */

interface Testimonial {
  text: string;
  author: string;
  designation: string;
  company: string;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    text: "The IVR solution implemented by Glocious transformed our customer service operations, reducing wait times by 60% while increasing satisfaction scores.",
    author: "Healthcare Provider",
    designation: "Director of Operations",
    company: "Healthcare Provider",
    industry: "Healthcare",
  },
  {
    text: "Their cloud telephony platform enabled us to scale our operations across three continents with zero downtime.",
    author: "E-commerce Retailer",
    designation: "VP of Operations",
    company: "E-commerce Retailer",
    industry: "E-commerce",
  },
  {
    text: "The real-time analytics dashboard gives us unprecedented visibility into customer interactions, helping us make data-driven decisions.",
    author: "Financial Services Client",
    designation: "Chief Technology Officer",
    company: "Financial Services Client",
    industry: "Financial Services",
  },
];

export function TestimonialWall() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-rotate with pause on hover/focus
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    autoPlayRef.current = setInterval(() => {
      next();
    }, 5000); // 5 seconds - not aggressive

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPlaying, isHovered, next]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    },
    [next, prev]
  );

  // Touch/Swipe support
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - touchStartX.current);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const threshold = 50;
    if (dragOffset > threshold) {
      prev();
    } else if (dragOffset < -threshold) {
      next();
    }
    setDragOffset(0);
  };

  // Mouse drag support
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    touchStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - touchStartX.current);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const threshold = 50;
    if (dragOffset > threshold) {
      prev();
    } else if (dragOffset < -threshold) {
      next();
    }
    setDragOffset(0);
  };

  // GSAP animation for card transitions
  useGSAP(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [activeIndex]);

  const current = testimonials[activeIndex];

  return (
    <section 
      className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Customer testimonials carousel"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-2">
            Client Feedback
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading">
            What Our Clients Say
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            Trusted by businesses across industries who have transformed their customer communication with Glocious.
          </p>
        </div>

        {/* Main Carousel */}
        <div 
          ref={carouselRef}
          className="relative max-w-4xl mx-auto"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Active Card */}
          <div
            ref={cardRef}
            className="relative p-6 sm:p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm overflow-hidden touch-manipulation"
            style={{
              transform: `translateX(${dragOffset}px)`,
              transition: isDragging ? "none" : "transform 0.3s ease",
            }}
          >
            {/* Gradient accent border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 pointer-events-none" />
            
            {/* Quote icon */}
            <div className="absolute top-8 right-8 text-primary/10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-6.341c0-2.697 2.177-4.905 4.859-4.905.453 0 .907.055 1.36.165V11.11c-.452-.165-.906-.22-1.36-.22-3.577 0-6.5 2.927-6.5 6.533V21h4.644zM4.017 21v-6.341c0-2.697 2.177-4.905 4.859-4.905.453 0 .907.055 1.36.165V11.11c-.452-.165-.906-.22-1.36-.22-3.577 0-6.5 2.927-6.5 6.533V21h4.644z" />
              </svg>
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 text-primary mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-3xl font-light text-white leading-relaxed mb-8">
                &ldquo;{current.text}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {current.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {current.designation}
                  </p>
                  <p className="text-xs text-primary/70 font-mono uppercase tracking-wider">
                    {current.industry}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center text-white"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-8 bg-primary"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex items-center justify-center text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Play/Pause control */}
          <div className="flex items-center justify-center mt-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? "Pause" : "Play"} auto-rotate</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
