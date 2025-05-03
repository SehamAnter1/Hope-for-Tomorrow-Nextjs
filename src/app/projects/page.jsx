"use client";
import Link from "next/link";
import Image from "next/image";
import General_Layout from "@/layouts/General_Layout";
import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import {apiUrls} from "@/services/apiUrls";

export default function ProjectsPage() {
    const {data: projects, isLoading, isError} = useSWRFetcher(apiUrls.projects);

    return (
        <General_Layout>
            <div className="p-6 md:p-12">
                <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects?.map((project) => {
                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className=" grid  gap-3 rounded-xl overflow-hidden shadow-md transition"
                            >
                                <Image
                                    src={project?.cover}
                                    alt={project?.title}
                                    width={147}
                                    height={100}
                                    className="rounded-md w-full h-[192px] object-cover"
                                />
                                <div className="flex-1 grid p-[12px_16px_24px] gap-[12px]">
                                    <h3 className="font-semibold text-[#323842] text-sm">{project?.title}</h3>
                                    <p className="fon text-[#9095A0] text-sm">{project?.description?.slice(0, 100)}</p>
                                    <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{width: `${+project?.progress || 0}%`}}
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2">
                                            {project?.categories?.map((item, i) => (
                                                <p
                                                    key={i}
                                                    className="text-xs rounded-[12px] p-[3px_8px]  text-[#323842]  bg-[#F3F4F6]"
                                                >
                                                    {item}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </General_Layout>
    );
}
