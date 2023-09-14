import React from "react";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./FamilyDetails.scss";

const mamuList = [
  {
    name: "Fakhre Mateen",
    education: "B.Tech in Civil Engineering, Jami Millia Islamia, New Delhi",
    workAt: "Senior Project Engineer",
  },
  {
    name: "Fakhre Mubeen",
    education: "B.Tech in Civil Engineering, Jami Millia Islamia, New Delhi",
    workAt: "Senior Project Engineer, KEO International Consultant, Qatar.",
  },
];

const unclesList = [
  {
    name: "Mohd Asrarul Haque",
    education: "Graduate",
    workAt: "Business, Mumbai",
  },
  {
    name: "Mohd Ziaul Haque",
    education:
      "B.Tech in Mechanical Engineering, Jamia Millia Islamia, New Delhi",
    workAt:
      "Tasnee Petrochemical, Al-Jubail, Saudi Arabia as a Mechanical Engineer.",
  },
  {
    name: "Mohd Ashabul Haque",
    education: "M.A. in Arabic from Jamia Millia Islamia",
    workAt:
      "Wholesale Business of Laptop & Desktop named Computer's World in New Delhi.",
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
              <h4 className="p-text">
                <span>Father: </span>Mohd Ehteshamul Haque
              </h4>
              <p className="p-text">
                <span>Education: </span>Gradutated from L.S. Collage,
                Muzaffarpur
              </p>
              <p className="p-text">
                <span>Work at: </span>MNC IT Company, TT Global-Indian Branch
                Name-Taj Computer Solution pvt ltd, N.Delhi
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
                    <span>Work at: </span>
                    {uncle.workAt}
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
                Retired Government officer from Bihar Irrigation department
              </p>
              <p className="p-text">
                <span>Address: </span>Madhuban Bajpatti, Sitmarhi.
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
                    <span>Work at: </span>
                    {uncle.workAt}
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
