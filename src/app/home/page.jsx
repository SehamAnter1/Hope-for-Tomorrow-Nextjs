"use client";
import Hero from "@/components/Hero";
import Stipe_Payment from "@/services/Pay_With_Stripe_Button";
export default function Home() {
    return (
        <div className="flex flex-col md:flex-row">
            <Hero />
        </div>
    );
}
