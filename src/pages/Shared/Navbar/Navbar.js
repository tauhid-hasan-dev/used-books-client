import React, { useContext } from 'react';
import { FaBook } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .then(err => console.log(err.message))
    }
    const menuItem = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
                isActive ? ' border-b border-logo-color text-text-color ' : undefined
            }
        >Home</NavLink>

        <NavLink to='/blog' className={({ isActive }) =>
            isActive ? ' border-b border-logo-color text-text-color ' : undefined
        }>Blog</NavLink>

        {
            user?.email ?
                <>
                    <NavLink to='/dashboard' className={({ isActive }) =>
                        isActive ? ' border-b border-logo-color text-text-color  ' : undefined
                    }>Dashboard</NavLink>

                    <Link className='pl-2 lg:pl-4 text-text-color '><p>{user?.displayName}</p></Link>

                    <Link className='pl-2 lg:pl-4 text-text-color '><button onClick={handleLogOut} className="hover:bg-slate-600 border px-2    rounded-none ">LogOut</button></Link>

                </>
                :
                <Link to='/login' className='pl-2 lg:pl-4 text-text-color  '><button className="hover:bg-orange-200  border px-2 hover:text-nav-color    rounded">LogIn</button></Link>
        }

    </>
    return (
        <div className={`navbar bg-nav-color shadow-md px-5 border-b border-slate-500 lg:px-28 py-5 `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-text-color text-6xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow  rounded-box w-52 flex flex-col gap-5 bg-nav-color text-text-color p-5">
                        {menuItem}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl   lg:text-4xl text-text-color font-semibold ">
                    <div className='flex items-start gap-2'>
                        <FaBook className='text-5xl lg:text-6xl'></FaBook>
                        <div className='flex flex-col item-start justify-start'>
                            <div className='block font-semibold'>RareBooks </div>
                            <small className='text-sm font-light'>buy & sell</small>
                        </div>

                    </div>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-slate-100 gap-10 text-lg ">
                    {menuItem}
                </ul>
            </div>
        </div >
    );
};

export default Navbar;