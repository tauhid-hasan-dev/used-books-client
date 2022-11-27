import React from 'react';



const Banner = () => {
    return (
        <div className='bg-banner  flex flex-col lg:flex-row gap-8 lg:gap-20 lg:px-28 lg:py-20 px-10 py-10'>
            <div className='flex w-[100%] lg:w-[50%] flex-col items-center justify-center lg:items-start gap-10 order-1 lg:order-0 '>
                <div className='flex flex-col gap-5 justify-center text-center lg:text-start'>
                    <h1 className='text-white text-3xl lg:text-5xl font-bold'>A book never gets old!</h1>
                    <h1 className='text-slate-300 text-lg lg:text-xl font-regular'>Buy and sell old and  rare books from anywhere</h1>
                </div>
                <div className="card-actions ">
                    <button className="text-text-color px-5 py-3 hover:bg-text-color font-semibold hover:border-none border-text-color  border hover:text-nav-color    rounded">Learn More</button>
                </div>
            </div>
            <div className='order-0 lg:order-1 w-[100%] lg:w-[50%] rounded-xl flex justify-end p-0'>
                <img className='rounded-xl' src='https://i.ibb.co/6WPqs5B/books1.jpg' alt="" />
            </div>
        </div>
    );
};

export default Banner;