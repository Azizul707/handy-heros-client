import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <ul>
                {user && (
                    <li onClick={toggleMenu}>
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-blue-600' : ''}>
                            Dashboard
                        </NavLink>
                    </li>
                )}
                <li>
                    {isMenuOpen && (
                        <ul className='absolute md:top-20 shadow-lg w-52 py-5 right-[26rem] text-center z-50 bg-white'>
                            <li onClick={closeMenu}>
                                <NavLink to="/dashboard/add-service" className='text-black hover:bg-blue-600 py-1 px-10 hover:text-white'>
                                    Add a Service
                                </NavLink>
                            </li>
                            <li onClick={closeMenu}>
                                <NavLink to="/dashboard/manage-service" className='text-black hover:bg-blue-600 py-1 px-10 hover:text-white'>
                                    Manage Service
                                </NavLink>
                            </li>
                            <li onClick={closeMenu}>
                                <NavLink to="/dashboard/my-schedule" className='text-black hover:bg-blue-600 py-1 px-10 hover:text-white'>
                                    My Schedule
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Dashboard;
