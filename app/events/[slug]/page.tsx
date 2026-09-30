import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug } from "@/data/events";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return {
    title: event.name,
    description: event.tagline,
  };
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const sortedEditions = [...event.editions].sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3" role="list">
            <li>
              <Link href="/events" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">
                Events
              </Link>
            </li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">
                {event.shortName}
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#E84F0E]" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#E84F0E] uppercase">
              {event.category}
            </span>
          </div>
          <h1
            className="font-display font-black text-white leading-[0.9] mb-6 tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            {event.shortName}
          </h1>
          <p className="text-[#9AA0B2] text-lg leading-relaxed max-w-[52ch]">
            {event.description}
          </p>
        </div>

        {/* Editions */}
        <div className="border-t border-[rgba(232,79,14,0.12)] pt-12">
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-10">
            Editions
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(232,79,14,0.1)]">
            {sortedEditions.map((edition) => (
              <Link
                key={edition.year}
                href={`/events/${event.slug}/${edition.year}`}
                className="group bg-[#060810] p-8 hover:bg-[#080c18] transition-colors duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#E84F0E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  aria-hidden="true"
                />
                <div
                  className="font-display font-black text-[rgba(232,79,14,0.08)] group-hover:text-[rgba(232,79,14,0.2)] transition-colors duration-300 leading-none mb-4"
                  style={{ fontSize: "3rem" }}
                  aria-label={`Year ${edition.year}`}
                >
                  {edition.year}
                </div>
                <p className="text-[#6B7285] text-sm leading-relaxed mb-6 max-w-[34ch]">
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
        </div>
      </div>
    </div>
  );
}
