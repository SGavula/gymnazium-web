import React from "react";
import ContactCom from "./ContactCom";
import "./css/Contacts.css";

function Contacts() {
    return (
        <div className="Contacts">
            <div className="Wrapper">
                <h5>Gymnázium Nad Štolou</h5>
                <ContactCom name="Telefon" text="+420 603 478 983" />
                <ContactCom name="E-mail" text="info@casurgis.cz" />
                <ContactCom name="Adresa" text="Nad Štolou 1, Praha 7" />
                <ul className="SocialMedia">
                    <li>
                        <a href="https://ww.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contacts;
