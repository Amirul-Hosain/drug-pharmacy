import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Team></Team>
            <Services></Services>
        </div>
    );
};

export default Home;