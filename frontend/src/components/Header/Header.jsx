import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { UserContext } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const userInfo = useContext(UserContext);
    // console.log(userInfo);
    const navigate = useNavigate();

    function logoutHandler() {
        userInfo.setUser(userInfo.user = null);
        navigate('/');
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-2 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/swk7roeVikUTQVnGFKKhAykR6_johH5q1ADD5RDBhEE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/c2hvcGlmeWNsb3Vk/L2hhdGNoZnVsX3dl/Yl90d28vYnVuZGxl/cy8zMjBiMzYyZDll/MzljMTFlZDUwM2Q4/N2E5MDE5ZmUyMi5z/dmc.svg"
                            className="h-12 "
                            alt="Logo"
                        />
                        <p className="font-bold text-3xl text-slate-500">Blogify</p>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        {userInfo.user ?
                            <button
                                onClick={logoutHandler}
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Logout
                            </button>
                            :
                            <Link
                                to="/login"
                                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Login
                            </Link>
                        }
                        {userInfo.user ?
                            <p
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                {"Hello "+userInfo.user.username}
                            </p>
                            :
                            <Link
                            to="/signup"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                            Create New Account
                            </Link>
                        }
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            
                            <li>
                                <NavLink
                                to={userInfo.user?"/blog":"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            
                            {userInfo.user ?
                                <li>
                                    <NavLink
                                    to="/addblog"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        }
                                    >
                                        Add Blog
                                    </NavLink>
                                </li>
                                :
                                ""
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}