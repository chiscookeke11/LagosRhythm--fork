import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Street Rhythm Routes | Lagos Rhythm Admin",
  description: "Manage Street Rhythm transit routes. Create, edit, and organize video guides, audio, images, and text for Lagos danfo and BRT routes.",
}

export default function Page() {
  return <ClientPage />
}
