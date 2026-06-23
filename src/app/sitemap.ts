import type { MetadataRoute } from 'next'
import { collection, getDocs, orderBy, query, Timestamp } from 'firebase/firestore'
import { fireDB } from '@/app/config/firebaseClient'

interface BlogDoc {
  id: string
  addedAt?: Timestamp
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.lagosrhythm.com'
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'yearly', priority: 1 },
    { url: `${baseUrl}/street-rhythm`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/VirtualTour`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/InPersonTour`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/Free_E-Rhythm`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/Exclusive_E-Rhythm`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/blogs`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/FAQ`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/feedback`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/store`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/Flights`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/profile`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/auth`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/Privacy_Policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/terms_and_conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${baseUrl}/Live-stream`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
  ]

  let blogPages: MetadataRoute.Sitemap = []

  try {
    const q = query(collection(fireDB, 'blogs'), orderBy('addedAt', 'desc'))
    const snapshot = await getDocs(q)
    blogPages = snapshot.docs.map((doc) => {
      const data = doc.data() as BlogDoc
      return {
        url: `${baseUrl}/blogs/${doc.id}`,
        lastModified: data.addedAt?.toDate?.() ?? now,
        changeFrequency: 'weekly' as const,
        priority: 0.5,
      }
    })
  } catch {
    // If Firebase fails, skip blog pages rather than breaking the whole sitemap
  }

  return [...staticPages, ...blogPages]
}
