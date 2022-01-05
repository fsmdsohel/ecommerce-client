import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navber from "./components/Shared/Navber/Navber";
import NotFound from "./components/Shared/NotFound/NotFound";
import CartItems from "./components/Shop/CartItems/CartItems";
import ProductDetails from "./components/Shop/ProductDetails/ProductDetails";

function App() {
  axios.defaults.baseURL =
    "https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/";
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Container fluid>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route
              path="/productDetails/:itemId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/cartItems" element={<CartItems />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
