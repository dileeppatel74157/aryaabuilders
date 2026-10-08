"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0,0.15,1)] ${
          isScrolled
            ? "nav-backdrop bg-[#0B0B0A]/90 py-3.5 border-b border-white/10"
            : "bg-transparent py-5 md:py-7"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24">
          {/* Logo */}
          <a
            href="#work"
            className="text-white font-serif text-lg md:text-xl tracking-[0.12em] font-light"
            aria-label="Aryaa Builders — Home"
          >
            ARYAA BUILDERS
          </a>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-10"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label-sans text-white/70 hover:text-white transition-colors duration-300 text-[10px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex cta-button cta-button-light text-[10px] py-2.5 px-5"
          >
            START A PROJECT
            <span aria-hidden="true">→</span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-white transition-all duration-400 ease-[cubic-bezier(0.25,0,0.15,1)] ${
                menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-400 ease-[cubic-bezier(0.25,0,0.15,1)] ${
                menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`mobile-menu fixed inset-0 z-40 bg-charcoal flex flex-col justify-center items-center ${
          menuOpen ? "open" : ""
        }`}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="heading-serif text-white text-4xl hover:text-bronze transition-colors duration-300"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="cta-button cta-button-light"
            >
              START A PROJECT
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        <div className="absolute bottom-12 text-center">
          <p className="label-sans text-white/30 text-[9px]">
            JABALPUR, MADHYA PRADESH
          </p>
        </div>
      </div>
    </>
  );
}
