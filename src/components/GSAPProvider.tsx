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
    /* ---- reveal-up animations ---- */
    const revealEls = document.querySelectorAll(".reveal-up");
    revealEls.forEach((el) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    /* ---- reveal-fade animations ---- */
    const fadeEls = document.querySelectorAll(".reveal-fade");
    fadeEls.forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    /* ---- reveal-line animations ---- */
    const lineEls = document.querySelectorAll(".reveal-line");
    lineEls.forEach((el) => {
      gsap.to(el, {
        width: "100%",
        duration: 1.4,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
