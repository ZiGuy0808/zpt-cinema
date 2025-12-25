'use client';

import Link from 'next/link';
import { Search, Bell, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-colors duration-300 px-4 md:px-12 py-4 flex items-center justify-between",
            scrolled ? "bg-zinc-950/90 backdrop-blur-md" : "bg-gradient-to-b from-black/80 to-transparent"
        )}>
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold text-violet-500 tracking-tighter">
                    ZPT CINEMA
                </Link>
                <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-300">
                    <Link href="#" className="hover:text-white transition">Home</Link>
                    <Link href="#" className="hover:text-white transition">Movies</Link>
                    <Link href="#" className="hover:text-white transition">TV Shows</Link>
                    <Link href="#" className="hover:text-white transition">New & Popular</Link>
                </div>
            </div>

            <div className="flex items-center gap-6 text-zinc-300">
                <Search className="w-5 h-5 cursor-pointer hover:text-white transition" />
                <Bell className="w-5 h-5 cursor-pointer hover:text-white transition" />
                <div className="w-8 h-8 rounded bg-violet-600 flex items-center justify-center font-bold text-white text-xs">
                    ZG
                </div>
            </div>
        </nav>
    );
}
