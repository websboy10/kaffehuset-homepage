"use client";

import { useEffect } from "react";

export function HeroEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const section = document.querySelector<HTMLElement>(".hero-section");
    const image = section?.querySelector<HTMLElement>(".hero-image");
    if (!section || !image) return;

    let ticking = false;
    let active = true;

    const update = () => {
      ticking = false;
      if (!active) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
      image.style.transform = `scale(${1 + progress * 0.08}) translate3d(0, ${progress * -30}px, 0)`;
    };

    const requestUpdate = () => {
      if (ticking || !active) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) requestUpdate();
      },
      { rootMargin: "120px 0px" }
    );

    observer.observe(section);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
