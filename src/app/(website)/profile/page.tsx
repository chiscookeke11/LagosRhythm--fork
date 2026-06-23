import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "My Profile | Lagos Rhythm",
  description:
    "Manage your Lagos Rhythm profile. Update your name, country, and profile image. View your account details and booking history.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/profile",
  },
}

export default function Page() {
  return <ClientPage />
}
