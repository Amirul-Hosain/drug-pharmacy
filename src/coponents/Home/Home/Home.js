import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Team></Team>
            <Services></Services>
        </div>
    );
};

export default Home;