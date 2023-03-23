import React from "react";
import News from "../../components/News/News";

import img1 from "../../assets/Rectangle 22-1.png";
import img2 from "../../assets/Rectangle 22-2.png";
import img3 from "../../assets/Rectangle 22-3.png";
import img4 from "../../assets/Rectangle 22-4.png";
import img from "../../assets/Rectangle 22.png";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog innerWidth paddings">
      <h1 className="gradient__text blog-heading">
        A lot is happening, We are blogging about it.
      </h1>
      <div className="blog-content">
        <div className="blog-content__item">
          <News
            img={img4}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></News>
        </div>
        <div className="blog-content__item">
          <News
            img={img1}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></News>
        </div>
        <div className="blog-content__item">
          <News
            img={img2}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></News>
        </div>
        <div className="blog-content__item">
          <News
            img={img3}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></News>
        </div>
        <div className="blog-content__item">
          <News
            img={img}
            heading="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          ></News>
        </div>
      </div>
    </div>
  );
};

export default Blog;
