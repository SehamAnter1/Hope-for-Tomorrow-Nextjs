"use client";

import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import Image from "next/image";

export default function Hero() {
    const {data, isLoading, isError, error} = useSWRFetcher("/api/categories/");
    console.log("data", data);
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 ">
            <div className="md:w-1/2 space-y-6">
                {console.log("first", process.env.NEXT_PUBLIC_BASE_URL)}
                <h1 className="text-4xl text-secondary font-bold leading-snug">
                    Make changes and <br /> help the world
                </h1>
                <p className="text-secondary">
                    Hope for Tomorrow non-profit organization that collaborates with volunteers to deliver humanitarian
                    aid and disaster relief to vulnerable communities.
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary text-white py-2 px-6 rounded-md font-semibold">Donate now!</button>
                    <button className="border border-primary text-primary py-2 px-6 rounded-md font-semibold">
                        Learn more
                    </button>
                </div>
            </div>

            <Image src="woman.svg" alt="Hero" width={231} height={400} />
        </section>
    );
}
