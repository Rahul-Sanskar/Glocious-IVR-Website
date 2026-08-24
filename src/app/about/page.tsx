import { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE_URL = "https://www.glocious.com";

export const metadata: Metadata = {
  title: "About Glocious Infotech — Our Story, Team & Values",
  description: "Learn about Glocious Infotech — our story, values, and the team behind every project. A technology company built on transparency, craft, and results.",
  openGraph: {
    title: "About Glocious Infotech — Our Story, Team & Values",
    description: "Learn about Glocious Infotech — our story, values, and the team behind every project.",
    url: "https://www.glocious.com/about",
  },
  twitter: {
    title: "About Glocious Infotech — Our Story, Team & Values",
    description: "Learn about Glocious Infotech — our story, values, and the team behind every project.",
  },
  alternates: {
    canonical: "https://www.glocious.com/about",
  },
};

export default function AboutPage() {
  return notFound();
}
