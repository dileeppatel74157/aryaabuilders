"use client";

export default function Craftsmanship() {
  return (
    <section className="relative bg-charcoal py-40 md:py-56 lg:py-64 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 120px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 lg:px-24 text-center">
        <div className="reveal-up">
          <p className="label-sans text-bronze mb-10 md:mb-14">CRAFTSMANSHIP</p>

          <h2 className="heading-serif text-white text-[clamp(2.2rem,6vw,5.5rem)] mb-6">
            GOOD ARCHITECTURE
            <br />
            ISN&apos;T ONLY SEEN.
          </h2>

          <h2 className="heading-serif text-bronze text-[clamp(2.2rem,6vw,5.5rem)]">
            IT IS FELT.
          </h2>
        </div>

        <div className="mt-16 md:mt-24 reveal-up">
          <div className="w-16 h-px bg-bronze mx-auto mb-8" />
          <p className="body-sans text-white/40 max-w-lg mx-auto text-sm">
            We believe that the quality of construction is experienced, not just
            observed. It is in the solidity of a wall, the precision of a
            corner, the silence of a well-built room.
          </p>
        </div>
      </div>
    </section>
  );
}
