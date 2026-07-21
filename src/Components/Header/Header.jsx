import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../assets/logO.png";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../authSlice/authSlice.js";

export default function Header() {
    const dispatch = useDispatch();

    const { status, userData } = useSelector((state) => state.auth);

    const navLinkClass = ({ isActive }) =>
        `font-medium transition-colors duration-200 ${
            isActive
                ? "text-purple-700"
                : "text-gray-700 hover:text-purple-700"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-white shadow">
            <nav className="border-b border-gray-200">
                <div className="w-full h-20 px-10 flex items-center">

                    {/* Left - Logo */}
                    <div className="flex-1">
                        <Link to="/" className="inline-flex items-center">
                            <img
                                src={LogoImage}
                                alt="Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Center - Navigation */}
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

                    {/* Right Section */}
                    <div className="flex-1 flex justify-end">

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

                                {/* Avatar */}
                                <div className="w-11 h-11 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                    {userData?.fullname?.charAt(0).toUpperCase()}
                                </div>

                                {/* User Info */}
                                <div className="hidden md:flex flex-col leading-tight">
                                    <span className="font-semibold text-gray-900">
                                        {userData?.fullname}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        @{userData?.username}
                                    </span>
                                </div>

                                {/* Logout */}
                                <button
                                    onClick={() => dispatch(logout())}
                                    className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg font-medium"
                                >
                                    Logout
                                </button>

                            </div>
                        )}

                    </div>

                </div>
            </nav>
        </header>
    );
}