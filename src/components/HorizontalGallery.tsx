"use client";

import Image from "next/image";
import { useRef, type MouseEvent } from "react";
import { galleryImages } from "@/data/galleryImages";
import { ScrollReveal } from "./ScrollReveal";

export function HorizontalGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e: MouseEvent) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.pageX - track.offsetLeft;
    scrollLeft.current = track.scrollLeft;
    track.style.scrollSnapType = "none";
  };

  const onPointerMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const track = trackRef.current;
    if (!track) return;
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    track.scrollLeft = scrollLeft.current - walk;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    const track = trackRef.current;
    if (track) {
      track.style.scrollSnapType = "x mandatory";
    }
  };

  return (
    <section className="gallery-section" id="galleri" aria-labelledby="gallery-title">
      <div className="section-shell">
        <ScrollReveal>
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">Galleri</p>
              <h2 id="gallery-title">Glimt fra Kaffehuset</h2>
            </div>
            <p>Et indblik i hverdagen, maden og stemningen på Nørrebrogade.</p>
          </div>
        </ScrollReveal>
      </div>

      <div
        ref={trackRef}
        className="h-gallery-track"
        onMouseDown={onPointerDown}
        onMouseMove={onPointerMove}
        onMouseUp={onPointerUp}
        onMouseLeave={onPointerUp}
      >
        {galleryImages.map((img) => (
          <figure className="h-gallery-item" key={img.src}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 640px) 85vw, 38vw"
            />
            <figcaption className="h-gallery-caption">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
