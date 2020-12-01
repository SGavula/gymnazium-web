import React from "react";
import Aktuality from "../components/Aktuality";
import Akcie from "../components/Akcie";
import "./css/Section2.css";

function Section2() {
  return (
    <div className="Section2">
      <Aktuality />
      <Akcie />
    </div>
  );
}

export default Section2;