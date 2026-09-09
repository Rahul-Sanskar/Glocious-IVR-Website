import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eye, Sparkles, TrendingUp } from "lucide-react";
import { Metadata } from "next";

const BASE_URL = "https://www.glocious.com";

export const metadata: Metadata = {
  title: "About Glocious Infotech — Our Story, Team & Values",
  description: "Learn about Glocious Infotech — our story, values, and the team behind every project. A technology company built on transparency, craft, and results.",
  openGraph: {
    title: "About Glocious Infotech — Our Story, Team & Values",
    description: "Learn about Glocious Infotech — our story, values, and the team behind every project.",
    url: "https://www.glocious.com/about",
  },
  twitter: {
    title: "About Glocious Infotech — Our Story, Team & Values",
    description: "Learn about Glocious Infotech — our story, values, and the team behind every project.",
  },
  alternates: {
    canonical: "https://www.glocious.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">About Glocious Infotech</h1>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Glocious Infotech was founded with a mission to transform business communication through intelligent IVR and cloud telephony solutions. Since our inception, we've been dedicated to building enterprise-grade communication infrastructure that helps businesses of all sizes connect with their customers more effectively.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in open communication and honest partnerships with every client.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2">Craft</h3>
                <p className="text-muted-foreground text-sm">
                  We obsess over every detail, from code quality to user experience design.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold mb-2">Results</h3>
                <p className="text-muted-foreground text-sm">
                  We measure our success by the success of our clients&apos; businesses.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground mb-8">
              Meet the founders and experts who drive Glocious Infotech forward, combining technical excellence with industry experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/hassan-avatar.png"
                    alt="Hassan — Founder & CEO of Glocious Infotech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-1">Hassan</h4>
                <p className="text-sm text-primary font-medium mb-2">Founder &amp; CEO</p>
                <p className="text-xs text-muted-foreground">Driving vision and strategy for Glocious Infotech&apos;s global IVR solutions.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/shahid.png"
                    alt="Shahid — CTO of Glocious Infotech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-1">Shahid</h4>
                <p className="text-sm text-primary font-medium mb-2">CTO</p>
                <p className="text-xs text-muted-foreground">Leading technical architecture and cloud telephony infrastructure.</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-primary/30">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/abdullah.jpg"
                    alt="Abdullah — COO of Glocious Infotech"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-1">Abdullah</h4>
                <p className="text-sm text-primary font-medium mb-2">COO</p>
                <p className="text-xs text-muted-foreground">Overseeing day-to-day operations and client delivery excellence.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
