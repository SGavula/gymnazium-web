import React from "react";
import "./css/HeroSection.css";

function Hero() {
  return (
    <div className="Hero">
        <div className="Heading">
            <h1>Vitajte na stránkách Gymnázia Nad Štolou</h1>
            <p>„Studium před zlatem"</p>   
        </div>
          <ul className="Wrapper-down">
              <li>EŽK</li>
             <li>Jídelníček</li>
              <li>Rozvrhy</li>
             <li>Suplování</li>
         </ul>
    </div>
  );
}

export default Hero;