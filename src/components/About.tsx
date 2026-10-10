"use client";

export default function About() {
  return (
    <section id="about" className="relative bg-[#F4F1EA] py-32 md:py-44 lg:py-52">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Editorial headline */}
        <div className="mb-16 md:mb-24 reveal-up">
          <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
            THE PHILOSOPHY
          </p>
          <h2 className="heading-serif text-[#0B0B0A] text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.02]">
            EVERY STRUCTURE
            <br />
            BEGINS WITH AN IDEA.
          </h2>
        </div>

        {/* Divider */}
        <div className="reveal-line h-px bg-[#0B0B0A]/15 mb-16 md:mb-24" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 reveal-up items-start">
          <div className="md:col-span-4">
            <span className="label-sans text-[#0B0B0A]/40 text-[10px] tracking-[0.2em] block mb-3">
              ARCHITECTURAL MANDATE
            </span>
            <p className="heading-serif text-[#0B0B0A] text-2xl md:text-3xl font-light">
              Built with purpose. Engineered for legacy.
            </p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="body-sans text-[#0B0B0A]/85 text-base md:text-lg leading-relaxed font-light">
              Aryaa Builders is an architectural construction and real estate development firm
              deeply rooted in Jabalpur, Madhya Pradesh. We translate visionary concepts into
              structural landmarks across residential estates, bespoke custom homes, and commercial
              developments.
            </p>
            <p className="body-sans text-[#0B0B0A]/65 text-sm md:text-base leading-relaxed">
              Every project reflects a disciplined standard: uncompromising structural foundations,
              neoclassical aesthetic balance, and material craftsmanship executed without shortcuts.
              We do not merely erect buildings; we craft spaces where life unfolds with dignity and permanence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
