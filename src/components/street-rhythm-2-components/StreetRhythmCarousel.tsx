"use client"

import { ReactNode } from "react"
import { A11y, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

interface StreetRhythmCarouselProps<T> {
    items: T[]
    renderSlide: (item: T, index: number) => ReactNode
    singleSlide?: boolean
    navBelow?: boolean
}

export default function StreetRhythmCarousel<T>({
    items,
    renderSlide,
    singleSlide = false,
    navBelow = false
}: StreetRhythmCarouselProps<T>) {
    return (
        <div className={`w-full ${navBelow ? "flex flex-col items-center gap-4" : ""}`}>
            <div className={`w-full ${navBelow ? "order-1" : ""}`}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    navigation={navBelow ? {
                        nextEl: ".swiper-next-btn",
                        prevEl: ".swiper-prev-btn",
                    } : true}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={singleSlide ? undefined : {
                        640: {
                            slidesPerView: 1.15
                        },
                        768: {
                            slidesPerView: 1.5
                        },
                        1024: {
                            slidesPerView: 2.2
                        },
                        1280: {
                            slidesPerView: 2.6
                        }
                    }}
                    className="w-full !pb-12"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <div className="h-full">
                                {renderSlide(item, index)}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {navBelow && (
                <div className="order-2 flex items-center gap-4">
                    <button
                        type="button"
                        className="swiper-prev-btn flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#05073C] text-[#05073C] hover:bg-[#05073C] hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className="swiper-next-btn flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#05073C] text-[#05073C] hover:bg-[#05073C] hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}
