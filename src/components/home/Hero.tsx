"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#080a2e]" />,
});

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; phone?: boolean }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (field: string, value: string): string => {
    if (!value) return "This field is required";
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return "Please enter a valid email address";
    }
    if (field === "phone") {
      const phoneRegex = /^\+?[\d\s\-]{7,15}$/;
      if (!phoneRegex.test(value)) return "Please enter a valid phone number";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched] ?? false) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, formData[name as keyof typeof formData]) }));
  };

  const resetTouched = () => {
    setTouched({});
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetTouched();

    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    (["name", "email", "phone"] as const).forEach(field => {
      newErrors[field] = validateField(field, formData[field]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const formDataObj = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => formDataObj.append(key, value));
      formDataObj.append("_subject", "New IVR Enquiry - Glocious Infotech");
      formDataObj.append("_replyto", formData.email);
      formDataObj.append("_captcha", "true");

      const response = await fetch("https://formsubmit.co/kazimglocious@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formDataObj.toString(),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSuccess(true);
      setLoading(false);
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(resetTouched, 3000);
    } catch (err) {
      console.error("Form submission failed:", err);
      setErrorMessage("There was an error submitting the form. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    gsap.set(textRef.current?.children || [], { opacity: 0, y: 50 });
    const typeWriterSpan = textRef.current?.querySelector(".typewriter-text");
    const revealSpan = textRef.current?.querySelector(".reveal-text");
    if (typeWriterSpan) {
      gsap.set(typeWriterSpan.parentElement, { opacity: 1, y: 0 });
    }
    tl.to(textRef.current?.children || [], {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
    });
    if (typeWriterSpan) {
      tl.from(typeWriterSpan, { text: { value: "" }, duration: 1.5, ease: "none" }, "-=0.4");
    }
    if (revealSpan) {
      tl.to(revealSpan, { opacity: 1, duration: 0.8, ease: "power2.out" });
    }
  }, { scope: containerRef });

  const formFields = [
    { id: "name", label: "Full Name", type: "text", pattern: undefined },
    { id: "email", label: "Email Address", type: "email", pattern: undefined },
    { id: "phone", label: "Phone Number", type: "tel", pattern: "[+]?[\\d\\s\\-]{7,15}" },
  ] as const;

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Three.js background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080a2e_100%)] pointer-events-none" />

      {/* Two-column layout */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Hero content */}
          <div ref={textRef} className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-md opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold font-mono text-primary tracking-widest uppercase">
                Glocious Infotech
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.05] mb-6 tracking-tighter text-white drop-shadow-lg transform-gpu">
              <span className="typewriter-text inline-block">Turn Every Call Into a Better</span>{" "}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 animate-pulse-slow text-glow filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] opacity-0 reveal-text">
                Customer Experience
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/30 pl-5 transform-gpu">
              Powerful IVR and cloud telephony solutions that intelligently route calls, streamline
              customer interactions and help businesses manage every conversation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 transform-gpu">
              <Button
                size="xl"
                className="group relative overflow-hidden bg-primary text-white border-none hover:bg-primary/90 text-lg px-10 py-6 rounded-none skew-x-[-10deg] min-w-[220px]"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                  Get Your IVR Solution{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="border-white/10 hover:bg-white/5 text-lg px-10 py-6 rounded-none skew-x-[-10deg] backdrop-blur-sm min-w-[220px]"
              >
                <span className="skew-x-[10deg] flex items-center justify-center">
                  Explore IVR Features
                </span>
              </Button>
            </div>
          </div>

          {/* RIGHT — Consultation form */}
          <div className="w-full">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-lg font-semibold text-white uppercase tracking-wide mb-1">
                Get a Free IVR Consultation
              </h3>
              <p className="text-sm text-white/60 mb-6">
                Fill in your details and our team will get back to you within 24 hours.
              </p>

              {errorMessage && (
                <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3 mb-4">
                  {errorMessage}
                </p>
              )}
              {success && (
                <p className="text-sm text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg px-4 py-3 mb-4">
                  Thank you! Your enquiry has been received. Our team will contact you shortly.
                </p>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {formFields.map(({ id, label, type, pattern }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-white/80 mb-1.5"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={id}
                      id={id}
                      value={formData[id]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      pattern={pattern}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder-white/30 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-sm"
                      placeholder={`Enter your ${label.toLowerCase()}`}
                    />
                    {touched[id] && errors[id] && (
                      <p className="text-xs text-red-400 mt-1.5">{errors[id]}</p>
                    )}
                  </div>
                ))}

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    style={{ position: "absolute", opacity: 0, width: "1px", height: "1px" }}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-colors"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Request a Callback"}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
