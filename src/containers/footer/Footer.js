import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer innerWidth paddings">
      <div className="footer-header">
        <h1 className="gradient__text footer-content">Do you want to step in to the future before others</h1>

        <p className="footer-btn">Request Early Access</p>
        <div className="footer-section">
            
            <div  className="footer-section-links">
            <div>
                <h2>GPT-3</h2>
                <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
            </div>
                <ul>
                    <li>Links</li>
                    <li>Overons</li>
                    <li>Social Media</li>
                    <li>Counters</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li>Get in touch</li>
                    <li>Crechterwoord K12 <br /> 128 DK Alknjkcb </li>
                    <li>085-132567</li>
                    <li>info@payme.net</li>
                </ul>
            </div>
        </div>
        <p className="footer-reserved">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
