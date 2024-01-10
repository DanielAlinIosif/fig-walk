import React from "react";
import "./Fig.css";

const Fig = ({ happiness, onWalk }) => {
  return (
    <div className="fig-container">
      <h1>Fig's Happiness: {happiness}</h1>
      <button onClick={onWalk}>Take Fig on a Walk</button>
    </div>
  );
};

export default Fig;
