import type { Metadata } from "next"
import AuthModal from "@/components/AuthModal"

export const metadata: Metadata = {
  title: "Sign In | Lagos Rhythm",
  description:
    "Sign in or create an account with Lagos Rhythm to book tours, access live virtual experiences, and explore Lagos culture and tourism.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/auth",
  },
}

export default function Page() {
    return (
        <div className="w-full  min-h-screen flex items-center justify-center py-48 px-[4%] bg-no-repeat bg-center bg-cover bg-gray-500  " style={{backgroundImage: "url('/in-person/inperson-form-bg.jpg')"}} >
            <AuthModal  />

        </div>
    )
}