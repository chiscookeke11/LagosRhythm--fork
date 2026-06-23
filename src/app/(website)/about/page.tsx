import type { Metadata } from "next"
import ClientPage from "./ClientPage"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "About Lagos Rhythm | Our Story, Vision & Mission",
  description:
    "Learn about Lagos Rhythm — a tourism-tech startup redefining how the world experiences Lagos. Our mission, vision, story, partners, and commitment to authentic Nigerian cultural storytelling.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/about",
  },
  openGraph: {
    title: "About Lagos Rhythm | Our Story, Vision & Mission",
    description:
      "Learn about Lagos Rhythm — a tourism-tech startup redefining how the world experiences Lagos through authentic cultural storytelling.",
    siteName: "Lagos Rhythm",
  },
}

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Lagos Rhythm",
  "description": "Lagos Rhythm is a tourism-tech startup redefining how global audiences engage with culture and place in real time. We begin in Lagos, Nigeria, Africa's most vibrant megacity, offering immersive virtual and onsite tours.",
  "about": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "url": "https://www.lagosrhythm.com",
    "description": "Tourism-tech platform offering live virtual tours, in-person tours, and cultural experiences in Lagos, Nigeria.",
    "slogan": "Live the vibe, please the mind."
  },
  "mainEntity": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "foundingLocation": {
      "@type": "Place",
      "name": "Lagos, Nigeria"
    }
  }
}

export default function Page() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <ClientPage />
    </>
  )
}
