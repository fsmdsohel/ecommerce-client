import { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const Product = () => {
  const { itemId } = useParams();
  const [productDetails, setproductDetails] = useState({});
  useEffect(() => {
    if (itemId) {
      fetch(
        "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=winter2020&tag=sports"
      )
        .then((res) => res.json())
        .then((data) => {
          const details = data.find((item) => item.itemId == itemId);
          setproductDetails({
            ...details,
            images: [
              details.picture,
              details.picture,
              details.picture,
              details.picture,
            ],
          });
        });
    }
  }, [itemId]);
  return (
    <>
      <Row>
        <Col xs={12} md={8}>
          <Row className="other-device g-4 mt-3 ms-4 me-4">
            {productDetails?.images?.map((img) => (
              <Col lg={6} className="">
                <img className="item-image img-fluid" src={img} alt="" />
              </Col>
            ))}
          </Row>
          <Carousel className="mobile-device">
            {productDetails?.images?.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={4}>
          <div className="mt-5">
            <h2 className="product-name">
              {productDetails?.displayName?.toUpperCase()}
            </h2>
            <h4 className="hoddies">
              SHOP / {productDetails?.categoryId?.toUpperCase()}
            </h4>
            <p className="orginal-price">€{productDetails?.originalPrice}</p>
            <p className="current-price">
              <span className="save">Save 29%</span> €
              {productDetails?.currentPrice}
            </p>

            <h5 className="fw-bold">Select Size</h5>
            <div className="product-size mt-3">
              {productDetails?.availableSizes?.map((item) => (
                <button className="btn-size">{item}</button>
              ))}
            </div>

            <button className="addtoBag mt-3">Add to Bag</button>
            <br />
            <button className="favourite mt-3">Favourite</button>
            <h5 className="fw-bold mt-5">Description</h5>
            <p className="description">{productDetails?.description}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Product;
