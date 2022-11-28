import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaClock, FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
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
        _id

    } = book;

    const { data: seller = [], isLoading } = useQuery({
        queryKey: ['user',],
        queryFn: async () => {
            const res = await fetch(`https://used-book-store-server.vercel.app/seller?email=${sellerEmail}`)
            const data = await res.json();
            return data;
        }
    })


    //console.log(seller?.verified)

    const handleReportedItem = (id) => {
        fetch(`https://used-book-store-server.vercel.app/reported/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    toast.success(`Reported To admin`)

                }
            })
    }




    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className="bg-banner shadow-sm border items-stretch cursor-pointer card rounded-xl card-compact bg-bg-login-color  border-none p-3 lg:p-5 ">
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <div className='text-slate-900 flex items-center gap-2'>
                        <p className='font-bold'>
                            {sellerName}
                        </p>
                        <div>
                            {seller?.verified && <p><FaCheckCircle className='text-blue-700'></FaCheckCircle></p>}
                        </div>
                    </div>
                    <div>
                        <p className='font-thin text-sm'>{sellerPhone}</p>
                    </div>
                </div>
                <div className='f'>
                    <div className='text-slate-900 flex items-center gap-2 justify-end'>
                        <div>
                            <p ><FaMapMarkerAlt className='text-nav-color'></FaMapMarkerAlt></p>
                        </div>
                        <div>
                            {location}
                        </div>
                    </div>
                    <div>
                        <p className='font-thin text-sm'>{dateField}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pt-1 pb-5'>
                <p className='text-3xl font-bold'>{productName}</p>
            </div>

            <div className=''>
                <img className='w-full rounded-xl' src={productImage} alt="" />
            </div>

            <div className=' py-5'>

                <div className='flex justify-between '>
                    <div className='flex justify-between gap-1 bg-green-700 text-white p-2 rounded-xl'>
                        <span className='text-white font-semibold'>Original Price:</span> <span className='text-white'>${originalPrice}</span>
                    </div>
                    <div className='flex justify-between gap-1 bg-green-700 text-white p-2 rounded-xl'>
                        <span className='text-white font-semibold'>Resale Price:</span> <span className='text-white'>${resalePrice}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1 py-7'>
                    <div className='flex justify-between bg-orange-100 px-2 rounded py-1'>
                        <span className='text-gray-900 font-semibold'>Condition:</span> <span className='text-slate-900'>{condition}</span>
                    </div>
                    <div className='flex justify-between bg-orange-100 px-2 rounded py-1'>
                        <span className='text-gray-900 font-semibold'>Purchase Year:</span> <span className='text-slate-900'>{purchaseYear}</span>
                    </div>
                    <div className='flex justify-between bg-orange-100 px-2 rounded py-1'>
                        <span className='text-gray-900 font-semibold'>Years of Use:</span> <span className='text-slate-900'>{useOfYear}</span>
                    </div>
                </div>

            </div>

            <div className=" flex gap-5 justify-between">
                <label onClick={() => setBooking(book)} htmlFor="my-modal-3" className="btn  btn-md    lg:w-[50%] px-6 lg:px-6  text-white bg-nav-color   font-semibold  border hover:text-white hover:bg-green-800 hover:border-nav-color rounded">Book Now</label>
                <Link ><button onClick={() => handleReportedItem(_id)} className="btn btn-md bg-nav-color text-white     w-full px-4   hover:bg-red-500 hover:border-red-500 font-semibold  border hover:text-white rounded">Report to admin</button></Link>
                {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
            </div>

            {
                booking &&
                <BookingModal key={book._id} book={book} setBooking={setBooking}></BookingModal>
            }
        </div >
    );
};

export default BookCard;