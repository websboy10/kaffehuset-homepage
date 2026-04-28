"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} aria-label="Primær navigation">
      <Link href="#top" className="brand-link" aria-label="Kaffehuset forside">
        <Image
          src="/assets/new-logo.webp"
          alt="Kaffehuset logo"
          width={1024}
          height={747}
          className="brand-mark"
          priority
        />
      </Link>

      <nav className="header-nav" aria-label="Hovednavigation">
        {siteContent.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a
          className="header-call"
          href={phoneHref}
          aria-label={`Ring til Kaffehuset på ${siteContent.phone}`}
        >
          Ring
        </a>
        <Link className="header-cta" href={mapUrl} target="_blank" rel="noreferrer">
          Find vej
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Åbn menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-toggle-lines">
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </span>
        </button>
      </div>
    </header>
  );
}
