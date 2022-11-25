import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1617957718645-7680362d6312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')] bg-cover w-full object-cover h-full py-64 px-5 lg:py-72 lg:px-56  bg-opacity-20 relative cursor-pointer text-center">
            <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-100 '></div>
            <div className='relative '>
                <p className='text-white font-bold text-7xl lg:text-7xl mb-3 '>404!</p>
                <p className='text-white font-semibold text-2xl lg:text-4xl mb-3'>Page not found</p>
                <p className='text-white font-bold text-2xl lg:text-2xl '>Click <span className='ext-blue-500 border-b '><Link to="/" className='text-blue-500'>here
                </Link></span>  to go home page </p>
            </div>
        </div>
    );
};

export default NotFound;