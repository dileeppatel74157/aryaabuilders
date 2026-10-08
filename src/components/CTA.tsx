"use client";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-charcoal py-40 md:py-56 lg:py-64 overflow-hidden"
    >
      {/* Subtle radial gradient accent */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(184,162,124,0.15), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
        <div className="reveal-up">
          <h2 className="heading-serif text-white text-[clamp(2.5rem,7vw,6rem)] mb-12 md:mb-16">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            REMARKABLE.
          </h2>

          <a
            href="https://aryaabuiders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-light text-xs md:text-[11px]"
          >
            START A PROJECT
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-24 md:mt-32 reveal-up">
          <div className="w-12 h-px bg-white/20 mx-auto mb-8" />
          <address className="not-italic label-sans text-white/30 text-[9px] leading-relaxed">
            Ward 73, Star City · 306, Katangi Road · Phase 4, Karmeta
            <br />
            Jabalpur, Madhya Pradesh — 482002
          </address>
        </div>
      </div>
    </section>
  );
}
