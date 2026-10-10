"use client";

export default function Reviews() {
  return (
    <section className="relative bg-[#0B0B0A] py-32 md:py-44 lg:py-52 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto reveal-up">
          <p className="label-sans text-[#B8A27C] mb-8 md:mb-12 tracking-[0.25em]">
            CLIENT TRUST &amp; REPUTATION
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-10" aria-label="5.0 out of 5 stars rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-[#B8A27C]"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="label-sans text-white/80 ml-3 text-[11px] tracking-[0.2em] font-medium">
              5.0 / 5.0
            </span>
          </div>

          {/* Testimonial */}
          <blockquote className="mb-8">
            <p className="heading-serif text-white text-[clamp(1.6rem,3.2vw,2.8rem)] italic font-light leading-relaxed">
              &ldquo;Nice work in Jabalpur&rdquo;
            </p>
          </blockquote>

          {/* Verified Attribution */}
          <p className="label-sans text-[#B8A27C] text-[11px] tracking-[0.2em]">
            — ARNIKA CONSTRUCTION DHARMENDRA SAHU
          </p>

          <div className="w-16 h-px bg-white/20 mx-auto mt-12" />
        </div>
      </div>
    </section>
  );
}
