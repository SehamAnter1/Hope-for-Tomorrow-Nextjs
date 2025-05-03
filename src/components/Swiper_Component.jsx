"use client";
import {Swiper, SwiperSlide} from "swiper/react";
import {Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import Image from "next/image";
import { useState} from "react";

export default function Swiper_Component({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            {/* Swiper gallery */}
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                thumbs={{swiper: thumbsSwiper}}
                modules={[Thumbs]}
                className="mb-4 rounded-xl overflow-hidden"
            >
                {images?.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src?.image}
                            alt={`Image ${index}`}
                            width={800}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnails Swiper */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                modules={[Thumbs]}
                className="rounded-md"
            >
                {images?.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src?.image}
                            alt={`Thumbnail ${index}`}
                            width={150}
                            height={80}
                            className="w-full h-20 object-cover cursor-pointer border border-gray-300 hover:border-indigo-500 rounded"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
