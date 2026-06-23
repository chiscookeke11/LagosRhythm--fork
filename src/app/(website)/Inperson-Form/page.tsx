import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Book Your In-Person Lagos Tour | Tour Booking Form",
  description:
    "Complete your in-person Lagos tour booking. Fill out traveller details, select your preferred dates, choose a tour package, and secure your spot for an unforgettable Lagos experience.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/Inperson-Form",
  },
}

export default function Page() {
  return <ClientPage />
}
