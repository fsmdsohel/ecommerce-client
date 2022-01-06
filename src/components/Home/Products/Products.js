import React from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ allProducts }) => {
  return (
    <>
      <Row xs={1} md={2} lg={4} className="g-3 m-5">
        {allProducts.length === 0 ? (
          <h4>Product Not Found</h4>
        ) : (
          allProducts.map((productItem, index) => {
            return (
              <Product key={productItem.itemId} data={productItem}></Product>
            );
          })
        )}
      </Row>
    </>
  );
};

export default Products;
