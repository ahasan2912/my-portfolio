import React, { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GoProject } from "react-icons/go";
import { MdOutlineContactPhone } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const toggleNavbar = () => setIsOpen(!isOpen);
    // Handle screen size changes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobile(false);
                setIsOpen(false); // Close menu when screen size is large
            } else {
                setIsMobile(true);
            }
        };

        window.addEventListener("resize", handleResize);
        // Cleanup on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <nav
            className="fixed bg-white top-0 w-full shadow-md z-50 transition-all duration-300">
            <div className="mx-auto flex justify-between items-center px-5 py-4">
                {/* Mobile Menu Button (Toggle Button) */}
                {isMobile && (
                    <button
                        onClick={toggleNavbar}
                        className="md:hidden text-2xl focus:outline-none mr-4"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                )}
                <div className="text-2xl font-bold md:text-left">
                    <Link to="/"><span className="text-blue-400">AHASAN'S WORLD</span> </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex space-x-6">
                    <li>
                        <NavLink to="/" className="hover:text-blue-500 font-semibold">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover:text-blue-500 font-semibold">
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className="hover:text-blue-500 font-semibold">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="hover:text-blue-500 font-semibold">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Social media link */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="https://github.com/ahasan2912" target="_blank"><FaGithub className="text-2xl text-blue-500" />
                    </Link>
                    <Link to="https://www.linkedin.com/in/ahasanhabib2912/" target="_blank"><FaLinkedin className="text-2xl text-blue-500" />
                    </Link>
                    <Link to="https://web.facebook.com/mdahashanhabib.siam" target="_blank"><FaFacebook className="text-2xl text-blue-500" />
                    </Link>
                </div>
            </div>
            {/* Mobile Menu - Sliding in from the left */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-100 z-40 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} w-1/2 shadow-md transition-transform duration-300`}>
                {/* Close Button */}
                <button
                    onClick={toggleNavbar}
                    className="absolute top-4 right-4 text-2xl focus:outline-none"
                >
                    <FiX />
                </button>

                <ul className="flex flex-col mt-16">
                    <li className="border-y flex items-center justify-start px-4">

                        <NavLink
                            to="/"
                            className="py-4 px-1 text-lg hover:bg-gray-200 flex items-center gap-1"
                            onClick={toggleNavbar}>
                            <FaHome className="text-lg" />
                            Home
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <NavLink
                            to="/about"
                            className="flex items-center gap-1 py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            <BiDetail className="text-lg" />
                            About Me
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <NavLink
                            to="/project"
                            className="flex items-center gap-1 py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            <GoProject className="text-lg" />
                            Projects
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <NavLink
                            to="/contact"
                            className="flex items-center gap-1 py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            <MdOutlineContactPhone className="text-lg" />
                            Contact
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <FaGithub className="text-lg" />
                        <NavLink
                            to="https://github.com/ahasan2912" target="_blank"
                            className="block py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            GitHub
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <FaLinkedin className="text-lg" />
                        <NavLink
                            to="https://www.linkedin.com/in/ahasanhabib2912/" target="_blank"
                            className="block py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            Linkedin
                        </NavLink>
                    </li>
                    <li className="border-b flex items-center justify-start px-4">
                        <FaFacebook className="text-lg" />
                        <NavLink
                            to="https://web.facebook.com/mdahashanhabib.siam" target="_blank"
                            className="block py-4 px-1 text-lg hover:bg-gray-200"
                            onClick={toggleNavbar}
                        >
                            Facebook
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

