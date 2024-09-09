import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Experience.scss";

const experienceList = [
  {
    company: "Flipkart",
    title: "Software Engineer I - UI | April, 2023 - Present",
    descriptions: [
      "Currently working in the Machine Learning Platform team to build a UI platform aimed at showcasing their products and services.",
      "Previously, I worked with different teams at Flipkart, focusing on enhancing fintech services through the addition of new features to mobile and web applications.",
    ],
  },
  {
    company: "Wipro Limited",
    title: "Project Engineer | July, 2021 - Jan, 2023",
    descriptions: [
      "Joined Wipro via campus placement, where I was involved in application development, maintenance, and production support for the client British Petroleum (BP).",
    ],
  },
];

const educationList = [
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Millia Islamia | New Delhi",
    course: "Bachlor of Technology | 2017-2021",
    background: "#ecfbec",
    circleColor: "#4bc94b",
  },
  {
    schoolLogo: images.jamia,
    schoolName: "Jamia Senior Secondary School | New Delhi",
    course: "Intermediate | 2013-2015",
    background: "#f4f4ff",
    circleColor: "#6971cf",
  },
  {
    schoolLogo: images.xaviers,
    schoolName: "St. Xaviers Jr/Sr School | Muzaffarpur, Bihar",
    course: "Matric | 2011-2013",
    background: "#fff7f7",
    circleColor: "#ff5f5f",
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Education</span> | Experience
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
                {experience.descriptions.map((description, index) => (
                  <li key={index} className="p-text">
                    {description}
                  </li>
                ))}
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
