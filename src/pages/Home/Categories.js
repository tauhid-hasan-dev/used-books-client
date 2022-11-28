import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Loader/Loading';
import CategoryCard from './CategoryCard';
/* const axios = require('axios').default; */
import axios from 'axios';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { loading } = useContext(AuthContext)

    const getCategories = () => {
        try {
            axios.get(`https://used-book-store-server.vercel.app/categories`)
                .then((response) => {
                    console.log(response);
                    const data = response.data;
                    setCategories(data)
                })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategories()
    }, [])


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-banner'>
            <div className='flex justify-center pt-8 pb-5 lg:pb-0 lg:pt-14'>
                <p className='text-4xl text-gray-800 font-semibold'>Categories</p>
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