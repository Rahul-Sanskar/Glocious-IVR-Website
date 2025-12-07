"use client";

import React from "react";
import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function SocialHub() {
  return (
    <section className="py-24 bg-black">
        <div className="container mx-auto px-6 text-center">
             <h2 className="text-sm font-mono font-bold text-white tracking-widest uppercase mb-12">Connect Elsewhere</h2>
             <div className="flex justify-center gap-12">
                {[
                    { icon: Twitter, label: "Twitter",link:"https://x.com/share?url=https%3A%2F%2Fthesoftbiz.com%2Fcontact%2F" },
                    { icon: Linkedin, label: "LinkedIn",link:"https://www.linkedin.com/in/abdullah-nadeem-lkd/" },
                    { icon: Instagram, label: "Instagram",link:"https://www.instagram.com/abdullahx__.19" },
                    { icon: Github, label: "GitHub",link:"https://github.com/ab9898998989898" },
                ].map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-4 text-muted-foreground hover:text-white transition-colors">
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all">
                            <social.icon className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">{social.label}</span>
                    </a>
                ))}
            </div>
        </div>
    </section>
  );
}
