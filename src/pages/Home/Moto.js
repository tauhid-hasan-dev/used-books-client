import React from 'react';

const Moto = () => {
    return (
        <div className='bg-white  flex flex-col lg:flex-row gap-8 lg:gap-20 lg:px-28 lg:py-20 px-10 py-10'>
            <div className='order-0 lg:order-1 w-[100%] lg:w-[50%] rounded-xl flex justify-end p-0'>
                <img className='rounded-xl' src='https://i.ibb.co/F3tRMBd/brett-jordan-o-Xjvbh-Xxm4w-unsplash.jpg' alt="" />
            </div>
            <div className='flex w-[100%] lg:w-[50%] flex-col items-center justify-center lg:items-start gap-10 order-1 lg:order-0 '>
                <div className='flex flex-col gap-5 justify-end text-center lg:text-start'>
                    <h1 className='text-text-color text-3xl lg:text-3xl font-bold'>Our Moto</h1>

                    <h1 className='text-gray-900 text-3xl lg:text-5xl font-bold'>We believe in Rising Together</h1>
                    <h1 className='text-gray-700 text-lg lg:text-xl font-regular'>Sharing books with reasonable price is our main goal.</h1>
                </div>

            </div>

        </div>
    );
};

export default Moto;