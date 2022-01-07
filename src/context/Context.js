import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getCart } from "./LocalStorage";
import { cartReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [product, setProduct] = useState([]);

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  useEffect(() => {
    const getData = getCart();
    if (getData) {
      dispatch({
        type: "LOAD_CART_DATA",
        payload: getData,
      });
    }

    axios.get("/prod/items").then((res) => {
      setProduct(res.data);
    });
  }, []);

  console.log(state);
  return (
    <Cart.Provider value={{ state, dispatch, product }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
