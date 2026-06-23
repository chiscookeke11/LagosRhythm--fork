import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Share Your Feedback | Lagos Rhythm",
  description:
    "Tell us about your Lagos Rhythm tour experience. Rate your virtual or in-person tour, leave a testimonial, and help us improve. Your voice shapes the rhythm of Lagos.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/feedback",
  },
}

export default function Page() {
  return <ClientPage />
}
