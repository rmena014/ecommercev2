import React from "react";
import "font-awesome/css/font-awesome.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media-links">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="social-media-link"
        >
          <i className="fa fa-facebook-f"></i>
        </a>
        <a
          href="https://twitter.com/i/flow/login"
          target="_blank"
          className="social-media-link"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="social-media-link"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      <p className="copyright">Armada Workwear™ 2022. All rights reserved.</p>
    </div>
  );
};

export default Footer;
