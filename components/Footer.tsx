import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

const platformAbbr: Record<string, string> = {
  instagram: "IG",
  linkedin: "LI",
  facebook: "FB",
  youtube: "YT",
};

export function Footer() {
  return (
    <footer
      className="bg-[#060810] border-t border-[rgba(232,79,14,0.1)] flex justify-center"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 pb-10 w-full">

        {/* Top tagline row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4" aria-label="NRC Home">
              <div className="relative w-10 h-7 flex-shrink-0">
                <Image
                  src="/assets/nrc-logo.png"
                  alt="NRC"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-black text-white text-base tracking-wider">NRC</span>
            </Link>
            <p className="text-[#6B7285] text-sm leading-relaxed max-w-[38ch]">
              NUST Robotics Club. Engineering Pakistan&apos;s most competitive
              university robotics teams since our founding.
            </p>
          </div>

          <Link
            href="/join"
            className="self-start inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-6 py-3 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
          >
            JOIN NRC →
          </Link>
        </div>

        {/* Link columns */}
        {/* After social column is added, change lg:grid-cols-[1fr_1fr_1fr] to lg:grid-cols-[1.4fr_1fr_1fr_1fr] */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr] gap-10 mb-14">

          {/* Social */}
          {/* Uncomment only after socials are developed */}
          {/* <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-5">
              Follow Us
            </div>
            <div className="flex flex-wrap gap-2">
              {siteConfig.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[rgba(232,79,14,0.18)] flex items-center justify-center text-[#6B7285] hover:text-[#E84F0E] hover:border-[rgba(232,79,14,0.5)] hover:bg-[rgba(232,79,14,0.06)] transition-all duration-200 rounded-sm"
                  aria-label={s.platform}
                >
                  <span className="font-display text-[9px] font-bold tracking-wider">
                    {platformAbbr[s.platform.toLowerCase()] ?? s.platform.substring(0, 2).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div> */}

          {/* Navigate */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-5">
              Navigate
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {[
                { label: "Events", href: "/events" },
                { label: "Join NRC", href: "/join" },
                { label: "About", href: "/#about" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6B7285] text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-5">
              Contact
            </div>
            <ul className="flex flex-col gap-3" role="list">
              {siteConfig.contact.map((c) => (
                <li key={c.label}>
                  <div className="font-mono text-[9px] tracking-[0.2em] text-[#3D4358] uppercase mb-0.5">
                    {c.label}
                  </div>
                  <a
                    href={`mailto:${c.email}`}
                    className="text-[#6B7285] text-sm hover:text-white transition-colors duration-200"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <div className="font-mono text-[9px] tracking-[0.3em] text-[#E84F0E] uppercase mb-5">
              Location
            </div>
            <p className="text-[#6B7285] text-sm leading-relaxed">
              {siteConfig.university}
              <br />
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[rgba(255,255,255,0.04)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#2A2F42]">
            © {new Date().getFullYear()} NUST ROBOTICS CLUB. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#2A2F42]">
            NUST — ISLAMABAD — PAKISTAN
          </span>
        </div>

      </div>
    </footer>
  );
}
