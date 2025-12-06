"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Star } from "lucide-react";

const testimonials = [
  { text: "SoftBiz completely redefined our brand.", author: "CEO of TechCorp" },
  { text: "The best engineering team we've ever worked with.", author: "CTO of StartupX" },
  { text: "Radical creativity meets rock-solid code.", author: "Director at CreativeAgency" },
  { text: "Our conversion rates doubled overnight.", author: "Head of Growth, ShopMax" },
  { text: "A truly futuristic approach to web design.", author: "Founder, FutureLabs" },
  { text: "They didn't just build a site; they built an experience.", author: "VP Marketing, BigBrand" },
  { text: "Seamless execution from start to finish.", author: "Product Manager, SaaSCore" },
  { text: "The 3D elements are mind-blowing.", author: "Design Lead, ArtStudio" },
];

// Duplicate for infinite loop
const reviews = [...testimonials, ...testimonials, ...testimonials];

export function TestimonialWall() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Row 1: Left to Right
    gsap.to(row1Ref.current, {
      xPercent: -50,
      ease: "none",
      duration: 30, // Slow constant speed
      repeat: -1,
    });
    
    // Row 2: Right to Left
    gsap.to(row2Ref.current, {
        xPercent: 50, // Start from -50 (set in CSS/Tailwind) so it goes right? or 0 to -50
        // To go Right to Left: Start at 0, go to -50.
        // To go Left to Right: Start at -50, go to 0.
    });
    gsap.fromTo(row2Ref.current, 
        { xPercent: -50 },
        { xPercent: 0, ease: "none", duration: 35, repeat: -1 }
    );

  }, { scope: row1Ref }); // Scope doesn't matter much here since we targeted refs directly, but good practice

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="text-center mb-16 px-6">
         <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Client Feedback</h2>
         <h3 className="text-4xl md:text-5xl font-bold font-heading">Don't take our word for it.</h3>
      </div>

      <div className="flex flex-col gap-8 relative mask-linear-fade">
         {/* Row 1 */}
         <div className="flex w-max gap-8" ref={row1Ref}>
            {reviews.map((review, i) => (
                <div key={i} className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-secondary/10 border border-white/5 backdrop-blur-sm flex-shrink-0">
                    <div className="flex gap-1 text-primary mb-4">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-lg text-white mb-6 italic">"{review.text}"</p>
                    <p className="text-sm font-mono text-muted-foreground uppercase">{review.author}</p>
                </div>
            ))}
         </div>

         {/* Row 2 */}
         <div className="flex w-max gap-8" ref={row2Ref}>
            {reviews.map((review, i) => (
                <div key={i} className="w-[300px] md:w-[400px] p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm flex-shrink-0">
                    <div className="flex gap-1 text-accent mb-4">
                        {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-lg text-white mb-6 italic">"{review.text}"</p>
                    <p className="text-sm font-mono text-muted-foreground uppercase">{review.author}</p>
                </div>
            ))}
         </div>
      </div>
      
      {/* Gradient Masks for edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
