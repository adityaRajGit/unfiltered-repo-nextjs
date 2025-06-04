"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaUser, FaSignInAlt, FaTimes } from 'react-icons/fa';

export const Header = () => {
    const [user] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when path changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Care', href: '/care' },
        { name: 'Community', href: '/community' },
        { name: 'Therapy', href: '/counsellor' },
        { name: 'About', href: '/pages/about' },
        { name: 'FAQ', href: '/faq' },
    ];

    return (
        <>
            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center p-5 border-b border-gray-200">
                    <Link href="/" className="flex items-center space-x-1 font-semibold text-lg">
                        <span>Stay</span>
                        <span className="font-light">Unfiltered</span>
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                <nav className="p-5">
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex font-semibold items-center py-2 px-3 rounded-lg ${pathname === item.href
                                            ? 'bg-teal-50 text-teal-600'
                                            : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        {user ? (
                            <Link
                                href="/profile"
                                className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 text-gray-700"
                            >
                                <FaUser className="mr-3" />
                                My Profile
                            </Link>
                        ) : (
                            <Link
                                href="/pages/login"
                                className="flex items-center py-2 px-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
                            >
                                <FaSignInAlt className="mr-3" />
                                Login / Sign Up
                            </Link>
                        )}
                    </div>
                </nav>
            </div>

            {/* Main Header */}
            <nav className="flex items-center justify-between px-4 sm:px-6 py-3 text-sm font-normal text-black bg-white shadow-sm sticky top-0 z-30">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Open menu"
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-1 font-semibold text-lg ml-2 md:ml-0">
                    <span>Stay</span>
                    <span className="font-light">Unfiltered</span>
                </Link>

                {/* Navigation Links - Desktop */}
                <ul className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`py-2 px-1 font-semibold transition-colors duration-200 ${pathname === item.href
                                        ? 'text-teal-600 border-b-2 border-teal-600'
                                        : 'text-gray-600 hover:text-teal-600'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* User Actions */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <Link href="/profile" className="flex items-center">
                            <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-teal-500 overflow-hidden">
                                <Image
                                    src="/avatar-placeholder.png"
                                    alt="User Profile"
                                    width={36}
                                    height={36}
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/pages/login"
                                className="hidden sm:inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors duration-200"
                            >
                                Login
                            </Link>
                            <Link
                                href="/pages/login"
                                className="md:hidden flex items-center p-2 rounded-full bg-teal-600 text-white hover:bg-teal-700"
                            >
                                <FaSignInAlt className="text-lg" />
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};