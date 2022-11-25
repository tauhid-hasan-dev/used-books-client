import React from 'react';
import { Link } from 'react-router-dom';

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

    return (
        <div className="bg-category border items-stretch cursor-pointer card rounded-xl card-compact bg-bg-login-color  border-green-500  shadow-green-500 ">
            <div className=''>
                <img className='w-full rounded-t-xl' src={productImage} alt="" />
            </div>
            <div className="card-body items-center text-center ">
                <h2 className="card-title text-white text-2xl">{productName}</h2>
                <p className='text-black p-3'></p>
                <p className='text-slate-800'>seller</p>
            </div>
            <div className="py-3 px-3 flex gap-5 justify-between">
                <Link ><button className="text-text-color  w-full px-12 py-2 border-text-color hover:bg-text-color font-semibold hover:border-text-color border hover:text-nav-color rounded">Book Now</button></Link>
                <Link ><button className="text-text-color  w-full px-8 py-2 border-text-color hover:bg-text-color font-semibold hover:border-text-color border hover:text-nav-color rounded">Report to admin</button></Link>
            </div>
        </div>
    );
};

export default BookCard;