import JsonLd from "./JsonLd"

interface VideoData {
  content_url: string
  title?: string
  subtitle?: string
  description?: string
  landmark_title?: string
  landmark_name?: string
}

interface StreetRhythmVideoSchemaProps {
  videos: VideoData[] | null
  routeKey?: string
}

export default function StreetRhythmVideoSchema({
  videos,
  routeKey,
}: StreetRhythmVideoSchemaProps) {
  if (!videos || videos.length === 0) return null

  const videoObjects = videos.map((video) => {
    const name =
      video.landmark_title ??
      video.landmark_name ??
      video.title ??
      video.subtitle ??
      "Route video"

    const description =
      video.description ?? `Video guide for route ${routeKey ?? ""}`.trim()

    return {
      "@type": "VideoObject",
      name,
      description,
      thumbnailUrl: video.content_url,
      contentUrl: video.content_url,
      uploadDate: new Date().toISOString().split("T")[0],
    }
  })

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: videoObjects.map((video, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: video,
    })),
  }

  return <JsonLd data={schema} />
}
