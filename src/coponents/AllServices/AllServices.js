import React from 'react';
import './AllService.css'

const AllServices = (props) => {
    const { name, photo, description } = props.service;
    return (
        <div>
            <div className='service-info'>
                <img width='400' height='180' src={photo} alt="" />
                <div className='detail-info'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <button>Show Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllServices;