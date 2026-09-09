import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OwnerProfile } from "@/components/owners/OwnerProfile";

export default function OwnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <section className="container mx-auto px-6 mb-24 text-center">
              <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6">Built on Vision</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                 Meet the founders who turned a shared dream effectively into reality.
              </p>
        </section>

        <section className="container mx-auto px-6">
            <OwnerProfile 
                name="Alex Morgan"
                role="Chief Executive Officer"
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                bioShort="I founded Glocious to challenge the status quo of what a digital agency can be. We don't just build websites; we build engines for growth."
                bioLong={`Before Glocious, I spent a decade leading engineering teams at top Silicon Valley startups. I saw a gap in the market for an agency that could combine high-end creative design with deep technical engineering.\n\nMy philosophy is simple: technology should serve the business, not the other way around. Every line of code we write is focused on delivering a measurable outcome for our clients.\n\nWhen I'm not coding or strategizing, you can find me hiking the trails of Northern California or tinkering with my vintage motorcycle collection.`}
                socials={{ linkedin: "#", twitter: "#" }}
            />
             <OwnerProfile 
                name="Sarah Chen"
                role="Chief Technology Officer"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                bioShort="Technology moves fast. My job is to ensure our clients are always two steps ahead, leveraging the latest in AI and web performance."
                bioLong={`I've always been obsessed with optimization. Whether it's shaving milliseconds off a page load or restructuring a database for scalability, I love the technical challenges that come with growth.\n\nAt Glocious, I oversee our entire engineering division. We maintain rigorous standards for code quality, security, and accessibility. We don't ship anything that isn't world-class.\n\nI believe the future of the web is immersive and personalized, and we are building the tools to make that a reality for every business we partner with.`}
                socials={{ linkedin: "#", twitter: "#" }}
                reverse
            />
             <OwnerProfile 
                name="Marcus Reynolds"
                role="Chief Operating Officer"
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                bioShort="Great ideas need flawless execution. I ensure that every project is delivered on time, on budget, and exceeds expectations."
                bioLong={`With a background in project management and operations for Fortune 500 companies, I bring a level of process and discipline that is rare in the agency world.\n\nMy role is to be the bridge between our creative visionaries and our technical wizards, ensuring seamless collaboration. I focus on client satisfaction and operational excellence.\n\nGlocious is more than a company; it's a machine designed to produce success. and I make sure that machine runs smoothly every single day.`}
                socials={{ linkedin: "#" }}
            />
        </section>
      </main>

      <Footer />
    </div>
  );
}
