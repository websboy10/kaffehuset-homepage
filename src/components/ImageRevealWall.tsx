"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
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

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ImageRevealWall() {
  const sectionRef = useRef<HTMLElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<Array<HTMLElement | null>>([]);
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let isActive = false;

    const applyProgress = (progress: number) => {
      const eased = 1 - Math.pow(1 - progress, 3);
      const scale = 2.55 - eased * 1.55;

      if (wallRef.current) {
        wallRef.current.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;
      }

      tileRefs.current.forEach((tile, index) => {
        if (!tile) return;

        const item = layout[index];
        const reveal = item.hero ? 1 : clamp((eased - 0.12) / 0.58);
        const drift = 1 - reveal;

        tile.style.opacity = item.hero ? "1" : String(reveal);
        tile.style.transform = `translate3d(${item.dx * drift}px, ${item.dy * drift}px, 0)`;
      });
    };

    const updateTarget = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      targetProgress.current = scrollRange > 0 ? clamp(-rect.top / scrollRange) : 1;

      if (reduceMotion) {
        currentProgress.current = targetProgress.current;
        applyProgress(targetProgress.current);
      }
    };

    const animate = () => {
      if (!isActive) {
        frame.current = null;
        return;
      }

      const delta = targetProgress.current - currentProgress.current;
      currentProgress.current += delta * 0.09;

      if (Math.abs(delta) < 0.001) {
        currentProgress.current = targetProgress.current;
      }

      applyProgress(currentProgress.current);
      frame.current = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (reduceMotion || frame.current) return;
      frame.current = window.requestAnimationFrame(animate);
    };

    const stop = () => {
      if (!frame.current) return;
      window.cancelAnimationFrame(frame.current);
      frame.current = null;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
        updateTarget();

        if (isActive) {
          start();
        } else {
          stop();
        }
      },
      { rootMargin: "120px 0px" }
    );

    updateTarget();
    applyProgress(currentProgress.current);
    if (sectionRef.current) observer.observe(sectionRef.current);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      stop();
    };
  }, []);

  return (
    <section ref={sectionRef} className="image-reveal-section" aria-label="Stemningsbilleder fra Kaffehuset">
      <div className="image-reveal-sticky">
        <div
          ref={wallRef}
          className="image-reveal-wall"
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
                ref={(node) => {
                  tileRefs.current[index] = node;
                }}
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
