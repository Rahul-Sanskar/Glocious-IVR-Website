"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, { scope: ctaRef });

  return (
    <section
      ref={ctaRef}
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
      aria-label="Glocious IVR Contact CTA"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* FIX: ping ring wraps the phone icon so it pulses around it, not below it */}
          <div className="relative inline-flex items-center justify-center mb-12">
            <span className="absolute inset-0 rounded-3xl border-2 border-primary/30 animate-ping opacity-50" />
            <div className="relative w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-12 h-12 text-primary" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary mb-6 leading-tight">
            Ready to Transform Your Business Calls?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Give every customer a faster, smarter path to the right person.
          </p>

          {/* Buttons scroll back to hero form at top */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="inline-flex items-center gap-2">
                Get Your IVR Solution
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>

            <Button
              size="lg"
              className="sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-primary/50 transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Talk to Our Team
            </Button>
          </div>

          {/* FIX: contact info uses inline-flex spans so icons align with text and the separator doesn't strand */}
          <p className="mt-8 text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <a href="tel:+919999114347" className="hover:text-white transition-colors">
                +91 99991 14347
              </a>
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <a href="mailto:kazim@glocious.com" className="hover:text-white transition-colors">
                kazim@glocious.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
