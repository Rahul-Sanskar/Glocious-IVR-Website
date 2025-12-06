import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Standardized animation settings for consistency and performance
export const ANIMATION_CONFIG = {
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
    viewportTrigger: "top 95%", // Triggers almost immediately when element enters viewport
};

export const animateReveal = (elements: gsap.TweenTarget, delay: number = 0) => {
    return gsap.fromTo(elements,
        {
            y: 30,
            opacity: 0,
            autoAlpha: 0 // Ensures visibility: hidden before animation starts
        },
        {
            y: 0,
            opacity: 1,
            autoAlpha: 1,
            duration: ANIMATION_CONFIG.duration,
            ease: ANIMATION_CONFIG.ease,
            stagger: ANIMATION_CONFIG.stagger,
            delay: delay,
            scrollTrigger: {
                trigger: elements as Element, // simplified trigger logic
                start: ANIMATION_CONFIG.viewportTrigger,
                toggleActions: "play none none reverse",
            },
            clearProps: "opacity,visibility,transform" // clean up after animation to avoid z-index/stacking context issues
        }
    );
};
