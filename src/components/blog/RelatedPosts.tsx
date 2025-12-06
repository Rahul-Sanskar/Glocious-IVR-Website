"use client";

import React from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";

export function RelatedPosts() {
  return (
    <section className="py-24 bg-secondary/5 border-t border-white/5">
        <div className="container mx-auto px-6">
            <h3 className="text-2xl font-bold font-heading mb-8">Read Next</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[0, 1, 2].map((i) => (
                    <TransitionLink key={i} href="/blog/future-of-web-dev" className="group block">
                        <div className="aspect-video bg-secondary rounded-xl mb-4 overflow-hidden">
                             <img src={`https://images.unsplash.com/photo-${i === 0 ? "1550745165-9bc0b252726f" : i === 1 ? "1519389950476-2953d60f36b2" : "1451187580459-43490279c0fa"}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Blog" />
                        </div>
                        <div className="text-sm text-primary font-mono mb-2">Strategy</div>
                        <h4 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">The Future of headless commerce is here.</h4>
                    </TransitionLink>
                ))}
            </div>
        </div>
    </section>
  );
}
