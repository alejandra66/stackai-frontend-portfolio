import React from "react";
import Link from "next/link";

interface ButtonProps {
    text: string;
    href: string;
    className?: string;
}

export default function Button({ text, href, className }: ButtonProps) {
    return (
        <Link
            href={href}
            className={`p-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semi-bold transition ${className}`}
        >
            {text}
        </Link>
    );
}
