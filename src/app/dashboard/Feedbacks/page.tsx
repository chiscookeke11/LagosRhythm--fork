import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Customer Feedback | Lagos Rhythm Admin",
  description: "View and manage customer feedback, testimonials, and ratings. Track tour experience reviews and satisfaction.",
}

export default function Page() {
  return <ClientPage />
}
