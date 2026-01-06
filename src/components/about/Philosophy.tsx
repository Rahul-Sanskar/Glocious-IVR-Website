"use client";

import React from "react";

export function Philosophy() {
    return (
        <section className="py-32 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">Our Approach</h2>
                <h3 className="text-5xl md:text-7xl font-bold font-heading mb-8">
                    Quality <span className="italic font-serif text-accent">Matters.</span>
                </h3>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    We believe that good software should be both functional and well-crafted.
                    Every project we take on gets the attention it deserves—from initial planning
                    through final delivery.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <span className="text-6xl mb-6 block">⚡</span>
                    <h4 className="text-xl font-bold font-heading mb-4">Performance</h4>
                    <p className="text-muted-foreground">Fast-loading sites that don't keep your visitors waiting. We optimize for speed because it directly impacts your business.</p>
                </div>
                <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <span className="text-6xl mb-6 block">🎯</span>
                    <h4 className="text-xl font-bold font-heading mb-4">Attention to Detail</h4>
                    <p className="text-muted-foreground">The small things add up. We pay attention to typography, spacing, and interactions because they shape how users experience your product.</p>
                </div>
                <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                    <span className="text-6xl mb-6 block">📈</span>
                    <h4 className="text-xl font-bold font-heading mb-4">Long-Term Thinking</h4>
                    <p className="text-muted-foreground">We build with the future in mind. Our solutions are designed to grow with your business, not become a limitation.</p>
                </div>
            </div>
        </section>
    );
}
