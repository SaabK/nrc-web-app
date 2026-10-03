import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug, getEditionByYear } from "@/data/events";
import { MediaGallery } from "@/components/gallery/MediaGallery";

interface Props {
  params: Promise<{ slug: string; year: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, year } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Not Found" };
  return {
    title: `${event.name} ${year}`,
    description: `${event.name} ${year} — NRC edition recap.`,
  };
}

export async function generateStaticParams() {
  return events.flatMap((e) =>
    e.editions.map((ed) => ({ slug: e.slug, year: String(ed.year) }))
  );
}

export default async function EditionPage({ params }: Props) {
  const { slug, year: yearStr } = await params;
  const year = parseInt(yearStr, 10);
  const event = getEventBySlug(slug);
  if (!event) notFound();
  const edition = getEditionByYear(event, year);
  if (!edition) notFound();

  const sortedYears = [...event.editions]
    .sort((a, b) => b.year - a.year)
    .map((e) => e.year);

  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 flex justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3 flex-wrap" role="list">
            <li>
              <Link href="/events" className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">
                Events
              </Link>
            </li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li>
              <Link href={`/events/${event.slug}`} className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase">
                {event.shortName}
              </Link>
            </li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">
                {year}
              </span>
            </li>
          </ol>
        </nav>

        {/* Year nav */}
        <div className="flex flex-wrap gap-2 mb-16">
          {sortedYears.map((y) => (
            <Link
              key={y}
              href={`/events/${event.slug}/${y}`}
              className={`font-display text-xs tracking-[0.15em] px-4 py-2 border transition-all duration-200 ${
                y === year
                  ? "text-white bg-[#E84F0E] border-[#E84F0E]"
                  : "text-[#9AA0B2] border-[rgba(232,79,14,0.2)] hover:border-[rgba(232,79,14,0.5)] hover:text-white"
              }`}
              aria-current={y === year ? "page" : undefined}
            >
              {y}
            </Link>
          ))}
        </div>

        {/* Header */}
        <div className="mb-16">
          <h1
            className="font-display font-black text-white leading-[0.88] tracking-tight mb-4"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
          >
            {event.shortName}
            <br />
            <span className="text-[#E84F0E]">{year}</span>
          </h1>
          <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[60ch]">
            {edition.description}
          </p>
        </div>

        {/* Stats */}
        {edition.stats.length > 0 && (
          <div className="mb-20">
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
              By the Numbers
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(232,79,14,0.1)]">
              {edition.stats.map((stat) => (
                <div key={stat.label} className="bg-[#060810] p-6 lg:p-8">
                  <div className="font-display font-black text-white leading-none mb-2"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                    {stat.value}
                    {stat.unit && (
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] ml-2 font-normal">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.25em] text-[#6B7285] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {edition.results.length > 0 && (
          <div className="mb-20">
            <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
              Results
            </div>
            <div className="flex flex-col gap-0">
              {edition.results.map((result) => (
                <div
                  key={result.rank}
                  className="flex items-center gap-6 lg:gap-10 py-5 border-b border-[rgba(232,79,14,0.1)]"
                >
                  <span
                    className="font-display font-black w-12 text-center flex-shrink-0"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      color: result.rank === 1 ? "#E84F0E" : result.rank === 2 ? "#9AA0B2" : "#6B7285",
                    }}
                  >
                    {result.rank === 1 ? "I" : result.rank === 2 ? "II" : result.rank === 3 ? "III" : `#${result.rank}`}
                  </span>
                  <div>
                    <div className="font-display font-bold text-white text-base">{result.team}</div>
                    {result.achievement && (
                      <div className="font-mono text-[9px] tracking-[0.2em] text-[#E84F0E] uppercase mt-1">
                        {result.achievement}
                      </div>
                    )}
                    {result.members && result.members.length > 0 && (
                      <div className="text-[#6B7285] text-sm mt-1">
                        {result.members.join(", ")}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Media Gallery */}
        <div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-8 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            Media Gallery
          </div>
          <MediaGallery media={edition.media} />
        </div>
      </div>
    </div>
  );
}
