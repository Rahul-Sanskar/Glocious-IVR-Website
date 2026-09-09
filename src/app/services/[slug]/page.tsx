"use client";

import React, { useState, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServiceDirectButton } from "@/components/ui/ServiceDirectButton";
import { notFound } from "next/navigation";
import { Phone, Globe, BarChart3, Megaphone, Code, Zap, CheckCircle2, Box, ShieldCheck, Plus, Minus } from "lucide-react";
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
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    tools: string[];
    deliverables: string[];
    process: { step: string; title: string; desc: string }[];
    whyUs: string;
    benefits: string[];
    faqs: { q: string; a: string }[];
}> = {
  "ivr-solutions": {
    title: "IVR Solutions",
    shortDesc: "Intelligent Interactive Voice Response systems that automate and elevate every customer call.",
    longDesc: "Your phone line is your frontline. A poorly handled call costs you customers; a brilliantly handled one builds loyalty. Our IVR solutions combine smart menu design, natural language processing, and enterprise-grade cloud telephony to ensure every caller reaches the right destination — fast. We configure, deploy, and maintain bespoke IVR flows tailored to your business structure, so your team spends time solving problems instead of answering the same questions repeatedly.",
    icon: Phone,
    tools: ["Asterisk", "FreeSWITCH", "Twilio", "Amazon Connect", "Google CCAI", "Microsoft Azure Communication Services", "Plivo", "Exotel"],
    deliverables: [
        "Custom IVR Call Flow Design & Architecture",
        "Professional Voice Prompt Recording",
        "Multi-Level Menu Configuration",
        "Skill-Based & Time-Based Routing Rules",
        "CRM & Helpdesk Integration",
        "Real-Time Dashboard & Reporting Setup",
        "Failover & Redundancy Configuration",
        "30-Day Post-Launch Support & Tuning"
    ],
    process: [
        { step: "01", title: "Discovery & Mapping", desc: "We audit your current call flow, identify pain points, and map the ideal caller journey." },
        { step: "02", title: "Design & Scripting", desc: "Designing menu trees and writing professional prompt scripts aligned with your brand voice." },
        { step: "03", title: "Build & Integrate", desc: "Deploying the IVR on cloud infrastructure and integrating with your CRM and ticketing tools." },
        { step: "04", title: "Test & Optimise", desc: "End-to-end QA testing across all call paths, followed by live monitoring and continuous tuning." }
    ],
    benefits: [
        "24/7 Automated Customer Support",
        "Reduced Average Handle Time",
        "Zero Missed Call Opportunities",
        "Seamless Agent Handoff"
    ],
    whyUs: "We don't drop a generic IVR template and walk away. Every flow we build is designed around your actual customer behaviour data. We obsess over first-call resolution rates and caller satisfaction scores — because that's what actually moves the needle for your business.",
    faqs: [
        { q: "Can we keep our existing phone number?", a: "Yes. We port your existing DID or toll-free numbers to our cloud platform with zero downtime." },
        { q: "How long does setup take?", a: "A standard IVR deployment takes 5–10 business days. Complex multi-site setups may take 3–4 weeks." },
        { q: "Can callers reach a live agent?", a: "Absolutely. Every menu flow includes an option to transfer to a live agent, and we configure overflow rules for after-hours calls." }
    ]
  },
  "cloud-telephony": {
    title: "Cloud Telephony",
    shortDesc: "Scalable virtual phone infrastructure with smart routing, virtual numbers, and click-to-call.",
    longDesc: "Ditch the desk phone PBX. Cloud telephony gives your team the flexibility to receive and make business calls from anywhere — laptop, mobile, or browser — without sacrificing call quality or control. We provision virtual numbers across 50+ countries, configure SIP trunks for cost-effective calling, and integrate everything with your existing tools so your communication stack works as one unified system.",
    icon: Globe,
    tools: ["Twilio", "Vonage", "RingCentral", "Plivo", "Exotel", "SIP.js", "WebRTC", "AWS Chime"],
    deliverables: [
        "Virtual Number Provisioning (Local / Toll-Free / International)",
        "SIP Trunk & VoIP Gateway Configuration",
        "Click-to-Call Widget Integration",
        "Call Recording & Compliance Storage",
        "IVR + ACD (Automatic Call Distribution) Setup",
        "Number Masking for Agent Privacy",
        "Voicemail-to-Email / Voicemail-to-Text",
        "Admin Portal & User Management"
    ],
    process: [
        { step: "01", title: "Infrastructure Audit", desc: "Reviewing your current telephony setup and identifying migration or integration opportunities." },
        { step: "02", title: "Platform Design", desc: "Architecting a cloud telephony stack sized for your call volumes and team structure." },
        { step: "03", title: "Provisioning & Migration", desc: "Setting up numbers, trunks, and routing rules — migrating seamlessly from legacy systems." },
        { step: "04", title: "Training & Handover", desc: "Admin and agent training sessions, plus full documentation so your team is self-sufficient." }
    ],
    benefits: [
        "Work-From-Anywhere Business Calls",
        "50+ Country Virtual Number Coverage",
        "Significant Cost Reduction vs Legacy PBX",
        "Full Call Recording & Compliance"
    ],
    whyUs: "We've migrated businesses off decades-old PBX hardware onto modern cloud stacks without a single dropped call during cutover. Our carrier relationships mean competitive per-minute rates and priority SLA support when you need it most.",
    faqs: [
        { q: "Will call quality suffer on cloud?", a: "Not with proper implementation. We configure QoS settings and recommend bandwidth requirements during scoping to ensure HD voice quality." },
        { q: "Can agents use their mobile phones?", a: "Yes. Our softphone apps and call forwarding rules allow agents to receive business calls on any device." },
        { q: "Is call recording legally compliant?", a: "We configure consent prompts and storage policies aligned with GDPR, TRAI, and other regional regulations as applicable." }
    ]
  },
  "call-analytics": {
    title: "Call Analytics",
    shortDesc: "Real-time call tracking, performance dashboards, and AI-powered insights to optimise every interaction.",
    longDesc: "You can't improve what you don't measure. Our call analytics platform gives you complete visibility into every call — who called, when, how long they waited, which IVR path they took, how the agent performed, and whether the issue was resolved. We surface the metrics that matter, build custom dashboards for your operations team, and deliver weekly insight reports so you can continuously improve your customer experience.",
    icon: BarChart3,
    tools: ["Google Looker Studio", "Metabase", "Mixpanel", "AWS QuickSight", "Twilio Insights", "Exotel Analytics", "Custom Webhooks", "Zapier"],
    deliverables: [
        "Real-Time Call Volume & Queue Dashboard",
        "Agent Performance Scorecards",
        "IVR Path Analysis & Drop-Off Reports",
        "First Call Resolution (FCR) Tracking",
        "Customer Sentiment Analysis (AI)",
        "Peak Hour & Staffing Optimisation Reports",
        "Custom KPI Dashboard Build",
        "Weekly / Monthly Analytics Reports"
    ],
    process: [
        { step: "01", title: "KPI Definition", desc: "Aligning with your team on the metrics that matter most to your business goals." },
        { step: "02", title: "Data Integration", desc: "Connecting your telephony platform, CRM, and helpdesk to a unified analytics layer." },
        { step: "03", title: "Dashboard Build", desc: "Building real-time dashboards tailored to roles — agent, team lead, and C-suite views." },
        { step: "04", title: "Insight & Action", desc: "Regular review calls to translate data into concrete operational improvements." }
    ],
    benefits: [
        "Full Caller Journey Visibility",
        "Data-Driven Staffing Decisions",
        "AI-Powered Sentiment Scoring",
        "Reduced Repeat Call Rates"
    ],
    whyUs: "Raw call data is noise. We turn it into signal. Our analysts have worked across contact centres handling millions of calls per month, and we know exactly which metrics predict customer churn before it happens — and how to fix them.",
    faqs: [
        { q: "Do you need access to our call recordings?", a: "Only if you want sentiment analysis. Dashboard metrics work off call metadata which is far less sensitive." },
        { q: "How quickly can we see the dashboard?", a: "Basic dashboards are live within 48 hours of integration. Custom-built views take 1–2 weeks." },
        { q: "Can we embed the dashboard in our internal tools?", a: "Yes. We support iframe embeds and SSO for seamless access within Notion, Confluence, or your internal portals." }
    ]
  },
  "missed-call-handling": {
    title: "Missed Call Handling",
    shortDesc: "Automatic callback and missed-call-to-lead systems so no business opportunity ever slips through.",
    longDesc: "Every missed call is a missed opportunity — and in competitive markets, that's money left on the table. Our missed call handling solutions automatically capture caller details, trigger instant SMS or WhatsApp responses, queue callbacks, and notify your sales team in real time. For high-volume campaigns, we also offer missed-call-as-a-CTA (MCATA) flows that convert a missed call into a qualified lead without the caller ever needing to speak to anyone.",
    icon: Megaphone,
    tools: ["Twilio", "Exotel", "MSG91", "WhatsApp Business API", "Zapier", "HubSpot", "Salesforce", "Freshdesk"],
    deliverables: [
        "Missed Call Detection & Auto-Callback Queue",
        "Instant SMS / WhatsApp Auto-Response",
        "CRM Lead Creation on Missed Call",
        "Agent Notification & Callback Assignment",
        "Missed Call Campaign Number Provisioning",
        "Lead Capture Form Integration",
        "Reporting: Missed vs Answered vs Converted",
        "SLA Breach Alerts for Uncalled Leads"
    ],
    process: [
        { step: "01", title: "Flow Design", desc: "Mapping what should happen the moment a call is missed — response, routing, and escalation." },
        { step: "02", title: "Integration Setup", desc: "Connecting telephony with CRM, WhatsApp, and SMS gateways for instant automated responses." },
        { step: "03", title: "Callback Queue Config", desc: "Building priority queues and agent assignment rules so the right person calls back first." },
        { step: "04", title: "Reporting & SLA Setup", desc: "Configuring dashboards and alerts to track missed call recovery rates and SLA compliance." }
    ],
    benefits: [
        "Zero Lost Leads from Missed Calls",
        "Instant Automated Customer Response",
        "Higher Lead-to-Conversion Rates",
        "Real-Time Agent Callback Alerts"
    ],
    whyUs: "We've built missed call handling systems for businesses receiving 10,000+ missed calls a day. Our infrastructure handles burst traffic without dropping a single notification, and our CRM integrations mean leads are in your pipeline within seconds of the call ending.",
    faqs: [
        { q: "Does this work for WhatsApp Business?", a: "Yes. We integrate with the official WhatsApp Business API to send instant acknowledgement messages to missed callers." },
        { q: "Can we customise the auto-response message?", a: "Absolutely. Every message is fully customisable, and we support multilingual responses for regional campaigns." },
        { q: "How fast is the callback queue triggered?", a: "Typically under 30 seconds from the moment the call is missed to the agent notification and queue entry." }
    ]
  },
  "crm-integration": {
    title: "CRM Integration",
    shortDesc: "Seamless two-way sync between your telephony platform and CRM for context-aware, personalised calls.",
    longDesc: "When your agent answers a call, they should already know who's calling, their history, their open tickets, and their last interaction — before they say a single word. Our CRM integration services connect your IVR and cloud telephony stack to HubSpot, Salesforce, Zoho, Freshdesk, and more, enabling screen pops, automatic call logging, contact creation, and post-call disposition workflows that save your team hours every day.",
    icon: Code,
    tools: ["HubSpot", "Salesforce", "Zoho CRM", "Freshdesk", "Pipedrive", "Zendesk", "Twilio", "REST APIs / Webhooks"],
    deliverables: [
        "Bi-Directional CRM ↔ Telephony Data Sync",
        "Screen Pop on Inbound Call",
        "Automatic Call Log & Recording Attachment",
        "Contact & Lead Auto-Creation from Calls",
        "Post-Call Disposition & Note Workflows",
        "Call Outcome → CRM Pipeline Stage Update",
        "Custom Field Mapping & Data Validation",
        "Integration Health Monitoring & Alerts"
    ],
    process: [
        { step: "01", title: "System Audit", desc: "Reviewing your CRM configuration, custom fields, and existing workflows to plan integration points." },
        { step: "02", title: "Mapping & Design", desc: "Defining exactly what data flows where — call logs, recordings, dispositions, and contact records." },
        { step: "03", title: "Build & Test", desc: "Developing and rigorously testing the integration in a sandbox before any production deployment." },
        { step: "04", title: "Deploy & Monitor", desc: "Rolling out to production with a monitoring period to catch and resolve any edge cases quickly." }
    ],
    benefits: [
        "Instant Caller Context for Every Agent",
        "Automatic Call Logging — Zero Manual Entry",
        "Cleaner CRM Data & Attribution",
        "Faster After-Call Work (ACW) Times"
    ],
    whyUs: "Off-the-shelf telephony ↔ CRM connectors cover 20% of what businesses actually need. We build the other 80% — custom field mappings, complex workflow triggers, and multi-system sync that out-of-box tools simply can't handle.",
    faqs: [
        { q: "Which CRMs do you support?", a: "HubSpot, Salesforce, Zoho, Freshdesk, Pipedrive, and Zendesk natively. Any CRM with a REST API can be integrated on request." },
        { q: "Will this slow down our agents?", a: "The opposite — screen pops and auto-logging remove manual work. Most teams report saving 8–12 minutes per agent per shift." },
        { q: "What if our CRM has heavily customised fields?", a: "We handle complex custom object models. Our scoping process maps all custom fields before we write a single line of integration code." }
    ]
  },
  "multi-level-ivr": {
    title: "Multi-Level IVR",
    shortDesc: "Advanced hierarchical call menus with NLP, adaptive routing, and intelligent self-service flows.",
    longDesc: "Simple press-1-for-sales menus belong in the past. Multi-level IVR systems handle complex caller journeys — account verification, appointment booking, payment collection, order status — without ever involving a human agent. We design and deploy intelligent hierarchical menu systems that use natural language processing, DTMF input, and caller history to guide every caller to the fastest, most relevant resolution. The result: lower call handling costs and higher customer satisfaction.",
    icon: Zap,
    tools: ["Google CCAI (Dialogflow)", "Amazon Lex", "Nuance", "FreeSWITCH", "Asterisk", "Twilio Studio", "Azure Speech Services", "Custom NLP Pipelines"],
    deliverables: [
        "Multi-Tier Call Flow Architecture",
        "Natural Language Understanding (NLU) Intent Design",
        "DTMF + Voice Input Dual-Mode Menus",
        "Caller Authentication & Account Verification Flows",
        "Self-Service Payment & Appointment Booking",
        "Dynamic Prompts Based on Caller Data",
        "Graceful Fallback & Agent Escalation Paths",
        "Ongoing Flow Optimisation Based on Analytics"
    ],
    process: [
        { step: "01", title: "Journey Mapping", desc: "Documenting every caller intent and designing the optimal decision tree for each scenario." },
        { step: "02", title: "NLP Training", desc: "Training language models on your domain-specific vocabulary, FAQs, and common caller phrases." },
        { step: "03", title: "Build & QA", desc: "Developing all menu tiers, self-service integrations, and agent handoff paths with thorough QA testing." },
        { step: "04", title: "Launch & Refine", desc: "Going live with monitoring in place, then iterating based on real caller behaviour data within the first 30 days." }
    ],
    benefits: [
        "Up to 60% Call Deflection Rate",
        "NLP-Powered Voice Recognition",
        "Self-Service Payments & Bookings",
        "Intelligent Fallback to Live Agents"
    ],
    whyUs: "Building a multi-level IVR that callers actually enjoy using is genuinely hard. It requires expertise in linguistics, UX, telephony engineering, and backend integration simultaneously. We bring all four under one roof, and our designs are tested against real user behaviour — not just feature checklists.",
    faqs: [
        { q: "Can callers speak naturally instead of pressing numbers?", a: "Yes. We integrate NLP engines like Google Dialogflow or Amazon Lex so callers can say what they need in plain language." },
        { q: "Can the IVR handle payments?", a: "Yes. We build PCI-DSS compliant payment collection flows that capture card details via DTMF — no agent involvement needed." },
        { q: "What happens when the IVR can't understand the caller?", a: "Every flow has a graceful fallback — typically 2 retry attempts before transferring to a live agent with full context of what was attempted." }
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
