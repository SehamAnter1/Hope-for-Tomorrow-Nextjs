import {subscribe_illustration_character_icon, subscribe_lines_icon, subscribe_rign_icon} from "@/assets/icons";
import Button from "./Button";
import {useState} from "react";
import axiosInstance from "@/services/axiosInstance";
import toast from "react-hot-toast";
import {apiUrls} from "@/services/apiUrls";

export default function Subscription() {
    const [email, setEmail] = useState("");
    // handleSubscribe
    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) return;

        try {
            const response = await axiosInstance.post(apiUrls.subscribe, {
                email: email,
            });
            if (response.status === 200 || response.status === 201) {
                console.log("response", response);
                toast.success("Subscription successful!");
                setEmail("");
            }
            return response.data;
        } catch (error) {
            console.error("Subscription error:", error);
            toast.error(`Error: ${error.response?.data?.message || error.message}`);
            throw error;
        }
    };
    return (
        <section className="flex  flex-col md:flex-row items-center justify-center gap-[60px] overflow-hidden bg-white py-12 px-6 md:px-20">
            {/* Left Illustration */}
            <div className="w-full relative z-50 md:w-1/3 max-h-[359px] mb-8 md:mb-0">
                {subscribe_illustration_character_icon}
            </div>

            {/* Right Content */}
            <div className="w-full md:w-2/3 max-w-[531px] grid gap-[24px] text-center md:text-left">
                <h3 className="text-xl md:text-[32px] mb-4">
                    Get incredible stories, promotions, & offers in your inbox
                </h3>

                <form onSubmit={handleSubscribe} className="flex relative flex-col md:flex-row items-center gap-4">
                    <span className="absolute bottom-[-35px] left-[-160px] ">{subscribe_rign_icon}</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="youremail@example.com"
                        className="w-full relative z-50 md:w-2/3 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <Button className={"w-[154px]"}>Subscribe</Button>
                    <span className="absolute right-[-40px] top-[-70px] ">{subscribe_lines_icon}</span>
                </form>
            </div>
        </section>
    );
}
