import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Street Rhythm — Navigate Lagos Like a Local | Danfo Routes & Transit Guide",
  description:
    "Explore Lagos street transit with Street Rhythm. Get real-time danfo and BRT route directions, community updates, video guides, and local commute tips. Navigate Lagos like a true Lagosian.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/street-rhythm",
  },
  openGraph: {
    title: "Street Rhythm — Navigate Lagos Like a Local | Danfo Routes & Transit Guide",
    description:
      "Get real-time Lagos street transit directions, danfo and BRT route guides, and community updates. Navigate Lagos like a local.",
    siteName: "Lagos Rhythm",
  },
}

const streetRhythmJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Street Rhythm — Lagos Transit Navigation",
  "description": "Navigate Lagos like a local with real-time danfo and BRT route directions, video guides, community updates, and local commute tips.",
  "url": "https://www.lagosrhythm.com/street-rhythm",
  "applicationCategory": "TravelApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "url": "https://www.lagosrhythm.com"
  }
}

export default function Page() {
  return (
    <>
      <JsonLd data={streetRhythmJsonLd} />
      <ClientPage />
    </>
  )
}
