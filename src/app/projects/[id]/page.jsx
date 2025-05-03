import {notFound} from "next/navigation";

import "swiper/css";
import "swiper/css/thumbs";
import Button from "@/components/Button";
import {apiUrls} from "@/services/apiUrls";
import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import Swiper_Component from "@/components/Swiper_Component";
import {baseURL} from "@/utilis/helpers";
import {donors_heart_icon} from "@/assets/icons";
import General_Layout from "@/layouts/General_Layout";

export default async function ProjectPage({params}) {
    const {id} = await params;
    console.log("params", id);
    const res = await fetch(baseURL + apiUrls.projects + id + "/");
    if (!res.ok) return notFound();

    const project = await res.json();
    console.log("project", project);

    if (!project) return notFound();

    return (
        <General_Layout>
            <div className="p-6 container mx-auto md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left section: Images + Description */}
                <div className="lg:col-span-2">
                    <Swiper_Component images={project?.images} />
                    <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="flex gap-4">
                        {/* <Button variant="outline">Share</Button>
                    <Button className="bg-indigo-500 text-white">Donate now!</Button> */}
                    </div>
                </div>

                {/* Right section: Donation card */}
                <div className="bg-white shadow-md p-6 rounded-xl">
                    <h2 className="text-lg font-medium">{project.title}</h2>
                    <p className="text-sm text-gray-500">
                        {project.category} · {project.country}
                    </p>

                    <div className="mt-4 mb-2">
                        <span className="text-2xl font-bold">${+project?.donations_amount}</span>
                        <span className="text-sm text-gray-500"> raised of ${project?.price_goal} goal</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                        <div className="bg-indigo-500 h-2.5 rounded-full" style={{width: `${+project?.progress}%`}} />
                    </div>

                    <div className="flex gap-2 mb-4">
                        {/* <Button variant="outline" className="w-1/2">
                        Share
                    </Button>
                    <Button className="bg-indigo-500 text-white w-1/2">Donate now!</Button> */}
                    </div>

                    <ul className="text-sm text-gray-700 space-y-2">
                        {project?.top_donors?.map((donor, idx) => (
                            <li className="flex justify-between items-center" key={idx}>
                                <div className="flex items-center gap-2">
                                    {donors_heart_icon}
                                    <span>{donor.username.split("@")[0]}</span>
                                </div>
                                <span>${donor.total_donated}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </General_Layout>
    );
}
