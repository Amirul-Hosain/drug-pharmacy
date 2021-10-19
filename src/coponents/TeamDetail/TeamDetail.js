import React from 'react';

const TeamDetail = (props) => {
    const { name, photo, describe } = props.member;
    return (
        <div>
            <img src={photo} alt="" />
            <h3>{name}</h3>
            <p>{describe}</p>
        </div>
    );
};

export default TeamDetail;