import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';
import BookCard from '../CategoryBooks/BookCard';

const AdvertisedItems = () => {
    const { data: adds = [], isLoading, refetch } = useQuery({
        queryKey: ['adds',],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/adds`)
            const data = await res.json();
            return data;
        }
    })

    console.log(adds)
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <p> Advertized item {adds.length}</p>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 lg:px-28 pb-16 pt-10'>
                    {
                        adds?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItems;