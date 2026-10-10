"use client";

export default function Location() {
  return (
    <section id="location" className="relative bg-[#F4F1EA] py-32 md:py-44 lg:py-52">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column — Editorial Headline */}
          <div className="reveal-up">
            <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
              REGIONAL PRESENCE
            </p>
            <h2 className="heading-serif text-[#0B0B0A] text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.05] mb-6">
              ROOTED IN
              <br />
              JABALPUR.
            </h2>
            <h3 className="heading-serif text-[#0B0B0A]/40 text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.1]">
              BUILDING FOR
              <br />
              WHAT COMES NEXT.
            </h3>
            <p className="body-sans text-[#0B0B0A]/70 text-sm md:text-base mt-8 max-w-md leading-relaxed">
              Serving Jabalpur&apos;s most discerning homeowners and investors with local mastery,
              strict municipal compliance, and architectural vision that stands the test of time.
            </p>
          </div>

          {/* Right Column — Coordinates & Address */}
          <div className="reveal-up bg-white/70 border border-[#0B0B0A]/10 p-8 md:p-12 shadow-sm">
            <div className="space-y-8">
              <div>
                <p className="label-sans text-[#0B0B0A]/40 mb-2 text-[10px] tracking-[0.2em]">
                  HEADQUARTERS
                </p>
                <p className="heading-serif text-[#0B0B0A] text-2xl md:text-3xl">
                  Jabalpur, Madhya Pradesh
                </p>
              </div>

              <div className="h-px bg-[#0B0B0A]/10" />

              <div>
                <p className="label-sans text-[#0B0B0A]/40 mb-2 text-[10px] tracking-[0.2em]">
                  REGISTERED ADDRESS
                </p>
                <address className="body-sans text-[#0B0B0A]/85 text-sm md:text-base not-italic leading-relaxed">
                  Ward 73, Star City
                  <br />
                  306, Katangi Rd, Phase 4, Karmeta
                  <br />
                  Jabalpur, Madhya Pradesh 482002
                </address>
              </div>

              <div className="h-px bg-[#0B0B0A]/10" />

              <div>
                <p className="label-sans text-[#0B0B0A]/40 mb-2 text-[10px] tracking-[0.2em]">
                  DIGITAL LOCATION (PLUS CODE)
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[#0B0B0A] bg-[#B8A27C]/15 px-3 py-1.5 border border-[#B8A27C]/30 font-medium">
                    6V8V+5X Jabalpur, Madhya Pradesh
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=6V8V%2B5X+Jabalpur,+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="label-sans text-[#B8A27C] hover:text-[#0B0B0A] transition-colors text-[10px] tracking-[0.15em]"
                  >
                    VIEW ON MAP ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
