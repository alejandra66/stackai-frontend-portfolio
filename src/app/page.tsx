import React from 'react';
import Button from "@/components/Button";

export default function HomePage() {
    return (
        <div role="main" className="flex items-center justify-center min-h-screen px-4 sm:px-8 bg-gray-50">
            <div className="flex flex-col items-center text-center max-w-3xl sm:max-w-4xl w-full">
                {/* Main Heading */}
                <h1
                    className="abril-fatface-regular font-extrabold text-secondary text-4xl sm:text-5xl md:text-5xl lg:text-7xl mb-6"
                    lang="en"
                    aria-label="AI-Powered Issue Tracker for Smarter Problem Solving"
                >
                    <span className="bg-gradient-to-r from-stackBlue to-pink-300 bg-clip-text text-transparent">AI-Powered <span className=" text-black underline decoration-blue-500 decoration-4">Issue Tracker</span> </span>
                    for Smarter Problem Solving
                </h1>

                {/* Subheading */}
                <h2
                    className="passion-one-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-primary mb-6 sm:mb-8"
                    aria-label="Track, Manage, and Resolve Issues with Ease"
                >
                    Track, Manage, and Resolve Issues with Ease
                </h2>

                {/* Call to Action or any button */}
                <div className="flex justify-center w-full">
                    <Button
                        className="bg-stackBlue text-white font-semibold py-3 px-6 sm:px-8 rounded-lg shadow-md
                            hover:bg-aiBlue transition duration-200"
                        text="Get Started"
                        href="/signup"
                        aria-label="Get started with our issue tracker"
                    />
                </div>
            </div>
        </div>
    );
}

