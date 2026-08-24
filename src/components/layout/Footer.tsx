import React from "react";
import Link from "next/link";
import {
  Home,
  Phone,
  Mail,
  Globe,
  Shield,
  Folder,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export function Footer() {
  return (
    <footer
      className="bg-secondary/80 border-t border-white/10 py-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-heading">GLOCIOUS INFOTECH PVT. LTD.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise IVR and cloud telephony solutions transforming customer engagement through intelligent automation and analytics since 2014.
            </p>
            <div className="space-y-2 mt-4">
              <a
                href="tel:+919319499699"
                className="flex items-center gap-2 text-xs text-primary hover:text-white transition-colors"
              >
                <Phone size={12} /> +91 9319499699
              </a>
              <a
                href="mailto:info@glocious.com"
                className="flex items-center gap-2 text-xs text-primary hover:text-white transition-colors"
              >
                <Mail size={12} /> info@glocious.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ivr-solutions" className="hover:text-primary transition-colors">
                  IVR Solutions
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services/ivr" className="hover:text-primary transition-colors">
                  Telephony / IVR
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-telephony" className="hover:text-primary transition-colors">
                  Voice SMS / Cloud
                </Link>
              </li>
              <li>
                <Link href="/services/bulk-sms" className="hover:text-primary transition-colors">
                  Bulk SMS
                </Link>
              </li>
              <li>
                <Link href="/services/whatsapp-marketing" className="hover:text-primary transition-colors">
                  WhatsApp Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/bulk-email" className="hover:text-primary transition-colors">
                  Bulk Email
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {/* Only include if page exists */}
                {/* <Link href="/cancellation-refund" className="hover:text-primary transition-colors">Cancellation & Refund Policy</Link> */}

                {/* Alternative: link to terms which may cover this */}
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} GLOCIOUS INFOTECH PVT. LTD. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
