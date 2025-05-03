"use client";
import {notFound} from "next/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Thumbs} from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import Image from "next/image";
import Button from "@/components/Button";
import {use, useState} from "react";
import {apiUrls} from "@/services/apiUrls";
import {useSWRFetcher} from "@/hooks/useSWRFetcher";

export default function ProjectPage({params}) {
    const {id} = params;
    console.log("params", id);
    const {data: project, isLoading, isError} = useSWRFetcher(`${apiUrls.projects}${id}/`);
    console.log("project", project);
    if (!project) return notFound();

    const percentage = Math.min((project.raised / project.goal) * 100, 100);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left section: Images + Description */}
            <div className="lg:col-span-2">
                {/* Swiper gallery */}
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    thumbs={{swiper: thumbsSwiper}}
                    modules={[Thumbs]}
                    className="mb-4 rounded-xl overflow-hidden"
                >
                    {project?.images?.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={src}
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
                    {project?.images?.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={src}
                                alt={`Thumbnail ${index}`}
                                width={150}
                                height={80}
                                className="w-full h-20 object-cover cursor-pointer border border-gray-300 hover:border-indigo-500 rounded"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex gap-4">
                    <Button variant="outline">Share</Button>
                    <Button className="bg-indigo-500 text-white">Donate now!</Button>
                </div>
            </div>

            {/* Right section: Donation card */}
            <div className="bg-white shadow-md p-6 rounded-xl">
                <h2 className="text-lg font-medium">{project.title}</h2>
                <p className="text-sm text-gray-500">
                    {project.category} · {project.country}
                </p>

                <div className="mt-4 mb-2">
                    <span className="text-2xl font-bold">${project?.raised?.toLocaleString()}</span>
                    <span className="text-sm text-gray-500"> raised of ${project?.goal?.toLocaleString()} goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{width: `${percentage}%`}} />
                </div>

                <div className="flex gap-2 mb-4">
                    <Button variant="outline" className="w-1/2">
                        Share
                    </Button>
                    <Button className="bg-indigo-500 text-white w-1/2">Donate now!</Button>
                </div>

                <ul className="text-sm text-gray-700 space-y-2">
                    {project?.donors?.map((donor, idx) => (
                        <li className="flex justify-between" key={idx}>
                            <span>{donor.name}</span>
                            <span>${donor.amount}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
