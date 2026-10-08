"use client";

const FOOTER_NAV = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-charcoal-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#work"
              className="heading-serif text-charcoal text-2xl md:text-3xl block mb-4"
            >
              ARYAA BUILDERS
            </a>
            <p className="body-sans text-charcoal-60 text-sm">
              Real Estate Builders &amp; Construction Company
            </p>
            <p className="body-sans text-charcoal-40 text-sm mt-1">
              Jabalpur, Madhya Pradesh
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="label-sans text-charcoal-40 mb-4 text-[10px]">
              NAVIGATION
            </p>
            <nav
              className="flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {FOOTER_NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="label-sans text-charcoal-60 hover:text-charcoal transition-colors duration-300 text-[10px]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Address */}
          <div className="md:col-span-4">
            <p className="label-sans text-charcoal-40 mb-4 text-[10px]">
              ADDRESS
            </p>
            <address className="body-sans text-charcoal-60 text-sm not-italic leading-relaxed">
              Ward 73, Star City
              <br />
              306, Katangi Rd
              <br />
              Phase 4, Karmeta
              <br />
              Jabalpur, Madhya Pradesh 482002
            </address>
            <div className="mt-4">
              <a
                href="https://aryaabuiders.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-sans text-bronze hover:text-charcoal transition-colors duration-300 text-[10px]"
              >
                ARYAABUIDERS.COM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="label-sans text-charcoal-40 text-[9px]">
            © {year} ARYAA BUILDERS. ALL RIGHTS RESERVED.
          </p>
          <p className="label-sans text-charcoal-20 text-[9px]">
            JABALPUR, MADHYA PRADESH
          </p>
        </div>
      </div>
    </footer>
  );
}
