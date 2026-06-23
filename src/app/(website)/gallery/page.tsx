import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Photo Gallery | Lagos Rhythm — Lagos in Pictures",
  description:
    "Browse the Lagos Rhythm photo gallery. Explore stunning images of Lagos streets, culture, people, landmarks, and the vibrant energy of Nigeria's most dynamic city.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/gallery",
  },
  openGraph: {
    title: "Photo Gallery | Lagos Rhythm — Lagos in Pictures",
    description:
      "Explore stunning images of Lagos streets, culture, people, and landmarks. Browse the Lagos Rhythm photo gallery.",
    siteName: "Lagos Rhythm",
  },
}

export default function Page() {
  return <ClientPage />
}
