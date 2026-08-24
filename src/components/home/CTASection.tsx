"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, { scope: ctaRef });

  return (
    <section 
      ref={ctaRef} 
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
      aria-label="Glocious IVR Contact CTA"
    >
      {/* Immersive background connecting to hero */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Premium animated call visual */}
          <div className="relative mb-12 inline-block">
            <div 
              className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <Phone className="w-12 h-12 text-primary" />
            </div>
            <div className="relative">
              <div 
                className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-ping opacity-70"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-6 leading-tight">
            Ready to Transform Your Business Calls?
          </h2>

          {/* Supporting copy */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Give every customer a faster, smarter path to the right person.
          </p>

          {/* CTA Buttons - without asChild to avoid Slot rendering issues */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Button
              size="lg"
              className="flex-1 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="inline-flex items-center">
                Get Your IVR Solution
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Button>

            <Button
              size="lg"
              className="flex-1 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-primary/50 transition-colors"
            >
              <span>Talk to Our Team</span>
            </Button>
          </div>

          {/* Contact info hint */}
          <p className="mt-8 text-sm text-muted-foreground">
            <Phone className="mr-2 w-4 h-4" /> +91 833 228 1750 |
            <Mail className="mr-2 w-4 h-4" /> contact@glocious.com
          </p>
        </div>
      </div>
    </section>
  );
}