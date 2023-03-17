import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatGPT.css";

const WhatGPT3 = () => {
  return (
    <div className="innerWidth paddings">
      <div className="gpt3">
        <div className="gpt3-TopSection">
          <div className="gpt3-TopSection-feature">
            <Feature heading="What is GPT-3"></Feature>
          </div>

          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>
        <div className="gpt3-MiddleSection">
          <h1 className="MiddleSection-heading gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3-BottomSection">
          <div>
            <Feature heading="Chatbots"></Feature>
            <p>
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought.{" "}
            </p>
          </div>
          <div>
            <Feature heading="Knowledgebase"></Feature>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
          <div>
            {" "}
            <Feature heading="Eduction"></Feature>
            <p>
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments b
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
