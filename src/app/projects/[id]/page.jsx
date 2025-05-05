import {notFound} from "next/navigation";
import "swiper/css";
import "swiper/css/thumbs";
import {apiUrls} from "@/services/apiUrls";
import {useSWRFetcher} from "@/hooks/useSWRFetcher";
import Swiper_Component from "@/components/Swiper_Component";
import {baseURL} from "@/utilis/helpers";
import General_Layout from "@/layouts/General_Layout";
import Donation_Card from "@/components/Donation_Card";

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
                    <Swiper_Component images={[{image: project?.cover}, ...project?.images]} />
                    <h1 className="text-2xl font-semibold mb-2">{project.title}</h1>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                </div>

                {/* Right section: Donation card */}
                <Donation_Card project={project} />
            </div>
        </General_Layout>
    );
}
