"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Code, ShoppingBag, BarChart3, Globe, Zap, Megaphone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "web-development",
    icon: <Code size={40} />,
    title: "Web Development",
    description: "Custom, high-performance websites built with Next.js and modern technologies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "shopify-solutions",
    icon: <ShoppingBag size={40} />,
    title: "Shopify Solutions",
    description: "Expert Shopify store setup, customization, and app development for e-commerce.",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "amazon-services",
    icon: <Globe size={40} />,
    title: "Amazon Services",
    description: "Comprehensive Amazon FBA management, listing optimization, and PPC campaigns.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    slug: "digital-marketing",
    icon: <Megaphone size={40} />,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies including SEO, SEM, and content marketing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "google-ads",
    icon: <BarChart3 size={40} />,
    title: "Google Ads",
    description: "ROI-focused PPC campaigns to drive targeted traffic and conversions.",
    color: "from-red-500 to-rose-500",
  },
  {
    slug: "social-media",
    icon: <Zap size={40} />,
    title: "Social Media",
    description: "Engaging social media management and advertising across all major platforms.",
    color: "from-indigo-500 to-violet-500",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(gridRef.current?.children || [], {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive digital solutions designed to elevate your brand and drive results.
            </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors overflow-hidden flex flex-col h-full"
            >
              {/* Gradient Blob on Hover */}
              <div
                className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              />

              <div className={`mb-6 text-foreground/80 group-hover:text-primary transition-colors`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 font-heading">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary font-bold tracking-wide uppercase text-sm hover:text-accent transition-colors mt-auto">
                Learn More <Code className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
