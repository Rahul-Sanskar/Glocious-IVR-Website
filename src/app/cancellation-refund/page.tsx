import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — Glocious Infotech",
  description:
    "Read Glocious Infotech's cancellation and refund policy for IVR solutions, cloud telephony, and related services.",
  alternates: { canonical: "https://www.glocious.com/cancellation-refund" },
};

export default function CancellationRefundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-muted-foreground mb-10">
            Last Updated: January 2025
          </p>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Overview</h2>
              <p className="text-muted-foreground">
                This Cancellation &amp; Refund Policy governs all services provided by Glocious
                Infotech Pvt. Ltd. ("Glocious", "we", "us"). By engaging our services, you agree
                to the terms set out in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Project Cancellations</h2>
              <p className="text-muted-foreground">
                Either party may cancel a project engagement by providing written notice. Upon
                cancellation:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>
                  All work completed up to the cancellation date is billable and must be paid in
                  full.
                </li>
                <li>
                  Any advance payments made for work not yet started will be refunded within
                  14 business days, minus a 10% administrative fee.
                </li>
                <li>
                  Deliverables completed and delivered prior to cancellation remain the property
                  of the client upon receipt of full payment.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Subscription / Monthly Service Cancellations</h2>
              <p className="text-muted-foreground">
                For recurring monthly services (e.g. IVR hosting, cloud telephony plans):
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>
                  Cancellations must be submitted in writing at least <strong>7 days</strong> before
                  the next billing cycle.
                </li>
                <li>
                  The current month's subscription will not be refunded once billed.
                </li>
                <li>
                  Service access continues until the end of the paid billing period.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Refund Eligibility</h2>
              <p className="text-muted-foreground">
                Refunds are considered in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                <li>
                  <strong>Service not delivered:</strong> If Glocious fails to deliver the agreed
                  service within the contractual timeline and cannot remedy the delay within a
                  reasonable extension period, a full refund of advance payments will be issued.
                </li>
                <li>
                  <strong>Duplicate payment:</strong> Duplicate charges will be refunded in full
                  within 5 business days of confirmation.
                </li>
                <li>
                  <strong>Technical error:</strong> Payments made in error due to a technical fault
                  on our platform will be refunded promptly.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Non-Refundable Items</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Setup fees, onboarding fees, and one-time configuration charges.</li>
                <li>Services already rendered and accepted by the client.</li>
                <li>Third-party costs incurred on behalf of the client (e.g. number provisioning, SMS credits).</li>
                <li>Partially completed milestones where significant work has been delivered.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Refund Process</h2>
              <p className="text-muted-foreground">
                To request a refund, email us at{" "}
                <a
                  href="mailto:kazim@glocious.com"
                  className="text-primary hover:underline"
                >
                  kazim@glocious.com
                </a>{" "}
                with your project details and reason for the request. We will review and respond
                within <strong>5 business days</strong>. Approved refunds are processed within
                <strong> 14 business days</strong> via the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Disputes</h2>
              <p className="text-muted-foreground">
                Any disputes regarding cancellations or refunds should first be raised directly
                with our team. We are committed to resolving issues fairly and promptly. If a
                resolution cannot be reached, disputes will be governed by the laws of Uttar
                Pradesh, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <p className="text-muted-foreground">
                For cancellation or refund enquiries, contact us at:
              </p>
              <div className="mt-3 text-muted-foreground space-y-1">
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:kazim@glocious.com" className="text-primary hover:underline">
                    kazim@glocious.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919999114347" className="text-primary hover:underline">
                    +91 99991 14347
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> Second Floor, Aditya Plaza-2, F-204, Ram Nagar,
                  Kaushambi, Ghaziabad, Uttar Pradesh 201010
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
