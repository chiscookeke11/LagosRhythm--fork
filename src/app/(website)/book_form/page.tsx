import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Book Your Free E-Rhythm Tour | Lagos Virtual Tour Registration",
  description:
    "Register for the Free E-Rhythm live virtual tour of Lagos. Fill out your details, select preferred dates, and get access to a free, live, interactive Lagos experience streamed in real time.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/book_form",
  },
}

export default function Page() {
  return <ClientPage />
}
