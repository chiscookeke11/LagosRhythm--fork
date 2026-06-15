import { LocationResourceDataType } from "@/Types/LocationResourceDataType"
import { getStreetRhythmResourceLabel } from "@/lib/street-rhythm"
import StreetRhythmCarousel from "../street-rhythm-2-components/StreetRhythmCarousel"

interface RecordingTabProps {
    data: LocationResourceDataType[] | null
}

export default function RecordingTab({ data }: RecordingTabProps) {
    if (!data || data.length < 1) {
        return (
            <div className="w-full h-[10vh] flex items-center justify-center">
                <h4 className="text-xl font-medium font-merriweather text-[#05073C]">No sound recording found!</h4>
            </div>
        )
    }

    const sortedData = [...data].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <span className="text-sm font-medium text-[#05073C]">
                {data.length} recording{data.length > 1 ? "s" : ""} found
            </span>

            <StreetRhythmCarousel
                items={sortedData}
                renderSlide={(sound) => {
                    const languageName = sound.language
                        ? sound.language.charAt(0).toUpperCase() + sound.language.slice(1).toLowerCase()
                        : "General"

                    return (
                        <article
                            key={sound.id}
                            className="w-full h-full bg-white py-4 px-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col items-start gap-3"
                        >
                            <div className="space-y-1">
                                <span className="inline-block rounded-full bg-[#D4422C] text-white text-xs font-semibold px-3 py-1">
                                    {languageName}
                                </span>
                                <p className="text-sm font-bold text-[#05073C]">
                                    {getStreetRhythmResourceLabel(sound)}
                                </p>
                                {sound.description && (
                                    <p className="text-sm text-gray-700 line-clamp-3">{sound.description}</p>
                                )}
                            </div>

                            <audio controls className="mt-1 w-full">
                                <source src={sound.content_url} type="audio/mpeg" />
                                Your browser does not support audio.
                            </audio>
                        </article>
                    )
                }}
            />
        </div>
    )
}
