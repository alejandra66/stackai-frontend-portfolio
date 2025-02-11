import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer
            className="fixed bottom-0 left-0 z-20 w-full p-4 border-t border-gray-200 shadow-sm md:flex md:items-center md:justify-between md:p-6"
            aria-label="Footer"
        >
            <span className="text-sm text-gray-600 sm:text-center">
                © 2023 All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 sm:mt-0">
                <li>
                    <a
                        href="/about"
                        className="hover:underline mr-4 md:mr-6"
                        aria-label="Learn more about us on the About page"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/privacy-policy"
                        className="hover:underline mr-4 md:mr-6"
                        aria-label="Read our Privacy Policy"
                    >
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a
                        href="/licensing"
                        className="hover:underline mr-4 md:mr-6"
                        aria-label="View our Licensing information"
                    >
                        Licensing
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="hover:underline"
                        aria-label="Contact us for more information"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
