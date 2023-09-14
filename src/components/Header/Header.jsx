import React from "react";
import { motion } from "framer-motion";
import "./Header.scss";
import AppWrap from "../../wrapper/AppWrap";

const Header = () => {
  return (
    <div className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp">
            <p className="p-text">Assalamualaykum, I am</p>
            <h1 className="head-text" style={{ textAlign: "start" }}>
              Intekhab Azam
            </h1>
          </div>
          <div className="tag-cmp">
            <p className="p-text">
              I am currently working as a Software Engineer - UI in Flipkart and
              having more than 2 years of experience in this domain.
            </p>
            <p className="p-text">
              I am consistently endeavoring to integrate and learn Islamic teachings and
              values into both my professional and personal day-to-day activities and would love to see these qualities in spouse.
            </p>
          </div>
          <div className="tag-cmp">
            <h3 className="p-text">More About Me</h3>
            <div className="physical">
              <p className="p-text">
                <span>DOB: </span>07-05-1997
              </p>
              <p className="p-text">
                <span>Height: </span>5'6"
              </p>
              <p className="p-text">
                <span>Complexion: </span>Fair
              </p>
              <p className="p-text">
                <span>Personality: </span>Normal
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
