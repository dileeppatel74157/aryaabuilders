"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "01",
    title: "RESIDENTIAL CONSTRUCTION",
    summary: "Single-family estates, multi-story residences, and premium residential spaces.",
    description:
      "Engineered from foundation to finish with reinforced concrete frameworks, earthquake-resistant design, and premium masonry. Every residence is built for decades of comfortable, secure living.",
  },
  {
    id: "02",
    title: "CUSTOM HOMES",
    summary: "Bespoke architectural villas designed around your personal lifestyle.",
    description:
      "From neoclassical facades with fluted columns to contemporary open-plan spaces, we translate your architectural vision into tailored structural reality with exquisite finishes.",
  },
  {
    id: "03",
    title: "COMMERCIAL CONSTRUCTION",
    summary: "Functional, durable, and commanding commercial structures.",
    description:
      "Modern commercial spaces, retail properties, and offices engineered to elevate businesses and serve Jabalpur's growing economy with structural safety and practical space utilization.",
  },
  {
    id: "04",
    title: "REAL ESTATE DEVELOPMENT",
    summary: "Long-term planned developments across prime Jabalpur sectors.",
    description:
      "Strategic land development, site planning, and residential plotting with legal transparency, comprehensive utility planning, and enduring infrastructure standards.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="relative bg-[#F4F1EA] py-32 md:py-44 lg:py-52">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 md:mb-28 reveal-up">
          <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
            OUR DISCIPLINES
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 heading-serif text-[#0B0B0A] text-[clamp(2.2rem,5vw,4.5rem)] leading-[1.05]">
              WHAT WE
              <br />
              BUILD.
            </h2>
            <p className="lg:col-span-4 body-sans text-[#0B0B0A]/70 text-sm md:text-base leading-relaxed">
              We offer comprehensive building and development services across Jabalpur,
              adhering strictly to engineering standards and uncompromised craftsmanship.
            </p>
          </div>
        </div>

        {/* Service Rows */}
        <div className="border-t border-[#0B0B0A]/15 reveal-up">
          {SERVICES.map((service, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={service.id}
                className="border-b border-[#0B0B0A]/15 transition-colors duration-300 hover:bg-[#B8A27C]/5"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full text-left py-8 md:py-10 flex items-center justify-between gap-6 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B8A27C]"
                  aria-expanded={isOpen}
                  aria-controls={`service-desc-${service.id}`}
                >
                  <div className="flex items-center gap-6 md:gap-12">
                    <span className="label-sans text-[#0B0B0A]/40 text-[10px] w-6">
                      {service.id}
                    </span>
                    <div>
                      <h3 className="heading-serif text-[#0B0B0A] text-[clamp(1.4rem,2.5vw,2.2rem)] font-normal">
                        {service.title}
                      </h3>
                      <p className="body-sans text-[#0B0B0A]/60 text-xs md:text-sm mt-1 hidden sm:block">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-2xl font-light text-[#0B0B0A]/60 transition-transform duration-300 select-none ${
                      isOpen ? "rotate-45 text-[#B8A27C]" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={`service-desc-${service.id}`}
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? "max-h-96 pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <div className="pl-12 md:pl-20 max-w-2xl">
                    <p className="body-sans text-[#0B0B0A]/75 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
