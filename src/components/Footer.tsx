import Image from "next/image";
import Link from "next/link";
import { mapUrl, phoneHref, siteContent } from "@/data/siteContent";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="section-shell footer-layout">
        <div>
          <Link href="#top" className="footer-brand" aria-label="Til toppen af Kaffehuset">
            <Image
              src="/assets/new-logo.webp"
              alt="Kaffehuset logo"
              width={1024}
              height={747}
              sizes="96px"
            />
            <span>{siteContent.name}</span>
          </Link>
          <p>{siteContent.description}</p>
        </div>
        <div>
          <h2>Kontakt</h2>
          <address>
            <span>{siteContent.address.street}</span>
            <span>
              {siteContent.address.postalCode}, {siteContent.address.city}
            </span>
            <a href={phoneHref}>{siteContent.phone}</a>
            <Link href={mapUrl} target="_blank" rel="noreferrer">
              Find vej til caféen →
            </Link>
          </address>
        </div>
        <div>
          <h2>Åbent</h2>
          <p>Man–Tors 08.00–23.00</p>
          <p>Fre 08.00–00.00</p>
          <p>Lør 09.00–00.00</p>
          <p>Søn 09.00–23.00</p>
        </div>
      </div>
      <div className="section-shell">
        <div className="footer-bottom">
          <span>© {year} Kaffehuset. Alle rettigheder forbeholdes.</span>
          <span>Lavet med ☕ på Nørrebro</span>
        </div>
      </div>
    </footer>
  );
}
