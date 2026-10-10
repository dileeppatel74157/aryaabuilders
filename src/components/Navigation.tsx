"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "BUILD", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "PORTFOLIO", href: "#work-showcase" },
  { label: "PROCESS", href: "#process" },
  { label: "SERVICES", href: "#services" },
  { label: "LOCATION", href: "#location" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastState = false;
    const onScroll = () => {
      const scrolled = window.scrollY > 60;
      if (scrolled !== lastState) {
        lastState = scrolled;
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "nav-backdrop bg-[#0B0B0A]/95 py-3.5 border-b border-white/10 shadow-lg"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24">
          {/* Logo */}
          <a
            href="#work"
            className="text-white font-serif text-lg md:text-xl tracking-[0.14em] font-light flex items-center gap-3"
            aria-label="Aryaa Builders — Home"
          >
            <span>ARYAA BUILDERS</span>
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-sans text-white/70 hover:text-[#B8A27C] transition-colors duration-300 text-[10px] tracking-[0.2em]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex cta-button cta-button-light text-[10px] py-2.5 px-5 tracking-[0.2em]"
          >
            START A PROJECT
            <span aria-hidden="true">→</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-1.5 z-50 cursor-pointer focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[4.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[4.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-[#0B0B0A] flex flex-col justify-center items-center px-6 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col items-center gap-6 text-center"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="heading-serif text-white text-3xl hover:text-[#B8A27C] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="cta-button cta-button-light text-[11px]"
            >
              START A PROJECT
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        <div className="absolute bottom-10 text-center">
          <p className="label-sans text-white/40 text-[9px] tracking-[0.2em]">
            WARD 73, STAR CITY • JABALPUR, MP
          </p>
        </div>
      </div>
    </>
  );
}
