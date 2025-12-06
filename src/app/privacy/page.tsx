import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-muted-foreground">
                        At SoftBiz ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. 
                        This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) 
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
                    <p className="text-muted-foreground">
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                        <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                    </ul>
                </section>

                 <section>
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
                    <p className="text-muted-foreground">
                       We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                     <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                         <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                         <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                         <li>Where we need to comply with a legal or regulatory obligation.</li>
                     </ul>
                </section>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
