import React from "react";
import "./Collections.css";

const Collections = () => {
  return (
    <div>
      <h1 className="titles-style">COLLECTIONS</h1>
      <div className="collections mt-3">
        <button className="collections-btn" id="collections-btn">
          OUTDOOR
        </button>
        <button className="collections-btn ">SUMMER</button>
        <button className="collections-btn ">WINTER</button>
        <button className="collections-btn ">CASUAL</button>
        <button className="collections-btn ">SKIING</button>
      </div>
    </div>
  );
};

export default Collections;
