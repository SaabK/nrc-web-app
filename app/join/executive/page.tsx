import type { Metadata } from "next";
import Link from "next/link";
import { executiveRoles } from "@/data/join";

export const metadata: Metadata = {
  title: "Executive Applications",
  description: "Apply for an executive position at NRC.",
};

export default function ExecutivePage() {
  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 flex justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3" role="list">
            <li><Link href="/join" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">Join</Link></li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li><span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">Executive</span></li>
          </ol>
        </nav>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <h1 className="font-display font-black text-white leading-[0.9] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              EXECUTIVE
              <br /><span className="text-[#E84F0E]">POSITIONS</span>
            </h1>
            <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[52ch]">
              Executive roles run the club. You own the outcomes.
            </p>
          </div>
          <Link
            href="/join/executive/apply"
            className="self-start sm:self-auto flex-shrink-0 inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-6 py-3 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            APPLY NOW →
          </Link>
        </div>

        {/* Open roles */}
        <div className="mb-16">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            Open Positions
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[rgba(232,79,14,0.1)]">
            {executiveRoles.map((role) => (
              <div key={role.id} className="bg-[#060810] p-8">
                <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-3">{role.department}</div>
                <h3 className="font-display font-bold text-white text-xl mb-4">{role.title}</h3>
                <p className="text-[#9AA0B2] text-sm leading-relaxed mb-5 max-w-[42ch]">{role.description}</p>
                <div className="font-mono text-[9px] tracking-[0.2em] text-[#6B7285] uppercase mb-2">Requirements</div>
                <ul className="flex flex-col gap-1.5">
                  {role.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-[#6B7285]">
                      <span className="text-[#E84F0E] mt-0.5 flex-shrink-0" aria-hidden="true">—</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
