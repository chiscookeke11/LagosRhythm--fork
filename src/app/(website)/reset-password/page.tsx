import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Reset Password | Lagos Rhythm",
  description:
    "Reset your Lagos Rhythm account password. Enter your email to receive a password reset code and regain access to your tours, bookings, and profile.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/reset-password",
  },
}

export default function Page() {
  return <ClientPage />
}
