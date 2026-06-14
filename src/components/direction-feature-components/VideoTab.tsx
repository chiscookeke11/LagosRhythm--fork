import { LocationResourceDataType } from "@/Types/LocationResourceDataType"
import { groupStreetRhythmResourcesByLanguage, getStreetRhythmResourceLabel } from "@/lib/street-rhythm"
import StreetRhythmCarousel from "../street-rhythm-2-components/StreetRhythmCarousel"

interface VideoTabProps {
    data: LocationResourceDataType[] | null
    fromStop?: string
    toStop?: string
}

export default function VideoTab({ data }: VideoTabProps) {
    const groupedVideos = groupStreetRhythmResourcesByLanguage(data ?? [])

    if (groupedVideos.length < 1) {
        return (
            <div className="w-full h-[10vh] flex items-center justify-center">
                <h4 className="text-xl font-medium font-merriweather text-[#05073C]">No video found!</h4>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <span className="text-sm font-medium text-[#05073C]">
                {data?.length} video{data && data?.length > 1 ? "s" : ""} found
            </span>

            {groupedVideos.map((group) => (
                <section key={group.language} className="w-full space-y-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                        <h4 className="text-lg font-black text-[#05073C]">
                            {group.label}
                        </h4>
                        <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-[#05073C]">
                            {group.items.length} clip{group.items.length === 1 ? "" : "s"}
                        </span>
                    </div>

                    <StreetRhythmCarousel
                        items={group.items}
                        renderSlide={(video) => (
                            <article
                                key={video.id}
                                className="w-full h-full rounded-2xl border border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-3"
                            >
                                <video
                                    className="w-full h-[220px] bg-black rounded-lg overflow-hidden"
                                    preload="metadata"
                                    controls
                                >
                                    <source src={video.content_url} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <div className="space-y-1">
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
                        )}
                    />
                </section>
            ))}
        </div>
    )
}
