import { LocationResourceDataType } from "@/Types/LocationResourceDataType"
import { getStreetRhythmResourceLabel } from "@/lib/street-rhythm"
import StreetRhythmCarousel from "../street-rhythm-2-components/StreetRhythmCarousel"

interface VideoTabProps {
    data: LocationResourceDataType[] | null
    fromStop?: string
    toStop?: string
}

export default function VideoTab({ data }: VideoTabProps) {
    if (!data || data.length < 1) {
        return (
            <div className="w-full h-[10vh] flex items-center justify-center">
                <h4 className="text-xl font-medium font-merriweather text-[#05073C]">No video found!</h4>
            </div>
        )
    }

    const sortedData = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <span className="text-sm font-medium text-[#05073C]">
                {data.length} video{data.length > 1 ? "s" : ""} found
            </span>

            <div className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] mx-auto">
                <StreetRhythmCarousel
                    items={sortedData}
                    singleSlide
                    navBelow
                    renderSlide={(video) => {
                        const languageName = video.language
                            ? video.language.charAt(0).toUpperCase() + video.language.slice(1).toLowerCase()
                            : "General"

                        return (
                            <article
                                key={video.id}
                                className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-3"
                            >
                                <video
                                    className="w-full aspect-[9/16] bg-black rounded-lg overflow-hidden object-cover"
                                    preload="metadata"
                                    controls
                                >
                                    <source src={video.content_url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <div className="space-y-2">
                                    <span className="inline-block rounded-full bg-[#D4422C] text-white text-xs font-semibold px-3 py-1">
                                        {languageName}
                                    </span>
                                    <p className="text-sm font-bold text-[#05073C]">
                                        {getStreetRhythmResourceLabel(video)}
                                    </p>
                                    {video.description && (
                                        <p className="text-sm text-gray-700 line-clamp-3">
                                            {video.description}
                                        </p>
                                    )}
                                </div>
                            </article>
                        )
                    }}
                />
            </div>
        </div>
    )
}
