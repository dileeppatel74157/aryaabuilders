"use client";

import { useState } from "react";

const SERVICES = [
  {
    title: "RESIDENTIAL CONSTRUCTION",
    description:
      "Building homes that combine thoughtful design with lasting quality. From single-family residences to multi-unit developments, every project is crafted with precision and care.",
  },
  {
    title: "COMMERCIAL DEVELOPMENT",
    description:
      "Creating commercial spaces that serve their purpose beautifully. Functional architecture that elevates the businesses and communities it houses.",
  },
  {
    title: "CUSTOM HOMES",
    description:
      "Turning your unique vision into a home that is entirely your own. Every detail tailored, every space considered, every finish intentional.",
  },
  {
    title: "REAL ESTATE DEVELOPMENT",
    description:
      "Identifying opportunities and developing properties that contribute positively to Jabalpur&apos;s landscape. Responsible development with a long-term perspective.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative bg-offwhite py-32 md:py-44 lg:py-56"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header */}
        <div className="mb-20 md:mb-32 reveal-up">
          <p className="label-sans text-bronze mb-6 md:mb-8">SERVICES</p>
          <h2 className="heading-serif text-charcoal text-[clamp(2rem,4.5vw,4rem)]">
            WHAT WE
            <br />
            BUILD.
          </h2>
        </div>

        {/* Service rows */}
        <div className="reveal-up">
          {/* Top border */}
          <div className="border-t border-charcoal-20" />

          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="service-row"
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(i);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
            >
              <div className="flex items-center justify-between py-8 md:py-10 px-0 md:px-4">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="label-sans text-charcoal-40 text-[10px] hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-serif-medium text-charcoal text-[clamp(1.2rem,2.2vw,1.8rem)]">
                    {service.title}
                  </h3>
                </div>
                <span
                  className={`service-icon text-charcoal-60 text-2xl font-light select-none ${
                    openIndex === i ? "open" : ""
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </div>

              <div
                className={`service-content px-0 md:px-4 ${
                  openIndex === i ? "open" : ""
                }`}
              >
                <div className="max-w-xl ml-0 md:ml-[4.5rem]">
                  <p className="body-sans text-charcoal-60 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
