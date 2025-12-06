export const blogPosts = [
    {
        slug: "future-of-web-dev",
        title: "The Future of Web Development: Next.js 15 and Beyond",
        excerpt: "Explore the latest features in Next.js and how they are revolutionizing the way we build web applications for speed and scalability.",
        category: "Web Dev",
        author: "Alex Morgan",
        date: "Oct 24, 2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
        featured: true,
        content: `
      <p>The web is evolving at breakneck speed. Next.js 15 introduces partial prerendering, improved caching strategies, and turbo-charged builds.</p>
      <h2>Why Server Components Matter</h2>
      <p>Server components allow us to keep heavy dependencies on the server, resulting in zero-bundle-size for those parts. This creates a faster, more responsive user experience.</p>
    `
    },
    {
        slug: "amazon-fba-strategies",
        title: "5 Strategies to Dominate Amazon FBA in 2025",
        excerpt: "Learn the secrets to scaling your Amazon business with advanced PPC tactics and listing optimization.",
        category: "Amazon",
        author: "David Kim",
        date: "Oct 20, 2024",
        image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=1200",
        featured: false,
        content: `
      <p>Amazon's marketplace is more competitive than ever. To win in 2025, you need to leverage data-driven PPC campaigns and AI-optimized listing copy.</p>
      <h2>Optimization Checklist</h2>
      <ul>
        <li>Keyword research using Helium 10</li>
        <li>High-resolution lifestyle photography</li>
        <li>A/B testing titles and pricing</li>
      </ul>
    `
    },
    {
        slug: "minimalist-design",
        title: "Why Minimalist Design Converts Better",
        excerpt: "A deep dive into UX psychology and why less is often more when it comes to e-commerce conversion rates.",
        category: "Web Dev",
        author: "Jessica Suits",
        date: "Oct 15, 2024",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
        featured: false,
        content: `
      <p>Clutter kills conversion. By reducing cognitive load, you guide the user towards the primary action—buying your product.</p>
    `
    },
    {
        slug: "seo-in-ai-age",
        title: "SEO is Dead? Think Again.",
        excerpt: "Debunking common myths about SEO and understanding its evolving role in the age of AI search.",
        category: "SEO",
        author: "Sarah Chen",
        date: "Oct 10, 2024",
        image: "https://images.unsplash.com/photo-1572435555641-6ddcde287754?auto=format&fit=crop&q=80&w=1200",
        featured: false,
        content: `
      <p>AI isn't killing SEO; it's transforming it into Search Generative Experience (SGE) optimization. You need to answer questions, not just target keywords.</p>
    `
    },
    {
        slug: "shopify-updates",
        title: "Shopify 2.0: What You Need to Know",
        excerpt: "Everything you need to know about the latest Shopify updates and how to leverage them for your store.",
        category: "E-commerce",
        author: "Michael Ross",
        date: "Oct 05, 2024",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
        featured: false,
        content: `
      <p>Shopify 2.0 brings sections everywhere, improving customization capabilities without needing a developer for every change.</p>
    `
    },
    {
        slug: "social-media-algorithms",
        title: "Mastering Social Media Algorithms",
        excerpt: "How to create content that resonates with your audience and triggers viral growth on Instagram and TikTok.",
        category: "Marketing",
        author: "David Kim",
        date: "Sep 28, 2024",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
        featured: false,
        content: `
      <p>Engagement is the only metric that matters. Learn how to hook viewers in the first 3 seconds.</p>
    `
    }
];

export const caseStudies = [
    {
        slug: "neonbank-fintech",
        title: "NeonBank: Redefining the Digital Wallet",
        category: "FinTech",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
        stats: { roi: "145%", timeframe: "6 Months" },
        description: "A complete digital overhaul for a leading fintech startup, resulting in massive user acquisition.",
        content: {
            challenge: "High churn rate during onboarding.",
            solution: "Biometric auth and streamlined UI.",
            timeline: "6 Months"
        }
    },
    {
        slug: "luxefit-ecommerce", // Assuming this slug for the second item
        title: "LuxeFit: Scaling D2C Fashion",
        category: "E-commerce",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        stats: { roi: "300%", timeframe: "3 Months" },
        description: "Scaling a D2C fashion brand from 6 to 7 figures using headless Shopify architecture.",
        content: {
            challenge: "Slow site speed hurting conversions.",
            solution: "Headless Shopify with Vercel Edge Functions.",
            timeline: "3 Months"
        }
    },
    {
        slug: "techcore-saas",
        title: "TechCore: Enterprise SaaS Migration",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
        stats: { roi: "200%", timeframe: "12 Months" },
        description: "Migrating a legacy monolith to a microservices architecture for a Fortune 500 company.",
        content: {
            challenge: "Legacy bloat and security risks.",
            solution: "Microservices refactor.",
            timeline: "12 Months"
        }
    }
];
