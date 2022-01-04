import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=winter2020&tag=sports"
    )
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-3 m-5">
        {allProducts.map((productItem, index) => {
          return <Product key={index} data={productItem}></Product>;
        })}
      </Row>
    </>
  );
};

export default Products;
