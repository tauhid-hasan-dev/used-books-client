import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loader/Loading';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json();
            return data;
        }
    })

    //console.log(categories.length)

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-category'>
            <div className='flex justify-center pt-8 pb-5 lg:pb-0 lg:pt-14'>
                <p className='text-4xl text-white font-semibold'>Categories</p>
            </div>
            <div className='pb-5 pt-5 lg:pt-14 lg:pb-20 px-5 lg:px-28 grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {categories?.map(category =>
                    <CategoryCard key={category.categoryId} category={category}></CategoryCard>
                )}
            </div>
        </div>
    );
};

export default Categories;