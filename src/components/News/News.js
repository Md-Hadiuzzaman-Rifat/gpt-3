import React from "react";
import "./News.css";

const News = ({ img, heading }) => {
  return (
    <div className="news">
      <div className="news-photo">
        <img src={img} alt="photos" />
      </div>
      <div className="news-description">
        <div>
          <small>March 19,2022</small>
          <h3>{heading}</h3>
        </div>
        <small>Read Full Article</small>
      </div>
    </div>
  );
};

export default News;


