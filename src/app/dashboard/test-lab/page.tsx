import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Test Lab | Lagos Rhythm Admin",
  description: "Preview and test all Street Rhythm media, routes, and resources from Firebase. Lagos Rhythm admin dashboard.",
}

export default function Page() {
  return <ClientPage />
}
