import {check_how_to_work_icon, gift_how_to_work_icon, world_how_to_work_icon} from "@/assets/icons";
import React from "react";

export default function How_It_Works() {
    return (
        <section className="  bg-[#392396] text-white py-16 px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center mb-12">How it works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3  gap-8 mb-16 text-center">
                    {[
                        {
                            icon: check_how_to_work_icon,
                            title: "Enim nulla nostrud cill",
                            desc: "Dolore excepteur adipisicing incididunt incididunt magna",
                        },
                        {
                            icon: gift_how_to_work_icon,
                            title: "Cillum et occaecat nos",
                            desc: "Incididunt occaecat est enim minim in mollit laborum",
                        },
                        {
                            icon: world_how_to_work_icon,
                            title: "Culpa do laborum incididunt",
                            desc: "Veniam ea tempor id in adipisicing labore ut nisi aute est eu.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#301E7F]/80 mx-auto w-[368px] rounded-lg p-6 flex flex-col items-center gap-4"
                        >
                            <div className="text-4xl">{item.icon}</div>
                            <h3 className="text-[20px] font-semibold">{item.title}</h3>
                            <p className="text-sm text-gray-200">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-[30px] md:gap-[80px] lg:gap-[100px] text-center">
                    {[
                        {label: "Years", value: "21"},
                        {label: "Dollars", value: "$877M"},
                        {label: "Donors", value: "1,793,907"},
                        {label: "Projects", value: "35,706"},
                        {label: "Countries", value: "175+"},
                        {label: "Companies", value: "580"},
                    ].map((stat, i) => (
                        <div key={i}>
                            <p className="text-cyan-300 text-[36px] font-bold">{stat.value}</p>
                            <p className="text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
