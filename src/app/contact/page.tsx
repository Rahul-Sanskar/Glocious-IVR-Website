import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalReach } from "@/components/contact/GlobalReach";
import { GlobalOffices } from "@/components/contact/GlobalOffices";
import { SocialHub } from "@/components/contact/SocialHub";
import { FAQ } from "@/components/home/FAQ";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Glocious — Start Your Project Today",
  description:
    "Get in touch with the Glocious team. Tell us about your project and we'll respond within one business day.",
  openGraph: {
    title: "Contact Glocious — Start Your Project Today",
    description:
      "Get in touch with the Glocious team. Tell us about your project and we'll respond within one business day.",
    url: "https://www.glocious.com/contact",
  },
  twitter: {
    title: "Contact Glocious — Start Your Project Today",
  },
  alternates: {
    canonical: "https://www.glocious.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <section id="contact" className="container mx-auto px-6 pt-32 mb-16 text-center">
          <h1 className="text-5xl md:text-8xl font-bold font-heading mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your customer communication? We&apos;re here to help.
          </p>
        </section>

        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Visuals & Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:contact@glocious.com" className="text-sm text-muted-foreground hover:text-white">contact@glocious.com</a>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:+919319499699" className="text-sm text-muted-foreground hover:text-white">+91 93194 99699</a>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">HQ</h3>
                  <p className="text-sm text-muted-foreground">3232 McKinney Ave, Suite 285, Dallas, TX 75024</p>
                </div>
              </div>

              <GlobalReach />
            </div>

            {/* Native Contact Form */}
            <div className="bg-secondary/10 p-8 md:p-12 rounded-3xl border border-white/5">
              <h3 className="text-2xl font-bold font-heading mb-2">Send us a Message</h3>
              <p className="text-muted-foreground mb-8 text-sm">We respond within one business day.</p>
              <form
                action="https://formsubmit.co/musanadeem2580@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New Project Inquiry — Glocious" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="https://www.glocious.com/contact?submitted=true" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">Name <span className="text-primary">*</span></label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">Email <span className="text-primary">*</span></label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium mb-1.5">Subject</label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">Message <span className="text-primary">*</span></label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-h-[44px]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <GlobalOffices />
        
        <FAQ />
        
        <SocialHub />
      </main>
      
      <Footer />
    </div>
  );
}
