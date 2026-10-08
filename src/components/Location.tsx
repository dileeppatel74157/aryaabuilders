"use client";

export default function Location() {
  return (
    <section className="relative bg-offwhite py-32 md:py-44 lg:py-56">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left — Headline */}
          <div className="reveal-up">
            <p className="label-sans text-bronze mb-6 md:mb-8">LOCATION</p>
            <h2 className="heading-serif text-charcoal text-[clamp(2.2rem,5vw,4.5rem)] mb-8">
              ROOTED IN
              <br />
              JABALPUR.
            </h2>
            <h3 className="heading-serif text-charcoal-40 text-[clamp(1.4rem,3vw,2.5rem)]">
              BUILDING FOR
              <br />
              WHAT COMES NEXT.
            </h3>
          </div>

          {/* Right — Details */}
          <div className="reveal-up flex flex-col justify-end">
            <div className="space-y-10">
              <div>
                <p className="label-sans text-charcoal-40 mb-3 text-[10px]">
                  CITY
                </p>
                <p className="heading-serif text-charcoal text-2xl md:text-3xl">
                  Jabalpur
                </p>
                <p className="body-sans text-charcoal-60 text-sm mt-1">
                  Madhya Pradesh
                </p>
              </div>

              <div className="h-px bg-charcoal-20" />

              <div>
                <p className="label-sans text-charcoal-40 mb-3 text-[10px]">
                  ADDRESS
                </p>
                <address className="body-sans text-charcoal-80 text-sm not-italic leading-relaxed">
                  Ward 73, Star City
                  <br />
                  306, Katangi Road
                  <br />
                  Phase 4, Karmeta
                  <br />
                  Jabalpur — 482002
                </address>
              </div>

              <div className="h-px bg-charcoal-20" />

              <div>
                <p className="label-sans text-charcoal-40 mb-3 text-[10px]">
                  WEBSITE
                </p>
                <a
                  href="https://aryaabuiders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-sans text-charcoal hover:text-bronze transition-colors duration-300 text-sm"
                >
                  aryaabuiders.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
