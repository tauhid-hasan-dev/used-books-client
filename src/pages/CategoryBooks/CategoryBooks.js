import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryBooks = () => {

    /*  const books = useLoaderData();
     console.log(books.length) */
    return (
        <div>
            <p>Total books in this category is{/*  {books.length} */}</p>
        </div>
    );
};

export default CategoryBooks;