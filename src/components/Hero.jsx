import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import Image from "next/image";

export default function Hero() {
    const {data, isLoading, isError, error} = useSWRFetcher("/api/projects/latest/");

    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8">
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
            <div className="md:w-1/2 space-y-4 relative">
                <Image
                    src="/woman.svg"
                    alt="Hero"
                    width={231}
                    height={400}
                    className="absolute -right-10 bottom-0 hidden md:block"
                />
                <div className="space-y-4 bg-white shadow-md rounded-lg p-4">
                    {isLoading && <p>Loading projects...</p>}
                    {isError && <p>Error loading projects</p>}
                    {data &&
                        data.map((project) => (
                            <div key={project.id} className="flex items-center gap-4 border-b pb-4 last:border-none">
                                <Image
                                    src={project.cover || "/placeholder.png"}
                                    alt={project.title}
                                    width={80}
                                    height={80}
                                    className="rounded-md object-cover"
                                />
                                <div className="flex-1">
                                    <h3 className="font-semibold text-sm">{project.title}</h3>
                                    <p className="text-xs text-gray-500">{project.category}</p>
                                    <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                                        <div
                                            className="bg-primary h-1.5 rounded-full"
                                            style={{width: `${project.progress || 0}%`}}
                                        />
                                    </div>
                                </div>
                                <a href={`/projects/${project.id}`} className="text-primary text-sm underline">
                                    View more
                                </a>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
