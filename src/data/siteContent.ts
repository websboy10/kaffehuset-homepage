export const siteContent = {
  name: "Kaffehuset",
  description:
    "Et varmt caféhus på Nørrebrogade med kaffe, brunch, frokost, kager, kolde drikke og plads til brætspil, samtaler og nærvær.",
  canonicalUrl: "https://example.dk",
  address: {
    street: "Nørrebrogade 183",
    postalCode: "Indsæt postnummer",
    city: "København N",
    country: "DK"
  },
  phone: "+45 30 30 58 82",
  email: "hello@example.dk",
  hero: {
    eyebrow: "Café på Nørrebrogade",
    title: "Kaffehuset",
    intro:
      "Kom forbi til friskbrygget kaffe, generøs brunch, frokost, søde fristelser og en rolig pause midt på Nørrebro.",
    primaryCta: "Find vej",
    secondaryCta: "Se menuen",
    callCta: "Ring nu"
  },
  introduction: {
    title: "Et sted at lande, mødes og blive hængende",
    text:
      "Kaffehuset er skabt til de små hverdagsritualer: morgenkaffen før dagen begynder, frokosten med en ven, en sød eftermiddagspause eller en aften med brætspil omkring bordet."
  },
  visit: {
    title: "Besøg os på Nørrebrogade",
    text:
      "Du finder Kaffehuset på hjørnet ved Nørrebrogade 183. Kig ind uden reservation, tag plads i caféen eller slå dig ned udenfor, når København viser sig fra sin milde side.",
    kitchenHours: [
      { label: "Hverdage", value: "09.00-21.00" },
      { label: "Weekender", value: "10.00-21.00" }
    ],
    cafeHours: [
      { label: "Man-tors", value: "08.00-23.00" },
      { label: "Fredag", value: "08.00-00.00" },
      { label: "Lørdag", value: "09.00-00.00" },
      { label: "Søndag", value: "09.00-23.00" }
    ]
  },
  navigation: [
    { label: "Menu", href: "#menu" },
    { label: "Stemning", href: "#stemning" },
    { label: "Galleri", href: "#galleri" },
    { label: "Besøg", href: "#besog" }
  ]
} as const;

export const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=N%C3%B8rrebrogade%20183%20K%C3%B8benhavn";

export const phoneHref = `tel:${siteContent.phone.replaceAll(" ", "")}`;
