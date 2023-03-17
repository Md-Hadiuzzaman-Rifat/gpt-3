import React from 'react';
import "./Feature.css";

const Feature = () => {
    const info=[
        {
            heading:"Improving end distrusts instantly ",
            description:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        },
        {
            heading:"Become the tended active",
            description:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        },
        {
            heading:"Message or am nothing",
            description:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        },
        {
            heading:"Really boy law county",
            description:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        }
    ]
    return (
        <div className='feature'>
            <div className="feature-top">
                <div className="feature-top__heading">
                The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
                </div>
                <div className="feature-top-description">
                    {
                        info.map((property)=>{
                            return(
                                <div>
                                    <Feature heading={property.heading}></Feature>
                                    <p>{property.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="feature-middle">
                    <img src="" alt="" />
                    <div className="feature-middle__description">
                        <p>Request Early Access to Get Started
                            <h3>Request Early Access to Get Started</h3>
                            <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        </p>
                        <p>Request Early Access to Get Started</p>
                    </div>
                </div>
                <div className="feature-bottom">
                    <div className="feature-bottom__text">
                        <p>Request Early Access to Get Started</p>
                        <h4>Register today & start exploring the endless possiblities.</h4>
                    </div>
                    <div className="feature-bottom-button">
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;