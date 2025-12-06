"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      <h2 className="text-4xl font-bold font-heading mb-4 text-primary">404 - Page Not Found</h2>
      <p className="text-xl text-muted-foreground mb-8">
        The page you are looking for does not exist.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-primary transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
