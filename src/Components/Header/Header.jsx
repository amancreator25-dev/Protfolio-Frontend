import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImage from "../../assets/logO.png";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../authSlice/authSlice.js";

export default function Header() {
    const dispatch = useDispatch();

    const { status, userData } = useSelector((state) => state.auth);

    return (
        <header className="sticky top-0 z-50 shadow bg-white">
            <nav className="border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src={LogoImage}
                            className="h-12 w-auto"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation */}
                    <ul className="hidden lg:flex items-center gap-10 font-medium">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `${isActive
                                        ? "text-purple-700"
                                        : "text-gray-700"
                                    } hover:text-purple-700 transition`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/Blogs"
                                className={({ isActive }) =>
                                    `${isActive
                                        ? "text-purple-700"
                                        : "text-gray-700"
                                    } hover:text-purple-700 transition`
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>

                        {status && (
                            <>
                                <li>
                                    <NavLink
                                        to="/create-blog"
                                        className={({ isActive }) =>
                                            `${isActive
                                                ? "text-purple-700"
                                                : "text-gray-700"
                                            } hover:text-purple-700 transition`
                                        }
                                    >
                                        Create Blog
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to="/my-blogs"
                                        className={({ isActive }) =>
                                            `${isActive
                                                ? "text-purple-700"
                                                : "text-gray-700"
                                            } hover:text-purple-700 transition`
                                        }
                                    >
                                        My Blogs
                                    </NavLink>
                                </li>
                            </>
                        )}

                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `${isActive
                                        ? "text-purple-700"
                                        : "text-gray-700"
                                    } hover:text-purple-700 transition`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/github"
                                className={({ isActive }) =>
                                    `${isActive
                                        ? "text-purple-700"
                                        : "text-gray-700"
                                    } hover:text-purple-700 transition`
                                }
                            >
                                Github
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `${isActive
                                        ? "text-purple-700"
                                        : "text-gray-700"
                                    } hover:text-purple-700 transition`
                                }
                            >
                                About
                            </NavLink>
                        </li>

                    </ul>

                    {/* Right Section */}
                    <div className="flex items-center">

                        {!status ? (
                            <div className="flex items-center gap-3">

                                <NavLink
                                    to="/User/Login"
                                    className="text-gray-700 hover:text-purple-700 font-medium"
                                >
                                    Log In
                                </NavLink>

                                <NavLink
                                    to="/User/Register"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-medium"
                                >
                                    Get Started
                                </NavLink>

                            </div>
                        ) : (
                            <div className="flex items-center gap-4">

                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                                    {userData?.fullname?.charAt(0).toUpperCase()}
                                </div>

                                {/* User Info */}
                                <div className="hidden md:flex flex-col leading-4">
                                    <span className="text-sm font-semibold">
                                        {userData?.fullname}
                                    </span>

                                    <span className="text-xs text-gray-500">
                                        @{userData?.username}
                                    </span>
                                </div>

                                {/* Logout */}
                                <button
                                    onClick={() => dispatch(logout())}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
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