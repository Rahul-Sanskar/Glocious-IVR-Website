import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Github, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading mb-4 block">
              SoftBiz<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              State-of-the-art web development and digital marketing services for forward-thinking businesses.
            </p>
            <div className="space-y-1.5">
              <a href="tel:+18332281750" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                <Phone size={12} /><span>+1 (833) 228-1750</span>
              </a>
              <a href="mailto:contact@thesoftbiz.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                <Mail size={12} /><span>contact@thesoftbiz.com</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/web-development" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-primary">Digital Marketing</Link></li>
              <li><Link href="/services/shopify-solutions" className="hover:text-primary">Shopify Solutions</Link></li>
              <li><Link href="/services/amazon-services" className="hover:text-primary">Amazon Services</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/team" className="hover:text-primary">Our Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/thesoftbiz" target="_blank" rel="noopener noreferrer" aria-label="SoftBiz on Twitter / X" className="hover:text-primary transition-colors"><Twitter size={20}/></a>
              <a href="https://www.linkedin.com/company/thesoftbiz" target="_blank" rel="noopener noreferrer" aria-label="SoftBiz on LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20}/></a>
              <a href="https://www.instagram.com/thesoftbiz" target="_blank" rel="noopener noreferrer" aria-label="SoftBiz on Instagram" className="hover:text-primary transition-colors"><Instagram size={20}/></a>
              <a href="https://github.com/thesoftbiz" target="_blank" rel="noopener noreferrer" aria-label="SoftBiz on GitHub" className="hover:text-primary transition-colors"><Github size={20}/></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SoftBiz. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
