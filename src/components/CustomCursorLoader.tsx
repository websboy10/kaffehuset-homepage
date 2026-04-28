"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = dynamic(() => import("./CustomCursor").then((mod) => mod.CustomCursor), {
  ssr: false
});

export function CustomCursorLoader() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUseCursor =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setEnabled(canUseCursor);
  }, []);

  return enabled ? <CustomCursor /> : null;
}
