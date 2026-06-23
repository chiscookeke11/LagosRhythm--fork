import type { Metadata } from "next"
import ReusableHero from "@/components/ReusableHero"

export const metadata: Metadata = {
  title: "Book Flights | Lagos Rhythm Travel",
  description:
    "Book international flights from Lagos and across Africa. Find affordable flights from Nigeria, Ghana, Kenya, and more worldwide destinations via Lagos Rhythm.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/Flights",
  },
  openGraph: {
    title: "Book Flights | Lagos Rhythm Travel",
    description:
      "Book international flights from Lagos and across Africa. Find affordable flights from Nigeria, Ghana, Kenya, and more worldwide destinations.",
    siteName: "Lagos Rhythm",
  },
}

export default function Page() {
    return(
        <div>
            <ReusableHero pageTitle="Flights " image="/flights/flight-hero.jpg" subtitle="Launching soon" />
        </div>
    )
}