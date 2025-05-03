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
                                className="block border rounded-xl overflow-hidden hover:shadow-md transition"
                            >
                                <Image
                                    src={project.cover}
                                    alt={project.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold">{project.title}</h2>
                                    <p className="text-sm text-gray-500">
                                        {project.category} · {project.country}
                                    </p>
                                    <div className="mt-2 h-2 bg-gray-200 rounded-full">
                                        <div
                                            className="h-2 bg-indigo-500 rounded-full"
                                            style={{width: `${+project?.progress}%`}}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1">
                                        ${project.donations_amount.toLocaleString()} raised of $
                                        {project.price_goal.toLocaleString()}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </General_Layout>
    );
}
