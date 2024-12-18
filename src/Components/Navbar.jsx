"use client"

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Logo from '../../public/logo.png'
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    return (
        <nav className="shadow dark:bg-gray-800 bg-[#F5F3FF] lg:px-8 px-4 text-sm">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:space-x-40">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <Image src={Logo} alt="Logo" width={140} height={70} />
                        </a>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center lg:justify-between ${isOpen
                            ? "translate-x-0 opacity-100"
                            : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                            }`}
                    >
                        <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                            <Link
                                href="/"
                                className={`mt-2 transition-colors ${pathname === '/' && 'text-purple-500'} duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/store"
                                className={`mt-2 transition-colors ${pathname === '/store' && 'text-purple-500'} duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200`}
                            >
                                Shop
                            </Link>
                            <Link
                                href="/deals"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                Deals
                            </Link>
                            <Link
                                href="new"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                What's new
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4 mt-6 lg:mt-0 lg:-mx-2">
                            {/* Search Bar */}
                            <div className="flex items-center space-x-3 bg-white px-2 rounded-lg flex-shrink-0">
                                <span>
                                    <IoIosSearch size={20} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="search"
                                    className="outline-none p-2 rounded-lg flex-grow"
                                />
                            </div>

                            {/* Cart Button */}
                            <button className="btn btn-ghost border border-green-500 rounded-lg flex-shrink-0">
                                <FaShoppingCart size={24} color="gray" />
                                <div className="badge badge-ghost text-sm">0</div>
                            </button>

                            {/* User Button */}
                            <button className="btn btn-ghost flex-shrink-0">
                                <FaRegUser size={24} color="gray" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
