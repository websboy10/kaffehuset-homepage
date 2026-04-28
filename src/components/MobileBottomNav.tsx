import Link from "next/link";
import { mapUrl, phoneHref } from "@/data/siteContent";

interface MobileNavItem {
  label: string;
  href: string;
  external?: boolean;
}

const mobileNavItems: MobileNavItem[] = [
  { label: "Menu", href: "#menu" },
  { label: "Besøg", href: "#besog" },
  { label: "Find vej", href: mapUrl, external: true },
  { label: "Ring", href: phoneHref }
];

export function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Primær mobilnavigation">
      {mobileNavItems.map((item) =>
        item.external ? (
          <Link key={item.label} href={item.href} target="_blank" rel="noreferrer">
            {item.label}
          </Link>
        ) : (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        )
      )}
    </nav>
  );
}
