import React from 'react';
import PrimaryButton from '../../Components/PrimaryButton';



const Banner = () => {
    return (
        <div className='bg-white  flex flex-col lg:flex-row gap-8 lg:gap-20 lg:px-28 lg:py-20 px-10 py-10'>
            <div className='flex w-[100%] lg:w-[50%] flex-col items-center justify-center lg:items-start gap-10 order-1 lg:order-0 '>
                <div className='flex flex-col gap-3 justify-center text-center lg:text-start'>
                    <h1 className='text-gray-900 text-3xl lg:text-5xl font-bold'>A book never gets old!</h1>
                    <h1 className='text-gray-600 text-lg lg:text-xl font-regular'>Buy and sell old and  rare books from anywhere</h1>
                </div>
                <div className="card-actions ">
                    <PrimaryButton>Learn More</PrimaryButton>
                </div>
            </div>
            <div className='order-0 lg:order-1 w-[100%] lg:w-[50%] rounded-xl flex justify-end p-0'>
                <img className='rounded-xl' src='https://i.ibb.co/6WPqs5B/books1.jpg' alt="" />
            </div>
        </div>
    );
};

export default Banner;