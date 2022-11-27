import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loader/Loading';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories';
import Moto from './Moto';

const Home = () => {
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
            <Banner></Banner>
            <Categories></Categories>
            <Moto></Moto>
            {!adds?.length === 0 && <AdvertisedItems></AdvertisedItems>}
        </div >
    );
};

export default Home;