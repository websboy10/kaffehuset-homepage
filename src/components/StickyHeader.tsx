"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`} aria-label="Kaffehuset">
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
    </header>
  );
}
