"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function JoinMission() {
  return (
    <section className="py-32 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-secondary/50 to-background border border-white/10 p-12 md:p-24 rounded-[3rem] relative overflow-hidden">
             {/* Abstract Shapes */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 blur-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] translate-x-1/2 translate-y-1/2 rounded-full pointer-events-none" />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">Join the Resistance.</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    We're always looking for outliers, misfits, and perfectionists who are tired of the status quo. 
                    If you want to build the future, there's a desk waiting for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Button size="xl" asChild>
                        <Link href="/contact">View Open Roles <ArrowRight className="ml-2 w-5 h-5" /></Link>
                    </Button>
                    <Button variant="outline" size="xl" asChild>
                         <Link href="/about">Read Culture Handbook</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
  );
}
