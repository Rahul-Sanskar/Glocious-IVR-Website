"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, { dependencies: [isOpen] });

    return (
        <div className="border-b border-white/10">
            <button 
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-xl md:text-2xl font-medium transition-colors ${isOpen ? "text-primary" : "text-white group-hover:text-primary/80"}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? "rotate-45 bg-primary border-primary text-black" : "bg-transparent text-white group-hover:bg-white/10"}`}>
                    <Plus className="w-6 h-6" />
                </span>
            </button>
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <p className="pb-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {answer}
                </p>
            </div>
        </div>
    )
}

const faqs = [
    { q: "How does your pricing model work?", a: "We operate on a project-based pricing model for most engagements, ensuring transparency and predictable costs. For ongoing partnerships, we offer retainer packages tailored to your specific growth goals." },
    { q: "Do you work with startups?", a: "Absolutely. We love the energy of startups. However, we are best suited for funded startups ready to scale, rather than early-stage MVPs. Our rigorous process requires a level of commitment to quality that demands adequate resources." },
    { q: "What is your typical project timeline?", a: "A standard corporate website takes 8-12 weeks from discovery to launch. Complex web applications or e-commerce platforms typically range from 3-6 months. We prioritize quality over speed, but we never miss a deadline." },
    { q: "Do you offer post-launch support?", a: "Yes. Launch is just the beginning. We offer comprehensive maintenance and optimization packages to ensure your digital product continues to perform at its peak, adapt to new technologies, and drive results." },
    { q: "What tech stack do you recommend?", a: "We are specialists in the React ecosystem. We strongly advocate for Next.js (App Router) for its performance and SEO benefits, coupled with Tailwind CSS for styling and GSAP for high-end animations." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
             <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Common Questions</h2>
             <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Clarifying <br/> the Complex.</h3>
             <p className="text-lg text-muted-foreground">Don't see your question here? Reach out to our team directly.</p>
        </div>
        
        <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
                <FAQItem 
                    key={i} 
                    question={faq.q} 
                    answer={faq.a} 
                    isOpen={openIndex === i} 
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
