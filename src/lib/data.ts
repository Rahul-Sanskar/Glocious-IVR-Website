// Function to generate dynamic AI images (Cyberpunk/3D/Cartoonish style)
const getDynamicImage = (title:unknown, category:unknown) => {
  const prompt = encodeURIComponent(
    `3d digital illustration of ${title}, ${category} concept, vibrant colors, cartoonish style, high quality render, isometric view`
  );
  // Returns a 1200x800 image (standard blog size)
  return `https://image.pollinations.ai/prompt/${prompt}?width=1200&height=800&nologo=true`;
};

export const blogPosts = [
  // --- Web Development ---
  {
    slug: "future-of-web-dev",
    title: "The Future of Web Development: Next.js 15",
    category: "Web Dev",
    image: getDynamicImage("The Future of Web Development Next.js 15", "Web Development"),
  },
  {
    slug: "minimalist-design",
    title: "Why Minimalist Design Converts Better",
    category: "Web Dev",
    image: getDynamicImage("Minimalist Website Design", "UI Design"),
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    category: "Web Dev",
    image: getDynamicImage("React Server Components Server Code", "Programming"),
  },
  {
    slug: "web-accessibility-guide",
    title: "The Ultimate Guide to WCAG Accessibility",
    category: "Web Dev",
    image: getDynamicImage("Web Accessibility for disabled users", "Inclusive Design"),
  },

  // --- Shopify Solutions ---
  {
    slug: "shopify-updates",
    title: "Shopify 2.0: What You Need to Know",
    category: "E-commerce",
    image: getDynamicImage("Shopify Storefront 2.0", "E-commerce"),
  },
  {
    slug: "headless-shopify",
    title: "Is Headless Shopify Right for You?",
    category: "E-commerce",
    image: getDynamicImage("Headless Commerce Architecture", "Technology"),
  },
  {
    slug: "shopify-markets",
    title: "Scaling Globally with Shopify Markets",
    category: "E-commerce",
    image: getDynamicImage("Global Trade and Shopping", "E-commerce"),
  },

  // --- Amazon Services ---
  {
    slug: "amazon-fba-strategies",
    title: "5 Strategies to Dominate Amazon FBA in 2025",
    category: "Amazon",
    image: getDynamicImage("Amazon FBA Logistics Warehouse", "Logistics"),
  },
  {
    slug: "amazon-brand-registry",
    title: "Protecting Your IP: Amazon Brand Registry",
    category: "Amazon",
    image: getDynamicImage("Intellectual Property Shield", "Security"),
  },
  {
    slug: "amazon-a-plus-content",
    title: "How A+ Content Boosts Conversion Rates",
    category: "Amazon",
    image: getDynamicImage("High Conversion Shopping Page", "Marketing"),
  },

  // --- SEO & SEM ---
  {
    slug: "seo-in-ai-age",
    title: "SEO is Dead? Think Again (SGE Updates)",
    category: "SEO",
    image: getDynamicImage("AI Search Engine Optimization", "Technology"),
  },
  {
    slug: "local-seo-mastery",
    title: "Dominate Your City: Local SEO Guide",
    category: "SEO",
    image: getDynamicImage("Local City Map Search Pin", "SEO"),
  },
  {
    slug: "technical-seo-audit",
    title: "How to Perform a Technical SEO Audit",
    category: "SEO",
    image: getDynamicImage("Technical Website Audit Checklist", "SEO"),
  },

  // --- PPC Marketing ---
  {
    slug: "social-media-algorithms",
    title: "Mastering Social Media Algorithms",
    category: "Marketing",
    image: getDynamicImage("Social Media Algorithm Brain", "Social Media"),
  },
  {
    slug: "google-ads-quality-score",
    title: "Hacking the Google Ads Quality Score",
    category: "Marketing",
    image: getDynamicImage("Google Ads Scoreboard", "Marketing"),
  },
  {
    slug: "performance-max",
    title: "Google Performance Max: A Complete Guide",
    category: "Marketing",
    image: getDynamicImage("Performance Max Chart Rocket", "Growth"),
  }
];

