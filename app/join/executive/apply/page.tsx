import type { Metadata } from "next";
import Link from "next/link";
import { JoinForm } from "@/components/forms/JoinForm";

export const metadata: Metadata = {
  title: "Executive Application",
  description: "Apply for an executive position at NRC.",
};

export default function ExecutiveApplyPage() {
  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3" role="list">
            <li><Link href="/join" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">Join</Link></li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li><Link href="/join/executive" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">Executive</Link></li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li><span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">Apply</span></li>
          </ol>
        </nav>

        <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
          Application Form
        </div>
        <JoinForm type="executive" />

      </div>
    </div>
  );
}
