"use client";
import Hero from "@/components/Hero";
import Explore_Projects from "./Explore_Projects";
import How_It_Works from "./How_It_Works";
import Disaster_Recovery from "./Disaster_Recovery";
import Subscription from "../../components/Subscribe";
import General_Layout from "@/layouts/General_Layout";
export default function Home() {
    return (
        <General_Layout>
            <div className="grid container mx-auto">
                <Hero />
                <Explore_Projects />
            </div>
            <How_It_Works />
            <Disaster_Recovery />
            <Subscription />
        </General_Layout>
    );
}
