import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { TransitionProvider } from "@/context/TransitionContext";
import { TransitionOverlay } from "@/components/ui/TransitionOverlay";
import { GlobalLoader } from "@/components/layout/GlobalLoader";
import Script from "next/script";

const GlociousBase_URL = "https://www.glocious.com";

export const metadata: Metadata = {
  metadataBase: new URL(GlociousBase_URL),
  title: {
    default: "Glocious Infotech | IVR & Cloud Telephony Solutions",
    template: "%s | Glocious Infotech",
  },
  description:
    "Glocious Infotech provides enterprise IVR service provider India, cloud telephony, interactive voice response systems, and call routing solutions for businesses.",
  keywords:
    "IVR service provider India, IVR solutions, cloud telephony, IVR telephony, business IVR, interactive voice response, call routing, IVR system for business, Glocious Infotech IVR",
  openGraph: {
    type: "website",
    siteName: "Glocious Infotech",
    title: "Glocious Infotech | IVR & Cloud Telephony Solutions",
    description:
      "Glocious Infotech provides enterprise IVR service provider India, cloud telephony, interactive voice response systems, and call routing solutions for businesses.",
    url: GlociousBase_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glocious Infotech — IVR and Cloud Telephony Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glocious Infotech | IVR & Cloud Telephony Solutions",
    description:
      "Glocious Infotech provides enterprise IVR service provider India, cloud telephony, interactive voice response systems, and call routing solutions for businesses.",
    images: ["/og-image.png"],
    site: "@glociousinfotech",
  },
  alternates: {
    canonical: GlociousBase_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
      <body className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <GlobalLoader />
        <TransitionProvider>
          <TransitionOverlay />
          <main className="min-h-screen">
            {children}
          </main>
        </TransitionProvider>
      </body>
    </html>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Glocious Infotech",
  url: GlociousBase_URL,
  telephone: "+18332281750",
  email: "contact@glocious.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3232 McKinney Ave, Suite 285",
    addressLocality: "Dallas",
    addressRegion: "TX",
    postalCode: "75024",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/glocious-infotech",
    "https://twitter.com/glociousinfotech",
    "https://www.instagram.com/glociousinfotech",
    "https://github.com/glociousinfotech",
  ],
  areaServed: "Worldwide",
  priceRange: "$$",
};
