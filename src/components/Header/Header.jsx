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
              I am currently working as a Software Engineer I - UI in Flipkart
              and having more than 3 years of experience in this domain.
            </p>
            <p className="p-text">
              I continuously work on integrating Islamic teachings and values
              into both my professional and personal life. I am looking for a
              spouse who shares a similar commitment.
            </p>
          </div>
          <div className="tag-cmp">
            <h3 className="p-text">More About Myself</h3>
            <div className="physical">
              <p className="p-text">
                <span>DOB: </span>07-05-1997
              </p>
              <p className="p-text">
                <span>Height: </span>5'6"
              </p>
              <p className="p-text">
                <span>Complexion: </span>Wheatish
              </p>
              <p className="p-text">
                <span>Personality: </span>Normal
              </p>
              <p className="p-text" style={{ marginBottom: "8px" }}>
                <span>Caste: </span>Shaikh
              </p>
              <p className="p-text">
                <span>Delhi Residential Address: </span>C-13, Nooh Apartment,
                Flat No B-201, 2nd Floor, Opposite Nooh Masjid, Jogabai Extn.,
                Jamia Nagar, New Delhi - 110025.
              </p>
              <p className="p-text">
                <span>Bengaluru Residential Address: </span>Door No-16, 4th
                Cross, Near HAL Main Gate, Annasandrapalya Extension,
                Vimanapura, Bengaluru, Karnataka - 560017.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
