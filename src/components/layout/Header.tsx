"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Import Portal
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // To handle hydration safely

  // Avoid hydration mismatch for Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Entry Animation
    tl.from(headerRef.current, { yPercent: -100, opacity: 0, duration: 0.1 })
      .from(logoRef.current, { x: -20, opacity: 0, duration: 0.1 }, "-=0.1")
      .from((linksRef.current?.children as HTMLCollection) || [], { y: -10, opacity: 0, stagger: 0.1, duration: 0.1 }, "-=0.1")
      .from(ctaRef.current, { x: 20, opacity: 0, duration: 0.1 }, "-=0.1");

    // 2. Smart Scroll Logic
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      // CRITICAL: Do not hide header if mobile menu is open
      if (mobileMenuOpen) return;

      const currentScrollY = window.scrollY;
      const header = headerRef.current;
      
      if (!header) return;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling Down -> Hide
        gsap.to(header, { yPercent: -100, duration: 0.3, ease: "power2.inOut", overwrite: true });
      } else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        // Scrolling Up -> Show
        gsap.to(header, { yPercent: 0, duration: 0.3, ease: "power2.inOut", overwrite: true });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, { scope: headerRef, dependencies: [mobileMenuOpen] }); // Add mobileMenuOpen dependency

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60 will-change-transform"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center">
            <Link href="/" className="text-2xl font-bold font-heading tracking-tight relative group">
              SoftBiz<span className="text-primary group-hover:text-accent transition-colors">.</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav ref={linksRef} className="hidden md:flex items-center space-x-8">
            {["Services", "About", "Team", "Work", "Blog"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div ref={ctaRef} className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
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
      </header>

      {/* PORTAL: Renders the menu outside the header, attached to the body */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-200">
           {/* Close button inside portal for easier access on large screens */}
           <button 
             className="absolute top-6 right-6 p-2 text-foreground hover:text-primary md:hidden"
             onClick={() => setMobileMenuOpen(false)}
           >
             <X size={24} />
           </button>

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
        </div>,
        document.body
      )}
    </>
  );
}