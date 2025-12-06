"use client";

import React, { useState, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDirectButton } from "@/components/ui/ServiceDirectButton";
import { notFound } from "next/navigation";
import { Code, ShoppingBag, BarChart3, Globe, Zap, Megaphone, CheckCircle2, ArrowRight, Layers, Box, Cpu, ShieldCheck, Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// --- Local Components ---

function TechStackBadge({ name }: { name: string }) {
    return (
        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground hover:bg-white/10 hover:text-white transition-colors cursor-default">
            {name}
        </div>
    );
}

function AccordionItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, { dependencies: [isOpen] });

    return (
        <div className="border-b border-white/10 last:border-none">
            <button 
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"}`}>
                    {question}
                </span>
                <span className={`p-1 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? "bg-primary border-primary text-black" : "bg-transparent text-white group-hover:bg-white/10"}`}>
                   {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
                <p className="pb-6 text-muted-foreground leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    )
}

// --- Data ---

const servicesData: Record<string, { 
    title: string; 
    shortDesc: string; 
    longDesc: string;
    icon: any; 
    tools: string[];
    deliverables: string[];
    process: { step: string; title: string; desc: string }[];
    whyUs: string;
    benefits: string[];
    faqs: { q: string, a: string }[];
}> = {
  "web-development": {
    title: "Web Development",
    shortDesc: "Custom, high-performance websites built with Next.js and modern technologies.",
    longDesc: "In the digital age, your website is your headquarters. We don't just build websites; we engineer digital experiences that convert. Using cutting-edge technologies like Next.js, React, and server-side rendering, we ensure your site is lightning-fast, SEO-optimized, and scalable. Whether you need a complex web application, a corporate portal, or a dazzling marketing site, our code is clean, maintainable, and built for the future. We obsess over Web Vitals, ensuring you pass Google's metrics with flying colors.",
    icon: Code,
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel", "GSAP", "Framer Motion"],
    deliverables: [
        "Fully Responsive Progressive Web App (PWA)",
        "SEO-Optimized Semantic HTML Structure",
        "High-Fidelity Animations & Interactions",
        "CMS Integration (Sanity, Contentful, or Strapi)",
        "Automated CI/CD Deployment Pipeline",
        "Comprehensive Documentation & Handover",
        "Google Analytics 4 & Tag Manager Setup",
        "30 Days of Post-Launch Bug Fixes"
    ],
    process: [
        { step: "01", title: "Discovery & Architecture", desc: "We analyze your requirements, plan the data structure, and select the optimal tech stack." },
        { step: "02", title: "UI/UX Design", desc: "Creating high-fidelity mockups that align with your brand identity and user goals." },
        { step: "03", title: "Development", desc: "Agile development sprints with regular updates, focusing on clean code and performance." },
        { step: "04", title: "Launch & Scale", desc: "Rigorous testing, deployment to edge networks, and ongoing optimization." }
    ],
    benefits: [
        "Blazing Fast Page Load Speeds",
        "SEO-Native Architecture (SSR/ISR)",
        "Fully Responsive & Mobile-First",
        "Secure & Scalable Infrastructure"
    ],
    whyUs: "Unlike agencies that rely on bloated page builders like Elementor or WPBakery, we hand-code our solutions. This means zero bloat, impenetrable security, and total control over every interaction. We build for performance first.",
    faqs: [
        { q: "Do you use WordPress?", a: "We primarily specialize in headless solutions using Next.js, but we can use WordPress as a headless CMS if your team prefers that editing experience." },
        { q: "How long does a project take?", a: "A standard marketing site takes 4-8 weeks. Complex web apps can take 12+ weeks depending on scope." },
        { q: "Will I be able to edit the content?", a: "Absolutely. We integrate user-friendly Content Management Systems (CMS) so you can update text and images without touching code." }
    ]
  },
  "shopify-solutions": {
    title: "Shopify Solutions",
    shortDesc: "End-to-end Shopify Plus development, custom themes, and app integration.",
    longDesc: "E-commerce is competitive. To win, you need more than a generic template. We specialize in pushing Shopify to its limits. From custom Liquid theme development to headless Shopify implementations (Hydrogen), we build stores that tell your brand story and drive sales. We also handle complex migrations, app integrations, and checkout optimizations to minimize cart abandonment and maximize Average Order Value (AOV).",
    icon: ShoppingBag,
    tools: ["Shopify Plus", "Liquid", "Hydrogen", "Remix", "Klaviyo", "Recharge", "Yotpo", "Gorgias"],
    deliverables: [
        "Custom Shopify 2.0 Theme Development",
        "Mobile-First Responsive Layouts",
        "App Stack Configuration & Integration",
        "Product Data Migration & Organization",
        "Checkout Experience Customization",
        "Speed Optimization (Core Web Vitals)",
        "GA4 Enhanced E-commerce Tracking",
        "Admin Training Training Session"
    ],
    process: [
        { step: "01", title: "Store Audit", desc: "Analyzing your current store or requirements to identify growth opportunities." },
        { step: "02", title: "Theme Customization", desc: "Tailoring the visual experience to match your brand's unique premium aesthetic." },
        { step: "03", title: "App Integration", desc: "Seamlessly connecting logistics, marketing, and loyalty tools." },
        { step: "04", title: "Optimization", desc: "A/B testing and speed tuning to ensure maximum conversion rates." }
    ],
    benefits: [
        "Custom, Brand-Aligned Design",
        "Seamless High-Volume Transaction Handling",
        "Integrated Inventory Management",
        "Mobile-Optimized Checkout Flow"
    ],
    whyUs: "We are Shopify experts who understand the ecosystem deep down to the Liquid code. We don't just drag-and-drop; we engineer custom functionality that off-the-shelf apps can't provide, saving you monthly fees and improving performance.",
    faqs: [
        { q: "Can you migrate me from WooCommerce?", a: "Yes, we handle full data migrations including customers, orders, and products with zero downtime." },
        { q: "Do you ignore Shopify apps?", a: "We believe in a 'lean' app stack. We custom code functionality whenever possible to keep your site fast and reduce monthly recurring costs." },
        { q: "Is this for Shopify Plus only?", a: "No, we work with both standard Shopify plans and Shopify Plus enterprise merchants." }
    ]
  },
  "amazon-services": {
      title: "Amazon Services",
      shortDesc: "Full-service Amazon FBA management, PPC, and brand protection.",
      longDesc: "Amazon is a beast, but we know how to tame it. Our team of FBA experts handles everything from account health management to aggressive PPC strategies. We optimize your listings with high-volume keywords, high-converting copy, and A+ content that builds trust. We monitor your competitors constantly to ensure you stay ahead of the pack, protecting your brand registry and maximizing your buy-box percentage.",
      icon: Globe,
      tools: ["Helium 10", "Jungle Scout", "Keepa", "Amazon Seller Central", "Brand Analytics", "MerchantWords"],
      deliverables: [
          "Complete Account Health Audit",
          "Keyword Research & Indexing Strategy",
          "SEO Copywriting for Titles/Bullets",
          "A+ Content (EBC) Design & Implementation",
          "PPC Campaign Architecture Setup",
          "Weekly Bid Optimization & Reporting",
          "Review & Feedback Management Strategy",
          "Inventory Planning Assistance"
      ],
      process: [
          { step: "01", title: "Market Analysis", desc: "Deep dive into competitor pricing, keywords, and review sentiment." },
          { step: "02", title: "Listing Optimization", desc: "Overhauling titles, bullets, and A+ content for maximum visibility." },
          { step: "03", title: "PPC Launch", desc: "In-depth keyword research and campaign structuring for low ACOS." },
          { step: "04", title: "Brand Protection", desc: "Monitoring for hijackers and ensuring account health compliance." }
      ],
      benefits: [
          "Increased Organic Ranking",
          "Lower ACOS on Ad Spend",
          "Enhanced Brand Content (A+)",
          "Hassle-Free FBA Management"
      ],
      whyUs: "We treat your Amazon account like our own business. We focus on profitability, not just revenue. Our strategies are compliant with Amazon's TOS, ensuring long-term growth without the risk of suspension.",
      faqs: [
          { q: "Do you guarantee sales?", a: "While no one can guarantee sales on a platform they don't own, we guarantee improvements in visibility, click-through rate, and ACOS efficiency." },
          { q: "Do I need to be Brand Registered?", a: "It is highly recommended for A+ Content and Vine access, and we can assist you with that process." },
          { q: "How often do you optimize ads?", a: "We perform bid adjustments and negative keyword additions weekly, with major strategy reviews monthly." }
      ]
  },
  "digital-marketing": {
      title: "Digital Marketing",
      shortDesc: "Holistic growth marketing: SEO, SEM, Email, and Content.",
      longDesc: "Marketing isn't a guessing game; it's a science. We use data to drive every decision. Our holistic approach combines technical SEO to fix your foundation, content marketing to build authority, and targeted SEM to capture immediate intent. We track every click and conversion, providing you with transparent reporting that shows exactly where your budget is going and the ROI it's generating.",
      icon: Megaphone,
      tools: ["SEMrush", "Ahrefs", "Google Analytics 4", "Looker Studio", "Mailchimp", "HubSpot", "SurferSEO"],
      deliverables: [
          "Comprehensive Technical SEO Audit",
          "Competitor Gap Analysis",
          "Content Calendar & Strategy",
          "On-Page Optimization (Meta, Schema)",
          "High-Quality Backlink Outreach",
          "Monthly Performance Reporting Dashboard",
          "Email Marketing Template Design",
          "Conversion Rate Optimization (CRO) Suggestions"
      ],
      process: [
          { step: "01", title: "SEO Audit", desc: "Identifying technical errors and content gaps holding you back." },
          { step: "02", title: "Strategy Formulation", desc: "Building a content calendar and keyword map tailored to your audience." },
          { step: "03", title: "Content & Outreach", desc: "Creating high-value content and building backlinks from reputable sources." },
          { step: "04", title: "Performance Review", desc: "Monthly reporting and strategy adjustment based on real data." }
      ],
      benefits: [
          "Dominant Search Engine Visibility",
          "High-Quality Lead Generation",
          "Thought Leadership Authority",
          "Measurable ROI Tracking"
      ],
      whyUs: "We don't do 'vanity metrics'. We focus on the metrics that pay the bills: leads and sales. Our reports are written in plain English, not marketing jargon, so you always know the value we're delivering.",
      faqs: [
          { q: "How long until I see SEO results?", a: "SEO is a long-term game. meaningful results typically start appearing between months 3 and 6, but the ROI compounds over time." },
          { q: "Do you write the content?", a: "Yes, we have internal copywriters who specialize in SEO-optimized content that still sounds human and engaging." },
          { q: "Is reporting included?", a: "Yes, we believe in radical transparency. You get a live dashboard and a detailed monthly video walkthrough." }
      ]
  },
  "google-ads": {
      title: "Google Ads",
      shortDesc: "High-ROI PPC management for Search, Display, and Shopping.",
      longDesc: "Stop wasting money on clicks that don't convert. Our Google Ads certified experts build granular campaigns that target high-intent buyers. We obsess over Quality Score, Ad Copy, and Landing Page experience to lower your CPC and increase your conversion rate. Whether it's Search, Display, or Shopping, we ensure your brand appears exactly when your customer is looking for you.",
      icon: BarChart3,
      tools: ["Google Ads Editor", "Google Tag Manager", "SpyFu", "Opteo", "ClickCease", "Unbounce"],
      deliverables: [
          "Account Structure Restructuring",
          "Granular Keyword Research",
          "Negative Keyword Implementation",
          "Ad Copy A/B Testing",
          "Audience Targeting & Retargeting Setup",
          "Conversion Tracking Validation",
          "Landing Page UX Consulting",
          "Click Fraud Protection Setup"
      ],
      process: [
          { step: "01", title: "Keyword Research", desc: "Finding the 'money keywords' with high intent and reasonable competition." },
          { step: "02", title: "Campaign Setup", desc: "Structuring ad groups and writing compelling ad copy with extensions." },
          { step: "03", title: "Bid Management", desc: "Real-time adjustments to bids to maximize budget efficiency." },
          { step: "04", title: "Conversion Training", desc: "Optimizing the post-click experience to ensure the sale happens." }
      ],
      benefits: [
          "Immediate Traffic Boost",
          "Precise Audience Targeting",
          "Transparent Ad Spend Control",
          "Higher Conversion Rates"
      ],
      whyUs: "Most agencies set it and forget it. We don't. We are in your account every single week making micro-adjustments to squeeze more performance out of every dollar. We treat your budget as if it were our own money.",
      faqs: [
          { q: "What takes my budget?", a: "You pay Google directly for the ad spend; our fee is for the management and optimization service." },
          { q: "Can we target competitors?", a: "Yes, 'conquesting' campaigns are a valid strategy to capturing market share from direct competitors." },
          { q: "Do you handle landing pages?", a: "We can provide guidance and even build high-converting landing pages as an add-on service." }

      ]
  },
  "social-media": {
      title: "Social Media",
      shortDesc: "Community management and paid social advertising strategies.",
      longDesc: "Social media is where your brand finds its voice. We don't just post; we engage. From crafting viral-ready content strategies for TikTok and Instagram to managing professional communities on LinkedIn, we handle it all. Our paid social strategies on Meta (Facebook/Instagram) use advanced audience targeting and retargeting to turn casual scrollers into loyal customers.",
      icon: Zap,
      tools: ["Buffer", "Sprout Social", "Canva Pro", "Adobe Creative Suite", "Meta Business Suite", "TikTok Ads Manager"],
      deliverables: [
          "Social Media Strategy Document",
          "Monthly Content Calendar",
          "Custom Graphic Design & Video Editing",
          "Community Management (Replies)",
          "Paid Ad Campaign Setup",
          "Influencer Outreach Scripts",
          "Hashtag Strategy",
          "Monthly Engagement Analytics"
      ],
      process: [
          { step: "01", title: "Brand Persona", desc: "Defining your voice, tone, and visual aesthetic for consistency." },
          { step: "02", title: "Content Calendar", desc: "Planning a mix of educational, entertaining, and promotional content." },
          { step: "03", title: "Community Engage", desc: "Active responding to comments and DMs to build loyalty." },
          { step: "04", title: "Paid Amplification", desc: "Boosting high-performing organic posts to reach new audiences." }
      ],
      benefits: [
          "Stronger Brand Community",
          "Viral Potential & Reach",
          "Direct Customer Feedback Loop",
          "Visual Brand Storytelling"
      ],
      whyUs: "Engagement is the new currency. We prioritize authentic human connection over bot-like posting. Our creative team produces 'thumb-stopping' visuals that actually fit the native vibe of the platform, not just generic corporate graphics.",
      faqs: [
          { q: "Do I need to be on every platform?", a: "No. It's better to master one or two platforms where your audience actually lives than to be mediocre on all of them." },
          { q: "How many posts per week?", a: "Consistency is key. We typically recommend 3-5 high-quality posts per week rather than spamming the feed daily." },
          { q: "Can you help with video?", a: "Yes, short-form video (Reels/TikTok) is a core part of our modern content strategy." }
      ]
  }
};

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
      notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
            
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto mb-20 text-center">
                 <div className="inline-flex items-center justify-center p-6 bg-primary/10 rounded-3xl mb-8 text-primary animate-in fade-in zoom-in duration-500">
                     <Icon size={72} strokeWidth={1.5} />
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold font-heading mb-8 tracking-tight">{service.title}</h1>
                 <p className="text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                     {service.shortDesc}
                 </p>
            </div>

            {/* Tech Stack Marquee (Static Grid for now) */}
            <div className="max-w-6xl mx-auto mb-24">
                <p className="text-center text-sm font-mono font-bold text-muted-foreground uppercase tracking-widest mb-6">Powered By</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {service.tools.map((tool, i) => (
                        <TechStackBadge key={i} name={tool} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Deep Dive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-start">
                    <div>
                        <h2 className="text-3xl font-bold font-heading mb-8 flex items-center gap-3">
                            <span className="w-12 h-1 bg-primary rounded-full" />
                            The details matter.
                        </h2>
                        <div className="prose prose-invert prose-lg text-muted-foreground leading-loose">
                            <p>{service.longDesc}</p>
                            <p>We believe in a transparency-first approach. You will never be left guessing about the state of your project. Our commitment to excellence means we sweat the small stuff so you don't have to.</p>
                        </div>
                        
                        <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-bold mb-4 font-heading flex items-center gap-2">
                                <ShieldCheck className="text-primary" /> Why Choose Us?
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.whyUs}
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Box Container */}
                        <div className="relative z-10 grid grid-cols-1 gap-6">
                            
                            {/* Deliverables Card */}
                            <div className="p-8 rounded-3xl bg-secondary/30 border border-white/5 backdrop-blur-md">
                                <h3 className="text-2xl font-bold mb-6 font-heading flex items-center gap-3">
                                    <Box className="text-accent" /> What You Get
                                </h3>
                                <ul className="space-y-4">
                                    {service.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1 min-w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                             {/* Benefits Card */}
                             <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 backdrop-blur-md">
                                <h3 className="text-2xl font-bold mb-6 font-heading flex items-center gap-3">
                                    <Zap className="text-yellow-400" /> Key Benefits
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {service.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 font-medium">
                                            <CheckCircle2 className="text-primary w-5 h-5" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mb-32">
                     <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Process</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">From concept to completion, we follow a rigorous workflow.</p>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {service.process.map((step, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-secondary/20 border border-white/5 hover:bg-secondary/40 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                                <div className="text-6xl font-black text-white/5 mb-4 font-heading group-hover:text-primary/10 transition-colors">
                                    {step.step}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                     </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-32 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">Frequently Asked Questions</h2>
                    <ServiceFAQs faqs={service.faqs} />
                </div>

                {/* Final CTA Strip */}
                <div className="relative p-12 md:p-20 rounded-[3rem] overflow-hidden text-center bg-primary">
                     <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                     <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />
                     
                     <div className="relative z-10 flex flex-col items-center text-white">
                         <h2 className="text-3xl md:text-6xl font-bold mb-8 font-heading">
                            Ready to elevate your {service.title}?
                         </h2>
                         <p className="text-white/80 text-xl max-w-2xl mb-12 leading-relaxed">
                            Don't leave your digital future to chance. Partner with experts who care about your results as much as you do.
                         </p>
                         <ServiceDirectButton 
                            label="Start Your Project" 
                            className="bg-white text-primary hover:bg-white/90 border-none shadow-2xl transform hover:scale-105 transition-all text-xl px-10 py-8 h-auto font-bold rounded-2xl" 
                        />
                     </div>
                </div>

            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ServiceFAQs({ faqs }: { faqs: { q: string, a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="space-y-4">
            {faqs.map((faq, i) => (
                <AccordionItem 
                    key={i}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openIndex === i}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}
