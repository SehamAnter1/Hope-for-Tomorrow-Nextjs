"use client";
import Hero from "@/components/Hero";
import Stipe_Payment from "@/services/Pay_With_Stripe_Button";
import Explore_Projects from "./Explore_Projects";
export default function Home() {
    return (
        <div className="grid container mx-auto">
            <Hero />
            <Explore_Projects />
        </div>
    );
}
