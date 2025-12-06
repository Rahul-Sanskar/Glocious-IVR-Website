"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (href: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    // EXIT ANIMATION
    // Animate curtain DOWN (cover)
    const overlay = document.querySelector(".transition-overlay");
    if (overlay) {
        gsap.fromTo(overlay, 
            { yPercent: 100 }, // Start from bottom
            { 
                yPercent: 0,   // Move to center (cover screen)
                duration: 0.6, 
                ease: "power2.inOut",
                onComplete: () => {
                    router.push(href);
                    // State will reset when new page mounts because Layout might re-render or we rely on useEffect in Overlay
                    // But to be safe, we can timeout functionality or let the next page handle the reveal
                    setTimeout(() => setIsTransitioning(false), 1000);
                }
            }
        );
    } else {
        router.push(href);
    }
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
