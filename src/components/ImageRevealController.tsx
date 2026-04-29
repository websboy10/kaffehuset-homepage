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
    let viewportHeight = document.documentElement.clientHeight;
    let frame: number | null = null;
    let isActive = false;
    let isPhone = window.matchMedia("(max-width: 640px)").matches;

    const getAnimationConfig = () =>
      isPhone
        ? {
            startScale: 1.68,
            endScale: 0.92,
            revealStart: 0.04,
            revealSpan: 0.72,
            driftMultiplier: 0.42,
            smoothing: 1
          }
        : {
            startScale: 2.55,
            endScale: 1,
            revealStart: 0.12,
            revealSpan: 0.58,
            driftMultiplier: 1,
            smoothing: 0.09
          };

    const applyProgress = (progress: number) => {
      const config = getAnimationConfig();
      const eased = isPhone ? 1 - Math.pow(1 - progress, 2) : 1 - Math.pow(1 - progress, 3);
      const scale = config.startScale - eased * (config.startScale - config.endScale);

      wall.style.transform = `translate3d(-50%, -50%, 0) scale(${scale})`;

      tiles.forEach((tile) => {
        const dx = Number(tile.dataset.dx ?? 0);
        const dy = Number(tile.dataset.dy ?? 0);
        const isHero = tile.dataset.hero === "true";
        const reveal = isHero ? 1 : clamp((eased - config.revealStart) / config.revealSpan);
        const drift = 1 - reveal;
        const driftX = dx * drift * config.driftMultiplier;
        const driftY = dy * drift * config.driftMultiplier;

        tile.style.opacity = isHero ? "1" : String(reveal);
        tile.style.transform = `translate3d(${driftX}px, ${driftY}px, 0)`;
      });
    };

    const updateTarget = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = rect.height - viewportHeight;
      targetProgress = scrollRange > 0 ? clamp(-rect.top / scrollRange) : 1;

      if (reduceMotion) {
        currentProgress = targetProgress;
        applyProgress(targetProgress);
      } else if (isPhone) {
        currentProgress = targetProgress;
        applyProgress(currentProgress);
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
      currentProgress += delta * getAnimationConfig().smoothing;

      if (Math.abs(delta) < 0.001) {
        currentProgress = targetProgress;
      }

      applyProgress(currentProgress);
      frame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (reduceMotion || isPhone || frame !== null) return;
      frame = window.requestAnimationFrame(animate);
    };

    const updateViewport = () => {
      viewportHeight = document.documentElement.clientHeight;
      isPhone = window.matchMedia("(max-width: 640px)").matches;
      updateTarget();
      if (isPhone) stop();
      else if (isActive) start();
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
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
      stop();
    };
  }, []);

  return null;
}
