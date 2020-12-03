import React, { useState } from "react";
import CardSchool from "../components/CardSchool";
import "./css/Section1.css";

function Section1() {
  const [items, setItems] = useState([
    {number: "1", title: "Lorem ipsum 1", text: "lorem ipsum, lorem ipsum dolor", image: "img/ikona1.svg", id: 1},
    {number: "2", title: "Lorem ipsum 2", text: "lorem ipsum, lorem ipsum dolor", image: "img/ikona2.svg", id: 2},
    {number: "3", title: "Lorem ipsum 3", text: "lorem ipsum, lorem ipsum dolor", image: "img/ikona3.svg", id: 3},
    {number: "4", title: "Lorem ipsum 4", text: "lorem ipsum, lorem ipsum dolor", image: "img/ikona4.svg", id: 4},
  ]);

  return (
    <div className="Section1">
         <h2>Čtyři důvody, proč studovat na naší škole</h2>
         <div className="Cards">
            {
              items.map(item => (
                <CardSchool number={item.number} title={item.title} text={item.text} image={item.image} key={item.id}/>
              ))
            }
         </div>
         <button>Jak se stát studentem?</button>
    </div>
  );
}

export default Section1;