"use client";

export default function Reviews() {
  return (
    <section className="relative bg-charcoal py-32 md:py-44 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto reveal-up">
          <p className="label-sans text-bronze mb-10 md:mb-14">CLIENT TRUST</p>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 text-bronze"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="label-sans text-white/60 ml-3 text-[10px]">
              5.0
            </span>
          </div>

          {/* Testimonial */}
          <blockquote className="mb-10">
            <p className="heading-serif text-white text-[clamp(1.5rem,3vw,2.5rem)] italic">
              &ldquo;Nice work in Jabalpur&rdquo;
            </p>
          </blockquote>

          <div className="w-12 h-px bg-white/20 mx-auto" />
        </div>
      </div>
    </section>
  );
}
