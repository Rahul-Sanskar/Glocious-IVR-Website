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
                These Terms of Service constitute a legally binding agreement between you and SoftBiz (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;)
                regarding your access to and use of our website and services. By using our website or engaging our services,
                you agree to be bound by these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Overview</h2>
              <p className="text-muted-foreground">
                SoftBiz provides web development, e-commerce solutions, digital marketing, and related services as described on our website
                and in individual project agreements. Specific deliverables, timelines, and terms for each project are documented in separate
                proposals or contracts agreed upon before work begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Project Process</h2>
              <p className="text-muted-foreground">
                Our typical project process includes discovery, proposal, agreement, development, review, and delivery phases.
                We communicate regularly throughout each project and require timely client feedback to maintain project schedules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground">
                Payment terms are specified in individual project agreements. Unless otherwise stated, we typically require a deposit before
                work begins, with remaining payments due at defined project milestones. Invoices are due within 14 days of issuance unless
                alternative terms are agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                Upon full payment, clients receive ownership of custom work created specifically for their project, unless otherwise specified.
                We retain rights to any pre-existing tools, frameworks, or code libraries used in the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Client Responsibilities</h2>
              <p className="text-muted-foreground">
                Clients are responsible for providing necessary content, access credentials, and timely feedback as required for project completion.
                Clients must ensure they have rights to any content, images, or materials provided for use in their project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, SoftBiz shall not be liable for any indirect, incidental, special, or consequential damages
                arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate a project agreement with written notice as specified in the project contract.
                Upon termination, clients are responsible for payment for all work completed up to the termination date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Dispute Resolution</h2>
              <p className="text-muted-foreground">
                Any disputes arising from these terms or our services will first be addressed through good-faith negotiation between the parties.
                If a resolution cannot be reached, disputes will be resolved through binding arbitration in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at: <strong>legal@thesoftbiz.com</strong>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
