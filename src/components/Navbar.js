import React, {useState} from "react";
import "./css/Navbar.css";

function Navbar() {

    const [menu, setMenu] = useState(false);

    let navMenu;

    if(menu === true) {
      navMenu = <ul className="Nav">
        <i className="fas fa-times Close" onClick={() => setMenu(!menu)}></i>
        <li>
          <a href="#Section1" onClick={() => setMenu(!menu)}>Proč studovat na naší škole</a>
        </li>

        <li>
          <a href="#Aktuality" onClick={() => setMenu(!menu)}>Aktuality</a>
        </li>

        <li>
          <a href="#Akcie" onClick={() => setMenu(!menu)}>Nadchazející akce</a>
        </li>

        <li>
          <a href="#Section3" onClick={() => setMenu(!menu)}>Sponzoři</a>
        </li>
      </ul>;
    }

  return (
    <div className="Navbar">
      <img className="image" src="img/logo.svg" alt="" />
      <div>
        <i className="fas fa-search"></i>
        <i className="fas fa-bars" onClick={() => setMenu(!menu)}></i>
      </div>
      {navMenu}
    </div>
  );
}

export default Navbar;