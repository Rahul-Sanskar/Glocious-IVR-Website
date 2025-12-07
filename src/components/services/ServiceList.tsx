"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { animateReveal } from "@/lib/animations";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const servicesDetail = [
  {
    id: "web-development",
    title: "Web Development",
    image:"/webs-dev.png",
    description: "We build pixel-perfect, high-performance websites using the latest technologies. From simple landing pages to complex web applications, we ensure your digital presence is robust and scalable.",
    features: ["Next.js & React", "Headless CMS Integration", "Performance Optimization", "Accessibility Compliance"],
    color: "text-blue-500",
  },
  {
    id: "shopify-solutions",
    title: "Shopify Solutions",
    image:"/shopify.png",
    description: "Elevate your e-commerce business with our expert Shopify services. We specialize in custom theme development, app integration, and conversion rate optimization.",
    features: ["Custom Theme Development", "Store Setup & Migration", "App Integration", "Conversion Optimization"],
    color: "text-green-500",
  },
  {
    id: "amazon-services",
    title: "Amazon Services",
    image:"/amazonss.png",
    description: "Dominate the world's largest marketplace. Our comprehensive Amazon FBA management and marketing strategies help you increase sales and visibility.",
    features: ["FBA Management", "Listing Optimization (SEO)", "PPC Campaign Management", "Brand Protection"],
    color: "text-orange-500",
  },
  {
    id: "seo-sem",
    title: "SEO & SEM",
    image:"/se.png",
    description: "We drive organic traffic and maximize visibility through meticulous search engine optimization (SEO) and search engine marketing (SEM) strategies.",
    features: ["Technical SEO", "On-Page Optimization", "Keyword Research", "Local SEO"],
    color: "text-purple-500",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    image:"/google-ads.png",
    description: "Maximize your ROI with targeted and effective PPC campaigns across platforms like Google, ensuring immediate, high-quality traffic to your site.",
    features: ["Campaign Setup", "Ad Copywriting", "Bid Management", "A/B Testing"],
    color: "text-red-500",
  },
];
export function ServiceList() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".service-item");
    
    sections.forEach((section) => {
        // Use optimized global animation utility
        const items = section.querySelectorAll(".animate-item");
        animateReveal(items, 0.1); // Staggered reveal
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-24 space-y-32">
      {servicesDetail.map((service, index) => (
        <div key={service.id} id={service.id} className="service-item container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className={`order-2 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
            <h3 className="animate-item text-4xl font-bold font-heading mb-6">{service.title}</h3>
            <p className="animate-item text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.description}
            </p>
            <ul className="animate-item space-y-4 mb-8">
                {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="animate-item">
                 <Button asChild size="lg" variant="outline">
                    <Link href={`/services/${service.id}`}>Learn More</Link>
                </Button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className={`order-1 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
             <div className="animate-item w-full aspect-video rounded-3xl bg-secondary border border-white/10 flex items-center justify-center relative overflow-hidden group">
               <Image src={service.image} width={900} height={900} className="w-full h-full object-cover" alt="service image" />
             </div>
          </div>

        </div>
      ))}
    </div>
  );
}
