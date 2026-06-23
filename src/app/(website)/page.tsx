import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Lagos Rhythm — Live the Vibe, Please the Mind | Virtual & In-Person Lagos Tours",
  description:
    "Discover Lagos, Nigeria through immersive virtual tours, in-person travel experiences, street transit guides, and cultural storytelling. Book free and exclusive tours of Africa's most vibrant megacity.",
  alternates: {
    canonical: "https://www.lagosrhythm.com",
  },
  openGraph: {
    title: "Lagos Rhythm — Live the Vibe, Please the Mind",
    description:
      "Discover Lagos, Nigeria through immersive virtual tours, in-person travel experiences, street transit guides, and cultural storytelling.",
    url: "https://www.lagosrhythm.com",
    siteName: "Lagos Rhythm",
    locale: "en_NG",
    type: "website",
  },
}

export default function Page() {
  return <ClientPage />
}
