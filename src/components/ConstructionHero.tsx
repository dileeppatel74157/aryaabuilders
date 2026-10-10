"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_PATH = (index: number) =>
  `/images/construction-frames/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

interface Stage {
  id: string;
  tag: string;
  title: string[];
  subtitle?: string;
  start: number;
  peakStart: number;
  peakEnd: number;
  end: number;
  isInitial?: boolean;
  isFinal?: boolean;
}

const STAGES: Stage[] = [
  {
    id: "intro",
    tag: "ARYAA BUILDERS",
    title: ["BUILDING", "WHAT YOU", "ENVISION."],
    subtitle: "REAL ESTATE • CONSTRUCTION • DEVELOPMENT",
    start: 0,
    peakStart: 0,
    peakEnd: 0.05,
    end: 0.09,
    isInitial: true,
  },
  {
    id: "foundation",
    tag: "01 / FOUNDATION",
    title: ["THE FOUNDATION", "OF SOMETHING", "EXTRAORDINARY."],
    subtitle: "Meticulous ground excavation and engineering precision.",
    start: 0.13,
    peakStart: 0.18,
    peakEnd: 0.24,
    end: 0.29,
  },
  {
    id: "structure",
    tag: "02 / STRUCTURE",
    title: ["CRAFTED", "WITH", "PRECISION."],
    subtitle: "Reinforced concrete columns and multi-tier structural framing.",
    start: 0.33,
    peakStart: 0.38,
    peakEnd: 0.44,
    end: 0.49,
  },
  {
    id: "form",
    tag: "03 / FORM",
    title: ["FORM", "MEETS", "FUNCTION."],
    subtitle: "Architectural grandeur realized in timeless classical proportion.",
    start: 0.53,
    peakStart: 0.58,
    peakEnd: 0.64,
    end: 0.69,
  },
  {
    id: "exterior",
    tag: "04 / EXTERIOR",
    title: ["BUILT", "TO", "LAST."],
    subtitle: "Refined stonework, ornamental balconies, and stately entrances.",
    start: 0.73,
    peakStart: 0.78,
    peakEnd: 0.84,
    end: 0.88,
  },
  {
    id: "home",
    tag: "05 / HOME",
    title: ["WHERE VISION", "BECOMES", "HOME."],
    subtitle: "A finished estate masterpiece, illuminated and built to endure.",
    start: 0.91,
    peakStart: 0.94,
    peakEnd: 1.0,
    end: 1.0,
    isFinal: true,
  },
];

export default function ConstructionHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  // Animation & Rendering state stored strictly in refs to avoid React re-renders on scroll
  const imagesCache = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingSet = useRef<Set<number>>(new Set());
  const lastDrawnFrameRef = useRef<number>(-1);
  const targetFrameRef = useRef<number>(0);
  const isRafScheduledRef = useRef<boolean>(false);
  const currentProgressRef = useRef<number>(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Frame loading helper
  const loadFrame = (index: number, priority = false): Promise<HTMLImageElement | null> => {
    if (index < 0 || index >= TOTAL_FRAMES) return Promise.resolve(null);
    if (imagesCache.current.has(index)) {
      return Promise.resolve(imagesCache.current.get(index)!);
    }
    if (loadingSet.current.has(index)) {
      return Promise.resolve(null);
    }

    loadingSet.current.add(index);
    return new Promise((resolve) => {
      const img = new Image();
      img.decoding = "async";
      img.src = FRAME_PATH(index);

      img.onload = () => {
        loadingSet.current.delete(index);
        imagesCache.current.set(index, img);
        if (index === 0) setFirstFrameLoaded(true);

        // If this image was the requested target frame, schedule a repaint
        if (targetFrameRef.current === index) {
          scheduleDraw();
        }
        resolve(img);
      };

      img.onerror = () => {
        loadingSet.current.delete(index);
        resolve(null);
      };
    });
  };

  // Find the closest loaded frame to prevent blank flashes
  const getClosestLoadedFrame = (target: number): HTMLImageElement | null => {
    if (imagesCache.current.has(target)) {
      return imagesCache.current.get(target)!;
    }

    // Check last drawn frame first for visual continuity
    if (
      lastDrawnFrameRef.current >= 0 &&
      imagesCache.current.has(lastDrawnFrameRef.current)
    ) {
      return imagesCache.current.get(lastDrawnFrameRef.current)!;
    }

    // Search outwards from target
    let bestDist = Infinity;
    let bestImg: HTMLImageElement | null = null;
    imagesCache.current.forEach((img, idx) => {
      const dist = Math.abs(idx - target);
      if (dist < bestDist) {
        bestDist = dist;
        bestImg = img;
      }
    });

    return bestImg;
  };

  // Draw the current frame onto the high-DPR canvas with aspect-ratio cover
  const drawCanvas = () => {
    isRafScheduledRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const targetIndex = targetFrameRef.current;
    const img = getClosestLoadedFrame(targetIndex);
    if (!img) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = w / h;

    let drawW = w;
    let drawH = h;
    let drawX = 0;
    let drawY = 0;

    if (canvasRatio > imgRatio) {
      drawW = w;
      drawH = w / imgRatio;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgRatio;
      drawY = 0;
      drawX = (w - drawW) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    lastDrawnFrameRef.current = targetIndex;
  };

  const scheduleDraw = () => {
    if (!isRafScheduledRef.current) {
      isRafScheduledRef.current = true;
      requestAnimationFrame(drawCanvas);
    }
  };

  // Update text stages directly in the DOM using progress without React setState
  const updateStageText = (progress: number) => {
    currentProgressRef.current = progress;

    // Scroll indicator opacity
    if (scrollIndicatorRef.current) {
      const indOpacity = Math.max(0, 1 - progress / 0.05);
      scrollIndicatorRef.current.style.opacity = indOpacity.toFixed(3);
      scrollIndicatorRef.current.style.pointerEvents = indOpacity > 0.05 ? "auto" : "none";
    }

    // Final Hero CTA
    if (heroCtaRef.current) {
      const ctaProgress = Math.max(0, Math.min(1, (progress - 0.92) / 0.05));
      heroCtaRef.current.style.opacity = ctaProgress.toFixed(3);
      heroCtaRef.current.style.transform = `translate3d(-50%, ${(1 - ctaProgress) * 20}px, 0)`;
      heroCtaRef.current.style.pointerEvents = ctaProgress > 0.5 ? "auto" : "none";
    }

    // Update each stage headline
    STAGES.forEach((stage, i) => {
      const el = stageRefs.current[i];
      if (!el) return;

      let opacity = 0;
      let y = 30;

      if (stage.isInitial) {
        if (progress <= stage.peakEnd) {
          opacity = 1;
          y = 0;
        } else if (progress <= stage.end) {
          const t = (progress - stage.peakEnd) / (stage.end - stage.peakEnd);
          opacity = 1 - t;
          y = -25 * t;
        } else {
          opacity = 0;
          y = -25;
        }
      } else if (stage.isFinal) {
        if (progress < stage.start) {
          opacity = 0;
          y = 30;
        } else if (progress < stage.peakStart) {
          const t = (progress - stage.start) / (stage.peakStart - stage.start);
          opacity = t;
          y = 30 * (1 - t);
        } else {
          opacity = 1;
          y = 0;
        }
      } else {
        if (progress < stage.start) {
          opacity = 0;
          y = 30;
        } else if (progress < stage.peakStart) {
          const t = (progress - stage.start) / (stage.peakStart - stage.start);
          opacity = t;
          y = 30 * (1 - t);
        } else if (progress <= stage.peakEnd) {
          opacity = 1;
          y = 0;
        } else if (progress <= stage.end) {
          const t = (progress - stage.peakEnd) / (stage.end - stage.peakEnd);
          opacity = 1 - t;
          y = -25 * t;
        } else {
          opacity = 0;
          y = -25;
        }
      }

      el.style.opacity = opacity.toFixed(3);
      el.style.transform = `translate3d(-50%, calc(-50% + ${y.toFixed(1)}px), 0)`;
      el.style.pointerEvents = opacity > 0.6 ? "auto" : "none";
    });
  };

  // Priority buffer loader around current target frame
  const requestBufferFrames = (centerIndex: number) => {
    // Preload immediate neighbors first
    const forwardWindow = 12;
    const backwardWindow = 4;

    for (let i = 1; i <= forwardWindow; i++) {
      const idx = centerIndex + i;
      if (idx < TOTAL_FRAMES && !imagesCache.current.has(idx)) {
        loadFrame(idx);
      }
    }

    for (let i = 1; i <= backwardWindow; i++) {
      const idx = centerIndex - i;
      if (idx >= 0 && !imagesCache.current.has(idx)) {
        loadFrame(idx);
      }
    }
  };

  // Initial preload batch
  useEffect(() => {
    // 1. Immediately load frame 0
    loadFrame(0, true).then(() => {
      scheduleDraw();
    });

    // 2. Preload first 20 frames for instant scroll responsiveness
    for (let i = 1; i < 20; i++) {
      loadFrame(i);
    }

    // 3. Preload milestone stage frames in background
    [59, 119, 179, 239].forEach((idx) => {
      loadFrame(idx);
    });

    // Handle window resize
    const handleResize = () => {
      scheduleDraw();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Setup GSAP ScrollTrigger for pinning and progress scrubbing
  useEffect(() => {
    if (reducedMotion) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: container,
      scrub: 0.1, // Highly responsive scrub
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));
        const frameIndex = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
        );

        targetFrameRef.current = frameIndex;
        loadFrame(frameIndex);
        requestBufferFrames(frameIndex);
        scheduleDraw();
        updateStageText(progress);
      },
    });

    // Initial stage layout setup
    updateStageText(0);

    return () => {
      trigger.kill();
    };
  }, [reducedMotion]);

  // Reduced motion alternative: static final frame or clean showcase
  if (reducedMotion) {
    return (
      <section
        id="work"
        className="relative w-full min-h-screen bg-charcoal flex items-center justify-center overflow-hidden py-32"
        aria-label="Aryaa Builders — Architectural Showcase"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={FRAME_PATH(239)}
            alt="Completed Aryaa Builders Architectural Estate"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="label-sans text-[#B8A27C] mb-6 tracking-[0.25em]">
            ARYAA BUILDERS • JABALPUR, MP
          </p>
          <h1 className="heading-serif text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] mb-8">
            BUILDING WHAT YOU ENVISION.
          </h1>
          <p className="body-sans text-white/70 max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Where vision becomes home. Premium residential construction, custom homes,
            commercial development, and luxury architecture in Jabalpur, Madhya Pradesh.
          </p>
          <a
            href="#contact"
            className="cta-button cta-button-light text-[11px] tracking-[0.2em]"
          >
            START A PROJECT
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full"
      style={{ height: "480vh" }}
      aria-label="Interactive construction animation"
    >
      {/* Pinned Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-charcoal"
      >
        {/* Instant Fallback Poster Image */}
        <img
          src={FRAME_PATH(0)}
          alt="Initial site ground"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none z-0 ${
            firstFrameLoaded ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        />

        {/* High-Performance Canvas Surface */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-10 will-change-transform"
          aria-label="Scroll controlled architectural construction sequence from ground breaking to completed estate"
        />

        {/* Subtle Luxury Gradient Overlay for Legibility */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,11,10,0.55) 0%, rgba(11,11,10,0.12) 35%, rgba(11,11,10,0.18) 65%, rgba(11,11,10,0.65) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Narrative Overlay Layer */}
        <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between">
          {/* Top Brand Bar */}
          <div className="w-full pt-24 md:pt-28 px-6 md:px-16 lg:px-24 flex justify-between items-center pointer-events-auto">
            <span className="label-sans text-white/60 tracking-[0.22em] text-[9px] md:text-[10px]">
              REAL ESTATE • CONSTRUCTION • DEVELOPMENT
            </span>
            <span className="label-sans text-white/50 tracking-[0.22em] text-[9px] md:text-[10px] hidden sm:inline-block">
              JABALPUR, MADHYA PRADESH
            </span>
          </div>

          {/* Centered Story Stages (Direct DOM Manipulation, No State Re-renders) */}
          <div className="relative w-full h-full">
            {STAGES.map((stage, i) => (
              <div
                key={stage.id}
                ref={(el) => {
                  stageRefs.current[i] = el;
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-5xl px-6 transition-none"
                style={{
                  opacity: stage.isInitial ? 1 : 0,
                  transform: "translate3d(-50%, -50%, 0)",
                  pointerEvents: stage.isInitial ? "auto" : "none",
                }}
              >
                {stage.tag && (
                  <p className="label-sans text-[#B8A27C] mb-4 md:mb-6 text-[10px] md:text-[11px] tracking-[0.25em]">
                    {stage.tag}
                  </p>
                )}
                {stage.title.map((line, j) => (
                  <h1
                    key={j}
                    className="heading-serif text-white text-[clamp(2.4rem,6.8vw,6.5rem)] leading-[0.98] tracking-[-0.02em]"
                  >
                    {line}
                  </h1>
                ))}
                {stage.subtitle && (
                  <p className="body-sans text-white/60 text-xs md:text-sm max-w-lg mx-auto mt-5 tracking-wide">
                    {stage.subtitle}
                  </p>
                )}
              </div>
            ))}

            {/* Final Completion CTA Button (reveals at ~93%) */}
            <div
              ref={heroCtaRef}
              className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 opacity-0 z-40 pointer-events-none transition-none"
            >
              <a
                href="#about"
                className="cta-button cta-button-light text-[10px] md:text-[11px] tracking-[0.2em] shadow-xl"
                aria-label="Explore our work and philosophy"
              >
                EXPLORE OUR WORK
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Bottom Bar: Location & Scroll Prompt */}
          <div className="w-full pb-8 md:pb-10 px-6 md:px-16 lg:px-24 flex justify-between items-end pointer-events-auto">
            <div className="hidden md:block">
              <p className="label-sans text-white/50 text-[9px] tracking-[0.2em]">
                JABALPUR, MADHYA PRADESH
              </p>
            </div>

            <div
              ref={scrollIndicatorRef}
              className="flex flex-col items-center gap-2.5 mx-auto md:mx-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-8 transition-none"
            >
              <p className="label-sans text-white/70 text-[9px] tracking-[0.25em]">
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

            <div className="hidden md:block">
              <span className="label-sans text-[#B8A27C] text-[9px] tracking-[0.2em]">
                EST. JABALPUR
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
