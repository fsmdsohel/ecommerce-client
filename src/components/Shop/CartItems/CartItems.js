import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CartState } from "../../../context/Context";
import "./CartItems.css";

const CartItems = () => {
  const {
    state: { cart },
    product,
  } = CartState();
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product.length !== 0 && cart.length !== 0) {
      let setCart = [];
      let price = 0;
      let qtyNum = [];
      cart.forEach((cartItem) => {
        const findData = product.find(
          (productItem) => productItem.itemId === cartItem.id
        );
        price = price + findData.currentPrice;
        setCart.push({
          price: findData.currentPrice,
          productName: findData.displayName,
          picture: findData.picture,
          size: cartItem.size,
          quantity: cartItem.qty,
          id: cartItem.id,
        });
        qtyNum.push(cartItem.qty);
      });
      setTotalPrice(price);
      setCartData(setCart);
    }
  }, [cart, product]);

  const handleQtyInput = (id, size, smb) => {
    let modifiredData = [];
    if (smb === "+") {
      cartData.forEach((pd) => {
        if (pd.id === id && pd.size === size) {
          if (pd.quantity < 100) {
            let val = pd.quantity + 1;
            pd.quantity = val;
          } else {
            alert("limit cross");
          }
        }
        modifiredData.push(pd);
      });
    } else if (smb === "-") {
      cartData.forEach((pd) => {
        if (pd.id === id && pd.size === size) {
          if (pd.quantity > 1) {
            let val = pd.quantity - 1;
            pd.quantity = val;
          } else {
            alert("limit cross");
          }
        }
        modifiredData.push(pd);
      });
    } else {
      cartData.forEach((pd) => {
        if (pd.id === id && pd.size === size) {
          if (parseInt(smb)) {
            let val = parseInt(smb);
            pd.quantity = val;
          } else {
            alert("Minimum 1 value must have ");
          }
        }
        modifiredData.push(pd);
      });
    }
    setCartData(modifiredData);
  };

  return (
    <>
      <Row>
        <Col xs={12} md={6}>
          <div className="">
            <div className="Bag-box">
              <h1 className="YOUR-BAG">YOUR BAG</h1>
              <h3 className="TOTAL-items">
                TOTAL ({cartData.length}){" "}
                <span className="fw-bold">€{totalPrice.toFixed(2)}</span>
              </h3>
            </div>
            {cartData.map((pditem, ind) => {
              const size = pditem.size.toLowerCase();
              const pdsize =
                size === "m"
                  ? "MEDIUM"
                  : size === "s"
                  ? "SMALL"
                  : size === "xs"
                  ? "EXTRA SMALL"
                  : size === "l"
                  ? "LARGE"
                  : size === "xl"
                  ? "EXTRA SMALL"
                  : "2x EXTRA SMALL";
              return (
                <div key={ind + "53489"} className="Box ">
                  <div className="item-box row">
                    <div className="col-4">
                      <img className="img-fluid" src={pditem.picture} alt="" />
                    </div>
                    <div className="col-8">
                      <div className="py-3">
                        <div className="d-flex justify-content-between">
                          <h3 className="fw-bolder">{pditem.productName}</h3>
                          <h3 className="fw-bolder">€{pditem.price}</h3>
                        </div>
                        <h4 className="fw-normal">SIZE: {pdsize}</h4>
                        <div className="d-flex justify-content-between my-5">
                          <div
                            className="btn-group mr-2"
                            role="group"
                            aria-label="Second group"
                          >
                            <button
                              type="button"
                              className="btn btn-secondary fs-4 py-0"
                              onClick={() =>
                                handleQtyInput(pditem.id, pditem.size, "-")
                              }
                            >
                              -
                            </button>

                            <input
                              onChange={(e) =>
                                handleQtyInput(
                                  pditem.id,
                                  pditem.size,
                                  e.target.value
                                )
                              }
                              value={pditem.quantity}
                              type="number"
                              className="btn btn-outline-secondary size-input"
                            />
                            <button
                              type="button"
                              className="btn btn-secondary fs-4 py-0"
                              onClick={(e) =>
                                handleQtyInput(pditem.id, pditem.size, "+")
                              }
                            >
                              +
                            </button>
                          </div>
                          <div className="btn btn-danger">Remove</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
