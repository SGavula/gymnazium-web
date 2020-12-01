import React from "react";
import "./css/CardSchool.css";

function CardSchool({title, text, image}) {
  return (
    <div className="CardSchool">
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={image} alt=""/>
    </div>
  );
}

export default CardSchool;