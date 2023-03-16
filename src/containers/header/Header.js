import React from "react";
import ai from "../../assets/ai.png";
import group from "../../assets/Group 81.png";
import Button from "../../components/button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div style={{ width: "100vw" }} className="header innerWidth paddings">
      <div className="header__content">
        <h1 className="header__content-header gradient__text">
          Let Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p className="header__content-paragraph">
          Yet bed any form travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header__content-subscription">
          <input
            type="email"
            className="header__content-input"
            placeholder="Your Email Address"
          />

          <Button className="header__btn">Get Started</Button>
        </div>
        
        <div className="header__content-input__group">
          <div className="header__content-input-image">
            <img src={group} alt="" />
          </div>
          <div className="header__content-input-text">
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>


      </div>
      <div className="header__image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
