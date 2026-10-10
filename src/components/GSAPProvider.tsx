"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPProviderProps {
  children: ReactNode;
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const createdTriggers: ScrollTrigger[] = [];

    /* ---- reveal-up animations ---- */
    const revealEls = document.querySelectorAll(".reveal-up");
    revealEls.forEach((el) => {
      const anim = gsap.fromTo(
        el,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
      if (anim.scrollTrigger) {
        createdTriggers.push(anim.scrollTrigger);
      }
    });

    /* ---- reveal-line animations ---- */
    const lineEls = document.querySelectorAll(".reveal-line");
    lineEls.forEach((el) => {
      const anim = gsap.fromTo(
        el,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
      if (anim.scrollTrigger) {
        createdTriggers.push(anim.scrollTrigger);
      }
    });

    return () => {
      // Only clean up locally created triggers, preserving Hero pin trigger
      createdTriggers.forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
