"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceDirectButtonProps {
    className?: string;
    label?: string;
}

export function ServiceDirectButton({ className, label = "Get This Service" }: ServiceDirectButtonProps) {
    return (
        <Button 
            asChild 
            size="lg" 
            className={`gap-2 ${className}`}
        >
            <Link href="/contact">
                {label} <ArrowRight className="w-4 h-4" />
            </Link>
        </Button>
    );
}
