"use client";

import React from "react";

const metrics = [
    { label: "Average ROI", value: "350%" },
    { label: "Client Retention", value: "98%" },
    { label: "Uptime Guarantee", value: "99.9%" },
    { label: "Launch On-Time", value: "100%" },
];

export function ClientSuccessMetrics() {
  return (
    <section className="py-24 bg-secondary/5 border-y border-white/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
                {metrics.map((m, i) => (
                    <div key={i} className="px-4">
                        <div className="text-4xl md:text-6xl font-bold font-heading text-primary mb-2 tracking-tighter">{m.value}</div>
                        <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{m.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
