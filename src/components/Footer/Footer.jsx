import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="app__footer-heading">
        <p className="p-text">Get In Touch</p>
        <h2 className="head-text">Contact Me</h2>
      </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a
            href="mailto:iazam0910@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            iazam0910@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="phone" />
          <a
            href="https://api.whatsapp.com/send?phone=919999585966"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            9999585966 (Abbu)
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.whatsapp} alt="phone" />
          <a
            href="https://api.whatsapp.com/send?phone=8510094605"
            target="_blank"
            rel="noreferrer"
            className="p-text"
          >
            8510094605 (My number)
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
