import React from "react";
import "./Tags.css";

const Tags = () => {
  return (
    <div>
      <h1 className="titles-style mt-4">TAGS</h1>
      <div className="tags">
        <button className="tags-btn" id="tags-btn">
          All
        </button>
        <button className="tags-btn ms-2">Sportswear</button>
        <button className="tags-btn ms-2">Casualwear</button>
      </div>
      <div id="horizental-line"></div>
    </div>
  );
};

export default Tags;
