import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { img, categoryName, categoryId } = category
    return (
        <Link to={`/categories/${categoryId}`}>
            <>
                <div className="card bg-base-100 shadow-xl  image-full">
                    <figure className='rounded-sm'><img src={img} alt="category name" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-bold text-3xl  justify-start">{categoryName}</h2>
                        <p></p>
                        <div className="card-actions justify-end ">
                            <Link to={`/categories/${categoryId}`} ><button className="text-text-color px-5 py-3 hover:bg-text-color font-semibold hover:border-none border-text-color  border hover:text-nav-color    rounded">See Books</button></Link>
                        </div>
                    </div>
                </div>
            </>
        </Link>
    );
};

export default CategoryCard;