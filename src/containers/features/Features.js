import React from "react";
import img from "../../assets/Feature.png";
import Feature from "./../../components/feature/Feature";
import "./Features.css";

const Features = () => {
  const info = [
    {
      heading: "Improving end distrusts instantly ",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      heading: "Become the tended active",
      description:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      heading: "Message or am nothing",
      description:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      heading: "Really boy law county",
      description:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ];
  return (
    <div className="features innerWidth paddings">
        {/* // top section  */}
      <div className="features-top">
        <div className="features-top__heading">
          <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="features-top-description">
          {info.map((property) => {
            return (
              <div className="features-top-description__section">
                <Feature className="features-top-description__section__header" heading={property.heading}></Feature>
                <p>{property.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* //middle section  */}
       <div className="features-middle">
        <img src={img} alt="" />
        <div className="features-middle__description">
        <p>Request Early Access to Get Started</p>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p> Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.  Party we years to order allow asked of.</p>
          <p>Request Early Access to Get Started</p>
        </div>
      </div> 
          {/* //bottom section  */}
      <div className="features-bottom">
        <div className="features-bottom__text">
          <p>Request Early Access to Get Started</p>
          <h2>Register today & start exploring the endless possiblities.</h2>
        </div>
        <div className="features-bottom-button">
          <p>Get Started</p>
        </div>
      </div> 
    </div>
  );
};

export default Features;

