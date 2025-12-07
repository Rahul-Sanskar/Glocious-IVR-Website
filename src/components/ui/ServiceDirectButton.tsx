"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface ServiceDirectButtonProps {
    className?: string;
    label?: string;
}

export function ServiceDirectButton({ className, label = "Get This Service" }: ServiceDirectButtonProps) {
    // Replace this with the actual Google Form URL provided by the user or a placeholder
    const googleFormUrl = "https://forms.gle/wtvTQZpaTCy4Mj718"; 

    return (
        <Button 
            asChild 
            size="lg" 
            className={`gap-2 ${className}`}
        >
            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer">
                {label} <ArrowUpRight className="w-4 h-4" />
            </a>
        </Button>
    );
}
