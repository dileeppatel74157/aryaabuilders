"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  { number: "01", title: "FOUNDATION", description: "Where every great structure begins. The groundwork for something enduring." },
  { number: "02", title: "STRUCTURE", description: "The framework rises. Strength and integrity in every beam and column." },
  { number: "03", title: "FORM", description: "Shape emerges from structure. Architecture taking its intended form." },
  { number: "04", title: "FINISH", description: "Surfaces, textures, and details that bring warmth and character." },
  { number: "05", title: "HOME", description: "The final transformation. A space that is built to be lived in and loved." },
];

export default function ConstructionStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    phaseRefs.current.forEach((phase) => {
      if (!phase) return;
      gsap.fromTo(
        phase,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: phase,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-offwhite py-32 md:py-44 lg:py-56 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 md:mb-32 reveal-up">
          <p className="label-sans text-bronze mb-6 md:mb-8">
            CONSTRUCTION STORY
          </p>
          <h2 className="heading-serif text-charcoal text-[clamp(2rem,4.5vw,4rem)]">
            FROM GROUND
            <br />
            TO HOME.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-charcoal-20" />

          <div className="space-y-16 md:space-y-24">
            {PHASES.map((phase, i) => (
              <div
                key={phase.number}
                ref={(el) => { phaseRefs.current[i] = el; }}
                className="relative pl-16 md:pl-24"
              >
                {/* Dot on timeline */}
                <div className="absolute left-[11px] md:left-[27px] top-2 w-2.5 h-2.5 rounded-full bg-bronze" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
                  <div>
                    <span className="label-sans text-bronze text-[10px] block mb-3">
                      {phase.number}
                    </span>
                    <h3 className="heading-serif text-charcoal text-[clamp(1.6rem,2.5vw,2.5rem)]">
                      {phase.title}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <p className="body-sans text-charcoal-60 text-sm">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
