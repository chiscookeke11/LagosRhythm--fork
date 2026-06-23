import type { Metadata } from "next"
import { doc, getDoc } from "firebase/firestore"
import { fireDB } from "@/app/config/firebaseClient"
import ClientPage from "./ClientPage"

interface BlogParams {
  id: string
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BlogParams>
}): Promise<Metadata> {
  const { id } = await params

  try {
    const docSnap = await getDoc(doc(fireDB, "blogs", id))
    if (docSnap.exists()) {
      const data = docSnap.data()
      const title = data.title || "Blog Post"
      return {
        title: `${title} | Lagos Rhythm Blog`,
        description:
          data.text?.replace(/<[^>]*>/g, "").slice(0, 160) ||
          "Read this article from the Lagos Rhythm blog — stories, insights, and travel guides about Lagos, Nigeria.",
        alternates: {
          canonical: `https://www.lagosrhythm.com/blogs/${id}`,
        },
        openGraph: {
          title: `${title} | Lagos Rhythm Blog`,
          description:
            data.text?.replace(/<[^>]*>/g, "").slice(0, 160) ||
            "Read this article from the Lagos Rhythm blog about Lagos culture and travel.",
          images: data.image ? [data.image] : undefined,
          siteName: "Lagos Rhythm",
        },
      }
    }
  } catch {
    // Fallback to basic metadata if fetch fails
  }

  return {
    title: "Blog Post | Lagos Rhythm",
    description:
      "Read this article from the Lagos Rhythm blog — stories, insights, and travel guides about Lagos, Nigeria.",
    alternates: {
      canonical: `https://www.lagosrhythm.com/blogs/${id}`,
    },
  }
}

export default function Page() {
  return <ClientPage />
}
