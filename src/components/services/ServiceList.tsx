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
    image: "/webs-dev.png",
    description: "We build websites using Next.js and React, focusing on fast load times, clean code, and SEO-friendly structure. Whether you need a marketing site or a web application, we deliver production-ready solutions you can maintain and grow.",
    features: ["Next.js & React Development", "Headless CMS Integration", "Performance Optimization", "Responsive Design"],
    color: "text-blue-500",
  },
  {
    id: "shopify-solutions",
    title: "Shopify Solutions",
    image: "/shopify.png",
    description: "From store setup to custom theme development, we help you launch and grow your Shopify store. We handle the technical work so you can focus on your products and customers.",
    features: ["Custom Theme Development", "Store Setup & Migration", "App Integration", "Checkout Optimization"],
    color: "text-green-500",
  },
  {
    id: "amazon-services",
    title: "Amazon Services",
    image: "/amazonss.png",
    description: "We help sellers succeed on Amazon through proper listing optimization, strategic PPC management, and account health monitoring. Our goal is sustainable growth, not quick fixes.",
    features: ["Listing Optimization", "PPC Campaign Management", "Account Management", "Brand Protection"],
    color: "text-orange-500",
  },
  {
    id: "seo-sem",
    title: "SEO & SEM",
    image: "/se.png",
    description: "We improve your search visibility through technical SEO, content optimization, and strategic keyword targeting. Our approach is methodical and focused on long-term results.",
    features: ["Technical SEO Audits", "On-Page Optimization", "Keyword Research", "Local SEO"],
    color: "text-purple-500",
  },
  {
    id: "google-ads",
    title: "Google Ads",
    image: "/google-ads.png",
    description: "We set up and manage Google Ads campaigns focused on getting you qualified leads. We track conversions, optimize bids, and provide transparent reporting on what's working.",
    features: ["Campaign Setup", "Ad Copywriting", "Conversion Tracking", "Performance Reporting"],
    color: "text-red-500",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    image: "/social-media.png",
    description: "We run paid advertising campaigns on Meta, TikTok, and other platforms where your audience spends time. Strategy-first approach with clear goals and measurable results.",
    features: ["Paid Social Campaigns", "Audience Targeting", "Creative Development", "Performance Analysis"],
    color: "text-emerald-500",
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
