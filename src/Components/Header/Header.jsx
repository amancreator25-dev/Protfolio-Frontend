import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImage from '../../assets/logO.png'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../authSlice/authSlice.js'

export default function Header() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-purple-500 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    
                    {/* Logo */}
                    <Link to="/" className="flex ml-[-200px] items-center">
                        <img
                            src={LogoImage}
                            className="mr-3 h-12 max-w-xl"
                            alt="Logo"
                        />
                    </Link>

                    {/* Login / Signup OR Logout */}
                    <div className="flex items-center ml-[400px] mr-[-200px] lg:order-2">
                        {!isLoggedIn ? (
                            <>
                                <NavLink
                                    to="/User/Login"
                                    className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Log in
                                </NavLink>

                                <NavLink
                                    to="/User/Register"
                                    className="text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                >
                                    Get started
                                </NavLink>
                            </>
                        ) : (
                            <button
                                onClick={() => dispatch(logout())}
                                className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                            >
                                Logout
                            </button>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <div
                        className="hidden ml-[450px] items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:items-center lg:space-x-15 lg:mt-0 lg:justify-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} hover:text-purple-700`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} hover:text-purple-700`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} hover:text-purple-700`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/Blogs"
                                    className={({ isActive }) =>
                                        `block py-2 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} hover:text-purple-700`
                                    }
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 duration-200 ${isActive ? "text-purple-700" : "text-gray-700"} hover:text-purple-700`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
