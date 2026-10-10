"use client";

export default function Craftsmanship() {
  return (
    <section className="relative bg-[#0B0B0A] py-36 md:py-52 lg:py-60 overflow-hidden text-center text-white border-t border-white/10">
      {/* Subtle architectural grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="reveal-up">
          <p className="label-sans text-[#B8A27C] mb-8 md:mb-12 tracking-[0.25em]">
            CRAFTSMANSHIP &amp; PHILOSOPHY
          </p>

          <h2 className="heading-serif text-white text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.08] mb-4">
            GOOD ARCHITECTURE
            <br />
            ISN&apos;T ONLY SEEN.
          </h2>

          <h2 className="heading-serif text-[#B8A27C] text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.08]">
            IT IS FELT.
          </h2>
        </div>

        <div className="mt-16 md:mt-24 reveal-up">
          <div className="w-16 h-px bg-[#B8A27C] mx-auto mb-8" />
          <p className="body-sans text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            True quality in construction is visceral. It is found in the solidity of a
            load-bearing column, the plumb accuracy of a corner, the acoustic peace of a
            reinforced wall, and the enduring grace of materials aged with dignity.
          </p>
        </div>
      </div>
    </section>
  );
}
