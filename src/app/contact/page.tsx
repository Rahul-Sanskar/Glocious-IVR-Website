import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { GlobalReach } from "@/components/contact/GlobalReach";
import { GlobalOffices } from "@/components/contact/GlobalOffices";
import { SocialHub } from "@/components/contact/SocialHub";
import { FAQ } from "@/components/home/FAQ";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Glocious — Start Your IVR Project Today",
  description:
    "Get in touch with the Glocious team. Tell us about your project and we'll respond within one business day.",
  openGraph: {
    title: "Contact Glocious — Start Your IVR Project Today",
    description:
      "Get in touch with the Glocious team. Tell us about your project and we'll respond within one business day.",
    url: "https://www.glocious.com/contact",
  },
  twitter: { title: "Contact Glocious — Start Your IVR Project Today" },
  alternates: { canonical: "https://www.glocious.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="container mx-auto px-6 pt-32 mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your customer communication? We&apos;re here to help.
          </p>
        </section>

        {/* Info cards + form */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — contact info */}
            <div className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href="mailto:kazim@glocious.com" className="text-sm text-muted-foreground hover:text-white">
                    kazim@glocious.com
                  </a>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <Phone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href="tel:+919999114347" className="text-sm text-muted-foreground hover:text-white">
                    +91 99991 14347
                  </a>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold mb-1">HQ</h3>
                  <p className="text-sm text-muted-foreground">Second Floor, Aditya Plaza-2, F-204, Ram Nagar, Kaushambi, Ghaziabad, UP 201010</p>
                </div>
              </div>

              <GlobalReach />
            </div>

            {/* Right — same form as hero */}
            <ConsultationForm />
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
