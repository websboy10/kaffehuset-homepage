"use client";

import { useEffect } from "react";

export function GalleryDragController() {
  useEffect(() => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>("[data-drag-gallery]"));
    if (tracks.length === 0 || window.matchMedia("(pointer: coarse)").matches) return;

    const cleanups = tracks.map((track) => {
      let isDragging = false;
      let startX = 0;
      let scrollLeft = 0;

      const onMouseDown = (event: MouseEvent) => {
        isDragging = true;
        startX = event.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        track.style.scrollSnapType = "none";
      };

      const stopDragging = () => {
        isDragging = false;
        track.style.scrollSnapType = "x mandatory";
      };

      const onMouseMove = (event: MouseEvent) => {
        if (!isDragging) return;
        event.preventDefault();

        const x = event.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5;
        track.scrollLeft = scrollLeft - walk;
      };

      track.addEventListener("mousedown", onMouseDown);
      track.addEventListener("mousemove", onMouseMove);
      track.addEventListener("mouseup", stopDragging);
      track.addEventListener("mouseleave", stopDragging);

      return () => {
        track.removeEventListener("mousedown", onMouseDown);
        track.removeEventListener("mousemove", onMouseMove);
        track.removeEventListener("mouseup", stopDragging);
        track.removeEventListener("mouseleave", stopDragging);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
