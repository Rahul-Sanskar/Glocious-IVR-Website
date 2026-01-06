// Function to generate dynamic AI images (Cyberpunk/3D/Cartoonish style)
const getDynamicImage = (title: unknown, category: unknown) => {
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
    excerpt: "Discover the groundbreaking features of Next.js 15 and how they shape the future of web development.",
    date: "Oct 24, 2024",
    author: "Alex Morgan",
    featured: true,
    content: `<p>Next.js 15 introduces a paradigm shift in how we build web applications. With enhanced performance, simplified data fetching, and improved developer experience, it's setting a new standard.</p>
    <p>Key features include partial prerendering, improved caching strategies, and deeper integration with React Server Components.</p>`
  },
  {
    slug: "minimalist-design",
    title: "Why Minimalist Design Converts Better",
    category: "Web Dev",
    image: getDynamicImage("Minimalist Website Design", "UI Design"),
    excerpt: "Less is more. Learn why minimalist design leads to better user engagement and higher conversion rates.",
    date: "Nov 02, 2024",
    author: "Sarah Jenkins",
    content: `<p>Minimalism isn't just an aesthetic choice; it's a functional one. By removing distractions, you guide the user's attention to what matters most.</p>
    <p>Studies show that decluttered interfaces reduce cognitive load, making it easier for users to make decisions and take action.</p>`
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    category: "Web Dev",
    image: getDynamicImage("React Server Components Server Code", "Programming"),
    excerpt: "A deep dive into React Server Components and how they optimize application performance.",
    date: "Nov 15, 2024",
    author: "David Chen",
    content: `<p>React Server Components (RSC) allow developers to write UI that can be rendered on the server. This results in smaller bundles and faster load times.</p>
    <p>Understand the difference between Client and Server components and when to use each for maximum efficiency.</p>`
  },
  {
    slug: "web-accessibility-guide",
    title: "The Ultimate Guide to WCAG Accessibility",
    category: "Web Dev",
    image: getDynamicImage("Web Accessibility for disabled users", "Inclusive Design"),
    excerpt: "Ensure your website is inclusive for all users by mastering the WCAG accessibility guidelines.",
    date: "Nov 28, 2024",
    author: "Emily White",
    content: `<p>Web accessibility is a fundamental right. This guide covers the essential WCAG principles: Perceivable, Operable, Understandable, and Robust.</p>
    <p>Learn detailed techniques for semantic HTML, ARIA labels, and keyboard navigation to make the web open to everyone.</p>`
  },

  // --- Shopify Solutions ---
  {
    slug: "shopify-updates",
    title: "Shopify 2.0: What You Need to Know",
    category: "E-commerce",
    image: getDynamicImage("Shopify Storefront 2.0", "E-commerce"),
    excerpt: "Explore the powerful new customization options and performance upgrades in Shopify 2.0.",
    date: "Dec 05, 2024",
    author: "Michael Ross",
    content: `<p>Shopify 2.0 brings Sections Everywhere, allowing unmatched flexibility in store design without touching code.</p>
    <p>We analyze the impact of Metafields, the new Theme Editor, and how to migrate your existing theme to 2.0.</p>`
  },
  {
    slug: "headless-shopify",
    title: "Is Headless Shopify Right for You?",
    category: "E-commerce",
    image: getDynamicImage("Headless Commerce Architecture", "Technology"),
    excerpt: "Weighing the pros and cons of going headless with Shopify for your e-commerce store.",
    date: "Dec 12, 2024",
    author: "Jessica Lee",
    content: `<p>Headless commerce decouples the frontend from the backend. While it offers ultimate design freedom and speed, it comes with increased complexity.</p>
    <p>This article helps you decide if the investment in headless architecture aligns with your business goals.</p>`
  },
  {
    slug: "shopify-markets",
    title: "Scaling Globally with Shopify Markets",
    category: "E-commerce",
    image: getDynamicImage("Global Trade and Shopping", "E-commerce"),
    excerpt: "How to use Shopify Markets to easily manage cross-border sales and international expansion.",
    date: "Dec 18, 2024",
    author: "Robert Taylor",
    content: `<p>Shopify Markets simplifies international selling by managing currencies, languages, and duties from a single store.</p>
    <p>Learn how to configure markets to provide a localized shopping experience for customers around the world.</p>`
  },

  // --- Amazon Services ---
  {
    slug: "amazon-fba-strategies",
    title: "5 Strategies to Dominate Amazon FBA in 2025",
    category: "Amazon",
    image: getDynamicImage("Amazon FBA Logistics Warehouse", "Logistics"),
    excerpt: "Stay ahead of the competition with these advanced Amazon FBA strategies for 2025.",
    date: "Jan 03, 2025",
    author: "Chris Johnson",
    content: `<p>The Amazon marketplace is evolving. Success in 2025 requires advanced PPC tactics, rigorous inventory management, and brand storytelling.</p>
    <p>We outline five actionable strategies to boost your organic ranking and sales velocity.</p>`
  },
  {
    slug: "amazon-brand-registry",
    title: "Protecting Your IP: Amazon Brand Registry",
    category: "Amazon",
    image: getDynamicImage("Intellectual Property Shield", "Security"),
    excerpt: "Why Amazon Brand Registry is crucial for protecting your intellectual property and building trust.",
    date: "Jan 10, 2025",
    author: "Amanda Wilson",
    content: `<p>Brand Registry gives you control over your product listings and unlocks powerful tools like A+ Content and Sponsored Brands.</p>
    <p>Don't let counterfeiters damage your reputation. Learn how to enroll and leverage Brand Registry for protection.</p>`
  },
  {
    slug: "amazon-a-plus-content",
    title: "How A+ Content Boosts Conversion Rates",
    category: "Amazon",
    image: getDynamicImage("High Conversion Shopping Page", "Marketing"),
    excerpt: "Maximize your product page's potential with engaging A+ Content that drives sales.",
    date: "Jan 15, 2025",
    author: "Daniel Brown",
    content: `<p>A+ Content allows you to use rich media and enhanced text placements to tell your brand story.</p>
    <p>Data shows that listings with A+ Content have significantly higher conversion rates. We show you how to design effective layouts.</p>`
  },

  // --- SEO & SEM ---
  {
    slug: "seo-in-ai-age",
    title: "SEO is Dead? Think Again (SGE Updates)",
    category: "SEO",
    image: getDynamicImage("AI Search Engine Optimization", "Technology"),
    excerpt: "Navigating the changing landscape of SEO in the era of Artificial Intelligence and SGE.",
    date: "Jan 22, 2025",
    author: "Olivia Martinez",
    content: `<p>AI is transforming search, but SEO isn't dead—it's evolving. Search Generative Experience (SGE) changes how users find information.</p>
    <p>Adapt your strategy to focus on E-E-A-T, helpful content, and answering complex user queries directly.</p>`
  },
  {
    slug: "local-seo-mastery",
    title: "Dominate Your City: Local SEO Guide",
    category: "SEO",
    image: getDynamicImage("Local City Map Search Pin", "SEO"),
    excerpt: "Essential tips for small businesses to rank higher in local search results and Google Maps.",
    date: "Jan 28, 2025",
    author: "James Anderson",
    content: `<p>For local businesses, visibility in the 'Map Pack' is everything. Optimize your Google Business Profile and gather authentic reviews.</p>
    <p>We discuss local citations, localized content, and the importance of mobile optimization for local search.</p>`
  },
  {
    slug: "technical-seo-audit",
    title: "How to Perform a Technical SEO Audit",
    category: "SEO",
    image: getDynamicImage("Technical Website Audit Checklist", "SEO"),
    excerpt: "A step-by-step checklist to identify and fix technical issues hurting your site's ranking.",
    date: "Feb 05, 2025",
    author: "Sophia Thomas",
    content: `<p>A pretty website is useless if Google can't crawl it. Regular technical audits ensure your site is healthy.</p>
    <p>Check for broken links, slow page speeds, duplicate content, and schema markup errors with our comprehensive guide.</p>`
  },

  // --- PPC Marketing ---
  {
    slug: "social-media-algorithms",
    title: "Mastering Social Media Algorithms",
    category: "Marketing",
    image: getDynamicImage("Social Media Algorithm Brain", "Social Media"),
    excerpt: "Unlock the secrets behind social media algorithms to increase organic reach and engagement.",
    date: "Feb 12, 2025",
    author: "Ethan Davis",
    content: `<p>Algorithms aren't magic; they are engagement barriers. Learn how platforms like Instagram and TikTok prioritize content.</p>
    <p>Focus on watch time, interaction rates, and consistency to work with the algorithm, not against it.</p>`
  },
  {
    slug: "google-ads-quality-score",
    title: "Hacking the Google Ads Quality Score",
    category: "Marketing",
    image: getDynamicImage("Google Ads Scoreboard", "Marketing"),
    excerpt: "Improve your ad position and lower your costs by optimizing your Google Ads Quality Score.",
    date: "Feb 18, 2025",
    author: "Mia Garcia",
    content: `<p>Quality Score is the metric that determines how much you pay per click. A higher score means cheaper traffic.</p>
    <p>We break down the three components: Ad Relevance, Expected CTR, and Landing Page Experience.</p>`
  },
  {
    slug: "performance-max",
    title: "Google Performance Max: A Complete Guide",
    category: "Marketing",
    image: getDynamicImage("Performance Max Chart Rocket", "Growth"),
    excerpt: "Leverage Google's automated PMax campaigns to find customers across all Google channels.",
    date: "Feb 25, 2025",
    author: "William Rodriguez",
    content: `<p>Performance Max uses machine learning to optimize bids and placements across YouTube, Display, Search, and Discover.</p>
    <p>Learn how to provide the right assets and audience signals to guide the AI towards your conversion goals.</p>`
  }
];