export const caseStudies = [
  // --- Web Development Case Studies ---
  {
    slug: "techcore-saas",
    title: "TechCore: Enterprise SaaS Migration",
    category: "SaaS",
    description: "Migrating a legacy monolith to a microservices architecture for a Fortune 500 company.",
    stats: { roi: "200%", timeframe: "12 Months" },
    image: getDynamicImage("Enterprise Cloud Server Migration", "SaaS"),
  },
  {
    slug: "fresheats-delivery",
    title: "FreshEats: High-Scale Food Delivery App",
    category: "Web App",
    description: "Building a real-time delivery tracking system handling 10k concurrent users.",
    stats: { roi: "180%", timeframe: "6 Months" },
    image: getDynamicImage("Food Delivery App Scooter", "Mobile App"),
  },

  // --- Shopify Case Studies ---
  {
    slug: "luxefit-ecommerce",
    title: "LuxeFit: Scaling D2C Fashion",
    category: "E-commerce",
    description: "Scaling a D2C fashion brand from 6 to 7 figures using headless Shopify architecture.",
    stats: { roi: "300%", timeframe: "3 Months" },
    image: getDynamicImage("Fashion Clothing Store Online", "Fashion"),
  },
  {
    slug: "heritage-home",
    title: "Heritage Home: Custom Furniture Configurator",
    category: "Shopify",
    description: "Increasing average order value by 40% with a 3D product customizer.",
    stats: { roi: "150%", timeframe: "4 Months" },
    image: getDynamicImage("3D Furniture Configurator", "Interior Design"),
  },

  // --- Amazon Case Studies ---
  {
    slug: "urbangear-launch",
    title: "UrbanGear: From Zero to Bestseller",
    category: "Amazon FBA",
    description: "Launching a new outdoor brand and achieving the #1 Best Seller badge in 60 days.",
    stats: { roi: "500%", timeframe: "2 Months" },
    image: getDynamicImage("Camping Gear Outdoor Adventure", "Outdoors"),
  },
  {
    slug: "petlife-subscriptions",
    title: "PetLife: Recurring Revenue Mastery",
    category: "Amazon FBA",
    description: "Optimizing Subscribe & Save to build a loyal customer base of 50k subscribers.",
    stats: { roi: "210%", timeframe: "8 Months" },
    image: getDynamicImage("Happy Dog Pet Food Subscription", "Pets"),
  },

  // --- SEO Case Studies ---
  {
    slug: "neonbank-fintech",
    title: "NeonBank: Redefining the Digital Wallet",
    category: "FinTech",
    description: "A complete digital overhaul for a leading fintech startup, resulting in massive user acquisition.",
    stats: { roi: "145%", timeframe: "6 Months" },
    image: getDynamicImage("Neon Cyberpunk Digital Wallet", "Fintech"),
  },
  {
    slug: "dr-smile-local",
    title: "Dr. Smile: Dominating Local Search",
    category: "Local SEO",
    description: "Ranking #1 in the Google Map Pack for 15+ dental keywords in a competitive metro area.",
    stats: { roi: "400%", timeframe: "5 Months" },
    image: getDynamicImage("Dental Clinic Map Pin", "Medical"),
  },

  // --- PPC Case Studies ---
  {
    slug: "autofix-leads",
    title: "AutoFix: Hyper-Local Lead Gen",
    category: "PPC",
    description: "Reducing cost-per-lead by 60% for a national franchise of auto repair shops.",
    stats: { roi: "250%", timeframe: "3 Months" },
    image: getDynamicImage("Car Mechanic Auto Repair", "Automotive"),
  },
  {
    slug: "clickflow-saas",
    title: "ClickFlow: B2B SaaS Demo Bookings",
    category: "PPC",
    description: "Using LinkedIn and Google Ads to fill the sales pipeline for an enterprise software.",
    stats: { roi: "320%", timeframe: "6 Months" },
    image: getDynamicImage("B2B Sales Funnel Chart", "Business"),
  }
];