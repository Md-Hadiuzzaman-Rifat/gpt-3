import React from 'react';
import "./Feature.css";
const Feature = ({heading}) => {
    return (
        <div className='feature innerWidth'>
            <div className="feature-straightLine"></div>
            <div className="feature-heading">{heading}</div>
        </div>
    );
};

export default Feature; 