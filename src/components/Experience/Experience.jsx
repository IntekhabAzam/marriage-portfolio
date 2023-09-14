import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Experience.scss";

const experienceList = [
  {
    company: "Flipkart",
    title: "SDE-UI | 24 April, 2023 - Present",
    descLine1:
      "Working on frontent optimization and new features addition in Flipkart mobile and web application",
    descLine2:
      "collaborate with a team of skilled developers, designers, and product managers to translate wireframes and mockups into fully functional features.",
    descLine3: "Tech stack: React Native, React, Javascript, Typescript",
  },
  {
    company: "Wipro Limited",
    title: "Project Engineer | 26 July, 2021 - 2 Jan, 2023",
    descLine1:
      "Application Development, Maintenance and Production Support for Client - British Petroleum(bp).",
    descLine2:
      "Work on application Front-end enhancement and created more interactive user interface using HTML, CSS, JavaScript.",
    descLine3: "Code optimization for better performance of the application.",
  },
];

const educationList = [
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Millia Islamia | New Delhi",
    course: "Bachlor of Technology | 2017-2021",
    result: "9.38 CGPA",
    background: "#ecfbec",
    circleColor: "#4bc94b",
  },
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Senior Secondary School | New Delhi",
    course: "Intermediate | 2013-2015",
    result: "67.2 %",
    background: "#f4f4ff",
    circleColor: "#6971cf",
  },
  {
    schoolLogo: images.xaviers,
    schoolName: "St. Xaviers Jr/Sr School | Muzaffarpur, Bihar",
    course: "Matric | 2011-2013",
    result: "10 CGPA",
    background: "#fff7f7",
    circleColor: "#ff5f5f",
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Education</span> & Experience
      </h2>

      <div className="app__skills-container">
        <div className="app__education-container">
          {educationList.map((education, index) => (
            <div className="app__education-list app__flex" key={index}>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__education-logo app__flex"
              >
                <div
                  className="app__flex"
                  style={{ backgroundColor: education.background }}
                >
                  <img src={education.schoolLogo} alt="education" />
                </div>
              </motion.div>
              <motion.div
                whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__education-content"
              >
                <h4 className="bold-text">{education.schoolName}</h4>
                <p className="p-text">{education.course}</p>
                <p className="p-text">{education.result}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <hr style={{ borderColor: "#edf2f8" }} />

        <motion.div className="app__exp-list">
          {experienceList.map((experience, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__exp-item app__flex"
              key={index}
            >
              <h4 className="bold-text">{experience.company}</h4>
              <p className="p-text">{experience.title}</p>
              <ul>
                <li className="p-text">{experience.descLine1}</li>
                <li className="p-text">{experience.descLine2}</li>
                <li className="p-text">{experience.descLine3}</li>
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__whitebg"
);
