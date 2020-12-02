import React from "react";
import "./css/ContactCom.css";

function ContactCom({name, text}) {
    return (
        <div className="ContactCom">
            <ul>
                <li>{name}</li>
                <li>{text}</li>
            </ul>
        </div>
    );
}

export default ContactCom;
