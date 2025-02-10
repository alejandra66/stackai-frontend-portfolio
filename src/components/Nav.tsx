"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <nav className="p-6" aria-label="Main Navigation">
            <div className="flex justify-between items-center">
                <a href="/" aria-label="Homepage">
                    <img
                        src="/images/stackLogo.svg"
                        alt="AI-Powered Issue Tracker Logo"
                        className="w-[121.57px] h-[28px]"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center space-x-6">
                    {["Home", "About", "Login"].map((label) => (
                        <Link
                            key={label}
                            href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                            className="hover:underline text-lg"
                            aria-label={`Go to ${label} page`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Button className="w-20 text-center" text="Sign up" href="/signup" aria-label="Sign up for a new account" />
                </div>

                {/* Hamburger Icon (Mobile) */}
                <button
                    className="md:hidden"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle navigation menu"
                >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`${isOpen ? "block" : "hidden"} text-white md:hidden flex flex-col items-center space-y-4 mt-4 bg-gradient-to-r from-stackBlue to-pink-300 p-4 rounded-lg shadow-lg`}
                role="menu"
            >
                {["Home", "About", "Login"].map((label) => (
                    <Link
                        key={label}
                        href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                        className="hover:underline"
                        aria-label={`Go to ${label} page`}
                    >
                        {label}
                    </Link>
                ))}
                <Button text="Sign Up" href="/signup" aria-label="Sign up for a new account" />
            </div>
        </nav>
    );
}

