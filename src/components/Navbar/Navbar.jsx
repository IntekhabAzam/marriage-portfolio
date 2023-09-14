import React from "react";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="app__navbar">
        <div style={{ textAlign: "center" }}>
          <img src={images.header} alt="Header" className="header-image" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
