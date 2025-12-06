"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export function TransitionOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    // ENTER ANIMATION
    // When the component mounts (on new page load), animate the curtain UP (reveal)
    const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Ensure overlay is visible initially covering the screen
        tl.set(overlayRef.current, { yPercent: 0 })
          .to(overlayRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power2.inOut",
            delay: 0.1 // small delay to allow React to paint
          });

    }, overlayRef);

    return () => ctx.revert();
  }, [pathname]); // Re-run on path change if component stays mounted (though usually layout persists)

  // We'll expose a global animation method or use context for the EXIT animation
  return (
    <div 
        ref={overlayRef} 
        className="transition-overlay fixed inset-0 z-[9999] bg-black pointer-events-none flex items-center justify-center flex-col"
        style={{ transform: "translateY(-100%)" }} // Default state: hidden above
    >
        <div className="absolute inset-x-0 bottom-0 h-1 bg-primary shadow-[0_0_20px_theme('colors.primary.DEFAULT')]"></div>
        <div className="text-white font-mono text-xl tracking-[0.5em] animate-pulse">SOFTBIZ</div>
    </div>
  );
}
