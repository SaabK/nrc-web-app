import type { Metadata } from "next";
import Link from "next/link";
import { activeRecruitment } from "@/data/join";

export const metadata: Metadata = {
  title: "Join NRC",
  description: "Apply to become part of NUST Robotics Club.",
};

const paths = [
  {
    href: "/join/executive",
    label: "Executive Positions",
    tag: "Leadership",
    type: "executive" as const,
    description:
      "Lead an NRC department for the full academic year. Open to active members with demonstrated leadership.",
    commitment: "Full academic year",
  },
  {
    href: "/join/volunteer",
    label: "Volunteer Member",
    tag: "Open Enrollment",
    type: "volunteer" as const,
    description:
      "Join a technical, operations, media, or outreach team. No prior experience required.",
    commitment: "Flexible",
  },
];

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
              Join NRC
            </span>
          </div>
          <h1
            className="font-display font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            BUILD WITH
            <br />
            <span className="text-[#E84F0E]">THE BEST.</span>
          </h1>
          <p className="text-[#9AA0B2] text-lg leading-relaxed max-w-[52ch]">
            NRC is selective. We want people who are serious about building things that work.
          </p>
        </div>

        {/* Path cards */}
        <div className="grid md:grid-cols-2 gap-px bg-[rgba(232,79,14,0.12)] mb-16">
          {paths.map((path) => {
            const isActive =
              activeRecruitment !== "none" && activeRecruitment === path.type;
            const isInactive =
              activeRecruitment === "none" || activeRecruitment !== path.type;

            return (
              <Link
                key={path.href}
                href={path.href}
                className={[
                  "group relative p-10 lg:p-14 overflow-hidden transition-colors duration-300",
                  isActive
                    ? "bg-[rgba(232,79,14,0.05)] border border-[#E84F0E]"
                    : "bg-[#060810]",
                  isInactive ? "opacity-50" : "",
                  !isInactive ? "hover:bg-[#080c18]" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Hover glow — only on active card */}
                {isActive && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 20% 80%, rgba(232,79,14,0.06) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* Status badge */}
                <div
                  className={[
                    "font-mono text-[9px] tracking-[0.3em] uppercase mb-2",
                    isActive ? "text-[#E84F0E]" : "text-[#3D4358]",
                  ].join(" ")}
                >
                  {isActive ? "OPEN" : "CLOSED"}
                </div>

                {/* Tag */}
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-6">
                  {path.tag}
                </div>

                <h2
                  className="font-display font-black text-white mb-4 tracking-tight"
                  style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}
                >
                  {path.label}
                </h2>
                <p className="text-[#9AA0B2] text-sm leading-relaxed max-w-[40ch] mb-8">
                  {path.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-[#6B7285] uppercase">
                    Commitment: {path.commitment}
                  </div>
                  <span
                    className={[
                      "font-display text-xs tracking-[0.15em] text-[#E84F0E] inline-block",
                      !isInactive
                        ? "group-hover:translate-x-1 transition-transform duration-200"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    APPLY →
                  </span>
                </div>

                {/* Bottom border accent — only on active card */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#E84F0E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"
                    aria-hidden="true"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Info note */}
        <div className="border border-[rgba(232,79,14,0.12)] p-6 relative">
          <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#E84F0E]" aria-hidden="true" />
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] uppercase leading-relaxed max-w-[80ch]">
            Recruitment cycles run at the start of each semester. Follow our social media for announcements.
          </p>
        </div>
      </div>
    </div>
  );
}
