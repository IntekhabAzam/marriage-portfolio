import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./FamilyDetails.scss";

const mamuList = [
  {
    name: "Fakhre Mateen",
    education: "B.Tech in Civil Engineering, Jami Millia Islamia, New Delhi.",
    Profession: "Senior Project Engineer, currently working in Mumbai.",
  },
  {
    name: "Fakhre Mubeen",
    education: "B.Tech in Civil Engineering, Jami Millia Islamia, New Delhi.",
    Profession: "Senior Project Engineer, KEO International Consultant, Qatar.",
  },
];

const unclesList = [
  {
    name: "Mohd Asrarul Haque",
    education: "Graduate.",
    Profession: "Business in Mumbai.",
  },
  {
    name: "Mohd Ziaul Haque",
    education:
      "B.Tech in Mechanical Engineering, Jamia Millia Islamia, New Delhi.",
    Profession:
      "Tasnee Petrochemical, Al-Jubail, Saudi Arabia as a Mechanical Engineer.",
  },
  {
    name: "Mohd Ashabul Haque",
    education: "M.A. in Arabic from Jamia Millia Islamia.",
    Profession:
      "Wholesale Business of Laptop & Desktop named Computer's World in New Delhi.",
  },
];

const parents = [
  {
    name: "Mohd Ehteshamul Haque (Juhi)",
    relationship: "Abbu",
    education: "Gradutated from L.S. Collage, Muzaffarpur.",
    Profession:
      "Working in MNC IT company TT Global India Branch - Taj Computer Solution pvt ltd, N.Delhi.",
  },
  {
    name: "Nikhat Parween",
    relationship: "Ammi",
    education: "Intermediate.",
    Profession: "House Wife.",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Family Details</h2>

      <div className="app__family-container">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__family-info"
        >
          <div className="app__family-badge">
            <div className="primary-member-card">
              <h4 className="p-text">
                <span>Dada: </span>Mohd Anwarul Haque
              </h4>
              <p className="p-text">
                <span>Address: </span>Vill-Balasath, Dist-Sitamarhi, Bihar
              </p>
            </div>
            <div className="child-member-card">
              {parents.map((parent, index) => (
                <div className="parentCard">
                  <h4 className="p-text">
                    <span>{parent.relationship}: </span>
                    {parent.name}
                  </h4>
                  <p className="p-text">
                    <span>Education: </span>
                    {parent.education}
                  </p>
                  <p className="p-text">
                    <span>Profession: </span>
                    {parent.Profession}
                  </p>
                </div>
              ))}
            </div>
            <div className="child-member-card">
              <h4 className="p-text">
                <span>Aapi: </span>Darakhshan Nikhat (Nishat)
              </h4>
              <p className="p-text">
                <span>Education: </span>B.Com, MDDM College, Muzaffarpur.
              </p>
              <p className="p-text">
                <span>Married to: </span>Tausif Alam, Parwaha, Sitamarhi, Bihar.
              </p>
              <p className="p-text">
                <span>Profession: </span>HPCL Rajasthan Refinery Limited as
                Electrical Engineer.
              </p>
            </div>
            <div className="child-member-card">
              <h3 className="p-text">Paternal Uncles (Chacha)</h3>
              {unclesList.map((uncle, index) => (
                <div className="uncle-details" key={index}>
                  <h4 className="p-text">{uncle.name}</h4>
                  <p className="p-text">
                    <span>Education: </span>
                    {uncle.education}
                  </p>
                  <p className="p-text">
                    <span>Profession: </span>
                    {uncle.Profession}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <hr style={{ borderColor: "white", marginTop: "1rem" }} />
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__family-info"
        >
          <div className="app__family-badge">
            <div className="primary-member-card">
              <h4 className="p-text">
                <span>Nana: </span>Abul Kalam Azad
              </h4>
              <p className="p-text">
                Retired Government officer from Bihar Irrigation department,
                Samastipur division.
              </p>
              <p className="p-text">
                <span>Address: </span>Vill-Madhuban, Bajpatti, Sitmarhi, Bihar.
              </p>
            </div>
            <div className="child-member-card">
              <h3 className="p-text">Maternal Uncles (Mamu)</h3>
              {mamuList.map((uncle, index) => (
                <div className="uncle-details" key={index}>
                  <h4 className="p-text">{uncle.name}</h4>
                  <p className="p-text">
                    <span>Education: </span>
                    {uncle.education}
                  </p>
                  <p className="p-text">
                    <span>Profession: </span>
                    {uncle.Profession}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__family"),
  "family",
  "app__primarybg"
);
