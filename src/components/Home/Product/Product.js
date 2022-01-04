import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ data }) => {
  const { itemId, displayName, categoryId, picture, currentPrice } = data;

  return (
    <>
      <Col>
        <Link className="product-item" to={`/productDetails/${itemId}`}>
          <Card>
            <figure>
              <Card.Img className="image" variant="top" src={picture} />
            </figure>
            <Card.Body>
              <p className="categoryId">{categoryId.toUpperCase()}</p>
              <Card.Title className="displayName">
                {displayName.toUpperCase()}
              </Card.Title>
              <Card.Text className="currentPrice fw-bold">
                € {currentPrice}
              </Card.Text>
              <p className="product-color">3 color</p>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
};

export default Product;
