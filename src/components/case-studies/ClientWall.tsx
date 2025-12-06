"use client";

import React from "react";

const clients = [
    { name: "NeonBank", logo: "XB" },
    { name: "LuxeFit", logo: "LF" },
    { name: "TechCore", logo: "TC" },
    { name: "MediCare", logo: "MC" },
    { name: "EduGenius", logo: "EG" },
    { name: "ShopMax", logo: "SM" },
    { name: "AlphaStream", logo: "AS" },
    { name: "DataFlow", logo: "DF" },
];

export function ClientWall() {
  return (
    <section className="py-24 border-b border-white/5 bg-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-12">
            Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client) => (
                <div key={client.name} className="flex items-center gap-2 group cursor-default">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center font-bold text-white group-hover:bg-primary group-hover:text-black transition-colors">
                        {client.logo}
                    </div>
                    <span className="text-xl font-heading font-bold text-white group-hover:text-primary transition-colors">{client.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
