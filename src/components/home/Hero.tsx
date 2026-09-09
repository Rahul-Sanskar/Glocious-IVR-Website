"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#080a2e]" />,
});

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = (document.querySelector("header") as HTMLElement)?.offsetHeight ?? 80;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset - 8, behavior: "smooth" });
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set(textRef.current?.children || [], { opacity: 0, y: 50 });
    const typeWriterSpan = textRef.current?.querySelector(".typewriter-text");
    const revealSpan     = textRef.current?.querySelector(".reveal-text");
    if (typeWriterSpan) gsap.set(typeWriterSpan.parentElement, { opacity: 1, y: 0 });

    tl.to(textRef.current?.children || [], { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 });
    if (typeWriterSpan) tl.from(typeWriterSpan, { text: { value: "" }, duration: 1.5, ease: "none" }, "-=0.4");
    if (revealSpan)     tl.to(revealSpan, { opacity: 1, duration: 0.8, ease: "power2.out" });
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080a2e_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — copy */}
          <div ref={textRef} className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-md opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-bold font-mono text-primary tracking-widest uppercase">
                Glocious Infotech
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.05] mb-6 tracking-tighter text-white drop-shadow-lg transform-gpu">
              <span className="typewriter-text inline-block">Turn Every Call Into a Better</span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 animate-pulse-slow text-glow filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] opacity-0 reveal-text">
                Customer Experience
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/30 pl-5 transform-gpu">
              Powerful IVR and cloud telephony solutions that intelligently route calls, streamline
              customer interactions and help businesses manage every conversation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 transform-gpu">
              <Button
                size="xl"
                className="group relative overflow-hidden bg-primary text-white border-none hover:bg-primary/90 text-lg px-10 py-6 rounded-none skew-x-[-10deg] min-w-[220px]"
                onClick={() => scrollTo("services")}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                  Get Your IVR Solution <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="border-white/10 hover:bg-white/5 text-lg px-10 py-6 rounded-none skew-x-[-10deg] backdrop-blur-sm min-w-[220px]"
                onClick={() => scrollTo("ivr-features")}
              >
                <span className="skew-x-[10deg] flex items-center justify-center">
                  Explore IVR Features
                </span>
              </Button>
            </div>
          </div>

          {/* RIGHT — shared consultation form */}
          <div className="w-full">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
