"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const GLOCIOUS_BASE_URL = "https://www.glocious.com";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    tl.from(headerRef.current, { yPercent: -100, opacity: 0, duration: 0.1 })
      .from(logoRef.current, { x: -20, opacity: 0, duration: 0.1 }, "-=0.1")
      .from((linksRef.current?.children as HTMLCollection) || [], { y: -10, opacity: 0, stagger: 0.1, duration: 0.1 }, "-=0.1")
      .from(ctaRef.current, { x: 20, opacity: 0, duration: 0.1 }, "-=0.1");
  }, { scope: headerRef });

  const navItems = [
    { label: "IVR Solutions", href: "/ivr-solutions" },
    { label: "Features", href: "/features" },
    { label: "Industries", href: "/industries" },
    { label: "Why Glocious", href: "/#why-glocious" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60 will-change-transform"
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div ref={logoRef} className="flex items-center">
            <Link href={GLOCIOUS_BASE_URL} className="text-xl sm:text-2xl font-bold font-heading tracking-tight relative group">
              Glocious Infotech
            </Link>
          </div>

          <nav ref={linksRef} className="hidden md:flex items-center space-x-4 sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors touch-manipulation"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div ref={ctaRef} className="hidden md:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white touch-manipulation">
              <Link href="/contact">Request IVR Demo</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors z-50 relative p-2 touch-manipulation"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mounted && mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-6 animate-in fade-in duration-200 safe-area-top safe-area-bottom">
          <button
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary md:hidden touch-manipulation"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <nav className="flex flex-col items-center space-y-4 w-full px-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xl sm:text-2xl font-bold font-heading hover:text-primary hover:scale-105 transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary touch-manipulation py-3"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full max-w-xs mt-4 bg-primary hover:bg-primary/90 text-white touch-manipulation"
            >
              <Link href="/contact">Request IVR Demo</Link>
            </Button>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
