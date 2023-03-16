import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import gpt3 from "../../assets/GPT-3.svg";
import "../../style/global.css";
import Button from "./../button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <div className="gpt3_navbar paddings">
      <div className="gpt3_navbar-links">

        <div className="gpt3_navbar-links_logo">
          <img src={gpt3} alt="" />
          {/* <h2>GPT-3</h2> */}
        </div>

        <div className="gpt3_navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">
              What is GPT3
            </a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>

        <div className="gpt3_navbar-links_sign">
          <p>Sign in</p>
          <Button type="button">Sign up</Button>
        </div>

        <div className="gpt3_navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={26}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={26}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3_navbar-menu_container scale-up-center">
              <div className="gpt3_navbar-menu_container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is GPT3?</a>
                </p>
                <p>
                  <a href="#possibility">Possibility</a>
                </p>
                <p>
                  <a href="#features">Case Study</a>
                </p>
                <p>
                  <a href="#blog">Library</a>
                </p>
              </div>

              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign up</button>
              </div>
              
            </div>
          )}
        </div> 
        
      </div>
    </div>
  );
};

export default Navbar;
