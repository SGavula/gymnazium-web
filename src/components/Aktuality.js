import React from "react";
import MoreBtn from "./MoreBtn";
import Section2Card from "./Section2Card";
import "./css/Aktuality.css";

function Aktuality() {
    return (
        <div className="Aktuality">
            <h2>Aktuality</h2>
            <div class="row">
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
            </div>
            <MoreBtn btnText="Více aktualit" />
        </div>
    );
}

export default Aktuality;
