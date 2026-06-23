import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Free E-Rhythm | Live Virtual Lagos Tour — No Cost, All Culture",
  description:
    "Join the Free E-Rhythm live virtual tour of Lagos, Nigeria. Experience the city's culture, people, and energy in real time — free, live, and unfiltered. Open to everyone worldwide.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/Free_E-Rhythm",
  },
  openGraph: {
    title: "Free E-Rhythm | Live Virtual Lagos Tour — No Cost, All Culture",
    description:
      "Join the Free E-Rhythm live virtual tour of Lagos. Experience the city's culture, people, and energy in real time — free, live, and unfiltered.",
    siteName: "Lagos Rhythm",
  },
}

const freeERhythmJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Free E-Rhythm — Live Virtual Tour of Lagos",
  "description": "Join our free live-streamed tours and experience the rhythm of Lagos in real time, guided by locals and powered by culture. Open-access window into the energy, beauty, and people of Lagos.",
  "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "organizer": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "url": "https://www.lagosrhythm.com"
  },
  "location": {
    "@type": "VirtualLocation",
    "url": "https://www.lagosrhythm.com/Free_E-Rhythm"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "description": "Free admission — open to everyone worldwide"
  }
}

export default function Page() {
  return (
    <>
      <JsonLd data={freeERhythmJsonLd} />
      <ClientPage />
    </>
  )
}
