import Image from "next/image";
import { revealImages } from "@/data/revealImages";

const layout = [
  { x: 4, y: 7, w: 29, h: 23, dx: -180, dy: -90 },
  { x: 39, y: 20, w: 42, h: 30, dx: 0, dy: 0, hero: true },
  { x: 83, y: 6, w: 15, h: 31, dx: 160, dy: -80 },
  { x: 14, y: 35, w: 20, h: 31, dx: -150, dy: 65 },
  { x: 39, y: 55, w: 19, h: 31, dx: -20, dy: 130 },
  { x: 60, y: 56, w: 21, h: 18, dx: 70, dy: 120 },
  { x: 83, y: 41, w: 25, h: 30, dx: 170, dy: 55 },
  { x: 26, y: 70, w: 17, h: 26, dx: -90, dy: 160 },
  { x: 48, y: 78, w: 18, h: 21, dx: 10, dy: 170 },
  { x: 69, y: 76, w: 24, h: 20, dx: 110, dy: 155 }
];

export function ImageRevealWall() {
  return (
    <section className="image-reveal-section" aria-label="Stemningsbilleder fra Kaffehuset" data-image-reveal>
      <div className="image-reveal-sticky">
        <div
          className="image-reveal-wall"
          data-image-reveal-wall
          style={{
            transform: "translate3d(-50%, -50%, 0) scale(2.55)"
          }}
        >
          {revealImages.map((image, index) => {
            const item = layout[index];

            return (
              <figure
                className={`image-reveal-tile${item.hero ? " image-reveal-tile-main" : ""}`}
                key={image.src}
                data-image-reveal-tile
                data-dx={item.dx}
                data-dy={item.dy}
                data-hero={item.hero ? "true" : undefined}
                style={{
                  left: `${item.x}%`,
                  top: `${item.y}%`,
                  width: `${item.w}%`,
                  height: `${item.h}%`,
                  opacity: item.hero ? 1 : 0,
                  transform: `translate3d(${item.dx}px, ${item.dy}px, 0)`
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={item.hero ? "(max-width: 640px) 90vw, 58vw" : "(max-width: 640px) 44vw, 28vw"}
                />
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
