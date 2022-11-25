import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../Shared/Booking Modal/BookingModal';

const BookCard = ({ book }) => {
    const {
        categoryId,
        productName,
        productImage,
        location,
        originalPrice,
        resalePrice,
        purchaseYear,
        useOfYear,
        condition,
        dateField,
        sellerName,
        sellerPhone,
        _id
    } = book;

    const [booking, setBooking] = useState(null)

    return (
        <div className="bg-category border items-stretch cursor-pointer card rounded-xl card-compact bg-bg-login-color  border-none ">
            <div className=''>
                <img className='w-full rounded-t-xl' src={productImage} alt="" />
            </div>
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl">{productName}</h2>
            </div>
            <div className='px-20 lg:px-24'>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Location:</span> <span className='text-slate-200'>{location}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Original Price:</span> <span className='text-slate-200'>${originalPrice}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Resale Price:</span> <span className='text-slate-200'>${resalePrice}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Condition:</span> <span className='text-slate-200'>{condition}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Purchase Year:</span> <span className='text-slate-200'>{purchaseYear}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-text-color font-semibold'>Years of Use:</span> <span className='text-slate-200'>{useOfYear}</span>
                </div>

            </div>
            <div className='px-5 lg:px-16 py-8'>
                <div className='flex justify-between '>
                    <span className='text-text-color font-semibold'>Seller Name:</span> <span className='text-slate-200'>{sellerName}</span>
                </div>
                <div className='flex justify-between '>
                    <span className='text-text-color font-semibold'>Seller Phone:</span> <span className='text-slate-200'>{sellerPhone}</span>
                </div>
                <div className='flex justify-between '>
                    <span className='text-text-color font-semibold'>Listing Date:</span> <span className='text-slate-200'>{dateField}</span>
                </div>
            </div>

            <div className="py-3 px-3 flex gap-5 justify-between">
                <label onClick={() => setBooking(book)} htmlFor="my-modal-3" className="btn bg-banner btn-sm  text-text-color  w-[50%] px-6 lg:px-12 py-2 border-text-color hover:bg-text-color font-semibold hover:border-text-color border hover:text-nav-color rounded">Book Now</label>
                <Link ><button className="btn btn-sm bg-banner   text-text-color  w-full px-4  py-2 border-text-color hover:bg-red-500 font-semibold hover:border-text-color border hover:text-white rounded">Report to admin</button></Link>
                {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
            </div>

            {booking &&
                <BookingModal key={book._id} book={book} setBooking={setBooking}></BookingModal>
            }
        </div>
    );
};

export default BookCard;