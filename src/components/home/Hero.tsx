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

  // Validation functions
  const validateField = (field: string, value: string): string => {
    if (!value) {
      return "This field is required";
    }
    
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "Please enter a valid email address";
      }
    }
    
    if (field === "phone") {
      const phoneRegex = /^\+?[\d\s\-]{7,15}$/;
      if (!phoneRegex.test(value)) {
        return "Please enter a valid phone number";
      }
    }
    
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched] ?? false) {
      const newErrors = { ...errors, [name]: validateField(name, value) };
      setErrors(newErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const newErrors = { ...errors, [name]: validateField(name, formData[name as keyof typeof formData]) };
    setErrors(newErrors);
  };

  const resetTouched = () => {
    const resetFields = ["name", "email", "phone"] as const;
    setTouched(prev => {
      const newTouched = { ...prev };
      resetFields.forEach(field => {
        delete newTouched[field];
      });
      return newTouched;
    });
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetTouched();

    // Validate all fields
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    const fields = ["name", "email", "phone"] as const;
    fields.forEach(field => {
      newErrors[field] = validateField(field, formData[field]);
    });
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error);
    if (hasErrors) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const formDataObj = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value);
      });

      // Add FormSubmit specific fields
      formDataObj.append("_subject", "New IVR Enquiry - Glocious Infotech");
      formDataObj.append("_replyto", formData.email);
      formDataObj.append("_captcha", "true");

      const response = await fetch("https://formsubmit.co/kazimglocious@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataObj.toString(),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

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

  // Reset success message after display
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 5000);
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
      tl.from(typeWriterSpan, {
        text: { value: "" },
        duration: 1.5,
        ease: "none",
      }, "-=0.4");
    }
    if (revealSpan) {
      tl.to(revealSpan, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-70">
        <ThreeBackground />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080a2e_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div ref={textRef} className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-md opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold font-mono text-primary tracking-widest uppercase">Glocious Infotech</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-[0.95] mb-8 tracking-tighter text-white drop-shadow-lg transform-gpu min-h-[1.8em]">
            <span className="typewriter-text inline-block">Turn Every Call Into a Better</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 animate-pulse-slow text-glow filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] opacity-0 reveal-text">
              Customer Experience
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-3xl mx-auto border-l-2 border-primary/20 pl-6 transform-gpu">
            Powerful IVR and cloud telephony solutions that intelligently route calls, streamline customer interactions and help businesses manage every conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center transform-gpu">
            <Button size="xl" className="group relative overflow-hidden bg-primary text-white border-none hover:bg-primary/90 text-lg px-10 py-6 rounded-none skew-x-[-10deg] min-w-[220px]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="skew-x-[10deg] flex items-center justify-center gap-2">
                Get Your IVR Solution <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button variant="outline" size="xl" className="border-white/10 hover:bg-white/5 text-lg px-10 py-6 rounded-none skew-x-[-10deg] backdrop-blur-sm min-w-[220px]">
              <span className="skew-x-[10deg] flex items-center justify-center">
                Explore IVR Features
              </span>
            </Button>
          </div>

          {/* Enquiry Form - Desktop: Upper right, Mobile: Below content */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/30 border border-white/20 rounded-lg p-6 shadow-lg w-80 sm:w-96 sm:max-w-md w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              {/* Desktop: Upper right corner */}
              <div className="hidden sm:block flex flex-col gap-2">
                <h3 className="text-sm font-medium text-secondary-foreground uppercase mb-1">Get a Free IVR Consultation</h3>
                {errorMessage && <p className="text-sm text-red-600 mb-2">{errorMessage}</p>}
                {success && <p className="text-sm text-green-600 mb-2">Thank you! Your enquiry has been received. Our team will contact you shortly.</p>}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 w-full"
                >
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-secondary-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.name && !!errors.name && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-secondary-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.email && !!errors.email && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="text-xs font-medium text-secondary-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      pattern="[+]?[\d\s\-]{7,15}"
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.phone && !!errors.phone && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field for spam protection */}
                  <div className="hidden">
                    <label htmlFor="bot-field" className="sr-only">
                      Leave this field blank
                    </label>
                    <input
                      type="text"
                      name="bot-field"
                      id="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{position: 'absolute', opacity: 0, width: '1px', height: '1px', overflow: 'hidden'}}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <Button
                      size="sm"
                      className="w-full text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Request a Callback"}
                    </Button>
                  </div>
                </form>
              </div>

              {/* Mobile: Below hero content */}
              <div className="sm:hidden mt-8 sm:mt-0">
                <h3 className="text-sm font-medium text-secondary-foreground mb-2">Get a Free IVR Consultation</h3>
                {errorMessage && <p className="text-sm text-red-600 mb-2">{errorMessage}</p>}
                {success && <p className="text-sm text-green-600 mb-2">Thank you! Your enquiry has been received. Our team will contact you shortly.</p>}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 w-full"
                >
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-secondary-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.name && !!errors.name && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-secondary-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.email && !!errors.email && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="text-xs font-medium text-secondary-foreground mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      pattern="[+]?[\d\s\-]{7,15}"
                      className="w-full px-3 py-2 bg-background border border-white/10 rounded-md focus:border-primary focus:outline-none text-base text-secondary-foreground placeholder-primary-300"
                    />
                    {touched.phone && !!errors.phone && (
                      <p className="text-xs text-red-600 mt-1 error-message">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Honeypot field for spam protection */}
                  <div className="hidden">
                    <label htmlFor="bot-field" className="sr-only">
                      Leave this field blank
                    </label>
                    <input
                      type="text"
                      name="bot-field"
                      id="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{position: 'absolute', opacity: 0, width: '1px', height: '1px', overflow: 'hidden'}}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <Button
                      size="sm"
                      className="w-full text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Request a Callback"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
