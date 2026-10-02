import type { Metadata } from "next";
import Link from "next/link";
import { volunteerAreas } from "@/data/join";
import { JoinForm } from "@/components/forms/JoinForm";

export const metadata: Metadata = {
  title: "Volunteer Applications",
  description: "Join NRC as a volunteer member.",
};

export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3" role="list">
            <li><Link href="/join" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">Join</Link></li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li><span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">Volunteer</span></li>
          </ol>
        </nav>

        <div className="mb-16">
          <h1 className="font-display font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            VOLUNTEER
            <br /><span className="text-[#E84F0E]">MEMBERSHIP</span>
          </h1>
          <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[52ch]">
            The entry point for most NRC members. Start building hardware and software from day one.
          </p>
        </div>

        {/* Teams */}
        <div className="mb-16">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            Teams You Can Join
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(232,79,14,0.1)]">
            {volunteerAreas.map((area) => (
              <div key={area.id} className="bg-[#060810] p-6">
                <h3 className="font-display font-bold text-white text-base mb-3">{area.title}</h3>
                <p className="text-[#9AA0B2] text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application form */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            Application Form
          </div>
          <JoinForm type="volunteer" />
        </div>
      </div>
    </div>
  );
}
