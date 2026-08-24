"use client";

import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Plus } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  FAQ Section focused on IVR & Telephony                            */
/* ------------------------------------------------------------------ */

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
                aria-expanded={isOpen}
            >
                <span className={`text-xl md:text-2xl font-medium transition-colors pr-8 ${isOpen ? "text-primary" : "text-white group-hover:text-primary/80"}`}>
                    {question}
                </span>
                <span className={`p-2 rounded-full border border-white/10 transition-all duration-300 flex-shrink-0 ${isOpen ? "rotate-45 bg-primary border-primary text-black" : "bg-transparent text-white group-hover:bg-white/10"}`}>
                    <Plus className="w-6 h-6" />
                </span>
            </button>
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <div className="pb-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                    {answer}
                </div>
            </div>
        </div>
    )
}

const faqs = [
    { 
        q: "What is an IVR system?", 
        a: "An IVR (Interactive Voice Response) system is an automated telephony solution that interacts with callers through voice or keypad inputs. It gathers initial information and directs calls to the appropriate destination based on predefined rules." 
    },
    { 
        q: "How does Glocious IVR work?", 
        a: "Our IVR system connects your business phone lines to a cloud-based intelligence layer. When a call arrives, the system plays your custom greetings and menus, processes the caller's selection, and routes them to the right agent or department instantly." 
    },
    { 
        q: "Can I create a customized IVR menu?", 
        a: "Absolutely. Glocious provides full flexibility to design multi-level menus that match your specific business hierarchy. You can record custom prompts, set business hours, and update your call flows in real-time." 
    },
    { 
        q: "Can IVR route calls to different departments?", 
        a: "Yes. The primary function of our IVR is intelligent routing. It can direct callers to sales, support, billing, or any other department based on their specific needs, ensuring they reach the right person every time." 
    },
    { 
        q: "Can IVR handle high call volumes?", 
        a: "Our cloud-based infrastructure is designed for scalability. It can handle hundreds of concurrent calls without lag, reducing wait times and preventing your lines from ever being 'busy' during peak hours." 
    },
    { 
        q: "Can I track my calls?", 
        a: "Yes. Glocious provides a comprehensive real-time analytics dashboard. You can monitor call volume, peak times, average call duration, and missed call data to optimize your customer service performance." 
    },
    { 
        q: "Can IVR integrate with my existing systems?", 
        a: "Our platform offers API integration capabilities, allowing it to sync with popular CRM systems and business tools. This enables context-aware routing based on your existing customer data." 
    },
    { 
        q: "Can businesses use IVR for customer support?", 
        a: "IVR is ideal for support. It can handle common inquiries (like order status or office hours) through automation while escalating complex technical issues to your professional support staff." 
    },
    { 
        q: "What industries can benefit from IVR?", 
        a: "IVR is effective across sectors including healthcare, banking, e-commerce, real estate, and education. Any business dealing with regular customer inquiries can benefit from the efficiency of automated routing." 
    },
    { 
        q: "How can I get started with Glocious IVR?", 
        a: "Getting started is simple. You can request a demo through our contact form. Our technical team will then help you map out your requirements and design an IVR flow tailored to your business needs." 
    },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 container mx-auto px-6" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
             <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Common Questions</h2>
             <h3 id="faq-heading" className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">IVR & <br/>Telephony FAQ.</h3>
             <p className="text-lg text-muted-foreground">Everything you need to know about optimizing your business communication with Glocious.</p>
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
