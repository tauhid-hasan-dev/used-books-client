import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const CategoryBooks = () => {

    const books = useLoaderData();

    return (
        <div className='bg-banner ' >
            <div className='flex justify-center py-10'>
                <p className='text-2xl font-semibold text-white'>Total book found in this category: {books.length}</p>
            </div>

            <div className=' grid grid-cols-3 gap-10 px-28 pb-16 pt-10'>
                {
                    books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>

    );
};

export default CategoryBooks;