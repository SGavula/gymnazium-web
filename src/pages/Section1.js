import React from "react";
import CardSchool from "../components/CardSchool";
import "./css/Section1.css";

function Section1() {
  return (
    <div className="Section1">
         <h2>Čtyři důvody, proč studovat na naší škole</h2>
         <div class="Cards">
          <CardSchool title="Lorem ipsum 1" text="lorem ipsum, lorem ipsum dolor" image="img/ikona1.svg" />
          <CardSchool title="Lorem ipsum 2" text="lorem ipsum, lorem ipsum dolor" image="img/ikona2.svg" />
          <CardSchool title="Lorem ipsum 3" text="lorem ipsum, lorem ipsum dolor" image="img/ikona3.svg" />
          <CardSchool title="Lorem ipsum 4" text="lorem ipsum, lorem ipsum dolor" image="img/ikona4.svg" />
         </div>
         <button>Jak se stát studentem?</button>
    </div>
  );
}

export default Section1;