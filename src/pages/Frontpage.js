import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "./css/Frontpage.css";

function Frontpage() {
  return (
    <div className="Frontpage">
        <Navbar />
        <HeroSection />
    </div>
  );
}

export default Frontpage;