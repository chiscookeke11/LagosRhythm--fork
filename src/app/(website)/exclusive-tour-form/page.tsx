import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Book Your Exclusive E-Rhythm Tour | Private Tour Booking",
  description:
    "Complete your exclusive Lagos virtual tour booking. Select your group size, preferred dates, and tour theme. Secure your private, live, interactive Lagos experience with Lagos Rhythm.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/exclusive-tour-form",
  },
}

export default function Page() {
  return <ClientPage />
}
