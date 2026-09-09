import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground text-sm">
                  We believe in open communication and honest partnerships with every client.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Craft</h3>
                <p className="text-muted-foreground text-sm">
                  We obsess over every detail, from code quality to user experience design.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h3 className="font-bold mb-2">Results</h3>
                <p className="text-muted-foreground text-sm">
                  We measure our success by the success of our clients' businesses.
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
              {/* Team member cards would go here */}
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">Founder & CEO</h4>
                <p className="text-sm text-muted-foreground">Glocious Leadership</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">CTO</h4>
                <p className="text-sm text-muted-foreground">Technical Leadership</p>
              </div>
              <div className="p-6 rounded-xl bg-secondary/30 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-4 bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">COO</h4>
                <p className="text-sm text-muted-foreground">Operations Leadership</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
