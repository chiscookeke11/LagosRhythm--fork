import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "In-Person Lagos Tours | Curated Travel Experiences in Nigeria",
  description:
    "Experience Lagos in person with themed journeys. Book guided cultural tours, heritage walks, food explorations, and nightlife adventures. Step into Lagos — where the screen ends, life begins.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/InPersonTour",
  },
  openGraph: {
    title: "In-Person Lagos Tours | Curated Travel Experiences in Nigeria",
    description:
      "Experience Lagos in person with themed journeys. Book guided cultural tours, heritage walks, food explorations, and nightlife adventures.",
    siteName: "Lagos Rhythm",
  },
}

export default function Page() {
  return <ClientPage />
}
