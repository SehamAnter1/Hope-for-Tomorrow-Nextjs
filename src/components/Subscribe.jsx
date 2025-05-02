import {subscribe_illustration_character_icon, subscribe_rign_icon} from "@/assets/icons";
import Image from "next/image";

export default function Subscription() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-20">
            {/* Left Illustration */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">{subscribe_illustration_character_icon}</div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 text-center md:text-left">
                {subscribe_rign_icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                    Get incredible stories, promotions, & offers in your inbox
                </h3>

                <form className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="email"
                        placeholder="youremail@example.com"
                        className="w-full md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button type="submit" className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-md">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
