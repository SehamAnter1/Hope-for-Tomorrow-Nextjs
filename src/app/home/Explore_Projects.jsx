"use client";

import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import {apiUrls} from "@/services/apiUrls";
import Link from "next/link";
export default function Explore_Projects() {
    const {data: categories, isLoading, isError} = useSWRFetcher(apiUrls.categories);

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Something went wrong!</p>;

    return (
        <section className="bg-green-50 p-6 rounded-xl">
            <div className="flex flex-wrap items-start gap-3">
                <h2 className="text-primary font-semibold mb-4">
                    <span className="text-[24px] text-primary font-semibold">Explore project:</span>
                </h2>

                {categories?.map((category) => (
                    <span
                        key={category?.id}
                        className="px-4 flex items-center  py-2 text-sm bg-white text-gray-700 rounded-full transition"
                    >
                        {category?.title}
                    </span>
                ))}

                <Link
                    href={`/projects`}
                    className="px-4 py-2 self-start !h-fit text-sm bg-white text-gray-700 rounded-full cursor-pointer flex items-center gap-1 transition"
                >
                    See All <span className="mt-[-2px]">›</span>
                </Link>
            </div>
        </section>
    );
}
