"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const img = section.querySelector<HTMLElement>(".hero-image");
    if (!img) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / window.innerHeight));
      img.style.transform = `scale(${1 + progress * 0.08}) translateY(${progress * -30}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="hero-section" id="top" aria-labelledby="hero-title">
      <Image
        src="/assets/butik-front.jpg"
        alt="Kaffehusets facade på Nørrebrogade med udendørs siddepladser"
        fill
        sizes="100vw"
        priority
        loading="eager"
        className="hero-image"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content section-shell">
        <p
          className="eyebrow"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.3s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s"
          }}
        >
          {siteContent.hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="hero-title"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 1.2s ease 0.5s, transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.5s"
          }}
        >
          {siteContent.hero.title}
        </h1>

        <p
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 0.8s, transform 1s cubic-bezier(0.16,1,0.3,1) 0.8s"
          }}
        >
          {siteContent.hero.intro}
        </p>

        <div
          className="hero-actions"
          aria-label="Primære handlinger"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1s ease 1.1s, transform 1s cubic-bezier(0.16,1,0.3,1) 1.1s"
          }}
        >
          <Link className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">
            {siteContent.hero.primaryCta}
          </Link>
          <Link className="button button-secondary" href="#menu">
            {siteContent.hero.secondaryCta}
          </Link>
          <a
            className="button button-call"
            href={phoneHref}
            aria-label={`Ring til Kaffehuset på ${siteContent.phone}`}
          >
            {siteContent.hero.callCta}
          </a>
        </div>
      </div>

      <div
        className="hero-scroll-indicator"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1.5s ease 1.8s"
        }}
        aria-hidden="true"
      >
        <span className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
