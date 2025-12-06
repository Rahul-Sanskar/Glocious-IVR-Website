"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// Removed unused imports
import { ArrowRight, Send } from "lucide-react";

// For now, I will use standard HTML inputs/selects styled with Tailwind to avoid creating 5 shadcn components in one go, 
// ensuring speed and simplicity while maintaining the look.

export function ContactForm() {
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        alert("Message sent! (Simulation)");
    }, 2000);
  };

  return (
    <div className="bg-secondary/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      <h2 className="text-3xl font-bold font-heading mb-6">Let's talk business.</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Name</label>
                <input required className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
            </div>
        </div>

        <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">I'm interested in...</label>
            <div className="grid grid-cols-2 gap-3">
                {["Web Development", "Shopify/E-commerce", "Digital Marketing", "Amazon Services", "Other"].map((item) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => setService(item)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium border transition-all ${
                            service === item 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "bg-background border-white/10 text-muted-foreground hover:border-white/30"
                        }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>

        {service === "Shopify/E-commerce" && (
             <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-300">
                <label className="text-sm font-medium text-muted-foreground">Current Platform (Optional)</label>
                <input className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors" placeholder="WooCommerce, Magento, etc." />
            </div>
        )}

        <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Message</label>
            <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..." />
        </div>

        <Button size="lg" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
