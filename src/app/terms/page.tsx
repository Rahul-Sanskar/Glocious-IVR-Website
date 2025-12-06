import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                    <p className="text-muted-foreground">
                        These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and SoftBiz ("we," “us” or “our”), 
                        concerning your access to and use of the SoftBiz website as well as any other media form, media channel, mobile website or mobile application related, linked, 
                        or otherwise connected thereto (collectively, the “Site”).
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. Intellectual Property Rights</h2>
                    <p className="text-muted-foreground">
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, 
                        and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or 
                        licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>
                </section>

                 <section>
                    <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
                    <p className="text-muted-foreground">
                       By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; 
                       (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; 
                       (3) you have the legal capacity and you agree to comply with these Terms of Use.
                    </p>
                </section>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
