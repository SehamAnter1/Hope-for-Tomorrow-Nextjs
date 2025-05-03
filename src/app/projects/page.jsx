import Link from 'next/link';
import Image from 'next/image';
import General_Layout from "@/layouts/General_Layout";

// Mock list of projects
const projects = [
    {
        id: "1",
        title: "Empower a Girl: For Self-Reliance",
        thumbnail: "/images/project1.jpg",
        country: "Uganda",
        category: "Education",
        raised: 82567,
        goal: 100000,
    },
    {
        id: "2",
        title: "Build a Clean Water System",
        thumbnail: "/images/project2.jpg",
        country: "Kenya",
        category: "Health",
        raised: 40500,
        goal: 60000,
    },
];

export default function ProjectsPage() {
    return (
        <General_Layout>
            <div className="p-6 md:p-12">
                <h1 className="text-3xl font-bold mb-6">Our Projects</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        const percentage = Math.min((project.raised / project.goal) * 100, 100);
                        return (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                                className="block border rounded-xl overflow-hidden hover:shadow-md transition"
                            >
                                <Image
                                    src={project.thumbnail}
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
                                            style={{width: `${percentage}%`}}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-700 mt-1">
                                        ${project.raised.toLocaleString()} raised of ${project.goal.toLocaleString()}
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
