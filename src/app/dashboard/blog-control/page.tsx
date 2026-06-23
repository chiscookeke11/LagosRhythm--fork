import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Blog Control | Lagos Rhythm Admin",
  description: "Create, edit, and manage blog posts. Publish articles about Lagos culture, travel tips, and tourism stories.",
}

export default function Page() {
  return <ClientPage />
}
