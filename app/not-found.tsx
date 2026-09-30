import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060810] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="font-display font-black text-[rgba(232,79,14,0.15)] leading-none mb-8 select-none"
          style={{ fontSize: "clamp(6rem, 20vw, 16rem)" }}>
          404
        </div>
        <h1 className="font-display font-black text-white text-2xl mb-4 tracking-tight">
          PAGE NOT FOUND
        </h1>
        <p className="text-[#9AA0B2] text-sm mb-10 max-w-[36ch] mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-display text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-6 py-3 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
        >
          BACK TO HOME →
        </Link>
      </div>
    </div>
  );
}
