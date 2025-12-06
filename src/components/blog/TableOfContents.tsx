"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<TocItem[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.substring(1)),
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    elements.forEach((elem) => {
        const docElem = document.getElementById(elem.id);
        if (docElem) observer.observe(docElem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-32 w-64 p-6 rounded-2xl bg-secondary/10 border border-white/5 backdrop-blur-sm">
      <h4 className="text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6">On this page</h4>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id} style={{ paddingLeft: (heading.level - 2) * 16 }}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-sm transition-colors duration-200 hover:text-primary",
                activeId === heading.id ? "text-primary font-bold" : "text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
