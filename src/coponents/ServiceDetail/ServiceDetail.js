import React, { useEffect, useState } from 'react';
import './ServiceDetail.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = '/serviceDetail.json';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const medicineDetail = data.filter(md => md.id === id);
                setDetails(medicineDetail)
            })
    }, [])
    return (
        <div>
            <div className='detail-container'>
                <img src={details[0]?.photo} alt="" />
                <div className='service-info'>
                    <h3>{details[0]?.name}</h3>
                    <p>{details[0]?.description}</p>
                    <Link to='/services'>Back</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;