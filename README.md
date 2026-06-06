# Soft-Biz Site

A high-performance, animation-driven agency portfolio built with Next.js 15, React 19, and Three.js. Optimized for Core Web Vitals while delivering an immersive 3D experience.

**Live:** https://thesoftbiz.com

---

## What This Project Solves

This project addresses the need for a modern, performance-conscious agency website that doesn't compromise on visual impact. It combines:

- **Performance**: Full-stack optimization with Next.js App Router, Server Components, and lazy-loaded 3D assets
- **Immersion**: Interactive 3D particles, smooth scroll physics, and sophisticated animation sequences
- **Scalability**: Multi-page structure with dynamic service pages, blog, case studies, and team sections
- **Developer Experience**: TypeScript, modular component architecture, centralized design system via CSS variables

---

## Who It's For

- **Web Agencies**: Showcase development, design, and marketing capabilities with a credible technical implementation
- **Freelancers/Studios**: Demonstrate expertise in modern web technologies and attention to detail
- **Tech-Savvy Brands**: Those willing to invest in a performant, visually distinctive online presence

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | [Next.js 15](https://nextjs.org/) | App Router, Server Components, automatic code splitting |
| **Runtime** | React 19 | Latest hooks, concurrent rendering, automatic batching |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com/) + CSS Variables | Utility-first + centralized theme system |
| **3D Graphics** | [Three.js](https://threejs.org/) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | Particle systems, WebGL canvas management |
| **Animation** | [GSAP 3](https://gsap.com/) | Complex sequences, ScrollTrigger, text effects |
| **Scroll Physics** | [Lenis](https://lenis.studiofreight.com/) | Hardware-accelerated smooth scrolling |
| **UI Components** | [Radix UI](https://radix-ui.com/) + [Lucide Icons](https://lucide.dev/) | Accessible primitives, lightweight SVG icons |
| **Language** | TypeScript 5 | Type safety across the full stack |
| **Linting** | ESLint 9 | Code quality enforcement |
| **CSS Processing** | PostCSS + Autoprefixer | Browser compatibility |

---

## Key Features

### Performance & Loading
- **Dynamic Imports**: 3D components and heavy libraries loaded on-demand
- **React Server Components**: Static content pre-rendered at build time
- **Global Asset Loader**: Custom boot-up sequence with asset simulation
- **Optimized Images**: Next.js Image component with remote pattern allowlist (Unsplash)

### Animation & UX
- **3D Particle System**: WebGL-powered constellation effect in hero section (lazy-loaded)
- **Smooth Scroll**: Lenis physics engine for native app-like scrolling feel
- **Staggered Entrance**: GSAP-driven animations for mobile navigation overlay
- **Text Effects**: Typewriter animations with fallback handling for headline content

### Design System
- **Glassmorphism UI**: Translucent panels with backdrop blur, matching modern design trends
- **Dark Theme**: Deep indigo-black base (#050508) with electric indigo (#6366f1) and cyan (#06b6d4) accents
- **CSS Variables**: Centralized theming via `globals.css` for easy rebranding
- **Responsive Grid**: Mobile-first Tailwind breakpoints with responsive typography

### Content Architecture
- **Dynamic Service Pages**: SEO-optimized detail pages for each service offering
- **Multi-Section Landing**: Hero → Manifesto → Trust Bar → Services → Process → Stats → Testimonials → FAQ → CTA
- **Blog**: Content management structure for articles and resources
- **Case Studies**: Detailed project showcases with client context
- **Team & About**: Organizational and personnel pages
- **Legal Pages**: Privacy policy and terms of service templates

---

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with Lenis, GlobalLoader, transitions
│   ├── page.tsx                  # Home page (multi-section composition)
│   ├── globals.css               # CSS variables, Tailwind directives, utilities
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── services/[slug]/          # Dynamic service detail pages
│   ├── blog/                     # Blog listing and article routes
│   ├── case-studies/             # Case study detail pages
│   ├── about/                    # About page
│   ├── team/                     # Team showcase
│   ├── contact/                  # Contact form
│   ├── clients/                  # Client logos/testimonials
│   ├── work/                     # Portfolio gallery
│   ├── owners/                   # Team member profiles
│   ├── privacy/                  # Privacy policy
│   ├── terms/                    # Terms of service
│   └── not-found.tsx             # 404 fallback
│
├── components/
│   ├── home/                     # Homepage sections
│   │   ├── Hero.tsx              # 3D particles + headline typewriter
│   │   ├── Services.tsx          # Service grid/cards
│   │   ├── Manifesto.tsx         # Mission/vision statement
│   │   ├── TrustBar.tsx          # Client logos
│   │   ├── WhyUs.tsx             # Differentiators
│   │   ├── Process.tsx           # Work methodology timeline
│   │   ├── Stats.tsx             # KPIs (projects, clients, etc.)
│   │   ├── TestimonialWall.tsx   # Client testimonials
│   │   └── FAQ.tsx               # Frequently asked questions
│   │
│   ├── layout/
│   │   ├── Header.tsx            # Navigation + branding
│   │   ├── Footer.tsx            # Links, contact, social
│   │   └── GlobalLoader.tsx      # Boot-up sequence overlay
│   │
│   └── ui/                       # Reusable primitives
│       ├── Button.tsx            # Tailwind-styled button
│       ├── Card.tsx              # Glass panel wrapper
│       ├── TransitionOverlay.tsx # Page transition effect
│       └── ...
│
├── context/
│   └── TransitionContext.tsx     # Page transition state management
│
└── lib/
    └── lenis.tsx                 # Lenis smooth scroll wrapper
```

---

## Setup & Installation

### Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**: v9+ (or yarn/pnpm)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/theabdullahnadeem/Soft-Biz-Site.git
   cd Soft-Biz-Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
# API & External Services
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://api.your-service.com/submit
NEXT_PUBLIC_ANALYTICS_ID=your-google-analytics-id

# Theme (optional - can be managed in globals.css)
NEXT_PUBLIC_BRAND_NAME=SoftBiz
NEXT_PUBLIC_BASE_URL=https://thesoftbiz.com
```

**Note**: Environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

---

## Architectural Decisions

### 1. **Next.js App Router with Server Components**
- Reduces JavaScript sent to the browser for static content
- Layout nesting for shared components (Header, Footer) without prop drilling
- Built-in file-based routing eliminates configuration complexity

### 2. **Lazy Loading for 3D Assets**
```tsx
const Hero = dynamic(() => import('@/components/home/Hero'), {
  loading: () => <HeroSkeleton />,
  ssr: false // WebGL canvas doesn't render server-side
});
```
This pattern keeps initial page load fast while deferring expensive Three.js initialization.

### 3. **Lenis for Scroll Physics**
- Provides inertia-based smoothing without hijacking scroll (preserves accessibility)
- Wrapped at root layout level to affect entire application
- Compatible with GSAP ScrollTrigger for animation triggers

### 4. **GSAP for Orchestrated Animations**
- Centralized timeline management for complex sequences
- ScrollTrigger integration for parallax and reveal-on-scroll patterns
- TextPlugin for typewriter effects (fallback-safe)

### 5. **CSS Variables + Tailwind**
- Ensures easy rebranding without touching component code
- Supports dynamic theme switching (if needed in future)
- Variables for colors, shadows, and design tokens live in `globals.css`

### 6. **React Context for Page Transitions**
- Manages overlay state for full-page transitions between routes
- Prevents layout shift by persisting header/footer during transition
- State lives in Context, avoiding prop drilling through deep component trees

### 7. **Dynamic Routes with [slug] Parameters**
- `/services/[slug]` allows adding services without code changes
- Data can come from CMS, database, or static props (choose based on needs)
- Generates sitemap automatically via `sitemap.ts`

---

## Performance Considerations

### Core Web Vitals Optimization
- **LCP (Largest Contentful Paint)**: Hero image/text pre-rendered as Server Component
- **FID (First Input Delay)**: Minimal JavaScript on critical path; 3D canvas deferred
- **CLS (Cumulative Layout Shift)**: Fixed header height, reserved space for lazy components

### Asset Loading Strategy
```
Initial Load (Critical):
├── HTML (Server-rendered)
├── CSS (critical path inline)
└── Web Fonts (preload: Inter)

On Demand:
├── Three.js (loaded when Hero enters viewport)
├── GSAP plugins (loaded when animations trigger)
└── Analytics (loaded after interaction)
```

### Bundle Analysis
```bash
npm install --save-dev @next/bundle-analyzer
# See next.config.ts and configure to generate report
```

---

## Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel dashboard
# Auto-deploys on push to main branch
```

### Self-Hosted (Node.js)
```bash
npm run build
npm start
# Server runs on http://localhost:3000
```

### Environment Variables in Deployment
Set `NEXT_PUBLIC_*` and other variables in your deployment platform's environment config.

---

## Development Workflow

### Add a New Page
1. Create route folder: `src/app/new-route/page.tsx`
2. Export default component (will auto-route)
3. Add to Header navigation if needed
4. Update `sitemap.ts` if SEO-critical

### Add a New Service
1. Create service data (CMS, database, or static file)
2. Use dynamic route: `/services/[slug]`
3. Fetch data in `generateStaticParams` for static generation
4. Update service listings on homepage

### Customize Colors
Edit `src/app/globals.css`:
```css
:root {
  --background: #new-color;
  --primary: #new-color;
  /* ... */
}
```
No component changes needed—Tailwind picks up variables automatically.

### Add GSAP Animation
```tsx
import gsap from 'gsap';

useEffect(() => {
  gsap.to('.element', {
    duration: 1,
    opacity: 1,
    y: 0,
    ease: 'power2.out'
  });
}, []);
```

---

## Common Troubleshooting

| Issue | Solution |
|-------|----------|
| 3D canvas not rendering | Ensure Three.js is imported in client component, not SSR |
| Layout shift during page load | Add height constraints to lazy components or use skeletons |
| GSAP animations stuttering | Check if ScrollTrigger.refresh() is called after layout changes |
| Lenis scroll not smooth | Verify `ReactLenis root` wrapper is at layout level |
| TypeScript errors in components | Run `npm run lint` to catch missing types |

---

## Production Checklist

- [ ] Update `metadataBase` and canonical URLs in `layout.tsx`
- [ ] Configure contact form endpoint in environment variables
- [ ] Add Google Analytics/GTM via `NEXT_PUBLIC_ANALYTICS_ID`
- [ ] Update social media links in Footer
- [ ] Add company address/contact info in schema markup
- [ ] Test Core Web Vitals with PageSpeed Insights
- [ ] Set up 404 and error page branding
- [ ] Configure CDN for static assets
- [ ] Review SEO meta tags across key pages

---

## License

MIT License - See LICENSE file for details.

---

## Support & Contributing

For issues, feature requests, or contributions:
1. Open an issue on GitHub with clear reproduction steps
2. Fork the repo and submit a PR for improvements
3. Follow existing code style (TypeScript strict mode, ESLint config)

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber)
- [GSAP Docs](https://gsap.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lenis Documentation](https://lenis.studiofreight.com/)

---

**Built by:** Abdullah Nadeem  
**Contact:** contact@thesoftbiz.com  
**Last Updated:** June 2026
