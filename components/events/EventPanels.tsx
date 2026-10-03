"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { events } from "@/data/events";

export function EventPanels() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="events"
      className="relative mt-0 pt-28 lg:pt-36 pb-28 lg:pb-36 bg-[#080c18] overflow-hidden border-t border-[rgba(232,79,14,0.1)]"
      aria-labelledby="events-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
                Competitions & Events
              </span>
            </div>
            <h2
              id="events-heading"
              className="font-display font-black text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4rem)" }}
            >
              WHERE WE
              <br />
              <span className="text-[#E84F0E]">COMPETE.</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="self-start lg:self-auto font-display text-xs tracking-[0.2em] text-[#9AA0B2] border border-[rgba(232,79,14,0.2)] px-5 py-2.5 hover:text-white hover:border-[rgba(232,79,14,0.5)] transition-all duration-200"
          >
            ALL EVENTS →
          </Link>
        </div>

        {/* Panels */}
        <div
          className="hidden lg:flex border border-[rgba(232,79,14,0.12)] overflow-hidden"
          style={{ height: 480 }}
          role="list"
          aria-label="Event list"
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              role="listitem"
              className={`
                relative flex flex-col justify-end overflow-hidden cursor-pointer
                border-r border-[rgba(232,79,14,0.12)] last:border-r-0
                transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                group
              `}
              style={{
                flex: activeIndex === i ? 2.8 : 1,
              }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => {}}
            >
              {/* Background — darkened, activates on hover */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(160deg, rgba(8,12,24,0.98) 0%, rgba(232,79,14,0.06) 100%)`,
                  opacity: activeIndex === i ? 1 : 0.95,
                }}
                aria-hidden="true"
              />

              {/* Orange glow on active */}
              {activeIndex === i && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(232,79,14,0.18) 0%, transparent 70%)",
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Top-left index number */}
              <div
                className="absolute top-6 left-6 font-display font-black leading-none transition-colors duration-300"
                style={{
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  color: activeIndex === i ? "rgba(232,79,14,0.6)" : "rgba(232,79,14,0.15)",
                }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Vertical label — shown when collapsed */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  activeIndex === i ? "opacity-0" : "opacity-100"
                }`}
                aria-hidden={activeIndex === i}
              >
                <span
                  className="font-display font-black text-white tracking-[0.15em] whitespace-nowrap"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                    transform: "rotate(180deg)",
                    fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
                  }}
                >
                  {event.shortName}
                </span>
              </div>

              {/* Expanded content */}
              <div
                className={`relative z-10 p-8 pb-10 transition-all duration-500 ${
                  activeIndex === i
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="mb-2">
                  <span className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase">
                    {event.category}
                  </span>
                </div>
                <h3 className="font-display font-black text-white mb-3 tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                  {event.name}
                </h3>
                <p className="text-[#9AA0B2] text-sm leading-relaxed mb-6 max-w-[36ch]">
                  {event.tagline}
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className="inline-flex items-center gap-2 font-display text-xs tracking-[0.15em] text-white bg-[#E84F0E] px-4 py-2 mt-4 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  tabIndex={activeIndex === i ? 0 : -1}
                >
                  VIEW EVENT →
                </Link>
              </div>

              {/* Bottom border accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E84F0E] transition-transform duration-500 origin-left"
                style={{
                  transform: activeIndex === i ? "scaleX(1)" : "scaleX(0)",
                }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile event list */}
        <motion.div
          className="lg:hidden flex flex-col gap-0 border-t border-[rgba(232,79,14,0.12)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } }
          }}
        >
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
                }
              }}
              whileTap={{ scale: 0.97, transition: { duration: 0.1 } }}
              className="relative overflow-hidden border-b border-[rgba(232,79,14,0.12)]"
            >
              <motion.div
                className="absolute top-0 left-0 h-[1px] bg-[#E84F0E]"
                variants={{
                  hidden: { width: "0%" },
                  visible: { 
                    width: "100%", 
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 } 
                  }
                }}
              />
              <Link
                href={`/events/${event.slug}`}
                className="group flex items-center justify-between py-6 hover:bg-[rgba(232,79,14,0.03)] transition-colors duration-200 px-2"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display font-black text-[rgba(232,79,14,0.3)] text-xl w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-lg">{event.shortName}</div>
                    <div className="text-[#6B7285] text-sm">{event.tagline}</div>
                  </div>
                </div>
                <span className="text-[#E84F0E] group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
