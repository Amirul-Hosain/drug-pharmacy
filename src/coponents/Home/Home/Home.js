import React from 'react';
import './Home.css'
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Mapbox from '../Mapbox';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Team></Team>
            <Services></Services>
            <Mapbox></Mapbox>
        </div>
    );
};

export default Home;