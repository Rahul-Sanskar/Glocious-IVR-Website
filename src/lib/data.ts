// Unique vibrant 3D/abstract/gradient style images from Unsplash (no repeats)
// These are colorful, modern, graphic-style images

// Blog post images (16 unique images) - abstract, 3D, neon, geometric styles
const blogImages = {
  'future-of-web-dev': '1558618666-fcd25c85cd64', // Purple neon abstract
  'minimalist-design': '1557682250-b6e51f2d1aa4', // Clean gradient waves
  'react-server-components': '1633356122102-3fe601e05bd2', // Blue tech abstract
  'web-accessibility-guide': '1620121692029-d088224daa98', // Colorful 3D spheres
  'shopify-updates': '1579547945413-497e1b99dac6', // Gradient mesh colorful
  'headless-shopify': '1618005182384-a83a8bd57fbe', // Abstract fluid art
  'shopify-markets': '1614850523296-d8c1af93d045', // Globe digital art
  'amazon-fba-strategies': '1635070041078-e363dbe4d720', // Orange geometric
  'amazon-brand-registry': '1618172193763-c511deb635ca', // Shield abstract neon
  'amazon-a-plus-content': '1634017839464-5c339eba0e2f', // Vibrant 3D shapes
  'seo-in-ai-age': '1677442136019-21780ecad744', // AI digital brain
  'local-seo-mastery': '1604357209793-fca5dca89f97', // Neon city map
  'technical-seo-audit': '1639762681057-408e52192e55', // Tech grid pattern
  'social-media-algorithms': '1611162617213-7d7a39e9b1d7', // Social media colorful
  'google-ads-quality-score': '1634128222187-1cf91ab63c87', // Chart abstract
  'performance-max': '1633613286991-611fe299c4be',  // Rocket gradient
  'digital-partnership': '1551433191-229ef5c40fbb' // Digital collaboration abstract
};

// Case study images (10 unique images) - professional but vibrant abstract styles
const caseStudyImages = {
  'saas-platform-migration': '1635070041409-e09291e2b884', // Cloud tech abstract
  'food-delivery-app': '1626785774573-4b799315345d', // Food delivery neon
  'fashion-ecommerce': '1558171813-01ed7dd3f8f0', // Fashion gradient
  'furniture-configurator': '1633177317976-3f9bc45e1d1d', // 3D interior abstract
  'outdoor-brand-launch': '1504280390367-361c6d9f38f4', // Adventure colorful
  'pet-subscription-brand': '1587300003388-59208cc962cb', // Pet abstract cute
  'fintech-seo-growth': '1639322537228-f710d846310a', // Fintech neon
  'dental-local-seo': '1629909613654-28e377c37b09', // Medical abstract
  'auto-repair-leads': '1619642751034-765dfdf7c58e', // Auto neon lights
  'b2b-saas-demos': '1633356122544-f134324a6cee'  // B2B tech gradient
};

// Helper to get Unsplash URL
const getUnsplashUrl = (photoId: string) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&h=800&q=80`;

// Get blog image by slug
const getBlogImage = (slug: string) => getUnsplashUrl(blogImages[slug as keyof typeof blogImages] || '1451187580459-43490279c0fa');

// Get case study image by slug
const getCaseStudyImage = (slug: string) => getUnsplashUrl(caseStudyImages[slug as keyof typeof caseStudyImages] || '1451187580459-43490279c0fa');

export const blogPosts = [
  // --- Web Development ---
  {
    slug: "future-of-web-dev",
    title: "The Future of Web Development: Next.js 15",
    category: "Web Dev",
    image: getBlogImage("future-of-web-dev"),
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
    image: getBlogImage("minimalist-design"),
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
    image: getBlogImage("react-server-components"),
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
    image: getBlogImage("web-accessibility-guide"),
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
    image: getBlogImage("shopify-updates"),
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
    image: getBlogImage("headless-shopify"),
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
    image: getBlogImage("shopify-markets"),
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
    image: getBlogImage("amazon-fba-strategies"),
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
    image: getBlogImage("amazon-brand-registry"),
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
    image: getBlogImage("amazon-a-plus-content"),
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
    image: getBlogImage("seo-in-ai-age"),
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
    image: getBlogImage("local-seo-mastery"),
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
    image: getBlogImage("technical-seo-audit"),
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
    image: getBlogImage("social-media-algorithms"),
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
    image: getBlogImage("google-ads-quality-score"),
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
    image: getBlogImage("performance-max"),
    excerpt: "Leverage Google's automated PMax campaigns to find customers across all Google channels.",
    date: "Feb 25, 2025",
    author: "William Rodriguez",
    content: `<p>Performance Max uses machine learning to optimize bids and placements across YouTube, Display, Search, and Discover.</p>
    <p>Learn how to provide the right assets and audience signals to guide the AI towards your conversion goals.</p>`
  },
  {
    slug: "leveraging-digital-partnerships",
    title: "Leveraging Digital Partnerships for Business Growth",
    category: "Marketing",
    image: getBlogImage("digital-partnership"),
    excerpt: "In the evolving digital landscape, strategic partnerships are key to scaling your reach and impact. Explore how collaboration drives success.",
    date: "Jan 11, 2026",
    author: "Soft-Biz Strategy Team",
    content: `<p>Strategic digital partnerships allow businesses to pool resources, share expertise, and reach new audiences more effectively than they could alone. By aligning with partners that complement your core strengths, you can create a synergy that drives mutual growth.</p>
    <p>One such example of excellence in digital solutions is <a href="https://digivixo.site" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-semibold">Digivixo</a>, a partner dedicated to pushing the boundaries of digital innovation and helping businesses achieve their full potential online.</p>
    <p>Whether it's through co-marketing efforts, technology integrations, or shared service offerings, the right partnership can be the catalyst for your next major milestone.</p>`
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
    image: getCaseStudyImage("saas-platform-migration"),
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
    image: getCaseStudyImage("food-delivery-app"),
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
    image: getCaseStudyImage("fashion-ecommerce"),
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
    image: getCaseStudyImage("furniture-configurator"),
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
    image: getCaseStudyImage("outdoor-brand-launch"),
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
    image: getCaseStudyImage("pet-subscription-brand"),
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
    image: getCaseStudyImage("fintech-seo-growth"),
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
    image: getCaseStudyImage("dental-local-seo"),
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
    image: getCaseStudyImage("auto-repair-leads"),
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
    image: getCaseStudyImage("b2b-saas-demos"),
    content: {
      challenge: "An enterprise software company struggled to reach decision-makers at target companies.",
      solution: "Used LinkedIn Account-Based Marketing to target specific job titles and companies with relevant messaging."
    }
  }
];