import toast from "react-hot-toast";
import { setCart } from "./LocalStorage";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newCart = [...state.cart, { ...action.payload, qty: 1 }];
      setCart(newCart);
      toast.success("Successfully Cart Added!");
      return {
        ...state,
        cart: newCart,
      };
    case "LOAD_CART_DATA":
      return {
        cart: action.payload,
      };
    case "REMOVE_FROM_CART":
      const rmCart = state.cart.filter((item) => item.id != action.payload.id);
      setCart(rmCart);
      return {
        ...state,
        cart: rmCart,
      };
    case "RESET_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
