import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis"; // We need to create this wrapper
import { TransitionProvider } from "@/context/TransitionContext";
import { TransitionOverlay } from "@/components/ui/TransitionOverlay";
import { GlobalLoader } from "@/components/layout/GlobalLoader";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.thesoftbiz.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Web Development, Shopify & Digital Marketing Agency | SoftBiz",
    template: "%s | SoftBiz",
  },
  description:
    "SoftBiz builds high-performance websites, Shopify stores, and digital marketing campaigns for growing brands. Get a free project quote.",
  openGraph: {
    type: "website",
    siteName: "SoftBiz",
    title: "Web Development, Shopify & Digital Marketing Agency | SoftBiz",
    description:
      "SoftBiz builds high-performance websites, Shopify stores, and digital marketing campaigns for growing brands. Get a free project quote.",
    url: BASE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftBiz — Web Development · Shopify · Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, Shopify & Digital Marketing Agency | SoftBiz",
    description:
      "SoftBiz builds high-performance websites, Shopify stores, and digital marketing campaigns for growing brands.",
    images: ["/og-image.png"],
    site: "@thesoftbiz",
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "SoftBiz",
  url: BASE_URL,
  telephone: "+18332281750",
  email: "contact@thesoftbiz.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3232 McKinney Ave, Suite 285",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75024",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/thesoftbiz",
    "https://twitter.com/thesoftbiz",
    "https://www.instagram.com/thesoftbiz",
    "https://github.com/thesoftbiz",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="afterInteractive"
        />
      </head>
      <ReactLenis root>
        <body className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
             <GlobalLoader />
             <TransitionProvider>
                <TransitionOverlay />
                {/* Header will go here */}
                <main className="min-h-screen">
                    {children}
                </main>
                {/* Footer will go here */}
             </TransitionProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
