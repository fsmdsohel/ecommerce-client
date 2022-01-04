import React from "react";
import "./Catagories.css";
const Catagories = () => {
  return (
    <div>
      <h1 className="titles-style mt-4">CATAGORIES</h1>
      <div className="catagories mt-3">
        <button className="catagories-btn" id="catagories-btn">
          All
        </button>
        <button className="catagories-btn ms-2">Mens</button>
        <button className="catagories-btn ms-2">Women</button>
        <button className="catagories-btn ms-2">Shorts</button>
      </div>
    </div>
  );
};

export default Catagories;
