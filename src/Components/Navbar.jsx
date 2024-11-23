"use client"

import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Logo from '../../public/logo.png'
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow dark:bg-gray-800 bg-[#F5F3FF] px-8 text-sm">
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
                            <a
                                href="#"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                Shop
                            </a>
                            <a
                                href="#"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                Deals
                            </a>
                            <a
                                href="#"
                                className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                            >
                                What's new
                            </a>
                        </div>

                        <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2 space-x-4 items-center">
                            <div className="flex items-center space-x-3 bg-white px-2 rounded-lg">
                                <span><IoIosSearch size={20} /></span>
                                <input type="text" placeholder="search" className="outline-none p-2 rounded-lg" />
                            </div>
                            <button className="btn btn-ghost border border-green-500 rounded-lg"><FaShoppingCart size={24} color="gray" />
                                <div className="badge badge-ghost text-sm">0</div>
                            </button>

                            <button className="btn btn-ghost ">
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
