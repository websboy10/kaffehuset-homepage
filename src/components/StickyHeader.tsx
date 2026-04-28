import Image from "next/image";
import Link from "next/link";
import { HeaderScrollClass } from "./HeaderScrollClass";

export function StickyHeader() {
  return (
    <header id="site-header" className="site-header" aria-label="Kaffehuset">
      <HeaderScrollClass />
      <Link href="#top" className="brand-link" aria-label="Kaffehuset forside">
        <Image
          src="/assets/new-logo.webp"
          alt="Kaffehuset logo"
          width={1024}
          height={747}
          className="brand-mark"
          sizes="(max-width: 640px) 118px, 184px"
          priority
        />
      </Link>
    </header>
  );
}
