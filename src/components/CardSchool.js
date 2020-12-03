import React from "react";
import "./css/CardSchool.css";

function CardSchool({number, title, text, image}) {
  return (
    <div className="CardSchool">
        <div className="Number">
          {number}
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={image} alt=""/>
    </div>
  );
}

export default CardSchool;