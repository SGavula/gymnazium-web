import React from "react";
import "./css/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <img className="image" src="img/logo.svg" alt="" />
      <div>
        <i class="fas fa-bars"></i>
        <i class="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Navbar;