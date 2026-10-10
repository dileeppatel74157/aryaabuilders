"use client";

import { useState, type FormEvent } from "react";

export default function CTA() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "Residential Construction",
    notes: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0B0B0A] py-36 md:py-48 lg:py-56 overflow-hidden border-t border-white/10"
    >
      {/* Subtle radial glow accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(184,162,124,0.18), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Main CTA Heading */}
        <div className="text-center mb-16 md:mb-20 reveal-up">
          <p className="label-sans text-[#B8A27C] mb-6 md:mb-8 tracking-[0.25em]">
            START A CONVERSATION
          </p>
          <h2 className="heading-serif text-white text-[clamp(2.6rem,7vw,5.8rem)] leading-[1.02] mb-8">
            LET&apos;S BUILD
            <br />
            SOMETHING
            <br />
            REMARKABLE.
          </h2>
          <p className="body-sans text-white/60 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to embark on your next residential, custom villa, or commercial build in Jabalpur?
            Share your project parameters below to initiate an architectural consultation.
          </p>
        </div>

        {/* Functional On-Page Inquiry Form */}
        <div className="max-w-2xl mx-auto bg-white/[0.03] border border-white/15 p-8 md:p-12 shadow-2xl backdrop-blur-sm reveal-up">
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#B8A27C]/20 border border-[#B8A27C] flex items-center justify-center text-[#B8A27C]">
                ✓
              </div>
              <h3 className="heading-serif text-white text-2xl md:text-3xl">
                Inquiry Received
              </h3>
              <p className="body-sans text-white/70 text-sm max-w-md mx-auto">
                Thank you, {formData.name}. Your architectural inquiry regarding{" "}
                <span className="text-[#B8A27C]">{formData.projectType}</span> has been logged.
                Our team at Aryaa Builders will connect with you directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    contact: "",
                    projectType: "Residential Construction",
                    notes: "",
                  });
                }}
                className="mt-6 text-xs text-[#B8A27C] tracking-[0.2em] uppercase hover:underline"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="client-name"
                  className="block label-sans text-white/60 text-[9px] mb-2 tracking-[0.2em]"
                >
                  YOUR FULL NAME *
                </label>
                <input
                  id="client-name"
                  type="text"
                  required
                  placeholder="e.g. Dharmendra Sahu"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8A27C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="client-contact"
                  className="block label-sans text-white/60 text-[9px] mb-2 tracking-[0.2em]"
                >
                  PHONE NUMBER OR EMAIL *
                </label>
                <input
                  id="client-contact"
                  type="text"
                  required
                  placeholder="e.g. +91 98XXX XXXXX or contact@example.com"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8A27C] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="project-type"
                  className="block label-sans text-white/60 text-[9px] mb-2 tracking-[0.2em]"
                >
                  PROJECT DISCIPLINE
                </label>
                <select
                  id="project-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#0B0B0A] border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8A27C] transition-colors"
                >
                  <option value="Residential Construction">Residential Construction</option>
                  <option value="Custom Homes">Custom Homes / Private Villa</option>
                  <option value="Commercial Construction">Commercial Construction</option>
                  <option value="Real Estate Development">Real Estate Development</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="project-notes"
                  className="block label-sans text-white/60 text-[9px] mb-2 tracking-[0.2em]"
                >
                  PROJECT OVERVIEW / LOCATION DETAILS
                </label>
                <textarea
                  id="project-notes"
                  rows={3}
                  placeholder="Briefly describe your land location, estimated square footage, or architectural requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-black/40 border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#B8A27C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full cta-button cta-button-light text-[11px] py-4 tracking-[0.2em] justify-center mt-4"
              >
                SUBMIT PROJECT INQUIRY
                <span aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </div>

        {/* Footer Address Details */}
        <div className="mt-20 md:mt-24 text-center reveal-up">
          <div className="w-16 h-px bg-white/20 mx-auto mb-8" />
          <address className="not-italic label-sans text-white/40 text-[9px] leading-relaxed tracking-[0.18em]">
            WARD 73, STAR CITY · 306, KATANGI ROAD · PHASE 4, KARMETA
            <br />
            JABALPUR, MADHYA PRADESH — 482002
            <br />
            PLUS CODE: 6V8V+5X JABALPUR, MADHYA PRADESH
          </address>
        </div>
      </div>
    </section>
  );
}
