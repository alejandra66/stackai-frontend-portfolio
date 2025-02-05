import React from 'react';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Issue tracker</title>
        </head>
        <body className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 to-pink-400 overflow-hidden relative">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
