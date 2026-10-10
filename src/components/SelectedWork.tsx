"use client";

export default function SelectedWork() {
  return (
    <section id="work-showcase" className="relative bg-[#0B0B0A] py-32 md:py-44 lg:py-52 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-20 md:mb-28 reveal-up">
          <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
            SELECTED WORK
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-8 heading-serif text-white text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05]">
              DISCIPLINED
              <br />
              ARCHITECTURE.
              <br />
              TIMELESS SPACES.
            </h2>
            <p className="lg:col-span-4 body-sans text-white/60 text-sm md:text-base leading-relaxed">
              Every build is an enduring testament to material honesty, neoclassical balance,
              and structural longevity. Here is our architectural standard brought to life.
            </p>
          </div>
        </div>

        {/* Hero Editorial Showcase Item */}
        <div className="relative mb-24 md:mb-36 reveal-up group">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-white/5 border border-white/10">
            <img
              src="/images/construction-frames/ezgif-frame-240.jpg"
              alt="Aryaa Builders Neoclassical Estate Villa at Twilight, Jabalpur"
              className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-12 right-6 md:right-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="label-sans text-[#B8A27C] text-[10px] tracking-[0.2em] block mb-2">
                  01 / PRIVATE RESIDENTIAL ESTATE
                </span>
                <h3 className="heading-serif text-white text-2xl md:text-4xl">
                  The Imperial Classical Villa
                </h3>
              </div>
              <div className="text-left md:text-right">
                <span className="label-sans text-white/50 text-[10px] tracking-[0.2em] block">
                  JABALPUR, MADHYA PRADESH
                </span>
                <span className="body-sans text-white/70 text-xs md:text-sm mt-1 block">
                  Neoclassical Facade • Twilight Illumination • 12,000 Sq. Ft.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Detail 1: Neoclassical Facade */}
          <div className="reveal-up group">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 mb-6">
              <img
                src="/images/construction-frames/ezgif-frame-180.jpg"
                alt="Aryaa Builders Classical Colonnade and Masonry"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="label-sans text-[#B8A27C] text-[9px] tracking-[0.2em] block mb-2">
              02 / ARCHITECTURAL ENVELOPE
            </span>
            <h4 className="heading-serif text-white text-xl md:text-2xl mb-2">
              Corinthian Colonnades &amp; Balustrades
            </h4>
            <p className="body-sans text-white/60 text-sm leading-relaxed">
              Carved pediments, monumental fluted columns, and arched fenestration designed for
              dignified symmetry and natural ventilation.
            </p>
          </div>

          {/* Detail 2: Structural Precision */}
          <div className="reveal-up group">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-white/5 border border-white/10 mb-6">
              <img
                src="/images/construction-frames/ezgif-frame-060.jpg"
                alt="Aryaa Builders Reinforced Concrete Foundation and Structural Framework"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="label-sans text-[#B8A27C] text-[9px] tracking-[0.2em] block mb-2">
              03 / STRUCTURAL INTEGRITY
            </span>
            <h4 className="heading-serif text-white text-xl md:text-2xl mb-2">
              Monolithic Concrete Grid
            </h4>
            <p className="body-sans text-white/60 text-sm leading-relaxed">
              Multi-tiered reinforced concrete columns and deep foundation engineering ensuring
              decades of seismic resilience and structural permanence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
