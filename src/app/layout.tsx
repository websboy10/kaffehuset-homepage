import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { siteContent } from "@/data/siteContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.canonicalUrl),
  title: "Kaffehuset | Café på Nørrebrogade",
  description:
    "Besøg Kaffehuset på Nørrebrogade 183 til kaffe, brunch, frokost, kager, kolde drikke og hyggelige stunder med brætspil.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Kaffehuset | Café på Nørrebrogade",
    description:
      "Et varmt caféhus på Nørrebro med kaffe, brunch, frokost, kager, kolde drikke og plads til nærvær.",
    url: siteContent.canonicalUrl,
    siteName: "Kaffehuset",
    images: [
      {
        url: "/assets/butik-front.jpg",
        width: 1865,
        height: 1080,
        alt: "Kaffehusets facade på Nørrebrogade"
      }
    ],
    locale: "da_DK",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
