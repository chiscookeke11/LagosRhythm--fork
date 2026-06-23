import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Virtual Tours of Lagos | Live & Interactive Online Experiences",
  description:
    "Join free and exclusive live virtual tours of Lagos, Nigeria. Experience the culture, streets, food, art, and nightlife of Africa's most vibrant city — guided by locals, streamed in real time.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/VirtualTour",
  },
  openGraph: {
    title: "Virtual Tours of Lagos | Live & Interactive Online Experiences",
    description:
      "Join live virtual tours of Lagos, Nigeria. Experience the culture, streets, food, art, and nightlife guided by locals in real time.",
    siteName: "Lagos Rhythm",
  },
}

export default function Page() {
  return <ClientPage />
}
