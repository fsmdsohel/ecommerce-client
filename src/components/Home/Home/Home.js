import React from "react";
import Catagories from "../Catagories/Catagories";
import Collections from "../Collections/Collections";
import Products from "../Products/Products";
import Tags from "../Tags/Tags";

const Home = () => {
  return (
    <div>
      <Collections />
      <Catagories />
      <Tags />
      <Products />
    </div>
  );
};

export default Home;
