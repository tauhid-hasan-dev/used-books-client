import React from 'react';
import AdvertisedItems from './AdvertisedItems';
import Banner from './Banner';
import Categories from './Categories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertisedItems></AdvertisedItems>
        </div>
    );
};

export default Home;