"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---- Construction story stages ---- */
const STAGES = [
  {
    id: "intro",
    sub: "ARYAA BUILDERS",
    heading: ["BUILDING", "WHAT YOU", "ENVISION."],
    start: 0,
    peakStart: 0,
    peakEnd: 0.04,
    end: 0.09,
    initialVisible: true,
  },
  {
    id: "foundation",
    sub: "01 — FOUNDATION",
    heading: ["THE FOUNDATION", "OF SOMETHING", "EXTRAORDINARY."],
    start: 0.12,
    peakStart: 0.18,
    peakEnd: 0.24,
    end: 0.29,
    initialVisible: false,
  },
  {
    id: "craft",
    sub: "02 — STRUCTURE",
    heading: ["CRAFTED", "WITH", "PRECISION."],
    start: 0.32,
    peakStart: 0.38,
    peakEnd: 0.44,
    end: 0.49,
    initialVisible: false,
  },
  {
    id: "form",
    sub: "03 — FORM",
    heading: ["FORM", "MEETS", "FUNCTION."],
    start: 0.52,
    peakStart: 0.58,
    peakEnd: 0.64,
    end: 0.69,
    initialVisible: false,
  },
  {
    id: "built",
    sub: "04 — EXTERIOR",
    heading: ["BUILT", "TO", "LAST."],
    start: 0.72,
    peakStart: 0.77,
    peakEnd: 0.83,
    end: 0.87,
    initialVisible: false,
  },
  {
    id: "final",
    sub: "ARYAA BUILDERS",
    heading: ["WHERE VISION", "BECOMES", "HOME."],
    start: 0.9,
    peakStart: 0.94,
    peakEnd: 1.0,
    end: 1.0,
    initialVisible: false,
    isFinal: true,
  },
];

