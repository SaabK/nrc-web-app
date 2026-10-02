"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const pillars = [
  {
    index: "01",
    title: "Engineering Excellence",
    body: "Every build is reviewed and stress-tested to professional standards before competition.",
  },
  {
    index: "02",
    title: "Competitive Edge",
    body: "We study our opponents, analyse failures, and iterate. Competition is how we measure ourselves.",
  },
  {
    index: "03",
    title: "Knowledge Transfer",
    body: "Skills don't leave when members graduate. Documentation and mentorship compound knowledge across every cohort.",
  },
];

const metrics = [
  { value: "10+", label: "Years Active" },
  { value: "50+", label: "Active Members" },
  { value: "National", label: "Competition Record" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative pt-32 lg:pt-40 pb-28 lg:pb-36 bg-[#060810] overflow-hidden px-6 lg:px-10"
      aria-labelledby="about-heading"
    >
      {/* Subtle left-side orange bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(232,79,14,0.3) 30%, rgba(232,79,14,0.3) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
                  Who We Are
                </span>
              </div>

              <h2
                id="about-heading"
                className="font-display font-black text-white leading-[0.9] mb-8 tracking-tight"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
              >
                NUST&apos;S
                <br />
                <span className="text-[#E84F0E]">ROBOTICS</span>
                <br />
                VANGUARD
              </h2>

              <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[40ch] mb-4">
                Pakistan&apos;s most technically rigorous university robotics society, competing nationally and internationally since our founding.
              </p>

              {/* Metric strip */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-[rgba(255,255,255,0.06)]">
                {metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  >
                    <div className="font-display font-black text-xl text-white leading-none">
                      {m.value}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-[#3D4358] mt-1 uppercase">
                      {m.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="flex flex-col gap-0 border-t border-[rgba(232,79,14,0.12)]">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group flex gap-8 py-8 border-b border-[rgba(232,79,14,0.12)] hover:bg-[rgba(232,79,14,0.025)] transition-colors duration-300 px-4 -mx-4"
              >
                <span
                  className="font-mono text-[rgba(232,79,14,0.25)] group-hover:text-[rgba(232,79,14,0.6)] transition-colors duration-300 leading-none mt-1 flex-shrink-0 tracking-widest"
                  style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)" }}
                  aria-hidden="true"
                >
                  {pillar.index}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-2 tracking-wide group-hover:text-[#E84F0E] transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-[#6B7285] text-sm leading-relaxed max-w-[48ch]">
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 px-4 -mx-4"
            >
              <Link
                href="/join"
                className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-[#E84F0E] hover:text-white transition-colors duration-200 group"
              >
                JOIN THE TEAM
                <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
