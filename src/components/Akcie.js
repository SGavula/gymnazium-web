import React from "react";
import MoreBtn from "./MoreBtn";
import Section2Card from "./Section2Card";
import "./css/Akcie.css";

function Akcie() {
    return (
        <div className="Akcie">
            <h2>Nadchazející akce</h2>
            <div class="row">
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
                <Section2Card title="Lorem ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent arcu neque, varius id urna placerat," />
            </div>
            <MoreBtn btnText="Více akcí" />
        </div>
    );
}

export default Akcie;
