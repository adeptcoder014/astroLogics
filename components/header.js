import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


export const Header = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-custom-gradient rounded-xl  shadow-md mb-2">
            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 ">
                    <div
                        onClick={() => router.push('/home')
                        }
                        className=" cursor-pointer w-screen flex items-between  justify-between">
                        <div className='flex items-center'>

                            <img
                                className="h-12 w-12"
                                src="/icons/logo.png"
                                alt="Logo"
                            />
                            <span className="ml-2 text-xl font-extrabold  text-white-800">AstroLogics</span>
                        </div>

                        <div className="h-10 w-10 flex items-center justify-center bg-gray-300 rounded-full">
                            <img
                                src='./zodiac/capricornSign.png'
                                alt="Person"
                                width={35}
                            />
                        </div>
                    </div>
                    <div
                        className="flex items-center"
                        onClick={toggleMenu}
                    >
                        <button
                            className="text-gray-800 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {
                isOpen ? (
                    <div className="bg-[#2D2E44]">
                        <div className="px-2 pt-2 pb-3 text-white   space-y-1 sm:px-3">
                            <Link href="/" className=" text-white block px-3 py-2  rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Home</a>
                            <Link href="/about" className="block px-3 text-white py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">About</a>
                            <Link href="/services" className="block px-3 py-2  text-white rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Services</a>
                            <Link href="/contact" className="block px-3 py-2 text-white rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">Contact</a>
                        </div>
                    </div>
                ) : null
            }
        </header >
    );
};

export default Header;
