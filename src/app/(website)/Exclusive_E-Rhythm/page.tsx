import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Exclusive E-Rhythm | Private Live Virtual Tour of Lagos",
  description:
    "Book an exclusive, private live virtual tour of Lagos, Nigeria. Curated for your group — interactive, unfiltered, and unforgettable. Custom themes, real-time guides, and premium Lagos experiences.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/Exclusive_E-Rhythm",
  },
  openGraph: {
    title: "Exclusive E-Rhythm | Private Live Virtual Tour of Lagos",
    description:
      "Book an exclusive, private live virtual tour of Lagos. Curated for your group — interactive, unfiltered, and unforgettable.",
    siteName: "Lagos Rhythm",
  },
}

const exclusiveERhythmJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Exclusive E-Rhythm — Private Live Virtual Tour of Lagos",
  "description": "Your private tour of Lagos — live, curated, and unforgettable. A real-time, interactive Lagos experience designed just for your group, wherever you are in the world.",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "organizer": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "url": "https://www.lagosrhythm.com"
  },
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.lagosrhythm.com/Exclusive_E-Rhythm"
  },
  "offers": {
    "@type": "Offer",
    "price": "60",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Private 30-60 min HD livestream with real-time local guide. Pricing starts at $60 for groups of 1-3."
  }
}

export default function Page() {
  return (
    <>
      <JsonLd data={exclusiveERhythmJsonLd} />
      <ClientPage />
    </>
  )
}
