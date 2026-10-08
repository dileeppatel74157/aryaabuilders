"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "VISION",
    description:
      "Understanding your aspirations and translating them into a clear architectural direction. Every great structure starts with a conversation.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Thoughtful planning where form meets function. We create designs that are practical, beautiful, and uniquely yours.",
  },
  {
    number: "03",
    title: "CRAFT",
    description:
      "Precision construction with quality materials and skilled craftsmanship. Every detail matters — from the foundation to the finishing touches.",
  },
  {
    number: "04",
    title: "DELIVERY",
    description:
      "The moment your vision becomes reality. A completed space that exceeds expectations and stands the test of time.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    stepsRef.current.forEach((step, i) => {
      if (!step) return;

      ScrollTrigger.create({
        trigger: step,
        start: "top 65%",
        end: "bottom 35%",
        onEnter: () => activateStep(i),
        onEnterBack: () => activateStep(i),
        onLeave: () => {
          if (i < STEPS.length - 1) deactivateStep(i);
        },
        onLeaveBack: () => {
          if (i > 0) deactivateStep(i);
        },
      });
    });

    function activateStep(index: number) {
      stepsRef.current.forEach((s, j) => {
        if (!s) return;
        if (j === index) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    }

    function deactivateStep(index: number) {
      const step = stepsRef.current[index];
      if (step) step.classList.remove("active");
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-charcoal py-32 md:py-44 lg:py-56"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section header */}
        <div className="mb-20 md:mb-32 reveal-up">
          <p className="label-sans text-bronze mb-6 md:mb-8">THE APPROACH</p>
          <h2 className="heading-serif text-white text-[clamp(2rem,4.5vw,4rem)]">
            OUR PROCESS IS
            <br />
            OUR PROMISE.
          </h2>
        </div>

        {/* Process steps */}
        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className="process-step border-t border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start transition-opacity duration-600"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <span className="label-sans text-bronze text-[10px]">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3 className="heading-serif text-white text-[clamp(1.8rem,3vw,3rem)]">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6">
                <p className="body-sans text-white/50 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
