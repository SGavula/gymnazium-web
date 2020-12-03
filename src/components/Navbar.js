import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img className="image" src="img/logo.svg" alt="" />
      <div>
        <i className="fas fa-search "></i>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;