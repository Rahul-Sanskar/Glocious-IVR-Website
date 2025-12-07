"use client";

import React from "react";
import { CircleDot } from "lucide-react";
import Image from "next/image";

export function DeliverablesTimeline() {
  return (
    <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                     <h2 className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-4">What you get</h2>
                     <h3 className="text-4xl md:text-5xl font-bold font-heading mb-8">Tangible Outcomes.</h3>
                     <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        We don't just send you a zip file and disappear. 
                        Our handover process is comprehensive, ensuring your team is empowered to take ownership.
                     </p>
                     
                     <div className="space-y-6">
                        {[
                            "Complete Source Code (Git)", 
                            "Figma Design Source Files", 
                            "Technical Documentation (API/Architecture)", 
                            "Admin Training Sessions",
                            "30-Day Post-Launch Warranty"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-4 p-4 rounded-xl bg-background border border-white/5">
                                <CircleDot className="w-5 h-5 text-accent flex-shrink-0" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                     </div>
                </div>

                <div className="relative">
                    {/* Abstract visual representation of deliverables */}
                    <div className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-secondary to-background">
                       <Image src={'/tangible-outcomes.png'} alt="deliverable-image" width={900} height={900} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
