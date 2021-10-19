import React from 'react';
import { Link } from 'react-router-dom';
import './AllService.css'

const AllServices = (props) => {
    const { id, name, photo, description } = props.service;
    return (
        <div>
            <div className='service-info'>
                <img width='400' height='180' src={photo} alt="" />
                <div className='detail-info'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <Link to={`/servicedetail/${id}`}>Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllServices;