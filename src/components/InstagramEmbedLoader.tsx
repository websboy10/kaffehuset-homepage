"use client";

import { useEffect } from "react";

const scriptId = "elfsight-platform-script";

export function InstagramEmbedLoader() {
  useEffect(() => {
    const feed = document.querySelector<HTMLElement>(".instagram-feed");
    if (!feed) return;

    const loadScript = () => {
      if (document.getElementById(scriptId)) return;

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        loadScript();
        observer.disconnect();
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(feed);
    return () => observer.disconnect();
  }, []);

  return null;
}
