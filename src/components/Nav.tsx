import React from 'react';
import Link from 'next/link';
import Button from "@/components/Button";

const Nav: React.FC = () => {
    return (
        <nav className="text-white p-4">
            <div className="flex justify-between">
                <div className="text-xl font-bold text-blue-800">Issue Tracker</div>
                <div>
                    <Link href="/" className="mx-4 hover:underline">Home</Link>
                    <Button text="Login" href="/login" />
                </div>
            </div>
        </nav>
    );
};

export default Nav;
