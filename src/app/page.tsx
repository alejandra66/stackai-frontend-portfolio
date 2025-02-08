import React from 'react';
import Button from "@/components/Button";

export default function HomePage() {
    return (
        <main className="flex justify-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
                <div className="flex flex-col items-center text-center w-full max-w-xl sm:max-w-3xl">
                    {/* Main Heading */}
                    <h1
                        className="abril-fatface-regular font-extrabold text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6"
                        lang="en"
                        aria-label="AI-Powered Issue Tracker for Smarter Problem Solving"
                    >
          <span className="bg-gradient-to-r from-stackBlue to-pink-300 bg-clip-text text-transparent">
            AI-Powered{" "}
              <span className="text-black underline decoration-blue-500 decoration-4">
              Issue Tracker
            </span>
          </span>{" "}
                        for Smarter Problem Solving
                    </h1>

                    {/* Subheading */}
                    <h2
                        className="passion text-primary mb-4 sm:mb-6"
                        aria-label="Track, Manage, and Resolve Issues with Ease"
                    >
                        Track, Manage, and Resolve Issues with Ease
                    </h2>

                    {/* CTA Button */}
                    <div className="w-full flex justify-center">
                        <Button
                            className="bg-stackBlue text-white font-semibold py-3 px-5 sm:px-8 rounded-lg shadow-md hover:bg-aiBlue transition duration-200"
                            text="Get Started"
                            href="/signup"
                            aria-label="Get started with our issue tracker"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
