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

    console.log(categories.length)
    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='px-5 lg:px-28 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {categories?.map(category => <Link to={`/categories/:id`}><CategoryCard key={category.categoryId} category={category}></CategoryCard></Link>)}
        </div>
    );
};

export default Categories;