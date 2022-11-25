import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories';
import Moto from './Moto';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Moto></Moto>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;