import type { Metadata } from "next"
import ReusableHero from "@/components/ReusableHero"

export const metadata: Metadata = {
  title: "Lagos Rhythm Store | African Travel Merch & Gifts",
  description:
    "Shop Lagos-themed merchandise, African travel accessories, souvenirs, and virtual tour gift cards from Lagos Rhythm. Coming soon.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/store",
  },
}

export default function Page() {
    return (
        <div>
               <ReusableHero pageTitle="Store" image="/store/store-image.jpg" subtitle="Launching  soon" />
        </div>
    )
}