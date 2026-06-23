import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Gallery Control | Lagos Rhythm Admin",
  description: "Manage Lagos Rhythm photo gallery. Upload, organize, and curate images showcasing Lagos streets, culture, and landmarks.",
}

export default function Page() {
  return <ClientPage />
}
