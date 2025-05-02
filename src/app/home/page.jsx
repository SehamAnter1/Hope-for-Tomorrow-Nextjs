"use client";
import Hero from "@/components/Hero";
import Stipe_Payment from "@/services/Pay_With_Stripe_Button";
import Explore_Projects from "./Explore_Projects";
import How_It_Works from "./How_It_Works";
import Disaster_Recovery from "./Disaster_Recovery";
import Subscription from "../../components/Subscribe";
export default function Home() {
    return (
        <div className="">
            <div className="grid container mx-auto">
                <Hero />
                <Explore_Projects />
            </div>
            <How_It_Works />
            <Disaster_Recovery />
            <Subscription />
        </div>
    );
}
