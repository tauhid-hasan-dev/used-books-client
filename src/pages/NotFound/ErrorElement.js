import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/FwfPTgL/Black-flag-svg.png')] bg-cover w-full object-cover h-full py-64 px-5 lg:py-72 lg:px-56  bg-opacity-20 relative cursor-pointer text-center">
            <div className='inset-0 bg-gray-800 mix-blend-overlay absolute bg-opacity-100 '></div>
            <div className='relative '>
                <p className='text-white font-bold text-7xl lg:text-7xl mb-3 '>404!</p>
                <p className='text-white font-semibold text-2xl lg:text-4xl mb-3'>Page not found</p>
                <p className='text-white font-bold text-2xl lg:text-2xl '>Click <span className='text-green-500 border-b border-blue-color'><Link to="/" >here
                </Link></span>  to go home page </p>

            </div>
        </div>
    );
};

export default ErrorElement;