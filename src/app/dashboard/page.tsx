import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Admin Dashboard | Lagos Rhythm",
  description:
    "Lagos Rhythm admin dashboard. Manage street rhythm routes, blogs, gallery, feedback, tour bookings, and site operations.",
}

export default function Page() {
  return <ClientPage />
}
