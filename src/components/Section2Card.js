import React from "react";
import "./css/Section2Card.css";

function Section2Card({title, text}) {
  return (
    <div className="Section2Card">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Section2Card;