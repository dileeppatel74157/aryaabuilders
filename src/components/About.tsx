"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-offwhite py-32 md:py-44 lg:py-56"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Editorial headline */}
        <div className="mb-16 md:mb-24 reveal-up">
          <p className="label-sans text-bronze mb-6 md:mb-8">ABOUT</p>
          <h2 className="heading-serif text-charcoal text-[clamp(2.2rem,5.5vw,5rem)]">
            EVERY STRUCTURE
            <br />
            BEGINS WITH
            <br />
            AN IDEA.
          </h2>
        </div>

        {/* Divider */}
        <div className="reveal-line h-px bg-charcoal-20 mb-16 md:mb-24" />

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 reveal-up">
          <div>
            <p className="label-sans text-charcoal-40 mb-4">WHO WE ARE</p>
          </div>
          <div>
            <p className="body-sans text-charcoal-80 mb-6">
              Aryaa Builders is a real estate and construction company rooted in
              Jabalpur, Madhya Pradesh. We bring vision to life through
              residential construction, commercial development, custom homes,
              and real estate development.
            </p>
            <p className="body-sans text-charcoal-60">
              Every project we undertake reflects our commitment to precision,
              quality craftsmanship, and thoughtful design — creating spaces
              that are built to last and made to feel like home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
