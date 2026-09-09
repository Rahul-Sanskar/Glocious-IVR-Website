"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center
        border border-white/10 bg-white/5 hover:bg-white/10
        text-muted-foreground hover:text-foreground
        transition-all duration-200 touch-manipulation ${className}`}
    >
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ opacity: isDark ? 1 : 0, transform: isDark ? "scale(1) rotate(0deg)" : "scale(0) rotate(90deg)" }}
        aria-hidden="true"
      >
        <Moon className="w-4 h-4" />
      </span>
      <span
        className="absolute inset-0 flex items-center justify-center transition-all duration-300"
        style={{ opacity: isDark ? 0 : 1, transform: isDark ? "scale(0) rotate(-90deg)" : "scale(1) rotate(0deg)" }}
        aria-hidden="true"
      >
        <Sun className="w-4 h-4 text-amber-400" />
      </span>
    </button>
  );
}
