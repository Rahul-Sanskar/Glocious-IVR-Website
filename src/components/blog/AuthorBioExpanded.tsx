import React from "react";
import { Twitter, Linkedin } from "lucide-react";

export function AuthorBioExpanded() {
  return (
    <div className="py-12 border-y border-white/10 my-16">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Author" className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-xl font-bold font-heading mb-2 text-white">Written by Alex Morgan</h3>
                <p className="text-sm text-primary font-mono mb-4">CEO & Founder @ SoftBiz</p>
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    Alex is a veteran software engineer turned agency founder. He writes about the intersection of design systems, web performance, and the future of digital business. 
                    His work has been featured in Smashing Magazine and CSS-Tricks.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <a href="#" className="flex items-center text-sm font-bold text-white hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4 mr-2" /> Follow
                    </a>
                    <a href="#" className="flex items-center text-sm font-bold text-white hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4 mr-2" /> Connect
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}
