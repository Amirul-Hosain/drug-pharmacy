import React from 'react';
import './About.css'
import doctor from '../../../src/images/doctor.png'

const About = () => {
    return (
        <div>
            <div className="container d-flex about-container">
                <div className='about-img'>
                    <img src={doctor} alt="" />
                </div>

                <div className='about-detail'>
                    <h1>Welcome to <span style={{ color: 'orange' }}>Medicine Store</span></h1>
                    <p>Medicine store is one of the most populer medicine center. Here all type of medicine always stored. We don't keep date expire medicine in our store. So evry people trust our store and they always take medicine from our store.</p>
                </div>
            </div>
        </div>
    );
};

export default About;