import Image from "next/image";
import Link from "next/link";
import { HeroEffects } from "./HeroEffects";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <HeroEffects />
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
        <p className="eyebrow hero-enter hero-enter-1">
          {siteContent.hero.eyebrow}
        </p>

        <h1 id="hero-title" className="hero-title hero-enter hero-enter-2">
          {siteContent.hero.title}
        </h1>

        <p className="hero-enter hero-enter-3">
          {siteContent.hero.intro}
        </p>

        <div className="hero-actions hero-enter hero-enter-4" aria-label="Primære handlinger">
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

      <div className="hero-scroll-indicator hero-scroll-enter" aria-hidden="true">
        <span className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
