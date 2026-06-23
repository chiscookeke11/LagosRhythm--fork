import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Exclusive Tour Bookings | Lagos Rhythm Admin",
  description: "Manage premium Exclusive E-Rhythm tour bookings. View, track, and manage private virtual tour reservations.",
}

export default function Page() {
  return <ClientPage />
}