export const caseStudies = [
  // --- Web Development Case Studies ---
  {
    slug: "saas-platform-migration",
    title: "SaaS Platform Modernization",
    category: "Web Application",
    description: "Representative project: Migrating an enterprise client from a legacy system to a modern microservices architecture.",
    stats: { result: "Improved uptime", timeframe: "12 Months" },
    image: getDynamicImage("Enterprise Cloud Server Migration", "SaaS"),
    content: {
      challenge: "An established software company needed to modernize their platform to handle growing user demand and reduce technical debt.",
      solution: "We rebuilt the system using a microservices approach, improving scalability and reducing deployment complexity."
    }
  },
  {
    slug: "food-delivery-app",
    title: "Food Delivery Platform",
    category: "Web App",
    description: "Representative project: Building a real-time delivery tracking system for a regional food delivery service.",
    stats: { result: "Successful launch", timeframe: "6 Months" },
    image: getDynamicImage("Food Delivery App Scooter", "Mobile App"),
    content: {
      challenge: "A growing delivery business needed a reliable tracking system that worked across different devices and connection speeds.",
      solution: "Built an efficient real-time tracking system using WebSocket connections optimized for mobile performance."
    }
  },

  // --- Shopify Case Studies ---
  {
    slug: "fashion-ecommerce",
    title: "Fashion E-commerce Redesign",
    category: "E-commerce",
    description: "Representative project: Rebuilding a direct-to-consumer fashion brand's online store using headless Shopify.",
    stats: { result: "Improved conversion", timeframe: "3 Months" },
    image: getDynamicImage("Fashion Clothing Store Online", "Fashion"),
    content: {
      challenge: "A fashion brand's existing platform was limiting their ability to customize the shopping experience and run marketing campaigns.",
      solution: "Implemented a headless Shopify setup giving the team full control over the frontend while maintaining Shopify's robust backend."
    }
  },
  {
    slug: "furniture-configurator",
    title: "Custom Furniture Configurator",
    category: "Shopify",
    description: "Representative project: Adding a 3D product customizer to a custom furniture retailer's Shopify store.",
    stats: { result: "Higher order value", timeframe: "4 Months" },
    image: getDynamicImage("3D Furniture Configurator", "Interior Design"),
    content: {
      challenge: "Customers were hesitant to purchase custom furniture online without visualizing the final product.",
      solution: "Developed a 3D product configurator allowing users to visualize materials and finishes before purchasing."
    }
  },

  // --- Amazon Case Studies ---
  {
    slug: "outdoor-brand-launch",
    title: "Outdoor Brand Amazon Launch",
    category: "Amazon FBA",
    description: "Representative project: Launching a new outdoor gear brand on Amazon with PPC strategy and listing optimization.",
    stats: { result: "Strong launch sales", timeframe: "3 Months" },
    image: getDynamicImage("Camping Gear Outdoor Adventure", "Outdoors"),
    content: {
      challenge: "A new brand entering a competitive category needed to build visibility quickly without excessive ad spend.",
      solution: "Developed a targeted PPC campaign with optimized listing content to drive initial sales and reviews."
    }
  },
  {
    slug: "pet-subscription-brand",
    title: "Pet Brand Subscription Strategy",
    category: "Amazon FBA",
    description: "Representative project: Optimizing Subscribe & Save for a pet supplies brand to improve customer retention.",
    stats: { result: "Improved retention", timeframe: "8 Months" },
    image: getDynamicImage("Happy Dog Pet Food Subscription", "Pets"),
    content: {
      challenge: "A pet supplies seller was seeing high customer churn and low repeat purchase rates.",
      solution: "Optimized the Subscribe & Save program with strategic discounts and follow-up email sequences."
    }
  },

  // --- SEO Case Studies ---
  {
    slug: "fintech-seo-growth",
    title: "Fintech SEO Strategy",
    category: "SEO",
    description: "Representative project: Building organic search traffic for a fintech startup through content and technical SEO.",
    stats: { result: "Increased traffic", timeframe: "6 Months" },
    image: getDynamicImage("Neon Cyberpunk Digital Wallet", "Fintech"),
    content: {
      challenge: "A fintech company had low organic visibility and was relying heavily on paid acquisition.",
      solution: "Implemented comprehensive SEO focusing on educational content and technical site improvements."
    }
  },
  {
    slug: "dental-local-seo",
    title: "Dental Practice Local SEO",
    category: "Local SEO",
    description: "Representative project: Improving local search rankings for a dental practice in a competitive metro area.",
    stats: { result: "Map Pack ranking", timeframe: "5 Months" },
    image: getDynamicImage("Dental Clinic Map Pin", "Medical"),
    content: {
      challenge: "A dental practice was invisible in local search results despite excellent service quality.",
      solution: "Optimized Google Business Profile, managed local citations, and implemented a review generation strategy."
    }
  },

  // --- PPC Case Studies ---
  {
    slug: "auto-repair-leads",
    title: "Auto Repair Lead Generation",
    category: "PPC",
    description: "Representative project: Reducing cost-per-lead for an auto repair franchise through targeted Google Ads.",
    stats: { result: "Lower cost-per-lead", timeframe: "3 Months" },
    image: getDynamicImage("Car Mechanic Auto Repair", "Automotive"),
    content: {
      challenge: "An auto repair business was paying too much per lead with many low-quality inquiries.",
      solution: "Refined geographic targeting and implemented negative keyword lists to filter irrelevant traffic."
    }
  },
  {
    slug: "b2b-saas-demos",
    title: "B2B SaaS Demo Campaigns",
    category: "PPC",
    description: "Representative project: Using LinkedIn and Google Ads to drive demo requests for enterprise software.",
    stats: { result: "Qualified pipeline", timeframe: "6 Months" },
    image: getDynamicImage("B2B Sales Funnel Chart", "Business"),
    content: {
      challenge: "An enterprise software company struggled to reach decision-makers at target companies.",
      solution: "Used LinkedIn Account-Based Marketing to target specific job titles and companies with relevant messaging."
    }
  }
];