import type { Metadata } from "next"
import BlogSection from "@/components/BlogsSection"
import NewsLetter from "@/components/NewsLetter"
import ReusableHero from "@/components/ReusableHero"
import JsonLd from "@/components/seo/JsonLd"

export const metadata: Metadata = {
  title: "Lagos Travel Blog | Lagos Rhythm",
  description:
    "Read articles and travel stories about Lagos culture, tourism, virtual tours, and local experiences. Insights from Lagos Rhythm on Nigerian travel, street transit, and cultural discovery.",
  alternates: {
    canonical: "https://www.lagosrhythm.com/blogs",
  },
  openGraph: {
    title: "Lagos Travel Blog | Lagos Rhythm",
    description:
      "Read articles and travel stories about Lagos culture, tourism, virtual tours, and local experiences.",
    siteName: "Lagos Rhythm",
  },
}

const blogsJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Lagos Rhythm Blog",
  "description": "Articles and travel stories about Lagos culture, tourism, virtual tours, and local experiences. Insights from Lagos Rhythm on Nigerian travel, street transit, and cultural discovery.",
  "url": "https://www.lagosrhythm.com/blogs",
  "about": {
    "@type": "Organization",
    "name": "Lagos Rhythm",
    "url": "https://www.lagosrhythm.com"
  }
}

export default function Page() {
    return (
        <div className="w-full h-full "  >
            <ReusableHero pageTitle="Blog" subtitle="Interesting facts and concepts" image="/blogs/blog-hero.jpg" />


            <div className="w-full flex flex-col gap-8 items-start justify-center bg-[#FDF4F1] py-[4%] px-[4%] " >
                <h1 className="text-[#05073C] font-bold text-2xl md:text-3xl font-playfair " >Articles by <span className="text-[#EF8F57] ">Lagos Rhythm</span></h1>
                <BlogSection />
            </div>
            <NewsLetter />
            <JsonLd data={blogsJsonLd} />
        </div>
    )
}