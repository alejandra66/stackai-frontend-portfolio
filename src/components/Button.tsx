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
            className={`p-3 bg-stackBlue hover:bg-aiBlue rounded-md text-white font-semi-bold transition ${className}`}
        >
            {text}
        </Link>
    );
}
