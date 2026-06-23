import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Free Tour Bookings | Lagos Rhythm Admin",
  description: "View and manage Free E-Rhythm tour registrations. Track participants, dates, and booking details for free Lagos virtual tours.",
}

export default function Page() {
  return <ClientPage />
}
