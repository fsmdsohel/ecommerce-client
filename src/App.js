import "./App.css";
import Navber from "./components/Shared/Navber/Navber";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/Shared/NotFound/NotFound";
import Home from "./components/Home/Home/Home";
import ProductDetails from "./components/Shop/ProductDetails/ProductDetails";
import { Container } from "react-bootstrap";
import CartItems from "./components/Shop/CartItems/CartItems";

function App() {
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
