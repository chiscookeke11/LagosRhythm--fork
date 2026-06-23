import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Live Stream | Lagos Rhythm",
  description:
    "Watch Lagos Rhythm live virtual tours streaming in real time. Join the interactive live experience, chat with guides, and explore Lagos culture from anywhere in the world.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/Live-stream",
  },
}

export default function Page() {
  return <ClientPage />
}
