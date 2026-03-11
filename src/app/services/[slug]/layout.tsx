import type { Metadata } from "next";

const BASE_URL = "https://www.thesoftbiz.com";

const serviceMeta: Record<string, { title: string; description: string }> = {
  "web-development": {
    title: "Next.js & React Web Development Agency",
    description:
      "Custom Next.js and React websites built for speed, SEO, and conversions. See how SoftBiz builds digital products that last.",
  },
  "shopify-solutions": {
    title: "Shopify Store Development & Custom Themes",
    description:
      "Shopify theme development, app integration, and store optimization by certified experts. Built to sell. Get a free Shopify audit.",
  },
  "amazon-services": {
    title: "Amazon Seller Management & PPC Agency",
    description:
      "Amazon seller account management, listing optimization & PPC campaigns. Grow your marketplace revenue with SoftBiz.",
  },
  "digital-marketing": {
    title: "SEO & Digital Marketing Agency",
    description:
      "SEO, content strategy, and search marketing that drives organic traffic. SoftBiz builds visibility that compounds over time.",
  },
  "google-ads": {
    title: "Google Ads Management & PPC Agency",
    description:
      "High-ROI Google Ads management for Search, Display, and Shopping. We lower your CPC and increase conversions — guaranteed improvement.",
  },
  "social-media": {
    title: "Social Media Advertising Agency",
    description:
      "Community management and paid social advertising strategies that turn scrollers into loyal customers. SoftBiz handles it all.",
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = serviceMeta[slug];

  if (!meta) {
    return {};
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | SoftBiz`,
      description: meta.description,
      url: `${BASE_URL}/services/${slug}`,
    },
    twitter: {
      title: `${meta.title} | SoftBiz`,
    },
    alternates: {
      canonical: `${BASE_URL}/services/${slug}`,
    },
  };
}

export default function ServiceLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
