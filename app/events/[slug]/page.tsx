import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug } from "@/data/events";
import { EditionCards } from "@/components/events/EditionCards";

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
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 flex justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

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
          <EditionCards eventSlug={event.slug} editions={sortedEditions} />
        </div>
      </div>
    </div>
  );
}
