import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import {apiUrls} from "@/services/apiUrls";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    const {data, isLoading, isError, error} = useSWRFetcher(apiUrls.latestProjects);

    return (
        <section className="flex pt-[20px] md:pt-[56px] flex-col-reverse md:flex-row items-center justify-between ">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-6">
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

            {/* Right Section */}
            <div className="md:w-1/2 flex space-y-4 relative">
                <div className="space-y-4 bg-white ">
                    {isLoading && <p>Loading projects...</p>}
                    {isError && <p>Error loading projects</p>}
                    <div className="grid gap-[16px]">
                        {data &&
                            data.map((project) => (
                                <div
                                    key={project.id}
                                    className="flex p-[8px_12px] items-center shadow-md  rounded-[12px] w-[375px]  overflow-hidden gap-4"
                                >
                                    <Image
                                        src={project?.cover}
                                        alt={project?.title}
                                        width={147}
                                        height={100}
                                        className="rounded-md h-full object-cover"
                                    />
                                    <div className="flex-1 grid gap-[12px]">
                                        <h3 className="font-semibold text-[#171A1F] text-sm">{project?.title}</h3>
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
                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="text-primary text-sm underline"
                                            >
                                                View more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <Image src="/woman.svg" alt="Hero" width={231} height={400} className="ms-[-35px]" />
            </div>
        </section>
    );
}
