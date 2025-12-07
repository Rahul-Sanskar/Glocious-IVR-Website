import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { GlobalReach } from "@/components/contact/GlobalReach";
import { GlobalOffices } from "@/components/contact/GlobalOffices";
import { SocialHub } from "@/components/contact/SocialHub";
import { FAQ } from "@/components/home/FAQ"; // Reusing FAQ as requested
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-6 mb-16 text-center">
            <h1 className="text-5xl md:text-8xl font-bold font-heading mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Ready to transform your digital presence? We're here to help.
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
                            <a href="mailto:contact@thesoftbiz.com" className="text-sm text-muted-foreground hover:text-white">contact@thesoftbiz.com</a>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                            <Phone className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold mb-1">Phone</h3>
                            <a href="tel:+18332281750" className="text-sm text-muted-foreground hover:text-white">+1 (833) 228-1750</a>
                            <a href="tel:+923002523323" className="text-sm text-muted-foreground hover:text-white">+92 (300) 252-3323</a>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/30">
                            <MapPin className="w-8 h-8 text-primary mb-4" />
                            <h3 className="font-bold mb-1">HQ</h3>
                            <p className="text-sm text-muted-foreground">3232 McKinney Ave, Suite No285, 4th Floor. Dallas. Tx. 75024. USA</p>
                        </div>
                     </div>

                     <GlobalReach />
                </div>

                {/* Form Placeholder / Direct Link */}
                <div className="bg-secondary/10 p-8 md:p-12 rounded-3xl border border-white/5 text-center flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-bold font-heading mb-4">Send us a Message</h3>
                    <p className="text-muted-foreground mb-8 max-w-sm">
                        Prefer to fill out a form? Click below to open our secure contact form.
                    </p>
                    <div className="w-full max-w-xs">
                        {/* We can re-use the button or just link directly */}
                        <a 
                            href="https://docs.google.com/forms/u/0/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
                        >
                            Open Contact Form <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
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
