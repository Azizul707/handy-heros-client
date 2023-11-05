/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Dashboard from "../Pages/Dashboard/Dashboard";


const NavBar = () => {

    const { singOut, user } = useContext( AuthContext );

    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState( false );

    const handleLogOut = () => {
        singOut()
            .then( result => {
                console.log( result );
            } )

    }


    return (
        <div>

            <nav className="bg-white shadow-lg border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-2">
                    <Link href="/" className="flex items-center">
                        <img src="https://imgtr.ee/images/2023/11/04/024528985406d3d1edfa8c9c77f2d4dd.jpeg"
                            className="h-20 mr-3" alt="" />
                    </Link>
                    <div className="flex md:order-2">
                        <div className="flex gap-5 items-center">
                            {
                                user ? '' :
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                            </div>
                            }
                            <span>{user?.displayName }</span>
                            {
                                user ? <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                                    :

                                    <Link to='login'>
                                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                                    </Link>
                            }


                        </div>
                        <button onClick={ () => setIsMobileMenuOpen( !isMobileMenuOpen ) } data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to='/' className={ ( { isActive } ) => isActive ? "text-blue-600" : '' } aria-current="page">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/services' className={ ( { isActive } ) => isActive ? "text-blue-600" : '' }>Services</NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <Dashboard/>
                                </NavLink>
                            </li>
                            

                          
                        </ul>

                    </div>
                    <div className="">
                        {
                            isMobileMenuOpen && (
                                <div className=" md:hidden" id="navbar-cta">
                                    <ul className="" >
                                        <li>
                                            <NavLink to='/' className={ ( { isActive } ) => isActive ? "text-blue-600" : '' } aria-current="page">Home</NavLink>
                                        </li>

                                        <li>
                                            <NavLink to='/services' className={ ( { isActive } ) => isActive ? "text-blue-600" : '' }>Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/dashboard' className={ ( { isActive } ) => isActive ? "text-blue-600" : '' }>Dashboard</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>

                </div>
            </nav>

        </div>
    );
};

export default NavBar;