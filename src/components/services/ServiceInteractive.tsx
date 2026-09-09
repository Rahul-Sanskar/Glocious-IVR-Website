"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Plus, Minus } from "lucide-react";

// ── Tech stack badge ──────────────────────────────────────────────
export function TechStackBadge({ name }: { name: string }) {
    return (
        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-white transition-colors cursor-default">
            {name}
        </div>
    );
}

// ── Accordion item ────────────────────────────────────────────────
function AccordionItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, { dependencies: [isOpen] });

    return (
        <div className="border-b border-white/10 last:border-none">
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span
                    className={`text-lg font-bold transition-colors ${
                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    }`}
                >
                    {question}
                </span>
                <span
                    className={`p-1 rounded-full border border-white/10 transition-all duration-300 ${
                        isOpen
                            ? "bg-primary border-primary text-black"
                            : "bg-transparent text-white group-hover:bg-white/10"
                    }`}
                >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <p className="pb-6 text-muted-foreground leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

// ── FAQ list ──────────────────────────────────────────────────────
export function ServiceFAQs({ faqs }: { faqs: { q: string; a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <AccordionItem
                    key={i}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}
