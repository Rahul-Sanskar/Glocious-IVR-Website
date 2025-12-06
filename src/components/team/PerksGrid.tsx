"use client";

import React from "react";
import { Heart, Globe, Zap, Coffee, Monitor, Plane } from "lucide-react";

const perks = [
    { icon: Globe, title: "Remote First", desc: "Work from anywhere. Bali, Tokyo, or your couch." },
    { icon: Heart, title: "Full Health", desc: "Premium medical, dental, and vision for you and yours." },
    { icon: Zap, title: "Performance Bonus", desc: "We share the wins. Uncapped quarterly profit sharing." },
    { icon: Monitor, title: "Top Gear", desc: "Latest MacBook Pro, 4K monitors, and noise-canceling headphones." },
    { icon: Coffee, title: "Wellness Stipend", desc: "$200/month for gym, therapy, or specialized coffee." },
    { icon: Plane, title: "Team Retreats", desc: "Twice a year, we fly the whole team somewhere epic." },
];

export function PerksGrid() {
  return (
    <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">The Benefits</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading">Why we stay.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((perk, i) => (
                <div key={i} className="flex gap-6 p-8 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <perk.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold font-heading mb-2 text-white">{perk.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{perk.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}
