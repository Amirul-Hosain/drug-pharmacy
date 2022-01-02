import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

            <div className='row container m-auto'>
                {
                    services.map(service => <div className='service-cart col-lg-4 col-md-6 col-12'>
                        <img width='100%' height='180' src={service.photo} alt="" />
                        <div className='detail-info'>
                            <h4>{service.name}</h4>
                            <p>{service.description}</p>
                            <Link className='detail-btn' to={`/servicedetail/${service.id}`}>Show Details</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;