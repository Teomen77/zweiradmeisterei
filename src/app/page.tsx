import { Hero } from "@/components/hero";
import { HoursContact } from "@/components/hours-contact";
import { Leistungen } from "@/components/leistungen";
import { Meister } from "@/components/meister";
import { Standort } from "@/components/standort";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BikeStore",
  name: site.name,
  telephone: site.phoneTel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.lat,
    longitude: site.lon,
  },
  founder: site.owner,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:30",
      closes: "18:00",
    },
  ],
  vatID: site.vatId,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Leistungen />
      <Meister />
      <HoursContact />
      <Standort />
    </>
  );
}
