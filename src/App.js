import React from "react";
import "./App.css";
import Frontpage from "./pages/Frontpage";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App">
      <Frontpage />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
