import { useQuery } from '@tanstack/react-query';
import React from 'react';

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

    return (
        <div>
            <p> Advertized item</p>
        </div>
    );
};

export default AdvertisedItems;