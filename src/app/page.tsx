import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyUs } from "@/components/home/WhyUs";
import { Manifesto } from "@/components/home/Manifesto";
import { Process } from "@/components/home/Process";
import { Stats } from "@/components/home/Stats";
import { TestimonialWall } from "@/components/home/TestimonialWall";
import { FAQ } from "@/components/home/FAQ";
import { Industries } from "@/components/home/Industries";
import { CTASection } from "@/components/home/CTASection";
import { IVRFeatures } from "@/components/home/IVRFeatures";
import { ConsultationForm } from "@/components/home/ConsultationForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-primary selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* Hero — no anchor needed, it's always at top */}
        <Hero />

        {/* Manifesto */}
        <section id="manifesto">
          <Manifesto />
        </section>

        <TrustBar />

        {/* IVR Solutions / Services — "IVR Solutions" nav item */}
        <section id="services">
          <Services />
        </section>

        {/* IVR Features — "Features" nav item */}
        <section id="ivr-features">
          <IVRFeatures />
        </section>

        {/* Process */}
        <section id="process">
          <Process />
        </section>

        <Stats />

        {/* Why Glocious — "Why Glocious" nav item */}
        <section id="why-glocious">
          <WhyUs />
        </section>

        {/* Industries — "Industries" nav item */}
        <section id="industries">
          <Industries />
        </section>

        {/* Testimonials — "Testimonials" nav item */}
        <section id="testimonials">
          <TestimonialWall />
        </section>

        {/* FAQ — "FAQ" nav item */}
        <section id="faq">
          <FAQ />
        </section>

        <CTASection />

        {/* ── Contact section — same form as the hero ─────────────────── */}
        <section id="contact" className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left — info */}
              <div>
                <p className="text-sm font-mono font-bold text-primary tracking-widest uppercase mb-3">
                  Get in Touch
                </p>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 leading-tight">
                  Start Your IVR <span className="text-primary">Journey Today</span>
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-10">
                  Tell us about your business and we&apos;ll design an IVR flow tailored to your
                  needs — no commitment, no jargon, just a conversation.
                </p>

                <div className="space-y-5">
                  <a href="tel:+919999114347" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Phone</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">+91 99991 14347</p>
                    </div>
                  </a>

                  <a href="mailto:kazim@glocious.com" className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">kazim@glocious.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Office</p>
                      <p className="text-white font-medium">Second Floor, Aditya Plaza-2, F-204, Ram Nagar, Kaushambi, Ghaziabad, UP 201010</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — identical form */}
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
