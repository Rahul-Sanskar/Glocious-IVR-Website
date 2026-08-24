# Glocious IVR Component Mapping

## Component Hierarchy
1. Header
   - Target: `src/components/layout/Header.tsx`
   - Modifications: Add IVR navigation items, update CTA to "Request IVR Demo"
2. Hero
   - Target: `src/components/home/Hero.tsx`
   - Modifications: IVR-focused copy, reposition enquiry form, adjust 3D background
3. Trust Bar
   - Target: `src/components/home/TrustBar.tsx`
   - Modifications: Replace tech logos with Glocious stats
4. What Is IVR?
   - Target: New component (extend `Manifesto.tsx` or create `IVRExplanation.tsx`)
   - Modifications: Add call-flow visualization
5. How Glocious IVR Works
   - Target: `src/components/home/Process.tsx`
   - Modifications: Map IVR workflow steps
6. IVR Features
   - Target: `src/components/home/Services.tsx`
   - Modifications: Replace service cards with IVR features
7. Business Benefits
   - Target: `src/components/home/Stats.tsx`
   - Modifications: Update benefit metrics
8. Industries
   - Target: New component (add to `WhyUs.tsx` or create `Industries.tsx`)
9. Why Glocious
   - Target: `src/components/home/WhyUs.tsx`
   - Modifications: Update with factual Glocious data
10. Testimonials
   - Target: `src/components/home/TestimonialWall.tsx`
   - Modifications: Replace with real Glocious testimonials
11. FAQ
   - Target: `src/components/home/FAQ.tsx`
   - Modifications: Update with IVR-specific questions
12. Final CTA
   - Target: New section (add to `Hero` or create `FinalCTA.tsx`)
13. Footer
   - Target: `src/components/layout/Footer.tsx`
   - Modifications: Update service links to IVR-focused URLs

## Re-Use Strategy
- Preserve: `ThreeBackground.tsx`, `TrustBar.tsx`, `TestimonialWall.tsx`, `Process.tsx`, `Stats.tsx`, `Header.tsx`, `GSAP` utilities
- Modify: Header, Hero, Services, Process, Stats, WhyUs, FAQ, Footer
- Create: Small blocks for "What Is IVR?", "How Glocious IVR Works", "IVR Features", "Industries", Final CTA