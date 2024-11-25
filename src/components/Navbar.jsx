import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-xl py-2 px-6 items-center fixed top-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 font-bold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow gap-3 text-black">
                        <li><NavLink to="/" className="text-base">Home</NavLink></li>
                        <li><NavLink to="/about" className="text-base"></NavLink></li>
                        <li><NavLink to="/project" className="text-base">Projects</NavLink></li>
                        <li><NavLink to="/blog" className="text-base"></NavLink></li>
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link to="/" className="text-2xl font-bold">Ahasan Habib</Link>
                </div>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-3 text-black text-base font-semibold">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about"></NavLink></li>
                    <li><NavLink to="/project">Projects</NavLink></li>
                    <li><NavLink to="/blog"></NavLink></li>
                </ul>
            </div>
            <div className="md:hidden navbar-end">
                <Link to="/" className="text-2xl font-bold">Ahasan Habib</Link>
            </div>
        </div>
    );
};

export default Navbar;
