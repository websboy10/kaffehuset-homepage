"use client";

import { useEffect } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function ImageRevealController() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-image-reveal]");
    const wall = section?.querySelector<HTMLElement>("[data-image-reveal-wall]");
    const tiles = Array.from(section?.querySelectorAll<HTMLElement>("[data-image-reveal-tile]") ?? []);

    if (!section || !wall || tiles.length === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let targetProgress = 0;
    let currentProgress = 0;
    let frame: number | null = null;
    let isActive = false;

    const applyProgress = (progress: number) => {
      const eased = 1 - Math.pow(1 - progress, 3);
      const scale = 2.55 - eased * 1.55;

      wall.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;

      tiles.forEach((tile) => {
        const dx = Number(tile.dataset.dx ?? 0);
        const dy = Number(tile.dataset.dy ?? 0);
        const isHero = tile.dataset.hero === "true";
        const reveal = isHero ? 1 : clamp((eased - 0.12) / 0.58);
        const drift = 1 - reveal;

        tile.style.opacity = isHero ? "1" : String(reveal);
        tile.style.transform = `translate3d(${dx * drift}px, ${dy * drift}px, 0)`;
      });
    };

    const updateTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = rect.height - window.innerHeight;
      targetProgress = scrollRange > 0 ? clamp(-rect.top / scrollRange) : 1;

      if (reduceMotion) {
        currentProgress = targetProgress;
        applyProgress(targetProgress);
      }
    };

    const stop = () => {
      if (frame === null) return;
      window.cancelAnimationFrame(frame);
      frame = null;
    };

    const animate = () => {
      if (!isActive) {
        frame = null;
        return;
      }

      const delta = targetProgress - currentProgress;
      currentProgress += delta * 0.09;

      if (Math.abs(delta) < 0.001) {
        currentProgress = targetProgress;
      }

      applyProgress(currentProgress);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (reduceMotion || frame !== null) return;
      frame = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
        updateTarget();

        if (isActive) start();
        else stop();
      },
      { rootMargin: "120px 0px" }
    );

    updateTarget();
    applyProgress(currentProgress);
    observer.observe(section);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
      stop();
    };
  }, []);

  return null;
}
