"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
    })
      .from(
        logoRef.current,
        {
          x: -20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .from(
        (linksRef.current?.children as HTMLCollection) || [],
        {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.6"
      )
      .from(
        ctaRef.current,
        {
            x: 20,
            opacity: 0,
            duration: 0.8
        },
        "-=0.6"
      );
  }, { scope: headerRef });

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center">
          <Link href="/" className="text-2xl font-bold font-heading tracking-tight relative group">
            SoftBiz<span className="text-primary group-hover:text-accent transition-colors">.</span>
            <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav ref={linksRef} className="hidden md:flex items-center space-x-8">
          {["Services", "About", "Team", "Work", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-sm font-medium text-muted-foreground hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div ref={ctaRef} className="hidden md:block">
          <Button asChild className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
           {["Services", "About", "Team", "Work", "Blog", "Contact"].map((item, index) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-3xl font-bold font-heading hover:text-primary hover:scale-105 transition-all"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
