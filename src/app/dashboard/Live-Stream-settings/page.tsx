import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Live Stream Settings | Lagos Rhythm Admin",
  description: "Configure live stream settings, tour schedules, and broadcast parameters for Lagos Rhythm virtual tours.",
}

export default function Page() {
  return <ClientPage />
}
