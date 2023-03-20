import React from 'react';
import "./Feature.css";
const Feature = ({heading,size}) => {
    return (
        <div className='feature innerWidth'>
            <div className="feature-straightLine"></div>
            <div style={{fontSize:size}} className="feature-heading">{heading}</div>
        </div>
    );
};

export default Feature; 