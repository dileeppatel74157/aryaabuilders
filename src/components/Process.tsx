"use client";

const STEPS = [
  {
    number: "01",
    title: "VISION",
    description:
      "Understanding your aspirations and translating them into a clear architectural direction. Every enduring structure starts with a clear vision.",
  },
  {
    number: "02",
    title: "DESIGN",
    description:
      "Thoughtful spatial planning where form meets function. Architectural blueprints, neoclassical proportions, and structural calculations.",
  },
  {
    number: "03",
    title: "BUILD",
    description:
      "Rigorous construction execution with high-grade materials, reinforced foundations, and skilled on-site craftsmanship. Built to uncompromising engineering standards.",
  },
  {
    number: "04",
    title: "FINISH",
    description:
      "Refined surface finishing, architectural lighting, ornamental detailing, and meticulous inspection before delivering a space built to last generations.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#0B0B0A] py-32 md:py-44 lg:py-52 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-20 md:mb-28 reveal-up">
          <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
            OUR PROCESS
          </p>
          <h2 className="heading-serif text-white text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.05]">
            VISION → DESIGN
            <br />
            BUILD → FINISH.
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="border-t border-white/20 pt-8 pb-4 flex flex-col justify-between reveal-up group hover:border-[#B8A27C] transition-colors duration-500"
            >
              <div>
                <span className="label-sans text-[#B8A27C] text-[10px] tracking-[0.2em] block mb-4">
                  STEP {step.number}
                </span>
                <h3 className="heading-serif text-white text-2xl md:text-3xl mb-4 group-hover:text-[#B8A27C] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="body-sans text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
