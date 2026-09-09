"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceDirectButtonProps {
    className?: string;
    label?: string;
}

export function ServiceDirectButton({ className, label = "Get This Service" }: ServiceDirectButtonProps) {
    return (
        <Button
            size="lg"
            className={`gap-2 ${className}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            {label} <ArrowRight className="w-4 h-4" />
        </Button>
    );
}
