import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../assets/logO.png";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../authSlice/authSlice.js";

export default function Header() {
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    const { status, userData } = useSelector((state) => state.auth);

    const navLinkClass = ({ isActive }) =>
        `font-medium transition-colors duration-200 ${
            isActive
                ? "text-purple-700"
                : "text-gray-700 hover:text-purple-700"
        }`;

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="border-b border-gray-200">
                <div className="w-full h-20 px-4 sm:px-6 lg:px-10 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" onClick={closeMenu}>
                            <img
                                src={LogoImage}
                                alt="Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center justify-center gap-12">

                        <li>
                            <NavLink to="/" className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/Blogs" className={navLinkClass}>
                                Blogs
                            </NavLink>
                        </li>

                        {status && (
                            <>
                                <li>
                                    <NavLink
                                        to="/create-blog"
                                        className={navLinkClass}
                                    >
                                        Create Blog
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/my-blogs"
                                        className={navLinkClass}
                                    >
                                        My Blogs
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li>
                            <NavLink
                                to="/contact"
                                className={navLinkClass}
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/github"
                                className={navLinkClass}
                            >
                                Github
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={navLinkClass}
                            >
                                About
                            </NavLink>
                        </li>

                    </ul>

                    {/* Desktop Right */}
                    <div className="hidden lg:flex items-center">

                        {!status ? (
                            <div className="flex items-center gap-4">

                                <NavLink
                                    to="/User/Login"
                                    className="font-medium text-gray-700 hover:text-purple-700 transition"
                                >
                                    Log In
                                </NavLink>

                                <NavLink
                                    to="/User/Register"
                                    className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2 rounded-lg font-medium"
                                >
                                    Get Started
                                </NavLink>

                            </div>
                        ) : (
                            <div className="flex items-center gap-5">

                                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                    {userData?.fullname?.charAt(0).toUpperCase()}
                                </div>

                                <div className="flex flex-col leading-tight">
                                    <span className="font-semibold text-gray-900">
                                        {userData?.fullname}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        @{userData?.username}
                                    </span>
                                </div>

                                <button
                                    onClick={() => dispatch(logout())}
                                    className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg font-medium"
                                >
                                    Logout
                                </button>

                            </div>
                        )}

                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
                    >
                        {menuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
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

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="lg:hidden border-t bg-white shadow-md">
                        <div className="px-6 py-5 flex flex-col gap-5">

                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className={navLinkClass}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/Blogs"
                                onClick={closeMenu}
                                className={navLinkClass}
                            >
                                Blogs
                            </NavLink>

                            {status && (
                                <>
                                    <NavLink
                                        to="/create-blog"
                                        onClick={closeMenu}
                                        className={navLinkClass}
                                    >
                                        Create Blog
                                    </NavLink>

                                    <NavLink
                                        to="/my-blogs"
                                        onClick={closeMenu}
                                        className={navLinkClass}
                                    >
                                        My Blogs
                                    </NavLink>
                                </>
                            )}

                            <NavLink
                                to="/contact"
                                onClick={closeMenu}
                                className={navLinkClass}
                            >
                                Contact
                            </NavLink>

                            <NavLink
                                to="/github"
                                onClick={closeMenu}
                                className={navLinkClass}
                            >
                                Github
                            </NavLink>

                            <NavLink
                                to="/about"
                                onClick={closeMenu}
                                className={navLinkClass}
                            >
                                About
                            </NavLink>

                            <hr />

                            {!status ? (
                                <div className="flex flex-col gap-3">

                                    <NavLink
                                        to="/User/Login"
                                        onClick={closeMenu}
                                        className="text-center border border-gray-300 py-2 rounded-lg font-medium"
                                    >
                                        Log In
                                    </NavLink>

                                    <NavLink
                                        to="/User/Register"
                                        onClick={closeMenu}
                                        className="text-center bg-purple-600 text-white py-2 rounded-lg font-medium"
                                    >
                                        Get Started
                                    </NavLink>

                                </div>
                            ) : (
                                <div className="flex flex-col gap-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                            {userData?.fullname
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </div>

                                        <div>
                                            <p className="font-semibold">
                                                {userData?.fullname}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                @{userData?.username}
                                            </p>
                                        </div>

                                    </div>

                                    <button
                                        onClick={() => {
                                            dispatch(logout());
                                            closeMenu();
                                        }}
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
                                    >
                                        Logout
                                    </button>

                                </div>
                            )}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}