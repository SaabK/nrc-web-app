"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { EventEdition } from "@/types";

interface Props {
  eventSlug: string;
  editions: EventEdition[];
}

export function EditionCards({ eventSlug, editions }: Props) {
  return (
    <>
      {/* Desktop rendering (unchanged except for year color) */}
      <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(232,79,14,0.1)]">
        {editions.map((edition) => (
          <Link
            key={edition.year}
            href={`/events/${eventSlug}/${edition.year}`}
            className="group bg-[#060810] p-8 hover:bg-[#080c18] transition-colors duration-300 relative overflow-hidden"
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-px bg-[#E84F0E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              aria-hidden="true"
            />
            <div
              className="font-display font-black text-[#E84F0E] transition-colors duration-300 leading-none mb-4"
              style={{ fontSize: "3rem" }}
              aria-label={`Year ${edition.year}`}
            >
              {edition.year}
            </div>
            <p className="text-[#9AA0B2] text-sm leading-relaxed mb-4 max-w-[34ch]">
              {edition.description.length > 120
                ? `${edition.description.substring(0, 120)}…`
                : edition.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {edition.stats.slice(0, 2).map((stat) => (
                <div key={stat.label} className="border border-[rgba(232,79,14,0.12)] px-3 py-1.5">
                  <span className="font-display font-bold text-white text-sm">{stat.value}</span>
                  <span className="font-mono text-[9px] tracking-wider text-[#6B7285] ml-1.5">{stat.unit}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 font-display text-xs tracking-[0.15em] text-[#E84F0E]">
              VIEW EDITION →
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile rendering with animations */}
      <motion.div
        className="grid md:hidden gap-px bg-[rgba(232,79,14,0.1)]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}
      >
        {editions.map((edition) => (
          <motion.div
            key={edition.year}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
              }
            }}
            whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
            className="relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 h-[1px] bg-[#E84F0E] z-10"
              variants={{
                hidden: { width: "0%" },
                visible: { 
                  width: "100%", 
                  transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } 
                }
              }}
            />
            <Link
              href={`/events/${eventSlug}/${edition.year}`}
              className="group block bg-[#060810] p-8 hover:bg-[#080c18] transition-colors duration-300 h-full"
            >
              <div
                className="font-display font-black text-[#E84F0E] transition-colors duration-300 leading-none mb-4"
                style={{ fontSize: "3rem" }}
                aria-label={`Year ${edition.year}`}
              >
                {edition.year}
              </div>
              <p className="text-[#9AA0B2] text-sm leading-relaxed mb-4 max-w-[34ch]">
                {edition.description.length > 120
                  ? `${edition.description.substring(0, 120)}…`
                  : edition.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {edition.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="border border-[rgba(232,79,14,0.12)] px-3 py-1.5">
                    <span className="font-display font-bold text-white text-sm">{stat.value}</span>
                    <span className="font-mono text-[9px] tracking-wider text-[#6B7285] ml-1.5">{stat.unit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 font-display text-xs tracking-[0.15em] text-[#E84F0E]">
                VIEW EDITION →
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
