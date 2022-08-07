import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
const cart_reducer = (state = { user: {}, cart: [] }, action) => {
  let cart = [...state.cart];
  let user = { ...state.user };
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, cart: action.payload.cart };
    case "ADD_TO_CART":
      let id = action.payload.id;
      let isProductPresentInCart = cart.find((product) => product.id === id);
      if (isProductPresentInCart) {
        cart = cart.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else cart.push({ ...action.payload, quantity: 1 });
      if (user.id) setDoc(doc(db, "users", user.id), { ...user, cart: cart });
      return { ...state, cart: cart };
    case "REMOVE_FROM_CART":
      let removalId = action.payload;
      let product = cart.find((product) => product.id === removalId);
      if (product.quantity > 1) {
        cart = cart.map((product) =>
          product.id === removalId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        );
      } else cart = cart.filter((product) => product.id !== removalId);
      return {
        ...state,
        cart: cart,
      };
    case "UPDATE_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

export default cart_reducer;
