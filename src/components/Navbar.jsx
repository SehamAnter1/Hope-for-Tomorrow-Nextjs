"use client";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white ">
            <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Hope for Tomorrow" className="h-[42px]" />
                <span className="font-bold text-lg text-primary">Hope for Tomorrow</span>
            </div>

            <div className="flex  text-black gap-6 items-center">
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#" className="hover:underline">
                        Project
                    </a>
                    <a href="#" className="hover:underline">
                        How it works
                    </a>
                    <a href="#" className="hover:underline">
                        About us
                    </a>
                    <a href="#" className="hover:underline">
                        FAQs
                    </a>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search" className="border rounded-full py-1 px-4 text-sm" />
                </div>
                <button className="bg-primary text-white rounded-full py-2 px-4 text-sm font-semibold">
                    Get started
                </button>
            </div>
        </nav>
    );
}
