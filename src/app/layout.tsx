import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis"; // We need to create this wrapper
import { TransitionProvider } from "@/context/TransitionContext";
import { TransitionOverlay } from "@/components/ui/TransitionOverlay";
import { GlobalLoader } from "@/components/layout/GlobalLoader";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SoftBiz | State-of-the-Art Digital Agency",
  description: "Expert Web Development, Digital Marketing, and E-commerce/Amazon Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
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
