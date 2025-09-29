"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
    const { user, isAuthenticated, logout } = useAuth();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
console.log("user",user)
    const toggleMenu = () => setMobileMenuOpen(prev => !prev);

    const navItems = [
        { label: "Project", href: "#" },
        { label: "How it works", href: "#" },
        { label: "About us", href: "#" },
        { label: "FAQs", href: "#" },
    ];

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <Link href="/home" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Hope for Tomorrow" className="h-[42px]" />
                    <span className="font-bold text-lg text-primary">Hope for Tomorrow</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center text-sm font-medium text-black">
                    {navItems.map(({ label, href }) => (
                        <Link key={label} href={href} className="hover:underline">
                            {label}
                        </Link>
                    ))}

                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-full py-1 px-4 text-sm"
                    />

                    {isAuthenticated ? (
                        <>
                            <span className="text-sm">Welcome, {user?.first_name?.split('@')}</span>
                            <button onClick={logout} className="text-sm text-red-500">Logout</button>
                        </>
                    ) : (
                        <>
                            <Button variant="text" href="/auth/login">Login</Button>
                            <Button href="/auth/register">Get started</Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-4 text-sm font-medium text-black">
                    {navItems.map(({ label, href }) => (
                        <Link key={label} href={href} className="block hover:underline">
                            {label}
                        </Link>
                    ))}

                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-gray-300 rounded-full py-1 px-4 text-sm w-full"
                    />

                    {isAuthenticated ? (
                        <div className="flex flex-col gap-2">
                            <span>Welcome, {user?.name}</span>
                            <button onClick={logout} className="text-red-500 text-left">Logout</button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            <Button variant="text" href="/auth/login">Login</Button>
                            <Button href="/auth/register">Get started</Button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
}
