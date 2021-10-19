import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = './services.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service-container'>
            <h1 style={{ textAlign: 'center', padding: '20px 0px', color: 'black' }}>Our Services</h1>
            <div className='service-cart'>
                {
                    services.map(service => <AllServices
                        key={service.id}
                        service={service}
                    ></AllServices>)
                }
            </div>
        </div>
    );
};

export default Services;