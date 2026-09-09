"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

type NavItem = {
  label: string;
  /** Full href — e.g. "/contact" or "/#faq" */
  href: string;
};

const navItems: NavItem[] = [
  { label: "IVR Solutions", href: "/#services" },
  { label: "Features",      href: "/#ivr-features" },
  { label: "Industries",    href: "/#industries" },
  { label: "Why Glocious",  href: "/#why-glocious" },
  { label: "Testimonials",  href: "/#testimonials" },
  { label: "FAQ",           href: "/#faq" },
  { label: "Contact",       href: "/#contact" },
];

/** Smooth-scroll to a section id, accounting for the fixed header height. */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerH = document.querySelector("header")?.offsetHeight ?? 80;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.from(headerRef.current, { yPercent: -100, opacity: 0, duration: 0.1 })
      .from(logoRef.current, { x: -20, opacity: 0, duration: 0.1 }, "-=0.1")
      .from(Array.from(linksRef.current?.children ?? []), { y: -10, opacity: 0, stagger: 0.07, duration: 0.1 }, "-=0.1")
      .from(ctaRef.current, { x: 20, opacity: 0, duration: 0.1 }, "-=0.1");
  }, { scope: headerRef });

  /**
   * Handle nav link clicks.
   * - If the href is a hash anchor (/#section):
   *     • On the homepage → smooth scroll immediately.
   *     • On another page → navigate to "/" then scroll after hydration.
   * - Otherwise → regular Next.js navigation.
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
      if (!item.href.startsWith("/#")) return; // let Next.js handle page links

      e.preventDefault();
      const sectionId = item.href.slice(2); // strip "/#"
      setMobileMenuOpen(false);

      if (pathname === "/") {
        scrollToSection(sectionId);
      } else {
        // Navigate home, then scroll once the page has loaded
        router.push("/");
        // Small delay so the homepage DOM is ready
        setTimeout(() => scrollToSection(sectionId), 400);
      }
    },
    [pathname, router]
  );

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-background/60 will-change-transform"
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div ref={logoRef} className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/glocious-logo.png"
                alt="Glocious Infotech"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav ref={linksRef} className="hidden md:flex items-center space-x-4 sm:space-x-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200 cursor-pointer touch-manipulation"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div ref={ctaRef} className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              className="bg-primary hover:bg-primary/90 text-white touch-manipulation"
              onClick={() => {
                if (pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  router.push("/");
                }
              }}
            >
              Request IVR Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
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

      {/* Mobile full-screen menu */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-3xl flex flex-col items-center justify-center animate-in fade-in duration-200"
        >
          <nav className="flex flex-col items-center space-y-2 w-full px-6">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-xl sm:text-2xl font-bold font-heading hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer touch-manipulation py-3 w-full text-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-6 w-full max-w-xs justify-center">
              <ThemeToggle />
              <Button
                className="flex-1 bg-primary hover:bg-primary/90 text-white touch-manipulation"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    router.push("/");
                  }
                }}
              >
                Request IVR Demo
              </Button>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
