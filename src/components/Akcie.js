import React, {useState} from "react";
import Carousel from 'react-elastic-carousel';
import MoreBtn from "./MoreBtn";
import Section2Card from "./Section2Card";
import "./css/Akcie.css";

function Akcie() {
    const [items, setItems] = useState([
        {id: 1, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
        {id: 2, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
        {id: 3, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
      ]);

    return (
        <div className="Akcie" id="Akcie">
            <h2>Nadchazející akce</h2>
            <div className="Row">
                {items.map(item => (
                   <Section2Card key={item.id} title={item.title} text={item.text} /> 
                ))}
            </div>

            <Carousel className="Carousel">
                {items.map(item => (
                   <Section2Card key={item.id} title={item.title} text={item.text} /> 
                ))}
            </Carousel>
            <MoreBtn btnText="Více akcí" />
        </div>
    );
}

export default Akcie;
