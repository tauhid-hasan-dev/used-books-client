import React from 'react';

const CategoryCard = ({ category }) => {
    const { img, categoryName, categoryId } = category
    return (
        <div className="card bg-base-100 shadow-xl  image-full">
            <figure className='rounded-sm'><img src={img} alt="category name" /></figure>
            <div className="card-body">
                <h2 className="card-title text-bold text-3xl justify-end">{categoryName}</h2>
                <p></p>
                <div className="card-actions justify-start ">
                    <button className=" px-5 py-3 hover:bg-orange-300  border hover:text-nav-color    rounded">See Books</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;