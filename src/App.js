import React, { useState } from "react";
import "./App.css";
import Fig from "./components/Fig";

function App() {
  const [happiness, setHappiness] = useState(50); // Start with a default happiness level

  const handleWalk = () => {
    setHappiness((prevHappiness) => prevHappiness + 10); // Increase happiness by 10
  };

  return (
    <div className="app-container">
      <h1>Welcome to Fig's Walk!</h1>
      <Fig happiness={happiness} onWalk={handleWalk} />
    </div>
  );
}

export default App;
