"use client";

import React from "react";
import { Clock } from "lucide-react";

const offices = [
    { city: "London", address: "34 Chandlers Close, Feltham. Middx. London UK TW3 3QG", time: "GMT (UTC+0)" },
    { city: "Singapore", address: "Suite No 7. Smith Street. Orchid. Singapore 408600", time: "SGT (UTC+8)" },
    { city: "Pakistan", address: "Office No 4, 2nd Floor, Baber Plaza, 657 G1, Johar Town Lahore. Pakistan", time: "PKT (UTC+5)" },
];

export function GlobalOffices() {
  return (
    <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
             <div className="text-center mb-16">
                <h2 className="text-sm font-mono font-bold text-accent tracking-widest uppercase mb-4">Our Footprint</h2>
                <h3 className="text-4xl md:text-5xl font-bold font-heading">Global Presence.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {offices.map((office, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-secondary/10 border border-white/5 hover:border-primary/50 transition-colors">
                        <h4 className="text-2xl font-bold font-heading mb-4 text-white">{office.city}</h4>
                        <p className="text-muted-foreground mb-6">{office.address}</p>
                        <div className="flex items-center text-sm font-mono text-primary">
                            <Clock className="w-4 h-4 mr-2" />
                            {office.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
