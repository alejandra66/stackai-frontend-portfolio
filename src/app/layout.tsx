import React from 'react';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';
import '../styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>AI-Powered Issue Tracker | Track, Manage, and Resolve Issues Efficiently</title>
            <meta
                name="description"
                content="AI-powered issue tracker that helps teams efficiently track, manage, and resolve issues, boosting productivity and problem-solving with smart automation."
            />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="#" />
        </head>
        <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mb-8">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
