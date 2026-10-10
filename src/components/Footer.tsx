"use client";

const FOOTER_NAV = [
  { label: "HERO BUILD", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SELECTED WORK", href: "#work-showcase" },
  { label: "PROCESS", href: "#process" },
  { label: "SERVICES", href: "#services" },
  { label: "LOCATION", href: "#location" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F4F1EA] border-t border-[#0B0B0A]/15 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#work"
              className="heading-serif text-[#0B0B0A] text-2xl md:text-3xl block mb-4 tracking-[0.05em]"
            >
              ARYAA BUILDERS
            </a>
            <p className="body-sans text-[#0B0B0A]/70 text-sm">
              Premium Real Estate Builders &amp; Construction Engineering
            </p>
            <p className="body-sans text-[#0B0B0A]/50 text-sm mt-1">
              Jabalpur, Madhya Pradesh
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="label-sans text-[#0B0B0A]/50 mb-4 text-[10px] tracking-[0.2em]">
              NAVIGATION
            </p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {FOOTER_NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="label-sans text-[#0B0B0A]/70 hover:text-[#B8A27C] transition-colors duration-300 text-[10px] tracking-[0.18em]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div className="md:col-span-4">
            <p className="label-sans text-[#0B0B0A]/50 mb-4 text-[10px] tracking-[0.2em]">
              OFFICE LOCATION
            </p>
            <address className="body-sans text-[#0B0B0A]/75 text-sm not-italic leading-relaxed">
              Ward 73, Star City
              <br />
              306, Katangi Rd
              <br />
              Phase 4, Karmeta
              <br />
              Jabalpur, Madhya Pradesh 482002
            </address>
            <div className="mt-4">
              <span className="label-sans text-[#B8A27C] text-[10px] tracking-[0.15em] block">
                PLUS CODE: 6V8V+5X JABALPUR, MP
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#0B0B0A]/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="label-sans text-[#0B0B0A]/40 text-[9px] tracking-[0.15em]"
            suppressHydrationWarning
          >
            © {year} ARYAA BUILDERS. ALL RIGHTS RESERVED.
          </p>
          <p className="label-sans text-[#0B0B0A]/30 text-[9px] tracking-[0.15em]">
            CRAFTED WITH PRECISION • JABALPUR, MADHYA PRADESH
          </p>
        </div>
      </div>
    </footer>
  );
}
