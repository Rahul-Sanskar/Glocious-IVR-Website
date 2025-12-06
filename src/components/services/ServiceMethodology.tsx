"use client";

import React from "react";
import { Zap, Shield, Users, Layers } from "lucide-react";

const methods = [
    {
        icon: Users,
        title: "Agile Collaboration",
        desc: "We work in 2-week sprints with transparent boards (Jira/Linear), keeping you in the loop with daily standups and weekly demos."
    },
    {
        icon: Layers,
        title: "Atomic Design",
        desc: "We build scalable design systems, not just pages. Every component is reusable, ensuring consistency and simplified maintenance."
    },
    {
        icon: Shield,
        title: "Security First",
        desc: "Security is baked in, not bolted on. We implement OWASP best practices, automated vulnerability scanning, and strict data encryption."
    },
    {
        icon: Zap,
        title: "Performance Obsessed",
        desc: "We aim for 100/100 Lighthouse scores. We optimize assets, implementation lazy loading, and use edge caching for sub-second load times."
    }
];

export function ServiceMethodology() {
  return (
    <section className="py-24 bg-background border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Our Standard</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Engineering Excellence</h3>
            <p className="text-lg text-muted-foreground">
                Regardless of the service, our foundational approach remains consistent. 
                We bring engineering rigor to creative problems.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methods.map((m, i) => (
                <div key={i} className="p-8 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                        <m.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold font-heading mb-4 text-white">{m.title}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                        {m.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
