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
                At Glocious Infotech ("we", "us", or "our"), we respect your privacy and are committed to protecting your personal data.
                This privacy policy explains how we collect, use, and safeguard information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and company name when you contact us or submit a form.</li>
                <li><strong>Project Information:</strong> Details about your project requirements and business needs shared during consultations.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited when you use our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mt-4 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate with you about projects and our services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                Our website uses cookies and similar technologies to improve your browsing experience and analyze site traffic.
                You can control cookie settings through your browser preferences. We use analytics tools to understand how visitors interact with our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required by law. Contact and project information is typically retained for the duration of our business relationship
                and for a reasonable period afterward for record-keeping purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Third-Party Services</h2>
              <p className="text-muted-foreground">
                We may use third-party services such as analytics providers, email service providers, and hosting platforms.
                These services have their own privacy policies governing how they handle your data. We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground">
                Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete your information.
                To exercise these rights or ask questions about our privacy practices, please contact us using the information below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this privacy policy or how we handle your data, please contact us at:
                <strong> privacy@glocious.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                We encourage you to review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
