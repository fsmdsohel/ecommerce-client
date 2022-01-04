import React from "react";
import { Col, Row } from "react-bootstrap";
import "./CartItems.css";

const CartItems = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <div className="">
            <div className="Bag-box">
              <h1 className="YOUR-BAG">YOUR BAG</h1>
              <h3 className="TOTAL-items">
                TOTAL (2 items) <span className="fw-bold">€383.55</span>
              </h3>
            </div>
            <div className="Box ">
              <div className="item-box mb-5 row">
                <div className="col-4">image</div>
                <div className="col-8">
                  <h1>box-2</h1>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="order-box">
            <button className="Checkout">
              <span className="Checkout-box">Checkout</span>
              <span className="right-arrow">
                <i className="fas fa-arrow-right"></i>
              </span>
            </button>
            <div id="item-box">
              <h1>box-3</h1>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CartItems;
