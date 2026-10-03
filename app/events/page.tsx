import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Events",
  description: "NRC competitions, workshops, and internal events.",
};

const categoryLabel: Record<string, string> = {
  competition: "Competitions",
  workshop: "Workshops & Training",
  internal: "Internal Events",
};

export default function EventsPage() {
  const byCategory = {
    competition: events.filter((e) => e.category === "competition"),
    workshop: events.filter((e) => e.category === "workshop"),
    internal: events.filter((e) => e.category === "internal"),
  };

  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 flex justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
              All Events
            </span>
          </div>
          <h1
            className="font-display font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            WHAT WE
            <br />
            <span className="text-[#E84F0E]">BUILD FOR.</span>
          </h1>
          <p className="text-[#6B7285] text-sm leading-relaxed max-w-[50ch]">
            From Asia&apos;s largest robotics stage to internal proving grounds. Every
            event is where engineering meets execution.
          </p>
        </div>

        {/* Categories */}
        {(Object.entries(byCategory) as [string, typeof events][]).map(
          ([cat, catEvents]) =>
            catEvents.length === 0 ? null : (
              <div key={cat} className="mb-16">
                <div className="flex items-center gap-4 mb-10">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase">
                    {categoryLabel[cat]}
                  </span>
                  <div className="flex-1 h-px bg-[rgba(232,79,14,0.1)]" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(232,79,14,0.1)]">
                  {catEvents.map((event, idx) => {
                    const latest = event.editions[0];
                    const keyStats = latest?.stats?.slice(0, 2) ?? [];

                    return (
                      <Link
                        key={event.id}
                        href={`/events/${event.slug}`}
                        className="group relative bg-[#060810] p-8 hover:bg-[#080c18] transition-colors duration-300 overflow-hidden flex flex-col min-h-[320px]"
                      >
                        {/* Hover glow */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(ellipse 80% 70% at 50% 110%, rgba(232,79,14,0.09) 0%, transparent 70%)",
                          }}
                          aria-hidden="true"
                        />

                        {/* Bottom border accent */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-px bg-[#E84F0E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                          aria-hidden="true"
                        />

                        {/* Top row — index + editions */}
                        <div className="flex items-start justify-between mb-8">
                          <span
                            className="font-mono font-bold leading-none text-[#1A1F35] tracking-widest"
                            style={{ fontSize: "clamp(0.65rem, 1vw, 0.75rem)" }}
                            aria-hidden="true"
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-mono text-[9px] tracking-[0.3em] text-[#3D4358] uppercase">
                            {event.editions.length} edition{event.editions.length !== 1 ? "s" : ""}
                          </span>
                        </div>

                        {/* Name + tagline */}
                        <div className="flex-1">
                          <h2 className="font-display font-black text-white text-2xl mb-2 tracking-tight leading-tight">
                            {event.shortName}
                          </h2>
                          <p className="text-[#6B7285] text-sm leading-relaxed max-w-[32ch] mb-6">
                            {event.tagline}
                          </p>
                        </div>

                        {/* Stats strip */}
                        {keyStats.length > 0 && (
                          <div className="flex gap-8 pt-5 border-t border-[rgba(255,255,255,0.06)] mb-6">
                            {keyStats.map((s) => (
                              <div key={s.label}>
                                <div className="font-display font-black text-2xl text-white leading-none mb-0.5">
                                  {s.value}
                                </div>
                                {s.unit && (
                                  <div className="font-mono text-[9px] tracking-[0.15em] text-[#E84F0E] uppercase mb-1">
                                    {s.unit}
                                  </div>
                                )}
                                <div className="font-mono text-[9px] tracking-[0.2em] text-[#4A5270] uppercase">
                                  {s.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CTA */}
                        <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                          <span className="font-display text-xs tracking-[0.2em] text-white group-hover:text-[#E84F0E] transition-colors duration-300">
                            EXPLORE
                          </span>
                          <span
                            className="inline-flex items-center justify-center w-6 h-6 border border-[rgba(232,79,14,0.25)] text-[#E84F0E] group-hover:bg-[#E84F0E] group-hover:border-[#E84F0E] group-hover:text-white transition-all duration-300 text-xs"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
