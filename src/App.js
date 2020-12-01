import React from "react";
import "./App.css";
import Frontpage from "./pages/Frontpage";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";

function App() {
  return (
    <div className="App">
      <Frontpage />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
