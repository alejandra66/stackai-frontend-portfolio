import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="fixed bottom-0 left-0 z-20 w-full bg-white p-4 border-t border-gray-200 shadow-sm md:p-6"
            aria-label="Footer"
        >
            {/* Container to center content and constrain max width */}
            <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center md:flex-row md:justify-between">
        <span className="text-sm text-gray-600 text-center">
          © 2023 All Rights Reserved.
        </span>
                <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-600 md:mt-0">
                    <li>
                        <Link
                            href="/#"
                            className="hover:underline mr-4 md:mr-6"
                            aria-label="Learn more about us on the About page"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#"
                            className="hover:underline mr-4 md:mr-6"
                            aria-label="Read our Privacy Policy"
                        >
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#"
                            className="hover:underline mr-4 md:mr-6"
                            aria-label="View our Licensing information"
                        >
                            Licensing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#"
                            className="hover:underline"
                            aria-label="Contact us for more information"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