export default function HeroConstruction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const targetTimeRef = useRef(0);
  const currentTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  /* ---- Smooth video seeking via rAF interpolation ---- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      if (!video) return;
      const duration = video.duration || 1;
      const clampedTarget = Math.max(0, Math.min(targetTimeRef.current, duration));
      const diff = Math.abs(clampedTarget - currentTimeRef.current);

      if (diff > 0.005) {
        currentTimeRef.current = lerp(
          currentTimeRef.current,
          clampedTarget,
          0.12
        );
        try {
          video.currentTime = currentTimeRef.current;
        } catch {
          // ignore seek errors during load
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  /* ---- ScrollTrigger: map scroll → video time ---- */
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!video || !section || !container) return;

    const initScrollTrigger = () => {
      video.pause();
      setVideoReady(true);
      const duration = video.duration || 10;

      /* Master scroll trigger: pins video and scrubs timeline */
      const masterTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: container,
        scrub: 0.3,
        onUpdate: (self) => {
          targetTimeRef.current = self.progress * duration;
        },
      });

      /* Staged text animations */
      STAGES.forEach((stage, i) => {
        const el = document.getElementById(`story-stage-${i}`);
        if (!el) return;

        if (stage.initialVisible) {
          // Stage 0: starts fully visible, fades out
          gsap.set(el, { opacity: 1, y: 0, filter: "blur(0px)" });
          gsap.to(el, {
            opacity: 0,
            y: -30,
            filter: "blur(8px)",
            ease: "power2.in",
            scrollTrigger: {
              trigger: section,
              start: `${stage.peakEnd * 100}% top`,
              end: `${stage.end * 100}% top`,
              scrub: true,
            },
          });
        } else if (stage.isFinal) {
          // Final stage: fades in and stays visible
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, filter: "blur(10px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: `${stage.start * 100}% top`,
                end: `${stage.peakStart * 100}% top`,
                scrub: true,
              },
            }
          );
        } else {
          // Middle stages: fade in, hold, fade out
          gsap.fromTo(
            el,
            { opacity: 0, y: 40, filter: "blur(8px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: `${stage.start * 100}% top`,
                end: `${stage.peakStart * 100}% top`,
                scrub: true,
              },
            }
          );

          gsap.to(el, {
            opacity: 0,
            y: -30,
            filter: "blur(8px)",
            ease: "power2.in",
            scrollTrigger: {
              trigger: section,
              start: `${stage.peakEnd * 100}% top`,
              end: `${stage.end * 100}% top`,
              scrub: true,
            },
          });
        }
      });

      /* Scroll indicator: fades out early */
      const scrollInd = document.getElementById("scroll-indicator");
      if (scrollInd) {
        gsap.to(scrollInd, {
          opacity: 0,
          y: -20,
          scrollTrigger: {
            trigger: section,
            start: "1.5% top",
            end: "4% top",
            scrub: true,
          },
        });
      }

      /* Hero CTA at completion */
      const ctaEl = document.getElementById("hero-cta");
      if (ctaEl) {
        gsap.fromTo(
          ctaEl,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "91% top",
              end: "96% top",
              scrub: true,
            },
          }
        );
      }

      return () => {
        masterTrigger.kill();
      };
    };

    if (video.readyState >= 1) {
      initScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", initScrollTrigger, { once: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full"
      style={{ height: "650vh" }}
      aria-label="Construction progress story"
    >
      {/* Pinned video container */}
      <div ref={containerRef} className="hero-video-container">
        <video
          ref={videoRef}
          className={`hero-video transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          src="/video/construction.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Cinematic dark overlay */}
        <div className="hero-overlay" />

        {/* Text layer */}
        <div className="hero-text-layer">
          {/* Top header details */}
          <div className="absolute top-0 left-0 w-full pt-24 md:pt-28 px-6 md:px-16 lg:px-24 flex justify-between items-center">
            <span className="label-sans text-white/50 tracking-[0.2em] text-[9px] md:text-[10px]">
              REAL ESTATE • CONSTRUCTION • DEVELOPMENT
            </span>
            <span className="label-sans text-white/40 tracking-[0.2em] text-[9px] md:text-[10px] hidden sm:inline-block">
              JABALPUR, MP
            </span>
          </div>

          {/* Staged story texts */}
          {STAGES.map((stage, i) => (
            <div
              key={stage.id}
              id={`story-stage-${i}`}
              className="story-text w-full max-w-5xl px-6"
              style={{ opacity: stage.initialVisible ? 1 : 0 }}
            >
              {stage.sub && (
                <p className="label-sans text-[#B8A27C] mb-4 md:mb-6 text-[10px] md:text-[11px] tracking-[0.25em]">
                  {stage.sub}
                </p>
              )}
              {stage.heading.map((line, j) => (
                <h1
                  key={j}
                  className="heading-serif text-white text-[clamp(2.4rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.02em]"
                >
                  {line}
                </h1>
              ))}
            </div>
          ))}

          {/* Final CTA button (reveals at ~93%) */}
          <div
            id="hero-cta"
            className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 opacity-0 z-20 pointer-events-auto"
          >
            <a
              href="#about"
              className="cta-button cta-button-light text-[10px] md:text-[11px] tracking-[0.2em]"
              aria-label="Explore our work"
            >
              EXPLORE OUR WORK
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Bottom left location label */}
          <div className="absolute bottom-10 left-6 md:left-16 lg:left-24 hidden md:block">
            <p className="label-sans text-white/40 text-[9px] tracking-[0.2em]">
              JABALPUR, MADHYA PRADESH
            </p>
          </div>

          {/* Bottom center scroll indicator */}
          <div
            id="scroll-indicator"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 transition-opacity"
          >
            <p className="label-sans text-white/60 text-[9px] tracking-[0.25em]">
              SCROLL TO BUILD ↓
            </p>
            <div className="w-px h-8 bg-white/20 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full h-full bg-[#B8A27C]"
                style={{
                  animation: "scrollPulse 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
