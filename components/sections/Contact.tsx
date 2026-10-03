"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-0 pt-32 lg:pt-40 pb-28 lg:pb-36 bg-[#060810] overflow-hidden border-t border-[rgba(232,79,14,0.15)] px-6 lg:px-10"
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(232,79,14,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-y-3"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
                Contact
              </span>
            </div>
            <h2
              id="contact-heading"
              className="font-display font-black text-white leading-[0.9] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
            >
              GET IN
              <br />
              <span className="text-[#E84F0E]">TOUCH.</span>
            </h2>
            <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[36ch] mb-10">
              Prospective member, sponsor, or partner? We respond within 24 hours on weekdays.
            </p>

            {/* <Link
              href="/join"
              className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-6 py-3 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
            >
              JOIN NRC →
            </Link> */}
          </motion.div>

          {/* Right — contact rows */}
          <div className="flex flex-col gap-0 border-t border-[rgba(232,79,14,0.12)]">
            {siteConfig.contact.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-7 border-b border-[rgba(232,79,14,0.12)] hover:bg-[rgba(232,79,14,0.025)] transition-colors duration-300 px-4 -mx-4"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#3D4358] group-hover:text-[#6B7285] transition-colors duration-200 uppercase">
                  {c.label}
                </span>
                <a
                  href={`mailto:${c.email}`}
                  className="font-display font-semibold text-[#9AA0B2] hover:text-[#E84F0E] transition-colors duration-200 text-sm tracking-wide group-hover:text-white"
                >
                  {c.email}
                </a>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-8"
            >
              {/* Uncomment only after socials are developed */}
              {/* <div className="font-mono text-[10px] tracking-[0.25em] text-[#3D4358] uppercase pb-2">
                Find us online
              </div>
              <div className="flex flex-wrap gap-3">
                {siteConfig.social.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs tracking-[0.15em] text-[#6B7285] border border-[rgba(232,79,14,0.15)] px-5 py-2.5 rounded-full hover:text-white hover:border-[rgba(232,79,14,0.5)] hover:bg-[rgba(232,79,14,0.05)] hover:shadow-[0_0_12px_rgba(232,79,14,0.15)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  >
                    {s.platform.toUpperCase()}
                  </a>
                ))}
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
