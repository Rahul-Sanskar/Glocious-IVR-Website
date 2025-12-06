"use client";

import React from "react";

export function Philosophy() {
  return (
    <section className="py-32 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">Our DNA</h2>
            <h3 className="text-5xl md:text-7xl font-bold font-heading mb-8">
                Code as <span className="italic font-serif text-accent">Art.</span>
            </h3>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                We reject the notion that utility must compromise beauty. 
                We believe that the most powerful software feels like magic, 
                and that every interaction is an opportunity to inspire.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <span className="text-6xl mb-6 block">🚀</span>
                <h4 className="text-xl font-bold font-heading mb-4">Velocity</h4>
                <p className="text-muted-foreground">Speed is a feature. We optimize for milliseconds because attention is the world's most valuable currency.</p>
            </div>
            <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <span className="text-6xl mb-6 block">💎</span>
                <h4 className="text-xl font-bold font-heading mb-4">Precision</h4>
                <p className="text-muted-foreground">God is in the details. We sweat the small stuff—kerning, easing curves, border radii—so you don't have to.</p>
            </div>
            <div className="p-12 border border-white/10 rounded-2xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                <span className="text-6xl mb-6 block">🔮</span>
                <h4 className="text-xl font-bold font-heading mb-4">Vision</h4>
                <p className="text-muted-foreground">We build for tomorrow. Our solutions are designed to scale, adapt, and lead the market, not just follow it.</p>
            </div>
        </div>
    </section>
  );
}
