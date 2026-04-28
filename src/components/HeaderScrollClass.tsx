"use client";

import { useEffect } from "react";

export function HeaderScrollClass() {
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (!header) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      header.classList.toggle("scrolled", window.scrollY > 80);
    };

    const requestUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    requestUpdate();

    return () => window.removeEventListener("scroll", requestUpdate);
  }, []);

  return null;
}
