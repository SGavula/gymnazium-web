import React, {useState} from "react";
import MoreBtn from "./MoreBtn";
import Section2Card from "./Section2Card";
import "./css/Aktuality.css";

function Aktuality() {
    const [items, setItems] = useState([
        {id: 1, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
        {id: 2, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
        {id: 3, title: "Lorem ipsum", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat,"},
      ]);
    return (
        <div className="Aktuality">
            <h2>Aktuality</h2>
            <div className="row">
                {items.map(item => (
                   <Section2Card key={item.id} title={item.title} text={item.text} /> 
                ))}
            </div>
            <MoreBtn btnText="Více aktualit" />
        </div>
    );
}

export default Aktuality;
