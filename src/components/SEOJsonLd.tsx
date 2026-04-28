import { siteContent } from "@/data/siteContent";

export function SEOJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteContent.name,
    description: siteContent.description,
    servesCuisine: ["Kaffe", "Brunch", "Frokost", "Kager", "Kolde drikke"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContent.address.street,
      addressLocality: siteContent.address.city,
      postalCode: siteContent.address.postalCode,
      addressCountry: siteContent.address.country
    },
    telephone: siteContent.phone,
    openingHours: ["Mo-Th 08:00-23:00", "Fr 08:00-00:00", "Sa 09:00-00:00", "Su 09:00-23:00"],
    url: siteContent.canonicalUrl,
    image: `${siteContent.canonicalUrl}/assets/butik-front.jpg`
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
