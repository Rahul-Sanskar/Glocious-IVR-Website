"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Phone, BarChart3, Globe, Zap, Megaphone, Code } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    slug: "ivr-solutions",
    icon: <Phone size={40} />,
    title: "IVR Solutions",
    description: "Intelligent Interactive Voice Response systems that automate customer interactions, reduce manual workload, and provide 24/7 support availability.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "cloud-telephony",
    icon: <Globe size={40} />,
    title: "Cloud Telephony",
    description: "Scalable cloud-based telephony infrastructure with virtual numbers, click-to-call functionality, and seamless integration with existing business systems.",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "call-analytics",
    icon: <BarChart3 size={40} />,
    title: "Call Analytics",
    description: "Real-time call tracking, performance metrics, and intelligent insights to optimize customer engagement and improve business decisions.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    slug: "missed-call-handling",
    icon: <Megaphone size={40} />,
    title: "Missed Call Handling",
    description: "Automatic callback systems that capture missed call information, provide follow-up notifications, and ensure no customer opportunity is lost.",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "crm-integration",
    icon: <Code size={40} />,
    title: "CRM Integration",
    description: "Seamless integration with your existing CRM systems to provide context-aware calling, customer history tracking, and personalized interactions.",
    color: "from-red-500 to-rose-500",
  },
  {
    slug: "multi-level-ivr",
    icon: <Zap size={40} />,
    title: "Multi-Level IVR",
    description: "Advanced hierarchical menu systems with intelligent routing, natural language processing, and adaptive learning for complex customer journeys.",
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
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our IVR Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive cloud telephony solutions designed to transform your customer communication through intelligent automation and real-time analytics.
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
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
