import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../../Loader/Loading';
import BookingModal from '../Shared/Booking Modal/BookingModal';

const BookCard = ({ book }) => {
    const [booking, setBooking] = useState(null);

    const {

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
        sellerEmail,

    } = book;

    const { data: seller = [], isLoading } = useQuery({
        queryKey: ['user',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller?email=${sellerEmail}`)
            const data = await res.json();
            return data;
        }
    })


    console.log(seller?.verified)




    if (isLoading) {
        return <Loading></Loading>
    }


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
                    <span className='text-text-color font-semibold'>Seller Name:</span>

                    <div className='text-slate-200 flex items-center gap-2'>
                        <p>
                            {sellerName}
                        </p>
                        <div>
                            {seller?.verified && <p><FaCheckCircle className='text-blue-700'></FaCheckCircle></p>}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between '>
                    <span className='text-text-color font-semibold'>Seller Phone:</span> <span className='text-slate-200'>{sellerPhone}</span>
                </div>
                <div className='flex justify-between '>
                    <span className='text-text-color font-semibold'>Listing Date:</span> <span className='text-slate-200'>{dateField}</span>
                </div>
            </div>

            <div className="py-3 px-3 flex gap-5 justify-between">
                <label onClick={() => setBooking(book)} htmlFor="my-modal-3" className="btn bg-banner btn-sm  text-text-color  lg:w-[50%] px-6 lg:px-6 py-2 border-text-color hover:bg-text-color font-semibold hover:border-text-color border hover:text-nav-color rounded">Book Now</label>
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