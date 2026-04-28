import Image from "next/image";
import { galleryImages } from "@/data/galleryImages";
import { ScrollReveal } from "./ScrollReveal";

export function HorizontalGallery() {
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

      <div className="h-gallery-track" data-drag-gallery>
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
