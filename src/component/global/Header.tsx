"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [user, setUser] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Care', href: '/care' },
        { name: 'Community', href: '/community' },
        { name: 'Therapy', href: '/counsellor' },
        { name: 'About', href: '/about' },
        { name: 'FAQ', href: '/faq' },
    ];

    return (
        <nav className="flex items-center justify-between px-6 py-4 text-sm font-normal text-black bg-white shadow-sm">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-1 font-semibold text-lg">
                <span>Stay</span>
                <span className="font-light">Unfiltered</span>
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link
                            href={item.href}
                            className={`${pathname === item.href ? 'text-teal-600' : ''} hover:text-teal-600 font-semibold transition-colors duration-200`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
                {user ? (
                    <Link href="/profile" className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-teal-500 overflow-hidden">
                            <Image
                                src="/avatar-placeholder.png"
                                alt="User Profile"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                    </Link>
                ) : (
                    <>
                        <Link
                            href="/pages/login"
                            className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200"
                        >
                            Login
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
};