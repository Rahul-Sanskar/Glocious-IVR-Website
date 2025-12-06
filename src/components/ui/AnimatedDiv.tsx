"use client"; // 👈 This marks it as a Client Component

import { useEffect, useRef } from "react";
import { animateReveal } from "@/lib/animations";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedDiv({ children, className }: AnimatedDivProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      animateReveal(ref.current);
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}