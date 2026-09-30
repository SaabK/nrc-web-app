"use client";

import { useState } from "react";
import Image from "next/image";
import type { EventMedia } from "@/types";

interface MediaGalleryProps {
  media: EventMedia[];
}

export function MediaGallery({ media }: MediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (media.length === 0) {
    return (
      <div className="border border-[rgba(232,79,14,0.12)] p-12 text-center">
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#3D4358] uppercase">
          Media Coming Soon
        </p>
      </div>
    );
  }

  const images = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type === "video");

  return (
    <div>
      {/* Images grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-2">
          {images.map((item, i) => (
            <button
              key={i}
              className="relative aspect-video bg-[#080c18] border border-[rgba(232,79,14,0.1)] overflow-hidden group cursor-pointer"
              onClick={() => setLightboxIndex(i)}
              aria-label={item.caption ?? `Media ${i + 1}`}
            >
              <Image
                src={item.url}
                alt={item.caption ?? `Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#E84F0E]/0 group-hover:bg-[#E84F0E]/10 transition-colors duration-300" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <div className="mt-4 flex flex-col gap-3">
          {videos.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-[rgba(232,79,14,0.12)] p-4 hover:border-[rgba(232,79,14,0.4)] transition-all duration-200"
            >
              <span className="text-[#E84F0E]" aria-hidden="true">▶</span>
              <span className="font-display text-sm text-white">{v.caption ?? "Watch Video"}</span>
            </a>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-6 right-6 text-white text-2xl font-light"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].caption ?? "Gallery image"}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
