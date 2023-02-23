import React, { useState } from "react";

import LoginModal from './loginModal';
import RegisterModal from './registerModal';

import { logo } from "../assets";

const Navbar = (): JSX.Element => {
    const [navbar, setNavbar] = useState(false);

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    function openLoginModal() {
        setIsLoginOpen(true);
    }

    function openRegisterModal() {
        setIsRegisterOpen(true);
    }

    function closeModal() {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    }

    async function logOut(event: any) {
        event.preventDefault();

        try {
            window.location.href = 'http://localhost:3001/api/auth/google/logout';
        } catch (error: any) {
            console.log(error)
        };
    }

    return (
        <nav className="w-full bg-transparent">
            <div className="justify-between px-4 mx-auto border-b border-black lg:max-w-7xl md:items-center md:flex md:px-8 mb-28">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <img src={logo} alt="" width={90} height={35} />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 outline-none rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-white">
                                <a href="#home">Home</a>
                            </li>
                            <li className="text-black hover:text-white">
                                <a href="#features">Features</a>
                            </li>
                            <li className="text-black hover:text-white">
                                <a href="#contact">Products</a>
                            </li>
                            <li className="text-black hover:text-white">
                                <a href="#about">About US</a>
                            </li>
                            <li className="text-black hover:text-white">
                                <a href="#contact">Contact US</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 md:hidden">
                            <div
                                onClick={openLoginModal}
                                className="inline-block w-full px-4 py-2 text-center cursor-pointer text-white bg-gray-600 shadow rounded-md hover:bg-gray-800"
                            >
                                Sign in
                            </div>
                            <div
                                onClick={openRegisterModal}
                                className="inline-block w-full px-4 py-2 text-center cursor-pointer text-gray-800 bg-white shadow rounded-md hover:bg-gray-100"
                            >
                                Sign up
                            </div>
                            <div
                                onClick={logOut}
                                className="inline-block w-full px-4 py-2 text-center cursor-pointer text-gray-800 bg-white shadow rounded-md hover:bg-gray-100"
                            >
                                Log Out
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <div
                        onClick={openLoginModal}
                        className="px-4 py-2 text-white cursor-pointer bg-gray-600 shadow rounded-md hover:bg-gray-800"
                    >
                        Sign in
                    </div>
                    <div
                        onClick={openRegisterModal}
                        className="px-4 py-2 text-gray-800 cursor-pointer bg-white shadow rounded-md hover:bg-gray-100"
                    >
                        Sign up
                    </div>
                    <div
                        onClick={logOut}
                        className="inline-block w-full px-4 py-2 text-center cursor-pointer text-gray-800 bg-white shadow rounded-md hover:bg-gray-100"
                    >
                        Log Out
                    </div>
                </div>
            </div>
            <LoginModal isOpen={isLoginOpen} closeModal={closeModal} />
            <RegisterModal isOpen={isRegisterOpen} closeModal={closeModal} />
        </nav>
    );
};

export default Navbar;